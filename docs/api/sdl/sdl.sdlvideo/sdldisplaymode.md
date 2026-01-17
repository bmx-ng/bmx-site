---
id: sdldisplaymode
title: SDLDisplayMode
sidebar_label: SDLDisplayMode
---

A structure that contains the description of a display mode.


## Fields

### `Field format:UInt`

pixel format

<br/>

### `Field width:Int`

width, in screen coordinates

<br/>

### `Field height:Int`

height, in screen coordinates

<br/>

### `Field refreshRate:Int`

refresh rate (or zero for unspecified)

<br/>

### `Field driverdata:Byte Ptr`

driver-specific data, initialize to 0

<br/>

## Methods

### `Method BitsPerPixel:Int()`

Returns the bits per pixel for the format

<br/>

