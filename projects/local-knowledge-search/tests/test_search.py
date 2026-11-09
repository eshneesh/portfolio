import json
import tempfile
import unittest
from pathlib import Path

from search import ROOT, build_index, evaluate, retrieve


class SearchTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.database = Path(self.temp.name) / "index.sqlite"
        build_index(ROOT / "corpus", self.database)

    def tearDown(self):
        self.temp.cleanup()

    def test_evaluation_fixture(self):
        cases = json.loads((ROOT / "evaluation.json").read_text())
        result = evaluate(self.database, cases)
        self.assertEqual(result["passed"], len(cases), result)

    def test_citation_matches_source_exactly(self):
        hit = retrieve(self.database, "duplicate identifiers")[0]
        lines = (ROOT / "corpus" / hit["source"]).read_text().splitlines()
        self.assertEqual(lines[hit["line"] - 1], hit["text"])
        self.assertEqual(len(hit["document_sha256"]), 64)

    def test_rebuild_is_idempotent(self):
        before = retrieve(self.database, "manifest")
        build_index(ROOT / "corpus", self.database)
        self.assertEqual(before, retrieve(self.database, "manifest"))

    def test_unknown_and_sql_syntax_do_not_create_answers(self):
        self.assertEqual(retrieve(self.database, "volcano astronomy"), [])
        self.assertEqual(retrieve(self.database, "'; DROP TABLE chunks; --"), [])
        self.assertTrue(retrieve(self.database, "SLA"))

    def test_input_bounds(self):
        with self.assertRaises(ValueError):
            retrieve(self.database, "x" * 2001)
        with self.assertRaises(ValueError):
            retrieve(self.database, "SLA", 0)
        with self.assertRaises(ValueError):
            retrieve(Path(self.temp.name) / "missing.sqlite", "SLA")


if __name__ == "__main__":
    unittest.main()
