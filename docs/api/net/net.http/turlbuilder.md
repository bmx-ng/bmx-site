---
id: turlbuilder
title: TUrlBuilder
sidebar_label: TUrlBuilder
---

HTTP URL builder.


Use TUrl.Builder() to create a new builder instance.


## Methods

### `Method Build:TUrl()`

Builds and returns the constructed TUrl instance.

<br/>

### `Method Scheme:TUrlBuilder(scheme:String)`

Sets the scheme component of the URL.

<br/>

### `Method User:TUrlBuilder(user:String)`

Sets the user component of the URL.

<br/>

### `Method Password:TUrlBuilder(password:String)`

Sets the password component of the URL.

<br/>

### `Method Options:TUrlBuilder(options:String)`

Sets the options component of the URL.

The options field is an optional field that might follow the password in the userinfo part.
It is only recognized/used when parsing URLs for the following schemes: pop3, smtp and imap.
The URL API still allows users to set and get this field independently of scheme when not parsing full URLs.


<br/>

### `Method Host:TUrlBuilder(host:String)`

Sets the host component of the URL.

<br/>

### `Method Port:TUrlBuilder(port:String)`

Sets the port component of the URL.

<br/>

### `Method Port:TUrlBuilder(port:Int)`

Sets the port component of the URL.

<br/>

### `Method Path:TUrlBuilder(path:String)`

Sets the path component of the URL.

<br/>

### `Method Query:TUrlBuilder(query:String)`

Sets the query component of the URL.

This method encodes the query string while preserving the "&" and "=" separators.


<br/>

### `Method Fragment:TUrlBuilder(fragment:String)`

Sets the fragment component of the URL.

<br/>

