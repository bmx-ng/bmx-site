---
id: win32
title: Win32
sidebar_label: Win32
---

## Introduction

BlitzMax for Win32 allows you to build native 32-bit or 64-bit applications for the Windows platform.

## What's in the box?

BlitzMax for Win32 ships with its own copy of the MinGW-w64 compiler,
so in theory, for most applications, you should already have everything you need
to start coding on Windows.

There are currently 3 versions of BlitzMax for Win32 available, each with
slightly different versions of the MinGW-w64 compiler :
* Win32 x86/x64 - Allows you to build applications for x86 (32-bit) and x64 (64-bit) architectures.
* Win32 x64 - Allows you to build applications for 64-bit Windows.
* Win32 x32 - Allows you to build 32-bit applications for Windows. These applications should run on both 32-bit and 64-bit versions of Windows.

Most developers choose the x86/x64 release, as it provides them with most
flexibility, but we provide the other releases for those that are only interested
in producing applications for a single architecture. The single architecture releases
are smaller, if space is a consideration.

## Installation

BlitzMax for Win32 doesn't require installing in any particular location.
Simply unzip the release into a folder on your Windows system, and you should be able to start
using it right away.

However, do note that due to the security of modern versions of Windows, you'll find
it easier to install it in your user folder or a different drive - rather than on `C:` or `Program Files` directly.
Since BlitzMax compiles intermediate files inside the BlitzMax folder hierarchy, it needs
full access (read/write) to its own folders, and that may not be available in places such as
`Program Files`.

Because each BlitzMax folder is a self-contained instance of BlitzMax, you can even use
multiple versions of BlitzMax on the same computer - useful for trying out new releases.

## Using your own MinGW

Legacy versions of BlitzMax for Win32 required you to install MinGW separately and then set up
environment variables in order for BlitzMax to be able to rebuild its modules or use third-party
libraries.

There are currently several options for configuring MinGW with BlitzMax. We
generally recommend using a local copy of MinGW because it is more flexible,
but you are free to configure your system as you like.

### Local MinGW

BlitzMax for Win32 will check 3 local folders within the main BlitzMax
folder for a copy of MinGW, depending on your current compiler settings. These folders are :

* `MinGW32x64` - A version of MinGW-w64 for the creation of 64-bit applications.
* `MinGW32x86` - A version of MinGW-w64 for the creation of 32-bit applications.
* `MinGW32` - Some versions of MinGW32 (like TDM) provide a combined release of the GCC toolchain which allows for the creation of both 32-bit and 64-bit applications. Blitzmax expects a folder of this name to support applications for both architectures.

### System MinGW

If none of the 3 local folders are present, BlitzMax will fallback to the
original configuration,
and test for the environment variable `MINGW`.

The environment variable `MINGW` should contain the location of an installation of
MinGW32, for example `C:\mingw`.

## Using Other Compilers

BlitzMax for Win32 does not currently support compilation using other compilers such
as MSVC or Clang/LLVM.

## Application Settings

BlitzMax for Win32 allows for the customization of GUI application properties, like
the `Product Name`, `App Description` and `Copyright`. These are often used by Windows
for display in Explorer, Task Manager, file dialogs and file details. The application
icon can also be customized without having to rely on external tools.

### Application Settings

BlitzMax for Win32 applies certain default application properties for applications, These
can be overridden by the developer, by providing an application settings file next to the
application. During the build, BlitzMax will process this file and apply the specified
values to the application properties.

The settings file should have the same name as the application, and a `.settings` suffix.
So, for example, if your application is called `MyGame.exe`, the settings file should be
called `MyGame.settings`.

A settings file is structured like a simple .ini file - means "name=value" one per line. Available pairs are for now:
* `app.version.code=1`
* `app.version.name=1.0.0`
* `app.name=BlitzMax Application`
* `app.comments=Comments`
* `app.company=My company`
* `app.description=App description`
* `app.copyright=Copyright text`
* `app.trademarks=All rights reserved`

### Manifest

You can supply your own manifest file for your application. A manifest file provides a way to
set support for specific features of Windows, like theming, DPI awareness, privileges, and
other runtime configuration settings.

Blitzmax for Win32 automatically generates a basic manifest as part of a GUI build, but you may
provide your own version if you need to configure more settings.

The manifest should be named `APPLICATION.exe.manifest`, where APPLICATION is the name of your
compiled executable. So, for example, if your application is `MyGame.exe`, then your manifest
should be called `MyGame.exe.manifest`.
For debug builds, the manifest should also include `debug`. For example, `MyGame.debug.exe.manifest`.

### Custom Icon

You can also provide a custom application icon. This should be in the standard Windows `.ico`
icon format. The icon file should have the same name as your application. So, for example, if
your application is called `MyGame.exe`, the icon file should be called `MyGame.ico`.

If you don't provide an icon file, BlitzMax will include the default icon for all BlitzMax applications.

## Building DLLs

The build mode, `makelibs` (See also `Build Shared Library` in [App Options]), allows you to build a dynamic link library (DLL) from your
sources instead of an application. A DLL allows 3rd party developers to access your code
without them requiring BlitzMax itself.

This is done by exporting certain functions that you'd like them to use.

For more detailed information about creating DLLs with BlitzMax, see [Creating DLLS] in
the language section of the documentation.

[Creating DLLS]: ../../language/creating_dlls
[App Options]: ../../tools/maxide/#app-options
