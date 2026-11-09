# Reproducibility — fictional example

A manifest records the SHA-256 digest of the input, the calculation code and every output artifact. The snapshot date is an explicit parameter. This allows two runs to be compared without relying on file names.

A deterministic pipeline does not embed the current wall-clock time in calculation artifacts. The same input, code and snapshot date should produce byte-identical output.
