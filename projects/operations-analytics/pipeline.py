"""Reproducible ETL and operational metrics over synthetic CSV inputs."""
from __future__ import annotations

import argparse
import csv
import hashlib
import json
from collections import Counter
from datetime import datetime
from decimal import Decimal, InvalidOperation
from pathlib import Path

ROOT = Path(__file__).resolve().parent
REQUIRED = {"id", "opened_at", "closed_at", "category", "status", "amount"}
STATUSES = {"open", "closed"}


def timestamp(value: str) -> datetime:
    result = datetime.fromisoformat(value)
    if result.tzinfo is None or result.utcoffset() is None:
        raise ValueError("timestamp must include a timezone")
    return result


def read_csv(path: Path) -> tuple[list[dict], list[str]]:
    with path.open(encoding="utf-8", newline="") as stream:
        reader = csv.DictReader(stream)
        if not REQUIRED.issubset(reader.fieldnames or []):
            raise ValueError("missing required CSV columns")
        return list(reader), reader.fieldnames or []


def transform(rows: list[dict], as_of: datetime) -> tuple[list[dict], list[dict], dict]:
    """Reject ambiguous keys and invalid rows; preserve missing amounts as null."""
    if as_of.tzinfo is None or as_of.utcoffset() is None:
        raise ValueError("as_of must include a timezone")
    ids = Counter(str(row.get("id", "")).strip() for row in rows)
    accepted, rejected = [], []
    for line, row in enumerate(rows, 2):
        key = str(row.get("id", "")).strip()
        try:
            if not key or ids[key] != 1:
                raise ValueError("empty_or_duplicate_id")
            opened = timestamp(row["opened_at"])
            closed = timestamp(row["closed_at"]) if row["closed_at"] else None
            if opened > as_of or (closed and closed > as_of):
                raise ValueError("future_event")
            if closed and closed < opened:
                raise ValueError("negative_duration")
            status = row["status"].strip().lower()
            if status not in STATUSES or (status == "closed") != (closed is not None):
                raise ValueError("status_date_mismatch")
            category = row["category"].strip()
            if not category:
                raise ValueError("missing_category")
            amount = Decimal(row["amount"]) if row["amount"].strip() else None
            if amount is not None and (not amount.is_finite() or amount < 0 or amount.as_tuple().exponent < -2):
                raise ValueError("invalid_amount")
            duration = (closed - opened).total_seconds() / 3600 if closed else None
            accepted.append({
                "id": key, "opened_at": opened.isoformat(),
                "closed_at": closed.isoformat() if closed else "",
                "category": category, "status": status,
                "amount": str(amount) if amount is not None else "",
                "duration_hours": duration if duration is not None else "",
            })
        except (ValueError, InvalidOperation, TypeError, KeyError) as error:
            rejected.append({"line": line, "id": key, "reason": str(error) or "invalid_row"})
    durations = [float(row["duration_hours"]) for row in accepted if row["status"] == "closed"]
    amounts = [Decimal(row["amount"]) for row in accepted if row["amount"] != ""]
    metrics = {
        "as_of": as_of.isoformat(), "input_rows": len(rows), "accepted_rows": len(accepted),
        "rejected_rows": len(rejected), "open_count": sum(row["status"] == "open" for row in accepted),
        "closed_count": len(durations),
        "average_closed_hours": round(sum(durations) / len(durations), 4) if durations else None,
        "sla_target_hours": 48,
        "sla_on_time_count": sum(value <= 48 for value in durations),
        "sla_closed_denominator": len(durations),
        "sla_on_time_rate": round(sum(value <= 48 for value in durations) / len(durations), 4) if durations else None,
        "known_amount_sum": str(sum(amounts, Decimal("0.00"))) if amounts else None,
        "missing_amount_count": sum(row["amount"] == "" for row in accepted),
        "category_counts": dict(sorted(Counter(row["category"] for row in accepted).items())),
    }
    return accepted, rejected, metrics


def run(source: Path, output: Path, as_of: datetime) -> dict:
    if source.resolve().is_relative_to(output.resolve()):
        raise ValueError("input must be outside the output directory")
    rows, _ = read_csv(source)
    accepted, rejected, metrics = transform(rows, as_of)
    output.mkdir(parents=True, exist_ok=True)
    fields = ["id", "opened_at", "closed_at", "category", "status", "amount", "duration_hours"]
    with (output / "clean.csv").open("w", encoding="utf-8", newline="") as stream:
        writer = csv.DictWriter(stream, fieldnames=fields)
        writer.writeheader()
        writer.writerows(accepted)
    for name, value in (("metrics.json", metrics), ("rejected.json", rejected)):
        (output / name).write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    manifest = {
        "input_sha256": hashlib.sha256(source.read_bytes()).hexdigest(),
        "as_of": as_of.isoformat(), "engine_sha256": hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
        "artifacts": {name: hashlib.sha256((output / name).read_bytes()).hexdigest()
                      for name in ("clean.csv", "metrics.json", "rejected.json")},
    }
    (output / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    return metrics


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, default=ROOT / "data/events.csv")
    parser.add_argument("--output", type=Path, default=ROOT / "build")
    parser.add_argument("--as-of", default="2025-02-01T00:00:00+00:00")
    args = parser.parse_args()
    metrics = run(args.input, args.output, timestamp(args.as_of))
    print(json.dumps(metrics, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
