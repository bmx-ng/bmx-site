---
id: tpixmap
title: TPixmap
sidebar_label: TPixmap
---


## Fields

### `Field pixels:Byte Ptr`

A byte pointer to the pixmap's pixels


### `Field width`

The width, in pixels, of the pixmap


### `Field height`

The height, in pixels, of the pixmap


### `Field pitch`

The pitch, in bytes, of the pixmap


### `Field format`

The pixel format of the pixmap


### `Field capacity`

The capacity, in bytes, of the pixmap, or -1 for a static pixmap


## Methods

### `Method PixelPtr:Byte Ptr( x,y )`

Get memory address of a pixel

#### Returns
A byte pointer to the pixel at coordinates <b>x</b>, <b>y</b>



### `Method Window:TPixmap( x,y,width,height )`

Create a virtual window into a pixmap

#### Returns
A static pixmap that references the specified rectangle.



### `Method Copy:TPixmap()`

Duplicate a pixmap

#### Returns
A new TPixmap object.



### `Method Paste( source:TPixmap,x,y )`

Paste a pixmap


### `Method Convert:TPixmap( format )`

Convert a pixmap

#### Returns
A new TPixmap object in the specified format



### `Method ReadPixel( x,y )`

Read a pixel from a pixmap

#### Returns
The pixel at the specified coordinates packed into an integer



### `Method WritePixel( x,y,argb )`

Write a pixel to a pixmap


### `Method ClearPixels( argb )`

Clear a pixmap


## Functions

### `Function Create:TPixmap( width,height,format,align=4 )`

Create a pixmap

#### Returns
A new TPixmap object



### `Function CreateStatic:TPixmap( pixels:Byte Ptr,width,height,pitch,format )`

Create a static pixmap

#### Returns
A new TPixmap object



