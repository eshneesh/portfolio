import copy
import json
import tempfile
import unittest
from html.parser import HTMLParser
from pathlib import Path

from report import ROOT, ReportError, load, render


class Elements(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []

    def handle_starttag(self, tag, attrs):
        self.tags.append(tag)


class ReportTests(unittest.TestCase):
    def setUp(self):
        self.document = load(ROOT / "examples/report.json")

    def test_demo_has_all_blocks_and_no_active_content(self):
        output = render(self.document)
        parser = Elements()
        parser.feed(output)
        self.assertEqual(parser.tags.count("section"), 4)
        self.assertEqual(parser.tags.count("article"), 4)
        self.assertIn("table", parser.tags)
        self.assertFalse(set(parser.tags) & {"script", "iframe", "img", "object", "form", "link"})
        self.assertIn("Content-Security-Policy", output)

    def test_html_injection_is_rendered_as_text(self):
        self.document["title"] = '<script>alert("x")</script>'
        self.document["blocks"][3]["body"] = '<img src=x onerror="alert(1)">'
        output = render(self.document)
        self.assertIn("&lt;script&gt;", output)
        self.assertNotIn("<script>", output)
        self.assertNotIn("<img ", output)

    def test_invalid_contracts(self):
        for bad in [None, {}, {"version": 2}]:
            with self.assertRaises(ReportError):
                render(bad)
        for mutation in (lambda d: d["blocks"][1]["items"][0].update(value=float("nan")),
                         lambda d: d["blocks"][1]["items"][0].update(value=10**1000),
                         lambda d: d["blocks"][1]["items"][0].update(value=True),
                         lambda d: d["blocks"][2]["rows"].append(["wrong width"]),
                         lambda d: d["blocks"][0].update(type="iframe")):
            doc = copy.deepcopy(self.document)
            mutation(doc)
            with self.assertRaises(ReportError):
                render(doc)

    def test_zero_bars_and_reproducibility(self):
        self.document["blocks"][1]["items"] = [{"label": "No events", "value": 0}]
        first = render(self.document)
        self.assertIn("width:0.0000%", first)
        self.assertEqual(first, render(self.document))

    def test_duplicate_keys_and_nonfinite_json_rejected(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "test.json"
            for content in ('{"version":1,"version":2}', '{"value":NaN}'):
                path.write_text(content, encoding="utf-8")
                with self.assertRaises(ReportError):
                    load(path)


if __name__ == "__main__":
    unittest.main()
