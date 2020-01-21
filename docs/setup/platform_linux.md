---
id: linux
title: Linux
sidebar_label: Linux
---

## Introduction

BlitzMax for Linux allows you to build native 32-bit or 64-bit applications for Linux based distributions.

## What's in the box?

BlitzMax for Linux comes with all basic modules to create your stunning applications.
It does not ship with a C compiler so you are required to install the needed build tools on your own (see section [Dependencies]).

## Installation

BlitzMax for Linux doesn't require installation in a particular location.
Simply unzip the release into a directory of your choice (so ex. `~/BlitzMaxNG`) , and you should be able to start
using it right away.

BlitzMax is concepted to behave portable, so it stores and produces
files in the install directory and in the compiled project's directory. Means it happily runs from an USB stick.

Because each BlitzMax directory is a self-contained instance of BlitzMax, you can even use
multiple versions of BlitzMax on the same computer - useful for trying out new releases.

### Dependencies

As stated BlitzMax for Linux does not come with the build tools to generate binaries out of the C code it transpiles.

To do so and to enable building certain used libraries the following dependencies need to be satisfied:
* libglu1-mesa-dev
* libasound2-dev
* libfreetype6-dev
* libxpm-dev
* libxft-dev
* libxxf86vm-dev
* libpulse-dev
* libopenal-dev
* libwebkitgtk-dev
* libaudio-dev
* libwebkit2gtk-4.0-dev
* libgtk-3-dev


On a clean/new system, the following command should get a 64-bit Ubuntu-based Linux configured to build and run most BlitzMax applications as 64-bit applications:
```
sudo apt install g++ libglu1-mesa-dev libasound2-dev libfreetype6-dev libxpm-dev libxft-dev libxxf86vm-dev libpulse-dev libopenal-dev libwebkitgtk-dev libaudio-dev libwebkit2gtk-4.0-dev libgtk-3-dev
```

## Using Other Compilers

BlitzMax for Linux does not currently support compilation using other compilers such
as Clang/LLVM.

## Building DLLs

The build mode, `makelibs` (See also `Build Shared Library` in [App Options]), allows you to build a shared object (so) from your
sources instead of an application. A shared object file allows 3rd party developers to access your code
without them requiring BlitzMax itself.

This is done by exporting certain functions that you'd like them to use.

For more detailed information about creating shared objects (or DLL in Windows terms) with BlitzMax, see [Creating DLLS] in
the language section of the documentation.

[Dependencies]: #dependencies
[Creating DLLS]: ../../language/creating_dlls
[MaxIDE]: ../../tools/maxide
[App Options]: ../../tools/maxide/#app-options
