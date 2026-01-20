---
id: turl
title: TUrl
sidebar_label: TUrl
---

HTTP URL representation and builder.


## Constructors

### `Method New()`

Initializes a new [TUrl](../../../net/net.http/turl) instance.

<br/>

### `Method New(url:String)`

Initializes a new [TUrl](../../../net/net.http/turl) instance by parsing the given URL string.

<br/>

## Methods

### `Method ParseUrl:Int(url:String)`

Parses the given URL string, replacing any existing URL data.

#### Returns
[True](../../../brl/brl.blitz/#true) if the URL was parsed successfully, False otherwise.


<br/>

### `Method GetScheme:String()`

Returns the scheme component of the URL.

The scheme is the initial part of the URL that indicates the protocol to be used (e.g., "http", "https", "ftp").


<br/>

### `Method GetUser:String()`

Returns the user component of the URL.

The user component is the username specified in the URL, typically used for authentication.


<br/>

### `Method GetPassword:String()`

Returns the password component of the URL.

The password component is the password specified in the URL, typically used for authentication.


<br/>

### `Method GetOptions:String()`

Returns any options specified in the URL.

The options field is an optional field that might follow the password in the userinfo part.
It is only recognized/used when parsing URLs for the following schemes: pop3, smtp and imap.
The URL API still allows users to set and get this field independently of scheme when not parsing full URLs.


<br/>

### `Method GetHost:String()`

Returns the host component of the URL.

The host is the domain name or IP address of the server where the resource is located.


<br/>

### `Method GetPort:String()`

Returns the port component of the URL.

The port is the network port number on the server where the resource is located.
If no port is explicitly specified in the URL, the default port for the scheme is returned (e.g., 80 for HTTP, 443 for HTTPS).


<br/>

### `Method GetPortAsInt:Int()`

Returns the port component of the URL as an integer.

The port is the network port number on the server where the resource is located.
If no port is explicitly specified in the URL, the default port for the scheme is returned (e.g., 80 for HTTP, 443 for HTTPS).


<br/>

### `Method GetRawPath:String()`

Returns the path component of the URL, without decoding.

The path specifies the specific resource within the host that the URL is pointing to.


<br/>

### `Method GetPath:String()`

Returns the path component of the URL.

The path specifies the specific resource within the host that the URL is pointing to.


<br/>

### `Method GetRawQuery:String()`

Returns the query component of the URL, without decoding.

The query string contains data to be sent to the server as part of the request.


<br/>

### `Method GetQuery:String()`

Returns the query component of the URL.

The query string contains data to be sent to the server as part of the request.


<br/>

### `Method GetRawFragment:String()`

Returns the fragment component of the URL, without decoding.

The fragment identifier is used to point to a specific section within the resource.


<br/>

### `Method GetFragment:String()`

Returns the fragment component of the URL.

The fragment identifier is used to point to a specific section within the resource.


<br/>

### `Method IsAbsolute:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the URL is absolute (i.e., has a scheme).

<br/>

### `Method ToString:String()`

Returns the full URL as a string.

<br/>

### `Method IsSecureScheme:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the URL uses a secure scheme (e.g., "https" or "wss").

<br/>

## Functions

### `Function Builder:TUrlBuilder()`

Returns a URL builder instance for the construction of a URL.

<br/>

