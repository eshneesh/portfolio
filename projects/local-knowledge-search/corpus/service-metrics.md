# Service metrics — fictional example

SLA compliance is the number of closed events resolved within 48 calendar hours divided by all valid closed events. The boundary is inclusive. Open events are excluded. If no closed events exist, compliance is unknown rather than zero.

Resolution duration is measured from opened_at to closed_at using timezone-aware timestamps. This example uses elapsed calendar hours, not business hours. Negative durations are invalid.

The average resolution duration uses valid closed events only. It does not describe waiting time for events that remain open.
