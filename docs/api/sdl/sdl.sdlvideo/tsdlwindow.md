---
id: tsdlwindow
title: TSDLWindow
sidebar_label: TSDLWindow
---

An SDL Window.


## Methods

### `Method GetDisplay:TSDLDisplay()`

Gets the display associated with the window.

#### Returns
Returns the display containing the center of the window on success or Null on failure.


<br/>

### `Method SetDisplayMode:Int(Mode:TSDLDisplayMode)`

Sets the display mode to use when the window is visible at fullscreen.

This only affects the display mode used when the window is fullscreen. To change the window size when the window is not fullscreen,
use [SetSize](../../../sdl/sdl.sdlvideo/tsdlwindow/#method-setsizewint-hint)().


#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method GetDisplayMode:TSDLDisplayMode()`

Gets information about the display mode to use when a window is visible at fullscreen.

#### Returns
The display mode on success or Null on failure.


<br/>

### `Method GetPixelFormat:UInt()`

Gets the pixel format associated with the window.

#### Returns
The pixel format of the window on success or SDL_PIXELFORMAT_UNKNOWN on failure.


<br/>

### `Method GetID:UInt()`

Gets the numeric ID of the window, for logging purposes.

#### Returns
The ID of the window on success or 0 on failure.


<br/>

### `Method GetTitle:String()`

Gets the title of the window.

<br/>

### `Method SetTitle(title:String)`

Sets the title of the window.

<br/>

### `Method SetIcon(icon:TSDLSurface)`

Sets the icon for the window.

<br/>

### `Method SetPosition(x:Int, y:Int)`

Sets the position of the window.

The window coordinate origin is the upper left of the display.


<br/>

### `Method GetPosition(x:Int Var, y:Int Var)`

Gets the position of the window.

<br/>

### `Method SetSize(w:Int, h:Int)`

Sets the size of the window's client area.

The window size in screen coordinates may differ from the size in pixels, if the window was created with
[SDL_WINDOW_ALLOW_HIGHDPI](../../../sdl/sdl.sdlvideo/#const-sdlwindowallowhighdpiuint-00002000) on a platform with high-dpi support (e.g. iOS or OS X).
Use [GLGetDrawableSize](../../../sdl/sdl.sdlvideo/tsdlwindow/#method-glgetdrawablesizewint-var-hint-var)() or SDLGetRendererOutputSize() to get the real client area size in pixels.
Fullscreen windows automatically match the size of the display mode, and you should use SetWindowDisplayMode() to change their size.


<br/>

### `Method GetSize(w:Int Var, h:Int Var)`

Gets the size of the window's client area.

The window size in screen coordinates may differ from the size in pixels, if the window was created with
[SDL_WINDOW_ALLOW_HIGHDPI](../../../sdl/sdl.sdlvideo/#const-sdlwindowallowhighdpiuint-00002000) on a platform with high-dpi support (e.g. iOS or OS X).
Use [GLGetDrawableSize](../../../sdl/sdl.sdlvideo/tsdlwindow/#method-glgetdrawablesizewint-var-hint-var)() or SDLGetRendererOutputSize() to get the real client area size in pixels.


<br/>

### `Method GetBorderSize:Int(wTop:Int Var, wLeft:Int Var, wBottom:Int Var, wRight:Int Var)`

Gets the size of the window's borders (decorations) around the client area.

Note: If this method fails (returns -1), the size values will be initialized to 0, 0, 0, 0, as if the window in question was borderless.
This method also returns -1 if getting the information is not supported.
This method is only supported on X11.


<br/>

### `Method SetMinimumSize(w:Int, h:Int)`

Sets the minimum size of the window's client area.

<br/>

### `Method GetMinimumSize(w:Int Var, h:Int Var)`

Gets the minimum size of a window's client area.

<br/>

### `Method SetMaximumSize(w:Int, h:Int)`

Sets the maximum size of the window's client area.

<br/>

### `Method GetMaximumSize(w:Int Var, h:Int Var)`

Gets the maximum size of the window's client area.

<br/>

### `Method SetBordered(bordered:Int)`

Sets the border state of the window.

This will add or remove the window's SDL_WINDOW_BORDERLESS flag and add or remove the border from the actual window.
This is a no-op if the window's border already matches the requested state.
You can't change the border state of a fullscreen window.


<br/>

### `Method SetResizable(resizable:Int)`

Sets the user-resizable state of the window.

This will add or remove the window's SDL_WINDOW_RESIZABLE flag and allow/disallow user resizing of the window.
This is a no-op if the window's resizable state already matches the requested state.
You can't change the resizable state of a fullscreen window.


<br/>

### `Method Show()`

Shows the window.

<br/>

### `Method Hide()`

Hides the window.

<br/>

### `Method Raise()`

Raises the window above other windows and sets the input focus.

<br/>

### `Method Maximize()`

Makes the window as large as possible.

<br/>

### `Method Minimize()`

Minimizes the window to an iconic representation.

<br/>

### `Method Restore()`

Restores the size and position of a minimized or maximized window.

<br/>

### `Method SetFullScreen:Int(flags:UInt)`

Sets the window's fullscreen state.

<b>flags</b> may be SDL_WINDOW_FULLSCREEN, for "real" fullscreen with a videomode change; SDL_WINDOW_FULLSCREEN_DESKTOP
for "fake" fullscreen that takes the size of the desktop; and 0 for windowed mode.


#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method GetSurface:TSDLSurface()`

Gets the SDL surface associated with the window.

A new surface will be created with the optimal format for the window, if necessary.
This surface will be freed when the window is destroyed. Do not free this surface.
This surface will be invalidated if the window is resized. After resizing a window this method must be called again to return a valid surface.
You may not combine this with 3D or the rendering API on this window.


#### Returns
The surface associated with the window, or Null on failure.


<br/>

### `Method UpdateSurface:Int()`

Copies the window surface to the screen.

This is the method you use to reflect any changes to the surface on the screen.


#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method SetGrab(grabbed:Int)`

Sets the window's input grab mode.

When input is grabbed the mouse is confined to the window.
If the caller enables a grab while another window is currently grabbed, the other window loses its grab in favor of the caller's window.


<br/>

### `Method GetGrab:Int()`

Gets a window's input grab mode.

#### Returns
True if input is grabbed, False otherwise.


<br/>

### `Method SetBrightness:Int(brightness:Float)`

Sets the brightness (gamma multiplier) for the display that owns the window.

Despite the name and signature, this method sets the brightness of the entire display, not an individual window.
A window is considered to be owned by the display that contains the window's center pixel. (The index of this display can be
retrieved using [GetDisplay](../../../sdl/sdl.sdlvideo/tsdlwindow/#method-getdisplaytsdldisplay)().) The brightness set will not follow the window if it is moved to another display


#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method GetBrightness:Float()`

Gets the brightness (Gamma multiplier) For the display that owns the window.

Despite the name and signature, this method sets the brightness of the entire display, not an individual window.
A window is considered to be owned by the display that contains the window's center pixel. (The index of this display can be
retrieved using [GetDisplay](../../../sdl/sdl.sdlvideo/tsdlwindow/#method-getdisplaytsdldisplay)().) The brightness set will not follow the window if it is moved to another display


#### Returns
The brightness for the display where 0.0 is completely dark and 1.0 is normal brightness.


<br/>

### `Method SetOpacity:Int(opacity:Float)`

Sets the opacity for the window.

The parameter <b>opacity</b> will be clamped internally between 0.0f (transparent) and 1.0f (opaque).
This method also returns -1 if setting the opacity isn't supported.
This method is only supported on DirectFB, X11, Cocoa (Apple Mac OS X) and Microsoft Windows.


#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method GetOpacity:Int(opacity:Float Var)`

Gets the opacity of the window.

If transparency isn't supported on this platform, opacity will be reported as 1.0f without error.
This method also returns -1 if the window is invalid.
This method is only supported on DirectFB, X11, Cocoa (Apple Mac OS X) and Microsoft Windows.


#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method SetModalFor:Int(parent:TSDLWindow)`

Sets the window as a modal for another window.

This function is only supported on X11.


#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method SetInputFocus:Int()`

Explicitly sets input focus to the window.

You almost certainly want [Raise](../../../sdl/sdl.sdlvideo/tsdlwindow/#method-raise)() instead of this function. Use this with caution, as you might give
focus to a window that is completely obscured by other windows.
This method is only supported on X11.


#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method SetGammaRamp:Int(red:Short Ptr, green:Short Ptr, blue:Short Ptr)`

Sets the gamma ramp for the display that owns a given window.

Set the gamma translation table for the red, green, and blue channels of the video hardware. Each table is an
array of 256 16-bit quantities, representing a mapping between the input and output for that channel. The input is
the index into the array, and the output is the 16-bit gamma value at that index, scaled to the output color precision.
Despite the name and signature, this method sets the gamma ramp of the entire display, not an individual window.
A window is considered to be owned by the display that contains the window's center pixel. (The index of this display
can be retrieved using [GetDisplay](../../../sdl/sdl.sdlvideo/tsdlwindow/#method-getdisplaytsdldisplay)().) The gamma ramp set will not follow the window if it is moved to another display.


#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method GetGammaRamp:Int(red:Short Ptr, green:Short Ptr, blue:Short Ptr)`

Gets the gamma ramp for the display that owns the window.

Despite the name and signature, this method sets the gamma ramp of the entire display, not an individual window.
A window is considered to be owned by the display that contains the window's center pixel. (The index of this display
can be retrieved using [GetDisplay](../../../sdl/sdl.sdlvideo/tsdlwindow/#method-getdisplaytsdldisplay)().) The gamma ramp set will not follow the window if it is moved to another display.


#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method Destroy()`

Destroys the window.

<br/>

### `Method GLCreateContext:TSDLGLContext()`

Creates an OpenGL context for use with an OpenGL window, and makes it current.

Windows users new to OpenGL should note that, for historical reasons, GL functions added after OpenGL version 1.1 are
not available by default. Those functions must be loaded at run-time, either with an OpenGL extension-handling
library or with GLGetProcAddress() and its related functions.


#### Returns
The OpenGL context associated with window or Null on error.


<br/>

### `Method GLGetDrawableSize(w:Int Var, h:Int Var)`

Gets the size of a window's underlying drawable in pixels (for use with glViewport).

This may differ from [GetSize](../../../sdl/sdl.sdlvideo/tsdlwindow/#method-getsizewint-var-hint-var)() if we're rendering to a high-DPI drawable, i.e. the window was created with
[SDL_WINDOW_ALLOW_HIGHDPI](../../../sdl/sdl.sdlvideo/#const-sdlwindowallowhighdpiuint-00002000) on a platform with high-DPI support (Apple calls this "Retina"), and not disabled by
the SDL_HINT_VIDEO_HIGHDPI_DISABLED hint.


<br/>

### `Method GLMakeCurrent:Int(context:TSDLGLContext)`

Sets up an OpenGL context for rendering into an OpenGL window.

#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method GLSwap()`

Updates a window with OpenGL rendering.

This is used with double-buffered OpenGL contexts, which are the default.


<br/>

## Functions

### `Function Create:TSDLWindow(title:String, x:Int, y:Int, w:Int, h:Int, flags:UInt)`

Creates a window with the specified position, dimensions, and flags.

#### Returns
The window that was created or Null on failure.


<br/>

