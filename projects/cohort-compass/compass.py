"""Observed customer cohorts and configurable ABC/XYZ on a synthetic monthly panel."""
from __future__ import annotations

import argparse
import csv
import json
import re
from collections import defaultdict
from decimal import Decimal
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def month_index(value: str) -> int:
    if not re.fullmatch(r"\d{4}-(0[1-9]|1[0-2])", value) or not 1 <= int(value[:4]) <= 9999:
        raise ValueError("month must use YYYY-MM")
    return int(value[:4]) * 12 + int(value[5:]) - 1


def month_label(index: int) -> str:
    return f"{index // 12:04d}-{index % 12 + 1:02d}"


def read_rows(path: Path) -> list[dict]:
    with path.open(encoding="utf-8-sig", newline="") as stream:
        reader = csv.DictReader(stream)
        if reader.fieldnames != ["account", "month", "amount"]:
            raise ValueError("expected account,month,amount header")
        rows = list(reader)
    if any(None in row or any(v is None for v in row.values()) for row in rows):
        raise ValueError("CSV row width mismatch")
    return rows


def panel(rows: list[dict], as_of: str) -> dict:
    end = month_index(as_of)
    result = defaultdict(dict)
    for row in rows:
        account = row["account"].strip()
        month = month_index(row["month"])
        if not account or len(account) > 80 or month > end:
            raise ValueError("invalid account or future month")
        if month in result[account]:
            raise ValueError("duplicate account/month: aggregation requires an explicit rule")
        if not re.fullmatch(r"\d{1,12}(?:\.\d{1,2})?", row["amount"]):
            raise ValueError("amount must be a known, non-negative decimal with at most two places")
        result[account][month] = Decimal(row["amount"])
    return dict(result)


def cohorts(data: dict, as_of: str) -> dict:
    if not data:
        return {"accounts": [], "cells": []}
    start = min(min(series) for series in data.values())
    end = month_index(as_of)
    members, account_info = defaultdict(list), []
    for account, series in sorted(data.items()):
        positive = [month for month, value in series.items() if value > 0]
        if not positive:
            account_info.append({"account": account, "observed_cohort": None, "left_censored": None})
            continue
        first = min(positive)
        # Missing prehistory and activity on the coverage boundary prevent acquisition claims.
        censored = first == start or any(month not in series for month in range(start, first))
        members[first].append(account)
        account_info.append({"account": account, "observed_cohort": month_label(first), "left_censored": censored})
    cells = []
    for first, accounts in sorted(members.items()):
        for month in range(first, end + 1):
            observed = [data[account][month] for account in accounts if month in data[account]]
            active = sum(value > 0 for value in observed)
            cells.append({"cohort": month_label(first), "month": month_label(month), "age_months": month - first,
                          "cohort_size": len(accounts), "observed_accounts": len(observed),
                          "positive_accounts": active, "missing_accounts": len(accounts) - len(observed),
                          "activity_rate_observed": round(active / len(observed), 4) if observed else None})
    return {"accounts": account_info, "cells": cells}


def segments(data: dict, as_of: str, window: int = 3, a: Decimal = Decimal("0.80"),
             b: Decimal = Decimal("0.95"), x: Decimal = Decimal("0.10"), y: Decimal = Decimal("0.25")) -> list[dict]:
    if not 2 <= window <= 120 or not 0 < a < b < 1 or not 0 <= x < y:
        raise ValueError("invalid window or segmentation thresholds")
    end = month_index(as_of)
    months = list(range(end - window + 1, end + 1))
    complete, result = [], []
    for account, series in sorted(data.items()):
        if any(month not in series for month in months):
            result.append({"account": account, "status": "insufficient_history", "abc": None, "xyz": None, "amount": None, "cv": None})
            continue
        values = [series[month] for month in months]
        total = sum(values, Decimal("0.00"))
        if total == 0:
            result.append({"account": account, "status": "no_activity", "abc": "N", "xyz": None, "amount": "0.00", "cv": None})
            continue
        mean = total / window
        variance = sum((value - mean) ** 2 for value in values) / window
        cv = variance.sqrt() / mean
        complete.append((account, total, cv))
    grand = sum((item[1] for item in complete), Decimal("0.00"))
    previous = Decimal("0.00")
    for account, total, cv in sorted(complete, key=lambda item: (-item[1], item[0])):
        prior_share = previous / grand
        abc = "A" if prior_share < a else "B" if prior_share < b else "C"
        xyz = "X" if cv <= x else "Y" if cv <= y else "Z"
        result.append({"account": account, "status": "classified", "abc": abc, "xyz": xyz,
                       "amount": format(total, ".2f"), "cv": round(float(cv), 6)})
        previous += total
    return sorted(result, key=lambda item: item["account"])


def analyze(rows: list[dict], as_of: str, window: int = 3) -> dict:
    data = panel(rows, as_of)
    return {"as_of_month": as_of, "abcxyz_window_months": window,
            "cohorts": cohorts(data, as_of), "segments": segments(data, as_of, window)}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, default=ROOT / "data/monthly.csv")
    parser.add_argument("--as-of", default="2025-06")
    parser.add_argument("--window", type=int, default=3)
    parser.add_argument("--output", type=Path, default=ROOT / "build")
    args = parser.parse_args()
    if args.input.resolve().is_relative_to(args.output.resolve()):
        parser.error("input must remain outside output")
    result = analyze(read_rows(args.input), args.as_of, args.window)
    args.output.mkdir(parents=True, exist_ok=True)
    (args.output / "analysis.json").write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"accounts": len(result["segments"]), "cohort_cells": len(result["cohorts"]["cells"])}))


if __name__ == "__main__":
    main()
