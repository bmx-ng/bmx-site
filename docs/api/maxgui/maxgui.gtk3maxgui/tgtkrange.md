---
id: tgtkrange
title: TGTKRange
sidebar_label: TGTKRange
---

A base-type for handling slider / range gadgets - ScrollBar and TrackBar


## Methods

### `Method SetRange:Int(visible:Int, total:Int)`

Sets the slider range.

<br/>

### `Method SetProp:Int(value:Int)`

Sets the value on the slider.

<br/>

### `Method GetProp:Int()`

Returns the current slider value.

<br/>

## Functions

### `Function OnChangeValue:Int(widget:Byte Ptr, scrolltype:Int, value:Double, obj:Object)`

Callback for user changing of a slider.

Tries to keep the value within the desired range.


<br/>

