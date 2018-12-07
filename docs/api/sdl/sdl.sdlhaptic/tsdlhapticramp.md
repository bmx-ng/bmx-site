---
id: tsdlhapticramp
title: TSDLHapticRamp
sidebar_label: TSDLHapticRamp
---

A template for a ramp effect.


The ramp effect starts at start strength and ends at end strength.
It augments in linear fashion. If you use attack and fade with a ramp the effects get added to the ramp effect
making the effect become quadratic instead of linear.


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

This effect does not support a duration of SDL_HAPTIC_INFINITY.


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

### `Method SetStart(value:Int)`

Sets the beginning strength level.

<br/>

### `Method SetEnd(value:Int)`

Sets the ending strength level.

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

