---
id: tjoystickdriver
title: TJoystickDriver
sidebar_label: TJoystickDriver
---

Abstract base type for joystick drivers.



To create a new joystick driver, you should extend [TJoystickDriver](../../../pub/pub.joystick/tjoystickdriver) and implement the [GetName](../../../sdl/sdl.sdlsensor/tsdlsensor/#method-getname-string) method.

To install your joystick driver, simply create an instance of it using [New](../../../brl/brl.blitz/#new).


