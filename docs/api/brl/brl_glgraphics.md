---
id: brl.glgraphics
title: BRL.GLGraphics
sidebar_label: BRL.GLGraphics
---


## Functions

### `Function GLGraphicsDriver:TGLGraphicsDriver()`

Get OpenGL graphics driver


The returned driver can be used with [SetGraphicsDriver](../../brl/brl.graphics/#function-setgraphicsdriver-drivertgraphicsdriverdefaultflagslonggraphicsbackbuffer-)


#### Returns
An OpenGL graphics driver


<br/>

### `Function GLGraphics:TGraphics( width:Int,height:Int,depth:Int=0,hertz:Int=60,flags:Long=GRAPHICS_BACKBUFFER|GRAPHICS_DEPTHBUFFER )`

Create OpenGL graphics


This is a convenience function that allows you to easily create an OpenGL graphics context.


#### Returns
An OpenGL graphics object


<br/>

### `Function GLAdjustTexSize( width:Int Var,height:Int Var )`

Helper function to calculate nearest valid texture size

This functions rounds <b>width</b> and <b>height</b> up to the nearest valid texture size


<br/>

### `Function GLTexFromPixmap:Int( pixmap:TPixmap,mipmap:Int=True )`

Helper function to create a texture from a pixmap

<b>pixmap</b> is resized to a valid texture size before conversion.


#### Returns
Integer GL Texture name


<br/>

### `Function GLDrawRect( x:Int,y:Int,width:Int,height:Int )`

Helper function to output a simple rectangle


Draws a rectangle relative to top-left of current viewport.


<br/>

### `Function GLDrawText( Text:String,x:Int,y:Int )`

Helper function to output some simple 8x16 font text


Draws text relative to top-left of current viewport.<br/>
<br/>
The font used is an internal fixed point 8x16 font.<br/>
<br/>
This function is intended for debugging purposes only - performance is unlikely to be stellar.


<br/>

### `Function GLDrawPixmap( pixmap:TPixmap,x:Int,y:Int )`

Helper function to draw a pixmap to a gl context


Draws the pixmap relative to top-left of current viewport.<br/>
<br/>
This function is intended for debugging purposes only - performance is unlikely to be stellar.


<br/>

### `Function GLShareContexts()`

Enable OpenGL context sharing


Calling [GLShareContexts](../../brl/brl.glgraphics/#function-glsharecontexts) will cause all opengl graphics contexts created to
shared displaylists, textures, shaders etc.

This should be called before any opengl contexts are created.


<br/>

