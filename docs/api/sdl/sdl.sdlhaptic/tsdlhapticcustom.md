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

<br/>

### `Method GetLength:UInt()`

Returns the duration of effect (ms).

<br/>

### `Method GetDelay:Short()`

Returns the delay before starting effect.

<br/>

### `Method GetButton:Short()`

Returns the button that triggers effect.

<br/>

### `Method GetInterval:Short()`

Returns how soon before effect can be triggered again.

<br/>

### `Method GetAttackLength:Short()`

Returns the duration of the attack (ms).

<br/>

### `Method GetAttackLevel:Short()`

Returns the level at the start of the attack.

<br/>

### `Method GetFadeLength:Short()`

Returns the duration of the fade out (ms).

<br/>

### `Method GetFadeLevel:Short()`

Returns the level at the end of the fade.

<br/>

### `Method Direction:TSDLHapticDirection()`

Returns the effect direction.

This instance is owned by the effect, and any changes will apply only to this effect.


<br/>

### `Method SetLength(value:UInt)`

Sets the duration of the effect.

You can pass SDL_HAPTIC_INFINITY to length instead of a 0-32767 value.


<br/>

### `Method SetDelay(value:Short)`

Sets the delay before starting the effect.

<br/>

### `Method SetButton(value:Short)`

Sets the button that triggers the effect.

<br/>

### `Method SetInterval(value:Short)`

Sets how soon it can be triggered again after button.

<br/>

### `Method SetChannels(value:Byte)`

Sets the axes to use, minimum of 1.

If channels is 1, the effect is rotated using the defined direction. Otherwise it uses the samples in data for the different axes.


<br/>

### `Method SetPeriod(value:Byte)`

Sets the sample periods.

<br/>

### `Method SetData(data:Short[])`

Sets the samples data.

<br/>

### `Method SetAttackLength(value:Short)`

Sets the duration of the attack.

<br/>

### `Method SetAttackLevel(value:Short)`

Sets the level at the start of the attack.

<br/>

### `Method SetFadeLength(value:Short)`

Sets the duration of the fade.

<br/>

### `Method SetFadeLevel(value:Short)`

Sets the level at the end of the fade.

<br/>

