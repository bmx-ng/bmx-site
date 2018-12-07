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

Returns the BlitzMax system driver, or throws an exception if [InitSystemDriver](../../brl/brl.system/#function-initsystemdriver-driver-tsystemdriver)() hasn't been called with one.

<br/>

### `Function PollSystem()`

Poll operating system


[PollSystem](../../brl/brl.system/#function-pollsystem) returns control back to the operating system, allowing such
events as keystrokes and gadget actions to be processed. Control is then
returned back to your program.

If [PollSystem](../../brl/brl.system/#function-pollsystem) encounters a key, mouse or app suspend/resume/terminate
event, an equivalent [TEvent](../../brl/brl.event/tevent) object event will be generated which may be intercepted using
the [EmitEventHook](../../brl/brl.event/#global-emiteventhook-int-allochookid) hook.


<br/>

### `Function WaitSystem()`

Wait for operating system


[WaitSystem](../../brl/brl.system/#function-waitsystem) returns control back to the operating system, waiting until
an event such as a keystroke or gadget action occurs.

Note that [WaitSystem](../../brl/brl.system/#function-waitsystem) may wait indefinitely if there is no possibility
of any events occuring, so use with caution.

If [WaitSystem](../../brl/brl.system/#function-waitsystem) encounters a key, mouse or app suspend/resume/terminate
event, an equivalent [TEvent](../../brl/brl.event/tevent) object will be generated which may be intercepted using
the [EmitEventHook](../../brl/brl.event/#global-emiteventhook-int-allochookid) hook.


<br/>

### `Function CurrentDate$(_format$="%d <i>b</i> <i>Y</i>")`

Get current date


By default, it returns the current date in the format: DD MON YYYY (i.e. 10 DEC 2000).
You can also specify some parameters to return the date in a format of your choice:
<table><tr><td> <b>parameter</b></td><td><b>description</b></td></tr><tr><td>  %%a</td><td>Abbreviated day name (sun - mon).</td></tr><tr><td>  %%A</td><td>Long day name (Sunday - Monday).</td></tr><tr><td>  %%b</td><td>Abbreviated month name (jan - feb).</td></tr><tr><td>  %%B</td><td>Long month name (January...).</td></tr><tr><td>  %%c</td><td>Locale date & time.</td></tr><tr><td>  %%d</td><td>day - in number (1..31).</td></tr><tr><td>  %%H</td><td>hour - in number (0..23).</td></tr><tr><td>  %%I</td><td>hour - in number (1..12).</td></tr><tr><td>  %%j</td><td>day of the year (1..366).</td></tr><tr><td>  %%m</td><td>month - in number (1..12).</td></tr><tr><td>  %%M</td><td>minutes - in number (00..59).</td></tr><tr><td>  %%P</td><td>AM / PM.</td></tr><tr><td>  %%S</td><td>seconds - in number (00..59).</td></tr><tr><td>  %%U</td><td>week number</td></tr><tr><td>  %%w</td><td>day of the week (0..6).</td></tr><tr><td>  %%W</td><td>week of the year (0..53).</td></tr><tr><td>  %%x</td><td>locale data representation.</td></tr><tr><td>  %%y</td><td>year without century (2014 --> 14).</td></tr><tr><td>  %%Y</td><td>Year (2014).</td></tr><tr><td>  %%Z</td><td>Time zone name.</table>

You can use these parameters together:<br>
CurrentDate("Month: %%a Day: %%d")<br>


#### Returns
The current date as a string


#### Example
```blitzmax
' currentdate.bmx

Print "The date is "+CurrentDate$()
```
<br/>

### `Function CurrentTime$()`

Get current time


Returns the current time in the format: HH:MM:SS (i.e. 14:31:57).


#### Returns
The current time as a string


#### Example
```blitzmax
' currenttime.bmx

Print "The time is "+CurrentTime$()
```
<br/>

### `Function MoveMouse( x,y )`

Move mouse pointer


[MoveMouse](../../brl/brl.system/#function-movemouse-x-y) positions the mouse cursor at a specific location within
the current window or graphics display.


<br/>

### `Function ShowMouse()`

Make the mouse pointer visible

<br/>

### `Function HideMouse()`

Make the mouse pointer invisible

<br/>

### `Function Notify( text$,serious=False )`

Notify user


[Notify](../../brl/brl.system/#function-notify-text-serious-false) activates a simple user interface element informing the user of an event.
The optional <b>serious</b> flag can be used to indicate a 'critical' event.

Note that a user interface may not be available when in graphics mode on some platforms.


#### Example
```blitzmax
' notify.bmx

Notify "Hello World"
```
<br/>

### `Function Confirm( text$,serious=False )`

Request user confirmation.


[Confirm](../../brl/brl.system/#function-confirm-text-serious-false) activates a simple user interface element requesting the user to select between
YES and NO options. If the user selects YES, then [Confirm](../../brl/brl.system/#function-confirm-text-serious-false) returns True. Otherwise,
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

### `Function Proceed( text$,serious=False )`

Request user confirmation or cancellation.


[Proceed](../../brl/brl.system/#function-proceed-text-serious-false) activates a simple user interface element requesting the user to select between
YES, NO and CANCEL options. If the user selects YES, then [Proceed](../../brl/brl.system/#function-proceed-text-serious-false) return 1. If the user
selects NO, then [Proceed](../../brl/brl.system/#function-proceed-text-serious-false) returns 0. Otherwise, [Proceed](../../brl/brl.system/#function-proceed-text-serious-false) returns -1.

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

### `Function RequestFile$( text$,extensions$="",save_flag=False,initial_path$="" )`

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

filter$="Image Files:png,jpg,bmp;Text Files:txt;All Files:*"
filename$=RequestFile( "Select graphic file to open",filter$ )

Print filename
```
<br/>

### `Function RequestDir$( text$,initial_path$="" )`

Display system folder requester.


<b>text</b> is used as the title of the file requester.

<b>initial_path</b> is the initial path for the folder requester.

Note that a user interface may not be available when in graphics mode on some platforms.


#### Returns
The path of the selected folder or an empty string if the operation was cancelled.


#### Example
```blitzmax
' requestdir.bmx

path$=RequestDir("Select a Folder",CurrentDir())

Print "directory selected was "+path
```
<br/>

### `Function OpenURL( url$ )`

Opens a URL with the system's default web browser.

Note that a user interface may not be available when in graphics mode on some platforms.


<br/>

### `Function DesktopWidth()`

Get desktop width

#### Returns
Width of the desktop, in pixels


<br/>

### `Function DesktopHeight()`

Get desktop height

#### Returns
Height of the desktop, in pixels


<br/>

### `Function DesktopDepth()`

Get desktop depth


The depth of the desktop is the number of bits per pixel.

Note that on some platforms this function may return 0 if the desktop depth cannot be determined.


#### Returns
Bits per pixel depth of the desktop


<br/>

### `Function DesktopHertz()`

Get desktop refresh rate


Note that on some platforms this function may return 0 if the desktop refresh rate cannot be determined.


#### Returns
Refresh rate, in cycles per second, of the desktop


<br/>

