---
id: net.http
title: Net.Http
sidebar_label: Introduction
---


Modern software frequently needs to communicate over the network, whether to fetch data,
submit forms, interact with web services, or integrate with REST APIs. Most of these tasks
are performed using HTTP, the protocol that underpins the World Wide Web.

While HTTP is conceptually simple, real-world usage quickly becomes more complex. Tasks such
as authentication, session handling, secure connections, and streaming large amounts of
data all require the client to manage state and configuration across multiple requests.

The [Net.Http](../net/net_http.md) module provides a modern HTTP client API for BlitzMax, designed to support
these real-world usage patterns in a clear and structured way.

---

## Understanding HTTP at a glance

At its core, HTTP is a request–response protocol. A client sends a request to a server,
and the server replies with a response.

A request typically includes:

* A **method**, such as `GET`, `POST`, or `PUT`
* A **URL**, identifying the resource being accessed
* Optional **headers**, providing metadata
* An optional **body**, containing data sent to the server

A response includes:

* A **status code**, indicating the outcome of the request
* Response **headers**
* A response **body**, containing the returned data

Importantly, HTTP itself is **stateless**. Each request is independent, and the protocol
does not retain memory of previous interactions.

---

## Why a client abstraction matters

Although HTTP is stateless, most applications are not.

Consider a typical interaction with a web service:
- You authenticate once
- The server issues a session cookie
- Subsequent requests rely on that cookie
- Secure connections must be verified using trusted certificates
- Requests may need to share configuration or connection behaviour

Treating each HTTP request as an isolated operation makes these tasks difficult and error-prone.

[Net.Http](../net/net_http.md) addresses this by introducing a reusable **HTTP client**. The client acts as a
container for shared state and configuration, allowing multiple requests to be executed
within a consistent context.

---

## The HTTP client

An HTTP client represents your application's presence when communicating with servers.

It is responsible for:

* Managing shared state, such as cookies
* Handling secure connections and certificate verification
* Creating and executing HTTP requests
* Coordinating synchronous or asynchronous execution

Clients are typically long-lived objects and are reused for multiple requests. This mirrors
how real-world applications interact with services over time, rather than through isolated
one-off calls.

### Creating and managing an HTTP client

In [Net.Http](../net/net_http.md), an HTTP client is an active component. Internally, it owns a processing thread
that is responsible for driving request execution, handling asynchronous operations, and
managing shared state such as cookies.

Before a client can be used, it must be explicitly started.

```blitzmax
Framework Net.Http

Local client:THttpClient = New THttpClient
client.Start()
```

Calling `Start()` initialises the client's internal processing thread. Once started, the
client is ready to create and execute requests. Applications should generally start the
client early and keep it alive for as long as HTTP communication is required.

When the client is no longer needed, it should be shut down explicitly:

```blitzmax
client.Shutdown()
```

This stops the processing thread and releases any resources associated with the client.

---

### Creating requests

HTTP requests are created by the client itself. This ensures that each request is correctly
associated with the client's configuration and execution context, including cookies,
security settings, and execution behaviour.

The most general way to create a request is to ask the client to construct one for a given
URL:

```blitzmax
Local request:THttpRequest = client.NewRequest("https://example.com")
```

At this stage, no network activity has occurred. The request object represents a configurable
HTTP operation that can be modified before it is sent. This allows applications to set
headers, choose an HTTP method, or attach request content as needed.

For convenience, [THttpClient](../../net/net.http/thttpclient) also provides helper methods for creating common request
types:

```blitzmax
Local getReq:THttpRequest  = client.Get("https://example.com/data")
Local postReq:THttpRequest = client.Post("https://example.com/upload")
Local putReq:THttpRequest  = client.Put("https://example.com/resource")
```

These helper methods create requests with the appropriate HTTP method already selected,
reducing boilerplate for common use cases. Aside from the predefined method, the returned
request objects behave exactly like those created with `NewRequest()` and can be further
configured in the same way.

Once a request has been created and configured, it can be sent either synchronously or
asynchronously, depending on the needs of the application.

---

### Sending requests synchronously

The simplest way to execute a request is to send it synchronously. In this mode, the call
blocks until the server responds.

```blitzmax
Local response:THttpResponse = request.Send()
```

The returned response object provides access to the HTTP status code, response headers, and
any returned data. Synchronous execution is useful for simple tools, scripts, or situations
where blocking behaviour is acceptable.

---

### Sending requests asynchronously

For non-blocking operation, requests can be sent asynchronously. In this mode, `SendAsync()`
returns immediately, and the client's internal processing thread performs the network work in
the background.

Because the request completes later, asynchronous sending uses a completion callback. You
provide an [ICompleteListener](../../net/net.http/icompletelistener), which will be notified once the request has finished (whether
it succeeded or failed).

```blitzmax
Type TMyListener Implements ICompleteListener

	Method OnComplete(result:THttpResult)
		' The result contains both the original request and the response (if any).
		If result.IsSucceeded() Then
			Print "Request succeeded. Status = " + result.response.GetStatus()
		Else
			Print "Request failed."
		End If
	End Method

End Type
```

With a listener defined, you can send a request asynchronously like this:

```blitzmax
Local request:THttpRequest = client.NewRequest("https://example.com")
request.SendAsync(New TMyListener)
```

When the request completes, `OnComplete()` is called with a [THttpResult](../../net/net.http/thttpresult) instance.

`THttpResult` provides:
- `request` — the original [THttpRequest](../../net/net.http/thttprequest) (useful when issuing multiple requests with one listener)
- `response` — the [THttpResponse](../../net/net.http/thttpresponse), if one was received
- `IsSucceeded()` / `IsFailed()` — convenience methods to test whether the operation produced a
  successful HTTP response

A common pattern is to use the listener to branch on success/failure, and then inspect the
response when successful (status code, headers, and body/stream), or perform error handling
when not.

Because the callback is invoked by the client's processing thread, it is good practice to
keep `OnComplete()` fast and avoid long-running work there. If you need to update UI state
or perform expensive processing, queue that work back to your application's main logic.

---

### Client lifecycle and reuse

A single [THttpClient](../../net/net.http/thttpclient) instance is typically reused for multiple requests. This allows shared
state—such as cookies, connection settings, and security configuration—to persist across
requests automatically.

The typical lifecycle is therefore:

1. Create the client
2. Start the client
3. Create and send one or more requests
4. Shut down the client when finished

This model closely reflects how real-world HTTP clients operate and provides a clean,
predictable structure for managing network communication.


---

## Configuring requests and handling responses

Once a request has been created, it can be configured before being sent. This configuration
step is where most of the useful work happens: selecting an HTTP method, setting headers,
supplying request data, and deciding how the response should be handled.

In [Net.Http](../net/net_http.md), request configuration is explicit and fluent. Configuration methods return
the request itself, allowing options to be chained together in a readable way.

---

### Setting request content

Many HTTP requests include a body. For example, `POST` and `PUT` requests often send form
data, JSON, or binary content to the server.

A request body can be provided in several forms:

* A [String](../../brl/brl.blitz/#string)
* A [Byte](../../brl/brl.blitz/#byte) array - `Byte[]`
* A [TStream](../../brl/brl.stream/tstream)#
* A custom [TContent](../../net/net.http/tcontent) implementation

The simplest approach is to supply a string body directly:

```blitzmax
client.Post("https://example.com/api").SetContent("Hello, world!").Send()

```

For binary data, a byte array can be used instead:

```blitzmax
Local data:Byte[] = LoadByteArray("payload.bin")

client.Post("https://example.com/upload").SetContent(data).Send()

```

For larger payloads or streaming data, a [TStream](../../brl/brl.stream/tstream) can be supplied. This allows data to be
read incrementally rather than being held entirely in memory.

Custom request body behaviour can be implemented by providing a [TContent](../../net/net.http/tcontent) instance. This
is useful when generating data dynamically or integrating with non-standard data sources.

---

### Streaming response data

By default, response data is collected in memory using an internal "memory sink". This is
convenient for small responses and allows the response body to be accessed directly once
the request completes.

For larger responses, it is often preferable to stream the response data directly to an
output stream. This avoids buffering the entire response in memory.

```blitzmax
Local out:TStream = WriteFile("download.dat")

client.Get("https://example.com/large-file").SetOutputStream(out).Send()

out.Close()
```

When an output stream is provided, response data is written to the stream as it is received.
The response object still provides access to metadata such as status and headers.

---

### Inspecting the response

After a request is sent synchronously, a [THttpResponse](../../net/net.http/thttpresponse) object, is returned. The response contains
information about the outcome of the request, including:

* The HTTP status code
* Response headers
* Access to the response body or associated stream

Applications typically begin by checking whether the response indicates success, and then
process the returned data accordingly.

For asynchronous requests, response handling is performed via the completion listener, which
receives a [THttpResult](../../net/net.http/thttpresult) containing both the request and the response.

---

### Defaults and client-level configuration

Many request options can also be configured at the client level. When set on the client,
these options become defaults for any new requests created by that client instance.

This makes it easy to establish common behaviour—such as headers, timeouts, or streaming
preferences—once, while still allowing individual requests to override those settings when
needed.

This layered configuration model allows applications to combine sensible defaults with
fine-grained control over individual HTTP operations.

---

### Execution as the final step

A key design principle in [Net.Http](../net/net_http.md) is that configuration and execution are separate phases.
No network activity occurs until a request is explicitly sent using `Send()` or `SendAsync()`.

This separation makes request behaviour easier to reason about, simplifies debugging, and
encourages clear, maintainable HTTP code.

---

## Working with data streams

Not all HTTP communication involves small, in-memory payloads. Downloads, uploads, and API
responses can be large, or even unbounded in size.

[Net.Http](../net/net_http.md) integrates with BlitzMax's stream system to support streaming request and response
bodies. This allows applications to:

* Upload data incrementally
* Process responses as they arrive
* Avoid loading entire payloads into memory

Streaming support is particularly useful for large files, media content, or long-running
HTTP connections.

---

## Cookies and stateful communication

HTTP is a stateless protocol: each request is independent, and the server does not
automatically remember previous interactions. In practice, however, many applications
require state to be preserved across multiple requests.

Cookies are the primary mechanism used by HTTP servers to maintain this state.

---

### What cookies are used for

When a server wants to associate multiple requests with the same client, it sends one or
more cookies in its response. These cookies typically contain identifiers such as session
tokens or user preferences.

On subsequent requests, the client sends the relevant cookies back to the server, allowing
the server to recognise the client and continue the interaction.

This mechanism is commonly used for:

* Login and authentication sessions
* Maintaining user-specific state
* Interacting with stateful web APIs

---

### Automatic cookie handling

In [Net.Http](../net/net_http.md), cookies are managed by the HTTP client. When a response includes cookies, the
client stores them automatically and applies them to future requests when appropriate.

This means that, in most cases, applications do not need to handle cookies explicitly. Once
a client has performed an initial request—such as a login—subsequent requests issued through
the same client instance automatically include the necessary cookies.

```blitzmax
client.Start()

client.Post("https://example.com/login").SetContent("user=alice&password=secret").Send()

' Cookies set by the login response are now stored in the client

client.Get("https://example.com/account").Send()

client.Shutdown()
```

In this example, the second request automatically includes any cookies set by the login
response, allowing the server to recognise the authenticated session.

---

### Cookie scope and lifetime

Cookies are not sent indiscriminately. Each cookie defines rules that control when it is
included in a request, such as:

* The domain and path it applies to
* Whether it requires a secure (HTTPS) connection
* Its expiration time or maximum age

The client enforces these rules automatically, ensuring that cookies are only sent when they
are valid and applicable to the target request.

---

### Inspecting and managing cookies

Although automatic handling is sufficient for most use cases, applications may sometimes
need to inspect or manipulate cookies directly. For example, an application might want to:

* Examine the contents of a session cookie
* Clear cookies to force re-authentication
* Manage multiple independent sessions explicitly

[Net.Http](../net/net_http.md) exposes cookies as first-class objects, allowing applications to access their
properties and manage them as needed. Cookies are stored in a client-associated cookie store,
which provides controlled access to the client's cookie state.

Direct cookie manipulation should generally be the exception rather than the norm, but the
API allows it when finer control is required.

---

### Cookies and client reuse

Because cookies are stored on the client, reusing the same [THttpClient](../../net/net.http/thttpclient) instance is key to
maintaining state across requests.

If a new client is created, it starts with an empty cookie store. This makes it easy to
create isolated clients when separate sessions are required, such as when interacting with
multiple accounts or services concurrently.

---

## Secure connections and trust

Many HTTP interactions take place over HTTPS, which uses TLS to provide encryption and
authentication. Encryption protects data in transit, while authentication ensures that the
client is communicating with the intended server.

Authentication relies on trust. Before a secure connection can be established, the client
must decide which certificate authorities (CAs) it considers trustworthy.

---

### Certificate authorities and trust

When an HTTPS connection is established, the server presents a certificate identifying
itself. That certificate is signed by a certificate authority, which acts as a trusted third
party.

To verify the server's identity, the client checks that:

* The certificate is valid and not expired
* The certificate matches the requested host name
* The certificate chain is rooted in a trusted CA

If any of these checks fail, the connection cannot be trusted and the request fails.

---

### Default trust behaviour

By default, [Net.Http](../net/net_http.md) attempts to use the platform's native certificate authority store.
These native stores provide access to the system-level trust configuration maintained by the
operating system.

Using the system CA store allows HTTPS connections to behave consistently with other tools
and applications on the same platform, and is suitable for most interactions with public
web services.

Native trust stores are selected automatically and require no additional configuration in
common cases.

---

### Overriding the certificate authority store

In some situations, the default system trust store is not sufficient or appropriate.
Examples include:

* Connecting to servers using private or self-signed certificates
* Using an internal PKI
* Shipping an application with a fixed set of trusted certificates
* Restricting trust to a specific CA bundle

For these cases, [Net.Http](../net/net_http.md) allows applications to explicitly configure which certificate
authorities the client should trust.

Trust configuration is applied at the client level and must be set **before the client is
started**.

---

### Supplying custom certificate authorities

The HTTP client provides several ways to supply custom certificate authorities, depending
on how certificates are stored or obtained.

A CA bundle can be loaded from a file path:

```blitzmax
Local client:THttpClient = New THttpClient
client.SetCACerts("certs/ca-bundle.pem")
client.Start()
```

Certificates can also be provided directly as raw data:

```blitzmax
Local certs:Byte[] = LoadByteArray("ca.pem")

Local client:THttpClient = New THttpClient
client.SetCACerts(certs)
client.Start()
```

For streaming or dynamically generated certificate data, a [TStream](../../brl/brl.stream/tstream) can be used:

```blitzmax
Local stream:TStream = ReadFile("ca.pem")

Local client:THttpClient = New THttpClient
client.SetCACerts(stream)
client.Start()
```

Finally, advanced use cases can supply a [TCAStore](../../net/net.http/tcastore) directly. This allows applications to
construct or customise a certificate store programmatically, or to reuse an existing store
instance.

```blitzmax
Local store:TMyCAStore = New TMyCAStore
' configure store here

Local client:THttpClient = New THttpClient
client.SetCACerts(store)
client.Start()

Type TMyCAStore Extends TCAStore
' ... implement
End Type
```

In all cases, providing custom certificate authorities replaces the default native trust
store for that client instance.

---

### Trust as part of client identity

Because certificate authorities are configured on the client, different clients can operate
under different trust models within the same application.

For example, one client might trust only public certificate authorities, while another trusts
a private internal CA. Keeping trust configuration at the client level makes these boundaries
explicit and easy to reason about.

---

### Secure requests in practice

Once trust is configured and the client has been started, HTTPS requests are created and
sent in the same way as non-secure requests.

```blitzmax
client.Get("https://example.com/secure-endpoint")
	.Send()
```

Certificate verification occurs automatically during connection setup. If verification
fails, the request fails and no response is produced.

---

## Implementation notes

Internally, the module is backed by [Net.libcurl](../net/net_libcurl.md), a mature and widely used networking library.
This provides a robust foundation for HTTP communication, including support for modern
protocol features and secure transport.

The libcurl implementation details are abstracted behind the [Net.Http](../net/net_http.md) API, allowing
developers to focus on application logic rather than low-level networking concerns.

Provides classes and methods for making HTTP requests and handling responses.


## Types
| Type | Description |
|---|---|
| [THttpField](../../net/net.http/thttpfield) | An HTTP Field/Header |
| [THttpFields](../../net/net.http/thttpfields) | A collection of HTTP fields/headers. |
| [THttpClientException](../../net/net.http/thttpclientexception) | An exception representing an HTTP client error. |
| [TUrl](../../net/net.http/turl) | HTTP URL representation and builder. |
| [TUrlBuilder](../../net/net.http/turlbuilder) | HTTP URL builder. |
| [TCAStore](../../net/net.http/tcastore) | Base class for Certificate Authority (CA) stores. |
| [THttpCookie](../../net/net.http/thttpcookie) | An HTTP Cookie representation. |
| [THttpCookieBuilder](../../net/net.http/thttpcookiebuilder) | HTTP Cookie builder. |
| [THttpResult](../../net/net.http/thttpresult) | HTTP Result. |
| [THttpResponse](../../net/net.http/thttpresponse) | An HTTP Response. |
| [THttpRequest](../../net/net.http/thttprequest) | HTTP Request. |
| [THttpClient](../../net/net.http/thttpclient) | HTTP Client for sending requests and receiving responses. |
| [TContent](../../net/net.http/tcontent) | Abstract representation of HTTP request content. |
| [TStringContent](../../net/net.http/tstringcontent) | String-based HTTP request content. |
| [TStreamContent](../../net/net.http/tstreamcontent) | Stream-based HTTP request content. |
| [TBytePtrContent](../../net/net.http/tbyteptrcontent) | Byte pointer-based HTTP request content. |
| [TByteArrayContent](../../net/net.http/tbytearraycontent) | Byte array-based HTTP request content. |
| [TBankContent](../../net/net.http/tbankcontent) | Bank-based HTTP request content. |
| [TRetryPolicy](../../net/net.http/tretrypolicy) | Retry policy configuration for HTTP requests. |

## Interfaces
| Interface | Description |
|---|---|
| [ICookie](../../net/net.http/icookie) | HTTP Cookie interface |
| [ICompleteListener](../../net/net.http/icompletelistener) | Listener interface for asynchronous HTTP request completion. |

## Enums
| Enum | Description |
|---|---|
| [EHttpMethod](../../net/net.http/ehttpmethod) | HTTP methods. |
| [EHttpHeader](../../net/net.http/ehttpheader) | HTTP headers. |
| [EHttpAuthMethod](../../net/net.http/ehttpauthmethod) | Authentication methods for HTTP requests. |
| [EUrlCode](../../net/net.http/eurlcode) | URL error codes. |
| [EUrlPart](../../net/net.http/eurlpart) | URL parts identifiers. |
| [ECookieAttribute](../../net/net.http/ecookieattribute) | Cookie attributes |

