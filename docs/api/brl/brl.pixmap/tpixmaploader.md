---
id: tpixmaploader
title: TPixmapLoader
sidebar_label: TPixmapLoader
---

Abstract base type for pixmap loaders



To create a new pixmap loader, you should extend TPixmapLoader and implement the [LoadPixmap](../../../brl/brl.pixmap/tpixmaploader/#method-loadpixmaptpixmap-streamtstream-abstract) method.

To install your pixmap loader, simply create an instance of it using [New](../../../math/math.vector/svec2d/#method-newxdouble-ydouble).


## Methods

### `Method LoadPixmap:TPixmap( stream:TStream ) Abstract`

Load a pixmap

This method must be implemented by extending types.


#### Example 1
```blitzmax
SuperStrict

Graphics 640,480
Local player:TPixmap=LoadPixmap(blitzmaxpath()+"\samples\hitoro\gfx\boing.png")

If player = Null Then
	RuntimeError ("Error Loading Image")
End If

Repeat
	Cls
	DrawPixmap Player,10,10
	Flip
Until KeyHit(key_escape) Or AppTerminate()
```
#### Example 2
```blitzmax
SuperStrict

Graphics 640 , 480

Local pix:TPixmap=LoadPixmap(blitzmaxpath()+"\samples\hitoro\gfx\boing.png")
'converts Pixmap to Image
'note alpha transparency
Local image:TImage=LoadImage(pix)

Repeat
	Cls
	DrawPixmap pix, 50, 50
	DrawImage image, MouseX(), MouseY()
	Flip
Until KeyHit(key_escape) Or AppTerminate()
```
<br/>

