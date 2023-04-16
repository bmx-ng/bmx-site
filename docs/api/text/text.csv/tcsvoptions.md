---
id: tcsvoptions
title: TCsvOptions
sidebar_label: TCsvOptions
---

Options for customising the parser.


## Fields

### `Field maxColumns:UInt = 1024`

Maximum number of columns to parse.

Defaults to 1024.


<br/>

### `Field delimiter:String = ","`

The delimiter.

Typically a comma or tab. Can be any char other than newline, form feed or quote. Defaults to comma.


<br/>

### `Field noQuotes:Int`

When enabled, indicates that the parser should treat double-quotes just like any ordinary character.

<br/>

### `Field insertHeaderRow:String`

If the actual data does not have a header row with column names, the caller should provide one (in CSV format) which will be treated as if it was the first row of data.

<br/>

### `Field headerSpan:UInt = 1`

The number of rows that the header row spans.

If 0 or 1, header is assumed to span 1 row otherwise, set to number > 1 to span multiple rows.


<br/>

### `Field rowsToIgnore:UInt`

The number of rows to ignore before the initial row is processed.

<br/>

### `Field keepEmptyHeaderRows:UInt`

By default, ignores empty header rows.

To disable this behaviour, set to [True](../../../brl/brl.blitz/#true).


<br/>

