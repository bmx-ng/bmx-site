---
id: thttpfields
title: THttpFields
sidebar_label: THttpFields
---

A collection of HTTP fields/headers.


## Methods

### `Method Add:THttpField(name:String, value:String)`

Adds a new entry with the specified name and value.

The name can be a standard HTTP header name or a custom name.


#### Returns
The newly created [THttpField](../../../net/net.http/thttpfield) instance.


<br/>

### `Method Add:THttpField(header:EHttpHeader, value:String)`

Adds a new entry with the specified <b>header</b> and <b>value</b>.

#### Returns
The newly created [THttpField](../../../net/net.http/thttpfield) instance.


<br/>

### `Method Add( fields:THttpFields )`

Adds all fields from another [THttpFields](../../../net/net.http/thttpfields) collection.

<br/>

### `Method Add:THttpField( _field:THttpField )`

Adds the specified [THttpField](../../../net/net.http/thttpfield) to the collection.

#### Returns
The added [THttpField](../../../net/net.http/thttpfield) instance.


<br/>

### `Method GetFirst:String(name:String)`

Retrieves the first value associated with the specified field name.

#### Returns
The value of the field, or [Null](../../../brl/brl.blitz/#null) if not found.


<br/>

### `Method GetFirst:String(header:EHttpHeader)`

Retrieves the first value associated with the specified <b>header</b>.

#### Returns
The value of the header, or [Null](../../../brl/brl.blitz/#null) if not found.


<br/>

### `Method Add:THttpField( line:String )`

Adds a header line in the format "Name: Value".

<br/>

### `Method HasHeader:Int(name:String)`

Checks if a header with the specified <b>name</b> exists in the collection.

Headers with custom names can be added, so this method checks by string name.


<br/>

### `Method HasHeader:Int(header:EHttpHeader)`

Checks if a header with the specified <b>header</b> exists in the collection.

<br/>

### `Method ToSList:TSList()`

Converts the headers to a TSList suitable for libcurl.

<br/>

### `Method IsEmpty:Int()`

Checks if the collection is empty.

<br/>

