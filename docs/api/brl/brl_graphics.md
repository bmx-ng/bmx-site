---
id: brl.graphics
title: BRL.Graphics
sidebar_label: BRL.Graphics
---



The graphics module provides the ability to create and 'flip' graphics objects.

A graphics object represents a rectangular area you can render to. However, the graphics module
does not provide any commands for actual rendering - this is left to other modules such as 
max2D to implement.

The graphics module maintains 2 'current' objects - the current graphics driver and the currect
graphics object. To change the current graphics driver, use [SetGraphicsDriver](../../brl/brl.graphics/#function-setgraphicsdriver-driver-tgraphicsdriver-defaultflags-graphics-backbuffer). To change the
current graphics object, use [SetGraphics](../../brl/brl.graphics/#function-setgraphics-g-tgraphics).

To create a graphics object, use either [Graphics](../../brl/brl.graphics/#function-graphics-tgraphics-width-height-depth-0-hertz-60-flags-0) or [CreateGraphics](../../brl/brl.graphics/#function-creategraphics-tgraphics-width-height-depth-hertz-flags). The kind of graphics 
object created will depend upon the current graphics driver. For example, the following code:
```
SetGraphicsDriver GLGraphicsDriver()
Local g:TGraphics=CreateGraphics( 640,480,32,60,GRAPHICS_BACKBUFFER )
````

Will create an OpenGL graphics object.

You can 'select' this object for rendering using:
```
SetGraphics g			'we can now execute OpenGL code
glClearColor .5,0,1,1		'tada!
glClear				'yes!
Flip				'must do this as the graphics is double buffered
````

One you have finished with a graphics object, use [CloseGraphics](../../brl/brl.graphics/#function-closegraphics-g-tgraphics) to close it.

[Graphics](../../brl/brl.graphics/#function-graphics-tgraphics-width-height-depth-0-hertz-60-flags-0) and [CreateGraphics](../../brl/brl.graphics/#function-creategraphics-tgraphics-width-height-depth-hertz-flags) both accept the following parameters: <b>width</b>, <b>height</b>, <b>depth</b>,
<b>hertz</b> and <b>flags</b>.

The <b>width</b> and <b>height</b> parameters specify the dimensions of the graphics, in pixels.

The <b>depth</b> parameter selects a pixel bit depth. This value can be 0, 16, 24 or 32 depending 
on the graphics modes available. A depth of 0 can be used to select 'windowed mode' graphics,
while non-0 depths select 'fullscreen' graphics.

The <b>hertz</b> parameter selects a refresh rate, which refers to the number of times the screen
refreshes per second. The refresh rates available depend on the graphics modes available, 
which differ from graphics card to graphics card. Note that creating graphics with an 
unsupported refresh rate will not fail - instead, a default refresh rate will be used.

The [Graphics](../../brl/brl.graphics/#function-graphics-tgraphics-width-height-depth-0-hertz-60-flags-0) command can be used to achieve a fixed refresh rate. When using [Flip](../../brl/brl.graphics/#function-flip-sync-1) to 
present such graphics, BlitzMax will guarantee the desired refresh rate is honored regardless
of the available hardware's capabilities. This is achieved by using software timing 
techniques when necessary.

The <b>flags</b> parameter can be any combination of the following:
| Flags | Meaning |
| --- | --- |
| GRAPHICS_BACKBUFFER | Create graphics with a back buffer |
| GRAPHICS_ALPHABUFFER | Create graphics with an alpha buffer |
| GRAPHICS_DEPTHBUFFER | Create graphics with a depth buffer |
| GRAPHICS_STENCILBUFFER | Create graphics with a stencil buffer |
| GRAPHICS_ACCUMBUFFER | Create graphics with an accumulation buffer |

Flags can be combined with the | (or) operator. For example, GRAPHICS_BACKBUFFER|GRAPHICS_DEPTHBUFFER
can be used to create graphics which has both a back buffer and a depth buffer.

Graphics created with the GRAPHICS_BACKBUFFER flag must be 'flipped' after you have finished
rendering using [Flip](../../brl/brl.graphics/#function-flip-sync-1).


## Functions

### `Function SetGraphicsDriver( driver:TGraphicsDriver,defaultFlags=GRAPHICS_BACKBUFFER )`

Set current graphics driver


The current graphics driver determines what kind of graphics are created when you use
the [CreateGraphics](../../brl/brl.graphics/#function-creategraphics-tgraphics-width-height-depth-hertz-flags) or [Graphics](../../brl/brl.graphics/#function-graphics-tgraphics-width-height-depth-0-hertz-60-flags-0) functions, as well as the graphics modes available.

The [GLGraphicsDriver](../../brl/brl.glgraphics/#function-glgraphicsdriver-tglgraphicsdriver), [GLMax2DDriver](../../brl/brl.glmax2d/#function-glmax2ddriver-tglmax2ddriver), [D3D7Max2DDriver](../../brl/brl.d3d7max2d/#function-d3d7max2ddriver-td3d7max2ddriver) and [D3D9Max2DDriver](../../brl/brl.d3d9max2d/#function-d3d9max2ddriver-td3d9max2ddriver) functions can all be
used to obtain a graphics driver.

The <b>defaultFlags</b> parameter allows you to specify graphics flags that will be applied to any
graphics created with [CreateGraphics](../../brl/brl.graphics/#function-creategraphics-tgraphics-width-height-depth-hertz-flags) or [Graphics](../../brl/brl.graphics/#function-graphics-tgraphics-width-height-depth-0-hertz-60-flags-0).


#### Example
```blitzmax
SuperStrict

SetGraphicsDriver GLMax2DDriver()

Graphics 640,480
DrawText "OpenGL Max2D Graphics! Hit any key (next to the whatever key)...",0,0
Flip
WaitKey
EndGraphics

SetGraphicsDriver GLGraphicsDriver()

Graphics 640,480
glClear GL_COLOR_BUFFER_BIT
GLDrawText "'Raw' OpenGL Graphics! Hit any key...",0,0
Flip
WaitKey
```

### `Function GetGraphicsDriver:TGraphicsDriver()`

Get current graphics driver


Returns the current graphics driver as selected by [SetGraphicsDriver](../../brl/brl.graphics/#function-setgraphicsdriver-driver-tgraphicsdriver-defaultflags-graphics-backbuffer)



### `Function DefaultGraphicsFlags()`

Get current default graphics flags


### `Function GraphicsModes:TGraphicsMode[]()`

Get graphics modes available under the current graphics driver


A TGraphicsMode object contains the following fields: <b>width</b>, <b>height</b>, <b>depth</b> and <b>hertz</b>


#### Returns
An array of TGraphicsMode objects


#### Example
```blitzmax
SuperStrict

Print "Available graphics modes:"

For Local Mode:TGraphicsMode=EachIn GraphicsModes()

	Print Mode.width+","+Mode.height+","+Mode.depth+","+Mode.hertz

Next
```

### `Function CountGraphicsModes()`

Get number of graphics modes available under the current graphics driver


Use [GetGraphicsMode](../../brl/brl.graphics/#function-getgraphicsmode-index-width-var-height-var-depth-var-hertz-var) To obtain information about an individual Graphics mode


#### Returns
Number of available Graphics modes



### `Function GetGraphicsMode( index,width Var,height Var,depth Var,hertz Var )`

Get information about a graphics mode


[GetGraphicsMode](../../brl/brl.graphics/#function-getgraphicsmode-index-width-var-height-var-depth-var-hertz-var) returns information about a specific graphics mode. <b>mode</b> should be
in the range 0 (inclusive) to the value returned by [CountGraphicsModes](../../brl/brl.graphics/#function-countgraphicsmodes) (exclusive).



### `Function GraphicsModeExists( width,height,depth=0,hertz=0 )`

Determine if a graphics mode exists


A value of 0 for any of <b>width</b>, <b>height</b>, <b>depth</b> or <b>hertz</b> will cause that
parameter to be ignored.


#### Returns
True if a matching graphics mode is found



### `Function CreateGraphics:TGraphics( width,height,depth,hertz,flags )`

Create a graphics object


[CreateGraphics](../../brl/brl.graphics/#function-creategraphics-tgraphics-width-height-depth-hertz-flags) creates a graphics object. To use this object for rendering, you will
first have to select it using [SetGraphics](../../brl/brl.graphics/#function-setgraphics-g-tgraphics).

The kind of graphics object returned depends upon the current graphics driver as set by
[SetGraphicsDriver](../../brl/brl.graphics/#function-setgraphicsdriver-driver-tgraphicsdriver-defaultflags-graphics-backbuffer).


#### Returns
A graphics object



### `Function CloseGraphics( g:TGraphics )`

Close a graphics object


Once closed, a graphics object can no longer be used.



### `Function SetGraphics( g:TGraphics )`

Set current graphics object


[SetGraphics](../../brl/brl.graphics/#function-setgraphics-g-tgraphics) will also change the current graphics driver if <b>g</b> uses a different driver
than the current driver.


#### Example
```blitzmax
SuperStrict

Import MaxGUI.Drivers

Local G:TGraphics = Graphics(640,480) 'creates the normal graphic screen first
Local MyWindow:TGadget=CreateWindow("Canvas Example", 200,200,320,240)
Local MyCanvas:TGadget=CreateCanvas(10,10,290,140,MyWindow)

Repeat
	WaitEvent()
	Select EventID()
		Case EVENT_WINDOWCLOSE
			End
		Case EVENT_GADGETPAINT
			SetGraphics CanvasGraphics (MyCanvas)
			SetColor Int(Rnd(255)),Int(Rnd(255)),Int(Rnd(255))
			DrawRect 20 , 20 , 50 , 80
			Flip
			SetGraphics G
			SetColor Int(Rnd(255)),Int(Rnd(255)),Int(Rnd(255))
			DrawOval 100,100,100,100
			Flip
		Case EVENT_MOUSEMOVE
			RedrawGadget(MyCanvas)
	End Select

Until AppTerminate()
```

### `Function GraphicsResize( width:Int, height:Int )`

Resize the current graphics object to <b>width</b>, <b>height</b>.


### `Function GraphicsWidth()`

Get width of current graphics object


The current graphics object can be changed using [SetGraphics](../../brl/brl.graphics/#function-setgraphics-g-tgraphics).


#### Returns
The width, in pixels, of the current graphics object


#### Example
```blitzmax
SuperStrict

Graphics 640,480,0,60

DrawText "Graphics Width: "+GraphicsWidth(), 10 , 10
DrawText "Graphics Height: "+GraphicsHeight(), 10 , 30
DrawText "Graphics Depth: "+GraphicsDepth(), 10 , 50
DrawText "Graphics Hertz: "+GraphicsHertz(), 10 , 70
Flip
WaitKey()
```

### `Function GraphicsHeight()`

Get height of current graphics object


The current graphics object can be changed using [SetGraphics](../../brl/brl.graphics/#function-setgraphics-g-tgraphics).


#### Returns
The height, in pixels, of the current graphics object


#### Example
```blitzmax
SuperStrict

Graphics 640,480,0,60

DrawText "Graphics Width: "+GraphicsWidth(), 10 , 10
DrawText "Graphics Height: "+GraphicsHeight(), 10 , 30
DrawText "Graphics Depth: "+GraphicsDepth(), 10 , 50
DrawText "Graphics Hertz: "+GraphicsHertz(), 10 , 70
Flip
WaitKey()
```

### `Function GraphicsDepth()`

Get depth of current graphics object


The current graphics object can be changed using [SetGraphics](../../brl/brl.graphics/#function-setgraphics-g-tgraphics).


#### Returns
The depth, in bits, of the current graphics object


#### Example
```blitzmax
SuperStrict

Graphics 640,480,0,60

DrawText "Graphics Width: "+GraphicsWidth(), 10 , 10
DrawText "Graphics Height: "+GraphicsHeight(), 10 , 30
DrawText "Graphics Depth: "+GraphicsDepth(), 10 , 50
DrawText "Graphics Hertz: "+GraphicsHertz(), 10 , 70
Flip
WaitKey()
```

### `Function GraphicsHertz()`

Get refresh rate of current graphics object


The current graphics object can be changed using [SetGraphics](../../brl/brl.graphics/#function-setgraphics-g-tgraphics).


#### Returns
The refresh rate, in frames per second, of the current graphics object


#### Example
```blitzmax
SuperStrict

Graphics 640,480,0,60

DrawText "Graphics Width: "+GraphicsWidth(), 10 , 10
DrawText "Graphics Height: "+GraphicsHeight(), 10 , 30
DrawText "Graphics Depth: "+GraphicsDepth(), 10 , 50
DrawText "Graphics Hertz: "+GraphicsHertz(), 10 , 70
Flip
WaitKey()
```

### `Function GraphicsFlags()`

Get flags of current graphics object


The current graphics object can be changed using [SetGraphics](../../brl/brl.graphics/#function-setgraphics-g-tgraphics).


#### Returns
The flags of the current graphics object



### `Function Flip( sync=-1 )`

Flip current graphics object


[Flip](../../brl/brl.graphics/#function-flip-sync-1) swap the front and back buffers of the current graphics objects.

If <b>sync</b> is 0, then the flip occurs as soon as possible. If <b>sync</b> is 1, then the flip occurs
on the next vertical blank.

If <b>sync</b> is -1 and the current graphics object was created with the [Graphics](../../brl/brl.graphics/#function-graphics-tgraphics-width-height-depth-0-hertz-60-flags-0) command,
then flips will occur at the graphics object's refresh rate, unless the graphics object was
created with a refresh rate of 0 in which case flip occurs immediately.

If <b>sync</b> is -1 and the current graphics object was NOT created with the [Graphics](../../brl/brl.graphics/#function-graphics-tgraphics-width-height-depth-0-hertz-60-flags-0) command,
then the flip will occur on the next vertical blank.


#### Example
```blitzmax
SuperStrict

Graphics 640,480

Local x:Int = 100
Local sync:Int = 0

While Not (KeyHit(KEY_ESCAPE) Or AppTerminate())
	Cls 
	DrawText "Sync=" + Sync , x , 100
	x :+ 1 
	If x > 300 Then
		x = 100
		sync :+ 1
		If sync >1 Then
			sync=-1
		End If
  End If
  Flip sync
Wend
```

### `Function Graphics:TGraphics( width,height,depth=0,hertz=60,flags=0 )`

Begin graphics


[Graphics](../../brl/brl.graphics/#function-graphics-tgraphics-width-height-depth-0-hertz-60-flags-0) is a convenience function that simplifies the process of creating a graphics
object.

Once [Graphics](../../brl/brl.graphics/#function-graphics-tgraphics-width-height-depth-0-hertz-60-flags-0) has executed, you can begin rendering immediately without any need for
[SetGraphics](../../brl/brl.graphics/#function-setgraphics-g-tgraphics).

[Graphics](../../brl/brl.graphics/#function-graphics-tgraphics-width-height-depth-0-hertz-60-flags-0) also enables polled input mode, providing a simple way to monitor the keyboard
and mouse.


#### Returns
A graphics object


#### Example
```blitzmax
SuperStrict

Graphics 640,480

DrawRect 50,50,200,100
Flip
Repeat
Until KeyDown(KEY_ESCAPE) Or AppTerminate()
```

### `Function EndGraphics()`

End graphics


[EndGraphics](../../brl/brl.graphics/#function-endgraphics) closes the graphics object returned by [Graphics](../../brl/brl.graphics/#function-graphics-tgraphics-width-height-depth-0-hertz-60-flags-0).



## Globals

### `Global FlipHook=AllocHookId()`

Flip Hook id


Use this id with [AddHook](../../brl/brl.hook/#function-addhook-id-func-object-id-data-object-context-object-context-object-null-priority-0) to register a function that
is called every [Flip](../../brl/brl.graphics/#function-flip-sync-1).



