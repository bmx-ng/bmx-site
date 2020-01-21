---
id: sdl.sdlsurface
title: SDL.SDLSurface
sidebar_label: Introduction
---


## Types
| Type | Description |
|---|---|
| [TSDLSurface](../../sdl/sdl.sdlsurface/tsdlsurface) | A collection of pixels used in software blitting. |

## Consts

### `Const SDL_BLENDMODE_NONE:Int = $00000000`

no blending

dstRGBA = srcRGBA


<br/>

### `Const SDL_BLENDMODE_BLEND:Int = $00000001`

alpha blending

dstRGB = (srcRGB * srcA) + (dstRGB * (1-srcA))
<p>dstA = srcA + (dstA * (1-srcA)) </p>


<br/>

### `Const SDL_BLENDMODE_ADD:Int = $00000002`

additive blending

dstRGB = (srcRGB * srcA) + dstRGB
<p>dstA = dstA</p>


<br/>

### `Const SDL_BLENDMODE_MOD:Int = $00000004`

color modulate

dstRGB = srcRGB * dstRGB
<p>dstA = dstA</p>


<br/>

### `Const SDL_BLENDOPERATION_ADD:Int = $1`

dst + src: supported by all renderers

<br/>

### `Const SDL_BLENDOPERATION_SUBTRACT:Int = $2`

dst - src : supported by D3D9, D3D11, OpenGL, OpenGLES

<br/>

### `Const SDL_BLENDOPERATION_REV_SUBTRACT:Int = $3`

src - dst : supported by D3D9, D3D11, OpenGL, OpenGLES

<br/>

### `Const SDL_BLENDOPERATION_MINIMUM:Int = $4`

min(dst, src) : supported by D3D11

<br/>

### `Const SDL_BLENDOPERATION_MAXIMUM:Int = $5`

max(dst, src) : supported by D3D11

<br/>

### `Const SDL_BLENDFACTOR_ZERO:Int = $1`

0, 0, 0, 0

<br/>

### `Const SDL_BLENDFACTOR_ONE:Int = $2`

1, 1, 1, 1

<br/>

### `Const SDL_BLENDFACTOR_SRC_COLOR:Int = $3`

srcR, srcG, srcB, srcA

<br/>

### `Const SDL_BLENDFACTOR_ONE_MINUS_SRC_COLOR:Int = $4`

1-srcR, 1-srcG, 1-srcB, 1-srcA

<br/>

### `Const SDL_BLENDFACTOR_SRC_ALPHA:Int = $5`

srcA, srcA, srcA, srcA

<br/>

### `Const SDL_BLENDFACTOR_ONE_MINUS_SRC_ALPHA:Int = $6`

1-srcA, 1-srcA, 1-srcA, 1-srcA

<br/>

### `Const SDL_BLENDFACTOR_DST_COLOR:Int = $7`

dstR, dstG, dstB, dstA

<br/>

### `Const SDL_BLENDFACTOR_ONE_MINUS_DST_COLOR:Int = $8`

1-dstR, 1-dstG, 1-dstB, 1-dstA

<br/>

### `Const SDL_BLENDFACTOR_DST_ALPHA:Int = $9`

dstA, dstA, dstA, dstA

<br/>

### `Const SDL_BLENDFACTOR_ONE_MINUS_DST_ALPHA:Int = $A`

1-dstA, 1-dstA, 1-dstA, 1-dstA

<br/>

