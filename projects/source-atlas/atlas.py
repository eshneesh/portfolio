"""CSV source catalog, profiles and join-cardinality diagnostics."""
from __future__ import annotations

import argparse
import csv
import hashlib
import json
import re
import sqlite3
from collections import Counter
from contextlib import closing
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def resolve_input(base: Path, relative: str) -> Path:
    path = base / relative
    if Path(relative).is_absolute() or not path.resolve().is_relative_to(base.resolve()):
        raise ValueError("source path must remain inside the manifest directory")
    if any(p.is_symlink() for p in [path, *path.parents] if p.is_relative_to(base)):
        raise ValueError("symbolic links are not accepted")
    if not path.is_file() or path.stat().st_size > 10 * 1024 * 1024:
        raise ValueError("source must be a file no larger than 10 MiB")
    return path


def read_source(path: Path) -> tuple[list[str], list[dict]]:
    with path.open(encoding="utf-8-sig", newline="") as stream:
        reader = csv.DictReader(stream)
        columns = reader.fieldnames
        if not columns or len(set(columns)) != len(columns) or any(not c.strip() for c in columns):
            raise ValueError("CSV headers must be non-empty and unique")
        rows = list(reader)
    if any(None in row or any(value is None for value in row.values()) for row in rows):
        raise ValueError("CSV row width differs from the header")
    return columns, rows


def profile(columns: list[str], rows: list[dict]) -> dict:
    fields = []
    for column in columns:
        values = [row[column] for row in rows]
        populated = [value for value in values if value.strip()]
        distinct = len(set(populated))
        fields.append({"column": column, "missing": len(values) - len(populated),
                       "distinct_populated": distinct,
                       "candidate_key": bool(rows) and len(populated) == distinct == len(rows)})
    return {"row_count": len(rows), "column_count": len(columns), "columns": fields,
            "duplicate_rows": len(rows) - len({tuple(row[c] for c in columns) for row in rows})}


def relation(child: list[dict], parent: list[dict], child_key: str, parent_key: str) -> dict:
    counts = Counter(row[parent_key] for row in parent if row[parent_key].strip())
    missing = sum(not row[child_key].strip() for row in child)
    orphan = sum(bool(row[child_key].strip()) and row[child_key] not in counts for row in child)
    # Diagnostic SQL-style LEFT JOIN: empty keys are modeled as NULL and never match.
    joined = sum(max(counts.get(row[child_key], 0), 1) if row[child_key].strip() else 1 for row in child)
    return {"child_rows": len(child), "missing_child_keys": missing, "orphan_rows": orphan,
            "duplicate_parent_keys": sum(count > 1 for count in counts.values()),
            "left_join_rows": joined, "fanout_extra_rows": joined - len(child),
            "safe_many_to_one": not any(count > 1 for count in counts.values()) and orphan == 0 and missing == 0}


def quote(identifier: str) -> str:
    return '"' + identifier.replace('"', '""') + '"'


def build(manifest_path: Path, output: Path) -> dict:
    spec = json.loads(manifest_path.read_text(encoding="utf-8"))
    if spec.get("version") != 1 or not isinstance(spec.get("sources"), list) or not spec["sources"]:
        raise ValueError("manifest requires version 1 and non-empty sources")
    catalog, datasets, headers = {}, {}, {}
    input_paths = []
    for item in spec["sources"]:
        name = item["name"]
        if not re.fullmatch(r"[a-z][a-z0-9_]{0,63}", name) or name in datasets:
            raise ValueError("invalid or duplicate source name")
        path = resolve_input(manifest_path.parent, item["path"])
        input_paths.append(path.resolve())
        columns, rows = read_source(path)
        headers[name], datasets[name] = columns, rows
        catalog[name] = {**profile(columns, rows), "sha256": hashlib.sha256(path.read_bytes()).hexdigest()}
    diagnostics = []
    for link in spec.get("relationships", []):
        child, parent = link["child"], link["parent"]
        if link["child_key"] not in headers[child] or link["parent_key"] not in headers[parent]:
            raise ValueError("relationship column does not exist")
        diagnostics.append({**link, **relation(datasets[child], datasets[parent], link["child_key"], link["parent_key"])})
    if any(path.is_relative_to(output.resolve()) for path in input_paths + [manifest_path.resolve()]):
        raise ValueError("output must not contain input files")
    output.mkdir(parents=True, exist_ok=True)
    database = output / "atlas.sqlite"
    # SQLite file is a disposable local demo artifact, not a working data source.
    temporary = output / "atlas.tmp.sqlite"
    if temporary.exists():
        raise ValueError("temporary database already exists")
    try:
        with closing(sqlite3.connect(temporary)) as db, db:
            db.execute("CREATE TABLE meta_catalog (source TEXT PRIMARY KEY, profile_json TEXT NOT NULL)")
            for name, rows in datasets.items():
                columns = headers[name]
                db.execute("CREATE TABLE " + quote("raw_" + name) + " (" + ",".join(quote(c) + " TEXT" for c in columns) + ")")
                db.executemany("INSERT INTO " + quote("raw_" + name) + " VALUES (" + ",".join("?" for _ in columns) + ")",
                               [[row[c] if row[c].strip() else None for c in columns] for row in rows])
                actual = db.execute("SELECT count(*) FROM " + quote("raw_" + name)).fetchone()[0]
                if actual != catalog[name]["row_count"]:
                    raise ValueError("row reconciliation failed")
                db.execute("INSERT INTO meta_catalog VALUES (?,?)", (name, json.dumps(catalog[name])))
        temporary.replace(database)
    finally:
        if temporary.exists():
            temporary.unlink()
    result = {"version": 1, "sources": catalog, "relationships": diagnostics}
    (output / "catalog.json").write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", type=Path, default=ROOT / "data/manifest.json")
    parser.add_argument("--output", type=Path, default=ROOT / "build")
    args = parser.parse_args()
    result = build(args.manifest, args.output)
    print(json.dumps({"sources": len(result["sources"]), "relationships": result["relationships"]}, indent=2))


if __name__ == "__main__":
    main()
