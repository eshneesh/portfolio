# Data quality — fictional example

Duplicate identifiers are ambiguous. Reject every occurrence of a duplicate key and preserve the rejected line numbers for review. Do not silently keep the first row.

Missing amounts represent unknown values. Report the count of missing amounts alongside the sum of known amounts. Never replace missing amounts with zero without an explicit rule.

Reconciliation compares the number of source rows with accepted plus rejected rows. Each source row must be accounted for exactly once.
