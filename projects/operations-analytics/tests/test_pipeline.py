import copy
import tempfile
import unittest
from pathlib import Path

from pipeline import ROOT, read_csv, run, timestamp, transform


class PipelineTests(unittest.TestCase):
    def setUp(self):
        self.rows, _ = read_csv(ROOT / "data/events.csv")
        self.as_of = timestamp("2025-02-01T00:00:00+00:00")

    def test_expected_metrics_and_reconciliation(self):
        clean, rejects, metrics = transform(self.rows, self.as_of)
        self.assertEqual((len(clean), len(rejects)), (6, 3))
        self.assertEqual(metrics["input_rows"], len(clean) + len(rejects))
        self.assertEqual(metrics["closed_count"], 4)
        self.assertEqual(metrics["sla_on_time_rate"], .75)
        self.assertEqual(metrics["known_amount_sum"], "480.50")
        self.assertEqual(metrics["average_closed_hours"], 39)
        self.assertEqual(metrics["missing_amount_count"], 1)

    def test_all_duplicate_occurrences_rejected(self):
        clean, rejects, _ = transform(self.rows, self.as_of)
        self.assertNotIn("EV-DUP", [row["id"] for row in clean])
        self.assertEqual(sum(row["reason"] == "empty_or_duplicate_id" for row in rejects), 2)

    def test_empty_denominator_is_null(self):
        _, _, metrics = transform([], self.as_of)
        self.assertIsNone(metrics["sla_on_time_rate"])
        self.assertIsNone(metrics["known_amount_sum"])

    def test_sla_does_not_round_a_late_event_into_compliance(self):
        row = copy.deepcopy(self.rows[0])
        row["closed_at"] = "2025-01-03T09:00:00.001+00:00"
        _, _, metrics = transform([row], self.as_of)
        self.assertEqual(metrics["sla_on_time_rate"], 0)
        row["closed_at"] = "2025-01-03T09:00:00+00:00"
        _, _, metrics = transform([row], self.as_of)
        self.assertEqual(metrics["sla_on_time_rate"], 1)

    def test_invalid_values_and_timezone_rejected(self):
        for field, value in (("amount", "NaN"), ("amount", "0.001"), ("status", "open"),
                             ("opened_at", "2025-01-01T09:00:00"),
                             ("closed_at", "2026-01-01T00:00:00+00:00")):
            row = copy.deepcopy(self.rows[0])
            row[field] = value
            clean, rejects, _ = transform([row], self.as_of)
            self.assertEqual((len(clean), len(rejects)), (0, 1), (field, value))

    def test_reproducible_artifacts(self):
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "out"
            run(ROOT / "data/events.csv", output, self.as_of)
            before = {p.name: p.read_bytes() for p in output.iterdir()}
            run(ROOT / "data/events.csv", output, self.as_of)
            self.assertEqual(before, {p.name: p.read_bytes() for p in output.iterdir()})


if __name__ == "__main__":
    unittest.main()
