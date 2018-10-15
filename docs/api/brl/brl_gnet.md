---
id: brl.gnet
title: BRL.GNet
sidebar_label: BRL.GNet
---


<h1>GameNet</h1>

The GameNet module (GNet for short) provides a set of commands for creating and managing multiplayer network 
games.

GNet works a little differently than other networking libraries. Instead of being primarily 'message based', GNet
works by synchronizing a collection of GNet <i>objects</i> over a network.

Each GNet object contains 32 &slots which are similar in nature to the fields of BlitzMax objects. You can write to these slots using the [SetGNetInt](../../brl/brl.gnet/#function-setgnetint-obj-tgnetobject-index-value), [SetGNetFloat](../../brl/brl.gnet/#function-setgnetfloat-obj-tgnetobject-index-value) and [SetGNetString](../../brl/brl.gnet/#function-setgnetstring-obj-tgnetobject-index-value) commands, and read from these slots using the [GetGNetInt](../../brl/brl.gnet/#function-getgnetint-obj-tgnetobject-index), [GetGNetFloat](../../brl/brl.gnet/#function-getgnetfloat-obj-tgnetobject-index) and [GetGNetString](../../brl/brl.gnet/#function-getgnetstring-obj-tgnetobject-index) commands. The actual meaning of the data contained in these slots is completely up to you, but will typically include such information as player position, score, hitpoints and so on.

Note that you can only modify GNet objects that you have yourself created. Such objects are known as <i>local</i> objects, while objects created elsewhere are known as <i>remote</i> objects.

To start using GNet, you must first create a GNet <i>host</i> with the [CreateGNetHost](../../brl/brl.gnet/#function-creategnethost-tgnethost) command. Once you have created a host, you can either connect to other GNet hosts using [GNetConnect](../../brl/brl.gnet/#function-gnetconnect-host-tgnethost-address-port-timeout-ms-10000), or prepare to accept connections from other hosts using [GNetListen](../../brl/brl.gnet/#function-gnetlisten-host-tgnethost-port).

The [GNetSync](../../brl/brl.gnet/#function-gnetsync-host-tgnethost) command brings all GNet objects up to date. This involves notifying other hosts about any modifications you have made to local GNet objects, and processing notifications from other hosts about any modifications to remote GNet objects.

Following a [GNetSync](../../brl/brl.gnet/#function-gnetsync-host-tgnethost), you can check which objects have been modified, created or closed using the [GnetObjects](../../brl/brl.gnet/#function-gnetobjects-tlist-host-tgnethost-state-gnet-all) command. This returns a linked list of GNet objects in a particular state.

GNet also provides a simple messaging system. A GNet message is actually just a special type of GNet object, so you initialize messages using the standard GNet commands for writing slots. Once created and initialized, a message can be sent to a remote object using the [SendGNetMessage](../../brl/brl.gnet/#function-sendgnetmessage-msg-tgnetobject-toobject-tgnetobject) command.

Incoming messages can be processed using the [GNetMessages](../../brl/brl.gnet/#function-gnetmessages-tlist-host-tgnethost) command after a [GNetSync](../../brl/brl.gnet/#function-gnetsync-host-tgnethost). This function returns a linked
list of messages objects which can be examined using the standard GNet commands for reading slots. In addition, the [GNetMessageObject](../../brl/brl.gnet/#function-gnetmessageobject-tgnetobject-msg-tgnetobject) command can be used to determine which local object a message was intended for.


## Functions

### `Function CreateGNetHost:TGNetHost()`

Create GNet host


Once you have created a GNet host, you can use it to create objects with [CreateGNetObject](../../brl/brl.gnet/#function-creategnetobject-tgnetobject-host-tgnethost),
connect to other hosts with [GNetConnect](../../brl/brl.gnet/#function-gnetconnect-host-tgnethost-address-port-timeout-ms-10000) and listen for connections from other hosts with
[GNetListen](../../brl/brl.gnet/#function-gnetlisten-host-tgnethost-port).


#### Returns
A new GNet host



### `Function CloseGNetHost( host:TGNetHost )`

Close a GNet host


Once closed, a GNet host cannot be reopened.



### `Function GNetSync( host:TGNetHost )`

Synchronize GNet host


[GNetSync](../../brl/brl.gnet/#function-gnetsync-host-tgnethost) will update the state of all GNet objects. Once you have used this command,
use the [GNetObjects](../../brl/brl.gnet/#function-gnetobjects-tlist-host-tgnethost-state-gnet-all) function to determine which objects have been remotely created, modified
or closed.



### `Function GNetListen( host:TGNetHost,port )`

Listen for connections


Causes <b>host</b> to start listening for connection attempts on the specified <b>port</b>.
Once a host is listening, hosts on other machines can connect using [GNetConnect](../../brl/brl.gnet/#function-gnetconnect-host-tgnethost-address-port-timeout-ms-10000).

[GNetListen](../../brl/brl.gnet/#function-gnetlisten-host-tgnethost-port) may fail if <b>port</b> is already in use by another application, or if <b>host</b>
is already listening or has already connected to a remote host using [GNetConnect](../../brl/brl.gnet/#function-gnetconnect-host-tgnethost-address-port-timeout-ms-10000).


#### Returns
True if successful, otherwise false



### `Function GNetConnect( host:TGNetHost,address$,port,timeout_ms=10000 )`

Connect to a remote GNet host


Attempts to connect <b>host</b> to the specified remote address and port.

A GNet host must be listening (see [GNetListen](../../brl/brl.gnet/#function-gnetlisten-host-tgnethost-port)) at the specified address and port for the
connection to succeed.


#### Returns
True if connection successful, otherwise false



### `Function GNetObjects:TList( host:TGNetHost,state=GNET_ALL )`

Get a list of GNet objects


[GNetObjects](../../brl/brl.gnet/#function-gnetobjects-tlist-host-tgnethost-state-gnet-all) returns a list of GNet objects in a certain state.

The <b>state</b> parameter controls which objects are listed, and can be one of &GNET_ALL,
&GNET_CREATED, &GNET_MODIFIED or &GNET_CLOSED.

Note that with the exception of &GNET_ALL, the returned lists will only ever contain remote objects.


#### Returns
A linked list



### `Function GNetMessages:TList( host:TGNetHost )`

Get a list of GNet messages sent to local objects

#### Returns
A linked list



### `Function CreateGNetObject:TGNetObject( host:TGNetHost )`

Create a GNet object

#### Returns
A new GNet object



### `Function CreateGNetMessage:TGNetObject( host:TGNetHost )`

Create a GNet message object

#### Returns
A new GNet object



### `Function SendGNetMessage( msg:TGNetObject,toObject:TGNetObject )`

Send a GNet message to a remote object


### `Function GNetMessageObject:TGNetObject( msg:TGNetObject )`

Get message target object

#### Returns
The object that <b>msg</b> was sent to



### `Function GNetObjectState( obj:TGNetObject )`

Get state of a GNet object

The returned value can be one of the following:
<table>
<tr><th>Object State</th><td>Meaning</td></tr>
<tr><td>GNET_CREATED</td><td>Object has been created</td></tr>
<tr><td>GNET_SYNCED</td><td>Object is in sync</td><tr>
<tr><td>GNET_MODIFIED</td><td>Object has been modified</td></tr>
<tr><td>GNET_CLOSED</td><td>Object has been closed</td></tr>
<tr><td>GNET_ZOMBIE</td><td>Object is a zombie</td></tr>
<tr><td>GNET_MESSAGE</td><td>Object is a message object</td></tr>
</table>
Zombie objects are objects that have been successfully closed and will never again be used
by GameNet. Therefore, such objects will never appear in any list returned by the
[GNetObjects](../../brl/brl.gnet/#function-gnetobjects-tlist-host-tgnethost-state-gnet-all) function.


#### Returns
An integer state



### `Function GNetObjectLocal( obj:TGNetObject )`

Determine whether a GNet object is local

#### Returns
True if object is a local object



### `Function GNetObjectRemote( obj:TGNetObject )`

Determine whether a GNet object is remote

#### Returns
True if object is a remote object



### `Function SetGNetInt( obj:TGNetObject,index,value )`

Set GNet object int data


### `Function SetGNetFloat( obj:TGNetObject,index,value# )`

Set GNet object float data


### `Function SetGNetString( obj:TGNetObject,index,value$ )`

Set GNet object string data


### `Function GetGNetInt( obj:TGNetObject,index )`

Get GNet object int data


### `Function GetGNetFloat#( obj:TGNetObject,index )`

Get GNet object float data


### `Function GetGNetString$( obj:TGNetObject,index )`

Get GNet object string data


### `Function SetGNetTarget( obj:TGNetObject,target:Object )`

Set a GNet object's target object


This command allows you to bind an abitrary object to a GNet object.



### `Function GetGNetTarget:Object( obj:TGNetObject )`

Get a GNet object's target object

#### Returns
The currently bound target object



### `Function CloseGNetObject( obj:TGNetObject )`

Close a GNet object


