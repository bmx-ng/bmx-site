---
id: text.toml
title: Text.Toml
sidebar_label: Introduction
---


The text.toml is a module designed for parsing TOML (Tom's Obvious, Minimal Language) documents.
TOML is a human-readable data serialization format used for configuration files and data interchange
between languages with different data structures. It is similar to JSON, YAML, and INI files but aims
to be more minimal and easier to read and write.

TOML documents consist of key-value pairs, which are organized into sections called tables.
Each key-value pair is represented by a key followed by an equals sign (=) and a value.
Tables can be nested, allowing for a hierarchical structure. TOML supports several data
types, including strings, integers, floating-point numbers, booleans, dates, times, and arrays.

## Key-Value Pairs
In TOML, key-value pairs are the basic building blocks of the document. Each key-value pair is
represented by a key followed by an equals sign (=) and a value. Here's a simple example:

```toml
key = "value"
```

## Tables
Tables are sections within a TOML document used to organize key-value pairs. They are defined
by square brackets `[` and `]`. Here's an example of a table:

```toml
[table]
key = "value"
```

## Nested Tables
TOML allows for nesting tables to create a hierarchical structure. Nested tables are defined
using dot notation within the square brackets. Here's an example of nested tables:

```toml
[table]
key = "value"

[table.subtable]
nested_key = "nested_value"
```

## Data Types
TOML supports several data types, including:

### Strings
Enclosed in double quotes `"`. They can be single-line or multi-line (using triple quotes `"""`).

```toml
string_key = "This is a string"
multiline_string_key = """
This is a
multiline string
"""
```

### Integers
Whole numbers without a decimal point.

```toml
integer_key = 42
```

### Floating-point numbers
Numbers with a decimal point.

```toml
float_key = 3.14
```

### Booleans
Represented as true or false.

```toml
boolean_key = true
```

### Dates
Represented in the format YYYY-MM-DD.

```toml
date_key = 2021-09-01
```

### Times
Represented in the format hh:mm:ss (optionally with fractional seconds).

```toml
time_key = 12:34:56
time_with_fractional_key = 12:34:56.789
```

### Date-times
Represented as a combination of date and time, separated by a T or a space.

```toml
datetime_key = 2021-09-01T12:34:56
datetime_with_space_key = 2021-09-01 12:34:56
```

### Arrays
A collection of values enclosed in square brackets and separated by commas.

```toml
```array_key = [1, 2, 3]```

Here's a complete example of a TOML document using various data types and tables:

```toml
title = "TOML Example"

[author]
name = "John Doe"
age = 35
is_member = true

[book]
title = "The TOML Guide"
published_date = 2022-03-15
price = 19.99
keywords = ["TOML", "guide", "configuration"]

[book.publication_time]
hour = 15
minute = 30
```

## Working with TOML documents

The module is composed of several types and interfaces, including:

[TToml](../../text/text.toml/ttoml): The main class responsible for parsing TOML documents. It provides functions for loading
and parsing TOML files or strings, returning a [TTomlTable](../../text/text.toml/ttomltable) object.

[TTomlTable](../../text/text.toml/ttomltable): Represents a TOML table and implements the [ITomlNode](../../text/text.toml/itomlnode) interface. It offers methods
for adding and retrieving nodes with specified keys and enumerating the keys.

[TTomlArray](../../text/text.toml/ttomlarray): Represents a TOML array and implements the [ITomlNode](../../text/text.toml/itomlnode) interface.

[TTomlString](../../text/text.toml/ttomlstring), [TTomlInteger](../../text/text.toml/ttomlinteger), [TTomlFloatingPoint](../../text/text.toml/ttomlfloatingpoint), [TTomlBoolean](../../text/text.toml/ttomlboolean), [TTomlDate](../../text/text.toml/ttomldate), [TTomlTime](../../text/text.toml/ttomltime), and [TTomlDateTime](../../text/text.toml/ttomldatetime):
Each represents a specific TOML data type and implements the [ITomlNode](../../text/text.toml/itomlnode) interface.

[ITomlNode](../../text/text.toml/itomlnode): An interface implemented by all TOML nodes. It includes methods for determining
the type of the node and converting it to the desired data type.


## Types
| Type | Description |
|---|---|
| [TTomlSourceRegion](../../text/text.toml/ttomlsourceregion) | Source region, provided with parsing errors. |
| [TToml](../../text/text.toml/ttoml) | TOML loader. |
| [TTomlTable](../../text/text.toml/ttomltable) | A TOML table. |
| [TTomlArray](../../text/text.toml/ttomlarray) | A TOML array. |
| [TTomlString](../../text/text.toml/ttomlstring) | A TOML string. |
| [TTomlInteger](../../text/text.toml/ttomlinteger) | A TOML integer number, represented as a [Long](../../brl/brl.blitz/#long). |
| [TTomlFloatingPoint](../../text/text.toml/ttomlfloatingpoint) | A TOML floating point number, represented as a [Double](../../brl/brl.blitz/#double). |
| [TTomlBoolean](../../text/text.toml/ttomlboolean) | A TOML boolean. |
| [TTomlDate](../../text/text.toml/ttomldate) | A TOML date. |
| [TTomlTime](../../text/text.toml/ttomltime) | A TOML time. |
| [TTomlDateTime](../../text/text.toml/ttomldatetime) | A TOML date time. |
| [TTomlParseError](../../text/text.toml/ttomlparseerror) | A toml parse error. |

## Interfaces
| Interface | Description |
|---|---|
| [ITomlNode](../../text/text.toml/itomlnode) | A toml node. |

## Structs
| Struct | Description |
|---|---|
| [STomlDate](../../text/text.toml/stomldate) | A toml date representation. |
| [STomlTime](../../text/text.toml/stomltime) | A toml time representation. |
| [STomlDateTime](../../text/text.toml/stomldatetime) | A toml date time representation, with optional offset. |

## Enums
| Enum | Description |
|---|---|
| [ETomlNodeType](../../text/text.toml/etomlnodetype) | Toml node type. |

