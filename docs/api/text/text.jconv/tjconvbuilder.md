---
id: tjconvbuilder
title: TJConvBuilder
sidebar_label: TJConvBuilder
---

Creates an instance of [TJConv](../../../text/text.jconv/tjconv) with custom settings.


## Methods

### `Method Build:TJConv()`

Builds the [TJConv](../../../text/text.jconv/tjconv) instance.

<br/>

### `Method WithEmptyArrays:TJConvBuilder()`

Null/Empty array fields will be output to JSON as `[]`.

The default is not to output these fields.


<br/>

### `Method RegisterSerializer:TJConvBuilder(sourceType:String, serializer:Object)`

Registers a serializer for the given source type.

<br/>

### `Method WithBoxing:TJConvBuilder()`

Registers serializers for boxed primitive numbers.

Boxed primitives allow for the provision of serializing [Null](../../../brl/brl.blitz/#null) primitive numbers via JSON.


<br/>

### `Method WithPrecision:TJConvBuilder(precision:Int)`

Serialization of real numbers will have a maximum precision of <b>precision</b> fractional digits.

<br/>

### `Method WithIndent:TJConvBuilder(indent:Int)`

Enables pretty-printing of the serialized json, using <b>indent</b> spaces of indentation.

The default, 0, disables pretty-printing. The maximum indent size is 31.


<br/>

### `Method WithCompact:TJConvBuilder()`

Enables compact representation, removing extra spacing.

<br/>

