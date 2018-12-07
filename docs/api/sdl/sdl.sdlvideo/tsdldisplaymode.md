---
id: tsdldisplaymode
title: TSDLDisplayMode
sidebar_label: TSDLDisplayMode
---

The description of a display mode.


## Methods

### `Method Format:UInt()`

One of the SDL pixel formats.

<br/>

### `Method Width:Int()`

The width, in screen coordinates.

<br/>

### `Method Height:Int()`

The height, in screen coordinates.

<br/>

### `Method RefreshRate:Int()`

The refresh rate (in Hz), or 0 for unspecified.

<br/>

### `Method DriverData:Byte Ptr()`

Driver-specific data.

<br/>

### `Method GetClosestDisplayMode:TSDLDisplayMode(display:TSDLDisplay)`

Gets the closest match to this display mode.

The available display modes are scanned and the closest mode matching the requested mode and returned.
The mode format and refresh rate default to the desktop mode if they are set to 0.
The modes are scanned with size being first priority, format being second priority, and finally checking the refresh rate.
If all the available modes are too small, then Null is returned.


#### Returns
The closest mode or Null if no matching display mode was available.


<br/>

## Functions

### `Function Create:TSDLDisplayMode(format:UInt, width:Int, height:Int, refreshRate:Int)`

Creates a new custom display mode, useful for calling [GetClosestDisplayMode](../../../sdl/sdl.sdlvideo/tsdldisplaymode/#method-getclosestdisplaymode-tsdldisplaymode-display-tsdldisplay).

<br/>

