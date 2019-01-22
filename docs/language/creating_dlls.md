---
id: creating_dlls
title: Creating DLLs
sidebar_label: Creating DLLs
---

## Introduction

BlitzMax for Win32 supports an additional build mode of `makelib` ([Build Shared Library]
in [MaxIDE]), allowing for the creation of dynamic link libraries (DLLs) from your source,
rather than an application.

## DLL Creation

A DLL is different to a normal application because rather than executing it, the DLL is
loaded and used by another application. In order to do this, Functions need to be made
visible to the application. In BlitzMax, this is done by adding the [Export] property to
every function you want to be visible to applications.

Here's an example of an exported function :
```blitzmaz
Function TheAnswer:Int() Export
    Return 42
End Function
```

On 32-bit Windows, there are two "calling conventions" for functions. A calling
convention describes the different ways the stack is managed - either by the function
itself, or by the caller of the function. Typically, BlitzMax functions are of the `cdecl`
kind, which is, the function manages the stack. However, 32-bit Windows also has what is
known as the `__stdcall` calling convention, which is generally used to call Win32 API functions.

BlitzMax for Windows allows you to create functions of either type, including those
you [Export] in your DLLs. To declare a function with the `__stdcall` calling convention,
you add the `"Win32"` Os property to the function.

Here's an example of the function above, declared with the `"Win32"` property too :
```blitzmax
Function TheAnswer:Int() "Win32" Export
    Return 42
End Function
```

On 64-bit Windows, the `"Win32"` property is essentially a no-op, because all functions
use the `cdecl` calling convention.

### Building

Building a DLL from within [MaxIDE] is simply a case of selecting the appropriate
[App Option], and hitting `Build`.

By default BlitzMax will also generate a module-definition (`.def`) file alongside
your DLL. A module-definition file is a text file containing one or more module statements
that describe various attributes of a DLL.

Generation of `.def` files can be suppressed by passing the `-nodef` option to [bmk].
([MaxIDE] does not currently have an option for suppressing this).


### Requirements

Before the application can start using your DLL, BlitzMax needs to be initialised.
Normally, for a BlitzMax application, this all occurs automatically when your program
starts. However, because of the way DLLs work, the application becomes responsible for
ensuring that BlitzMax is initialised before any other functions are called.

To initialise BlitzMax, the `InitBRL()` function **must** be called first. This will
initialise the Garbage Collector, threading, global variables and memory.

Failure to call `InitBRL()` before calling any of your exported functions will result
in undefined behaviour.

### Considerations

Because BlitzMax is a managed language, that is, it uses a Garbage Collector to manage
variable life times rather than the user having to do it themselves, you need to be aware
that you cannot simply pass BlitzMax Objects into and out the of exported functions of your DLL.

Once an Object leaves your DLL, the Garbage Collector could potentially flag the Object
for collection if it can find no more references to it. Generally you should only pass
data out that you know for sure will not be collected, or external data that was created
by the program itself.

You should also be aware that you also cannot simply create data (for example, with [MemAlloc]),
return it from an exported function, and forget about it. You either need a mechanism to free
it later at some point, or provide a way for the application to free it (via a Function,
perhaps), or you will simply leak the allocated memory.


[Build Shared Library]: ../../tools/maxide/#app-options
[App Option]: ../../tools/maxide/#app-options
[MaxIDE]: ../../tools/maxide
[Export]: ../../api/brl/brl.blitz/#export
[bmk]: ../../tools/bmk
[MemAlloc]: ../../api/brl/brl.blitz/#function-memalloc-byte-ptr-size-size-t
