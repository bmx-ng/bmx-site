---
id: text.json
title: Text.Json
sidebar_label: Introduction
---


## Types
| Type | Description |
|---|---|
| [TJSON](../../text/text.json/tjson) | Base type for JSON objects. |
| [TJSONArray](../../text/text.json/tjsonarray) | A JSON array is an ordered collection of other JSON values. |
| [TJSONObject](../../text/text.json/tjsonobject) | A JSON object is a dictionary of key-value pairs, where the key is a Unicode string and the value is any JSON value. |
| [TJSONString](../../text/text.json/tjsonstring) | A JSON String. |
| [TJSONNumber](../../text/text.json/tjsonnumber) | Base type for JSON number types. |
| [TJSONInteger](../../text/text.json/tjsoninteger) | a JSON integer. |
| [TJSONReal](../../text/text.json/tjsonreal) | A JSON real number. |
| [TJSONBool](../../text/text.json/tjsonbool) | A JSON boolean. |
| [TJSONNull](../../text/text.json/tjsonnull) | A JSON Null. |
| [TJSONError](../../text/text.json/tjsonerror) | JSON error information. |

## Functions

### `Function JSON_INDENT:Int(n:Int)`

Pretty-prints the result, using newlines between array and object items, and indenting with n spaces.

The valid range for n is between 0 and 31 (inclusive), other values result in an undefined output. If JSON_INDENT is not used or n is 0,
no newlines are inserted between array and object items.


<br/>

### `Function JSON_REAL_PRECISION:Int(n:Int)`

Outputs all real numbers with at most n digits of precision.

The valid range for n is between 0 and 31 (inclusive), and other values result in an undefined behavior.
By default, the precision is 17, to correctly and losslessly encode all IEEE 754 double precision floating point numbers.


<br/>

## Consts

### `Const JSON_COMPACT:Int = $20`

Enables a compact representation, i.e. sets the separator between array and object items to "," and between object keys and values to ":".

Without this flag, the corresponding separators are ", " and ": " for more readable output.


<br/>

### `Const JSON_ENSURE_ASCII:Int = $40`

Guarantees the output to consist only of ASCII characters.

This is achived by escaping all Unicode characters outside the ASCII range.


<br/>

### `Const JSON_SORT_KEYS:Int = $80`

All the objects in output are sorted by key.

This is useful e.g. if two JSON texts are diffed or visually compared.


<br/>

### `Const JSON_PRESERVE_ORDER:Int = $100`

Object keys in the output are sorted into the same order in which they were first inserted to the object.

For example, decoding a JSON text and then encoding with this flag preserves the order of object keys.


<br/>

### `Const JSON_ENCODE_ANY:Int = $200`

Makes it possible to encode any JSON value on its own.

Without it, only objects and arrays can be passed as the root value to the encoding functions.
Note: Encoding any value may be useful in some scenarios, but it's generally discouraged as it violates strict compatiblity with
RFC 4627. If you use this flag, don't expect interoperatibility with other JSON systems.


<br/>

### `Const JSON_ESCAPE_SLASH:Int = $400`

Escapes the / characters in strings with \/.

<br/>

### `Const JSON_EMBED:Int = $10000`

The opening and closing characters of the top-level array ('[', ']') or object ('{', '}') are omitted during encoding.

This flag is useful when concatenating multiple arrays or objects into a stream.


<br/>

### `Const JSON_FRACTIONAL_DIGITS:Int = $20000`

Precision becomes the number of fraction digits.

<br/>

### `Const JSON_REJECT_DUPLICATES:Int = $1`

Issues a decoding error if any JSON object in the input text contains duplicate keys.

Without this flag, the value of the last occurence of each key ends up in the result.
Key equivalence is checked byte-by-byte, without special Unicode comparison algorithms.


<br/>

### `Const JSON_DISABLE_EOF_CHECK:Int = $2`

With this flag enabled, the decoder stops after decoding a valid JSON array or object, and thus allows extra data after the JSON text.

By default, the decoder expects that its whole input constitutes a valid JSON text, and issues an error if there's extra data after the otherwise valid JSON input.
Normally, reading will stop when the last ] or } in the JSON input is encountered. If both JSON_DISABLE_EOF_CHECK and JSON_DECODE_ANY flags
are used, the decoder may read one extra UTF-8 code unit (up to 4 bytes of input). For example, decoding 4true correctly decodes
the integer 4, but also reads the t. For this reason, if reading multiple consecutive values that are not arrays or objects,
they should be separated by at least one whitespace character.


<br/>

### `Const JSON_DECODE_ANY:Int = $4`

With this flag enabled, the decoder accepts any valid JSON value.

By default, the decoder expects an array or object as the input.
Note: Decoding any value may be useful in some scenarios, but it's generally discouraged as it violates strict compatiblity
with RFC 4627. If you use this flag, don't expect interoperatibility with other JSON systems.


<br/>

### `Const JSON_DECODE_INT_AS_REAL:Int = $8`

With this flag enabled the decoder interprets all numbers as real values.

JSON defines only one number type. Jansson distinguishes between ints and reals. For more information see Real vs. Integer. Integers that do
not have an exact double representation will silently result in a loss of precision. Integers that cause a double overflow will cause an error.


<br/>

### `Const JSON_ALLOW_NUL:Int = $10`

Allows \u0000 escape inside string values.

This is a safety measure; If you know your input can contain NUL bytes, use this flag. If you don't use this flag, you don't have
to worry about NUL bytes inside strings.
Object keys cannot have embedded NUL bytes even if this flag is used.


<br/>

