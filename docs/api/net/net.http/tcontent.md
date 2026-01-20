---
id: tcontent
title: TContent
sidebar_label: TContent
---

Abstract representation of HTTP request content.


This type defines the interface for various content types that can be sent in HTTP requests.


## Methods

### `Method GetContentType:String()`

Returns the MIME content type of the request body.

<br/>

### `Method GetLength:Long()`

Returns the length of the content in bytes, or -1 if unknown.

<br/>

### `Method Read:Size_T(buffer:Byte Ptr, size:Size_T) Abstract`

Reads up to 'size' bytes into the provided buffer.

Returns the number of bytes actually read, or 0 if the end of the content is reached.


<br/>

### `Method CanReplay:Int()`

Indicates whether the content can be replayed for retries.

<br/>

### `Method Rewind:Int()`

Rewinds the content to the beginning for replay.

Returns [True](../../../brl/brl.blitz/#true) if successful, [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method Clone:TContent()`

Clones the content for replay purposes.

Returns a new instance of [TContent](../../../net/net.http/tcontent) that is a copy of the original, or [Null](../../../brl/brl.blitz/#null) if cloning is not supported.


<br/>

