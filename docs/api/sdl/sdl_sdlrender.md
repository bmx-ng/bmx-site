---
id: sdl.sdlrender
title: SDL.SDLRender
sidebar_label: SDL.SDLRender
---


SDLRender contains functions for 2D accelerated rendering.

This API supports the following features:

* single pixel points
* single pixel lines
* filled rectangles
* texture images
All of these may be drawn in opaque, blended, or additive modes.

The texture images can have an additional color tint or alpha modulation applied to them, and may also be stretched with linear interpolation, rotated or flipped/mirrored.

For advanced functionality like particle effects or actual 3D you should use SDL's OpenGL/Direct3D support or one of the many available 3D engines.

> This API is not designed to be used from multiple threads.



## Types
| Type | Description |
|---|---|
| [TSDLRenderer](../../sdl/sdl.sdlrender/tsdlrenderer) | A 2D rendering context. |
| [TSDLTexture](../../sdl/sdl.sdlrender/tsdltexture) | An efficient driver-specific representation of pixel data. |

## Functions

### `Function SDLGetNumRenderDrivers:Int()`

Gets the number of 2D rendering drivers available for the current display.


## Consts

### `Const SDL_TEXTUREACCESS_STATIC:Int = 0`

changes rarely, not lockable


### `Const SDL_TEXTUREACCESS_STREAMING:Int = 1`

changes frequently, lockable


### `Const SDL_TEXTUREACCESS_TARGET:Int = 2`

can be used as a render target


### `Const SDL_FLIP_NONE:Int = 0`

do not flip


### `Const SDL_FLIP_HORIZONTAL:Int = 1`

flip horizontally


### `Const SDL_FLIP_VERTICAL:Int = 2`

flip vertically


### `Const SDL_RENDERER_SOFTWARE:Int = $01`

the renderer is a software fallback


### `Const SDL_RENDERER_ACCELERATED:Int = $02`

the renderer uses hardware acceleration


### `Const SDL_RENDERER_PRESENTVSYNC:Int = $04`

present is synchronized with the refresh rate


### `Const SDL_RENDERER_TARGETTEXTURE:Int = $08`

the renderer supports rendering to texture


