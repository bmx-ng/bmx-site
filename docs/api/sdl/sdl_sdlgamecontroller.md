---
id: sdl.sdlgamecontroller
title: SDL.SDLGameController
sidebar_label: Introduction
---


Provides support for handling game controllers and for mapping joysticks to game controller semantics.

[TSDLGameController](../../sdl/sdl.sdlgamecontroller/tsdlgamecontroller) is an abstraction for gamepads ("controllers") similar to the xbox360-pad: They have a DPAD, two analog sticks,
4 buttons on the right (often called A, B, X, Y), shoulder buttons (two of which might be axes) and 3 buttons in the middle
(Start, Back and usually some kind of logo-button).

This includes devices that have a similar layout, like the Playstation DualShock Controller, but different button names; 
[TSDLGameController](../../sdl/sdl.sdlgamecontroller/tsdlgamecontroller) uses the naming-conventions of xbox360/XInput for all supported devices, so you'll know that ESDLGameControllerAxis.LEFTX
is always the X-Axis of the left Analog Stick, or ESDLGameControllerButton.B is always the rightmost buttons of the 4 buttons on the right,
for example. This makes providing consistent input bindings (for this kind of device) to your users easy,
like "press B to jump, move around with the left analog stick" - with the Joystick API (and the underlying APIs like DirectInput) it's
impossible to know which SDL (or DirectInput) axis or button corresponds to which physical axis/button on the device.

If you are running your game from Steam, the game controller mapping is automatically provided for your game.



## Types
| Type | Description |
|---|---|
| [TSDLGameController](../../sdl/sdl.sdlgamecontroller/tsdlgamecontroller) | A game controller or mapped joystick. |

## Functions

### `Function SDLIsGameController:Int(port:Int)`

Checks if the given joystick is supported by the game controller interface.

<b>port</b> is joystick port, up to JoyCount.


#### Returns
[True](../../brl/brl.blitz/#true) if the given joystick is supported by the game controller interface, [False](../../brl/brl.blitz/#false) if it isn't or it's an invalid index.


#### Example
```blitzmax
SuperStrict

Framework SDL.SDLGameController
Import brl.standardio

For Local i:Int = 0 Until JoyCount()
	If SDLIsGameController(i) Then
		Print "Device " + i + " is a game controller"
	End If
Next
```
<br/>

