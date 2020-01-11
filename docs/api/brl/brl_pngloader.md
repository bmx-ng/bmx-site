---
id: brl.pngloader
title: BRL.PNGLoader
sidebar_label: BRL.PNGLoader
---



The PNG loader module provides the ability to load PNG format pixmaps.


## Functions

### `Function LoadPixmapPNG:TPixmap( url:Object )`

Load a Pixmap in PNG format


[LoadPixmapPNG](../../brl/brl.pngloader/#function-loadpixmappngtpixmap-urlobject-) loads a pixmap from <b>url</b> in PNG format.

If the pixmap cannot be loaded, Null is returned.


<br/>

### `Function SavePixmapPNG( pixmap:TPixmap,url:Object,compression=5 )`

Save a Pixmap in PNG format


[SavePixmapPNG](../../brl/brl.pngloader/#function-savepixmappng-pixmaptpixmapurlobjectcompression5-) saves <b>pixmap</b> to <b>url</b> in PNG format. If successful, [SavePixmapPNG](../../brl/brl.pngloader/#function-savepixmappng-pixmaptpixmapurlobjectcompression5-) returns
True, otherwise False.

The optional <b>compression</b> parameter should be in the range 0 to 9, where
0 indicates no compression (fastest) and 9 indicates full compression (slowest).


<br/>

