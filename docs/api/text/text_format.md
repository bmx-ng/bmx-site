---
id: text.format
title: Text.Format
sidebar_label: Introduction
---



The **Format** module is a String formatter using C-style *sprintf / printf* syntax.

printf syntax is a universally recognized method of formatted strings. This module attempts to implement the most-used conversion specifications.

### Using the Formatter

You begin by creating a formatter, using the [TFormatter](../../text/text.format/tformatter) type. The [Create](../../text/text.format/tformatter/#function-createtformattertextstring) method takes a format String as a parameter. See the syntax guide below for formatting details.

```blitzmax
Local formatter:TFormatter = TFormatter.Create("VAT = <i>2.1f</i>%%")
```

Each conversion specification expects an argument (with the exception of `%%`), to which you must supply an appropriate value.

You do this by calling the [Arg](../../text/text.format/tformatter/#method-argtformattervaluebyte)() method:

```blitzmax
formatter.Arg(17.5)
```
Since each [Arg](../../text/text.format/tformatter/#method-argtformattervaluebyte)() method returns the [TFormatter](../../text/text.format/tformatter) object, it allows you to chain together a sequence of arguments, like so:
```blitzmax
Local formatter:TFormatter = TFormatter.Create("Name = <i>s</i> : Id = X%09d")
formatter.Arg("William Smith").Arg(65002)
```

The [Format](../../text/text.format/tformatter/#method-formatstringsbtstringbuilder-null)() method formats the text using the given arguments, and returns the String result.

```blitzmax
Print formatter.format()
```

To reuse a formatter, you can call the [Clear](../../text/text.format/tformatter/#method-cleartformatter)() method to remove the arguments, allowing you to apply some new ones without the formatting engine having to re-process the format string.

## A quick guide to syntax
The format string can contain both ordinary text and conversion specifications.

A conversion specification begins with a `%` and ends with a particular conversion specifier (d, f, s, <i>)</i>.

In between, and in the following order, there may be zero or more flags, an optional field width, and an optional precision.

### Flags
The `%` character is followed by zero or more flags :
| Flag | Description |
|:-:|---|
| `#` | The value should be converted to an *alternate form*. For `f` conversions, the result will always contain a decimal point, even if no digits follow it.<br/>For other conversions, the result is undefined. |
| `0` | The value should be zero padded.<br/>For `d` and `f` conversions, the converted value is padded on the left with zeros rather than blanks.<br/>For other conversions, the behaviour is undefined. |
| `-` | The converted value is to be left justified on the field boundary. (The default is right justification.)<br/>Except for `n` conversions, the converted value is padded on the right with blanks, rather than on the left with blanks or zeros. A - overrides a 0 if both are given. |
| `' '` (space) | A blank should be left before a positive number (or empty string) produced by a signed conversion. |
| `+` | A sign (`+` or `-`) should always be placed before a number produced by a signed conversion. By default a sign is used only for negative numbers. A `+` overrides a space if both are used. |
| `,` | For decimal conversion (`d`, `f`) the output is to be grouped with thousands’ grouping character. |

### Field width
An optional number specifying a minimum field width.

If  the  converted  value  has fewer characters than the field width, it will be padded with spaces on the left (or right, if the left-justify flag has been given).

In no case does a non-existent or small field width cause truncation of a field; if the result of a conversion is wider than the field width, the field is expanded  to  contain  the  conversion result.

### Precision

An optional  precision, in the form of a period ('.') followed by an optional integer value.

If the precision is given as just '.', or the precision is negative, the precision is taken to be zero.

This gives the minimum number of digits to appear for `d` conversions, the number of digits to appear after the radix character for `f` conversions, or the maximum number of characters to be printed from a string for `s` conversions.

### Conversion Specifier

A character that specifies the type of conversion to be applied.  The conversion specifiers and their meanings are:
| Conversion | Description |
|:-:|---|
| `d` | The argument (#Byte, [Short](../../brl/brl.blitz/#short), [Int](../../brl/brl.blitz/#int), [UInt](../../brl/brl.blitz/#uint), [Long](../../brl/brl.blitz/#long)) is converted to signed decimal notation.<br/>The precision, if any, gives the minimum number of digits that must appear; if the converted value requires fewer digits, it is padded on the left  with zeros.<br/>The default precision is 1. |
| `f` | The argument (#Float, [Double](../../brl/brl.blitz/#double)) is rounded and converted to decimal notation in the  style `[-]ddd.ddd`, where the number of digits  after  the decimal-point character is equal to the precision specification.<br/>If the precision is missing, it is taken as 6; if the precision is explicitly zero, no decimal-point character appears.<br/>If a decimal point appears, at least one digit appears before it. |
| `s` | The argument (#String) is converted to a space-padded or left-justified string equal to the width specified.<br/>If precision is given, no more than the number of characters specified are output.  |
| `%` | A literal `%`. |


## Types
| Type | Description |
|---|---|
| [TFormatter](../../text/text.format/tformatter) | The string formatter. |

