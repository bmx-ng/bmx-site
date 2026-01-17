---
id: brl.polledinput
title: BRL.PolledInput
sidebar_label: BRL.PolledInput
---


The polled input module provides an easy way to detect keyboard and mouse input.

The functions in this module are only available when your program is running in [Graphics](../../brl/brl.graphics/#function-graphicstgraphics-widthintheightintdepthint0hertzint60flagslong0xint1yint1-) mode. When working on GUI applications, you should use events instead.


## Functions

### `Function AppSuspended:Int()`

Get app suspended state

#### Returns
True if application is currently suspended.


#### Example
```blitzmax
SuperStrict

SetGraphicsDriver GLMax2DDriver()
Graphics 800,600

While Not KeyHit(KEY_ESCAPE)
	Cls
	If AppSuspended() = True
		DrawText "Application Suspended!",10,10
	Else
		DrawText "Application Running...",10,10
	EndIf
	Flip
Wend
```
<br/>

### `Function AppTerminate:Int()`

Return app terminate state

#### Returns
True if user has requested to terminate application


#### Example
```blitzmax
SuperStrict

Graphics 640,480,0

While Not AppTerminate() Or Not Confirm( "Terminate?" )

	Cls
	DrawText MouseX()+","+MouseY(),0,0
	Flip

Wend
```
<br/>

### `Function KeyHit:Int( key:Int )`

Check for key hit


The returned value represents the number of the times <b>key</b> has been hit since the last
call to [KeyHit](../../brl/brl.polledinput/#function-keyhitint-keyint-) with the same <b>key</b>.

See the key codes module for a list of valid key codes.


#### Returns
Number of times <b>key</b> has been hit.


#### Example
```blitzmax
' keyhit.bmx

' the following code draws a circle every time the
' program detects the spacebar has been pressed
' and exits when it detects the ESCAPE key has
' been pressed

SuperStrict

Graphics 640,480
While Not KeyHit(KEY_ESCAPE)
	Cls
	If KeyHit(KEY_SPACE) DrawOval 0,0,640,480
	Flip
Wend
```
<br/>

### `Function KeyDown:Int( key:Int )`

Check for key state


See the key codes module for a list of valid keycodes.


#### Returns
[True](../../brl/brl.blitz/#true) if <b>key</b> is currently down


#### Example
```blitzmax
' keydown.bmx

' the following code draws a circle if the
' program detects the spacebar is pressed
' and exits when it detects the ESCAPE key has
' been pressed

SuperStrict

Graphics 640,480
While Not KeyHit(KEY_ESCAPE)
	Cls
	If KeyDown(KEY_SPACE) DrawOval 0,0,640,480
	Flip
Wend
```
<br/>

### `Function GetChar:Int()`

Get next character


As the user hits keys on the keyboard, BlitzMax records the character codes of these
keystrokes into an internal 'character queue'.

[GetChar](../../brl/brl.polledinput/#function-getcharint) removes the next character code from this queue and returns it the application.

If the character queue is empty, 0 is returned.


#### Returns
The character code of the next character.


<br/>

### `Function FlushKeys(resetStates:Int = True)`

Flush key states and character queue.


[FlushKeys](../../brl/brl.polledinput/#function-flushkeysresetstatesint-true) resets the state of all keys to 'off', and resets the character queue
used by [GetChar](../../brl/brl.polledinput/#function-getcharint).


<br/>

### `Function MouseX:Int()`

Get mouse x location


The returned value is relative to the left of the screen.


#### Returns
Mouse x axis location


#### Example
```blitzmax
' mousex.bmx

' the following tracks the position of the mouse

SuperStrict

Graphics 640,480
While Not KeyHit(KEY_ESCAPE)
	Cls
	DrawOval MouseX()-10,MouseY()-10,20,20
	Flip
Wend
```
<br/>

### `Function MouseY:Int()`

Get mouse y location


The returned value is relative to the top of the screen.


#### Returns
Mouse y axis location


#### Example
```blitzmax
' mousey.bmx

' the following tracks the position of the mouse

SuperStrict

Graphics 640,480
While Not KeyHit(KEY_ESCAPE)
	Cls
	DrawRect MouseX()-10,MouseY()-10,20,20
	Flip
Wend
```
<br/>

### `Function MouseZ:Int()`

Get mouse wheel


The mouse wheel value increments when the mouse wheel is rolled 'away' from the user, and
decrements when the mouse wheel is rolled 'towards' the user.


#### Returns
Mouse wheel value


#### Example
```blitzmax
' mousez.bmx

' prints mousez() the mousewheel position

SuperStrict

Graphics 640,480
While Not KeyHit(KEY_ESCAPE)
	Cls
	DrawText "MouseZ()="+MouseZ(),0,0
	Flip
Wend
```
<br/>

### `Function MouseXSpeed:Int()`

Get mouse x speed

#### Returns
Mouse x speed


<br/>

### `Function MouseYSpeed:Int()`

Get mouse y speed

#### Returns
Mouse y speed


<br/>

### `Function MouseZSpeed:Int()`

Get mouse z speed

#### Returns
Mouse z speed


<br/>

### `Function FlushMouse()`

Flush mouse button states


[FlushMouse](../../brl/brl.polledinput/#function-flushmouse) resets the state of all mouse buttons to 'off'.


<br/>

### `Function MouseHit:Int( button:Int )`

Check for mouse button click


The returned value represents the number of the times <b>button</b> has been clicked since the
last call to [MouseHit](../../brl/brl.polledinput/#function-mousehitint-buttonint-) with the same <b>button</b>.

<b>button</b> should be 1 for the left mouse button, 2 for the right mouse button or 3 for the
middle mouse button. Two further buttons, 4 and 5, are also available for mice that support them.


#### Returns
Number of times <b>button</b> has been clicked.


#### Example
```blitzmax
' mousehit.bmx

SuperStrict

Graphics 640,480

While Not KeyHit(KEY_ESCAPE)
	Cls
	If MouseHit(1) DrawRect 0,0,200,200
	If MouseHit(2) DrawRect 200,0,200,200
	If MouseHit(3) DrawRect 400,0,200,200
	Flip
Wend
```
<br/>

### `Function MouseDown:Int( button:Int )`

Check for mouse button down state


<b>button</b> should be 1 for the left mouse button, 2 for the right mouse button or 3 for the
middle mouse button. Two further buttons, 4 and 5, are also available for mice that support them.


#### Returns
[True](../../brl/brl.blitz/#true) if <b>button</b> is currently down


#### Example
```blitzmax
' mousedown.bmx

SuperStrict

Graphics 640,480

While Not KeyHit(KEY_ESCAPE)
	Cls
	If MouseDown(1) DrawRect 0,0,200,200
	If MouseDown(2) DrawRect 200,0,200,200
	If MouseDown(3) DrawRect 400,0,200,200
	Flip
Wend
```
<br/>

### `Function WaitKey:Int()`

Wait for a key press


[WaitKey](../../brl/brl.polledinput/#function-waitkeyint) suspends program execution until a key has been hit. The keycode of this
key is then returned to the application.

See the key codes module for a list of valid keycodes.


#### Returns
The keycode of the pressed key


#### Example
```blitzmax
SuperStrict

Graphics 640,480

DrawText "Press any key to end this program.", 10 , 10
Flip
WaitKey()
```
<br/>

### `Function WaitChar:Int()`

Wait for a key press


[WaitChar](../../brl/brl.polledinput/#function-waitcharint) suspends program execution until a character is available from [GetChar](../../brl/brl.polledinput/#function-getcharint). This
character is then returned to the application.


#### Returns
The character code of the pressed key


<br/>

### `Function WaitMouse:Int()`

Wait for mouse button click


[WaitMouse](../../brl/brl.polledinput/#function-waitmouseint) suspends program execution until a mouse button is clicked.

[WaitMouse](../../brl/brl.polledinput/#function-waitmouseint) returns 1 if the left mouse button was clicked, 2 if the right mouse button was
clicked or 3 if the middle mouse button was clicked. Further buttons (>3) are also checked for mice that support them.


#### Returns
The clicked button


#### Example
```blitzmax
'detects which mouse button was pressed 

SuperStrict

Graphics 640,480

Repeat
	DrawText "Click Mouse to exit" , 200 , 200
	Flip 
Until WaitMouse()
```
<br/>

### `Function SetAutoPoll(value:Int)`

Enables or disables autopolling.

<br/>

