---
id: tsdlhapticcustom
title: TSDLHapticCustom
sidebar_label: TSDLHapticCustom
---

A custom force feedback effect.


The effect is much like a periodic effect, where the application can define its exact shape.
You will have to allocate the data yourself. data should consist of channels * samples Short samples.
If channels is 1, the effect is rotated using the defined direction. Otherwise it uses the samples in data for the different axes.


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

You can pass SDL_HAPTIC_INFINITY to length instead of a 0-32767 value.



### `Method SetDelay(value:Short)`

Sets the delay before starting the effect.


### `Method SetButton(value:Short)`

Sets the button that triggers the effect.


### `Method SetInterval(value:Short)`

Sets how soon it can be triggered again after button.


### `Method SetChannels(value:Byte)`

Sets the axes to use, minimum of 1.

If channels is 1, the effect is rotated using the defined direction. Otherwise it uses the samples in data for the different axes.



### `Method SetPeriod(value:Byte)`

Sets the sample periods.


### `Method SetData(data:Short[])`

Sets the samples data.


### `Method SetAttackLength(value:Short)`

Sets the duration of the attack.


### `Method SetAttackLevel(value:Short)`

Sets the level at the start of the attack.


### `Method SetFadeLength(value:Short)`

Sets the duration of the fade.


### `Method SetFadeLevel(value:Short)`

Sets the level at the end of the fade.


