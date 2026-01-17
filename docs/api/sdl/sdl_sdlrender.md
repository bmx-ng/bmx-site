---
id: sdl.sdlrender
title: SDL.SDLRender
sidebar_label: Introduction
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

## Structs
| Struct | Description |
|---|---|
| [SDLRendererInfo](../../sdl/sdl.sdlrender/sdlrendererinfo) | A structure that contains information on the capabilities of a render driver or the current render context. |

## Functions

### `Function SDLGetNumRenderDrivers:Int()`

Gets the number of 2D rendering drivers available for the current display.

<br/>

### `Function SDLGetRenderDriverInfo:Int(index:Int, info:SDLRendererInfo Var)`

Gets info about a specific 2D rendering driver for the current display.

#### Returns
0 on success or a negative error code on failure; call [SDLGetError](../../sdl/sdl.sdl/#function-sdlgeterrorstring) for more information.


<br/>

### `Function SDLComposeCustomBlendMode:Int(srcColorFactor:ESDLBlendFactor, dstColorFactor:ESDLBlendFactor, colorOperation:ESDLBlendOperation, srcAlphaFactor:ESDLBlendFactor, dstAlphaFactor:ESDLBlendFactor, alphaOperation:ESDLBlendOperation)`

Composes a custom blend mode for renderers.


The methods [SetDrawBlendMode](../../sdl/sdl.sdlrender/tsdlrenderer/#method-setdrawblendmodeintblendmodeint) and texture [SetBlendMode](../../sdl/sdl.sdlrender/tsdltexture/#method-setblendmodeintblendmodeint) accept the `SDL_BlendMode` returned by this function if the renderer supports it.

A blend mode controls how the pixels from a drawing operation (source) get combined with the pixels from the render target
(destination). First, the components of the source and destination pixels get multiplied with their blend factors.
Then, the blend operation takes the two products and calculates the result that will get stored in the render target.

Expressed in pseudocode, it would look like this:

```
dstRGB = colorOperation(srcRGB * srcColorFactor, dstRGB * dstColorFactor)
dstA = alphaOperation(srcA * srcAlphaFactor, dstA * dstAlphaFactor)
```

Where the functions `colorOperation(src, dst)` and `alphaOperation(src, dst)` can return one of the following:

- `src + dst`
- `src - dst`
- `dst - src`
- `min(src, dst)`
- `max(src, dst)`

The red, green, and blue components are always multiplied with the first, second, and third components of the ESDLBlendFactor,
respectively. The fourth component is not used.

The alpha component is always multiplied with the fourth component of the ESDLBlendFactor. The other components are not used in
the alpha calculation.

Support for these blend modes varies for each renderer. To check if a specific `SDL_BlendMode` is supported, create a renderer and
pass it to either render [SetDrawBlendMode](../../sdl/sdl.sdlrender/tsdlrenderer/#method-setdrawblendmodeintblendmodeint) or texture [SetBlendMode](../../sdl/sdl.sdlrender/tsdltexture/#method-setblendmodeintblendmodeint). They will return with an error if the blend mode is not supported.

This list describes the support of custom blend modes for each renderer in SDL 2.0.6. All renderers support the four blend modes
listed in the `SDL_BlendMode` enumeration.

- **direct3d**: Supports all operations with all factors. However, some factors produce unexpected results with `SDL_BLENDOPERATION_MINIMUM` and `SDL_BLENDOPERATION_MAXIMUM`.
- **direct3d11**: Same as Direct3D 9.
- **opengl**: Supports the `SDL_BLENDOPERATION_ADD` operation with all factors. OpenGL versions 1.1, 1.2, and 1.3 do not work correctly with SDL 2.0.6.
- **opengles**: Supports the `SDL_BLENDOPERATION_ADD` operation with all factors. Color and alpha factors need to be the same. OpenGL ES 1 implementation specific: May also support `SDL_BLENDOPERATION_SUBTRACT` and `SDL_BLENDOPERATION_REV_SUBTRACT`. May support color and alpha operations being different from each other. May support color and alpha factors being different from each other.
- **opengles2**: Supports the `SDL_BLENDOPERATION_ADD`, `SDL_BLENDOPERATION_SUBTRACT`, `SDL_BLENDOPERATION_REV_SUBTRACT` operations with all factors.
- **psp**: No custom blend mode support.
- **software**: No custom blend mode support.

Some renderers do not provide an alpha component for the default render target. The `SDL_BLENDFACTOR_DST_ALPHA`
and `SDL_BLENDFACTOR_ONE_MINUS_DST_ALPHA` factors do not have an effect in this case.


#### Returns
An SDL_BlendMode that represents the chosen factors and operations.


<br/>

## Consts

### `Const SDL_TEXTUREACCESS_STATIC:UInt = 0`

Changes rarely, not lockable

<br/>

### `Const SDL_TEXTUREACCESS_STREAMING:UInt = 1`

Changes frequently, lockable

<br/>

### `Const SDL_TEXTUREACCESS_TARGET:UInt = 2`

Can be used as a render target

<br/>

### `Const SDL_FLIP_NONE:Int = 0`

Do not flip

<br/>

### `Const SDL_FLIP_HORIZONTAL:Int = 1`

Flip horizontally

<br/>

### `Const SDL_FLIP_VERTICAL:Int = 2`

Flip vertically

<br/>

### `Const SDL_RENDERER_SOFTWARE:Int = $01`

The renderer is a software fallback

<br/>

### `Const SDL_RENDERER_ACCELERATED:Int = $02`

The renderer uses hardware acceleration

<br/>

### `Const SDL_RENDERER_PRESENTVSYNC:Int = $04`

Present is synchronized with the refresh rate

<br/>

### `Const SDL_RENDERER_TARGETTEXTURE:Int = $08`

The renderer supports rendering to texture

<br/>

