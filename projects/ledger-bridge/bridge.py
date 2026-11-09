"""Bidirectional, currency-aware reconciliation without guessing duplicate matches."""
from __future__ import annotations

import argparse
import csv
import json
import re
from collections import Counter, defaultdict
from decimal import Decimal
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def read_rows(path: Path) -> list[dict]:
    with path.open(encoding="utf-8-sig", newline="") as stream:
        reader = csv.DictReader(stream)
        if reader.fieldnames != ["reference", "currency", "amount"]:
            raise ValueError("expected reference,currency,amount columns in this order")
        rows = list(reader)
    if any(None in row or any(v is None for v in row.values()) for row in rows):
        raise ValueError("CSV row width mismatch")
    return rows


def prepare(rows: list[dict], side: str) -> tuple[dict, list[dict], dict]:
    groups, rejected, totals = defaultdict(list), [], defaultdict(lambda: Decimal("0.00"))
    for line, row in enumerate(rows, 2):
        reference, currency = row.get("reference", "").strip().upper(), row.get("currency", "").strip().upper()
        amount = row.get("amount", "").strip()
        if not reference or len(reference) > 80:
            reason = "invalid_reference"
        elif not re.fullmatch(r"[A-Z]{3}", currency):
            reason = "invalid_currency_code"
        elif not re.fullmatch(r"-?\d{1,12}(?:\.\d{1,2})?", amount):
            reason = "invalid_or_missing_amount"
        else:
            value = Decimal(amount)
            groups[(reference, currency)].append(value)
            totals[currency] += value
            continue
        rejected.append({"side": side, "line": line, "reason": reason})
    return groups, rejected, totals


def reconcile(left: list[dict], right: list[dict]) -> dict:
    lg, lr, lt = prepare(left, "left")
    rg, rr, rt = prepare(right, "right")
    records = []
    for reference, currency in sorted(set(lg) | set(rg)):
        lvalues, rvalues = lg.get((reference, currency), []), rg.get((reference, currency), [])
        if len(lvalues) > 1 or len(rvalues) > 1:
            status = "ambiguous_duplicate"
        elif not lvalues:
            status = "right_only"
        elif not rvalues:
            status = "left_only"
        else:
            status = "matched" if lvalues[0] == rvalues[0] else "amount_mismatch"
        comparable = len(lvalues) == len(rvalues) == 1
        records.append({"reference": reference, "currency": currency, "status": status,
                        "left_rows": len(lvalues), "right_rows": len(rvalues),
                        "left_amount": format(lvalues[0], ".2f") if len(lvalues) == 1 else None,
                        "right_amount": format(rvalues[0], ".2f") if len(rvalues) == 1 else None,
                        "difference": format(lvalues[0] - rvalues[0], ".2f") if comparable else None})
    controls = {}
    for currency in sorted(set(lt) | set(rt)):
        controls[currency] = {"left_valid_total": format(lt[currency], ".2f"),
                              "right_valid_total": format(rt[currency], ".2f"),
                              "left_minus_right": format(lt[currency] - rt[currency], ".2f")}
    return {"input_rows": {"left": len(left), "right": len(right)},
            "accepted_rows": {"left": len(left) - len(lr), "right": len(right) - len(rr)},
            "status_counts": dict(sorted(Counter(r["status"] for r in records).items())),
            "currency_controls": controls, "records": records, "rejected": lr + rr}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--left", type=Path, default=ROOT / "data/left.csv")
    parser.add_argument("--right", type=Path, default=ROOT / "data/right.csv")
    parser.add_argument("--output", type=Path, default=ROOT / "build")
    args = parser.parse_args()
    if any(p.resolve().is_relative_to(args.output.resolve()) for p in (args.left, args.right)):
        parser.error("input files must be outside output")
    result = reconcile(read_rows(args.left), read_rows(args.right))
    args.output.mkdir(parents=True, exist_ok=True)
    (args.output / "reconciliation.json").write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")
    with (args.output / "exceptions.csv").open("w", encoding="utf-8", newline="") as stream:
        fields = ["reference", "currency", "status", "left_rows", "right_rows", "left_amount", "right_amount", "difference"]
        writer = csv.DictWriter(stream, fieldnames=fields)
        writer.writeheader()
        writer.writerows(row for row in result["records"] if row["status"] != "matched")
    print(json.dumps({"status_counts": result["status_counts"], "rejected_rows": len(result["rejected"])}, indent=2))


if __name__ == "__main__":
    main()
