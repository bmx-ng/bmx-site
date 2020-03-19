---
id: tgtkmenuitem
title: TGTKMenuItem
sidebar_label: TGTKMenuItem
---

A menu item.


## Methods

### `Method State:Int()`

Returns menu state - checked or unchecked

<br/>

### `Method GetText:String()`

Returns the menu text

<br/>

### `Method SetText:Int(label:String)`

Sets the menu text

<br/>

## Functions

### `Function MenuSelected:Int(widget:Byte Ptr, obj:Object)`

Callback function for selecting a menu option.

Triggers a menu action event.<br/>
NOTE - We have to ignore "obj" because it is not reliable


<br/>

