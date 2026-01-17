---
id: tsplitbuffer
title: TSplitBuffer
sidebar_label: TSplitBuffer
---

An array of split text from a TStringBuilder.


Note that the [TSplitBuffer](../../../brl/brl.stringbuilder/tsplitbuffer) is only valid while its parent [TStringBuilder](../../../brl/brl.stringbuilder/tstringbuilder) is unchanged.
Once you modify the [TSplitBuffer](../../../brl/brl.stringbuilder/tsplitbuffer) you should call Split() again.


## Methods

### `Method Length:Int()`

The number of split elements.

<br/>

### `Method Text:String(index:Int)`

Returns the text for the given index in the split buffer.

<br/>

### `Method ToArray:String[]()`

Creates a new string array of all the split elements.

<br/>

### `Method ToInt:Int(index:Int)`

Returns the split element at the specified index as an [Int](../../../brl/brl.blitz/#int).

If the element is not a valid [Int](../../../brl/brl.blitz/#int), 0 is returned.


<br/>

### `Method ToFloat:Float(index:Int)`

Returns the split element at the specified index as a [Float](../../../brl/brl.blitz/#float).

If the element is not a valid [Float](../../../brl/brl.blitz/#float), 0.0 is returned.


<br/>

### `Method ToDouble:Double(index:Int)`

Returns the split element at the specified index as a [Double](../../../brl/brl.blitz/#double).

If the element is not a valid [Double](../../../brl/brl.blitz/#double), 0.0 is returned.


<br/>

### `Method ToLong:Long(index:Int)`

Returns the split element at the specified index as a [Long](../../../brl/brl.blitz/#long).

If the element is not a valid [Long](../../../brl/brl.blitz/#long), 0 is returned.


<br/>

### `Method ToULong:ULong(index:Int)`

Returns the split element at the specified index as a [ULong](../../../brl/brl.blitz/#ulong).

If the element is not a valid [ULong](../../../brl/brl.blitz/#ulong), 0 is returned.


<br/>

### `Method ToUInt:UInt(index:Int)`

Returns the split element at the specified index as a [UInt](../../../brl/brl.blitz/#uint).

If the element is not a valid [UInt](../../../brl/brl.blitz/#uint), 0 is returned.


<br/>

### `Method ToShort:Short(index:Int)`

Returns the split element at the specified index as a [Short](../../../brl/brl.blitz/#short).

If the element is not a valid [Short](../../../brl/brl.blitz/#short), 0 is returned.


<br/>

### `Method ToByte:Byte(index:Int)`

Returns the split element at the specified index as a [Byte](../../../brl/brl.blitz/#byte).

If the element is not a valid [Byte](../../../brl/brl.blitz/#byte), 0 is returned.


<br/>

### `Method ToSizeT:Size_T(index:Int)`

Returns the split element at the specified index as a [Size_T](../../../brl/brl.blitz/#sizet).

If the element is not a valid [Size_T](../../../brl/brl.blitz/#sizet), 0 is returned.


<br/>

### `Method Split:TSplitBuffer(index:Int, separator:String)`

Creates a new split buffer of the split element at the specified index.

<br/>

