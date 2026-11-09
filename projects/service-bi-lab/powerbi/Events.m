// Create a query named Events. All dates are normalized to UTC.
let
    Source = Csv.Document(File.Contents(DataFolder & "/events.csv"), [Delimiter=",", Encoding=65001, QuoteStyle=QuoteStyle.Csv]),
    Headers = Table.PromoteHeaders(Source, [PromoteAllScalars=true]),
    Parsed = Table.TransformColumns(Headers, {
        {"opened_at", each DateTimeZone.RemoveZone(DateTimeZone.ToUtc(DateTimeZone.FromText(_))), type datetime},
        {"closed_at", each if _ = "" then null else DateTimeZone.RemoveZone(DateTimeZone.ToUtc(DateTimeZone.FromText(_))), type nullable datetime},
        {"duration_hours", each if _ = "" then null else Number.FromText(_, "en-US"), type nullable number}
    }),
    OpenedDate = Table.AddColumn(Parsed, "OpenedDate", each Date.From([opened_at]), type date),
    ClosedDate = Table.AddColumn(OpenedDate, "ClosedDate", each if [closed_at] = null then null else Date.From([closed_at]), type nullable date)
in
    ClosedDate
