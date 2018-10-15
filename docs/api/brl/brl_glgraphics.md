---
id: brl.glgraphics
title: BRL.GLGraphics
sidebar_label: BRL.GLGraphics
---


## Functions

### `Function GLGraphicsDriver:TGLGraphicsDriver()`

Get OpenGL graphics driver


The returned driver can be used with [SetGraphicsDriver](../../brl/brl.graphics/#function-setgraphicsdriver-driver-tgraphicsdriver-defaultflags-graphics-backbuffer)


#### Returns
An OpenGL graphics driver



### `Function GLGraphics:TGraphics( width,height,depth=0,hertz=60,flags=GRAPHICS_BACKBUFFER|GRAPHICS_DEPTHBUFFER )`

Create OpenGL graphics


This is a convenience function that allows you to easily create an OpenGL graphics context.


#### Returns
An OpenGL graphics object



### `Function GLAdjustTexSize( width Var,height Var )`

Helper function to calculate nearest valid texture size

This functions rounds <b>width</b> and <b>height</b> up to the nearest valid texture size



### `Function GLTexFromPixmap( pixmap:TPixmap,mipmap=True )`

Helper function to create a texture from a pixmap

<b>pixmap</b> is resized to a valid texture size before conversion.


#### Returns
Integer GL Texture name



### `Function GLDrawRect( x,y,width,height )`

Helper function to output a simple rectangle


Draws a rectangle relative to top-left of current viewport.



### `Function GLDrawText( text$,x,y )`

Helper function to output some simple 8x16 font text


Draws text relative to top-left of current viewport.<br>
<br>
The font used is an internal fixed point 8x16 font.<br>
<br>
This function is intended for debugging purposes only - performance is unlikely to be stellar.



### `Function GLDrawPixmap( pixmap:TPixmap,x,y )`

Helper function to draw a pixmap to a gl context


Draws the pixmap relative to top-left of current viewport.<br>
<br>
This function is intended for debugging purposes only - performance is unlikely to be stellar.



### `Function GLShareContexts()`

Enable OpenGL context sharing


Calling [GLShareContexts](../../brl/brl.glgraphics/#function-glsharecontexts) will cause all opengl graphics contexts created to
shared displaylists, textures, shaders etc.

This should be called before any opengl contexts are created.



