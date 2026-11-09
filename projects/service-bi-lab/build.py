"""Build a synthetic service-event star schema and export SQL results."""
from __future__ import annotations

import argparse
import csv
import random
import sqlite3
from contextlib import closing
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CATEGORIES = ["Support", "Delivery", "Access"]
CHANNELS = ["Web", "Email", "Phone"]


def generate() -> list[dict]:
    rng = random.Random(2718)
    rows = []
    base = datetime(2025, 1, 1, tzinfo=timezone.utc)
    for index in range(120):
        opened = base + timedelta(days=rng.randrange(31), hours=rng.randrange(24))
        duration = rng.choice([6, 12, 24, 36, 48, 60, 72, 96])
        is_open = index % 5 == 0
        closed = None if is_open else opened + timedelta(hours=duration)
        rows.append({"id": f"DEMO-{index + 1:04d}", "opened_at": opened.isoformat(),
                     "closed_at": closed.isoformat() if closed else "", "category": rng.choice(CATEGORIES),
                     "channel": rng.choice(CHANNELS), "status": "open" if is_open else "closed",
                     "duration_hours": "" if is_open else duration})
    return rows


def populate(db: sqlite3.Connection, rows: list[dict]) -> None:
    db.executescript((ROOT / "sql/schema.sql").read_text(encoding="utf-8"))
    db.executemany("INSERT INTO dim_category VALUES (?,?)", enumerate(CATEGORIES, 1))
    db.executemany("INSERT INTO dim_channel VALUES (?,?)", enumerate(CHANNELS, 1))
    start = date(2025, 1, 1)
    days = [start + timedelta(days=offset) for offset in range(46)]
    db.executemany("INSERT INTO dim_date VALUES (?,?,?)", [(d.isoformat(), d.month, d.weekday()) for d in days])
    for row in rows:
        opened = datetime.fromisoformat(row["opened_at"])
        closed = datetime.fromisoformat(row["closed_at"]) if row["closed_at"] else None
        if opened.tzinfo is None or (closed and closed.tzinfo is None):
            raise ValueError("timestamps require a timezone")
        if closed and closed < opened:
            raise ValueError("negative duration")
        if row["status"] not in ("open", "closed") or (row["status"] == "closed") != (closed is not None):
            raise ValueError("status/date mismatch")
        hours = (closed - opened).total_seconds() / 3600 if closed else None
        db.execute("INSERT INTO fact_event VALUES (?,?,?,?,?,?,?,?)", (
            row["id"], opened.astimezone(timezone.utc).date().isoformat(),
            closed.astimezone(timezone.utc).date().isoformat() if closed else None,
            CATEGORIES.index(row["category"]) + 1, CHANNELS.index(row["channel"]) + 1,
            row["status"], hours, None if hours is None else int(hours <= 48)))
    db.commit()


def query(db: sqlite3.Connection, filename: str) -> tuple[list[str], list[tuple]]:
    cursor = db.execute((ROOT / "sql" / filename).read_text(encoding="utf-8"))
    return [column[0] for column in cursor.description], cursor.fetchall()


def csv_write(path: Path, columns, rows) -> None:
    with path.open("w", encoding="utf-8", newline="") as stream:
        writer = csv.writer(stream)
        writer.writerow(columns)
        writer.writerows(rows)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=ROOT / "build")
    args = parser.parse_args()
    output = args.output.resolve()
    if output == ROOT or ROOT.is_relative_to(output):
        parser.error("output must not be the project directory or its ancestor")
    output.mkdir(parents=True, exist_ok=True)
    rows = generate()
    csv_write(output / "events.csv", list(rows[0]), [list(row.values()) for row in rows])
    # Build transactionally in a separate database, then replace only this demo artifact.
    temporary = output / "service.tmp.sqlite"
    if temporary.exists():
        parser.error("temporary database already exists; choose another output directory")
    try:
        with closing(sqlite3.connect(temporary)) as db:
            db.execute("PRAGMA foreign_keys=ON")
            populate(db, rows)
            for filename in ("cohort_metrics.sql", "daily_flow.sql"):
                columns, result = query(db, filename)
                csv_write(output / (Path(filename).stem + ".csv"), columns, result)
        temporary.replace(output / "service.sqlite")
    finally:
        if temporary.exists():
            temporary.unlink()
    print("Created 120 fictional events, SQLite model and two query exports.")


if __name__ == "__main__":
    main()
