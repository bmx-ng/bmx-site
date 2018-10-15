---
id: brl.pixmap
title: BRL.Pixmap
sidebar_label: BRL.Pixmap
---



Pixmaps provide storage for rectangular regions of pixels.

You can create a new pixmap using the [CreatePixmap](../../brl/brl.pixmap/#function-createpixmap-tpixmap-width-height-format-align-bytes-4) command, or load a pixmap 
using [LoadPixmap](../../brl/brl.pixmap/#method-loadpixmap-tpixmap-stream-tstream-abstract).

Pixmaps have 5 properties: width, height, a byte pointer to the pixmap's pixels, pitch and
format.

You can retrieve a pointer to a pixmap's pixels using the [PixmapPixelPtr](../../brl/brl.pixmap/#function-pixmappixelptr-byte-ptr-pixmap-tpixmap-x-0-y-0) command.

A pixmap's pitch refers to the number of bytes between one row of pixels in the pixmap
and the next. To retrieve a pixmap's pitch, use the [PixmapPitch](../../brl/brl.pixmap/#function-pixmappitch-pixmap-tpixmap) command.

A pixmap's pixel format determines how the pixels within a pixmap are stored in memory. This 
must be taken into account if you want to access pixels directly via a pixmap's pixel pointer.
You can retrieve the format of a pixmap using the [PixmapFormat](../../brl/brl.pixmap/#function-pixmapformat-pixmap-tpixmap) command, and convert pixmaps
from one format to another using [ConvertPixmap](../../brl/brl.pixmap/#function-convertpixmap-tpixmap-pixmap-tpixmap-format).

You can also use [ResizePixmap](../../brl/brl.pixmap/#function-resizepixmap-tpixmap-pixmap-tpixmap-width-height-nodebug) to resize a pixmap and flip a pixmap horizontally or vertically
with [XFlipPixmap](../../brl/brl.pixmap/#function-xflippixmap-tpixmap-pixmap-tpixmap-nodebug) and [YFlipPixmap](../../brl/brl.pixmap/#function-yflippixmap-tpixmap-pixmap-tpixmap-nodebug).


## Types
| Type | Description |
|---|---|
| [TPixmap](../../brl/brl.pixmap/tpixmap) | The Pixmap type |
| [TPixmapLoader](../../brl/brl.pixmap/tpixmaploader) | Abstract base type for pixmap loaders |

## Functions

### `Function CreatePixmap:TPixmap( width,height,format,align_bytes=4 )`

Create a pixmap


<b>format</b> should be one of the following:

<table><tr><td> <b>Format</b></td><td><b>Description</b></td></tr><tr><td>  PF_A8</td><td>8 bit alpha</td></tr><tr><td>  PF_I8</td><td>8 bit intensity</td></tr><tr><td>  PF_RGB888</td><td>24 bit big endian RGB</td></tr><tr><td>  PF_BGR888</td><td>24 bit little endian RGB</td></tr><tr><td>  PF_RGBA8888</td><td>32 bit big endian RGB with alpha</td></tr><tr><td>  PF_BGRA8888</td><td>32 bit little endian RGB with alpha</table>


Note that the newly created pixmap will contain random data. [ClearPixels](../../brl/brl.pixmap/#method-clearpixels-argb) can
be used to set all pixels to a known value prior to use.


#### Returns
A new pixmap object of the specified <b>width</b> and <b>height</b>



### `Function CreateStaticPixmap:TPixmap( pixels:Byte Ptr,width,height,pitch,format )`

Create a pixmap with existing pixel data


The memory referenced by a static pixmap is not released when the pixmap is deleted.

See [CreatePixmap](../../brl/brl.pixmap/#function-createpixmap-tpixmap-width-height-format-align-bytes-4) for valid pixmap formats.


#### Returns
A new pixmap object that references an existing block of memory



### `Function CopyPixmap:TPixmap( pixmap:TPixmap )`

Copy a pixmap

#### Returns
A new pixmap object



### `Function ConvertPixmap:TPixmap( pixmap:TPixmap,format )`

Convert pixel format of a pixmap


See [CreatePixmap](../../brl/brl.pixmap/#function-createpixmap-tpixmap-width-height-format-align-bytes-4) for valid pixmap formats.


#### Returns
A new pixmap object with the specified pixel format



### `Function PixmapWidth( pixmap:TPixmap )`

Get pixmap width

#### Returns
The width, in pixels, of <b>pixmap</b>



### `Function PixmapHeight( pixmap:TPixmap )`

Get pixmap width

#### Returns
The height, in pixels, of <b>pixmap</b>



### `Function PixmapPitch( pixmap:TPixmap )`

Get pixmap pitch


Pitch refers to the difference, in bytes, between the start of one row of pixels and the start of the next row.


#### Returns
The pitch, in bytes, of <b>pixmap</b>



### `Function PixmapFormat( pixmap:TPixmap )`

Get pixmap format


See [CreatePixmap](../../brl/brl.pixmap/#function-createpixmap-tpixmap-width-height-format-align-bytes-4) for supported formats.


#### Returns
The format of the pixels stored in <b>pixmap</b>



### `Function PixmapPixelPtr:Byte Ptr( pixmap:TPixmap,x=0,y=0 )`

Get pixmap pixels

#### Returns
A byte pointer to the pixels stored in <b>pixmap</b>



### `Function PixmapWindow:TPixmap( pixmap:TPixmap,x,y,width,height )`

Create a pixmap window

[PixmapWindow](../../brl/brl.pixmap/#function-pixmapwindow-tpixmap-pixmap-tpixmap-x-y-width-height) creates a 'virtual' window into <b>pixmap</b>.


#### Returns
A new pixmap object



### `Function MaskPixmap:TPixmap( pixmap:TPixmap,mask_red,mask_green,mask_blue ) NoDebug`

Mask a pixmap

<b>MaskPixmap</b> builds a new pixmap with alpha components set to '0' wherever the pixel colors
in the original <b>pixmap</b> match <b>mask_red</b>, <b>mask_green</b> and <b>mask_blue</b>. <b>mask_red</b>, <b>mask_green</b> and <b>mask_blue</b>
should be in the range 0 to 255.


#### Returns
A new pixmap object



### `Function XFlipPixmap:TPixmap( pixmap:TPixmap ) NoDebug`

Flip a pixmap horizontally

#### Returns
A new pixmap object



### `Function YFlipPixmap:TPixmap( pixmap:TPixmap ) NoDebug`

Flip a pixmap vertically

#### Returns
A new pixmap object



### `Function ResizePixmap:TPixmap( pixmap:TPixmap,width,height ) NoDebug`

Resize a pixmap

#### Returns
A new pixmap object of the specified <b>width</b> and <b>height</b>



### `Function LoadPixmap:TPixmap( url:Object )`

Load a pixmap

#### Returns
A pixmap object



### `Function ReadPixel( pixmap:TPixmap,x,y )`

Read a pixel from a pixmap


The returned 32 bit value contains the following components:

<table><tr><td> bits 24-31</td><td>pixel alpha</td></tr><tr><td>  bits 16-23</td><td>pixel red</td></tr><tr><td>  bits 8-15</td><td>pixel green</td></tr><tr><td>  bits 0-7</td><td>pixel blue</table>



#### Returns
A 32 bit pixel value



### `Function WritePixel( pixmap:TPixmap,x,y,argb )`

Write a pixel to a pixmap


The 32 bit <b>argb</b> value contains the following components:

<table><tr><td> bits 24-31</td><td>pixel alpha</td></tr><tr><td>  bits 16-23</td><td>pixel red</td></tr><tr><td>  bits 8-15</td><td>pixel green</td></tr><tr><td>  bits 0-7</td><td>pixel blue</table>




### `Function ClearPixels( pixmap:TPixmap,argb=0 )`

Clear a pixmap


Sets all pixels in a pixmap to a 32 bit pixel value.

The 32 bit <b>argb</b> value contains the following components:

<table><tr><td> bits 24-31</td><td>pixel alpha</td></tr><tr><td>  bits 16-23</td><td>pixel red</td></tr><tr><td>  bits 8-15</td><td>pixel green</td></tr><tr><td>  bits 0-7</td><td>pixel blue</table>




