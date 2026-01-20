---
id: thttpfield
title: THttpField
sidebar_label: THttpField
---

An HTTP Field/Header


Represents a single HTTP field/header, which can be identified either by its name (string) or by an enumeration value (EHttpHeader).


## Constructors

### `Method New(header:EHttpHeader, value:String)`

Initializes a new [THttpField](../../../net/net.http/thttpfield) instance with the specified <b>header</b> and <b>value</b>.

<br/>

### `Method New(name:String, value:String)`

Initializes a new [THttpField](../../../net/net.http/thttpfield) instance with the specified <b>name</b> and <b>value</b>.

The name can be a standard HTTP header name or a custom name.


<br/>

## Methods

### `Method Is:Int(name:String)`

Checks if the header matches the specified <b>name</b>.

Headers with custom names can be added, so this method checks by string name.


<br/>

### `Method GetName:String()`

Returns the name of the HTTP field/header.

<br/>

### `Method GetValue:String()`

Returns the value of the HTTP field/header.

<br/>

### `Method GetHeader:EHttpHeader()`

Returns the enumeration value of the HTTP header.

Throws an exception if the header was created with a custom name and does not correspond to a standard header.
Use [TryGetHeader](../../../net/net.http/thttpfield/#method-trygetheaderintheaderehttpheader-var) to safely attempt retrieval.


<br/>

### `Method TryGetName:Int(name:String Var)`

Attempts to retrieve the name of the HTTP field/header.

This method is safe to use even if the header was created with a custom name.


#### Returns
[True](../../../brl/brl.blitz/#true) if the name was retrieved; [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method TryGetHeader:Int(header:EHttpHeader Var)`

Attempts to retrieve the enumeration value of the HTTP header.

This method is safe to use even if the header was created with a custom name, and in such cases it will return [False](../../../brl/brl.blitz/#false).


#### Returns
[True](../../../brl/brl.blitz/#true) if the header corresponds to a standard header and the value was retrieved; [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method ToString:String()`

Returns a string representation of the HTTP field/header in the format "Name: Value".

<br/>

