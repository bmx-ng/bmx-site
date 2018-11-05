---
id: tsdlrenderer
title: TSDLRenderer
sidebar_label: TSDLRenderer
---


## Methods

### `Method CreateTexture:TSDLTexture(format:UInt, access:Int, width:Int, height:Int)`

Creates a texture for a rendering context.


### `Method CreateTextureFromSurface:TSDLTexture(surface:TSDLSurface)`

Creates a texture from an existing surface.


### `Method GetDrawBlendMode:Int(blendMode:Int Var)`

Gets the blend mode used for drawing operations.


### `Method GetDrawColor:Int(r:Byte Var, g:Byte Var, b:Byte Var, a:Byte Var)`

Gets the color used for drawing operations (Rect, Line and Clear).


### `Method GetTarget:TSDLSurface()`

Getsthe current render target.


### `Method GetOutputSize:Int(w:Int Var, h:Int Var)`

Gets the output size in pixels of a rendering context.


### `Method Clear:Int()`

Clears the current rendering target with the drawing color.


### `Method Copy:Int(texture:TSDLTexture, sx:Int = -1, sy:Int = -1, sw:Int = -1, sh:Int = -1, dx:Int = -1, dy:Int = -1, dw:Int = -1, dh:Int = -1)`

Copies a portion of the texture to the current rendering target.


### `Method CopyEx:Int(texture:TSDLTexture, sx:Int = -1, sy:Int = -1, sw:Int = -1, sh:Int = -1, dx:Int = -1, dy:Int = -1, dw:Int = -1, dh:Int = -1, angle:Double = 0, cx:Int = -1, cy:Int = -1, flipMode:Int = SDL_FLIP_NONE)`

Copies a portion of the texture to the current rendering target, optionally rotating it by angle around the given center and also flipping it top-bottom and/or left-right.


### `Method DrawLine:Int(x1:Int, y1:Int, x2:Int, y2:Int)`

Draws a line on the current rendering target.


### `Method DrawLines:Int(points:Int Ptr, count:Int)`

Draws a series of connected lines on the current rendering target.

A point consists of a pair of Ints (x, y), where <b>count</b> is the count of pairs.



### `Method DrawPoint:Int(x:Int, y:Int)`

Draws a point on the current rendering target.


### `Method DrawPoints:Int(points:Int Ptr, count:Int)`

Draws multiple points on the current rendering target.


### `Method DrawRect:Int(x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Draws a rectangle on the current rendering target.


### `Method DrawRects:Int(rects:Int Ptr, count:Int)`

Draws some number of rectangles on the current rendering target.


### `Method FillRect:Int(x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Fills a rectangle on the current rendering target with the drawing color.


### `Method GetIntegerScale:Int()`

Gets whether integer scales are forced for resolution-independent rendering.


### `Method GetLogicalSize(w:Int Var, h:Int Var)`

Gets device independent resolution for rendering.


### `Method GetScale(x:Float Var, y:Float Var)`

Gets the drawing scale for the current target.


### `Method GetViewport(x:Int Var, y:Int Var, w:Int Var, h:Int Var)`

Gets the drawing area for the current target.


### `Method IsClipEnabled:Int()`

Gets whether clipping is enabled on the given renderer.


### `Method Present()`

Updates the screen with any rendering performed since the previous call.


### `Method ReadPixels:Int(format:UInt, pixels:Byte Ptr, pitch:Int, x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Reads pixels from the current rendering target.


### `Method SetClipRect:Int(x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Sets the clip rectangle for rendering on the specified target.


### `Method SetIntegerScale:Int(enable:Int)`

Sets whether to force integer scales for resolution-independent rendering.


### `Method SetLogicalSize:Int(w:Int, h:Int)`

Sets a device independent resolution for rendering.


### `Method SetScale:Int(scaleX:Float, scaleY:Float)`

Sets the drawing scale for rendering on the current target.


### `Method SetViewport:Int(x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Sets the drawing area for rendering on the current target.


### `Method TargetSupported:Int()`

Determines whether a window supports the use of render targets.


### `Method SetDrawBlendMode:Int(blendMode:Int)`

Sets the blend mode used for drawing operations (Fill and Line).


### `Method SetDrawColor:Int(r:Byte, g:Byte, b:Byte, a:Byte)`

Sets the color used for drawing operations (Rect, Line and Clear).


### `Method SetTarget:Int(texture:TSDLTexture)`

Sets a texture as the current rendering target.


### `Method Destroy()`

Destroys the rendering context for a window and free associated textures.


## Functions

### `Function Create:TSDLRenderer(window:TSDLWindow, index:Int = -1, flags:UInt = 0)`

Creates a 2D rendering context for a window.

Note that providing no flags gives priority to available [SDL_RENDERER_ACCELERATED](../../../sdl/sdl.sdlrender/#const-sdl-renderer-accelerated-int-02) renderers



### `Function CreateSoftwareRenderer:TSDLRenderer(surface:TSDLSurface)`

Creates a 2D software rendering context for a surface.


### `Function GetRenderer:TSDLRenderer(window:TSDLWindow)`

Gets the renderer associated with a window.


