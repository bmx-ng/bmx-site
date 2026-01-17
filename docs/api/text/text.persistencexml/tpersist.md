---
id: tpersist
title: TPersist
sidebar_label: TPersist
---

Object Persistence.


## Methods

### `Method Serialize:String(obj:Object)`

Serializes the specified Object into a String.

<br/>

### `Method SerializeToString:String(obj:Object)`

Serializes an Object to a String.

<br/>

### `Method SerializeToFile(obj:Object, filename:String)`

Serializes an Object to the file <b>filename</b>.

<br/>

### `Method SerializeToDoc:TxmlDoc(obj:Object)`

Serializes an Object to a TxmlDoc structure.

It is up to the user to free the returned TxmlDoc object.


<br/>

### `Method SerializeToStream(obj:Object, stream:TStream)`

Serializes an Object to a Stream.

It is up to the user to close the stream.


<br/>

### `Method ToString:String()`

Returns the serialized object as a string.

<br/>

### `Method DeSerialize:Object(data:Object)`

De-serializes <b>text</b> into an Object structure.

Accepts a TxmlDoc, TStream or a String (of data).


<br/>

### `Method DeSerializeFromDoc:Object(xmlDoc:TxmlDoc)`

De-serializes <b>doc</b> into an Object structure.

It is up to the user to free the supplied TxmlDoc.


<br/>

### `Method DeSerializeFromFile:Object(filename:Object)`

De-serializes the file <b>filename</b> into an Object structure.

<br/>

### `Method DeSerializeFromStream:Object(stream:TStream)`

De-serializes <b>stream</b> into an Object structure.

<br/>

## Globals

### `Global format:Int = False`

Serialized formatting.

Set to True to have the data formatted nicely. Default is False - off.


<br/>

### `Global compressed:Int = False`

Compressed serialization.

Set to True to compress the serialized data. Default is False - no compression.


<br/>

## Consts

### `Const BMO_VERSION:Int = 8`

File format version

<br/>

