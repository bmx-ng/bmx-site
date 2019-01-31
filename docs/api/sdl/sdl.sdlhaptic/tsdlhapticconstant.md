---
id: tsdlhapticconstant
title: TSDLHapticConstant
sidebar_label: TSDLHapticConstant
---

A constant effect applies a constant force to the joystick in the specified direction.


## Constructors

### `Method New()`

Creates a new instance of the effect.

<br/>

## Methods

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

### `Method SetLevel(value:Int)`

Sets the strength of the constant effect.

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

