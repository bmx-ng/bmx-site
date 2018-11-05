---
id: tsdlhapticperiodic
title: TSDLHapticPeriodic
sidebar_label: TSDLHapticPeriodic
---


The type determines the shape of the wave and the other parameters determine the dimensions of the wave.


## Methods

### `Method New(waveType:Int)`

Creates a new instance of the effect.

<b>waveType</b> one of [SDL_HAPTIC_SINE](../../../sdl/sdl.sdlhaptic/#const-sdl-haptic-sine-int-1-shl-1), [SDL_HAPTIC_LEFTRIGHT](../../../sdl/sdl.sdlhaptic/#const-sdl-haptic-leftright-int-1-shl-2), [SDL_HAPTIC_TRIANGLE](../../../sdl/sdl.sdlhaptic/#const-sdl-haptic-triangle-int-1-shl-3), [SDL_HAPTIC_SAWTOOTHUP](../../../sdl/sdl.sdlhaptic/#const-sdl-haptic-sawtoothup-int-1-shl-4) or [SDL_HAPTIC_SAWTOOTHDOWN](../../../sdl/sdl.sdlhaptic/#const-sdl-haptic-sawtoothdown-int-1-shl-5).



### `Method GetLength:UInt()`

Returns the duration of effect (ms).


### `Method GetDelay:Short()`

Returns the delay before starting effect.


### `Method GetButton:Short()`

Returns the button that triggers effect.


### `Method GetInterval:Short()`

Returns how soon before effect can be triggered again.


### `Method GetAttackLength:Short()`

Returns the duration of the attack (ms).


### `Method GetAttackLevel:Short()`

Returns the level at the start of the attack.


### `Method GetFadeLength:Short()`

Returns the duration of the fade out (ms).


### `Method GetFadeLevel:Short()`

Returns the level at the end of the fade.


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


### `Method SetPeriod(value:Short)`

Sets the period of the wave.


### `Method SetMagnitude(value:Int)`

Sets the peak value

Ff negative, equivalent to 180 degrees extra phase shift



### `Method SetOffset(value:Int)`

Sets the mean value of the wave.


### `Method SetPhase(value:Short)`

Sets the positive phase shift given by hundredth of a degree.

Phase is given by hundredths of a degree, meaning that giving the phase a value of 9000
will displace it 25% of its period. Here are sample values:
<p>0 - No phase displacement</p>
<p>9000 - Displaced 25% of its period</p>
<p>18000 - Displaced 50% of its period</p>
<p>27000 - Displaced 75% of its period</p>
<p>36000 - Displaced 100% of its period, same as 0, but 0 is preferred</p>



### `Method SetAttackLength(value:Short)`

Sets the duration of the attack.


### `Method SetAttackLevel(value:Short)`

Sets the level at the start of the attack.


### `Method SetFadeLength(value:Short)`

Sets the duration of the fade.


### `Method SetFadeLevel(value:Short)`

Sets the level at the end of the fade.


