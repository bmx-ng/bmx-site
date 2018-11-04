---
id: maxide
title: MaxIDE
sidebar_label: MaxIDE
---

MaxIDE is the code editor that ships with BlitzMax.

IDE stands for Integrated Development Environment, and while MaxIDE may not be quite the
IDE you might be used to using if you've spent time with other programming languages (like Java or C#), it
generally is adequate for day-to-day coding in BlitzMax.

![Using MaxIDE](assets/maxide/maxide.png)

All the various options for building your applications are available via the drop-down
menus, with a set of common actions also present on the toolbar strip above the main editing area.

The right-hand navigator panel provides access to the help, your projects, the structure of the currently
edited BlitzMax source, and the debug stack.

## Editing

To start editing, you can either open an existing source file, or create a new one.

To create new file, select **New** (Ctrl-N or &#8984;-N) from either the Menu or the Toolbar.
This creates a new, Untitled, editor for you.

When it's time to save your hard work, you can select **Save** (Ctrl-S or &#8984;-S)
from either the Menu or the Toolbar. For Untitled files, you will also be prompted to specify a location and a new name
for your source.

Untitled files are, by default, Blitzmax (.bmx) source files. Before you start editing, if you plan on using the
source file with a different extension and you have syntax-highlighting enabled, it's recommended that you save
it first with the new filename, then **Close** (Ctrl-W or &#8984;-W)
and **Open** (Ctrl-O or &#8984;-O) it again - otherwise MaxIDE will
apply formatting to any BlitzMax keywords you might use.

### Quick Menu

If you click on the right mouse button (or Ctrl-Click the mouse on macOS) whilst editing, the Quick Menu will pop up...

| Option | Description |
|---|---|
| Quick Help | Provides a brief summary about the keyword currently under the cursor.<br>Choosing this again on the same word will open up the Help page for more details. |
| Cut | Cuts the current selection into the clipboard.  |
| Copy | Copies the current selection into the clipboard. |
| Paste | Pastes the contents of the clipboard to the current cursor location. |
|  |  |
| Select All | Selects the whole text of the current file. |
|  |  |
| Block Indent | Block indents the current line or lines. |
| Block Outdent | Block outdents the current line or lines. |
|  |  |
| Find | Opens the **Find** dialog. |
| Find Next | Finds the next matching text from the current cursor location. |
| Replace | Opens the **Find and Replace** dialog. |
| Goto Line | Opens the **Goto Line** dialog. |

## Building and Running

There are two primary build modes - Debug and Release.
With a Debug build, BlitzMax creates extra support and information about your application that allows MaxIDE
to control the execution of the application and examine the contents of variables during the run.
In Release mode, all this extra information is removed, resulting in smaller and faster application.

Let's create a simple application and take a quick look at working in MaxIDE.

First, select **New** from the **[File Menu](#file-menu)** or toolbar. This will create a new, empty source file for you to work with.

Enter the following text :
```blitzmax
'
' My first BlitzMax program
'
Print "Hello World!"
```

Now, it's time to build and run: Select **Build And Run** from the **[Program Menu](#program-menu)**
or click on the powered Rocket icon in the toolbar.

The view will switch from your source file to the Output tab, and you should see the following output:

```
Building untitled1
[ 23%] Processing:untitled1.bmx
[ 86%] Compiling:untitled1.bmx.console.debug.win32.x64.c
[100%] Linking:untitled1.debug.exe
Executing:untitled1.debug.exe
Hello World!

Process complete
```

> The very first time you build for a particular architecture, you may see a lot of compiler output
> before the build completes. This is because BlitzMax is also having to build the required modules
> for your application too. On subsequent builds, it won't need to do this, and the output, and build time,
> will be far shorter.

## Errors

When BlitzMax encounters an error, a dialog window will uaually appear with a brief summary of what occurred.

For example, let's create a new program with an error, and attempt to build it :
```blitzmax
'
' My first bug!
'
rint "Hello World!"	'oops! Forgot a 'p'!
```

This program has an error in it - there is no such command as `rint` so attempting to build this program
will produce the following error:

![Error dialog](assets/maxide/error_dialog.png)

When you close the error dialog and return to the source code window, the cursor will be placed at the line
containing the error, allowing you to fix it.

This type of error is known as a compile time error, because the bug was detected by the compiler before
you actually ran the program.

## Debugging

The compiler, however, cannot catch all possible errors - some errors are not apparent until your program is run.
These kinds of errors are known as runtime errors.

Here's an example of a program with a runtime error in it:
```blitzmax
'
' My first runtime bug!
'
Local an_array[10]

For Local k=0 To 10
	Print an_array[k]
Next
```

If you run this example, you should see the following error message:
![Runtime error dialog](assets/maxide/runtime_error.png)

Note how the pane on the right has also switched to the **Debug** pane.
This means your program is in **debug mode**, and by navigating through the debug pane you can inspect
your programs variables.

In this particular example, on examining the variable contents, you'll find that the
variable `k` has the value `10`. In BlitzMax, arrays start counting cells from `0` rather than `1`, so
the last entry of an array of size `10`, is actually at index `9`.

### Stepping Through Your Code

MaxIDE also allows you to **step** through the statemnts of your running application in Debug mode.
To do this, you need to add a special command in your source called `DebugStop`.

Here's an example of a program ready to be debugged:
```blitzmax
'
' My first debugging session
'
Local total = 0

DebugStop
For Local k=0 Until 10
	total :+ (k * k)
Next
```
Note the line with the `DebugStop` command.
When you run the program in Debug mode, execution will stop at this command, the current line will be highlighted
in the editor, the Debug pane on the right will open, and MaxIDE will wait for you to interact with it.

You have several options at this point. Clicking on the green **Continue** icon in the toolbar will cause
MaxIDE to resume running the program.

Using **Step Over** will execute the next statement. If the statement is a function call, for example, stepping
over will run the code in the function and the next line after returning from the function
will be highlighted.

If you use **Step In** on a function call, the first line *inside* the function will be highlighted, and you
can then step through each line of the function.

Whilst stepping, the Debug panel will show the values of all of the variables in the current scope, as well as those variables
in scope down the call stack. You can example the call stack by openining the individual listed functions in the
Debug pane.

## Toolbar

![Toolbar buttons](assets/maxide/maxide_toolbar.png)

| Button | Action | Description |
|---|---|---|
| ![](assets/maxide/toolbar/New.png) | New | Creates a new Untitled BlitzMax (.bmx) source file. |
| ![](assets/maxide/toolbar/Open.png) | Open | Opens an existing file. |
| ![](assets/maxide/toolbar/Close.png) | Close | Closes the current editor tab. |
| ![](assets/maxide/toolbar/Save.png) | Save | Saves the current file. |
|  |  |  |
| ![](assets/maxide/toolbar/Cut.png) | Cut | Cuts the current selection into the clipboard. |
| ![](assets/maxide/toolbar/Copy.png) | Copy | Copies the current selection into the clipboard. |
| ![](assets/maxide/toolbar/Paste.png) | Paste | Pastes the contents of the clipboard to the current cursor location. |
| ![](assets/maxide/toolbar/Find.png) | Find | Opens the **Find** dialog. |
|  |  |  |
| ![](assets/maxide/toolbar/Build.png) | Build | Builds the current source file (or locked build file). |
| ![](assets/maxide/toolbar/Build-Run.png) / ![](assets/maxide/toolbar/Go.png) | Build & Run / Continue | Builds and runs the current source file (or locked build file).<br/>In debug mode while stopped, continues the program from the next statement.|
| ![](assets/maxide/toolbar/Step.png) | Step | In debug mode, steps over the next program statement. |
| ![](assets/maxide/toolbar/Step-In.png) | Step In | In debug mode, steps into the next program statement. |
| ![](assets/maxide/toolbar/Step-Out.png) | Step Out | In debug mode, steps out of the current block or function. |
| ![](assets/maxide/toolbar/Stop.png) | Terminate | Stops the current build or program run. |
|  |  |  |
| ![](assets/maxide/toolbar/Home.png) | Home | Opens the documentation Home page. |
| ![](assets/maxide/toolbar/Back.png) | Back | Navigates to the previous documenation page. |
| ![](assets/maxide/toolbar/Forward.png) | Forward | Navigates to the next documentation page. |

## The Menus

### File Menu

| Menu Option | Keyboard Shortcut | Description |
|---|---|---|
| New | Ctrl-N | Creates a new source file. |
| Open... | Ctrl-O | Opens an existing source file. |
| Open Recent |  | Reopens a recently used source file. |
| Close Tab | Ctrl-W | Closes current source file. |
| Close All Tabs | Ctrl-Shift-W | Closes all source files. |
| Close Other Tabs | Alt-Ctrl-W | Closes all source files except the current. |
|  |  |  |
| Save | Ctrl-S | Saves current source file. |
| Save As | Ctrl-Shift-S | Saves current source file under a different name. |
| Save All |  | Saves all open source files. |
|  |  |  |
| Next Tab | Alt-Right | Switches to next open source file. |
| Previous Tab | Alt-Left | Switches to previous open source file. |
|  |  |  |
| IDE Options |  | Opens the IDE options panel. |
| Project Manager |  | Opens the project manager panel. |
|  |  |  |
| Print | Ctrl-P | Prints current source file. |
|  |  |  |
| Exit |  | Closes down and exits the IDE. |

### Edit Menu

| Menu Option | Keyboard Shortcut | Description |
|---|---|---|
| Undo | Ctrl-Z | Undo most recent source file edit. |
| Redo | Ctrl-Y | Redo most recently undone source file edit. |
|  |  |  |
| Cut | Ctrl-X | Cuts selected text from current source file. |
| Copy | Ctrl-C | Copies selected text from current source file. |
| Paste | Ctrl-V | Pastes the contents of the clipboard to the cursor location in the current source file. |
|  |  |  |
| Select All | Ctrl-A | Selects all text in current source file. |
|  |  |  |
| Block Indent | Ctrl-[ | Indents the currently highlighted block. |
| Block Outdent | Ctrl-] | Unindents the currently highlighted block. |
|  |  |  |
| Find... | Ctrl-F | Finds text in the current source file. |
| Find Next | F3 | Finds the next occurance of text. |
| Replace | Ctrl-H | Finds and replaces text. |
| Goto Line... | Ctrl-G | Go to a line in the current source file. |
|  |  |  |
| Find in Files | Ctrl-Shift-F | Search many files for an occurance of text. |

### Program Menu

| Menu Option | Keyboard Shortcut | Description |
|---|---|---|
| Build |  | Builds the current source file (or locked build file). |
| Build and Run |  | Builds and runs the current source file (or locked build file). |
| Command Line |  | Specifies command line options for BlitzMax apps. |
|  |  |  |
| Step |  | In debug mode, steps over the next program statement. |
| Step In |  | In debug mode, steps into the next program statement. |
| Step Out |  | In debug mode, steps out of the current block or function. |
| Terminate |  | Stops current build or program run. |
|  |  |  |
| [Build Options](#build-options) |  | Opens the Build Options sub-menu. |
| [App Options](#app-options) |  | Opens the App Options sub-menu. |
| [Platform](#platform) |  | Opens the Platform sub-menu. |
| [Architecture](#architecture) |  | Opens the Architecture sub-menu. |
| [App Stub](#app-stub) |  | Opens the App Stub sub-menu. |
| [Developer Options](#developer-options) |  | Opens the Developer Options sub-menu. |
|  |  |  |
| Lock Build File |  | Locks the current source file for future build and build and run operations. <br/>This can be useful if you have a multi-file project and are editing several source files but only ever rebuilding one of them. |
| Unlock Build File |  | Unlocks the currently locked build file. |
|  |  |  |
| Build Modules |  | Builds any recently modified modules. |
| Rebuild All Modules |  | Rebuilds all modules from scratch. |
| Rebuild Documentation |  | Rebuilds module documentation. |

#### Build Options

| Menu Option | Description |
|---|---|
| Quick Build | Enable or disable quick builds. The quick build feature causes the compiler to only recompile modified files. |
| Debug Build | Enable or disable debug builds. Debug builds performing extra error checking at runtime, at the cost of some execution speed. |
| Quick Scan | Don't scan modules for changes when building apps. This can improve compile times on some systems. |
| Overload Warnings | Produces warnings about potential conversion problems with function arguments.<br/>When disabled, the build will fail instead.<br/>It is generally encouraged that you choose your own casting, in order to prevent loss of precision/data. |

#### App Options

| Menu Option | Description |
|---|---|
| Build Console App | Instructs BlitzMax to build a lightweight, text-only application. |
| Build GUI App | Instructs BlitzMax to build a 'GUI' application. |
| Build Shared Library | Instructs BlitzMax to build a DLL.  |

#### Platform

Contains plaftorm / operating system specific build options.

| Menu Option | Description |
|---|---|
| Win32 | Builds applications for Windows. |
| macOS | Builds applications for OS X. (available on macOS only) |
| iOS | Builds applications for iOS devices. (available on macOS only) |
| Linux | Builds applications for Linux. |
| Raspberry Pi | Builds applications for Raspberry Pi. |
| Android | Builds applications for Android devices. |
| NX | Builds applications for NX (Switch Homebrew). |

#### Architecture

Contains architecture / processor specific build options. For example, you can use these options
to build an application individually for 32-bit and 64-bit versions of Windows.

| Menu Option | Description |
|---|---|
| x86 | Creates x86 compatible application binaries. |
| x64 | Creates x64 compatible application binaries. |
| PPC | Creates PPC compatible application binaries. |
| Arm | Creates Arm compatible application binaries. (Raspberry Pi |
| ARMeabi v5 | Creates x86 compatible application binaries. (Android) |
| ARMeabi v7a | Creates x86 compatible application binaries. (Android) |
| ARM64 v8a | Creates x86 compatible application binaries. (Android) |
| ARMv7 | Creates x86 compatible application binaries. (iOS) |
| ARM64 | Creates x86 compatible application binaries. (iOS / NX) |

#### App Stub

| Menu Option | Description |
|---|---|
| brl.appstub | Uses the built-in Appstub module. |

#### Developer Options

| Menu Option | Description |
|---|---|
| Verbose Build | Outputs more information to console when building/compiling |
| GDB Debug Generation | Generates GDB compatible debugging code, allowing BlitzMax source-level stepping in GDB. |

### Help Menu

| Menu Option | Keyboard Shortcut | Description |
|---|---|---|
| Home |  | Goes to the help home page. |
| Back |  | Returns to previous help page. |
| Forward |  | Advances to the next help page. |
| Quick Help | F1 | Provides a brief summary about the keyword currently under the cursor.<br>Choosing this again on the same word will open up the Help page for more details. |
| About MaxIDE |  | Shows information about BlitzMax and the IDE. |

## Options

There are several options you can configure in MaxIDE, like fonts, colours and highlighting.

### General Options
![MaxIDE options](assets/maxide/maxide_options_options.png)

| Option | Description |
|---|---|
| Show toolbar | When disabled, the toolbar strip is hidden. |
| Open Files at Startup | Whether to re-open files that were open when MaxIDE was last closed. |
| Auto Capitalize | Causes keywords in the source file to match the capitalization of its declaration.<br/>For example, if you type `strict`, this option will change it to `Strict`.|
| Syntax Highlighting | Whether to apply colour and styling to BlitzMax (.bmx) source files. |
| Enable .bmx Bracket Matching |  |
| Auto Backup | When enabled, a .bak copy of the file is generated when the source file is opened in MaxIDE. |
| Auto Indent | When hitting return in the editor, the new line will start indented to the same level as the previous line.|
| Hide Output When Process Complete | Hides the Output View once the program has finished. |
| Use External Help Browser | Causes documentation to be opened in the default browser, rather than switching to the Help tab in MaxIDE. |
| Use OS Specific Shortcut Keys |  |
| Sort Node in Code View | Applies ordering to the list of types and functions in the Code View. |

### Editor Options

These are options specific to the editor.
An example of the chosen styling appears at the bottom of the dialog.

![](assets/maxide/maxide_options_editor.png)

| Option | Description |
|---|---|
| Background | The background colour for the editor. |
| Font | The editor font. |
| Tab Size | The width, in characters, used for displaying a Tab character. |
| Plain Text | The colour and style of plain text. |
| Remarks | The colour and style of comments, both Rem blocks and single-line `'` comments. |
| Strings | The colour and style of quoted strings. |
| Keywords | The colour and style of BlitzMax keywords. |
| Numbers | The colour and style of numbers. |
| Matchings | The colour and style for bracket matchings. |
| Caret | Where supported, you can change the colour and width of the editor caret. |

### Tools Options

Provides some configuration options for the Output View and navbar.

![Tool window customising](assets/maxide/maxide_options_tools.png)

| Option | Description |
|---|---|
| Output | Change the foreground and background colours, as well as the font for the Output View. |
| Navbar | Change the foreground and background colours, as well as the font for the navbar tree views. |

### App Stubs Management

Allows you to configure the available selection of app stub modules. Entries here appear in the **App Stub** Program menu.

![App stubs management](assets/maxide/maxide_options_appstubs.png)

Add a new entry by entering its name in the text field, and then clicking **Add**.

Entries can be removed by selecting them from the list, and clicking **Remove**.

## Project Manager

The program manager provides a way to add your own Project folders to the **Projects** tree in the navbar.

Once a Project folder is added, the sources can be opened directly from the navbar by double-clicking on them.

![The Project Manager](assets/maxide/maxide_project_manager.png)

