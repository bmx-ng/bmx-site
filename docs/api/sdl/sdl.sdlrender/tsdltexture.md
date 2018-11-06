---
id: tsdltexture
title: TSDLTexture
sidebar_label: TSDLTexture
---

An efficient driver-specific representation of pixel data.


## Methods

### `Method GetAlphaMod:Int(alpha:Byte Var)`

Gets the additional alpha value multiplied into render copy operations.


### `Method GetBlendMode:Int(blendMode:Int Var)`

Gets the blend mode used for texture copy operations.


### `Method GetColorMod:Int(r:Byte Var, g:Byte Var, b:Byte Var)`

Gets the additional color value multiplied into render copy operations.


### `Method Lock:Int(pixels:Byte Ptr Ptr, pitch:Int Var, x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Locks a portion of the texture for write-only pixel access.


### `Method Query:Int(format:UInt Var, access:Int Var, w:Int Var, h:Int Var)`

Queries the attributes of a texture.


### `Method SetAlphaMod:Int(alpha:Byte)`

Sets an additional alpha value multiplied into render copy operations.


### `Method SetBlendMode:Int(blendMode:Int)`

Sets the blend mode for a texture, used by TSDLRenderer.Copy().


### `Method SetColorMod:Int(r:Byte, g:Byte, b:Byte)`

Sets an additional color value multiplied into render copy operations.


### `Method Unlock()`

Unlocks a texture, uploading the changes to video memory, if needed.


### `Method Update:Int(pixels:Byte Ptr, pitch:Int, x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Updates the given texture rectangle with new pixel data.


### `Method UpdateYUV:Int(yPlane:Byte Ptr, yPitch:Int, uPlane:Byte Ptr, uPitch:Int, vPlane:Byte Ptr, vPitch:Int, x:Int = -1, y:Int = -1, w:Int = -1, h:Int = -1)`

Updates a rectangle within a planar YV12 or IYUV texture with new pixel data.


### `Method Destroy()`

Destroys the texture.


