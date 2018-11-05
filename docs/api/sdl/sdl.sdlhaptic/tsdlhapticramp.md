---
id: tsdlhapticramp
title: TSDLHapticRamp
sidebar_label: TSDLHapticRamp
---


The ramp effect starts at start strength and ends at end strength.
It augments in linear fashion. If you use attack and fade with a ramp the effects get added to the ramp effect
making the effect become quadratic instead of linear.


## Methods

### `Method New()`

Creates a new instance of the effect.


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

This effect does not support a duration of SDL_HAPTIC_INFINITY.



### `Method SetDelay(value:Short)`

Sets the delay before starting the effect.


### `Method SetButton(value:Short)`

Sets the button that triggers the effect.


### `Method SetInterval(value:Short)`

Sets how soon it can be triggered again after button.


### `Method SetStart(value:Int)`

Sets the beginning strength level.


### `Method SetEnd(value:Int)`

Sets the ending strength level.


### `Method SetAttackLength(value:Short)`

Sets the duration of the attack.


### `Method SetAttackLevel(value:Short)`

Sets the level at the start of the attack.


### `Method SetFadeLength(value:Short)`

Sets the duration of the fade.


### `Method SetFadeLevel(value:Short)`

Sets the level at the end of the fade.


