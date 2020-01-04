---
id: tclipboard
title: TClipboard
sidebar_label: TClipboard
---

A clipboard context.


## Methods

### `Method Create:TClipboard(opts:TClipboardOpts = Null)`

Creates a new clipboard instance.

#### Returns
The clipboard instance, or Null on failure.


#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = New TClipboard.Create()

' print out currently hold text
print "current: " + clipboard.Text()

' try to set a new text
If clipboard.SetText("TEST") Then
	print "set: " + clipboard.Text()
EndIf
```
<br/>

### `Method Clear(clipboardMode:Int = LCB_CLIPBOARD)`

Clears the contents of the given clipboard.

#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = new TClipboard.Create()

' empty the clipboard
clipboard.Clear()

print "content: ~q" + clipboard.Text() + "~q"

'output:
'content: ""
```
<br/>

### `Method HasOwnership:Int(clipboardMode:Int = LCB_CLIPBOARD)`

Determines if the clipboard content is currently owned.

#### Returns
[True](../../../brl/brl.blitz/#true) if the clipboard data is owned by the provided instance.


#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = new TClipboard.Create()

' clipboard mode can be:
' LCB_CLIPBOARD = The primary (global) clipboard [default mode]
' LCB_PRIMARY = The (global) mouse selection clipboard.
' LCB_SECONDARY = The largely unused (global) secondary selection clipboard.
Local clipboardMode:int = LCB_CLIPBOARD

If clipboard.HasOwnerShip(clipboardMode)
	print "clipboard content created by us"
Else
	print "clipboard content of another application"
EndIf
```
<br/>

### `Method Text:String()`

Retrieves the text currently held on the clipboard.

#### Returns
A copy to the retrieved text.


#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = New TClipboard.Create()

' try to set a new text
If clipboard.SetText("TEST") Then
	Print clipboard.Text()
EndIf

'output:
'TEST
```
<br/>

### `Method TextEx:String(length:Int Var, clipboardMode:Int = LCB_CLIPBOARD)`

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
Local clipboard:TClipboard = New TClipboard.Create()

' clipboard mode can be:
' LCB_CLIPBOARD = The primary (global) clipboard [default mode]
' LCB_PRIMARY = The (global) mouse selection clipboard.
' LCB_SECONDARY = The largely unused (global) secondary selection clipboard.
Local clipboardMode:Int = LCB_CLIPBOARD
' variable to hold text length when fetching text with TextEx()
Local textLength:Int

' try to set a new text
If clipboard.SetTextEx("TEST", clipboardMode) Then
	Print clipboard.TextEx(textLength, clipboardMode)
	Print "length of clipboard content: " + textLength
EndIf

'output:
'TEST
'length of clipboard content: 4
```
<br/>

### `Method SetText:Int(src:String)`

Sets the text for the clipboard.

#### Returns
[True](../../../brl/brl.blitz/#true) if the clipboard was set (#false on error).


#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = New TClipboard.Create()

' try to set a new text
If clipboard.SetText("TEST") Then
	Print clipboard.Text(clipboard)
EndIf

'output:
'TEST
```
<br/>

### `Method SetTextEx:Int(src:String, clipboardMode:Int = LCB_CLIPBOARD)`

Sets the text for the clipboard.

#### Returns
[True](../../../brl/brl.blitz/#true) if the clipboard was set (#false on error).


#### Example
```blitzmax
SuperStrict

Framework Brl.Clipboard
Import Brl.StandardIO

' create a clipboard manager to access the system wide clipboard
Local clipboard:TClipboard = New TClipboard.Create()

' clipboard mode can be:
' LCB_CLIPBOARD = The primary (global) clipboard [default mode]
' LCB_PRIMARY = The (global) mouse selection clipboard.
' LCB_SECONDARY = The largely unused (global) secondary selection clipboard.
Local clipboardMode:Int = LCB_CLIPBOARD
' variable to hold text length when fetching text with TextEx()
Local textLength:Int

' try to set a new text
If clipboard.SetTextEx("TEST", clipboardMode) Then
	Print clipboard.TextEx(textLength, clipboardMode)
	Print "length of clipboard content: " + textLength
EndIf

'output:
'TEST
'length of clipboard content: 4
```
<br/>

### `Method Free()`

Frees the clipboard.

<br/>

