import unittest
from decimal import Decimal

from compass import ROOT, analyze, cohorts, month_index, panel, read_rows, segments


class CompassTests(unittest.TestCase):
    def test_missing_month_does_not_become_zero(self):
        data = panel(read_rows(ROOT / "data/monthly.csv"), "2025-06")
        result = cohorts(data, "2025-06")
        cell = next(row for row in result["cells"] if row["cohort"] == "2025-03" and row["month"] == "2025-05")
        self.assertEqual((cell["cohort_size"], cell["observed_accounts"], cell["missing_accounts"]), (2, 1, 1))
        self.assertEqual(cell["activity_rate_observed"], 1)

    def test_left_censoring_is_explicit(self):
        data = panel(read_rows(ROOT / "data/monthly.csv"), "2025-06")
        info = {row["account"]: row for row in cohorts(data, "2025-06")["accounts"]}
        self.assertTrue(info["DEMO-A"]["left_censored"])
        self.assertTrue(info["DEMO-D"]["left_censored"])
        self.assertFalse(info["DEMO-B"]["left_censored"])

    def test_segments_zero_missing_stable_and_variable(self):
        result = analyze(read_rows(ROOT / "data/monthly.csv"), "2025-06")
        rows = {row["account"]: row for row in result["segments"]}
        self.assertEqual(rows["DEMO-A"]["xyz"], "X")
        self.assertEqual(rows["DEMO-A"]["cv"], 0)
        self.assertEqual(rows["DEMO-B"]["xyz"], "Z")
        self.assertEqual(rows["DEMO-C"]["status"], "no_activity")
        self.assertEqual(rows["DEMO-D"]["status"], "insufficient_history")
        self.assertEqual(rows["DEMO-E"]["xyz"], "Y")

    def test_duplicates_future_and_unknown_amount_fail(self):
        row = {"account":"X", "month":"2025-01", "amount":"1.00"}
        for records in ([row, row], [{**row, "month":"2025-07"}], [{**row, "amount":""}], [{**row, "amount":"-1"}]):
            with self.assertRaises(ValueError):
                panel(records, "2025-06")
        with self.assertRaises(ValueError):
            month_index("2025-13")

    def test_unobserved_cohort_cell_has_null_rate(self):
        data = {"A": {month_index("2025-01"): Decimal("10")}}
        result = cohorts(data, "2025-02")
        self.assertIsNone(result["cells"][-1]["activity_rate_observed"])

    def test_configurable_thresholds_and_deterministic_ties(self):
        data = {"B": {1: Decimal("10"), 2: Decimal("10")}, "A": {1: Decimal("10"), 2: Decimal("10")}}
        result = segments(
            {a: {month_index("2025-01") + k - 1:v for k,v in s.items()} for a,s in data.items()},
            "2025-02", window=2, a=Decimal(".4"), b=Decimal(".8"))
        self.assertEqual([row["abc"] for row in result], ["A", "B"])


if __name__ == "__main__":
    unittest.main()
