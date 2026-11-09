-- Aggregate each fact stream before joining: prevents join fan-out.
WITH arrivals AS (
    SELECT opened_date AS day, COUNT(*) AS events FROM fact_event GROUP BY opened_date
), completions AS (
    SELECT closed_date AS day, COUNT(*) AS events
    FROM fact_event WHERE status='closed' GROUP BY closed_date
), daily AS (
    SELECT d.date_key AS day, COALESCE(a.events,0) AS arrivals,
           COALESCE(c.events,0) AS completions
    FROM dim_date AS d
    LEFT JOIN arrivals AS a ON a.day=d.date_key
    LEFT JOIN completions AS c ON c.day=d.date_key
)
SELECT day, arrivals, completions,
       SUM(arrivals-completions) OVER (ORDER BY day ROWS UNBOUNDED PRECEDING) AS backlog_eod,
       SUM(arrivals) OVER (ORDER BY day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS arrivals_7d
FROM daily
ORDER BY day;
