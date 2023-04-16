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

<br/>

### `Method GetSection:TIniSection(index:Int)`

Returns the section at the given <b>index</b>, or [Null](../../../brl/brl.blitz/#null) if the index is out of bounds.

<br/>

### `Method FindSection:TIniSection(name:String)`

Finds a section by <b>name</b>.

#### Returns
The named section, or Null if not found.


<br/>

### `Method AddSection:TIniSection(name:String)`

Adds a section with the specified <b>name</b>.

There is no check done to see if a section with the specified name already exists - multiple sections of the same name are allowed.


<br/>

### `Method RemoveSection(index:Int)`

Removes a section at the given <b>index</b>.

<br/>

### `Method Free()`

Frees instance and associated data.

<br/>

## Functions

### `Function Load:TIni(path:String)`

Loads an ini file at the given <b>path</b>.

<br/>

### `Function Load:TIni(stream:TStream)`

Loads an ini file from the given <b>stream</b>.

Does not close the [TStream](../../../brl/brl.stream/tstream).


<br/>

