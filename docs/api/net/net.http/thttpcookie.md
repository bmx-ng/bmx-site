---
id: thttpcookie
title: THttpCookie
sidebar_label: THttpCookie
---

An HTTP Cookie representation.



HTTP cookies are small pieces of data that a server asks a client (such as a web browser
or HTTP client) to store and send back with subsequent requests. They are most commonly
used to maintain state across multiple HTTP requests, since HTTP itself is a stateless
protocol.

Cookies are typically used for:

* **Session management** (for example, login sessions or authentication tokens)
* **User preferences** (language, theme, or other settings)
* **Tracking and analytics** (identifying returning clients)

When a server includes a `Set-Cookie` header in an HTTP response, the client may store the
cookie according to its attributes (such as domain, path, expiration time, and security
flags). On later requests, the client automatically sends matching cookies back to the
server using the `Cookie` request header.

An HTTP cookie may define:

* A **name** and **value**
* A **domain** and **path** that control when it is sent
* An **expiration** or **max-age**, determining its lifetime
* Security attributes such as **Secure** (HTTPS only) and **HttpOnly**

[THttpCookie](../../../net/net.http/thttpcookie) represents a single HTTP cookie and provides access to its properties, allowing
applications to inspect, store, and manage cookies as part of HTTP client communication.


## Methods

### `Method GetName:String() Override`

Gets the cookie name.

<br/>

### `Method GetValue:String() Override`

Gets the cookie value.

<br/>

### `Method GetVersion:Int() Override`

Gets the cookie version.

<br/>

### `Method GetComment:String() Override`

Gets the 'Comment' attribute value.

<br/>

### `Method GetDomain:String() Override`

Gets the 'Domain' attribute value.

<br/>

### `Method GetPath:String() Override`

Gets the 'Path' attribute value.

<br/>

### `Method GetMaxAge:Long() Override`

Gets the 'Max-Age' attribute value.

<br/>

### `Method GetSameSite:String() Override`

Gets the 'SameSite' attribute value.

<br/>

### `Method GetExpires:Long() Override`

Gets the 'Expires' attribute value.

Returns the expiration date of the cookie as a Unix timestamp, or zero if not set or invalid.


<br/>

### `Method IsPartitioned:Int() Override`

Returns whether the 'Partitioned' attribute is set.

<br/>

### `Method IsHttpOnly:Int() Override`

Returns whether the 'HttpOnly' attribute is set.

<br/>

### `Method IsSecure:Int() Override`

Returns whether the 'Secure' attribute is set.

<br/>

### `Method IsExpired:Int() Override`

Returns whether the cookie has expired.

<br/>

### `Method GetAttribute:String(attr:ECookieAttribute)`

Gets the attribute value by enum.

<br/>

### `Method GetAttribute:String(attr:String)`

Gets the attribute value by string key.

<br/>

## Functions

### `Function Build:THttpCookieBuilder(name:String, value:String, version:Int = 0)`

Creates a new HTTP cookie builder.

<br/>

