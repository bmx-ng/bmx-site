---
id: sdlrendererinfo
title: SDLRendererInfo
sidebar_label: SDLRendererInfo
---

A structure that contains information on the capabilities of a render driver or the current render context.


## Fields

### `Field flags:UInt`

A mask of supported renderer flags

<br/>

### `Field numTextureFormats:UInt`

The number of available texture formats

<br/>

### `Field StaticArray textureFormats:UInt[16]`

The available texture formats

<br/>

### `Field maxTextureWidth:Int`

The maximum texture width

<br/>

### `Field maxTextureHeight:Int`

The maximum texture height

<br/>

## Methods

### `Method GetName:String()`

Returns the name of the renderer.

<br/>

