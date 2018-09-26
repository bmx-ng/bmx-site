---
id: network_programming
title: Introduction to Network Programming in BlitzMax
sidebar_label: Network Programming
---

## Sockets

Sockets are the fundamental "things" behind the network communication performed by your computer. For example, when your
web browser displays the page for "www.google.com", it opens a socket and connects to google.com in order to fetch everything.

Sockets are the end-point of a two-way communication link, where each socket listens for incoming messages, and replies
with appropriate responses, thereby establishing bidirectional communication.

There are several different kinds of sockets, but for this guide we are going to focus on the two most common kinds you'll
come across in BlitzMax, stream (TCP) sockets and datagram (UDP) sockets :

## Creating a Socket

Before we create a socket, we define a `TAddrInfo` object to provide hints for the kind of socket we want to create.
This is the modern way to handle sockets, and it simplifies a lot of the coding we'll need to do when dealing with them.

```blitzmax
Local hints:TAddrInfo = New TAddrInfo(AF_INET_, SOCK_STREAM_)
```
The first argument `AF_INET_` requests that the socket use the IPv4 protocol. For IPv6 you can use `AF_INET6_`, and if you
don't care which protocol to use, you can use `AF_UNSPEC_`, which will allow you to use either.

The second argument specifies the kind of socket we want to create. For UDP we could also use `SOCK_DGRAM_`.

To create our stream socket, we use the `TSocket.Create` function, passing in our hints as shown in the example below:

```blitzmax
' create an AF_INET (IPv4), STREAM socket (TCP)
Local hints:TAddrInfo = New TAddrInfo(AF_INET_, SOCK_STREAM_)

Local socket:TSocket = TSocket.Create(hints)

Print "Socket Created"
```
The `TSocket.Create` function creates a socket and returns a `TSocket` object. You use this object for all of your
subsequent socket communications.

## Handling Errors

If there was a problem getting a socket, `TSocket.Create` will return `Null`, which you should really handle
before trying to use your socket object:

```blitzmax
Local hints:TAddrInfo = New TAddrInfo(AF_INET_, SOCK_STREAM_)

Local socket:TSocket = TSocket.Create(hints)

If Not socket Then
    Print "Unable to create socket."
    End
End If

Print "Socket Created"
```
