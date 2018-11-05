---
id: tsdlhapticcondition
title: TSDLHapticCondition
sidebar_label: TSDLHapticCondition
---


## Methods

### `Method New(effectType:Int)`

Creates a new instance of the effect.

<b>effectType</b> one of [SDL_HAPTIC_SPRING](../../../sdl/sdl.sdlhaptic/#const-sdl-haptic-spring-int-1-shl-7), [SDL_HAPTIC_DAMPER](../../../sdl/sdl.sdlhaptic/#const-sdl-haptic-damper-int-1-shl-8), [SDL_HAPTIC_INERTIA](../../../sdl/sdl.sdlhaptic/#const-sdl-haptic-inertia-int-1-shl-9), [SDL_HAPTIC_FRICTION](../../../sdl/sdl.sdlhaptic/#const-sdl-haptic-friction-int-1-shl-10)



### `Method GetLength:UInt()`

Returns the duration of effect (ms).


### `Method GetDelay:Short()`

Returns the delay before starting effect.


### `Method GetButton:Short()`

Returns the button that triggers effect.


### `Method GetInterval:Short()`

Returns how soon before effect can be triggered again.


### `Method Direction:TSDLHapticDirection()`

Returns the effect direction.

This instance is owned by the effect, and any changes will apply only to this effect.



### `Method SetLength(value:UInt)`

Sets the duration of the effect.

You can pass SDL_HAPTIC_INFINITY to length instead of a 0-32767 value.



### `Method SetDelay(value:Short)`

Sets the delay before starting the effect.


### `Method SetButton(value:Short)`

Sets the button that triggers the effect.


### `Method SetInterval(value:Short)`

Sets how soon it can be triggered again after button.


### `Method SetRightSat(x:Short, y:Short = 0, z:Short = 0)`

Sets level when joystick is to the positive side.

max = $FFFF



### `Method SetLeftSat(x:Short, y:Short = 0, z:Short = 0)`

Sets level when joystick is to the negative side.

max = $FFFF



### `Method SetRightCoeff(x:Int, y:Int = 0, z:Int = 0)`

Sets how fast to increase the force towards the positive side.


### `Method SetLeftCoeff(x:Int, y:Int = 0, z:Int = 0)`

Sets how fast to increase the force towards the negative side.


### `Method SetDeadband(x:Short, y:Short = 0, z:Short = 0)`

Sets the size of the dead zone.

max = $FFFF: whole axis-range when 0-centered



### `Method SetCenter(x:Int, y:Int = 0, z:Int = 0)`

Sets the position of the dead zone.


