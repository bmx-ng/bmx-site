---
id: tjoystickdriver
title: TJoystickDriver
sidebar_label: TJoystickDriver
---

Abstract base type for joystick drivers.



To create a new joystick driver, you should extend [TJoystickDriver](../../../pub/pub.joystick/tjoystickdriver) and implement the [GetName](../../../pub/pub.joystick/tjoystickdriver/#method-getname-string-abstract) method.

To install your joystick driver, simply create an instance of it using [New](../../../pub/pub.joystick/tjoystickdriver/#method-new).


## Constructors

### `Method New()`

Creates a new instance of a joystick driver.

<br/>

## Methods

### `Method GetName:String() Abstract`

Returns the name of the driver.

<br/>

