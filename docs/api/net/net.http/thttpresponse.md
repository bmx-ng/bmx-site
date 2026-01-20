---
id: thttpresponse
title: THttpResponse
sidebar_label: THttpResponse
---

An HTTP Response.


Represents the response received from an HTTP request, including status code, headers, and body content.


## Methods

### `Method IsSuccess:Int()`

Returns whether the HTTP request was successful.

<br/>

### `Method AsString:String()`

Returns the response body as a string, assuming UTF-8 encoding.

<br/>

### `Method AsBytes:Byte[](copy:Int = True)`

Returns the response body as a byte array.

If <b>copy</b> is False, the original data is returned, rather than a copy.


<br/>

### `Method ErrorMessage:String()`

Returns the error message for the HTTP request.

<br/>

