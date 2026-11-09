"""Validated JSON blocks to standalone, script-free HTML reports."""
from __future__ import annotations

import argparse
import html
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parent


class ReportError(ValueError):
    pass


def text(value, field: str, limit: int = 4000) -> str:
    if not isinstance(value, str) or not value.strip() or len(value) > limit:
        raise ReportError(f"{field}: expected non-empty text, max {limit} characters")
    return value


def validate(document: dict) -> dict:
    if not isinstance(document, dict) or type(document.get("version")) is not int or document.get("version") != 1:
        raise ReportError("document version must be 1")
    for key in ("title", "subtitle", "period"):
        text(document.get(key), key, 500)
    blocks = document.get("blocks")
    if not isinstance(blocks, list) or not 1 <= len(blocks) <= 40:
        raise ReportError("blocks: expected 1..40 blocks")
    for block in blocks:
        if not isinstance(block, dict):
            raise ReportError("block must be an object")
        kind = block.get("type")
        text(block.get("title"), "block.title", 160)
        if kind == "text":
            text(block.get("body"), "body")
        elif kind == "kpis":
            items = block.get("items")
            if not isinstance(items, list) or not 1 <= len(items) <= 6:
                raise ReportError("kpis: expected 1..6 items")
            for item in items:
                if not isinstance(item, dict):
                    raise ReportError("kpi must be an object")
                for key in ("label", "value", "note"):
                    text(item.get(key), key, 160)
        elif kind == "table":
            columns, rows = block.get("columns"), block.get("rows")
            if not isinstance(columns, list) or not 1 <= len(columns) <= 12:
                raise ReportError("table: expected 1..12 columns")
            for column in columns:
                text(column, "column", 120)
            if not isinstance(rows, list) or len(rows) > 100:
                raise ReportError("table: at most 100 rows")
            for row in rows:
                if not isinstance(row, list) or len(row) != len(columns):
                    raise ReportError("table row width must match columns")
                for cell in row:
                    text(cell, "cell", 500)
        elif kind == "bars":
            items = block.get("items")
            if not isinstance(items, list) or not 1 <= len(items) <= 20:
                raise ReportError("bars: expected 1..20 items")
            for item in items:
                if not isinstance(item, dict):
                    raise ReportError("bar must be an object")
                text(item.get("label"), "label", 160)
                value = item.get("value")
                if type(value) not in (int, float) or not 0 <= value <= 10**12 or not math.isfinite(value):
                    raise ReportError("bar value must be a finite number in 0..1e12")
        else:
            raise ReportError("unsupported block type")
    return document


CSS = """
:root{color-scheme:light;--ink:#202238;--muted:#64677b;--line:#e4e5ed;--accent:#6056c7}
*{box-sizing:border-box}body{margin:0;background:#f4f4f8;color:var(--ink);font:16px/1.6 system-ui,sans-serif}
main{max-width:1120px;margin:auto;padding:52px 32px}header{padding:36px 0 30px;border-bottom:1px solid var(--line)}
.eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:750}
h1{font-size:clamp(32px,5vw,56px);line-height:1.12;letter-spacing:-.045em;max-width:800px;margin:16px 0}
.subtitle{color:var(--muted);max-width:700px;font-size:18px}.period{display:inline-block;background:#e9e7fb;padding:6px 12px;border-radius:8px;color:#4b4397;font-size:13px}
section{margin:30px 0}h2{font-size:20px;letter-spacing:-.025em;margin:0 0 16px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:16px}
.card,.panel{background:white;border:1px solid var(--line);border-radius:16px;padding:24px}.label{font-size:13px;color:var(--muted)}
.value{font-size:38px;font-weight:750;line-height:1.25;margin:10px 0;letter-spacing:-.04em}.note{font-size:12px;color:var(--muted)}
.prose{white-space:pre-wrap;margin:0}.scroll{overflow:auto}table{width:100%;border-collapse:collapse;font-size:14px;text-align:left}
caption{text-align:left;color:var(--muted);font-size:12px;margin-bottom:12px}th,td{padding:13px 16px;border-bottom:1px solid var(--line);vertical-align:top}th{background:#f7f7fb;font-weight:650}
tbody tr:last-child td{border-bottom:0}.bar-row{margin:18px 0}.bar-label{display:flex;justify-content:space-between;gap:16px;font-size:14px;margin-bottom:8px}
.track{height:12px;background:#eeedf5;border-radius:20px;overflow:hidden}.fill{height:100%;background:var(--accent);border-radius:20px}
footer{border-top:1px solid var(--line);padding-top:20px;color:var(--muted);font-size:12px;margin-top:40px}
@media(max-width:600px){main{padding:24px 16px}.card,.panel{padding:18px}th,td{padding:10px}.value{font-size:32px}}
@media print{body{background:white}main{max-width:none;padding:0}.card,.panel{break-inside:avoid}header{padding-top:0}.scroll{overflow:visible}}
"""


def render(document: dict) -> str:
    validate(document)
    esc = lambda value: html.escape(str(value), quote=True)
    sections = []
    for block in document["blocks"]:
        heading = f'<h2>{esc(block["title"])}</h2>'
        if block["type"] == "text":
            content = f'<div class="panel"><p class="prose">{esc(block["body"])}</p></div>'
        elif block["type"] == "kpis":
            cards = [f'<article class="card"><div class="label">{esc(item["label"])}</div>'
                     f'<div class="value">{esc(item["value"])}</div><div class="note">{esc(item["note"])}</div></article>'
                     for item in block["items"]]
            content = '<div class="grid">' + "".join(cards) + "</div>"
        elif block["type"] == "table":
            columns = "".join(f'<th scope="col">{esc(c)}</th>' for c in block["columns"])
            rows = "".join("<tr>" + "".join(f"<td>{esc(c)}</td>" for c in row) + "</tr>" for row in block["rows"])
            content = f'<div class="panel scroll"><table><caption>{esc(block["title"])}</caption><thead><tr>{columns}</tr></thead><tbody>{rows}</tbody></table></div>'
        else:
            maximum = max(item["value"] for item in block["items"]) or 1
            bars = []
            for item in block["items"]:
                width = item["value"] / maximum * 100
                bars.append(f'<div class="bar-row"><div class="bar-label"><span>{esc(item["label"])}</span><strong>{esc(item["value"])}</strong></div>'
                            f'<div class="track" aria-hidden="true"><div class="fill" style="width:{width:.4f}%"></div></div></div>')
            content = '<div class="panel">' + "".join(bars) + "</div>"
        sections.append("<section>" + heading + content + "</section>")
    return ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
            '<meta name="viewport" content="width=device-width,initial-scale=1">'
            '<meta name="referrer" content="no-referrer">'
            '<meta http-equiv="Content-Security-Policy" content="default-src \'none\'; style-src \'unsafe-inline\'; base-uri \'none\'; form-action \'none\'">'
            f'<title>{esc(document["title"])}</title><style>{CSS}</style></head><body><main><header>'
            '<div class="eyebrow">Report Kit / synthetic demo</div>'
            f'<h1>{esc(document["title"])}</h1><p class="subtitle">{esc(document["subtitle"])}</p>'
            f'<div class="period">{esc(document["period"])}</div></header>' + "".join(sections) +
            '<footer>Demonstration only. All data is fictional. Built from validated JSON with no scripts or external assets.</footer></main></body></html>')


def unique_object(pairs):
    result = {}
    for key, value in pairs:
        if key in result:
            raise ReportError("duplicate JSON key")
        result[key] = value
    return result


def load(path: Path) -> dict:
    if path.stat().st_size > 1024 * 1024:
        raise ReportError("input exceeds 1 MiB")
    def invalid_constant(value):
        raise ReportError("non-finite JSON number")
    return json.loads(path.read_text(encoding="utf-8"), object_pairs_hook=unique_object,
                      parse_constant=invalid_constant)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", type=Path)
    parser.add_argument("--output", type=Path, default=ROOT / "build/report.html")
    args = parser.parse_args()
    if args.input.resolve() == args.output.resolve():
        parser.error("output cannot overwrite input")
    content = render(load(args.input))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(content, encoding="utf-8")
    print(f"Saved {args.output}")


if __name__ == "__main__":
    main()
