---
id: tpixmaploader
title: TPixmapLoader
sidebar_label: TPixmapLoader
---

Abstract base type for pixmap loaders



To create a new pixmap loader, you should extend TPixmapLoader and implement the [LoadPixmap](../../../brl/brl.pixmap/tpixmaploader/#method-loadpixmap-tpixmap-stream-tstream-abstract) method.

To install your pixmap loader, simply create an instance of it using [New](../../../brl/brl.blitz/#new)</font>.


## Methods

### `Method LoadPixmap:TPixmap( stream:TStream ) Abstract`

Load a pixmap

This method must be implemented by extending types.


#### Example
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

