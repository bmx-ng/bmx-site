---
id: brl.system
title: BRL.System
sidebar_label: BRL.System
---



The system module's primary function is to provide synchronization with the operating system.

This achieved through the [PollSystem](../../brl/brl.system/#function-pollsystem) and [WaitSystem](../../brl/brl.system/#function-waitsystem) commands. However, you don't usually 
have to call these commands yourself as other BlitzMax commands will call them when necessary.

In addition, the system module also provides commands for checking the date and time, for moving
the mouse pointer and for generating simple system requesters.


## Functions

### `Function InitSystemDriver(driver:TSystemDriver)`

Initialises the BlitzMax system driver.

There can only be one system driver initialised. A second call to this function will result in an exception.


<br/>

### `Function SystemDriver:TSystemDriver()`

Returns the BlitzMax system driver, or throws an exception if [InitSystemDriver](../../brl/brl.system/#function-initsystemdriverdrivertsystemdriver)() hasn't been called with one.

<br/>

### `Function PollSystem()`

Poll operating system


[PollSystem](../../brl/brl.system/#function-pollsystem) returns control back to the operating system, allowing such
events as keystrokes and gadget actions to be processed. Control is then
returned back to your program.

If [PollSystem](../../brl/brl.system/#function-pollsystem) encounters a key, mouse or app suspend/resume/terminate
event, an equivalent [TEvent](../../brl/brl.event/tevent) object event will be generated which may be intercepted using
the [EmitEventHook](../../brl/brl.event/#global-emiteventhookintallochookid) hook.


<br/>

### `Function WaitSystem()`

Wait for operating system


[WaitSystem](../../brl/brl.system/#function-waitsystem) returns control back to the operating system, waiting until
an event such as a keystroke or gadget action occurs.

Note that [WaitSystem](../../brl/brl.system/#function-waitsystem) may wait indefinitely if there is no possibility
of any events occuring, so use with caution.

If [WaitSystem](../../brl/brl.system/#function-waitsystem) encounters a key, mouse or app suspend/resume/terminate
event, an equivalent [TEvent](../../brl/brl.event/tevent) object will be generated which may be intercepted using
the [EmitEventHook](../../brl/brl.event/#global-emiteventhookintallochookid) hook.


<br/>

### `Function MoveMouse( x,y )`

Move mouse pointer


[MoveMouse](../../brl/brl.system/#function-movemouse-xy-) positions the mouse cursor at a specific location within
the current window or graphics display.


<br/>

### `Function ShowMouse()`

Make the mouse pointer visible

<br/>

### `Function HideMouse()`

Make the mouse pointer invisible

<br/>

### `Function Notify( text:String,serious=False )`

Notify user


[Notify](../../brl/brl.system/#function-notify-textstringseriousfalse-) activates a simple user interface element informing the user of an event.
The optional <b>serious</b> flag can be used to indicate a 'critical' event.

Note that a user interface may not be available when in graphics mode on some platforms.


#### Example
```blitzmax
' notify.bmx

Notify "Hello World"
```
<br/>

### `Function Confirm( text:String,serious=False )`

Request user confirmation.


[Confirm](../../brl/brl.system/#function-confirm-textstringseriousfalse-) activates a simple user interface element requesting the user to select between
YES and NO options. If the user selects YES, then [Confirm](../../brl/brl.system/#function-confirm-textstringseriousfalse-) returns True. Otherwise,
False is returned.

Note that a user interface may not be available when in graphics mode on some platforms.


#### Returns
True or False depending on the user's selection


#### Example
```blitzmax
' confirm.bmx

result=Confirm("Are you sure?")

print result
```
<br/>

### `Function Proceed( text:String,serious=False )`

Request user confirmation or cancellation.


[Proceed](../../brl/brl.system/#function-proceed-textstringseriousfalse-) activates a simple user interface element requesting the user to select between
YES, NO and CANCEL options. If the user selects YES, then [Proceed](../../brl/brl.system/#function-proceed-textstringseriousfalse-) return 1. If the user
selects NO, then [Proceed](../../brl/brl.system/#function-proceed-textstringseriousfalse-) returns 0. Otherwise, [Proceed](../../brl/brl.system/#function-proceed-textstringseriousfalse-) returns -1.

Note that a user interface may not be available when in graphics mode on some platforms.


#### Returns
1, 0 or -1 depending on the user's selection


#### Example
```blitzmax
' proceed.bmx

result=Proceed("Are you sure you want to continue?")

print result
```
<br/>

### `Function RequestFile:String( text:String,extensions:String="",save_flag=False,initial_path:String="" )`

Display system file requester.


<b>text</b> is used as the title of the file requester.

The optional <b>extensions</b> string can either be a comma separated list of
file extensions or as in the following example groups of extensions
that begin with a "group:" and separated by a semicolon.
<b>save_flag</b> can be True to create a save-style requester, or False to create a load-style requester.

<b>initial_path</b> is the initial path for the file requester.

Note that a user interface may not be available when in graphics mode on some platforms.


#### Returns
The path of the selected file or an empty string if the operation was cancelled.


#### Example
```blitzmax
' requestfile.bmx

filter:String="Image Files:png,jpg,bmp;Text Files:txt;All Files:*"
filename:String=RequestFile( "Select graphic file to open",filter )

Print filename
```
<br/>

### `Function RequestDir:String( text:String,initial_path:String="" )`

Display system folder requester.


<b>text</b> is used as the title of the file requester.

<b>initial_path</b> is the initial path for the folder requester.

Note that a user interface may not be available when in graphics mode on some platforms.


#### Returns
The path of the selected folder or an empty string if the operation was cancelled.


#### Example
```blitzmax
' requestdir.bmx

path:String=RequestDir("Select a Folder",CurrentDir())

Print "directory selected was "+path
```
<br/>

### `Function OpenURL( url:String )`

Opens a URL with the system's default web browser.

Note that a user interface may not be available when in graphics mode on some platforms.


<br/>

### `Function DesktopWidth(display:Int = 0)`

Get desktop width

#### Returns
Width of the desktop, in pixels


<br/>

### `Function DesktopHeight(display:Int = 0)`

Get desktop height

#### Returns
Height of the desktop, in pixels


<br/>

### `Function DesktopDepth(display:Int = 0)`

Get desktop depth


The depth of the desktop is the number of bits per pixel.

Note that on some platforms this function may return 0 if the desktop depth cannot be determined.


#### Returns
Bits per pixel depth of the desktop


<br/>

### `Function DesktopHertz(display:Int = 0)`

Get desktop refresh rate


Note that on some platforms this function may return 0 if the desktop refresh rate cannot be determined.


#### Returns
Refresh rate, in cycles per second, of the desktop


<br/>

