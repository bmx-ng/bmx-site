---
id: brl.socketstream
title: BRL.SocketStream
sidebar_label: BRL.SocketStream
---


## Functions

### `Function CreateSocketStream:TSocketStream( socket:TSocket,autoClose:Int=True )`

Create a socket stream


A socket stream allows you to treat a socket as if it were a stream.

If <b>autoClose</b> is true, <b>socket</b> will be automatically closed when the socket
stream is closed. Otherwise, it is up to you to somehow close <b>socket</b> at
a later time.


#### Returns
A new socket stream


<br/>

### `Function SocketStreamSocket:TSocket( stream:TSocketStream )`

Get underlying socket from a socket stream

#### Returns
The socket used to create the socket stream


<br/>

