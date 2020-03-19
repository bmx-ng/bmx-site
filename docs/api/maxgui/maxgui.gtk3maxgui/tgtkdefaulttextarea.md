---
id: tgtkdefaulttextarea
title: TGTKDefaultTextArea
sidebar_label: TGTKDefaultTextArea
---

A text area.


## Methods

### `Method AddText:Int(Text:String)`

Adds text to the end of the text.

<br/>

### `Method AreaText:String(pos:Int, length:Int, units:Int)`

Returns the text For the specified location

<br/>

### `Method AreaLen:Int(units:Int)`

Returns either the number of characters or number of rows.

<br/>

### `Method GetCursorPos:Int(units:Int)`

Returns the current cursor position value, in characters or lines

<br/>

### `Method SetShow:Int(truefalse:Int)`

Set the text area visibility.

<br/>

### `Method SetFont:Int(font:TGuiFont)`

Set the text area font.

<br/>

### `Method SetText:Int(Text:String)`

Sets the text buffer text

<br/>

### `Method SetSelection:Int(pos:Int, length:Int, units:Int)`

Set the text area selection

<br/>

### `Method GetSelectionLength:Int(units:Int)`

Returns the size of the current selection, in characters or lines.

<br/>

### `Method SetStyle:Int(r:Int, g:Int, b:Int, flags:Int, pos:Int, length:Int, units:Int)`

Sets the style of part of the text area

<b>flags</b> are any mix of TEXTFORMAT_BOLD, TEXTFORMAT_ITALIC, TEXTFORMAT_UNDERLINE and TEXTFORMAT_STRIKETHROUGH.<br/>
We utilise the buffers' tag table to cache tags that we reuse - based on the attributes.
This way we only create one for each different style we actually use in the buffer.<br/>
Note: "fastUpdate" flag enables or disables the use of gtk_text_buffer_remove_all_tags which strips
old tags from the area before applying the new one.<br/>
Ideally, you would first remove tags before applying new ones, but since removal is slow, the following
method can work well :
<pre>
setFastUpdate(false)
SetStyle on whole intended area to "normal" style
setFastUpdate(true)
iterate thru tokens applying styles..
</pre>


<br/>

### `Method LockText:Int()`

Locks the text area.

<br/>

### `Method UnlockText:Int()`

Unlocks the text area

<br/>

### `Method setFastUpdate(bool:Int)`

Enable to allow *fast* formatting.

When enabled, highlighting will not be removed before being applied, and since
tags are ordered, some highlight may not appear on top of others.


<br/>

## Functions

### `Function OnTextChanged(widget:Byte Ptr, obj:Object)`

Callback for text change

<br/>

### `Function OnCursorMoved(widget:Byte Ptr, _Step:Int, count:Int, extend_selection:Int, obj:Object)`

Callback for text-cursor movement

<br/>

### `Function OnMouseDown:Int(widget:Byte Ptr, event:Byte Ptr, obj:Object)`

Callback for mouse button press

<br/>

### `Function OnMouseUp:Int(widget:Byte Ptr, event:Byte Ptr, obj:Object)`

Callback for mouse button release

<br/>

