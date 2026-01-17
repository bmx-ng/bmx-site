---
id: tsdljoystick
title: TSDLJoystick
sidebar_label: TSDLJoystick
---

An SDL joystick instance.


## Methods

### `Method HasLED:Int()`

Returns whether the joystick has an LED.

#### Returns
[True](../../../brl/brl.blitz/#true), or [False](../../../brl/brl.blitz/#false) if this joystick does not have a modifiable LED.


<br/>

### `Method IsHaptic:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the joystick has haptic features.

<br/>

### `Method PowerLevel:Int()`

Returns the battery level of this joystick.

#### Returns
One of [SDL_JOYSTICK_POWER_UNKNOWN](../../../sdl/sdl.sdljoystick/#const-sdljoystickpowerunknownint-1), [SDL_JOYSTICK_POWER_EMPTY](../../../sdl/sdl.sdljoystick/#const-sdljoystickpoweremptyint-0), [SDL_JOYSTICK_POWER_LOW](../../../sdl/sdl.sdljoystick/#const-sdljoystickpowerlowint-1), [SDL_JOYSTICK_POWER_MEDIUM](../../../sdl/sdl.sdljoystick/#const-sdljoystickpowermediumint-2), [SDL_JOYSTICK_POWER_FULL](../../../sdl/sdl.sdljoystick/#const-sdljoystickpowerfullint-3), or [SDL_JOYSTICK_POWER_WIRED](../../../sdl/sdl.sdljoystick/#const-sdljoystickpowerwiredint-4).


<br/>

### `Method Rumble:Int(lowFrequencyRumble:Short, highFrequencyRumble:Short, durationMs:UInt)`

Starts a rumble effect.

Each call to this method cancels any previous rumble effect, and calling it with 0 rumble intensity stops any rumbling.


#### Returns
0, or -1 if rumble isn't supported on this joystick.


<br/>

### `Method RumbleTriggers:Int(leftRumble:Short, rightRumble:Short, durationMs:UInt)`

0, or -1 if trigger rumble isn't supported on this joystick.

<br/>

### `Method SetLED:Int(red:Byte, green:Byte, blue:Byte)`

Updates the joystick's LED color.

#### Returns
0, or -1 if this joystick does not have a modifiable LED.


<br/>

### `Method HasRumble:Int()`

Queries whether the joystick has rumble support.

#### Returns
[True](../../../brl/brl.blitz/#true) if the joystick has rumble, [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method HasRumbleTriggers:Int()`

Queries whether the joystick has rumble support on triggers.

#### Returns
[True](../../../brl/brl.blitz/#true) if the joystick has trigger rumble, [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method Name:String()`

Gets the implementation dependent name of a joystick.

#### Returns
The name of the joystick. If no name can be found, this method returns [Null](../../../brl/brl.blitz/#null) - call SDLGetError() for more information.


<br/>

### `Method GetPlayerIndex:Int()`

Gets the player index for the joystick.

For XInput controllers this returns the XInput user index. Many joysticks will not be able to supply this information.


#### Returns
The player index, or -1 if it's not available.


<br/>

### `Method SetPlayerIndex(index:Int)`

Sets the player index of the joystick.

<br/>

