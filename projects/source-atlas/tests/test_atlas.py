import json
import sqlite3
import tempfile
import unittest
from contextlib import closing
from pathlib import Path

from atlas import ROOT, build, profile, read_source, relation, resolve_input


class AtlasTests(unittest.TestCase):
    def test_join_fanout_orphans_and_missing_are_separate(self):
        _, child = read_source(ROOT / "data/events.csv")
        _, parent = read_source(ROOT / "data/accounts.csv")
        result = relation(child, parent, "account_id", "account_id")
        self.assertEqual(result["left_join_rows"], 8)
        self.assertEqual(result["fanout_extra_rows"], 2)
        self.assertEqual(result["orphan_rows"], 1)
        self.assertEqual(result["missing_child_keys"], 1)
        self.assertFalse(result["safe_many_to_one"])

    def test_empty_and_duplicate_key_profiles(self):
        result = profile(["id"], [{"id":"x"}, {"id":"x"}, {"id":""}])
        self.assertEqual(result["duplicate_rows"], 1)
        self.assertEqual(result["columns"][0]["missing"], 1)
        self.assertFalse(result["columns"][0]["candidate_key"])
        self.assertFalse(profile(["id"], [])["columns"][0]["candidate_key"])

    def test_path_escape_and_bad_width_rejected(self):
        with self.assertRaises(ValueError):
            resolve_input(ROOT / "data", "../atlas.py")
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "bad.csv"
            for content in ("id,id\na,b\n", "id,value\na\n", "id\na,b\n"):
                path.write_text(content)
                with self.assertRaises(ValueError):
                    read_source(path)

    def test_catalog_and_database_reconcile(self):
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "out"
            result = build(ROOT / "data/manifest.json", output)
            with closing(sqlite3.connect(output / "atlas.sqlite")) as db:
                self.assertEqual(db.execute("SELECT COUNT(*) FROM raw_events").fetchone()[0], 6)
                self.assertIsNone(db.execute("SELECT account_id FROM raw_events WHERE event_id='E-06'").fetchone()[0])
            first = (output / "catalog.json").read_bytes()
            build(ROOT / "data/manifest.json", output)
            self.assertEqual(first, (output / "catalog.json").read_bytes())
            self.assertEqual(result["sources"]["events"]["row_count"], 6)


if __name__ == "__main__":
    unittest.main()
