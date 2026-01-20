---
id: thttpcookiebuilder
title: THttpCookieBuilder
sidebar_label: THttpCookieBuilder
---

HTTP Cookie builder.


Provides a builder pattern for creating HTTP cookies with various attributes.


## Methods

### `Method Build:THttpCookie()`

Builds and returns the HTTP cookie.

<br/>

### `Method Attribute:THttpCookieBuilder(name:String, value:String)`

Sets a cookie attribute by name and value.

<br/>

### `Method Expires:THttpCookieBuilder(expires:Long)`

Sets the 'Expires' attribute.

The expires parameter is a Unix timestamp (seconds since epoch). If expires is less than or equal to zero, the 'Expires' attribute is removed.


<br/>

### `Method HttpOnly:THttpCookieBuilder(httpOnly:Int)`

Sets the 'HttpOnly' attribute.

If httpOnly is [True](../../../brl/brl.blitz/#true), the 'HttpOnly' attribute is set; otherwise, it is removed.


<br/>

### `Method MaxAge:THttpCookieBuilder(maxAge:Long)`

Sets the 'Max-Age' attribute.

If maxAge is non-negative, the 'Max-Age' attribute is set to the specified value; otherwise, it is removed.


<br/>

### `Method Partitioned:THttpCookieBuilder(partitioned:Int)`

Sets the 'Partitioned' attribute.

If partitioned is [True](../../../brl/brl.blitz/#true), the 'Partitioned' attribute is set; otherwise, it is removed.


<br/>

### `Method Secure:THttpCookieBuilder(secure:Int)`

Sets the 'Secure' attribute.

If secure is [True](../../../brl/brl.blitz/#true), the 'Secure' attribute is set; otherwise, it is removed.


<br/>

### `Method SameSite:THttpCookieBuilder(sameSite:String)`

Sets the 'SameSite' attribute.

If sameSite is not empty, the 'SameSite' attribute is set to the specified value; otherwise, it is removed.


<br/>

