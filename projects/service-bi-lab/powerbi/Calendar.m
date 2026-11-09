// Create a query named Calendar and mark it as a date table by the Date column.
let
    Dates = List.Dates(#date(2025, 1, 1), 46, #duration(1, 0, 0, 0)),
    Source = Table.FromList(Dates, Splitter.SplitByNothing(), {"Date"}),
    Typed = Table.TransformColumnTypes(Source, {{"Date", type date}}),
    Month = Table.AddColumn(Typed, "Month", each Date.ToText([Date], "yyyy-MM"), type text)
in
    Month
