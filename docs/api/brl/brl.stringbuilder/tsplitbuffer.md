---
id: tsplitbuffer
title: TSplitBuffer
sidebar_label: TSplitBuffer
---

An array of split text from a TStringBuilder.


Note that the TSplitBuffer is only valid while its parent TStringBuilder is unchanged.
Once you modify the TStringBuffer you should call Split() again.


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

