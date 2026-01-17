---
id: tsdlgamecontroller
title: TSDLGameController
sidebar_label: TSDLGameController
---

A game controller or mapped joystick.


## Methods

### `Method Close()`

Closes the game controller.

<br/>

### `Method GetAttached:Int()`

Checks if a controller has been opened and is currently connected.

#### Returns
[True](../../../brl/brl.blitz/#true) if the controller has been opened and currently connected, or [False](../../../brl/brl.blitz/#false) if it has not.


<br/>

### `Method GetAxis:Int(axis:ESDLGameControllerAxis)`

Gets the current state of an axis control on a game controller.

The axis indices start at index 0.
The state is a value ranging from -32768 to 32767. Triggers, however, range from 0 to 32767 (they never return a negative value).


#### Returns
Axis state (including 0) on success or 0 (also) on failure; call [SDLGetError](../../../sdl/sdl.sdl/#function-sdlgeterrorstring) for more information.


<br/>

### `Method GetButton:Int(button:ESDLGameControllerButton)`

Gets the current state of a button on a game controller.

The button indices start at index 0.


#### Returns
1 for pressed state or 0 for not pressed state or error; call [SDLGetError](../../../sdl/sdl.sdl/#function-sdlgeterrorstring) for more information.


<br/>

### `Method GetName:String()`

Gets the implementation dependent name for the game controller.

#### Returns
The implementation dependent name for the game controller, or [Null](../../../brl/brl.blitz/#null) if there is no name or the controller is invalid.


<br/>

### `Method GetMapping:String()`

Gets the current mapping of the Game Controller.

More information about the mapping can be found at [AddMapping](../../../sdl/sdl.sdlgamecontroller/tsdlgamecontroller/#function-addmappingintmappingstring).


#### Returns
A [String](../../../brl/brl.blitz/#string) that has the controller's mapping or [Null](../../../brl/brl.blitz/#null) if no mapping is available; call [SDLGetError](../../../sdl/sdl.sdl/#function-sdlgeterrorstring) for more information.


<br/>

### `Method GetType:ESDLGameControllerType()`

Returns the type of this currently opened controller.

<br/>

### `Method HasAxis:Int(axis:ESDLGameControllerAxis)`

Returns whether the game controller has a given axis.

<br/>

### `Method HasButton:Int(button:ESDLGameControllerButton)`

Returns whether the game controller has a given button.

<br/>

### `Method GetNumTouchpads:Int()`

Gets the number of touchpads on the game controller.

<br/>

### `Method GetNumTouchpadFingers:Int(touchpad:Int)`

Gets the number of supported simultaneous fingers on a touchpad on the game controller.

<br/>

### `Method GetTouchpadFinger:Int(touchpad:Int, finger:Int, state:Byte Var, x:Float Var, y:Float Var, pressure:Float Var)`

Gets the current state of a finger on a touchpad on the game controller.

<br/>

### `Method HasSensor:Int(sensorType:ESDLSensorType)`

Returns whether the game controller has a particular sensor.

#### Returns
[True](../../../brl/brl.blitz/#true) if the sensor exists, [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method SetSensorEnabled:Int(sensorType:ESDLSensorType, enabled:Int)`

Sets whether data reporting for the game controller sensor is enabled.

#### Returns
0, or -1 if an error occurred.


<br/>

### `Method IsSensorEnabled:Int(sensorType:ESDLSensorType)`

Queries whether sensor data reporting is enabled for the game controller.

#### Returns
[True](../../../brl/brl.blitz/#true) if the sensor is enabled, [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method SDL_GameControllerGetSensorData:Int(sensorType:ESDLSensorType, data:Float Ptr, numValues:Int)`

Gets the current state of a game controller sensor.

The number of values and interpretation of the data is sensor dependent.


#### Returns
0, or -1 if an error occurred.


<br/>

### `Method Rumble:Int(lowFrequencyRumble:Short, highFrequencyRumble:Short, durationMs:UInt)`

Starts a rumble effect.

Each call to this method cancels any previous rumble effect, and calling it with 0 intensity stops any rumbling.


#### Returns
0, or -1 if rumble isn't supported on this controller.


<br/>

### `Method RumbleTriggers:Int(leftRumble:Short, rightRumble:Short, durationMs:UInt)`

Starts a rumble effect in the game controller's triggers

Each call to this function cancels any previous trigger rumble effect, and calling it with 0 intensity stops any rumbling.


#### Returns
0, or -1 if rumble isn't supported on this controller.


<br/>

### `Method HasLED:Int()`

Returns whether the controller has an LED.

#### Returns
[True](../../../brl/brl.blitz/#true), or [False](../../../brl/brl.blitz/#false) if this controller does not have a modifiable LED.


<br/>

### `Method SDL_GameControllerSetLED:Int(red:Byte, green:Byte, blue:Byte)`

Updates a controller's LED color.

#### Returns
0, or -1 if this controller does not have a modifiable LED.


<br/>

### `Method HasRumble:Int()`

Queries whether the game controller has rumble support.

#### Returns
[True](../../../brl/brl.blitz/#true), or [False](../../../brl/brl.blitz/#false) if this controller does not have rumble support.


<br/>

### `Method HasRumbleTriggers:Int()`

Queries whether the game controller has rumble support on triggers.

#### Returns
[True](../../../brl/brl.blitz/#true), or [False](../../../brl/brl.blitz/#false) if this controller does not have trigger rumble support.


<br/>

### `Method GetPlayerIndex:Int(handle:Byte Ptr)`

Gets the player index of an opened game controller.

For XInput controllers this returns the XInput user index.


#### Returns
The player index for the controller, or -1 if it's not available.


<br/>

### `Method SetPlayerIndex(index:Int)`

Sets the player index of an opened game controller.

<br/>

## Functions

### `Function Open:TSDLGameController(port:Int)`

Opens a game controller to use.

The <b>port</b> passed as an argument refers to the N'th game controller on the system.
A call to [Close](../../../sdl/sdl.sdlgamecontroller/tsdlgamecontroller/#method-close) should be made when you have finished with this game controller.


#### Returns
A [TSDLGameController](../../../sdl/sdl.sdlgamecontroller/tsdlgamecontroller) instance or [Null](../../../brl/brl.blitz/#null) if an error occurred; call [SDLGetError](../../../sdl/sdl.sdl/#function-sdlgeterrorstring)() for more information.


<br/>

### `Function AddMapping:Int(mapping:String)`

Adds support for controllers that SDL is unaware of or to cause an existing controller to have a different binding.

The mapping string has the format "GUID,name,mapping", where GUID is the string value from GetGUIDString, name is the human
readable string for the device and mappings are controller mappings to joystick ones. Under Windows there is a
reserved GUID of "xinput" that covers all XInput devices. The mapping format for joystick is:

| Mapping  | Description  |
|---|---|
| bX   | a joystick button, index X  |
| hX.Y | hat X with value Y |
| aX | axis X of the joystick |

Buttons can be used as a controller axes and vice versa.

This string shows an example of a valid mapping for a controller: `"341a3608000000000000504944564944,Afterglow PS3 Controller,a:b1,b:b2,y:b3,x:b0,start:b9,guide:b12,back:b8,dpup:h0.1,dpleft:h0.8,dpdown:h0.4,dpright:h0.2,leftshoulder:b4,rightshoulder:b5,leftstick:b10,rightstick:b11,leftx:a0,lefty:a1,rightx:a2,righty:a3,lefttrigger:b6,righttrigger:b7"`


#### Returns
1 if a new mapping is added, 0 if an existing mapping is updated, -1 on error; call [SDLGetError](../../../sdl/sdl.sdl/#function-sdlgeterrorstring) for more information.


<br/>

### `Function GetAxisFromString:ESDLGameControllerAxis(txt:String)`

Converts a string into an enum representation for an ESDLGameControllerAxis.

#### Returns
The ESDLGameControllerAxis enum corresponding to the input string, or ESDLGameControllerAxis.INVALID if no match was found.


<br/>

### `Function GetButtonFromString:ESDLGameControllerButton(txt:String)`

Turns a string into a button mapping.

#### Returns
A button mapping (#ESDLGameControllerButton) on success or ESDLGameControllerButton.INVALID on failure.


<br/>

### `Function GetStringForAxis:String(axis:ESDLGameControllerAxis)`

Turns an axis enum into a string mapping.

<br/>

### `Function GetStringForButton:String(button:ESDLGameControllerButton)`

Turns a button enum into a string mapping.

<br/>

### `Function NameForIndex:String(port:Int)`

Gets the implementation dependent name for the game controller.

#### Returns
The implementation dependent name for the game controller, or [Null](../../../brl/brl.blitz/#null) if there is no name or the index is invalid.


#### Example
```blitzmax
SuperStrict

Framework SDL.SDLGameController
Import brl.standardio

For Local i:Int = 0 Until JoyCount()
	Print TSDLGameController.NameForIndex(i)
Next
```
<br/>

### `Function TypeForIndex:ESDLGameControllerType(port:Int)`

Gets the type of a game controller.

This can be called before any controllers are opened.


<br/>

