---
id: tiniproperty
title: TIniProperty
sidebar_label: TIniProperty
---

An ini property, with a name and value.


An individual key-value pair, commonly referred to as a "property", within an INI file.
Each property comprises a distinct key and its associated value, serving as the basic data element in the INI file structure.


## Methods

### `Method GetName:String()`

Returns the name of the property.

<br/>

### `Method GetIndex:Int()`

Returns the index of the property.

<br/>

### `Method SetName(name:String)`

Sets the name the property.

Names should not contain the `=` character, as it is used to separate the name from the value.


<br/>

### `Method GetValue:String()`

Returns the value for the property, or [Null](../../../brl/brl.blitz/#null) if it is not set.

<br/>

### `Method SetValue(value:String)`

Sets the value for the property.

<br/>

### `Method Remove()`

Removes the property from its section.

On removal, the property is freed and this instance should no longer be used.


<br/>

