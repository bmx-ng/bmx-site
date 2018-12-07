---
id: tsdldisplay
title: TSDLDisplay
sidebar_label: TSDLDisplay
---

Represents an indexed video display.


## Methods

### `Method GetName:String()`

Gets the name of the display.

<br/>

### `Method GetBounds:Int(w:Int Var, h:Int Var)`

Gets the desktop area represented by the display, with the primary display located at 0,0.

<br/>

### `Method GetDPI:Int(ddpi:Float Var, hdpi:Float Var, vdpi:Float Var)`

Gets the diagonal, horizontal and vertical dots/pixels-per-inch for the display.

#### Returns
0 on success, or -1 if no DPI information is available.


<br/>

### `Method GetUsableBounds:Int(w:Int Var, h:Int Var)`

Gets the usable desktop area represented by a display, with the primary display located at 0,0.

This is the same area as SDL_GetDisplayBounds() reports, but with portions reserved by the system removed.
For example, on Mac OS X, this subtracts the area occupied by the menu bar and dock.
Setting a window to be fullscreen generally bypasses these unusable areas, so these are good guidelines for the
maximum space available to a non-fullscreen window.


<br/>

### `Method GetNumDisplayModes:Int()`

Returns the number of available display modes.

<br/>

### `Method GetDisplayMode:TSDLDisplayMode(modeIndex:Int)`

Gets information about a specific display mode.

#### Returns
A display mode or Null on failure.


<br/>

### `Method GetDesktopDisplayMode:TSDLDisplayMode()`

Gets information about the desktop display mode.

#### Returns
A display mode or Null on failure.


<br/>

### `Method GetCurrentDisplayMode:TSDLDisplayMode()`

Gets information about the current display mode.

#### Returns
A display mode or Null on failure.


<br/>

