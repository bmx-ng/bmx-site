---
id: tbytebuffer
title: TByteBuffer
sidebar_label: TByteBuffer
---

A [TBuffer](../../../brl/brl.bytebuffer/tbuffer) for bytes.


## Methods

### `Method Order:EByteOrder()`

Gets the byte order used by the [TByteBuffer](../../../brl/brl.bytebuffer/tbytebuffer) when doing [Byte](../../../brl/brl.blitz/#byte) conversions.

<br/>

### `Method Order:TByteBuffer(byteOrder:EByteOrder)`

Sets the byte order to use by the [TByteBuffer](../../../brl/brl.bytebuffer/tbytebuffer) when doing [Byte](../../../brl/brl.blitz/#byte) conversions.

<br/>

### `Method Get:Byte() Abstract`

Returns the [Byte](../../../brl/brl.blitz/#byte) at the current position, and increments the position by 1.

<br/>

### `Method GetShort:Short() Abstract`

Returns the [Short](../../../brl/brl.blitz/#short) at the current position, and increments the position by 2.

<br/>

### `Method GetInt:Int() Abstract`

Returns the [Int](../../../brl/brl.blitz/#int) at the current position, and increments the position by 4.

<br/>

### `Method GetUInt:UInt() Abstract`

Returns the [UInt](../../../brl/brl.blitz/#uint) at the current position, and increments the position by 4.

<br/>

### `Method GetLong:Long() Abstract`

Returns the [Long](../../../brl/brl.blitz/#long) at the current position, and increments the position by 8.

<br/>

### `Method GetULong:ULong() Abstract`

Returns the [ULong](../../../brl/brl.blitz/#ulong) at the current position, and increments the position by 8.

<br/>

### `Method GetSizeT:Size_T() Abstract`

Returns the [Size_T](../../../brl/brl.blitz/#sizet) at the current position, and increments the position by 8 (64-bit) or 4 (32-bit).

<br/>

### `Method GetFloat:Float() Abstract`

Returns the [Float](../../../brl/brl.blitz/#float) at the current position, and increments the position by 4.

<br/>

### `Method GetDouble:Double() Abstract`

Returns the [Double](../../../brl/brl.blitz/#double) at the current position, and increments the position by 8.

<br/>

### `Method GetBytes(dst:Byte Ptr, length:UInt) Abstract`

Copies <b>length</b> bytes into <b>dst</b> at the curent position, and increments the position by <b>length</b>.

<br/>

### `Method Put:TByteBuffer(value:Byte) Abstract`

Writes the specified [Byte](../../../brl/brl.blitz/#byte) to the current position and increments the position by 1.

<br/>

### `Method PutShort:TByteBuffer(value:Short) Abstract`

Writes the specified [Short](../../../brl/brl.blitz/#short) to the current position and increments the position by 2.

<br/>

### `Method PutInt:TByteBuffer(value:Int) Abstract`

Writes the specified [Int](../../../brl/brl.blitz/#int) to the current position and increments the position by 4.

<br/>

### `Method PutUInt:TByteBuffer(value:UInt) Abstract`

Writes the specified [UInt](../../../brl/brl.blitz/#uint) to the current position and increments the position by 4.

<br/>

### `Method PutLong:TByteBuffer(value:Long) Abstract`

Writes the specified [Long](../../../brl/brl.blitz/#long) to the current position and increments the position by 8.

<br/>

### `Method PutULong:TByteBuffer(value:ULong) Abstract`

Writes the specified [ULong](../../../brl/brl.blitz/#ulong) to the current position and increments the position by 8.

<br/>

### `Method PutSizeT:TByteBuffer(value:Size_T) Abstract`

Writes the specified [Size_T](../../../brl/brl.blitz/#sizet) to the current position and increments the position by 8 (64-bit) or 4 (32-bit).

<br/>

### `Method PutFloat:TByteBuffer(value:Float) Abstract`

Writes the specified [Float](../../../brl/brl.blitz/#float) to the current position and increments the position by 4.

<br/>

### `Method PutDouble:TByteBuffer(value:Double) Abstract`

Writes the specified [Double](../../../brl/brl.blitz/#double) to the current position and increments the position by 8.

<br/>

### `Method PutBytes:TByteBuffer(bytes:Byte Ptr, length:UInt) Abstract`

Writes the specified number of bytes to the current position.

<br/>

### `Method Slice:TByteBuffer() Abstract`

Returns a sliced [TByteBuffer](../../../brl/brl.bytebuffer/tbytebuffer) that shares its content with this one.

The new buffer's position, limit, and mark are independent of this buffer.


<br/>

### `Method Slice:TByteBuffer(length:Int) Abstract`

Returns a sliced [TByteBuffer](../../../brl/brl.bytebuffer/tbytebuffer) that shares its content with this one.

The new buffer's position, limit, and mark are independent of this buffer.


<br/>

### `Method Duplicate:TByteBuffer() Abstract`

Creates a duplicate [TByteBuffer](../../../brl/brl.bytebuffer/tbytebuffer) that shares its content with this one.

<br/>

### `Method Compact:TByteBuffer() Abstract`

Compacts this [TByteBuffer](../../../brl/brl.bytebuffer/tbytebuffer).

<br/>

## Functions

### `Function Allocate:TByteBuffer(size:Int)`

Allocates a new [TByteBuffer](../../../brl/brl.bytebuffer/tbytebuffer) of the specific <b>size</b> number of bytes.

<br/>

### `Function Wrap:TByteBuffer(data:Byte[])`

Creates a new [TByteBuffer](../../../brl/brl.bytebuffer/tbytebuffer) by wrapping the provided [Byte](../../../brl/brl.blitz/#byte) array.

<br/>

### `Function Wrap:TByteBuffer(data:Byte Ptr, size:Int)`

Creates a new [TByteBuffer](../../../brl/brl.bytebuffer/tbytebuffer) by wrapping the provided Byte Ptr.

Note that the Byte Ptr is expected to remain valid throughout the use of the [TByteBuffer](../../../brl/brl.bytebuffer/tbytebuffer).
Freeing the associated memory early may result in undefined behaviour.


<br/>

