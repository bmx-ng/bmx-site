---
id: brl.clipboard
title: BRL.Clipboard
sidebar_label: BRL.Clipboard
---


A Brl.Clipboard allows to share (textual) data between applications.

To create a clipboard manager, use the [CreateClipboard](../../brl/brl.clipboard/#function-createclipboardtclipboardoptstclipboardopts-null) command.

Set (textual) content of the clipboard using [ClipboardSetText](../../brl/brl.clipboard/#function-clipboardsettextintclipboardtclipboard-srcstring) or [ClipboardSetTextEx](../../brl/brl.clipboard/#function-clipboardsettextexintclipboardtclipboard-srcstring-clipboardmodeint-lcbclipboard). Both commands return True or False depending on whether the text was set or not. You can also clear the clipboard  with [ClearClipboard](../../brl/brl.clipboard/#function-clearclipboardclipboardtclipboard-clipboardmodeint-lcbclipboard) command.
To retrieve the (textual) content use [ClipboardSetText](../../brl/brl.clipboard/#function-clipboardsettextintclipboardtclipboard-srcstring) or [ClipboardSetTextEx](../../brl/brl.clipboard/#function-clipboardsettextexintclipboardtclipboard-srcstring-clipboardmodeint-lcbclipboard).


## Types
| Type | Description |
|---|---|
| [TClipboardOpts](../../brl/brl.clipboard/tclipboardopts) | Options to be passed on instantiation. |
| [TWin32ClipboardOpts](../../brl/brl.clipboard/twin32clipboardopts) | Win32 options |
| [TX11ClipboardOpts](../../brl/brl.clipboard/tx11clipboardopts) | X11 options. |
| [TClipboard](../../brl/brl.clipboard/tclipboard) | A clipboard context. |

## Functions

### `Function CreateClipboard:TClipboard(opts:TClipboardOpts = Null)`

Creates a new clipboard instance.

#### Returns
The clipboard instance, or Null on failure.


#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = CreateClipboard()

' print out currently hold text
print "current: " + ClipboardText(clipboard)

' try to set a new text
If ClipboardSetText(clipboard, "TEST") Then
	print "set: " + ClipboardText(clipboard)
EndIf
```
<br/>

### `Function ClearClipboard(clipboard:TClipboard, clipboardMode:Int = LCB_CLIPBOARD)`

Clears the contents of the given clipboard.

#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = CreateClipboard()

' empty the clipboard
ClearClipboard(clipboard)

print "content: ~q" + ClipboardText(clipboard) + "~q"

'output:
'content: ""
```
<br/>

### `Function ClipboardHasOwnership:Int(clipboard:TClipboard, clipboardMode:Int = LCB_CLIPBOARD)`

Determines if the clipboard content is currently owned.

#### Returns
[True](../../brl/brl.blitz/#true) if the clipboard data is owned by the provided instance.


#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = CreateClipboard()

' clipboard mode can be:
' LCB_CLIPBOARD = The primary (global) clipboard [default mode]
' LCB_PRIMARY = The (global) mouse selection clipboard.
' LCB_SECONDARY = The largely unused (global) secondary selection clipboard.
Local clipboardMode:int = LCB_CLIPBOARD

If ClipboardHasOwnerShip(clipboard, clipboardMode)
	print "clipboard content created by us"
Else
	print "clipboard content of another application"
EndIf
```
<br/>

### `Function ClipboardText:String(clipboard:TClipboard)`

Retrieves the text currently held on the clipboard.

#### Returns
A copy to the retrieved text.


#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = CreateClipboard()

' try to set a new text
If ClipboardSetText(clipboard, "TEST") Then
	Print ClipboardText(clipboard)
EndIf

'output:
'TEST
```
<br/>

### `Function ClipboardTextEx:String(clipboard:TClipboard, length:Int Var, clipboardMode:Int = LCB_CLIPBOARD)`

Retrieves the text currently held on the clipboard.

<b>length</b> returns the length of the retrieved data.


#### Returns
A copy to the retrieved text.


#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = CreateClipboard()

' clipboard mode can be:
' LCB_CLIPBOARD = The primary (global) clipboard [default mode]
' LCB_PRIMARY = The (global) mouse selection clipboard.
' LCB_SECONDARY = The largely unused (global) secondary selection clipboard.
Local clipboardMode:Int = LCB_CLIPBOARD
' variable to hold text length when fetching text with TextEx()
Local textLength:Int

' try to set a new text
If ClipboardSetTextEx(clipboard, "TEST", clipboardMode) Then
	Print ClipboardTextEx(clipboard, textLength, clipboardMode)
	Print "length of clipboard content: " + textLength
EndIf

'output:
'TEST
'length of clipboard content: 4
```
<br/>

### `Function ClipboardSetText:Int(clipboard:TClipboard, src:String)`

Sets the text for the clipboard.

#### Returns
[True](../../brl/brl.blitz/#true) if the clipboard was set (#false on error).


#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = CreateClipboard()

' try to set a new text
If ClipboardSetText(clipboard, "TEST") Then
	Print ClipboardText(clipboard)
EndIf

'output:
'TEST
```
<br/>

### `Function ClipboardSetTextEx:Int(clipboard:TClipboard, src:String, clipboardMode:Int = LCB_CLIPBOARD)`

Sets the text for the clipboard.

#### Returns
[True](../../brl/brl.blitz/#true) if the clipboard was set (#false on error).


#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = CreateClipboard()

' clipboard mode can be:
' LCB_CLIPBOARD = The primary (global) clipboard [default mode]
' LCB_PRIMARY = The (global) mouse selection clipboard.
' LCB_SECONDARY = The largely unused (global) secondary selection clipboard.
Local clipboardMode:Int = LCB_CLIPBOARD
' variable to hold text length when fetching text with TextEx()
Local textLength:Int

' try to set a new text
If ClipboardSetTextEx(clipboard, "TEST", clipboardMode) Then
	Print ClipboardTextEx(clipboard, textLength, clipboardMode)
	Print "length of clipboard content: " + textLength
EndIf

'output:
'TEST
'length of clipboard content: 4
```
<br/>

## Consts

### `Const LCB_CLIPBOARD:Int = 0`

The primary (global) clipboard.

<br/>

### `Const LCB_PRIMARY:Int = 1`

The (global) mouse selection clipboard.

<br/>

### `Const LCB_SECONDARY:Int = 2`

The largely unused (global) secondary selection clipboard.

<br/>

