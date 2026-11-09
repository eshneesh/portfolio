-- Cohort is selected by opened_date. Closed and open events share that cohort.
WITH category_summary AS (
    SELECT category_key,
           COUNT(*) AS total_events,
           SUM(CASE WHEN status='closed' THEN 1 ELSE 0 END) AS closed_events,
           SUM(CASE WHEN status='open' THEN 1 ELSE 0 END) AS open_events,
           SUM(CASE WHEN sla_met=1 THEN 1 ELSE 0 END) AS on_time_events,
           AVG(duration_hours) AS mean_closed_hours
    FROM fact_event
    WHERE opened_date >= '2025-01-01' AND opened_date < '2025-02-01'
    GROUP BY category_key
)
SELECT c.category,
       COALESCE(s.total_events,0) AS total_events,
       COALESCE(s.closed_events,0) AS closed_events,
       COALESCE(s.open_events,0) AS open_events,
       ROUND(s.mean_closed_hours,2) AS mean_closed_hours,
       ROUND(1.0 * s.on_time_events / NULLIF(s.closed_events,0),4) AS sla_rate
FROM dim_category AS c
LEFT JOIN category_summary AS s ON s.category_key=c.category_key
ORDER BY c.category;
