---
id: thttprequest
title: THttpRequest
sidebar_label: THttpRequest
---

HTTP Request.


Represents an HTTP request, including method, URL, headers, and body content.


## Methods

### `Method Header:THttpRequest(key:String, value:String)`

Adds a header to the HTTP request.

<br/>

### `Method Header:THttpRequest(key:EHttpHeader, value:String)`

Adds a header to the HTTP request.

<br/>

### `Method Headers:THttpRequest(fields:THttpFields)`

Adds multiple headers to the HTTP request.

<br/>

### `Method WithMethod:THttpRequest(_method:EHttpMethod)`

Sets the HTTP method for the request.

<br/>

### `Method Body:THttpRequest(text:String, contentType:String = "text/plain; charset=utf-8")`

Sets the request body for the HTTP request to the specified <b>text</b> with the given content type.

<br/>

### `Method Body:THttpRequest(stream:TStream, length:Long, contentType:String = "application/octet-stream")`

Sets the request body for the HTTP request to the specified input <b>stream</b> with the given content type.

<br/>

### `Method Body:THttpRequest(data:Byte[], contentType:String = "application/octet-stream")`

Sets the request body for the HTTP request to the specified byte array <b>data</b> with the given content type.

<br/>

### `Method Body:THttpRequest(content:TContent)`

Sets the request body for the HTTP request to the specified content object <b>content</b>.

<br/>

### `Method Body:THttpRequest(bank:TBank, contentType:String = "application/octet-stream")`

Sets the request body for the HTTP request to the specified bank object <b>bank</b> with the given content type.

<br/>

### `Method AuthMethod:THttpRequest(auth:EHttpAuthMethod)`

Sets the authentication method for the HTTP request.

<br/>

### `Method AcceptCompressed:THttpRequest(enable:Int)`

Enables or disables acceptance of compressed responses. Defaults to enabled.

<br/>

### `Method ConnectTimeout:THttpRequest(connectMs:Int)`

Sets the connection timeout for the HTTP request in milliseconds. Defaults to 10000 ms.

Overrides the client-wide connection timeout setting for this specific request.


<br/>

### `Method IdleTimeout:THttpRequest(idleMs:Int)`

Sets the idle timeout for the HTTP request in milliseconds. Defaults to 60000 ms.

Overrides the client-wide idle timeout setting for this specific request.


<br/>

### `Method TotalTimeout:THttpRequest(totalMs:Int)`

Sets the total timeout for the HTTP request in milliseconds. Defaults to no timeout.

Overrides the client-wide total timeout setting for this specific request.


<br/>

### `Method Scheme:THttpRequest(scheme:String)`

Sets the URL scheme (e.g., "http" or "https").

<br/>

### `Method Host:THttpRequest(host:String)`

Sets the host for the HTTP request.

<br/>

### `Method Port:THttpRequest(port:Int)`

Sets the port for the HTTP request.

<br/>

### `Method UserPassword:THttpRequest(user:String, password:String)`

Sets the user and password for HTTP authentication.

When using Kerberos V5 authentication with a Windows based server, you should specify the username part with the domain name in order
for the server to successfully obtain a Kerberos Ticket. If you do not then the initial part of the authentication handshake may fail.

When using NTLM, the username can be specified simply as the username without the domain name should the server be part of a single domain and forest.

To specify the domain name use either Down-Level Logon Name or UPN (User Principal Name) formats. For example `EXAMPLE\user` and `user@example.com` respectively.

Some HTTP servers (on Windows) support inclusion of the domain for Basic authentication as well.


<br/>

### `Method User:THttpRequest(user:String)`

Sets the user for HTTP authentication.

When using Kerberos V5 authentication with a Windows based server, you should specify the username part with the domain name in order
for the server to successfully obtain a Kerberos Ticket. If you do not then the initial part of the authentication handshake may fail.

When using NTLM, the username can be specified simply as the username without the domain name should the server be part of a single domain and forest.

To specify the domain name use either Down-Level Logon Name or UPN (User Principal Name) formats. For example `EXAMPLE\user` and `user@example.com` respectively.

Some HTTP servers (on Windows) support inclusion of the domain for Basic authentication as well.


<br/>

### `Method Password:THttpRequest(password:String)`

Sets the password for HTTP authentication.

<br/>

### `Method BearerToken:THttpRequest(token:String)`

Sets a Bearer token for OAuth 2.0 authentication.

<br/>

### `Method FollowRedirects:THttpRequest(follow:Int)`

Sets whether the request should follow HTTP redirects automatically.

Defaults to [True](../../../brl/brl.blitz/#true).


<br/>

### `Method WithRetry:THttpRequest(policy:TRetryPolicy)`

Sets the retry policy for the HTTP request.

<br/>

### `Method UserAgent:THttpRequest(userAgent:String)`

Sets the User-Agent header for the HTTP request.

<br/>

### `Method GetPath:String()`

Returns the path component of the URL for the HTTP request.

<br/>

### `Method GetQuery:String()`

Returns the query component of the URL for the HTTP request.

<br/>

### `Method GetScheme:String()`

Returns the URL scheme (e.g., "http" or "https").

<br/>

### `Method OutputStream:THttpRequest(s:TStream)`

Sets the output stream where the response body will be written.

If not set, the response body will be stored in memory and can be accessed via the <b>THttpResponse</b> object.


<br/>

### `Method Cookie:THttpRequest(cookie:THttpCookie)`

Adds a cookie to the request.

<br/>

### `Method GetUrl:TUrl()`

Returns the URL for the HTTP request.

<br/>

### `Method IsFollowingRedirects:Int()`

Returns whether the request is set to follow HTTP redirects automatically.

<br/>

### `Method Verbose:THttpRequest(enable:Int)`

Enables or disables verbose output for the request.

Useful for debugging purposes.


<br/>

### `Method Send:THttpResponse()`

Sends the HTTP request and returns the response.

<br/>

### `Method SendAsync(listener:ICompleteListener)`

Sends the HTTP request asynchronously.

The provided listener will be called upon completion of the request.


<br/>

### `Method Response:THttpResponse()`

Returns the HTTP response associated with this request.

<br/>

### `Method IsSucceeded:Int()`

Returns whether the HTTP request was successful.

<br/>

### `Method IsFailed:Int()`

Returns whether the HTTP request failed.

<br/>

