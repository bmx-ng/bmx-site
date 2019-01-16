---
id: tjsonerror
title: TJSONError
sidebar_label: TJSONError
---

JSON error information.


## Fields

### `Field Text:String`

The error message, or an empty string if a message is not available.

<br/>

### `Field source:String`

Source of the error.

This can be (a part of) the file name or a special identifier in angle brackers (e.g. &lt;string&gt;).


<br/>

### `Field line:Int`

The line number on which the error occurred.

<br/>

### `Field column:Int`

The column on which the error occurred.

Note that this is the character column, not the byte column, i.e. a multibyte UTF-8 character counts as one column.


<br/>

### `Field position:Int`

The position in bytes from the start of the input.

This is useful for debugging Unicode encoding problems.


<br/>

### `Field errorCode:Int`

The numeric code for the error.

<br/>

