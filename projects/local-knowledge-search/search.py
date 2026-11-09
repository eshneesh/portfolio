"""Offline BM25 retrieval with source citations; no generated answers."""
from __future__ import annotations

import argparse
import hashlib
import json
import math
import re
import sqlite3
from collections import Counter
from contextlib import closing
from pathlib import Path

ROOT = Path(__file__).resolve().parent
STOPWORDS = {"a", "an", "the", "is", "are", "to", "of", "and", "in", "for", "what", "how", "does", "do", "with"}


def tokens(text: str) -> list[str]:
    return [word for word in re.findall(r"[^\W_]+", text.lower(), flags=re.UNICODE)
            if len(word) > 1 and word not in STOPWORDS]


def chunks(path: Path, root: Path) -> list[dict]:
    if path.is_symlink() or not path.resolve().is_relative_to(root.resolve()):
        raise ValueError("document must be a regular file inside the corpus")
    data = path.read_bytes()
    if len(data) > 65536:
        raise ValueError("document exceeds 64 KiB")
    lines = data.decode("utf-8").splitlines()
    source = path.relative_to(root).as_posix()
    result, paragraph, start = [], [], 1
    for line_number, line in enumerate(lines + [""], 1):
        if line.strip():
            if not paragraph:
                start = line_number
            paragraph.append(line)
        elif paragraph:
            text = "\n".join(paragraph)
            chunk_id = hashlib.sha256(f"{source}:{start}:{text}".encode()).hexdigest()[:16]
            result.append({"id": chunk_id, "source": source, "line": start, "text": text,
                           "document_sha256": hashlib.sha256(data).hexdigest()})
            paragraph = []
    return result


def build_index(corpus: Path, database: Path) -> int:
    if not corpus.is_dir():
        raise ValueError("corpus directory does not exist")
    paths = sorted(corpus.glob("*.md"))
    if not paths or len(paths) > 100:
        raise ValueError("corpus must contain 1..100 Markdown documents")
    if database.resolve().is_relative_to(corpus.resolve()):
        raise ValueError("index must be outside the corpus")
    records = [chunk for path in paths for chunk in chunks(path, corpus)]
    if not records:
        raise ValueError("corpus has no non-empty chunks")
    database.parent.mkdir(parents=True, exist_ok=True)
    with closing(sqlite3.connect(database)) as db, db:
        db.execute("CREATE TABLE IF NOT EXISTS chunks (id TEXT PRIMARY KEY, source TEXT, line INTEGER, text TEXT, document_sha256 TEXT)")
        db.execute("DELETE FROM chunks")
        db.executemany("INSERT INTO chunks VALUES (:id,:source,:line,:text,:document_sha256)", records)
    return len(records)


def retrieve(database: Path, query: str, limit: int = 3) -> list[dict]:
    if not database.is_file():
        raise ValueError("index does not exist; run index first")
    if not isinstance(query, str) or len(query) > 2000 or not 1 <= limit <= 20:
        raise ValueError("query limit exceeded")
    terms = set(tokens(query))
    if not terms:
        return []
    with closing(sqlite3.connect(database)) as db:
        db.row_factory = sqlite3.Row
        rows = [dict(row) for row in db.execute("SELECT * FROM chunks ORDER BY source,line")]
    frequencies = [Counter(tokens(row["text"])) for row in rows]
    if not rows:
        return []
    average = sum(sum(freq.values()) for freq in frequencies) / len(rows) or 1
    document_frequency = {term: sum(term in freq for freq in frequencies) for term in terms}
    ranked = []
    for row, freq in zip(rows, frequencies):
        length, score = sum(freq.values()), 0.0
        for term in terms:
            occurrence = freq[term]
            if occurrence:
                inverse = math.log(1 + (len(rows) - document_frequency[term] + .5) / (document_frequency[term] + .5))
                score += inverse * occurrence * 2.5 / (occurrence + 1.5 * (.25 + .75 * length / average))
        if score > 0:
            ranked.append({**row, "score": round(score, 6)})
    return sorted(ranked, key=lambda row: (-row["score"], row["source"], row["line"]))[:limit]


def evaluate(database: Path, cases: list[dict]) -> dict:
    results = []
    for case in cases:
        hits = retrieve(database, case["query"])
        expected = case["source"]
        passed = hits[0]["source"] == expected if expected and hits else not hits and expected is None
        results.append({"query": case["query"], "expected": expected,
                        "actual": hits[0]["source"] if hits else None, "passed": passed})
    return {"case_count": len(results), "passed": sum(row["passed"] for row in results),
            "top1_or_abstention_rate": sum(row["passed"] for row in results) / len(results) if results else None,
            "cases": results}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--database", type=Path, default=ROOT / "build/index.sqlite")
    sub = parser.add_subparsers(dest="command", required=True)
    index = sub.add_parser("index")
    index.add_argument("--corpus", type=Path, default=ROOT / "corpus")
    query = sub.add_parser("query")
    query.add_argument("text")
    sub.add_parser("evaluate")
    args = parser.parse_args()
    if args.command == "index":
        print(json.dumps({"indexed_chunks": build_index(args.corpus, args.database)}))
    elif args.command == "query":
        hits = retrieve(args.database, args.text)
        print(json.dumps({"status": "evidence_found" if hits else "no_evidence", "evidence": hits}, indent=2))
    else:
        result = evaluate(args.database, json.loads((ROOT / "evaluation.json").read_text(encoding="utf-8")))
        print(json.dumps(result, indent=2))
        raise SystemExit(0 if result["passed"] == result["case_count"] else 1)


if __name__ == "__main__":
    main()
