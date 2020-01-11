---
id: tjson
title: TJSON
sidebar_label: TJSON
---

Base type for JSON objects.


## Methods

### `Method SaveString:String(flags:Int = 0, indent:Int = 0, precision:Int = 17)`

Returns the JSON representation of the object as a String, or NULL on error.

Valid flags include [JSON_COMPACT](../../../brl/brl.json/#const-jsoncompactint-20), [JSON_ENSURE_ASCII](../../../brl/brl.json/#const-jsonensureasciiint-40), [JSON_SORT_KEYS](../../../brl/brl.json/#const-jsonsortkeysint-80), [JSON_PRESERVE_ORDER](../../../brl/brl.json/#const-jsonpreserveorderint-100), [JSON_ENCODE_ANY](../../../brl/brl.json/#const-jsonencodeanyint-200) and [JSON_ESCAPE_SLASH](../../../brl/brl.json/#const-jsonescapeslashint-400).


<br/>

### `Method SaveStream:Int(stream:TStream, flags:Int = 0, indent:Int = 0, precision:Int = 17)`

Writes the JSON representation of the object to the stream output.

The stream should already be open for writing.
Valid flags include [JSON_COMPACT](../../../brl/brl.json/#const-jsoncompactint-20), [JSON_ENSURE_ASCII](../../../brl/brl.json/#const-jsonensureasciiint-40), [JSON_SORT_KEYS](../../../brl/brl.json/#const-jsonsortkeysint-80), [JSON_PRESERVE_ORDER](../../../brl/brl.json/#const-jsonpreserveorderint-100), [JSON_ENCODE_ANY](../../../brl/brl.json/#const-jsonencodeanyint-200) and [JSON_ESCAPE_SLASH](../../../brl/brl.json/#const-jsonescapeslashint-400).


<br/>

## Functions

### `Function Load:TJSON(data:Object, flags:Int = 0, error:TJSONError Var)`

Loads JSON text from a String or TStream.

The stream should already be open for reading.
Valid flags include [JSON_REJECT_DUPLICATES](../../../brl/brl.json/#const-jsonrejectduplicatesint-1), [JSON_DISABLE_EOF_CHECK](../../../brl/brl.json/#const-jsondisableeofcheckint-2), [JSON_DECODE_ANY](../../../brl/brl.json/#const-jsondecodeanyint-4), [JSON_DECODE_INT_AS_REAL](../../../brl/brl.json/#const-jsondecodeintasrealint-8) and [JSON_ALLOW_NUL](../../../brl/brl.json/#const-jsonallownulint-10).


<br/>

