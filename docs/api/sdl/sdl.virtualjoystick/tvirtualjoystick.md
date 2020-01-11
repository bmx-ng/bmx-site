---
id: tvirtualjoystick
title: TVirtualJoystick
sidebar_label: TVirtualJoystick
---

A virtual touch joystick.


Can be extended to implement your own rendering of it.


## Methods

### `Method Create:TVirtualJoystick(name:String, x:Int, y:Int, stickRadius:Int, knobRadius:Int, flags:Int = VS_AXIS_XY)`

Creates a new virtual joystick instance, using the specified configuration.

<br/>

### `Method AddButton:Int(x:Int, y:Int, radius:Int)`

Adds a button at the specified location.

#### Returns
The button id.


<br/>

### `Method GetX:Float()`

Reports the horizontal position of the joystick.

#### Returns
Zero if the joystick is centered, -1 if Left, 1 if Right or a value in between.


<br/>

### `Method GetY:Float()`

Reports the vertical position of the joystick.

#### Returns
Zero if the joystick is centered, -1.0 if Up, 1.0 if Down or a value in between.


<br/>

### `Method ButtonDown:Int(button:Int)`

Test the status of a joystick button.

#### Returns
[True](../../../brl/brl.blitz/#true) if the button is pressed.


<br/>

### `Method ButtonHit:Int(button:Int)`

Checks for a joystick button press.

The returned value represents the number of the times <b>button</b> has been hit since the last call to [ButtonHit](../../../sdl/sdl.virtualjoystick/tvirtualjoystick/#method-buttonhitintbuttonint) with the same specified <b>button</b>.


#### Returns
Number of times <b>button</b> has been hit.


<br/>

