---
id: thttpclient
title: THttpClient
sidebar_label: THttpClient
---

HTTP Client for sending requests and receiving responses.


## Methods

### `Method Start()`

Starts the HTTP client processing thread.

This method must be called before sending any requests.


<br/>

### `Method Shutdown()`

Shuts down the HTTP client and cleans up resources.

<br/>

### `Method Get:THttpRequest(url:String)`

Creates a new GET request for the specified URL.

<br/>

### `Method Post:THttpRequest(url:String)`

Creates a new POST request for the specified URL.

<br/>

### `Method Put:THttpRequest(url:String)`

Creates a new PUT request for the specified URL.

<br/>

### `Method NewRequest:THttpRequest(url:String)`

Creates a new HTTP request with the specified URL.




<br/>

### `Method SetFollowRedirects(follow:Int)`

Sets whether the client should follow HTTP redirects automatically. Defaults to True.

<br/>

### `Method IsFollowingRedirects:Int()`

Returns whether the client is set to follow HTTP redirects automatically.

<br/>

### `Method SetRetryPolicy(policy:TRetryPolicy)`

Sets the retry policy for the HTTP client.

<br/>

### `Method SetCACerts(path:String)`

Sets the CA certificates for SSL/TLS verification from a file path.

<br/>

### `Method SetCACerts(certs:Byte[])`

Sets the CA certificates for SSL/TLS verification from a byte array.

<br/>

### `Method SetCACerts(store:TCAStore)`

Sets the CA certificates for SSL/TLS verification from a CA store.

<br/>

### `Method SetCACerts(stream:TStream)`

Sets the CA certificates for SSL/TLS verification from a stream.

<br/>

### `Method SetConnectTimeout(timeoutMs:Int)`

Sets the connection timeout in milliseconds. Defaults to 10000 ms.

Specifies the maximum time in milliseconds that the connection phase is allowed to take.


<br/>

### `Method SetTotalTimeout(timeoutMs:Int)`

Sets the total timeout in milliseconds. Defaults to no timeout.

Specifies the maximum time in milliseconds that the entire request is allowed to take.


<br/>

### `Method SetIdleTimeout(timeoutMs:Int)`

Sets the idle timeout in milliseconds. Defaults to 60000 ms.

Specifies the maximum time in milliseconds that the request is allowed to remain idle.


<br/>

### `Method SetUserAgent(userAgent:String)`

Sets the User-Agent header for the HTTP client.

Applies to all subsequent requests unless overridden at the request level.


<br/>

## Functions

### `Function Create:THttpClient()`

Creates a new HTTP client instance.

This function initializes a new instance of the HTTP client.


<br/>

