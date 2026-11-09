import unittest

from bridge import ROOT, read_rows, reconcile


def row(reference, amount, currency="USD"):
    return {"reference": reference, "amount": amount, "currency": currency}


class BridgeTests(unittest.TestCase):
    def test_bidirectional_fixture(self):
        result = reconcile(read_rows(ROOT / "data/left.csv"), read_rows(ROOT / "data/right.csv"))
        self.assertEqual(result["status_counts"], {"ambiguous_duplicate":1, "amount_mismatch":1, "left_only":1, "matched":2, "right_only":1})
        self.assertEqual(len(result["rejected"]), 1)
        self.assertEqual(result["accepted_rows"], {"left":6, "right":5})
        self.assertEqual(result["currency_controls"]["USD"]["left_minus_right"], "15.00")

    def test_equal_duplicate_sum_does_not_imply_match(self):
        result = reconcile([row("a", "10"), row("a", "15")], [row("a", "25")])
        self.assertEqual(result["records"][0]["status"], "ambiguous_duplicate")
        self.assertIsNone(result["records"][0]["difference"])

    def test_decimal_precision_and_credits(self):
        result = reconcile([row("a", "0.30"), row("b", "-10.00")], [row("a", "0.10"), row("b", "-10")])
        self.assertEqual(result["records"][0]["difference"], "0.20")
        self.assertEqual(result["records"][1]["status"], "matched")

    def test_currency_is_part_of_key(self):
        result = reconcile([row("a", "10", "USD")], [row("a", "10", "EUR")])
        self.assertEqual(result["status_counts"], {"left_only":1, "right_only":1})

    def test_unknown_amount_is_not_zero(self):
        for value in ("", "NaN", "Infinity", "0.001", "1e2"):
            result = reconcile([row("a", value)], [row("a", "0")])
            self.assertEqual(len(result["rejected"]), 1)
            self.assertEqual(result["records"][0]["status"], "right_only")


if __name__ == "__main__":
    unittest.main()
