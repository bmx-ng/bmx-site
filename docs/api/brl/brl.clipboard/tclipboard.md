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


<br/>

### `Method Clear(clipboardMode:Int = LCB_CLIPBOARD)`

Clears the contents of the given clipboard.

<br/>

### `Method HasOwnership:Int(clipboardMode:Int = LCB_CLIPBOARD)`

Determines if the clipboard content is currently owned.

#### Returns
[True](../../../brl/brl.blitz/#true) if the clipboard data is owned by the provided instance.


<br/>

### `Method Text:String()`

Retrieves the text currently held on the clipboard.

#### Returns
A copy to the retrieved text.


<br/>

### `Method TextEx:String(length:Int Var, clipboardMode:Int = LCB_CLIPBOARD)`

Retrieves the text currently held on the clipboard.

<b>length</b> returns the length of the retrieved data.


#### Returns
A copy to the retrieved text.


<br/>

### `Method SetText:Int(src:String)`

Sets the text for the clipboard.

#### Returns
[True](../../../brl/brl.blitz/#true) if the clipboard was set (#false on error).


<br/>

### `Method SetTextEx:Int(src:String, clipboardMode:Int = LCB_CLIPBOARD)`

Sets the text for the clipboard.

#### Returns
[True](../../../brl/brl.blitz/#true) if the clipboard was set (#false on error).


<br/>

### `Method Free()`

Frees the clipboard.

<br/>

