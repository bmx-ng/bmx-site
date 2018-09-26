---
id: get_started
title: Getting Started
sidebar_label: Getting Started
---

BlitzMax is a strongly-typed, garbage-collected, open-source programming language
with built-in support for advanced 2D graphics, sound, unicode and is ideally suited to
making all kinds of apps and games.

BlitzMax primarily targets the main three desktop platforms - Windows, Linux and macOS -
but also supports building native binaries for Android, iOS, Raspberry Pi and
NX (Switch homebrew).

To get you started, we'll walk you through downloading and installing BlitzMax, introduce you
to MaxIDE, and !.... something something!

## Getting BlitzMax

The first thing to do is to get yourself a copy of BlitzMax for your platform of choice.
Head on over to the [Downloads](/downloads) section.

### Which is the download for me?

For Windows, there are 3 releases available. Each provides a different version of the MinGW
toolchain depending on whether you are targetting 32-bit or 64-bit Windows applications.
If you are not sure, just pick the 32/64 bit release, which allows you to build applications for both.

The Linux and macOS releases rely on the system-provided compiler tools, therefore
you are free to target whichever architecture your toolchain supports.

## Prerequisites

The Windows releases come with everything you need to start making your apps. For other
platforms you may need to install a set of developer tools before you'll be able
to compile your BlitzMax sources. See the relevant section on the left for your
target platform for specific details on what you may need to install.

## Installation

Installing BlitzMax itself is just a case of extracting the downloaded archive. We use
`7zip` on Windows, and `xz` on Linux.

Once that's done, you can launch MaxIDE, the BlitzMax developer environment.

The very first time you start MaxIDE, it will prompt you to generate the documentation.
After that, and assuming you have installed any necessary development tools,
you are all set to start writing your first BlitzMax application.

## Hello World with MaxIDE

We are going to begin our BlitzMax adventures with a traditional `Hello World` example.

First, we need to create a new, empty BlitzMax source (`.bmx`) file. There are several ways
you can do this.
 * Choosing `New` from the File Menu
 * Clicking on the New file icon (the first on the left) on the toolbar.
 * Using the keyboard shortcut, Ctrl-N (or ![](assets/command-symbol.svg)-N on macOS)

Enter the following text into the editor :
```blitzmax
Print "Hello World!"
```

With that done, we're all set to run it now.

Again, there are several ways you can accomplish this :
 * Choosing `Build and Run` from the Program Menu.
 * Clicking on Build and Run icon (the tilted rocket) on the toolbar.
 * Using the keyboard shortcut, Ctrl-R (or ![](assets/command-symbol.svg)-R on macOS)

The `Output` window will appear, and a fair amount of text will spew forth. Don't be alarmed.
On your very first build, BlitzMax needs to compile the core modules. But generally, once
those are built, you'll never need to rebuild those again, and so you'll only usually
see your own source files compiling.

After the successful build and run, the Output window will show something along the
lines of :
```
Building untitled1
[ 97%] Processing:untitled1.bmx
[ 98%] Compiling:untitled1.bmx.gui.debug.win32.x64.c
[100%] Linking:untitled1.debug.exe
Executing:untitled1.debug.exe
Hello World!

Process complete
```
The interesting part in all of that, of course, are the words "Hello World!".

That's it. Now, go and create!

## Further Reading

Check out the `Language Guide` for a breakdown on syntax and language features.

We also have some great tutorials, covering a variety of different topics.
