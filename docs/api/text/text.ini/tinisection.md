---
id: tinisection
title: TIniSection
sidebar_label: TIniSection
---

An ini section.


## Methods

### `Method GetName:String()`

Returns the name of the section, or Null if it is the global section.

<br/>

### `Method SetName(name:String)`

Sets the name of the section.

<br/>

### `Method CountProperties:Int()`

Returns the number of properties in the section.

<br/>

### `Method GetProperty:TIniProperty(index:Int)`

Returns a property at the given <b>index</b> position, or Null if the <b>index</b> is out of range.

<br/>

### `Method FindProperty:TIniProperty(name:String)`

Finds the property with the given <b>name</b>, or [Null](../../../brl/brl.blitz/#null) if not found.

<br/>

### `Method AddProperty:TIniProperty(name:String, value:String)`

Adds a new property to the section using the specified <b>name</b> and <b>value</b>

<br/>

### `Method RemoveProperty(index:Int)`

Removes the property with the given <b>index</b> from the section.

<br/>

