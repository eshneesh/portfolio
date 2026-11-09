import sqlite3
import unittest

from build import generate, populate, query


class ModelTests(unittest.TestCase):
    def setUp(self):
        self.db = sqlite3.connect(":memory:")
        self.db.execute("PRAGMA foreign_keys=ON")

    def tearDown(self):
        self.db.close()

    def test_boundary_open_denominator_and_empty_category(self):
        rows = [
            {"id":"A","opened_at":"2025-01-01T00:00:00+00:00","closed_at":"2025-01-03T00:00:00+00:00","category":"Support","channel":"Web","status":"closed"},
            {"id":"B","opened_at":"2025-01-01T00:00:00+00:00","closed_at":"2025-01-04T00:00:00+00:00","category":"Support","channel":"Web","status":"closed"},
            {"id":"C","opened_at":"2025-01-02T00:00:00+00:00","closed_at":"","category":"Support","channel":"Web","status":"open"},
        ]
        populate(self.db, rows)
        columns, records = query(self.db, "cohort_metrics.sql")
        results = {row[0]: dict(zip(columns, row)) for row in records}
        self.assertEqual(results["Support"]["sla_rate"], .5)
        self.assertEqual(results["Support"]["mean_closed_hours"], 60)
        self.assertEqual(results["Support"]["total_events"], 3)
        self.assertIsNone(results["Delivery"]["sla_rate"])
        _, flow = query(self.db, "daily_flow.sql")
        self.assertEqual(flow[0][3], 2)
        self.assertEqual(flow[-1][3], 1)
        self.assertEqual(flow[6][4], 3)
        self.assertEqual(flow[7][4], 1)

    def test_synthetic_fixture_reconciliation(self):
        rows = generate()
        self.assertEqual(rows, generate())
        populate(self.db, rows)
        self.assertEqual(self.db.execute("SELECT COUNT(*) FROM fact_event").fetchone()[0], 120)
        self.assertEqual(self.db.execute("SELECT COUNT(*) FROM fact_event WHERE status='open'").fetchone()[0], 24)
        self.assertEqual(self.db.execute("PRAGMA foreign_key_check").fetchall(), [])
        _, flow = query(self.db, "daily_flow.sql")
        self.assertEqual(sum(row[1] for row in flow), 120)
        self.assertEqual(sum(row[2] for row in flow), 96)
        self.assertEqual(flow[-1][3], 24)
        self.assertTrue(all(row[3] >= 0 for row in flow))

    def test_duplicate_fact_key_fails(self):
        row = generate()[0]
        with self.assertRaises(sqlite3.IntegrityError):
            populate(self.db, [row, row])


if __name__ == "__main__":
    unittest.main()
