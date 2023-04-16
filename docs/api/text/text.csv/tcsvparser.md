---
id: tcsvparser
title: TCsvParser
sidebar_label: TCsvParser
---

Csv Parser


The parser expects at least 1 header row. If a file does not have a header row, one can be
provided by setting TCsvOptions.insertHeaderRow with an appropriate value.


## Methods

### `Method NextRow:ECsvStatus()`

Fetches the next row.

#### Returns
Returns ECsvStatus.row when a row is retrieved.


<br/>

### `Method GetRow:TCsvRow()`

Returns the current row.

The cell values are only valid until the next call to [NextRow](../../../text/text.csv/tcsvparser/#method-nextrowecsvstatus).


<br/>

### `Method Free()`

Frees the parser and any associated data.

<br/>

## Functions

### `Function Parse:TCsvParser(path:String, opts:TCsvOptions)`

Creates a new [TCsvParser](../../../text/text.csv/tcsvparser) instance, using the given path.

<br/>

### `Function Parse:TCsvParser(stream:TStream, options:TCsvOptions = Null)`

Creates a new [TCsvParser](../../../text/text.csv/tcsvparser) instance, using the provided [TStream](../../../brl/brl.stream/tstream).

<br/>

