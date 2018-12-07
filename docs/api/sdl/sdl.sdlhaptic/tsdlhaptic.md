---
id: tsdlhaptic
title: TSDLHaptic
sidebar_label: TSDLHaptic
---

A haptic device.


## Methods

### `Method Query:UInt()`

Gets the haptic device's supported features in bitwise manner.

#### Returns
A list of supported haptic features in bitwise manner (OR'd), or 0 on failure.


<br/>

### `Method Index:Int()`

Gets the index of the haptic device.

<br/>

### `Method Pause:Int()`

Pauses the haptic device.

#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method Unpause:Int()`

Unpauses the haptic device.

0 on success or a negative error code on failure.


<br/>

### `Method StopAll:Int()`

Stops all the currently playing effects on the haptic device.

#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method NumAxes:Int()`

Gets the number of haptic axes the device has.

The number of haptic axes might be useful if working with the [Direction](../../../sdl/sdl.sdlhaptic/tsdlhapticconstant/#method-direction-tsdlhapticdirection) effect.


<br/>

### `Method EffectSupported:Int(effect:TSDLHapticEffect)`

Checks to see if an effect is supported by a haptic device.

True if effect is supported, False if it isn't, or a negative error code on failure.


<br/>

### `Method NumEffects:Int()`

Gets the number of effects a haptic device can store.

On some platforms this isn't fully supported, and therefore is an approximation.
Always check to see if your created effect was actually created and do not rely solely on [NumEffects](../../../sdl/sdl.sdlhaptic/tsdlhaptic/#method-numeffects-int)().


<br/>

### `Method NumEffectsPlaying:Int()`

Gets the number of effects a haptic device can play at the same time.

This is not supported on all platforms, but will always return a value. Added here for the sake of completeness.


<br/>

### `Method NewEffect:Int(effect:TSDLHapticEffect)`

Creates a new haptic effect on the device.

#### Returns
The ID of the effect on success or a negative error code on failure.


<br/>

### `Method RunEffect:Int(effect:Int, iterations:UInt)`

Runs the effect on the device.

If iterations are SDL_HAPTIC_INFINITY, it'll run the effect over and over repeating the envelope (attack and fade) every time.
If you only want the effect to last forever, set SDL_HAPTIC_INFINITY in the effect's length parameter.


#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method StopEffect:Int(effect:Int)`

Stops the haptic effect on the device.

#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method EffectStatus:Int(effect:Int)`

Gets the status of the current effect on the haptic device.

Device must support the [SDL_HAPTIC_STATUS](../../../sdl/sdl.sdlhaptic/#const-sdl-haptic-status-int-1-shl-14) feature.


#### Returns
0 if it isn't playing, 1 if it is playing, or a negative error code on failure.


<br/>

### `Method DestroyEffect(effect:Int)`

Destroys the haptic effect on the device.

This will stop the effect if it's running. Effects are automatically destroyed when the device is closed.


<br/>

### `Method RumbleInit:Int()`

Initializes the haptic device for simple rumble playback.

#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method RumblePlay:Int(strength:Float, length:UInt)`

Runs a simple rumble effect on a haptic device.

<br/>

### `Method RumbleStop:Int()`

Stops the simple rumble on the haptic device.

#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method RumbleSupported:Int()`

Checks whether rumble is supported on the haptic device.

<br/>

### `Method SetAutocenter:Int(value:Int)`

Sets the global autocenter of the haptic device.

#### Returns
0 on success or a negative error code on failure.


<br/>

### `Method SetGain:Int(value:Int)`

Sets the global gain of the haptic device.

<br/>

### `Method Close()`

Closes the haptic device.

<br/>

## Functions

### `Function Open:TSDLHaptic(device:Int)`

Opens a haptic device for use.

The device passed as an argument refers to the N'th haptic device on this system.
When opening a haptic device, its gain will be set to maximum and autocenter will be disabled.
To modify these values use SetGain() and SetAutocenter().


<br/>

### `Function OpenFromJoystick:TSDLHaptic(joystick:TSDLJoystick)`

Opens a haptic device for use from a joystick device.

You must still close the haptic device separately. It will not be closed with the joystick.
When opened from a joystick you should first close the haptic device before closing the joystick device.
If not, on some implementations the haptic device will also get unallocated and you'll be unable to use force feedback on that device.


#### Returns
Aa valid haptic device on success or NULL on failure.


<br/>

### `Function MouseIsHaptic:Int()`

Gets whether or not the current mouse has haptic capabilities.

<br/>

### `Function OpenFromMouse:TSDLHaptic()`

Opens a haptic device from the current mouse.

#### Returns
The haptic device or NULL on failure.


<br/>

### `Function NumHaptics:Int()`

Counts the number of haptic devices attached to the system.

<br/>

### `Function Name:String(device:Int)`

Gets the implementation dependent name of the haptic device.

<br/>

### `Function Opened:Int(device:Int)`

Checks if the haptic device at the designated index has been opened.

#### Returns
Returns True if it has been opened, False if it hasn't or on failure.


<br/>

