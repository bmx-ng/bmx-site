---
id: functions
title: Functions
sidebar_label: Functions
---

A function is a self contained block of code that can be called from multiple
points in your program.

Functions are declared using the syntax:

```blitzmax
Function Identifier:ReturnType(Parameters)
    Function statements...
End Function
```
If ReturnType is omitted, the function defaults to returning an `Int`.

%Parameters is a comma separated list of parameters for the function. The syntax
of each parameter is similar to a variable declaration: ``Identifier : Type``.
Function parameters may be used inside a function in the same way as local
variables.

The `Return` statement is used to return a value from a function.

Here is an example of a simple function that adds 2 integers and returns their sum:

<TODO>
