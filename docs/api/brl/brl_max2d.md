---
id: brl.max2d
title: BRL.Max2D
sidebar_label: Introduction
---



The Max2D module provides a set of commands for drawing 2D graphics.<br/>
<br/>
Before using any of the Max2D commands, you must first create a Max2D graphics
object. The easiest way to do this is using the [Graphics](../../brl/brl.graphics/#function-graphicstgraphics-widthintheightintdepthint0hertzint60flagslong0xint1yint1-) command.<br/>
<br/>
By default, Max2D is double buffered which means you will have to use 
[Flip](../../brl/brl.bytebuffer/tbuffer/#method-fliptbuffer) once you have finished drawing each frame of graphics.<br/>
<br/>
<h2>Drawing</h2>
Max2D provides support for the following drawing commands:<br/>
<br/>
<table>
<tr><th>Drawing command</th><th>Action</th></tr>
<tr><td><a href="#Cls" class="token">Cls</a></td><td>Clears the viewport</td></tr>
<tr><td><a href="#Plot" class="token">Plot</a></td><td>Draws a single pixel</td></tr>
<tr><td><a href="#DrawLine" class="token">DrawLine</a></td><td>Draws a line</td></tr>
<tr><td><a href="#DrawRect" class="token">DrawRect</a></td><td>Draws a rectangle</td></tr>
<tr><td><a href="#DrawOval" class="token">DrawOval</a></td><td>Draws an oval</td></tr>
<tr><td><a href="#DrawPoly" class="token">DrawPoly</a></td><td>Draws a polygon</td></tr>
<tr><td><a href="#DrawText" class="token">DrawText</a></td><td>Draws some text</td></tr>
<tr><td><a href="#DrawImage" class="token">DrawImage</a></td><td>Draws an image</td></tr>
<tr><td><a href="#DrawPixmap" class="token">DrawPixmap</a></td><td>Draws a pixmap</td></tr>
</table>
<br/>
<h2>Viewport, origin and handle</h2>
Drawing commands are clipped to a rectangular area known as the <i>viewport</i>. Only the area within the viewport is ever modified, and attempting to draw outside the viewport will result in the drawing command being clipped or <i>chopped</i> to the viewport. To set the viewport, use the <a href="#SetViewport" class="token">SetViewport</a> command.<br/>
<br/>
Drawing commands are also offset by the current <i>origin</i> and <i>handle</i>. To set these properties, use the <a href="#SetOrigin" class="token">SetOrigin</a> and <a href="#SetHandle" class="token">SetHandle</a> commands.<br/>
<br/>
The current handle is an x,y coordinate subtracted from all drawing x,y coordinates <i>before</i> any rotation or scaling occurs. This allows you to provide a local 'center' for drawing. On the other hand, the current origin is an x,y coordinate added to all drawing x,y coordinates <i>after</i> any rotation or scaling.<br/>
<br/>
<h2>Color, alpha and blend mode</h2>
Drawing commands are affected by the current color, alpha and blend mode. You can set these properties by using the <a href="#SetColor" class="token">SetColor</a>, <a href="#SetAlpha" class="token">SetAlpha</a> and <a href="#SetBlend" class="token">SetBlend</a> commands.<br/>
<br/>
The current alpha value controls the transparency level when using the ALPHABLEND blend mode.<br/>
<br/>
The current blend mode controls how pixels are combined with existing pixels in the back buffer and can be one of the following:<br/>
<br/>
<table>
<tr><th>Blend mode</th><th>Effect</th></tr>
<tr><td>SOLIDBLEND</td><td>Pixels overwrite existing backbuffer pixels</td></tr>
<tr><td>MASKBLEND</td><td>Pixels are drawn only if their alpha component is greater than .5</td></tr>
<tr><td>ALPHABLEND</td><td>Pixels are alpha blended with existing backbuffer pixels</td></tr>
<tr><td>LIGHTBLEND</td><td>Pixel colors are added to backbuffer pixel colors, giving a 'lighting' effect</td></tr>
<tr><td>SHADEBLEND</td><td>Pixel colors are multiplied with backbuffer pixel colors, giving a 'shading' effect</td></tr>
</table>
<br/>
<h2>Rotation and scale</h2>
Drawing commands can be scaled and rotated using the <a href="#SetScale" class="token">SetScale</a> and <a href="#SetRotation" class="token">SetRotation</a> commands. Rotation and scaling occur relative to the current handle.<br/>
<br/>
<h2>Images</h2>
Images are pre-rendered chunks of graphics that can be efficiently drawn using a single <a href="#DrawImage" class="token">DrawImage</a> command. Images are typically stored in png, bmp or jpg format, and can be loaded using the <a href="#LoadImage" class="token">LoadImage</a> command.<br/>
<br/>
Image drawing is also affected by color, alpha, blend, rotation and scale. The current color is multiplied with each pixel color before the image is drawn to the backbuffer, allowing you to <i>tint</i> images. To disable this effect, you should set the current color to white.<br/>
<br/>
Images can also have a mask color. This is the color that represents transparency when an image is drawn using the MASKBLEND blend mode. To set the mask color, use the <a href="#SetMaskColor" class="token">SetMaskColor</a> command.<br/>
<br/>
Images can be created by snapshotting regions of the back buffer using the <a href="#GrabImage" class="token">GrabImage</a> command.
<h2>Pixmaps</h2>
Pixmaps are used to manipulate images at a pixel level, see the pixmaps module for details.
<p>
<a href="#LockImage" class="token">LockImage</a> allows for direct Image pixel access and requires a corresponding call to
<a href="#UnlockImage" class="token">UnlockImage</a> when you have have finished reading or modifying the pixels. 
The <a href="#DrawPixmap" class="token">DrawPixmap</a> and <a href="#GrabPixmap" class="token">GrabPixmap</a>
commands allow you to move pixels to and from the current graphic display's backbuffer.
<h2>Collisions</h2>
Max2D features a multilayered pixel perfect collision system.
The <a href="#CollideRect" class="token">CollideRect</a> and 
<a href="#CollideImage" class="token">CollideImage</a> commands
provide a dual function allowing the drawing and hit testing of Rects and 
Images with any combination of 32 collision layers.
</p>
<p>
The current Scale, Rotation, Origin and Handle settings are taken into account 
so coordinates for the collision commands acurately match their drawing counterparts 
<a href="#DrawRect" class="token">DrawRect</a> and <a href="#DrawImage" class="token">DrawImage</a>.
</p>
<p>
<a href="#ResetCollisions" class="token">ResetCollisions</a> is used
to clear any or all of the 32 collision layers provided.<br/>
</p>
<br/>



## Types
| Type | Description |
|---|---|
| [TImage](../../brl/brl.max2d/timage) | Max2D Image type |
| [TRenderImage](../../brl/brl.max2d/trenderimage) | Max2D Render Image type |

## Functions

### `Function Cls()`

Clear current graphics buffer


Clears the current graphics buffer to the current cls color as determined by [SetClsColor](../../brl/brl.max2d/#function-setclscolorredint-greenint-blueint-alphafloat).


#### Example
```blitzmax
' cls.bmx

' a spinning text message
' remove the call to cls to illustrate the
' need for clearing the screen every frame

SuperStrict

Graphics 640,480
SetOrigin 320,240

Local frame:Float

While Not KeyHit(KEY_ESCAPE)
	Cls 
	SetRotation frame
	DrawText "Press Escape To Exit",0,0
	Flip
	frame:+1
Wend
```
<br/>

### `Function SetClsColor(red:Int, green:Int, blue:Int, alpha:Float)`

Set current [Cls](../../brl/brl.max2d/#function-cls) color


The <b>red</b>, <b>green</b> and <b>blue</b> parameters should be in the range of 0 to 255.

The default cls color is black.


<br/>

### `Function SetClsColor(red:Int, green:Int, blue:Int)`

Set current [Cls](../../brl/brl.max2d/#function-cls) color


The <b>red</b>, <b>green</b> and <b>blue</b> parameters should be in the range of 0 to 255.

The default cls color is black.


<br/>

### `Function SetClsColor(color:SColor8)`

Set current [Cls](../../brl/brl.max2d/#function-cls) color


The default cls color is black.


<br/>

### `Function GetClsColor(red:Int Var, green:Int Var, blue:Int Var, alpha:Float)`

Get red, green, blue and alpha component of current cls color.

#### Returns
Red, green and blue values in the range 0..255 in the variables supplied.
 Alpha in range 0 - 1.0

<br/>

### `Function GetClsColor(red:Int Var, green:Int Var, blue:Int Var)`

Get red, green and blue component of current cls color.

#### Returns
Red, green and blue values in the range 0..255 in the variables supplied.


<br/>

### `Function GetClsColor(color:SColor8 Var)`

Get red, green and blue component of current cls color.

#### Returns
Red, green and blue values in the range 0..255 in the variables supplied.


<br/>

### `Function GetClsColor(color:SColor8 Var, alpha:Float Var)`

Get red, green, blue and alpha component of current cls color.

#### Returns
Red, green and blue values in the range 0..255 in the variables supplied.
 Alpha in range 0 - 1.0

<br/>

### `Function Plot(x:Float, y:Float)`

Plot a pixel


Sets the color of a single pixel on the back buffer to the current drawing color
defined with the [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-) command. Other commands that affect the operation of
[Plot](../../brl/brl.max2d/#function-plotxfloat-yfloat) include [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-), [SetViewPort](../../brl/brl.max2d/#function-setviewport-xint-yint-widthint-heightint-), [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) and [SetAlpha](../../brl/brl.max2d/#function-setalpha-alphafloat-).


#### Example
```blitzmax
' plot.bmx

' plots a cosine graph
' scrolls along the graph using an incrementing frame variable 

SuperStrict

Graphics 640,480

Local frame:Int
While Not KeyHit(KEY_ESCAPE)
	Cls
	For Local x:Int = 0 To 640
		Local theta:Int = x + frame
		Local y:Int = 240-Cos(theta)*240
		Plot x,y
	Next
	frame=frame+1
	Flip
Wend
```
<br/>

### `Function Plot(x:Double, y:Double)`

Plot a pixel


Sets the color of a single pixel on the back buffer to the current drawing color
defined with the [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-) command. Other commands that affect the operation of
[Plot](../../brl/brl.max2d/#function-plotxfloat-yfloat) include [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-), [SetViewPort](../../brl/brl.max2d/#function-setviewport-xint-yint-widthint-heightint-), [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) and [SetAlpha](../../brl/brl.max2d/#function-setalpha-alphafloat-).


#### Example
```blitzmax
' plot.bmx

' plots a cosine graph
' scrolls along the graph using an incrementing frame variable 

SuperStrict

Graphics 640,480

Local frame:Int
While Not KeyHit(KEY_ESCAPE)
	Cls
	For Local x:Int = 0 To 640
		Local theta:Int = x + frame
		Local y:Int = 240-Cos(theta)*240
		Plot x,y
	Next
	frame=frame+1
	Flip
Wend
```
<br/>

### `Function DrawRect(x:Float, y:Float, width:Float, height:Float)`

Draw a rectangle


Sets the color of a rectangular area of pixels using the current drawing color
defined with the [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-) command.

Other commands that affect the operation of [DrawRect](../../brl/brl.max2d/#function-drawrectxfloat-yfloat-widthfloat-heightfloat) include [SetHandle](../../brl/brl.max2d/#function-sethandle-xfloat-yfloat-), [SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-),
[SetRotation](../../brl/brl.max2d/#function-setrotation-rotationfloat-), [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-), [SetViewPort](../../brl/brl.max2d/#function-setviewport-xint-yint-widthint-heightint-), [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) and [SetAlpha](../../brl/brl.max2d/#function-setalpha-alphafloat-).


#### Example
```blitzmax
' drawrect.bmx

' draws a sequence of rectangles across the screen with
' increasing rotation and scale

' uses the frame variable to cycle through the values 0..9 for
' an animation effect between frames 

SuperStrict

Graphics 640,480

SetBlend ALPHABLEND
SetAlpha 0.2

Local t:Int
While Not KeyHit(KEY_ESCAPE)
	Cls
	DrawText "DrawRect Example",0,0
	For Local r:Int = t To t+500 Step 10
		SetRotation r
		SetScale r/5,r/5
		DrawRect r,r,2,2
	Next
	t=t+1
	If t=10 t=0
	Flip	
Wend
```
<br/>

### `Function DrawRect( x:Double,y:Double,width:Double,height:Double )`

Draw a rectangle


Sets the color of a rectangular area of pixels using the current drawing color
defined with the [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-) command.

Other commands that affect the operation of [DrawRect](../../brl/brl.max2d/#function-drawrectxfloat-yfloat-widthfloat-heightfloat) include [SetHandle](../../brl/brl.max2d/#function-sethandle-xfloat-yfloat-), [SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-),
[SetRotation](../../brl/brl.max2d/#function-setrotation-rotationfloat-), [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-), [SetViewPort](../../brl/brl.max2d/#function-setviewport-xint-yint-widthint-heightint-), [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) and [SetAlpha](../../brl/brl.max2d/#function-setalpha-alphafloat-).


#### Example
```blitzmax
' drawrect.bmx

' draws a sequence of rectangles across the screen with
' increasing rotation and scale

' uses the frame variable to cycle through the values 0..9 for
' an animation effect between frames 

SuperStrict

Graphics 640,480

SetBlend ALPHABLEND
SetAlpha 0.2

Local t:Int
While Not KeyHit(KEY_ESCAPE)
	Cls
	DrawText "DrawRect Example",0,0
	For Local r:Int = t To t+500 Step 10
		SetRotation r
		SetScale r/5,r/5
		DrawRect r,r,2,2
	Next
	t=t+1
	If t=10 t=0
	Flip	
Wend
```
<br/>

### `Function DrawLine(x:Float, y:Float, x2:Float, y2:Float, draw_last_pixel:Int = True)`

Draw a line


[DrawLine](../../brl/brl.max2d/#function-drawlinexfloat-yfloat-x2float-y2float-drawlastpixelint-true) draws a line from <b>x</b>, <b>y</b> to <b>x2</b>, <b>y2</b> with the current drawing color.

BlitzMax commands that affect the drawing of lines include [SetLineWidth](../../brl/brl.max2d/#function-setlinewidth-widthfloat-), [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-), [SetHandle](../../brl/brl.max2d/#function-sethandle-xfloat-yfloat-),
[SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-), [SetRotation](../../brl/brl.max2d/#function-setrotation-rotationfloat-), [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-), [SetViewPort](../../brl/brl.max2d/#function-setviewport-xint-yint-widthint-heightint-), [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) and [SetAlpha](../../brl/brl.max2d/#function-setalpha-alphafloat-).
The optional <b>draw_last_pixel</b> parameter can be used to control whether the last pixel of the line is drawn or not.
Not drawing the last pixel can be useful if you are using certain blending modes.


#### Example
```blitzmax
' drawline.bmx

' draws a cross hair at the mouse position using DrawLine

SuperStrict

Graphics 640,480

HideMouse 

While Not KeyHit(KEY_ESCAPE)
	Cls
	Local x:Int = MouseX()
	Local y:Int = MouseY()
	DrawLine 320,240,x,y
	DrawLine x-2,y,x-10,y
	DrawLine x+2,y,x+10,y
	DrawLine x,y-2,x,y-10
	DrawLine x,y+2,x,y+10
	Flip
Wend
```
<br/>

### `Function DrawLine(x:Double, y:Double, x2:Double, y2:Double, draw_last_pixel:Int = True)`

Draw a line


[DrawLine](../../brl/brl.max2d/#function-drawlinexfloat-yfloat-x2float-y2float-drawlastpixelint-true) draws a line from <b>x</b>, <b>y</b> to <b>x2</b>, <b>y2</b> with the current drawing color.

BlitzMax commands that affect the drawing of lines include [SetLineWidth](../../brl/brl.max2d/#function-setlinewidth-widthfloat-), [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-), [SetHandle](../../brl/brl.max2d/#function-sethandle-xfloat-yfloat-),
[SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-), [SetRotation](../../brl/brl.max2d/#function-setrotation-rotationfloat-), [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-), [SetViewPort](../../brl/brl.max2d/#function-setviewport-xint-yint-widthint-heightint-), [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) and [SetAlpha](../../brl/brl.max2d/#function-setalpha-alphafloat-).
The optional <b>draw_last_pixel</b> parameter can be used to control whether the last pixel of the line is drawn or not.
Not drawing the last pixel can be useful if you are using certain blending modes.


#### Example
```blitzmax
' drawline.bmx

' draws a cross hair at the mouse position using DrawLine

SuperStrict

Graphics 640,480

HideMouse 

While Not KeyHit(KEY_ESCAPE)
	Cls
	Local x:Int = MouseX()
	Local y:Int = MouseY()
	DrawLine 320,240,x,y
	DrawLine x-2,y,x-10,y
	DrawLine x+2,y,x+10,y
	DrawLine x,y-2,x,y-10
	DrawLine x,y+2,x,y+10
	Flip
Wend
```
<br/>

### `Function DrawOval(x:Float, y:Float, width:Float, height:Float)`

Draw an oval


[DrawOval](../../brl/brl.max2d/#function-drawovalxfloat-yfloat-widthfloat-heightfloat) draws an oval that fits in the rectangular area defined by <b>x</b>, <b>y</b>, <b>width</b>
and <b>height</b> parameters.

BlitzMax commands that affect the drawing of ovals include [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-), [SetHandle](../../brl/brl.max2d/#function-sethandle-xfloat-yfloat-),
[SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-), [SetRotation](../../brl/brl.max2d/#function-setrotation-rotationfloat-), [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-), [SetViewPort](../../brl/brl.max2d/#function-setviewport-xint-yint-widthint-heightint-), [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) and [SetAlpha](../../brl/brl.max2d/#function-setalpha-alphafloat-).


#### Example
```blitzmax
' drawoval.bmx

' draws a pair of eyes using 4 DrawOval commands, 2 white, 2 blue
' positions the blue ovals so the eyes track the mouse

SuperStrict

Graphics 640,480
While Not KeyHit(KEY_ESCAPE)
	Cls
	SetColor 255,255,255
	DrawOval 0,0,320,200
	DrawOval 320,0,320,200
	SetColor 0,0,255
	Local x:Int = (MouseX()-320)/10
	Local y:Int = (MouseY()-240)/10
	DrawOval 220-32+x,100+y,64,40
	DrawOval 420-32+x,100+y,64,40
	Flip
Wend
```
<br/>

### `Function DrawOval(x:Double, y:Double, width:Double, height:Double)`

Draw an oval


[DrawOval](../../brl/brl.max2d/#function-drawovalxfloat-yfloat-widthfloat-heightfloat) draws an oval that fits in the rectangular area defined by <b>x</b>, <b>y</b>, <b>width</b>
and <b>height</b> parameters.

BlitzMax commands that affect the drawing of ovals include [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-), [SetHandle](../../brl/brl.max2d/#function-sethandle-xfloat-yfloat-),
[SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-), [SetRotation](../../brl/brl.max2d/#function-setrotation-rotationfloat-), [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-), [SetViewPort](../../brl/brl.max2d/#function-setviewport-xint-yint-widthint-heightint-), [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) and [SetAlpha](../../brl/brl.max2d/#function-setalpha-alphafloat-).


#### Example
```blitzmax
' drawoval.bmx

' draws a pair of eyes using 4 DrawOval commands, 2 white, 2 blue
' positions the blue ovals so the eyes track the mouse

SuperStrict

Graphics 640,480
While Not KeyHit(KEY_ESCAPE)
	Cls
	SetColor 255,255,255
	DrawOval 0,0,320,200
	DrawOval 320,0,320,200
	SetColor 0,0,255
	Local x:Int = (MouseX()-320)/10
	Local y:Int = (MouseY()-240)/10
	DrawOval 220-32+x,100+y,64,40
	DrawOval 420-32+x,100+y,64,40
	Flip
Wend
```
<br/>

### `Function DrawPoly( xy:Float[], indices:Int[] = Null )`

Draw a polygon


[DrawPoly](../../brl/brl.max2d/#function-drawpoly-xyfloat-indicesint-null-) draws a polygon with corners defined by an array of x#,y# coordinate pairs.

BlitzMax commands that affect the drawing of polygons include [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-), [SetHandle](../../brl/brl.max2d/#function-sethandle-xfloat-yfloat-),
[SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-), [SetRotation](../../brl/brl.max2d/#function-setrotation-rotationfloat-), [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-), [SetViewPort](../../brl/brl.max2d/#function-setviewport-xint-yint-widthint-heightint-), [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) and [SetAlpha](../../brl/brl.max2d/#function-setalpha-alphafloat-).


#### Example
```blitzmax
' drawpoly.bmx

' draws a simple triangle using the
' DrawPoly command and an array of
' floats listed as 3 pairs of x,y
' coordinates

SuperStrict

Local tri#[]=[0.0,0.0,100.0,100.0,0.0,100.0]

Graphics 640,480
While Not KeyHit(KEY_ESCAPE)
	Cls
	DrawPoly tri
	Flip
Wend
```
<br/>

### `Function DrawText(t:String, x:Float, y:Float)`

Draw text


[DrawText](../../brl/brl.max2d/#function-drawtexttstring-xfloat-yfloat) prints strings at position <b>x</b>,@y of the graphics display using
the current image font specified by the [SetImageFont](../../brl/brl.max2d/#function-setimagefont-fonttimagefont-) command.

Other commands that affect [DrawText](../../brl/brl.max2d/#function-drawtexttstring-xfloat-yfloat) include [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-), [SetHandle](../../brl/brl.max2d/#function-sethandle-xfloat-yfloat-),
[SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-), [SetRotation](../../brl/brl.max2d/#function-setrotation-rotationfloat-), [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-), [SetViewPort](../../brl/brl.max2d/#function-setviewport-xint-yint-widthint-heightint-), [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) and [SetAlpha](../../brl/brl.max2d/#function-setalpha-alphafloat-).

It is recomended that the blend mode be set to ALPHABLEND using the [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-)
command for non jagged antialiased text. Text that will be drawn at a smaller
size using the [SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-) command should use fonts loaded with the SMOOTHFONT
style to benefit from mip-mapped filtering, see [LoadImageFont](../../brl/brl.max2d/#function-loadimagefonttimagefont-urlobject-sizeint-styleint-smoothfont-) for more information.


#### Example
```blitzmax
' drawtext.bmx

' scrolls a large text string across the screen by decrementing the tickerx variable

SuperStrict

Graphics 640,480

Local tickerx:Int = 640

Local Text:String = "Yo to all the Apple, Windows and Linux BlitzMax programmers in the house! "
Text:+"Game development is the most fun, most advanced and definitely most cool "
Text:+"software programming there is!"

While Not KeyHit(KEY_ESCAPE)
	Cls
	DrawText "Scrolling Text Demo",0,0
	DrawText Text,tickerx#,400
	tickerx=tickerx-1
	If tickerx<-TextWidth(Text) tickerx=640
	Flip	
Wend

End
```
<br/>

### `Function DrawText(t:String, x:Double, y:Double)`

Draw text


[DrawText](../../brl/brl.max2d/#function-drawtexttstring-xfloat-yfloat) prints strings at position <b>x</b>,@y of the graphics display using
the current image font specified by the [SetImageFont](../../brl/brl.max2d/#function-setimagefont-fonttimagefont-) command.

Other commands that affect [DrawText](../../brl/brl.max2d/#function-drawtexttstring-xfloat-yfloat) include [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-), [SetHandle](../../brl/brl.max2d/#function-sethandle-xfloat-yfloat-),
[SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-), [SetRotation](../../brl/brl.max2d/#function-setrotation-rotationfloat-), [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-), [SetViewPort](../../brl/brl.max2d/#function-setviewport-xint-yint-widthint-heightint-), [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) and [SetAlpha](../../brl/brl.max2d/#function-setalpha-alphafloat-).

It is recomended that the blend mode be set to ALPHABLEND using the [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-)
command for non jagged antialiased text. Text that will be drawn at a smaller
size using the [SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-) command should use fonts loaded with the SMOOTHFONT
style to benefit from mip-mapped filtering, see [LoadImageFont](../../brl/brl.max2d/#function-loadimagefonttimagefont-urlobject-sizeint-styleint-smoothfont-) for more information.


#### Example
```blitzmax
' drawtext.bmx

' scrolls a large text string across the screen by decrementing the tickerx variable

SuperStrict

Graphics 640,480

Local tickerx:Int = 640

Local Text:String = "Yo to all the Apple, Windows and Linux BlitzMax programmers in the house! "
Text:+"Game development is the most fun, most advanced and definitely most cool "
Text:+"software programming there is!"

While Not KeyHit(KEY_ESCAPE)
	Cls
	DrawText "Scrolling Text Demo",0,0
	DrawText Text,tickerx#,400
	tickerx=tickerx-1
	If tickerx<-TextWidth(Text) tickerx=640
	Flip	
Wend

End
```
<br/>

### `Function DrawImage(image:TImage, x:Float, y:Float, frame:Int = 0)`

Draw an image to the back buffer


Drawing is affected by the current blend mode, color, scale and rotation.

If the blend mode is ALPHABLEND the image is affected by the current alpha value
and images with alpha channels are blended correctly with the background.


<br/>

### `Function DrawImage(image:TImage, x:Double, y:Double, frame:Int = 0)`

Draw an image to the back buffer


Drawing is affected by the current blend mode, color, scale and rotation.

If the blend mode is ALPHABLEND the image is affected by the current alpha value
and images with alpha channels are blended correctly with the background.


<br/>

### `Function DrawImageRect(image:TImage, x:Float, y:Float, width:Float, height:Float, frame:Int = 0)`

Draw an image to a rectangular area of the back buffer


<b>x</b>, <b>y</b>, <b>width</b> and <b>height</b> specify the destination rectangle to draw to.

<b>frame</b> is the image frame to draw.

Drawing is affected by the current blend mode, color, scale and rotation.

If the blend mode is ALPHABLEND, then the image is also affected by the current alpha value.


<br/>

### `Function DrawImageRect(image:TImage, x:Double, y:Double, width:Double, height:Double, frame:Int = 0)`

Draw an image to a rectangular area of the back buffer


<b>x</b>, <b>y</b>, <b>width</b> and <b>height</b> specify the destination rectangle to draw to.

<b>frame</b> is the image frame to draw.

Drawing is affected by the current blend mode, color, scale and rotation.

If the blend mode is ALPHABLEND, then the image is also affected by the current alpha value.


<br/>

### `Function DrawSubImageRect(image:TImage, x:Float, y:Float, width:Float, height:Float, sx:Float, sy:Float, swidth:Float,sheight:Float, hx:Float = 0, hy:Float = 0, frame:Int = 0)`

Draw a sub rectangle of an image to a rectangular area of the back buffer


<b>x</b>, <b>y</b>, <b>width</b> and <b>height</b> specify the destination rectangle to draw to.

<b>sx</b>, <b>sy</b>, <b>swidth</b> and <b>sheight</b> specify the source rectangle within the image to draw from.

<b>hx</b> and <b>hy</b> specify a handle offset within the source rectangle.

<b>frame</b> is the image frame to draw.

Drawing is affected by the current blend mode, color, scale and rotation.

If the blend mode is ALPHABLEND, then the image is also affected by the current alpha value.


<br/>

### `Function DrawSubImageRect(image:TImage, x:Double, y:Double, width:Double, height:Double, sx:Double, sy:Double, swidth:Double,sheight:Double, hx:Double = 0, hy:Double = 0, frame:Int = 0)`

Draw a sub rectangle of an image to a rectangular area of the back buffer


<b>x</b>, <b>y</b>, <b>width</b> and <b>height</b> specify the destination rectangle to draw to.

<b>sx</b>, <b>sy</b>, <b>swidth</b> and <b>sheight</b> specify the source rectangle within the image to draw from.

<b>hx</b> and <b>hy</b> specify a handle offset within the source rectangle.

<b>frame</b> is the image frame to draw.

Drawing is affected by the current blend mode, color, scale and rotation.

If the blend mode is ALPHABLEND, then the image is also affected by the current alpha value.


<br/>

### `Function TileImage(image:TImage, x:Float = 0.0, y:Float = 0.0, frame:Int = 0)`

Draw an image in a tiled pattern


[TileImage](../../brl/brl.max2d/#function-tileimageimagetimage-xfloat-00-yfloat-00-frameint-0) draws an image in a repeating, tiled pattern, filling the current viewport.


<br/>

### `Function TileImage(image:TImage, x:Double = 0:Double, y:Double = 0:Double, frame:Int = 0)`

Draw an image in a tiled pattern


[TileImage](../../brl/brl.max2d/#function-tileimageimagetimage-xfloat-00-yfloat-00-frameint-0) draws an image in a repeating, tiled pattern, filling the current viewport.


<br/>

### `Function SetColor( red:Int,green:Int,blue:Int )`

Set current color


The [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-) command affects the color of [Plot](../../brl/brl.max2d/#function-plotxfloat-yfloat), [DrawRect](../../brl/brl.max2d/#function-drawrectxfloat-yfloat-widthfloat-heightfloat), [DrawLine](../../brl/brl.max2d/#function-drawlinexfloat-yfloat-x2float-y2float-drawlastpixelint-true), [DrawText](../../brl/brl.max2d/#function-drawtexttstring-xfloat-yfloat),
[DrawImage](../../brl/brl.max2d/#function-drawimageimagetimage-xfloat-yfloat-frameint-0) and [DrawPoly](../../brl/brl.max2d/#function-drawpoly-xyfloat-indicesint-null-).

The <b>red</b>, <b>green</b> and <b>blue</b> parameters should be in the range of 0 to 255.


<br/>

### `Function SetColor( red:Int, green:Int, blue:Int, alpha:Float )`

Set current color and alpha (transparency) level


The [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-) command affects the color of [Plot](../../brl/brl.max2d/#function-plotxfloat-yfloat), [DrawRect](../../brl/brl.max2d/#function-drawrectxfloat-yfloat-widthfloat-heightfloat), [DrawLine](../../brl/brl.max2d/#function-drawlinexfloat-yfloat-x2float-y2float-drawlastpixelint-true), [DrawText](../../brl/brl.max2d/#function-drawtexttstring-xfloat-yfloat),
[DrawImage](../../brl/brl.max2d/#function-drawimageimagetimage-xfloat-yfloat-frameint-0) and [DrawPoly](../../brl/brl.max2d/#function-drawpoly-xyfloat-indicesint-null-).

The <b>red</b>, <b>green</b> and <b>blue</b> parameters should be in the range of 0 to 255.

<b>alpha</b> controls the transparancy level when the ALPHABLEND blend mode is in effect.
The range from 0.0 to 1.0 allows a range of transparancy from completely transparent
to completely solid.


<br/>

### `Function SetColor( color:SColor8)`

Set current color


The [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-) command affects the color of [Plot](../../brl/brl.max2d/#function-plotxfloat-yfloat), [DrawRect](../../brl/brl.max2d/#function-drawrectxfloat-yfloat-widthfloat-heightfloat), [DrawLine](../../brl/brl.max2d/#function-drawlinexfloat-yfloat-x2float-y2float-drawlastpixelint-true), [DrawText](../../brl/brl.max2d/#function-drawtexttstring-xfloat-yfloat),
[DrawImage](../../brl/brl.max2d/#function-drawimageimagetimage-xfloat-yfloat-frameint-0) and [DrawPoly](../../brl/brl.max2d/#function-drawpoly-xyfloat-indicesint-null-).

<b>color</b> defines the red, green and blue values.


<br/>

### `Function SetColor( color:SColor8, alpha:Float )`

Set current color and alpha (transparency)


The [SetColor](../../brl/brl.max2d/#function-setcolor-redintgreenintblueint-) command affects the color of [Plot](../../brl/brl.max2d/#function-plotxfloat-yfloat), [DrawRect](../../brl/brl.max2d/#function-drawrectxfloat-yfloat-widthfloat-heightfloat), [DrawLine](../../brl/brl.max2d/#function-drawlinexfloat-yfloat-x2float-y2float-drawlastpixelint-true), [DrawText](../../brl/brl.max2d/#function-drawtexttstring-xfloat-yfloat),
[DrawImage](../../brl/brl.max2d/#function-drawimageimagetimage-xfloat-yfloat-frameint-0) and [DrawPoly](../../brl/brl.max2d/#function-drawpoly-xyfloat-indicesint-null-).

<b>color</b> defines the red, green and blue values.

<b>alpha</b> controls the transparancy level when the ALPHABLEND blend mode is in effect.
The range from 0.0 to 1.0 allows a range of transparancy from completely transparent
to completely solid.


<br/>

### `Function GetColor( red:Int Var,green:Int Var,blue:Int Var )`

Get red, green and blue component of current color.

#### Returns
Red, green and blue values in the range 0..255 in the variables supplied.


<br/>

### `Function GetColor( red:Int Var, green:Int Var, blue:Int Var, alpha:Float Var )`

Get red, green, blue component of current color and the current alpha (transparency) value.

#### Returns
Red, green and blue values in the range 0..255 and alpha (transparency) in the range 0..1.0 in the variables supplied.


<br/>

### `Function GetColor( color:SColor8 Var )`

Get current color encoded as SColor8.

#### Returns
Red, green, blue values in the range 0..255 stored in the supplied SColor8 element.


<br/>

### `Function GetColor( color:SColor8 Var, alpha:Float Var)`

Get current rgb color encoded as SColor8 and current alpha (transparency) value separately.

#### Returns
Red, green, blue values in the range 0..255 in the supplied SColor8 element and separately the alpha (transparency) value in the range 0..1.0.


<br/>

### `Function SetBlend( blend:Int )`

Set current blend mode


SetBlend controls how pixels are combined with existing pixels in the back buffer when drawing
commands are used in BlitzMax.

<b>blend</b> should be one of:

<table><tr><td> <b>Blend mode</b></td><td><b>Effect</b></td></tr><tr><td>  MASKBLEND</td><td>Pixels are drawn only if their alpha component is greater than .5</td></tr><tr><td>  SOLIDBLEND</td><td>Pixels overwrite existing backbuffer pixels</td></tr><tr><td>  ALPHABLEND</td><td>Pixels are alpha blended with existing backbuffer pixels</td></tr><tr><td>  LIGHTBLEND</td><td>Pixel colors are added to backbuffer pixel colors, giving a 'lighting' effect</td></tr><tr><td>  SHADEBLEND</td><td>Pixel colors are multiplied with backbuffer pixel colors, giving a 'shading' effect</td></tr></table>



<br/>

### `Function GetBlend:Int()`

Get current blend mode


See [SetBlend](../../brl/brl.max2d/#function-setblend-blendint-) for possible return values.


#### Returns
The current blend mode.


<br/>

### `Function SetAlpha( alpha:Float )`

Set current alpha level


<b>alpha</b> should be in the range 0 to 1.

<b>alpha</b> controls the transparancy level when the ALPHABLEND blend mode is in effect.
The range from 0.0 to 1.0 allows a range of transparancy from completely transparent
to completely solid.


<br/>

### `Function SetAlpha( alpha:Double )`

Set current alpha level


<b>alpha</b> should be in the range 0 to 1.

<b>alpha</b> controls the transparancy level when the ALPHABLEND blend mode is in effect.
The range from 0.0 to 1.0 allows a range of transparancy from completely transparent
to completely solid.


<br/>

### `Function GetAlpha:Float()`

Get current alpha setting.

#### Returns
the current alpha value in the range 0..1.0


<br/>

### `Function SetLineWidth( width:Float )`

Sets pixel width of lines drawn with the [DrawLine](../../brl/brl.max2d/#function-drawlinexfloat-yfloat-x2float-y2float-drawlastpixelint-true) command

<br/>

### `Function SetLineWidth( width:Double )`

Sets pixel width of lines drawn with the [DrawLine](../../brl/brl.max2d/#function-drawlinexfloat-yfloat-x2float-y2float-drawlastpixelint-true) command

<br/>

### `Function GetLineWidth:Float()`

Get line width

#### Returns
Current line width, in pixels


<br/>

### `Function SetMaskColor( red:Int, green:Int, blue:Int )`

Set current mask color


The current mask color is used to build an alpha mask when images are loaded or modified.
The <b>red</b>, <b>green</b> and <b>blue</b> parameters should be in the range of 0 to 255.


<br/>

### `Function GetMaskColor( red:Int Var, green:Int Var, blue:Int Var )`

Get red, green and blue component of current mask color

#### Returns
Red, green and blue values in the range 0..255


<br/>

### `Function SetVirtualResolution( width:Float, height:Float )`

Set virtual graphics resolution


SetResolution allows you to set a 'virtual' resolution independent of the graphics resolution.

This allows you to design an application to work at a fixed resolution, say 640 by 480, and run it
at any graphics resolution.


<br/>

### `Function SetVirtualResolution( width:Double, height:Double )`

Set virtual graphics resolution


SetResolution allows you to set a 'virtual' resolution independent of the graphics resolution.

This allows you to design an application to work at a fixed resolution, say 640 by 480, and run it
at any graphics resolution.


<br/>

### `Function VirtualResolutionWidth:Float()`

Get virtual graphics resolution width

<br/>

### `Function VirtualResolutionHeight:Float()`

Get virtual graphics resolution height

<br/>

### `Function VirtualMouseX:Float()`

Get virtual mouse X coordinate

<br/>

### `Function VirtualMouseY:Float()`

Get virtual mouse Y coordinate

<br/>

### `Function VirtualMouseXSpeed:Float()`

Get virtual mouse X speed

<br/>

### `Function VirtualMouseYSpeed:Float()`

Get virtual mouse Y speed

<br/>

### `Function MoveVirtualMouse( x:Float, y:Float )`

Move virtual mouse

<br/>

### `Function MoveVirtualMouse( x:Double, y:Double )`

Move virtual mouse

<br/>

### `Function SetViewport( x:Int, y:Int, width:Int, height:Int )`

Set drawing viewport


The current ViewPort defines an area within the back buffer that all drawing is clipped to. Any
regions of a DrawCommand that fall outside the current ViewPort are not drawn.


<br/>

### `Function GetViewport( x:Int Var, y:Int Var, width:Int Var, height:Int Var )`

Get dimensions of current Viewport.

#### Returns
The horizontal, vertical, width and height values of the current Viewport in the variables supplied.


<br/>

### `Function SetOrigin( x:Float, y:Float )`

Set drawing origin


The current Origin is an x,y coordinate added to all drawing x,y coordinates after any rotation or scaling.


<br/>

### `Function SetOrigin( x:Double, y:Double )`

Set drawing origin


The current Origin is an x,y coordinate added to all drawing x,y coordinates after any rotation or scaling.


<br/>

### `Function GetOrigin( x:Float Var, y:Float Var )`

Get current origin position.

#### Returns
The horizontal and vertical position of the current origin.


<br/>

### `Function SetHandle( x:Float, y:Float )`

Set drawing handle


The drawing handle is a 2D offset subtracted from the x,y location of all
drawing commands except [DrawImage](../../brl/brl.max2d/#function-drawimageimagetimage-xfloat-yfloat-frameint-0) as Images have their own unique handles.

Unlike [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-) the drawing handle is subtracted before rotation and scale
are applied providing a 'local' origin.


<br/>

### `Function SetHandle( x:Double, y:Double )`

Set drawing handle


The drawing handle is a 2D offset subtracted from the x,y location of all
drawing commands except [DrawImage](../../brl/brl.max2d/#function-drawimageimagetimage-xfloat-yfloat-frameint-0) as Images have their own unique handles.

Unlike [SetOrigin](../../brl/brl.max2d/#function-setorigin-xfloat-yfloat-) the drawing handle is subtracted before rotation and scale
are applied providing a 'local' origin.


<br/>

### `Function GetHandle( x:Float Var,y:Float Var )`

Get current drawing handle.

#### Returns
The horizontal and vertical position of the current drawing handle.


<br/>

### `Function SetRotation( rotation:Float )`

Set current rotation


<b>rotation</b> is given in degrees and should be in the range 0 to 360.


<br/>

### `Function SetRotation( rotation:Double )`

Set current rotation


<b>rotation</b> is given in degrees and should be in the range 0 to 360.


<br/>

### `Function GetRotation:Float()`

Get current Max2D rotation setting.

#### Returns
The rotation in degrees.


<br/>

### `Function SetScale( scale_x:Float, scale_y:Float )`

Set current scale


<b>scale_x</b> and <b>scale_y</b> multiply the width and height of drawing
commands where 0.5 will half the size of the drawing and 2.0 is equivalent
to doubling the size.


<br/>

### `Function SetScale( scale_x:Double, scale_y:Double )`

Set current scale


<b>scale_x</b> and <b>scale_y</b> multiply the width and height of drawing
commands where 0.5 will half the size of the drawing and 2.0 is equivalent
to doubling the size.


<br/>

### `Function GetScale( scale_x:Float Var,scale_y:Float Var )`

Get current Max2D scale settings.

#### Returns
The current x and y scale values in the variables supplied.


<br/>

### `Function SetTransform( rotation:Float = 0.0, scale_x:Float = 1.0, scale_y:Float = 1.0 )`

Set current rotation and scale


SetTransform is a shortcut for setting both the rotation and
scale parameters in Max2D with a single function call.


<br/>

### `Function SetTransform( rotation:Double, scale_x:Double = 1:Double, scale_y:Float = 1:Double )`

Set current rotation and scale


SetTransform is a shortcut for setting both the rotation and
scale parameters in Max2D with a single function call.


<br/>

### `Function LoadImageFont:TImageFont( url:Object, size:Int, style:Int = SMOOTHFONT )`

Load an image font


<b>style</b> can be a combination of BOLDFONT, ITALICFONT and SMOOTHFONT
flags. Use the SMOOTHFONT flag for improved filtering if the font is to be rotated or
scaled.


#### Returns
An image font object


<br/>

### `Function SetImageFont( font:TImageFont )`

Set current image font


In order to [DrawText](../../brl/brl.max2d/#function-drawtexttstring-xfloat-yfloat) in fonts other than the default system font use the [SetImageFont](../../brl/brl.max2d/#function-setimagefont-fonttimagefont-)
command with a font handle returned by the [LoadImageFont](../../brl/brl.max2d/#function-loadimagefonttimagefont-urlobject-sizeint-styleint-smoothfont-) command.

Use &{SetImageFont Null} to select the default, built-in font.


<br/>

### `Function GetImageFont:TImageFont()`

Get current image font.

#### Returns
The current image font.


<br/>

### `Function TextWidth:Int( text:String )`

Get width of text


This command is useful for calculating horizontal alignment of text when using
the [DrawText](../../brl/brl.max2d/#function-drawtexttstring-xfloat-yfloat) command.


#### Returns
the width, in pixels, of <b>text</b> based on the current image font.


<br/>

### `Function TextHeight:Int( text:String )`

Get height of text


This command is useful for calculating vertical alignment of text when using
the [DrawText](../../brl/brl.max2d/#function-drawtexttstring-xfloat-yfloat) command.


#### Returns
the height, in pixels, of <b>text</b> based on the current image font.


<br/>

### `Function LoadImage:TImage( url:Object, flags:Int = -1 )`

Load an image


<b>url</b> can be either a string or an existing pixmap.

<b>flags</b> can be 0, -1 or any combination of:

<table><tr><td> <b>Flags value</b></td><td><b>Effect</b>
</td></tr><tr><td>  MASKEDIMAGE</td><td>The image is masked with the current mask color.
</td></tr><tr><td>  FILTEREDIMAGE</td><td>The image is smoothed when scaled up to greater than its original
size, when rotated, or when drawn at fractional pixel coordinates.
</td></tr><tr><td>  MIPMAPPEDIMAGE</td><td>The image is smoothed when scaled down to less than its original size.
</td></tr><tr><td>  DYNAMICIMAGE</td><td>The image can be modified using [LockImage](../../brl/brl.max2d/#function-lockimagetpixmap-imagetimage-frameint-0-readlockint-true-writelockint-true-) or [GrabImage](../../brl/brl.max2d/#function-grabimage-imagetimage-xint-yint-frameint-0-).</td></tr></table>



Note MIPMAPPEDIMAGE images consume extra video memory, so this flag should only be used
when really necessary.

If flags is -1, the auto image flags are used: See [AutoImageFlags](../../brl/brl.max2d/#function-autoimageflags-flagsint-).

To combine flags, use the | (boolean OR) operator.


#### Returns
A new image object


<br/>

### `Function LoadAnimImage:TImage( url:Object, cell_width:Int, cell_height:Int, first_cell:Int, cell_count:Int, flags:Int = -1 )`

Load a multi-frame image


[LoadAnimImage](../../brl/brl.max2d/#function-loadanimimagetimage-urlobject-cellwidthint-cellheightint-firstcellint-cellcountint-flagsint-1-) extracts multiple image frames from a single, larger image. <b>url</b> can be either a string or an
existing pixmap.

See [LoadImage](../../brl/brl.max2d/#function-loadimagetimage-urlobject-flagsint-1-) for valid <b>flags</b> values.


#### Returns
An image object


<br/>

### `Function ClearImage( image:Timage, r:UInt=0, g:UInt=0, b:UInt=0, a:Float=0.0, frameIndex:Int = -1 )`

Clear content of the passed image


<b>image</b> defines the image to clear.

<b>r</b>, <b>g</b>, <b>b</b> define the red, green and blue components of the clear color. Range is 0 - 255.

<b>a</b> defines the alpha value and is ranged 0.0 to 1.0.

<b>frameIndex</b> defines an optional frame if the image is an animated image, -1 clears all existing frames


<br/>

### `Function ClearImage( image:Timage, color:SColor8, frameIndex:Int = -1 )`

Clear content of the passed image


<b>image</b> defines the image to clear.

<b>color</b> defines the rgba components of the clear color.

<b>frameIndex</b> defines an optional frame if the image is an animated image, -1 clears all existing frames


<br/>

### `Function SetImageHandle( image:TImage, x:Float, y:Float )`

Set an image's handle to an arbitrary point


An image's handle is subtracted from the coordinates of [DrawImage](../../brl/brl.max2d/#function-drawimageimagetimage-xfloat-yfloat-frameint-0) before
rotation and scale are applied.


<br/>

### `Function SetImageHandle( image:TImage,x:Double,y:Double )`

Set an image's handle to an arbitrary point


An image's handle is subtracted from the coordinates of [DrawImage](../../brl/brl.max2d/#function-drawimageimagetimage-xfloat-yfloat-frameint-0) before
rotation and scale are applied.


<br/>

### `Function AutoMidHandle( enable:Int )`

Enable or disable auto midhandle mode


When auto midhandle mode is enabled, all images are automatically 'midhandled' (see [MidHandleImage](../../brl/brl.max2d/#function-midhandleimage-imagetimage-))
when they are created. If auto midhandle mode is disabled, images are handled by their top left corner.

AutoMidHandle defaults to False after calling [Graphics](../../brl/brl.graphics/#function-graphicstgraphics-widthintheightintdepthint0hertzint60flagslong0xint1yint1-).


<br/>

### `Function AutoImageFlags( flags:Int )`

Set auto image flags


The auto image flags are used by [LoadImage](../../brl/brl.max2d/#function-loadimagetimage-urlobject-flagsint-1-) and [CreateImage](../../brl/brl.max2d/#function-createimagetimage-widthint-heightint-framesint-1-flagsint-1-) when no image
flags are specified. See [LoadImage](../../brl/brl.max2d/#function-loadimagetimage-urlobject-flagsint-1-) for a full list of valid image flags.
AutoImageFlags defaults to MASKEDIMAGE | FILTEREDIMAGE.


<br/>

### `Function MidHandleImage( image:TImage )`

Set an image's handle to its center

<br/>

### `Function ImageWidth:Int( image:TImage )`

Get width of an image

#### Returns
The width, in pixels, of <b>image</b>


<br/>

### `Function ImageHeight:Int( image:TImage )`

Get height of an image

#### Returns
The height, in pixels, of <b>image</b>


<br/>

### `Function CreateImage:TImage( width:Int, height:Int, frames:Int = 1, flags:Int = -1 )`

Create an empty image


[CreateImage](../../brl/brl.max2d/#function-createimagetimage-widthint-heightint-framesint-1-flagsint-1-) creates an 'empty' image, which should be initialized using either [GrabImage](../../brl/brl.max2d/#function-grabimage-imagetimage-xint-yint-frameint-0-) or [LockImage](../../brl/brl.max2d/#function-lockimagetpixmap-imagetimage-frameint-0-readlockint-true-writelockint-true-)
before being drawn.

Please refer to [LoadImage](../../brl/brl.max2d/#function-loadimagetimage-urlobject-flagsint-1-) for valid <b>flags</b> values. The <b>flags</b> value is always combined with DYNAMICIMAGE.


#### Returns
A new image object


#### Example
```blitzmax
' createimage.bmx

' creates a 256x1 image with a black to blue color gradient

SuperStrict

Const ALPHABITS:Int=$ff000000

Graphics 640,480,0

Local image:TImage = CreateImage(256,1)
Local map:TPixmap = LockImage(image)
For Local i:Int = 0 To 255
	WritePixel(map,i,0,ALPHABITS|i)
Next
UnlockImage(image)

DrawImageRect image,0,0,640,480
DrawText "Blue Color Gradient",0,0

Flip

WaitKey
```
<br/>

### `Function LockImage:TPixmap( image:TImage, frame:Int = 0, read_lock:Int = True, write_lock:Int = True )`

Lock an image for direct access


Locking an image allows you to directly access an image's pixels.

Only images created with the DYNAMICIMAGE flag can be locked.

Locked images must eventually be unlocked with [UnlockImage](../../brl/brl.max2d/#function-unlockimage-imagetimage-frameint-0-) before they can be drawn.


#### Returns
A pixmap representing the image contents


<br/>

### `Function UnlockImage( image:TImage, frame:Int = 0 )`

Unlock an image


Unlocks an image previously locked with [LockImage](../../brl/brl.max2d/#function-lockimagetpixmap-imagetimage-frameint-0-readlockint-true-writelockint-true-).


<br/>

### `Function GrabImage( image:TImage, x:Int, y:Int, frame:Int = 0 )`

Grab an image from the back buffer


Copies pixels from the back buffer to an image frame.

Only images created with the DYNAMICIMAGE flag can be grabbed.


#### Example
```blitzmax
' grabimage.bmx

' draws a small graphic then uses grabimage to make an image

' as mask color and cls color both default to black a mask is 
' created for the grabbed where any pixels unset on the backbuffer
' become transparent in the grabbed image

SuperStrict

Graphics 640,480

Cls

DrawLine 0,0,32,32
DrawLine 32,0,0,32
DrawOval 0,0,32,32

Local image:TImage = CreateImage(640,480,1,DYNAMICIMAGE|MASKEDIMAGE)
GrabImage image,0,0

Cls
For Local i:Int = 1 To 100
	DrawImage image,Float(Rnd(640)),Float(Rnd(480))
Next
Flip

WaitKey
```
<br/>

### `Function DrawPixmap( pixmap:TPixmap,x:Int,y:Int )`

Draw pixmap

<br/>

### `Function GrabPixmap:TPixmap( x:Int,y:Int,width:Int,height:Int )`

Grab pixmap

<br/>

### `Function CreateRenderImage:TRenderImage(width:UInt, height:UInt, flags:Int=-1)`

Create a new render image


<b>width</b>, <b>height</b> specify the dimensions of the render image.

<b>useLinearFlitering</b> defines the image flag to filter images when scaling.

<b>max2DGraphics</b> is an optional parameter to pass a custom Max2DGraphics context.



#### Returns
[TRenderImage](../../brl/brl.max2d/trenderimage) with the given dimension


<br/>

### `Function SetRenderImage(renderImage:TRenderImage)`

Set a render image as currently active render target


<b>renderImage</b> defines the render image to use as target. Set to Null to render on the default graphics buffer again.


<br/>

### `Function ImagesCollide:Int(image1:TImage,x1:Int,y1:Int,frame1:Int,image2:TImage,x2:Int,y2:Int,frame2:Int)`

Tests if two images collide


[ImagesCollide](../../brl/brl.max2d/#function-imagescollideintimage1timagex1inty1intframe1intimage2timagex2inty2intframe2int) uses the current Rotation and Scale factors from the most previous
call to [SetScale](../../brl/brl.max2d/#function-setscale-scalexfloat-scaleyfloat-) and [SetRotation](../../brl/brl.max2d/#function-setrotation-rotationfloat-) to calculate at a pixel level if the two images collide.


#### Returns
True if any pixels of the two images specified at the given location overlap.


<br/>

### `Function ImagesCollide2:Int(image1:TImage,x1:Int,y1:Int,frame1:Int,rot1:Float,scalex1:Float,scaley1:Float,image2:TImage,x2:Int,y2:Int,frame2:Int,rot2:Float,scalex2:Float,scaley2:Float)`

Tests if two images with arbitrary Rotation and Scales collide


[ImagesCollide2](../../brl/brl.max2d/#function-imagescollide2intimage1timagex1inty1intframe1introt1floatscalex1floatscaley1floatimage2timagex2inty2intframe2introt2floatscalex2floatscaley2float) uses the specified Rotation and Scale paramteters
to calculate at a pixel level if the two images collide (overlap).


#### Returns
True if any pixels of the two images specified at the given location overlap.


<br/>

### `Function ResetCollisions(mask:Int=0)`

Clears collision layers specified by the value of <b>mask</b>, mask=0 for all layers.


The BlitzMax 2D collision system manages 32 layers, the <b>mask</b> parameter can
be a combination of the following values or the special value COLLISION_LAYER_ALL in order
to perform collision operations on multiple layers.

Note: COLLISION_LAYER_32 is used by the [ImagesCollide](../../brl/brl.max2d/#function-imagescollideintimage1timagex1inty1intframe1intimage2timagex2inty2intframe2int) and [ImagesCollide2](../../brl/brl.max2d/#function-imagescollide2intimage1timagex1inty1intframe1introt1floatscalex1floatscaley1floatimage2timagex2inty2intframe2introt2floatscalex2floatscaley2float) commands.

<table><tr><td> <b>Layer</b></td><td><b>Mask value</b></td></tr><tr><td>  COLLISION_LAYER_ALL</td><td>0</td></tr><tr><td>  COLLISION_LAYER_1</td><td>$0001</td></tr><tr><td>  COLLISION_LAYER_2</td><td>$0002</td></tr><tr><td>  COLLISION_LAYER_3</td><td>$0004</td></tr><tr><td>  COLLISION_LAYER_4</td><td>$0008</td></tr><tr><td>  COLLISION_LAYER_5</td><td>$0010</td></tr><tr><td>  COLLISION_LAYER_6</td><td>$0020</td></tr><tr><td>  COLLISION_LAYER_7</td><td>$0040</td></tr><tr><td>  COLLISION_LAYER_8</td><td>$0080</td></tr><tr><td>  COLLISION_LAYER_9</td><td>$0100</td></tr><tr><td>  COLLISION_LAYER_10</td><td>$0200</td></tr><tr><td>  COLLISION_LAYER_11</td><td>$0400</td></tr><tr><td>  COLLISION_LAYER_12</td><td>$0800</td></tr><tr><td>  COLLISION_LAYER_13</td><td>$1000</td></tr><tr><td>  COLLISION_LAYER_14</td><td>$2000</td></tr><tr><td>  COLLISION_LAYER_15</td><td>$4000</td></tr><tr><td>  COLLISION_LAYER_16</td><td>$8000</td></tr></table>



<br/>

### `Function CollideImage:Object[](image:TImage,x:Int,y:Int,frame:Int,collidemask:Int,writemask:Int,id:Object=Null)`

Pixel accurate collision testing between transformed Images.


The <b>collidemask</b> specifies any layers to test for collision with.

The <b>writemask</b> specifies which if any collision layers the <b>image</b> is added to in it's currently transformed state.

The id specifies an object to be returned to future [CollideImage](../../brl/brl.max2d/#function-collideimageobjectimagetimagexintyintframeintcollidemaskintwritemaskintidobjectnull) calls when collisions occur.


#### Example
```blitzmax
SuperStrict

Local rot:Int,x:Int,y:Int

Graphics 640,480

AutoMidHandle True	'image will rotate around it's center

Local image:TImage=LoadImage("bullet.png")

While Not KeyHit(KEY_ESCAPE)
	Cls
	ResetCollisions

' draw the first image at 5 times the size and on an arbitrary angle
	
	SetScale 5,5
	SetRotation 125

	DrawImage image,200,200

' add the first image to the first collision layer at same postion, rotation 
' and scale as it has just been drawn

	CollideImage image,200,200,0,0,1

' move the other image relative to the mouse and rotate it continuously

	x=MouseX()
	y=MouseY()-20
	rot:+1

	SetRotation rot
	DrawImage image,x,y

' test the image at it's current rotation, scale and position with images
' that have been added to the first collision layer

	If CollideImage(image,x,y,0,1,0)

' reset scale and rotation states so our text is drawn correctly		

		SetScale 1,1
		SetRotation 0
		DrawText "COLLISION!",20,20

	EndIf

	Flip
Wend
```
<br/>

### `Function CollideRect:Object[](x:Int,y:Int,w:Int,h:Int,collidemask:Int,writemask:Int,id:Object=Null)`

Pixel accurate collision testing between image layers


The <b>collidemask</b> specifies any layers to test for collision with.

The <b>writemask</b> specifies which if any collision layers the <b>image</b> is added to in it's currently transformed state.

The <b>id</b> specifies an object to be returned to future [CollideImage](../../brl/brl.max2d/#function-collideimageobjectimagetimagexintyintframeintcollidemaskintwritemaskintidobjectnull) calls when collisions occur.


<br/>

