---
id: conditional_compiling
title: Conditional Compiling
sidebar_label: Conditional Compiling
---

Conditional compiling allows you to turn compiling on or off from within your program depending on the environment
the program is being compiled for.

Conditional compiling works a bit like an [If] statement, but takes the form:

```blitzmax
?Identifier
```

The `?` must appear at the start of a new line, and `Identifier` should be one of the built-in or custom  identifiers.

## Built-in Identifiers

The following is a list of BlitzMax's built-in conditional compiler identifiers:

| Name  | Meaning  |
|---|---|
| Debug  | True if program is being compiled in debug mode.  |
| Threaded  | True if program is being compiled in threaded mode.  |
| Release  | True if program is being compiled in release mode.  |
| Win32  | True if program is being compiled for the Windows operating system.  |
| Win32x86  | True if program is being compiled for 32-bit Windows operating system.  |
| Win64  | True if program is being compiled for 64-bit Windows operating system.  |
| Win32x64  | True if program is being compiled for 64-bit Windows operating system.  |
| MacOS  | True if program is being compiled for the macOS or iOS operating system.  |
| MacOSX86  | True if program is being compiled for an 32-bit x86 macOS or iOS operating system.  |
| MacOSX64  | True if program is being compiled for an 64-bit x64 macOS or iOS operating system.  |
| MacOSarm64  | True if program is being compiled for an Arm64 (silicon) macOS or iOS operating system.  |
| MacOSPPC  | True if program is being compiled for a PowerPC macOS or iOS operating system.  |
| osx  | True if program is being compiled for macOS. |
| osxx86  | True if program is being compiled for a 32-bit x86 macOS. |
| osxppc  | True if program is being compiled for a PowerPC macOS. |
| osxx64  | True if program is being compiled for a 64-bit x64 macOS. |
| osxarm64  | True if program is being compiled for a Arm64 (silicon) macOS. |
| ios  | True if program is being compiled for iOS. |
| iosx86  | True if program is being compiled for 32-bit x86 iOS. |
| iosx64  | True if program is being compiled for 64-bit x64 iOS. |
| iosarmv7  | True if program is being compiled for a ArmV7 iOS device. |
| iosarm64  | True if program is being compiled for an Arm64 iOS device. |
| Linux  | True if program is being compiled for the Linux operating system.  |
| LinuxX86  | True if program is being compiled for 32-bit x86 Linux operating system.  |
| LinuxX64  | True if program is being compiled for 64-bit x64 Linux operating system.  |
| LinuxARM  | True if program is being compiled for Linux operating system running on ARM processors.  |
| android  | True if program is being compiled for android.  |
| androidx86  | True if program is being compiled for 32-bit x86 android. |
| androidx64  | True if program is being compiled for 64-bit x64 android. |
| androidarm  | True if program is being compiled for android running on any ARM processor.  |
| androidarmeabi  | True if program is being compiled for android running on ARMeabi processor.  |
| androidarmeabiv7a  | True if program is being compiled for android running on ARMeabi-v7a processor.  |
| androidarm64v8a  | True if program is being compiled for android running on ARM64-v8a processor.  |
| raspberrypi  | True if program is being compiled for RaspberryPi  |
| raspberrypiARM  | True if program is being compiled for ARM based RaspberryPi  |
| emscripten  | True if program is using emuscripten compiler  |
| emscriptenjs  | True if program is compiled into javascript using emuscripten compiler  |
| X86  | True if program is being compiled for x86-based 32-bit CPU.  |
| X64  | True if program is being compiled for x64-based 64-bit CPU.  |
| PPC  | True if program is being compiled for PowerPC CPU.  |
| arm  | True if program is being compiled for any ARM CPU  |
| armeabi  | True if program is being compiled for ARMeabi CPU  |
| armeabiv7a  | True if program is being compiled for ARMeabi-v7a CPU  |
| arm64v8a  | True if program is being compiled for ARM64-v8a  |
| js  | True if program is being compiled for javascript  |
| armv7  | True if program is being compiled for ARM-v7  |
| arm64  | True if program is being compiled for ARM64  |
| ptr32  | True if program being compiled for systems with 32-bit pointers  |
| ptr64  | True if program being compiled for systems with 64-bit pointers  |
| BigEndian  | True if program is being compiled for a big endian CPU.  |
| LittleEndian  | True if program is being compiled for a little endian CPU.  |
| opengles  | True if program is being compiled for platform that uses OpenGL ES  |
| bmxng  | True if program is being compiled using BlitzMax-NG  |

`Identifier` may also be preceded by [Not] to invert the result.

An `?` on its own always turns compiling on.

## Conditional Expressions

BlitzMax-NG also allows for **conditional expressions** such as `?x64 and raspberrypi`, where several identifiers can be chained together using `and`, `or` and `not`

For example:

```blitzmax
?Debug
    ' Any code here is only compiled in debug mode.
?Not Debug
    ' Any code here is only compiled in release mode.
?Debug and x64
    ' Any code here is only compiled in debug mode and if being compiled for a 64 bit system
?
    ' Code here is always compiled.
```

[If]: ../../api/brl/brl.blitz/#if
[Not]: ../../api/brl/brl.blitz/#not
