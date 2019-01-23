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
If ReturnType is omitted, the function defaults to returning an [Int].

`Parameters` is a comma separated list of parameters for the function. The syntax
of each parameter is similar to a variable declaration: `Identifier : Type`.
Function parameters may be used inside a function in the same way as local
variables.

The [Return] statement is used to return a value from a function.

Here is an example of a simple function that adds 2 integers and returns their sum :

```blitzmax
Function AddInts:Int( x:Int, y:Int )
	Return x + y
End Function
```

This function can then be called by other code :

```blitzmax
Print AddInts( 10, 20 )  ' prints 30
```

Function parameters can be assigned constant *default values* using syntax similar
to initializing a variable: `Identifier : Type = ConstantExpression`.

Default parameters can then be optionally omitted when the function is called :

```blitzmax
Function IncInt:Int( n:Int, p:Int = 1 )
	Return n + p
End Function

Print IncInt( 1 )   ' Prints 2
Print IncInt( 1, 3 ) ' Prints 4
```

## Function Properties (Advanced)

Different properties can be applied to functions to help when interacting with 3rd party
applications and APIs. For most applications, you won't need to decorate your functions with these.

### Calling Convention

A calling convention determines how the internal stack is managed when a function is called. Generally,
this is not something you have to worry about.

BlitzMax functions typically use the `cdecl` calling convention, which is standard across
operating systems. However, on 32-bit Windows, the Win32 API uses what is called the `__stdcall`
calling convention. Whenever you need to call a Win32 API function, or if you are creating a function
to use as a callback for the Win32 API, you need to tell BlitzMax that the function should use
the correct calling convention.

To do this, you add the `"Win32"` property to the function declaration :

```blitzmax
Function AddInts:Int( x:Int, y:Int ) "Win32"
	Return x + y
End Function
```

This is not required if you are targeting 64-bit Windows, and it simply ignored when you compile
for that architecture.

If your function should be compatible with other platforms, whilst requiring the `__stdcall`
calling convention on 32-bit Windows, you can use the `"Os"` property instead of `"Win32"`. This
will automatically set the function to use `__stdcall` on 32-bit Windows, and `cdecl` everywhere
else.

### Exporting

When creating BlitzMax shared libraries (DLLs), a function can be declared for export by applying
the [Export] property to it. An exported function will then be made visible in the shared library
so that it can be called by the application.

```blitzmax
Function AddInts:Int( x:Int, y:Int ) Export
	Return x + y
End Function
```

See [Creating DLLs] for more information.

[Return]: ../../api/brl/brl.blitz/#return
[Export]: ../../api/brl/brl.blitz/#export
[Creating DLLs]: ../../language/creating_dlls
