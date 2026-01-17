---
id: scolor8
title: SColor8
sidebar_label: SColor8
---

An RGBA color with 8-bit components.


## Constructors

### `Method New(r:Byte, g:Byte, b:Byte, a:Byte = 255)`

Creates an [SColor8](../../../brl/brl.color/scolor8) instance using the specified <b>r</b>, <b>g</b>, <b>b</b> and <b>a</b> components.

<br/>

### `Method New(argb:Int)`

Creates an [SColor8](../../../brl/brl.color/scolor8) instance using the specified 32-bit ARGB value.

<br/>

## Operators

### `Method Operator = :Int(col:SColor8)`

Returns [True](../../../brl/brl.blitz/#true) if the components of this color and <b>col</b> are equal.

<br/>

### `Method Operator <> :Int(col:SColor8)`

Returns [True](../../../brl/brl.blitz/#true) if the components of this color and <b>col</b> are not equal.

<br/>

## Methods

### `Method ToRGBA:Int()`

Returns the color as a 32-bit RGBA value.

<br/>

### `Method ToARGB:Int()`

Returns the color as a 32-bit ARGB value.

<br/>

### `Method ToHSL(hue:Float Var, saturation:Float Var, luminance:Float Var)`

Calculates the Hue-Saturation-Luminance (HSL) of the color.

<br/>

### `Method ToHSV(hue:Float Var, saturation:Float Var, value:Float Var)`

Calculates the Hue-Saturation-Value (HSV) of the color.

<br/>

