---
id: brl.jpgloader
title: BRL.JPGLoader
sidebar_label: BRL.JPGLoader
---



The JPG loader module provides the ability to load JPG format pixmaps.


## Functions

### `Function LoadPixmapJPeg:TPixmap( url:Object )`

Load a Pixmap in JPeg format


[LoadPixmapJPeg](../../brl/brl.jpgloader/#function-loadpixmapjpegtpixmap-urlobject-) loads a pixmap from <b>url</b> in JPeg format.

If the pixmap cannot be loaded, Null is returned.


<br/>

### `Function SavePixmapJPeg( pixmap:TPixmap,url:Object,quality=75 )`

Save a Pixmap in JPeg format


Saves <b>pixmap</b> to <b>url</b> in JPeg format. If successful, [SavePixmapJPeg](../../brl/brl.jpgloader/#function-savepixmapjpeg-pixmaptpixmapurlobjectquality75-) returns
True, otherwise False.

The optional <b>quality</b> parameter should be in the range 0 to 100, where
0 indicates poor quality (smallest) and 100 indicates best quality (largest).


<br/>

