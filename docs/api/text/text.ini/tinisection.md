---
id: tinisection
title: TIniSection
sidebar_label: TIniSection
---

An ini section.


Represents a distinct section within an INI file.
In the structure of an INI file, sections are used to group related key-value pairs.
A section can either be global, meaning it applies to the entire INI file, or named, identified by a unique header enclosed in
square brackets (e.g., `[section name]`). This type facilitates the parsing, manipulation, and storage of these sections,
allowing for organized access to the contained data.


## Methods

### `Method GetName:String()`

Returns the name of the section, or [Null](../../../brl/brl.blitz/#null) if it is the global section.

<br/>

### `Method GetIndex:Int()`

Returns the index of the section.

The global section is represented by the index [INI_GLOBAL_SECTION](../../../text/text.ini/#const-iniglobalsectionint-0).


<br/>

### `Method SetName(name:String)`

Sets the name of the section.

<br/>

### `Method CountProperties:Int()`

Returns the number of properties in the section.

<br/>

### `Method GetProperty:TIniProperty(index:Int)`

Returns a property at the given <b>index</b> position, or [Null](../../../brl/brl.blitz/#null) if the <b>index</b> is out of range.

<br/>

### `Method Get:String(name:String)`

Returns the property value with the given <b>name</b>, or [Null](../../../brl/brl.blitz/#null) if not found.

IF the property contains an empty value, [null](../../../brl/brl.blitz/#null) could be confused with the absence of the property.
In such cases, use [TryGet](../../../text/text.ini/tinisection/#method-trygetintnamestring-valuestring-var) or [Has](../../../text/text.ini/tinisection/#method-hasintnamestring) to check for the existence of the property first.


<br/>

### `Method TryGet:Int(name:String, value:String Var)`

Attempts to get the property value with the given <b>name</b>.

#### Returns
[True](../../../brl/brl.blitz/#true) if the property was found and has a value, otherwise [False](../../../brl/brl.blitz/#false).


<br/>

### `Method Has:Int(name:String)`

Returns [True](../../../brl/brl.blitz/#true) if a property with the given <b>name</b> exists in the section, otherwise [False](../../../brl/brl.blitz/#false).

<br/>

### `Method Set(name:String, value:String)`

Sets the property with the given <b>name</b> to the specified <b>value</b>.

If the property does not exist, it is created.


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

### `Method Clear()`

Removes all properties from the section.

<br/>

### `Method Remove()`

Removes the section from the ini file.

On removal, the section is freed and this instance, and all referenced properties should no longer be used.


<br/>

