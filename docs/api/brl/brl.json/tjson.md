---
id: tjson
title: TJSON
sidebar_label: TJSON
---

Base type for JSON objects.


## Methods

### `Method SaveString:String(flags:Int = 0, indent:Int = 0, precision:Int = 17)`

Returns the JSON representation of the object as a String, or NULL on error.

Valid flags include [JSON_COMPACT](../../../brl/brl.json/#const-json-compact-int-20), [JSON_ENSURE_ASCII](../../../brl/brl.json/#const-json-ensure-ascii-int-40), [JSON_SORT_KEYS](../../../brl/brl.json/#const-json-sort-keys-int-80), [JSON_PRESERVE_ORDER](../../../brl/brl.json/#const-json-preserve-order-int-100), [JSON_ENCODE_ANY](../../../brl/brl.json/#const-json-encode-any-int-200) and [JSON_ESCAPE_SLASH](../../../brl/brl.json/#const-json-escape-slash-int-400).


<br/>

### `Method SaveStream:Int(stream:TStream, flags:Int = 0, indent:Int = 0, precision:Int = 17)`

Writes the JSON representation of the object to the stream output.

The stream should already be open for writing.
Valid flags include [JSON_COMPACT](../../../brl/brl.json/#const-json-compact-int-20), [JSON_ENSURE_ASCII](../../../brl/brl.json/#const-json-ensure-ascii-int-40), [JSON_SORT_KEYS](../../../brl/brl.json/#const-json-sort-keys-int-80), [JSON_PRESERVE_ORDER](../../../brl/brl.json/#const-json-preserve-order-int-100), [JSON_ENCODE_ANY](../../../brl/brl.json/#const-json-encode-any-int-200) and [JSON_ESCAPE_SLASH](../../../brl/brl.json/#const-json-escape-slash-int-400).


<br/>

## Functions

### `Function Load:TJSON(data:Object, flags:Int = 0, error:TJSONError Var)`

Loads JSON text from a String or TStream.

The stream should already be open for reading.
Valid flags include [JSON_REJECT_DUPLICATES](../../../brl/brl.json/#const-json-reject-duplicates-int-1), [JSON_DISABLE_EOF_CHECK](../../../brl/brl.json/#const-json-disable-eof-check-int-2), [JSON_DECODE_ANY](../../../brl/brl.json/#const-json-decode-any-int-4), [JSON_DECODE_INT_AS_REAL](../../../brl/brl.json/#const-json-decode-int-as-real-int-8) and [JSON_ALLOW_NUL](../../../brl/brl.json/#const-json-allow-nul-int-10).


<br/>

