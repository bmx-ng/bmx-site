---
id: pub.joystick
title: Pub.Joystick
sidebar_label: Introduction
---


## Types
| Type | Description |
|---|---|
| [TJoystickDriver](../../pub/pub.joystick/tjoystickdriver) | Abstract base type for joystick drivers. |

## Functions

### `Function JoyButtonCaps:Int(port:Int)`

Available buttons (on/off controls) on a joystick.

#### Returns
A bitfield representing which buttons are present.


<br/>

### `Function JoyAxisCaps:Int(port:Int)`

Available axis (proportional controls) on a joystick.


The bit positions of the returned value correspond to the following constants defined
in the FreeJoy module: Const JOY_X=0
* Const JOY_Y=1
* Const JOY_Z=2
* Const JOY_R=3
* Const JOY_U=4
* Const JOY_V=5
* Const JOY_YAW=6
* Const JOY_PITCH=7
* Const JOY_ROLL=8
* Const JOY_HAT=9
* Const JOY_WHEEL=10


#### Returns
A bitfield representing which axis are available.


<br/>

### `Function JoyDown:Int( button:Int, port:Int=0 )`

Test the status of a joystick button.

#### Returns
True if the button is pressed.


<br/>

### `Function JoyHit:Int( button:Int, port:Int=0 )`

Check for a joystick button press


The returned value represents the number of the times <b>button</b> has been hit since
the last call to [JoyHit](../../pub/pub.joystick/#function-joyhitint-buttonint-portint0-) with the same specified <b>button</b>.


#### Returns
Number of times <b>button</b> has been hit.


<br/>

### `Function JoyX#( port:Int=0 )`

Reports the horizontal position of the joystick.

#### Returns
Zero if the joystick is centered, -1 if Left, 1 if Right or a value inbetween.


<br/>

### `Function JoyY#( port:Int=0 )`

Reports the vertical position of the joystick.

#### Returns
Zero if the joystick is centered, -1.0 if Up, 1.0 if Down or a value inbetween.


<br/>

### `Function JoyZ#( port:Int=0 )`

Reports the position of the joystick's Z axis if supported.

#### Returns
Zero if the joystick is centered, -1.0 if Up, 1.0 if Down or a value inbetween.


<br/>

### `Function JoyR#( port:Int=0 )`

Reports the position of the joystick's R axis if supported.

#### Returns
Zero if the joystick is centered, -1.0 if Up, 1.0 if Down or a value inbetween.


<br/>

### `Function JoyU#( port:Int=0 )`

Reports the position of the joystick's U axis if supported.


The U value of a joystick usually corresponds to a joystick's 'slider' or 'throttle' feature, although this may vary depending on the joystick, and will not be available with all joysticks.


#### Returns
Zero if the joystick is centered, -1.0 if Up, 1.0 if Down or a value inbetween.


<br/>

### `Function JoyV#( port:Int=0 )`

Reports the position of the joystick's V axis if supported.


The V value of a joystick usually corresponds to a joystick's 'slider' or 'throttle' feature, although this may vary depending on the joystick, and will not be available with all joysticks.


#### Returns
Zero if the joystick is centered, -1.0 if Up, 1.0 if Down or a value inbetween.


<br/>

### `Function JoyYaw#( port:Int=0 )`

Reports the position of the joystick's YAW axis if supported.

#### Returns
Zero if the joystick is centered, -1.0 if Up, 1.0 if Down or a value inbetween.


<br/>

### `Function JoyPitch#( port:Int=0 )`

Reports the position of the joystick's PITCH axis if supported.

#### Returns
Zero if the joystick is centered, -1.0 if Up, 1.0 if Down or a value inbetween.


<br/>

### `Function JoyRoll#( port:Int=0 )`

Reports the position of the joystick's ROLL axis if supported.

#### Returns
Zero if the joystick is centered, -1.0 if Up, 1.0 if Down or a value inbetween.


<br/>

### `Function JoyHat#( port:Int=0 )`

Reports the position of the joystick's HAT controller if supported.

#### Returns
-1.0 if the joystick is centered, and values between 0.0, 0.25, 0.5 and 0.75 for the directions Up, Right, Down, Left respectively.


<br/>

### `Function JoyWheel#( port:Int=0 )`

Reports the position of the joystick's WHEEL controller if supported.

#### Returns
Zero if the joystick is centered, -1.0 if Left, 1.0 if Right or a value inbetween.


<br/>

### `Function FlushJoy( port_mask:Int=0 )`

Flush joystick button states.

<br/>

