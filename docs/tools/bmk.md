---
id: bmk
title: BlitzMax Make (bmk)
sidebar_label: BlitzMax Make (bmk)
---

`bmk` is used to build BlitzMax applications and modules. It scans source
files for imports and build options !TODO!

## Command line syntax

	bmk <operation> [options] source

(Note that you will need `./bmk` on *nix platforms, if you want to run bmk from the `bin` directory.)

	
### Operations


#### `makeapp`

Builds an application from a single root source file.

#### `makemods`

Builds a set of modules.

#### `makelib`

On Win32, builds a dynamic linked library (DLL) from the source file.

### Options



#### `-a`

Recompiles all source/modules regardless of timestamp. By default, only those
modified since the last build are recompiled.

#### `-b <custom appstub module>`

Builds an app using a custom appstub (The default is brl.appstub).

This can be useful when you want more control over low-level application state and the debugger.

#### `-d`

Builds a debug version. (This is the default for makeapp)

#### `-g <architecture>`

Compiles to the specified architecture. (the default is the native for the current binary -
For example, it will be x86 for an x86-built bmk)

Options vary depending on the current OS/architecture/installed toolchain and version of [`bcc`](bcc).
 * MacOS : `x86`, `x64`
 * Win32 : `x86`, `x64`
 * Linux : `x86`, `x64`, `arm`, `arm64`
 * iOS : `x86`, `x64` (simulator), `armv7`, `arm64`
 * Android : `x86`, `x64`, `arm`, `armeabi`, `armeabiv7a`, `arm64v8a`
 * RaspberryPi : `arm`, `arm64`
 * NX : `arm64`

#### `-gdb`

Generates line mappings suitable for GDB debugging.

Backtrace (etc.) will show .bmx relative source lines rather than that of the generated code.

#### `-h`

Builds multithreaded version. (By default, the single threaded version is built.)

#### `-i`

Creates a Universal build for supported platforms. !TODO!

#### `-l <target platform>`

Cross-compiles to the specific target platform.

Valid targets are `win32`, `linux`, `macos`, `ios`, `android`, `raspberrypi` and `nx`. !TODO!

#### `-musl`

Enables musl libc compatibility. (Linux NG only)

#### `-nostrictupgrade`

Don't upgrade strict method void return types, if required. (NG only)

If a Strict sub type overrides the method of a SuperStrict type and the return
type is void, don't upgrade the return type to void (i.e. none), and default it to Int.

#### `-o <output file>`

Specifies the output file. (makeapp only)

By default, the output file is placed into the same directory as the root source file.

#### `-q`

Quiet build.

#### `-quick`

Quick build.

Does not scan modules for changes. May result in quicker build times on some systems.

The default behaviour is to scan and build all requirements for the application, including modules.

#### `-r`

Builds a release version.

#### `-standalone`

Generate but do not compile into binary form.

Useful for creating ready-to-build source for a different platform/architecture.

#### `-static`

Statically link binary. (Linux NG only)

#### `-t <app type>`

Specifies the application type. (makeapp only)

Should be either `console` or `gui`.

The default is `console`.
	
#### `-v`

Verbose (noisy) build.

#### `-w`

Warns about function argument casting issues rather than error. (NG only)

With this warning enabled you may have problems using method overloading.

#### `-x`

Executes built application. (makeapp only)
