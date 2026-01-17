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

### `Method GetOrientation:Int()`

Gets the orientation of a display

#### Returns
The orientation of the display, or [SDL_ORIENTATION_UNKNOWN](../../../sdl/sdl.sdlvideo/#const-sdlorientationunknownint-0) if it isn't available.


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

### `Method GetDisplayMode:Int(modeIndex:Int, mode:SDLDisplayMode Var)`

Gets information about a specific display mode.

#### Returns
A display mode or Null on failure.


<br/>

### `Method GetDesktopDisplayMode:Int(mode:SDLDisplayMode Var)`

Gets information about the desktop display mode.

#### Returns
A display mode or Null on failure.


<br/>

### `Method GetCurrentDisplayMode:Int(mode:SDLDisplayMode Var)`

Gets information about the current display mode.

#### Returns
A display mode or Null on failure.


<br/>

### `Method GetClosestDisplayMode:SDLDisplayMode Ptr(mode:SDLDisplayMode, closest:SDLDisplayMode Var)`

Gets the closest match to this display mode.

The available display modes are scanned and the closest mode matching the requested mode and returned.
The mode format and refresh rate default to the desktop mode if they are set to 0.
The modes are scanned with size being first priority, format being second priority, and finally checking the refresh rate.
If all the available modes are too small, then Null is returned.


#### Returns
The closest mode or Null if no matching display mode was available.


<br/>

