---
id: tgtkwindow
title: TGTKWindow
sidebar_label: TGTKWindow
---

A Window


## Methods

### `Method SetStatusText:Int(Text:String)`

Set the window status text

<br/>

### `Method PopupMenu:Int(menu:TGadget,extra:Object=Null)`

Pop up a popup menu

<br/>

### `Method setIcon(pix:TPixmap)`

Sets the window icon with the specified pixmap.

<br/>

### `Method State:Int()`

Returns the window state.

<br/>

## Functions

### `Function OnWindowMoveSize(widget:Byte Ptr, event:Byte Ptr, obj:Object)`

Callback for window size / move

<br/>

### `Function OnWindowSize(widget:Byte Ptr, obj:Object)`

Callback for window size.

This event doesn't actually trigger a max size event, but we use it to adjust the client
size.


<br/>

### `Function OnWindowStateChange:Int(widget:Byte Ptr, event:Byte Ptr, obj:Object)`

Callback for window state change.

<br/>

### `Function OnWindowClose:Int(widget:Byte Ptr, event:Byte Ptr, obj:Object)`

Callback for window close

<br/>

### `Function OnWindowActivate(widget:Byte Ptr, event:Byte Ptr, obj:Object)`

Callback for window activate

<br/>

### `Function OnWindowDeactivate:Int(widget:Byte Ptr, event:Byte Ptr, obj:Object)`

Callback for window deactivate

Not used, but might come in handy at some point...


<br/>

