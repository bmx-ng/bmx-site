---
id: constants
title: Constants
sidebar_label: Constants
---

Constants can be used to store values that don't change during the execution of your program.

Constants must be declared in your program before use with the [Const] command.
Declaring a constant means defining a name, type and initial value for it.

The general syntax for declaring a constant is:

```blitzmax
Const Identifier : Type = ConstantExpression
```
For example:

```blitzmax
Const STARTUP_SIZE = 1000
Const SCREEN_WIDTH = 640, SCREEN_HEIGHT = 480
Const SCREEN_AREA = SCREEN_WIDTH * SCREEN_HEIGHT
Const SCALE_FACTOR:Float = 1.5
Const DEFAULT_TITLE:String = "BlitzMax"
```
Multiple constants may be declared per [Const] statement using the comma separator.
In [Strict] mode, if no type is provided for a constant, the constant defaults to being of type [Int].

The initial value for a constant may be an expression, but the expression must itself be constant -
it may only use other constants or literals and may not use any variables.

[Const]: ../../api/brl/brl.blitz/#const
[Int]: ../../api/brl/brl.blitz/#int
[Strict]: ../../api/brl/brl.blitz/#strict
