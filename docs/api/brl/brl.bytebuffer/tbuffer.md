---
id: tbuffer
title: TBuffer
sidebar_label: TBuffer
---

A buffer is a list of elements of a specific type.


## Methods

### `Method Clear:TBuffer()`

Clears the buffer.

Does not change the the content of the buffer, other than to set the position to zero, the mark is cleared, and the limit is set to buffer size.


<br/>

### `Method Flip:TBuffer()`

Flips the buffer.

The limit is set to the current position, position set to zero, and the mark is cleared.


<br/>

### `Method Limit:Int()`

Return the buffer limit.

<br/>

### `Method Limit:TBuffer(newLimit:Int)`

Sets the buffer limit.

<br/>

### `Method Mark:TBuffer()`

Marks the current position that can be returned to later with a call to [Reset](../../../brl/brl.bytebuffer/tbuffer/#method-resettbuffer).

<br/>

### `Method Position:Int()`

Returns the current position of the buffer.

<br/>

### `Method Position:TBuffer(newPos:Int)`

Sets the position of the buffer.

<br/>

### `Method HasRemaining:Int()`

Returns whether there are any bytes remaining in the buffer.

<br/>

### `Method Remaining:Int()`

Returns the number of bytes remaining in the buffer.

<br/>

### `Method Reset:TBuffer()`

Resets the current position to that of the last mark.

If mark is not set, this method will throw.


<br/>

### `Method Rewind:TBuffer()`

Rewinds the the position back to the start of the buffer.

<br/>

