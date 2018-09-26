---
id: tcp_tutorial
title: TCP Socket Programming
sidebar_label: TCP Socket Programming
---

## Introduction

If you haven't read it yet, see the [Introduction to Network Programming](network_programming.md) tutorial for a brief
introduction to using Sockets in BlitzMax.

## Connecting to a Server

Connecting to a remote server requires 2 things, an IP address and a port number. This is the server address information.
If you remember from earlier, we created a `TAddrInfo` object in order to create our socket the way we want.

We can continue to use this "hint" to find out about the remote server we want to connect to, and for our example we'll
use "www.google.com".

### Obtaining Address Information

BlitzMax has a helpful function `AddrInfo` which will get us an array of all the possible addresses and ports that apply
to our "hint" :

```blitzmax
AddrInfo:TAddrInfo[](host:String, service:String, hints:TAddrInfo)
```
The array of `TAddrInfo` objects will contain IP addresses, port numbers and other useful bits of information about the
remote server, all of which will come in handy later.

For our connection to the webserver at "www.google.com", we can try port 80, which is the standard port for HTTP connections.
As well as accepting port numbers, the `service` argument can also include the names of specific services, like for example
"http".

When applied to our example client, it looks like this:

```blitzmax
Local hints:TAddrInfo = New TAddrInfo(AF_INET_, SOCK_STREAM_)

Local socket:TSocket = TSocket.Create(hints)

If Not socket Then
    Print "Unable to create socket."
    End
End If

Print "Socket Created"

Local host:String = "www.google.com"
Local port:Int = 80

Local infos:TAddrInfo[] = AddrInfo(host, port, hints)

If Not infos Then
    Print "Hostname could not be resolved."
    End
End If

' we'll try the first one
Local info:TAddrInfo = infos[0]

Print "IP address of " + host + " is " + info.HostIp()
```
Note again that we check that `AddrInfo` actually returned something, before we carry on. It's good practice to handle
errors at every opportunity.

### Making a Connection

Now that we have everything we need, we can now attempt to connect to the remote server with our socket by calling the
`Connect` method:

```blitzmax
Connect:Int( addrInfo:TAddrInfo )
```
The `Connect` method takes a `TAddrInfo` object as an argument, returning True if the connection succeeded. As we
already have a valid `TAddrInfo` describing the remote server (including the protocol, socket type, etc to use) we can
simply pass that in and wait for a successful response:

```blitzmax
Local hints:TAddrInfo = New TAddrInfo(AF_INET_, SOCK_STREAM_)

Local socket:TSocket = TSocket.Create(hints)

If Not socket Then
    Print "Unable to create socket."
    End
End If

Print "Socket Created"

Local host:String = "www.google.com"
Local port:Int = 80

Local infos:TAddrInfo[] = AddrInfo(host, port, hints)

If Not infos Then
    Print "Hostname could not be resolved."
    End
End If

' we'll try the first one
Local info:TAddrInfo = infos[0]

Print "IP address of " + host + " is " + info.HostIp()

If Not socket.Connect(info) Then
    Print "Error connecting to remote"
    End
End If

Print "Socket connected to " + host + " on ip " + socket.RemoteIp()
```
If we run the program, we will see something like the following output ::

    Executing:untitled1.exe
    Socket Created
    IP address of www.google.com is 172.217.23.36
    Socket connected to www.google.com on ip 172.217.23.36


> The concept of connections apply to SOCK_STREAM/TCP types of sockets, where a connection means a reliable stream
> of data, such that there can be multiple such streams each having communication of its own. Think of this as a pipe
> which is not interfered by data from other pipes. Another important property of stream connections is that packets
> have an "order" or "sequence".

> Other sockets like UDP , ICMP , ARP don't have a concept of "connection". These are non-connection based
> communication protocols, which means you keep sending or receiving packets from anybody and everybody.

## Sending Data

The method `Send` will send data to the remote server.

```blitzmax
Send:Size_T( buf:Byte Ptr, count:Size_T, flags:Int = 0 )
```
`buf` is a block of data to send over the socket, and `count` is the size in bytes of that data.

We'll now send some text to google.com, in this case "GET / HTTP/1.1~r~n~r~n", which is an HTTP command for fetching the
root page of a website:

```blitzmax
Local hints:TAddrInfo = New TAddrInfo(AF_INET_, SOCK_STREAM_)

Local socket:TSocket = TSocket.Create(hints)

If Not socket Then
    Print "Unable to create socket."
    End
End If

Print "Socket Created"

Local host:String = "www.google.com"
Local port:Int = 80

Local infos:TAddrInfo[] = AddrInfo(host, port, hints)

If Not infos Then
    Print "Hostname could not be resolved."
    End
End If

' we'll try the first one
Local info:TAddrInfo = infos[0]

Print "IP address of " + host + " is " + info.HostIp()

If Not socket.Connect(info) Then
    Print "Error connecting to remote"
    End
End If

Print "Socket connected to " + host + " on ip " + socket.RemoteIp()

' send some data to the remote server
Local message:String = "GET / HTTP/1.1~r~n~r~n"

If Not socket.Send(message, Size_T(message.length), 0) Then
    Print "Send failed."
    End
End If

Print "Send successful"
```

## Receiving Data

Once you've sent some data, you may wish to process any responses from the remote system. To do this, you can call the
`Recv` method:

```blitzmax
Recv:Size_T( buf:Byte Ptr, count:Size_T, flags:int = 0 )
```
`Recv` has a similar set of parameters as `Send`. However, the buffer that you pass into this method will be filled
with data received from the remote server:

```blitzmax
Local hints:TAddrInfo = New TAddrInfo(AF_INET_, SOCK_STREAM_)

Local socket:TSocket = TSocket.Create(hints)

If Not socket Then
    Print "Unable to create socket."
    End
End If

Print "Socket Created"

Local host:String = "www.google.com"
Local port:Int = 80

Local infos:TAddrInfo[] = AddrInfo(host, port, hints)

If Not infos Then
    Print "Hostname could not be resolved."
    End
End If

' we'll try the first one
Local info:TAddrInfo = infos[0]

Print "IP address of " + host + " is " + info.HostIp()

If Not socket.Connect(info) Then
    Print "Error connecting to remote"
    End
End If

Print "Socket connected to " + host + " on ip " + socket.RemoteIp()

' send some data to the remote server
Local message:String = "GET / HTTP/1.1~r~n~r~n"

If Not socket.Send(message, Size_T(message.length), 0) Then
    Print "Send failed."
    End
End If

Print "Send successful"

' now receive some data
Local buf:Byte Ptr[1024]
Local dataLen:Size_T = socket.Recv(buf, 1024)

If Not dataLen Then
    Print "No data"
    End
End If

Print String.FromUTF8String(buf)
```

And here's the result of running the above program ::

    Executing:untitled1.exe
    Socket Created
    IP address of www.google.com is 172.217.23.36
    Socket connected to www.google.com on ip 172.217.23.36
    Send successful
    HTTP/1.1 302 Found
    Cache-Control: private
    Content-Type: text/html; charset=UTF-8
    Referrer-Policy: no-referrer
    Location: http://www.google.co.uk/
    Content-Length: 261
    Date: Tue, 18 Jun 2017 19:20:40 GMT

    <HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
    <TITLE>302 Moved</TITLE></HEAD><BODY>
    <H1>302 Moved</H1>
    The document has moved
    <A HREF="http://www.google.co.uk/">here</A>.
    </BODY></HTML>

As you can see, it doesn't take too much work to connect to and then communicate with a server.

When you are done with the socket, don't forget to close it!

```blitzmax
socket.Close()
```
Otherwise you risk leaving socket connections open for undetermined amounts of time, which is not a resource-friendly
thing to do.

### Recap

So far we have seen how to

* Create a socket
* Connect to a remote server
* Send some data
* Receive a reply

It's useful to know that your web browser also goes through the same processes when you open "www.google.com". This kind
of socket activity represents a *client*, that is, a system which connects to a remote system.

The other kind of socket activity is called a *server*, which is a system that uses sockets to receive incoming connections
and provides them with data.

## Server Programming

Setting up a server socket is a little more involved than for a client, as it requires us to perform some extra steps:

* Open a socket
* Bind to an address and port
* Listen for incoming connections
* Accept connections
* Read/Send

We'll skip opening a socket, as we've covered this earlier.

### Bind a Socket

The `Bind` method assigns a socket to an address. When a socket is initially created, it is only given socket family,
but not an assigned address. The socket must be bound to an address before the socket will accept connections to other
hosts.

```blitzmax
Bind:Int( info:TAddrInfo )
```
The `info` argument, like from our client implementation, is acquired from the call to `AddrInfo`. This object contains
all the information we require (address, port, protocol, etc) to bind the socket:

```blitzmax
Local hints:TAddrInfo = New TAddrInfo(AF_INET_, SOCK_STREAM_)

Local socket:TSocket = TSocket.Create(hints)

If Not socket Then
    Print "Unable to create socket."
    End
End If

Print "Socket Created"

Local host:String = Null ' symbolic name meaning all available interfaces
Local port:Int = 4444 ' An arbitrary non-privilaged port

Local infos:TAddrInfo[] = AddrInfo(host, port, hints)

If Not infos Then
    Print "Hostname could not be resolved."
    End
End If

' we'll try the first one
Local info:TAddrInfo = infos[0]
Print "Host address is " + info.HostIp()

If Not socket.Bind(info) Then
    Print "Bind failed."
    End
End If

Print "Socket bind complete"
```
Now that the socket id bound to an address, it's time to make the socket listen to incoming connections. By binding to
a specific IP address and port number we ensure that all incoming data which is directed towards this port number is
received by this application.

### Listen for Incoming Connections


To react to connections, the socket needs to be put into listening mode. This is accomplished by calling `Listen`:

```blitzmax
Listen:Int( backlog:Int )
```
The `backlog` parameter represents the number of pending connections that can be queued up at any one time. Any further
connections over this value will be rejected.

### Accept Connection

The next step is to accept a connection:

```blitzmax
Accept:TSocket( timeout:Int = -1, storage:TSockaddrStorage = Null )
```
The `Accept` method creates a new socket for each connection and removes the connection from the listen queue. When the
argument `timeout` is set to the default, -1, the call to `Accept` will block until there is a connection from a client
socket.
Any other value for `timeout` will result in a non-blocking mode where the method will wait up to the desired
amount of time before either timing out and returning Null, or by accepting a valid client socket.

If a `TSockaddrStorage` object is passed in as the second argument, it is filled in with the address of the connecting
socket.

```blitzmax
Local hints:TAddrInfo = New TAddrInfo(AF_INET_, SOCK_STREAM_)

Local socket:TSocket = TSocket.Create(hints)

If Not socket Then
    Print "Unable to create socket."
    End
End If

Print "Socket Created"

Local host:String = Null ' symbolic name meaning all available interfaces
Local port:Int = 4444 ' An arbitrary non-privilaged port

Local infos:TAddrInfo[] = AddrInfo(host, port, hints)

If Not infos Then
    Print "Hostname could not be resolved."
    End
End If

' we'll try the first one
Local info:TAddrInfo = infos[0]
Print "Host address is " + info.HostIp()

If Not socket.Bind(info) Then
    Print "Bind failed."
    End
End If

Print "Socket bind complete"

socket.Listen(10)
Print "Socket now listening"

' wait to accept a connection - blocking call
Local client:TSocket = socket.Accept()

Print "Connected with " + client.RemoteIp() + ":" + client.RemotePort()
```
On running the server program you should see something like ::

    Executing:untitled1.exe
    Socket Created
    Host address is 127.0.0.1
    Socket bind complete
    Socket now listening

At this point the server is waiting for incoming connections on port 4444. We can test the connection by attempting to
use a telnet client on it in a different window ::

    telnet 127.0.0.1 4444

This should result in the server output displaying some new information at the end ::

    Connected with 127.0.0.1:23488

As we can see, the client connected successfully to the server!

We accepted the incoming connection but closed it immediately. To be a little more productive we can provide a little
interaction by replying to anything that the client sends over our connection.

To enable this, we first wait to receive some data, before sending it back to the client like an echo:

```blitzmax
Local hints:TAddrInfo = New TAddrInfo(AF_INET_, SOCK_STREAM_)

Local socket:TSocket = TSocket.Create(hints)

If Not socket Then
    Print "Unable to create socket."
    End
End If

Print "Socket Created"

Local host:String = Null ' symbolic name meaning all available interfaces
Local port:Int = 4444 ' An arbitrary non-privilaged port

Local infos:TAddrInfo[] = AddrInfo(host, port, hints)

If Not infos Then
    Print "Hostname could not be resolved."
    End
End If

' we'll try the first one
Local info:TAddrInfo = infos[0]
Print "Host address is " + info.HostIp()

If Not socket.Bind(info) Then
    Print "Bind failed."
    End
End If

Print "Socket bind complete"

socket.Listen(10)
Print "Socket now listening"

' wait to accept a connection - blocking call
Local client:TSocket = socket.Accept()

Print "Connected with " + client.RemoteIp() + ":" + client.RemotePort()

' have a chat with the client
Local data:Byte[1024]
Local size:Size_T = client.Recv(data, Size_T(data.length))

client.Send(data, size)

client.Close()
socket.Close()
```
The result of this can be seen on the client side output ::

    $ telnet 127.0.0.1 4444
    Trying 127.0.0.1...
    Connected to 127.0.0.1.
    Escape character is '^]'.
    Hello
    Hello
    Connection closed by foreign host.

> This example doesn't work so well with the standard Windows telnet client. On Linux/OSX systems it tends to work
> as in the example output above.

Although our test was successful, normal servers don't shutdown after the first connection, and continue to run, serving
multiple client requests over a period of time. So we need to keep our server running.
The simplest way to achieve this is to put the call to `Accept` in a loop so that it can keep receiving connections
indefinitely.

### Live Server

So, a live server will always be running, waiting for new connection. But how to manage these multiple connections?

One way to achieve this is to process each client connection separately in a new thread, which is what we'll do now.
To keep things simple, we will use a thread pool to take care of the thread stuff.

When a client connects to the server, a "task" will be created, executed by the thread pool, and will be responsible for
handling messages to and from the client. When the client types "enter" twice in a row, the server will close the
connection, freeing up the socket and the thread for future connections.

Once the connection is handed over to the thread task, the server returns to accepting more connections.

```blitzmax
Local hints:TAddrInfo = New TAddrInfo(AF_INET_, SOCK_STREAM_)

Local socket:TSocket = TSocket.Create(hints)

If Not socket Then
    Print "Unable to create socket."
    End
End If

Print "Socket Created"

Local host:String = Null ' symbolic name meaning all available interfaces
Local port:Int = 4444 ' An arbitrary non-privilaged port

Local infos:TAddrInfo[] = AddrInfo(host, port, hints)

If Not infos Then
    Print "Hostname could not be resolved."
    End
End If

' we'll try the first one
Local info:TAddrInfo = infos[0]
Print "Host address is " + info.HostIp()

If Not socket.Bind(info) Then
    Print "Bind failed."
    End
End If

Print "Socket bind complete"

socket.Listen(10)
Print "Socket now listening"

' set up server thread pool
Local pool:TThreadPoolExecutor = TThreadPoolExecutor.newFixedThreadPool(4)

While True

    ' wait to accept a connection - blocking call
    Local client:TSocket = socket.Accept()

    Print "Connected with " + client.RemoteIp() + ":" + client.RemotePort()

    pool.execute(New TServerTask(client))

Wend

pool.shutdown()
socket.Close()


' helper task for processing client connections
Type TServerTask Extends TRunnable

    Field client:TSocket

    Method New(client:TSocket)
        Self.client = client
    End Method

    Method run()

        Local s:String = "Welcome to the server. Type something and hit enter (Double enter to quit)~n~n"
        client.Send(s, Size_T(s.length))

        Local last:String

        ' loop forever, or until the user types enter twice.
        While True

            Local data:Byte[1024]
            Local size:Size_T = client.Recv(data, Size_T(data.length)) ' blocking call

            ' no more data from client!
            If Not size Then
                Exit
            End If

            Local msg:String = String.FromCString(data)

            ' close the connection if the client hits enter twice in a row
            If (last = "~n" Or last = "~r~n") And (msg = "~n" Or msg = "~r~n")  Then
                Exit
            End If

            last = msg

            Local reply:String = "OK..." + msg
            client.Send(reply, Size_T(reply.length))

        Wend

        Print "Closing connection with " + client.RemoteIp() + ":" + client.RemotePort()

        client.Close()
    End Method

End Type
```
The following server output shows a typical session of clients connecting and disconnecting ::

    Executing:untitled1.exe
    Socket Created
    Host address is 127.0.0.1
    Socket bind complete
    Socket now listening
    Connected with 192.168.1.65:34024
    Connected with 127.0.0.1:38632
    Closing connection with 192.168.1.65:34024
    Closing connection with 127.0.0.1:38632
    Connected with 127.0.0.1:44264
    Connected with 127.0.0.1:45800
    Closing connection with 127.0.0.1:44264
    Closing connection with 127.0.0.1:45800

## Conclusion

And that wraps up our introduction to TCP sockets. Hopefully you'll be able to use some of what you've learned here in
your own projects now!
