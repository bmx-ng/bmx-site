---
id: tsdlrenderer
title: TSDLRenderer
sidebar_label: TSDLRenderer
---

A 2D rendering context.


## Methods

### `Method GetWindow:TSDLWindow()`

Get the window associated with the renderer.

<br/>

### `Method CreateTexture:TSDLTexture(format:UInt, access:Int, width:Int, height:Int)`

Creates a texture for a rendering context.

<br/>

### `Method CreateTextureFromSurface:TSDLTexture(surface:TSDLSurface)`

Creates a texture from an existing surface.

<br/>

### `Method GetDrawBlendMode:Int(blendMode:Int Var)`

Gets the blend mode used for drawing operations.

<br/>

### `Method GetDrawColor:Int(r:Byte Var, g:Byte Var, b:Byte Var, a:Byte Var)`

Gets the color used for drawing operations (Rect, Line and Clear).

<br/>

### `Method GetTarget:TSDLTexture()`

Gets the current render target.

The default render target is the window for which the renderer was created, and is reported as [Null](../../../brl/brl.blitz/#null) here.


#### Returns
The current render target or [Null](../../../brl/brl.blitz/#null) for the default render target.


<br/>

### `Method GetOutputSize:Int(w:Int Var, h:Int Var)`

Gets the output size in pixels of a rendering context.

<br/>

### `Method Clear:Int()`

Clears the current rendering target with the drawing color.

<br/>

### `Method Copy:Int(texture:TSDLTexture, sx:Int = -1, sy:Int = -1, sw:Int = -1, sh:Int = -1, dx:Int = -1, dy:Int = -1, dw:Int = -1, dh:Int = -1)`

Copies a portion of the texture to the current rendering target.

<br/>

### `Method CopyEx:Int(texture:TSDLTexture, sx:Int = -1, sy:Int = -1, sw:Int = -1, sh:Int = -1, dx:Int = -1, dy:Int = -1, dw:Int = -1, dh:Int = -1, angle:Double = 0, cx:Int = -1, cy:Int = -1, flipMode:Int = SDL_FLIP_NONE)`

Copies a portion of the texture to the current rendering target, optionally rotating it by angle around the given center and also flipping it top-bottom and/or left-right.

<br/>

### `Method DrawLine:Int(x1:Int, y1:Int, x2:Int, y2:Int)`

Draws a line on the current rendering target.

<br/>

### `Method DrawLines:Int(points:Int Ptr, count:Int)`

Draws a series of connected lines on the current rendering target.

A point consists of a pair of Ints (x, y), where <b>count</b> is the count of pairs.


<br/>

### `Method DrawPoint:Int(x:Int, y:Int)`

Draws a point on the current rendering target.

<br/>

### `Method DrawPoints:Int(points:Int Ptr, count:Int)`

Draws multiple points on the current rendering target.

<br/>

### `Method DrawRect:Int(x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Draws a rectangle on the current rendering target.

<br/>

### `Method DrawRects:Int(rects:Int Ptr, count:Int)`

Draws some number of rectangles on the current rendering target.

<br/>

### `Method FillRect:Int(x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Fills a rectangle on the current rendering target with the drawing color.

<br/>

### `Method FillRects:Int(rects:Int Ptr, count:Int)`

Fills some number of rectangles on the current rendering target with the drawing color.

#### Returns
0 on success or a negative error code on failure; call [SDLGetError](../../../sdl/sdl.sdl/#function-sdlgeterrorstring) for more information.


<br/>

### `Method Geometry:Int(texture:TSDLTexture, vertices:SDLVertex Ptr, numVertices:Int, indices:Int Ptr, numIndices:Int)`

Renders a list of triangles, optionally using a texture and indices into the vertex array Color and alpha modulation is done per vertex.

#### Returns
0 on success, or -1 if the operation is not supported


<br/>

### `Method GetInfo:SDLRendererInfo()`

Gets information about the rendering context.

<br/>

### `Method GetIntegerScale:Int()`

Gets whether integer scales are forced for resolution-independent rendering.

<br/>

### `Method GetLogicalSize(w:Int Var, h:Int Var)`

Gets device independent resolution for rendering.

<br/>

### `Method GetScale(x:Float Var, y:Float Var)`

Gets the drawing scale for the current target.

<br/>

### `Method GetViewport(x:Int Var, y:Int Var, w:Int Var, h:Int Var)`

Gets the drawing area for the current target.

<br/>

### `Method IsClipEnabled:Int()`

Gets whether clipping is enabled on the given renderer.

<br/>

### `Method Present()`

Updates the screen with any rendering performed since the previous call.

<br/>

### `Method ReadPixels:Int(format:UInt, pixels:Byte Ptr, pitch:Int, x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Reads pixels from the current rendering target.

<br/>

### `Method SetClipRect:Int(x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Sets the clip rectangle for rendering on the specified target.

<br/>

### `Method SetIntegerScale:Int(enable:Int)`

Sets whether to force integer scales for resolution-independent rendering.

Restricts the logical viewport to integer values - that is, when a resolution is between two multiples
of a logical size, the viewport size is rounded down to the lower multiple.


<br/>

### `Method SetLogicalSize:Int(w:Int, h:Int)`

Sets a device independent resolution for rendering.

Uses the viewport and scaling functionality to allow a fixed logical resolution for rendering,
regardless of the actual output resolution. If the actual output resolution doesn't have the same aspect ratio
the output rendering will be centered within the output display.

If the output display is a window, mouse and touch events in the window will be filtered and scaled so they
seem to arrive within the logical resolution. The SDL_HINT_MOUSE_RELATIVE_SCALING hint controls whether relative motion
events are also scaled.

If this method results in scaling or subpixel drawing by the rendering backend, it will be handled using the appropriate quality hints.


<br/>

### `Method SetScale:Int(scaleX:Float, scaleY:Float)`

Sets the drawing scale for rendering on the current target.

<br/>

### `Method SetViewport:Int(x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Sets the drawing area for rendering on the current target.

Use defaults (-1) to set viewport to entire target.


<br/>

### `Method TargetSupported:Int()`

Determines whether a window supports the use of render targets.

<br/>

### `Method SetDrawBlendMode:Int(blendMode:Int)`

Sets the blend mode used for drawing operations (Fill and Line).

<br/>

### `Method SetDrawColor:Int(r:Byte, g:Byte, b:Byte, a:Byte)`

Sets the color used for drawing operations (Rect, Line and Clear).

<br/>

### `Method SetTarget:Int(texture:TSDLTexture)`

Sets a texture as the current rendering target. The texture must have been created with the [SDL_TEXTUREACCESS_TARGET](../../../sdl/sdl.sdlrender/#const-sdltextureaccesstargetuint-2) flag.

Before using this method, you should check the SDL_RENDERER_TARGETTEXTURE bit in the flags of SDL_RendererInfo
to see if render targets are supported.

The default render target is the window for which the renderer was created.
To stop rendering to a texture and render to the window again, call this method with a [Null](../../../brl/brl.blitz/#null) texture.


#### Returns
0 on success or a negative error code on failure; call [SDLGetError](../../../sdl/sdl.sdl/#function-sdlgeterrorstring)() for more information.


<br/>

### `Method WindowToLogical(windowX:Int, windowY:Int, logicalX:Float Var, logicalY:Float Var)`

Gets logical coordinates of a point in the renderer when given real coordinates of point in the window.

Logical coordinates will differ from real coordinates when render is scaled and logical renderer size set.


<br/>

### `Method LogicalToWindow(logicalX:Float, logicalY:Float, windowX:Int Var, windowY:Int Var)`

Gets real coordinates of a point in the window when given logical coordinates of point in the renderer.

Logical coordinates will differ from real coordinates when render is scaled and logical renderer size set.


<br/>

### `Method SetVSync:Int(vsync:Int)`

Toggles VSync of the renderer.

<b>vsync</b> is 1 for on, 0 for off. All other values are reserved.


#### Returns
0 on success, or non-zero on failure.


<br/>

### `Method Destroy()`

Destroys the rendering context for a window and free associated textures.

<br/>

## Functions

### `Function Create:TSDLRenderer(window:TSDLWindow, index:Int = -1, flags:UInt = 0)`

Creates a 2D rendering context for a window.

Note that providing no flags gives priority to available [SDL_RENDERER_ACCELERATED](../../../sdl/sdl.sdlrender/#const-sdlrendereracceleratedint-02) renderers
<b>flags</b> can be one or more of the following values -
|----------------------------|------------------------------------------------|
| SDL_RENDERER_SOFTWARE      | the renderer is a software fallback            |
| SDL_RENDERER_ACCELERATED   | the renderer uses hardware acceleration        |
| SDL_RENDERER_PRESENTVSYNC  | present is synchronized with the refresh rate  |
| SDL_RENDERER_TARGETTEXTURE | the renderer supports rendering to texture     |
|----------------------------|------------------------------------------------|


<br/>

### `Function CreateSoftwareRenderer:TSDLRenderer(surface:TSDLSurface)`

Creates a 2D software rendering context for a surface.

<br/>

### `Function GetRenderer:TSDLRenderer(window:TSDLWindow)`

Gets the renderer associated with a window.

<br/>

