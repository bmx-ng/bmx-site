---
id: sdl.sdlhaptic
title: SDL.SDLHaptic
sidebar_label: Introduction
---


## Types
| Type | Description |
|---|---|
| [TSDLHaptic](../../sdl/sdl.sdlhaptic/tsdlhaptic) | A haptic device. |
| [TSDLHapticDirection](../../sdl/sdl.sdlhaptic/tsdlhapticdirection) | The direction where the force comes from, instead of the direction in which the force is exerted. |
| [TSDLHapticEffect](../../sdl/sdl.sdlhaptic/tsdlhapticeffect) | A generic template for any haptic effect. |
| [TSDLHapticConstant](../../sdl/sdl.sdlhaptic/tsdlhapticconstant) | A constant effect applies a constant force to the joystick in the specified direction. |
| [TSDLHapticPeriodic](../../sdl/sdl.sdlhaptic/tsdlhapticperiodic) | A wave-shaped effect that repeats itself over time. |
| [TSDLHapticCondition](../../sdl/sdl.sdlhaptic/tsdlhapticcondition) | A template for a condition effect. |
| [TSDLHapticRamp](../../sdl/sdl.sdlhaptic/tsdlhapticramp) | A template for a ramp effect. |
| [TSDLHapticLeftRight](../../sdl/sdl.sdlhaptic/tsdlhapticleftright) | Controls the large and small motors, commonly found in modern game controllers. |
| [TSDLHapticCustom](../../sdl/sdl.sdlhaptic/tsdlhapticcustom) | A custom force feedback effect. |

## Consts

### `Const SDL_HAPTIC_INFINITY:UInt = 4294967295:UInt`

Used to play a device an infinite number of times.

<br/>

### `Const SDL_HAPTIC_POLAR:Int = 0`

Uses polar coordinates for the direction.

<br/>

### `Const SDL_HAPTIC_CARTESIAN:Int = 1`

Uses cartesian coordinates for the direction.

<br/>

### `Const SDL_HAPTIC_SPHERICAL:Int = 2`

Uses spherical coordinates for the direction.

<br/>

### `Const SDL_HAPTIC_CONSTANT:Int = 1 Shl 0`

Constant effect supported.

Constant haptic effect.


<br/>

### `Const SDL_HAPTIC_SINE:Int = 1 Shl 1`

Sine wave effect supported.

Periodic haptic effect that simulates sine waves.


<br/>

### `Const SDL_HAPTIC_LEFTRIGHT:Int = 1 Shl 2`

Left/Right effect supported.

Haptic effect for direct control over high/low frequency motors.


<br/>

### `Const SDL_HAPTIC_TRIANGLE:Int = 1 Shl 3`

Triangle wave effect supported.

Periodic haptic effect that simulates triangular waves.


<br/>

### `Const SDL_HAPTIC_SAWTOOTHUP:Int = 1 Shl 4`

Sawtoothup wave effect supported.

Periodic haptic effect that simulates saw tooth up waves.


<br/>

### `Const SDL_HAPTIC_SAWTOOTHDOWN:Int = 1 Shl 5`

Sawtoothdown wave effect supported.

Periodic haptic effect that simulates saw tooth down waves.


<br/>

### `Const SDL_HAPTIC_RAMP:Int = 1 Shl 6`

Ramp effect supported.

Ramp haptic effect.


<br/>

### `Const SDL_HAPTIC_SPRING:Int = 1 Shl 7`

Spring effect supported - uses axes position.

Condition haptic effect that simulates a spring. Effect is based on the axes position.


<br/>

### `Const SDL_HAPTIC_DAMPER:Int = 1 Shl 8`

Damper effect supported - uses axes velocity.

Condition haptic effect that simulates dampening. Effect is based on the axes velocity.


<br/>

### `Const SDL_HAPTIC_INERTIA:Int = 1 Shl 9`

Inertia effect supported - uses axes acceleration.

Condition haptic effect that simulates inertia. Effect is based on the axes acceleration.


<br/>

### `Const SDL_HAPTIC_FRICTION:Int = 1 Shl 10`

Friction effect supported - uses axes movement.

Condition haptic effect that simulates friction. Effect is based on the axes movement.


<br/>

### `Const SDL_HAPTIC_CUSTOM:Int = 1 Shl 11`

Custom effect is supported.

User defined custom haptic effect.


<br/>

### `Const SDL_HAPTIC_GAIN:Int = 1 Shl 12`

Device supports setting the global gain.

<br/>

### `Const SDL_HAPTIC_AUTOCENTER:Int = 1 Shl 13`

Device supports setting autocenter.

<br/>

### `Const SDL_HAPTIC_STATUS:Int = 1 Shl 14`

Device supports querying effect status.

<br/>

### `Const SDL_HAPTIC_PAUSE:Int = 1 Shl 15`

Devices supports being paused.

<br/>

