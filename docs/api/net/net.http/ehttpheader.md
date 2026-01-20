---
id: ehttpheader
title: EHttpHeader
sidebar_label: EHttpHeader
---

HTTP headers.


Represents standard HTTP headers that can be used in requests and responses.

| Header | String | Description |
|--------|--------|-------------|
| Accept | "Accept" | Specifies the media types that are acceptable for the response. |
| AcceptCharset | "Accept-Charset" | Specifies the character sets that are acceptable for the response. |
| AcceptEncoding | "Accept-Encoding" | Specifies the content encodings that are acceptable for the response. |
| AcceptLanguage | "Accept-Language" | Specifies the preferred languages for the response. |
| AcceptRanges | "Accept-Ranges" | Indicates that the server supports range requests for the resource. |
| AccessControlAllowCredentials | "Access-Control-Allow-Credentials" | Indicates whether the response to the request can be exposed when the credentials flag is true. |
| AccessControlAllowHeaders | "Access-Control-Allow-Headers" | Specifies the headers that can be used during the actual request. |
| AccessControlAllowMethods | "Access-Control-Allow-Methods" | Specifies the methods allowed when accessing the resource in response to a preflight request. |
| AccessControlAllowOrigin | "Access-Control-Allow-Origin" | Specifies the origin that is allowed to access the resource. |
| AccessControlExposeHeaders | "Access-Control-Expose-Headers" | Indicates which headers can be exposed as part of the response by listing their names. |
| AccessControlMaxAge | "Access-Control-Max-Age" | Indicates how long the results of a preflight request can be cached. |
| AccessControlRequestHeaders | "Access-Control-Request-Headers" | Used in preflight requests to indicate which HTTP headers will be used when the actual request is made. |
| AccessControlRequestMethod | "Access-Control-Request-Method" | Used in preflight requests to indicate which HTTP method will be used when the actual request is made. |
| Age | "Age" | Indicates the age of the object in a proxy cache. |
| Allow | "Allow" | Lists the set of methods supported by the resource. |
| AltSvc | "Alt-Svc" | Indicates alternative services available for the resource. |
| Authorization | "Authorization" | Contains the credentials to authenticate a user agent with a server. |
| CAuthority | "C-Authority" | Used in HTTP CONNECT requests to specify the authority component of the target URI. |
| CMethod | "C-Method" | Used in HTTP CONNECT requests to specify the method to be used when establishing a tunnel. |
| CPath | "C-Path" | Used in HTTP CONNECT requests to specify the path component of the target URI. |
| CProtocol | "C-Protocol" | Used in HTTP CONNECT requests to specify the protocol to be used when establishing a tunnel. |
| CScheme | "C-Scheme" | Used in HTTP CONNECT requests to specify the scheme component of the target URI. |
| CStatus | "C-Status" | Used in HTTP CONNECT responses to indicate the status of the connection attempt. |
| CacheControl | "Cache-Control" | Directives for caching mechanisms in both requests and responses. |
| Connection | "Connection" | Controls whether the network connection stays open after the current transaction finishes. |
| ContentDisposition | "Content-Disposition" | Indicates if the content is expected to be displayed inline or as an attachment. |
| ContentEncoding | "Content-Encoding" | Specifies the encoding used on the data. |
| ContentLanguage | "Content-Language" | Describes the natural language(s) of the intended audience for the resource. |
| ContentLength | "Content-Length" | The size of the response body in bytes. |
| ContentLocation | "Content-Location" | Indicates an alternate location for the returned data. |
| ContentMD5 | "Content-MD5" | A base64-encoded binary MD5 sum of the content of the response. |
| ContentRange | "Content-Range" | Indicates the part of a document that the server is returning. |
| ContentTransferEncoding | "Content-Transfer-Encoding" | Specifies the encoding used to safely transfer the payload body to the user. |
| ContentType | "Content-Type" | Indicates the media type of the resource. |
| Cookie | "Cookie" | Contains stored HTTP cookies previously sent by the server with the Set-Cookie header. |
| Date | "Date" | The date and time at which the message was originated. |
| ETag | "ETag" | A unique identifier for a specific version of a resource. |
| Expect | "Expect" | Indicates that particular server behaviors are required by the client. |
| Expires | "Expires" | Gives the date/time after which the response is considered stale. |
| Forwarded | "Forwarded" | Discloses information about the client and proxy servers. |
| From | "From" | The email address of the user making the request. |
| Host | "Host" | Specifies the domain name of the server and the TCP port number on which the server is listening. |
| Http2Settings | "HTTP2-Settings" | Contains HTTP/2 settings that are to be applied to the connection. |
| Identity | "Identity" | Indicates that no encoding has been performed on the entity body. |
| IfMatch | "If-Match" | Makes the request conditional on the recipient matching one of the listed ETags. |
| IfModifiedSince | "If-Modified-Since" | Makes the request conditional on the resource being modified since the specified date. |
| IfNoneMatch | "If-None-Match" | Makes the request conditional on the recipient not matching any of the listed ETags. |
| IfRange | "If-Range" | Makes the request conditional: if the entity is unchanged, send the part(s) of the entity that are requested; otherwise, send the entire new entity. |
| IfUnmodifiedSince | "If-Unmodified-Since" | Makes the request conditional on the resource not being modified since the specified date. |
| KeepAlive | "Keep-Alive" | Used to signal that the connection should be kept alive after the current request/response. |
| LastModified | "Last-Modified" | The date and time at which the resource was last modified. |
| Link | "Link" | Used to define relationships between the current document and other resources. |
| Location | "Location" | Used in redirection or when a new resource has been created. |
| MaxForwards | "Max-Forwards" | Limits the number of times a request can be forwarded by proxies. |
| MimeVersion | "Mime-Version" | Indicates the version of MIME used in the message. |
| Negotiate | "Negotiate" | Used to initiate content negotiation. |
| Origin | "Origin" | Indicates the origin of the request, typically used in CORS requests. |
| Pragma | "Pragma" | Implementation-specific directives that might apply to any recipient along the request/response chain. |
| ProxyAuthenticate | "Proxy-Authenticate" | Request authentication to access a proxy. |
| ProxyAuthorization | "Proxy-Authorization" | Contains the credentials to authenticate a user agent with a proxy server. |
| ProxyConnection | "Proxy-Connection" | Controls whether the network connection to the proxy stays open after the current transaction finishes. |
| Range | "Range" | Requests only a portion of an entity. |
| Referer | "Referer" | The address of the previous web page from which a link to the currently requested page was followed. |
| RequestRange | "Request-Range" | Used to request a specific range of bytes from a resource. |
| RetryAfter | "Retry-After" | Indicates how long the user agent should wait before making a follow-up request. |
| SecWebsocketAccept | "Sec-WebSocket-Accept" | Used in the WebSocket handshake to confirm the server's acceptance of the connection. |
| SecWebsocketExtensions | "Sec-WebSocket-Extensions" | Lists the extensions that are used in the WebSocket connection. |
| SecWebsocketKey | "Sec-WebSocket-Key" | A base64-encoded value that is used in the WebSocket handshake to establish the connection. |
| SecWebsocketSubprotocol | "Sec-WebSocket-Subprotocol" | Lists the subprotocols that are used in the WebSocket connection. |
| SecWebsocketVersion | "Sec-WebSocket-Version" | Indicates the WebSocket protocol version that the client wishes to use. |
| Server | "Server" | Contains information about the software used by the origin server to handle the request. |
| ServletEngine | "Servlet-Engine" | Identifies the servlet engine handling the request. |
| SetCookie | "Set-Cookie" | Sends cookies from the server to the user agent. |
| SetCookie2 | "Set-Cookie2" | An updated version of the Set-Cookie header, used to send cookies from the server to the user agent. |
| StrictTransportSecurity | "Strict-Transport-Security" | Informs browsers that the site should only be accessed using HTTPS. |
| TE | "TE" | Indicates what transfer encodings the user agent is willing to accept. |
| TimingAllowOrigin | "Timing-Allow-Origin" | Indicates which origins are allowed to see the timing information for the resource. |
| Trailer | "Trailer" | Indicates that the given set of header fields is present in the trailer of a message encoded with chunked transfer coding. |
| TransferEncoding | "Transfer-Encoding" | Specifies the form of encoding used to safely transfer the payload body to the user. |
| Upgrade | "Upgrade" | Asks the server to switch to another protocol. |
| UserAgent | "User-Agent" | Contains information about the user agent originating the request. |
| Vary | "Vary" | Indicates the set of request headers that determine whether a cached response can be used rather than requesting a fresh one from the origin server. |
| Via | "Via" | Informs the server of proxies through which the request was sent. |
| Warning | "Warning" | Carries additional information about the status or transformation of a message that might not be reflected in the message itself. |
| WWWAuthenticate | "WWW-Authenticate" | Indicates the authentication scheme that should be used to access the requested resource. |
| XForwardedFor | "X-Forwarded-For" | Identifies the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer. |
| XForwardedHost | "X-Forwarded-Host" | Identifies the original host requested by the client in the Host HTTP request header. |
| XForwardedPort | "X-Forwarded-Port" | Identifies the original port requested by the client. |
| XForwardedProto | "X-Forwarded-Proto" | Identifies the protocol (HTTP or HTTPS) that a client used to connect to the proxy or load balancer. |
| XForwardedServer | "X-Forwarded-Server" | Identifies the original server name requested by the client. |
| XPoweredBy | "X-Powered-By" | Indicates the technology (e.g., framework, server) used by the web server. |



