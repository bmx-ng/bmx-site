---
id: tpixmap
title: TPixmap
sidebar_label: TPixmap
---

The Pixmap type


#### Example
```blitzmax
SuperStrict

'Prompt the user for an image file
Local path:String = RequestFile("Select an Image File","Image Files:png,jpg,bmp")

Local pix:TPixmap

'Load the file into a TPixmap according to its format
Select ExtractExt(path)
	Case "png"
		pix = LoadPixmapPNG(path)
	Case "jpg"
		pix = LoadPixmapJPeg(path)
	Default
		pix = LoadPixmap(path)
EndSelect

'Ensure the file loaded
If Not pix Then
	Notify "The File Could Not Load. The Program Will Now End."
	End
End If

'Setup the window
Graphics 600,600,0,60,2
Repeat
	Cls
	DrawPixmap Image , 20 , 20
	Flip
Until KeyDown(KEY_ESCAPE) Or AppTerminate()
```
## Fields

### `Field pixels:Byte Ptr`

A byte pointer to the pixmap's pixels

<br/>

### `Field width:Int`

The width, in pixels, of the pixmap

<br/>

### `Field height:Int`

The height, in pixels, of the pixmap

<br/>

### `Field pitch:Int`

The pitch, in bytes, of the pixmap

<br/>

### `Field format:Int`

The pixel format of the pixmap

<br/>

### `Field capacity:Int`

The capacity, in bytes, of the pixmap, or -1 for a static pixmap

<br/>

## Methods

### `Method PixelPtr:Byte Ptr( x:Int,y:Int )`

Get memory address of a pixel

#### Returns
A byte pointer to the pixel at coordinates <b>x</b>, <b>y</b>


<br/>

### `Method Window:TPixmap( x:Int,y:Int,width:Int,height:Int )`

Create a virtual window into a pixmap

#### Returns
A static pixmap that references the specified rectangle.


<br/>

### `Method Copy:TPixmap()`

Duplicate a pixmap

#### Returns
A new TPixmap object.


<br/>

### `Method Paste( source:TPixmap,x:Int,y:Int )`

Paste a pixmap

<br/>

### `Method Convert:TPixmap( format:Int )`

Convert a pixmap

#### Returns
A new TPixmap object in the specified format


<br/>

### `Method ReadPixel:Int( x:Int,y:Int )`

Read a pixel from a pixmap

#### Returns
The pixel at the specified coordinates packed into an integer


<br/>

### `Method WritePixel( x:Int,y:Int,argb:Int )`

Write a pixel to a pixmap

<br/>

### `Method WritePixel(x:Int, y:Int, col:SColor8)`

Writes a pixel to a pixmap of the specified [SColor8](../../../brl/brl.color/scolor8)

<br/>

### `Method ClearPixels( argb:Int )`

Clear a pixmap

#### Example
```blitzmax
SuperStrict

Graphics 800 , 600

Local mypix:TPixmap = LoadPixmap(BlitzMaxPath()+"/samples/hitoro/gfx/boing.png")
If mypix = Null Then
	RuntimeError ("Error Loading Image")
End If

DrawPixmap mypix, 0, 0

ClearPixels(mypix, $FFFFFF)
 

DrawPixmap mypix, 300, 0

Flip

WaitKey
```
<br/>

## Functions

### `Function Create:TPixmap( width:Int,height:Int,format:Int,align:Int=4 )`

Create a pixmap

#### Returns
A new TPixmap object


<br/>

### `Function CreateStatic:TPixmap( pixels:Byte Ptr,width:Int,height:Int,pitch:Int,format:Int )`

Create a static pixmap

The memory referenced by a static pixmap is not released when the pixmap is deleted.
The memory must not freed before the pixmap is deleted.


#### Returns
A new TPixmap object


<br/>

