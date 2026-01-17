---
id: tini
title: TIni
sidebar_label: TIni
---

Represents the contents of an ini file.


The global section index is defined by [INI_GLOBAL_SECTION](../../../text/text.ini/#const-iniglobalsectionint-0).
You should call [Free](../../../text/text.ini/tini/#method-free)() when you are finished working with it, to allow it to clean up any resources it is using.


## Constructors

### `Method New()`

Creates a new empty [TIni](../../../text/text.ini/tini) instance.

<br/>

## Methods

### `Method Save(path:String)`

Saves the ini file to the specified <b>path</b>.

<br/>

### `Method Save(stream:TStream)`

Saves the ini file to the specified <b>stream</b>.

Does not close the [TStream](../../../brl/brl.stream/tstream).


<br/>

### `Method CountSections:Int()`

Returns the number of sections.

There's at least one section in an ini file (the global section), but there can be many more,
each specified in the file by the section name wrapped in square brackets `[ ]`


<br/>

### `Method GetSection:TIniSection(index:Int)`

Returns the section at the given <b>index</b>, or [Null](../../../brl/brl.blitz/#null) if the index is out of bounds.

[INI_GLOBAL_SECTION](../../../text/text.ini/#const-iniglobalsectionint-0) can be used to get the global section.


<br/>

### `Method FindSection:TIniSection(name:String)`

Finds a section by <b>name</b>.

#### Returns
The named section, or [Null](../../../brl/brl.blitz/#null) if not found.


<br/>

### `Method AddSection:TIniSection(name:String)`

Adds a section with the specified <b>name</b>.

There is no check done to see if a section with the specified name already exists - multiple sections of the same name are allowed.


<br/>

### `Method RemoveSection(index:Int)`

Removes a section at the given <b>index</b>.

<br/>

### `Method Set(section:String, name:String, value:String)`

Sets the value for the property with the given <b>section</b> and <b>name</b>.

If the section or property does not exist, it is created.


<br/>

### `Method Set(name:String, value:String)`

Sets the value for the property with the given <b>name</b> in the global section.

If the property does not exist, it is created.


<br/>

### `Method Get:String(section:String, name:String)`

Returns the value for the property with the given <b>section</b> and <b>name</b>, or [Null](../../../brl/brl.blitz/#null) if not found.

<br/>

### `Method Get:String(name:String)`

Returns the value for the property with the given <b>name</b> in the global section, or [Null](../../../brl/brl.blitz/#null) if not found.

<br/>

### `Method TryGet:Int(section:String, name:String, value:String Var)`

Attempts to get the property value with the given <b>section</b> and <b>name</b>.

#### Returns
[True](../../../brl/brl.blitz/#true) if the property was found and has a value, otherwise [False](../../../brl/brl.blitz/#false).


<br/>

### `Method TryGet:Int(name:String, value:String Var)`

Attempts to get the property value with the given <b>name</b> in the global section.

#### Returns
[True](../../../brl/brl.blitz/#true) if the property was found and has a value, otherwise [False](../../../brl/brl.blitz/#false).


<br/>

### `Method Has:Int(section:String, name:String)`

Returns [True](../../../brl/brl.blitz/#true) if a property with the given <b>section</b> and <b>name</b> exists, otherwise [False](../../../brl/brl.blitz/#false).

<br/>

### `Method Has:Int(name:String)`

Returns [True](../../../brl/brl.blitz/#true) if a property with the given <b>name</b> exists in the global section, otherwise [False](../../../brl/brl.blitz/#false).

<br/>

### `Method Free()`

Frees instance and associated data.

<br/>

## Functions

### `Function Load:TIni(path:String)`

Loads an ini file at the given <b>path</b>.

#### Returns
The loaded ini file, or [Null](../../../brl/brl.blitz/#null) if the file could not be loaded.


<br/>

### `Function Load:TIni(stream:TStream)`

Loads an ini file from the given <b>stream</b>.

Does not close the [TStream](../../../brl/brl.stream/tstream).


#### Returns
The loaded ini file from the stream, or [Null](../../../brl/brl.blitz/#null) if the file could not be loaded.


<br/>

