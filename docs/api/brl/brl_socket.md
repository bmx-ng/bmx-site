---
id: brl.socket
title: BRL.Socket
sidebar_label: BRL.Socket
---


## Functions

### `Function CreateUDPSocket:TSocket()`

Create a UDP socket


The new socket is not bound to any local or remote address.


#### Returns
A new socket


<br/>

### `Function CreateTCPSocket:TSocket()`

Create a TCP socket


The new socket is not bound to any local or remote address.


#### Returns
A new socket


<br/>

### `Function CloseSocket( socket:TSocket )`

Close a socket


All sockets should eventually be closed. Once closed, a socket can no longer
be used.


<br/>

### `Function BindSocket( socket:TSocket, localPort, family:Int = AF_INET_)`

Bind a socket to a local port


If <b>localPort</b> is 0, a new local port will be allocated. If <b>localPort</b> is not 0,
[BindSocket](../../brl/brl.socket/#function-bindsocket-sockettsocket-localport-familyint-afinet) will fail if there is already an application bound to <b>localPort</b>.


#### Returns
True if successful, otherwise false


<br/>

### `Function ConnectSocket( socket:TSocket, AddrInfo:TAddrInfo )`

Connect a socket to a remote ip and port


For both UDP and TCP sockets, [ConnectSocket](../../brl/brl.socket/#function-connectsocket-sockettsocket-addrinfotaddrinfo-) will fail if the specified
ip address could not be reached.

In the case of TCP sockets, [ConnectSocket](../../brl/brl.socket/#function-connectsocket-sockettsocket-addrinfotaddrinfo-) will also fail if there is
no application listening at the remote port.


#### Returns
True if successful, otherwise false


<br/>

### `Function SocketListen( socket:TSocket,backlog=0 )`

Start listening at a socket


The specified socket must be a TCP socket, and must already be bound to a local port.


<br/>

### `Function SocketAccept:TSocket( socket:TSocket,timeout=0 )`

Accept new connections on a listening socket


The specified socket must be a TCP socket, and must be listening.


#### Returns
A new socket, or Null if no connection was made in the specified timeout


<br/>

### `Function SocketConnected( socket:TSocket )`

Get socket connection status


[SocketConnected](../../brl/brl.socket/#function-socketconnected-sockettsocket-) allows you to determine if a TCP connection is still
alive or has been remotely closed.

[SocketConnected](../../brl/brl.socket/#function-socketconnected-sockettsocket-) should only be used with TCP sockets that have already
connected via [ConnectSocket](../../brl/brl.socket/#function-connectsocket-sockettsocket-addrinfotaddrinfo-) or [SocketAccept](../../brl/brl.socket/#function-socketaccepttsocket-sockettsockettimeout0-).


#### Returns
True if socket is connected


<br/>

### `Function SocketReadAvail( socket:TSocket )`

Get number of bytes available for reading from a socket

#### Returns
Number of bytes that may be read without causing the socket to block


<br/>

### `Function SocketLocalIP:String( socket:TSocket )`

Get local ip of a socket

<br/>

### `Function SocketLocalPort( socket:TSocket )`

Get local port of a socket

<br/>

### `Function SocketRemoteIP:String( socket:TSocket )`

Get remote ip of a socket

<br/>

### `Function SocketRemotePort( socket:TSocket )`

Get remote port of a socket

<br/>

### `Function DottedIP:String( ip:Int )`

Convert an ip address to a dotted string

#### Returns
Dotted string version of ip address


<br/>

### `Function DottedIPToInt:Int(addr:String)`

Converts a dotted IPv4 string to an ip address.

#### Returns
An integer version of an ip address.


<br/>

### `Function InetPton:Int(family:Int, src:String, dst:Byte Ptr)`

Converts an IP address string into a binary representation.

For AF_INET_, <b>dst</b> should be an Int or 32-bit (4 bytes) in size.
For AF_INET6_, <b>dst</b> should be 128-bits (16 bytes) in size.


<br/>

### `Function HostIp:String( HostName:String, index:Int=0, family:Int = AF_UNSPEC_ )`

Convert a host name to an ip address

#### Returns
Host ip address, or 0 if host not found


<br/>

### `Function HostIps:String[]( HostName:String, family:Int = AF_UNSPEC_ )`

Get all ip addresses for a host name

#### Returns
Array of host ips, or Null if host not found


<br/>

### `Function HostName:String( HostIp:String, family:Int = AF_UNSPEC_ )`

Convert a host ip address to a name

#### Returns
Name of host, or Null if host not found


<br/>

### `Function AddrInfo:TAddrInfo[](host:String, service:String = "http", family:Int = AF_UNSPEC_)`

Returns an array of TAddrInfo objects.

<br/>

### `Function AddrInfo:TAddrInfo[](host:String, service:String, hints:TAddrInfo)`

Returns an array of TAddrInfo objects.

<br/>

### `Function ShutdownSocket( socket:TSocket, how:Int=SD_SEND )`

Disables sends or receives on a socket.

Typically, [ShutdownSocket](../../brl/brl.socket/#function-shutdownsocket-sockettsocket-howintsdsend-) should be called before [CloseSocket](../../brl/brl.socket/#function-closesocket-sockettsocket-) to assure that all data is sent
and received on a connected socket before it is closed.

<b>how</b> is one of the following options :

| Value      | Meaning                                   |
|------------|-------------------------------------------|
| SD_RECEIVE | Shutdown receive operations               |
| SD_SEND    | Shutdown send operations                  |
| SD_BOTH    | Shutdown both send and receive operations |



<br/>

