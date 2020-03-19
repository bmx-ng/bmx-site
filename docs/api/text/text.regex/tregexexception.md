---
id: tregexexception
title: TRegExException
sidebar_label: TRegExException
---

A Regular Expression exception.


This can be thrown either during regular expression compilation (-99) or during a search (-1 to -23).


## Fields

### `Field num:Int`

The type of error thrown.

-99 is a regular expression compile error. Read [message](../../../text/text.regex/tregexexception/#field-messagestring) for details.<br>
-1 to -23 is thrown during a search. Read [message](../../../text/text.regex/tregexexception/#field-messagestring) for details.


<br/>

### `Field message:String`

The error text.

<br/>

## Methods

### `Method toString:String()`

Returns the exception as a String.

<br/>

