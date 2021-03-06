---
id: literals
title: Literals
sidebar_label: Literals
---

Literals are simple numeric or string values.

## Integer literals

Integer literals may be in either decimal, hexadecimal or binary format. To specify a hexadecimal literal, prepend it
with the `$` character. To specify a binary literal, prepend it with the `%` character. Here are some examples of
integer literals:

```blitzmax
100         'decimal literal
$CAFEBABE   'hexadecimal (base 16) literal
%10101010   'binary (base 2) literal
```
## Floating point literals

Floating point literals are numeric values with a fractional part. The fractional part is specified using a decimal
point. Floating point literals may also be extended using '**e notation**'. For example:

```blitzmax
.5      'one half
10.0    'ten point zero
1e6     '1 times (10 to the power of 6)
1.5e-6  '1.5 times (10 to the power of -6)
```
## String literals

A string literal is a sequence of characters enclosed in quotation marks. For example:

```blitzmax
"Hello World"
""              'empty string
```

String literals can also contain **escape sequences**. An escape sequence is a special sequence of characters used to
represent another character. This is useful for including *untypable* characters and quotation marks in strings. Escape
sequences always start with the `~` character. The following escape sequences are supported:

| Escape sequence  | Equivalent character  |
|---|---|
| `~0`  | Null character (ascii code 0)  |
| `~t`  | Tab character (ascii code 9)  |
| `~r`  | Return character (ascii code 13)  |
| `~n`  | Newline character (ascii code 10)  |
| `~q`  | Quote character (ascii code 34)  |
| `~~`  | Tilde character (ascii code 126)  |
| `~n~` .. `~nnnn~`  | Unicode character, e.g. `~65~` = `A` |
| `~$n~` .. `~$nnnn~`  | Hexadecimal character, e.g. `~$41~` = `A` |
| `~%n~` .. `~%nnnnnnnnnnnnnnnn~`  | Binary character, e.g. `~%1000001~` = `A` |

For example:

```blitzmax
Print "And then Mark said, ~qescape sequences rule!~q"
Print "Line1~nLine2~nLine3~nLine4~nLine5"
```
The type of a literal may also be modified by appending `:TypeName` to the literal. For example:

```blitzmax
$8000000000000000:Long
10:Double
```
