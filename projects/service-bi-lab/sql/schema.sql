CREATE TABLE dim_date (
    date_key TEXT PRIMARY KEY,
    month_number INTEGER NOT NULL,
    weekday_number INTEGER NOT NULL
);
CREATE TABLE dim_category (category_key INTEGER PRIMARY KEY, category TEXT UNIQUE NOT NULL);
CREATE TABLE dim_channel (channel_key INTEGER PRIMARY KEY, channel TEXT UNIQUE NOT NULL);
CREATE TABLE fact_event (
    event_id TEXT PRIMARY KEY NOT NULL,
    opened_date TEXT NOT NULL REFERENCES dim_date(date_key),
    closed_date TEXT REFERENCES dim_date(date_key),
    category_key INTEGER NOT NULL REFERENCES dim_category(category_key),
    channel_key INTEGER NOT NULL REFERENCES dim_channel(channel_key),
    status TEXT NOT NULL CHECK (status IN ('open','closed')),
    duration_hours REAL CHECK (duration_hours >= 0),
    sla_met INTEGER CHECK (sla_met IN (0,1)),
    CHECK ((status='open' AND closed_date IS NULL AND duration_hours IS NULL AND sla_met IS NULL)
        OR (status='closed' AND closed_date IS NOT NULL AND duration_hours IS NOT NULL AND sla_met IS NOT NULL))
);
