---
id: brl.gnet
title: BRL.GNet
sidebar_label: BRL.GNet
---


The GameNet module (GNet for short) provides a set of commands for creating and managing multiplayer network 
games.

GNet works a little differently than other networking libraries. Instead of being primarily 'message based', GNet
works by synchronizing a collection of GNet <i>objects</i> over a network.

Each GNet object contains 32 &slots which are similar in nature to the fields of BlitzMax objects. You can write to these slots using the [SetGNetInt](../../brl/brl.gnet/#function-setgnetint-objtgnetobjectindexintvalueint-), [SetGNetFloat](../../brl/brl.gnet/#function-setgnetfloat-objtgnetobjectindexintvalue-) and [SetGNetString](../../brl/brl.gnet/#function-setgnetstring-objtgnetobjectindexintvalue-) commands, and read from these slots using the [GetGNetInt](../../brl/brl.gnet/#function-getgnetintint-objtgnetobjectindexint-), [GetGNetFloat](../../brl/brl.gnet/#function-getgnetfloat-objtgnetobjectindexint-) and [GetGNetString](../../brl/brl.gnet/#function-getgnetstring-objtgnetobjectindexint-) commands. The actual meaning of the data contained in these slots is completely up to you, but will typically include such information as player position, score, hitpoints and so on.

Note that you can only modify GNet objects that you have yourself created. Such objects are known as <i>local</i> objects, while objects created elsewhere are known as <i>remote</i> objects.

To start using GNet, you must first create a GNet <i>host</i> with the [CreateGNetHost](../../brl/brl.gnet/#function-creategnethosttgnethost) command. Once you have created a host, you can either connect to other GNet hosts using [GNetConnect](../../brl/brl.gnet/#function-gnetconnectint-hosttgnethostaddressportinttimeoutmsint10000-), or prepare to accept connections from other hosts using [GNetListen](../../brl/brl.gnet/#function-gnetlistenint-hosttgnethostportint-).

The [GNetSync](../../brl/brl.gnet/#function-gnetsync-hosttgnethost-) command brings all GNet objects up to date. This involves notifying other hosts about any modifications you have made to local GNet objects, and processing notifications from other hosts about any modifications to remote GNet objects.

Following a [GNetSync](../../brl/brl.gnet/#function-gnetsync-hosttgnethost-), you can check which objects have been modified, created or closed using the [GnetObjects](../../brl/brl.gnet/#function-gnetobjectstlist-hosttgnethoststateintgnetall-) command. This returns a linked list of GNet objects in a particular state.

GNet also provides a simple messaging system. A GNet message is actually just a special type of GNet object, so you initialize messages using the standard GNet commands for writing slots. Once created and initialized, a message can be sent to a remote object using the [SendGNetMessage](../../brl/brl.gnet/#function-sendgnetmessage-msgtgnetobjecttoobjecttgnetobject-) command.

Incoming messages can be processed using the [GNetMessages](../../brl/brl.gnet/#function-gnetmessagestlist-hosttgnethost-) command after a [GNetSync](../../brl/brl.gnet/#function-gnetsync-hosttgnethost-). This function returns a linked
list of messages objects which can be examined using the standard GNet commands for reading slots. In addition, the [GNetMessageObject](../../brl/brl.gnet/#function-gnetmessageobjecttgnetobject-msgtgnetobject-) command can be used to determine which local object a message was intended for.


## Functions

### `Function CreateGNetHost:TGNetHost()`

Create GNet host


Once you have created a GNet host, you can use it to create objects with [CreateGNetObject](../../brl/brl.gnet/#function-creategnetobjecttgnetobject-hosttgnethost-),
connect to other hosts with [GNetConnect](../../brl/brl.gnet/#function-gnetconnectint-hosttgnethostaddressportinttimeoutmsint10000-) and listen for connections from other hosts with
[GNetListen](../../brl/brl.gnet/#function-gnetlistenint-hosttgnethostportint-).


#### Returns
A new GNet host


<br/>

### `Function CloseGNetHost( host:TGNetHost )`

Close a GNet host


Once closed, a GNet host cannot be reopened.


<br/>

### `Function GNetSync( host:TGNetHost )`

Synchronize GNet host


[GNetSync](../../brl/brl.gnet/#function-gnetsync-hosttgnethost-) will update the state of all GNet objects. Once you have used this command,
use the [GNetObjects](../../brl/brl.gnet/#function-gnetobjectstlist-hosttgnethoststateintgnetall-) function to determine which objects have been remotely created, modified
or closed.


<br/>

### `Function GNetListen:Int( host:TGNetHost,port:Int )`

Listen for connections


Causes <b>host</b> to start listening for connection attempts on the specified <b>port</b>.
Once a host is listening, hosts on other machines can connect using [GNetConnect](../../brl/brl.gnet/#function-gnetconnectint-hosttgnethostaddressportinttimeoutmsint10000-).

[GNetListen](../../brl/brl.gnet/#function-gnetlistenint-hosttgnethostportint-) may fail if <b>port</b> is already in use by another application, or if <b>host</b>
is already listening or has already connected to a remote host using [GNetConnect](../../brl/brl.gnet/#function-gnetconnectint-hosttgnethostaddressportinttimeoutmsint10000-).


#### Returns
True if successful, otherwise false


<br/>

### `Function GNetConnect:Int( host:TGNetHost,address$,port:Int,timeout_ms:Int=10000 )`

Connect to a remote GNet host


Attempts to connect <b>host</b> to the specified remote address and port.

A GNet host must be listening (see [GNetListen](../../brl/brl.gnet/#function-gnetlistenint-hosttgnethostportint-)) at the specified address and port for the
connection to succeed.


#### Returns
True if connection successful, otherwise false


<br/>

### `Function GNetObjects:TList( host:TGNetHost,state:Int=GNET_ALL )`

Get a list of GNet objects


[GNetObjects](../../brl/brl.gnet/#function-gnetobjectstlist-hosttgnethoststateintgnetall-) returns a list of GNet objects in a certain state.

The <b>state</b> parameter controls which objects are listed, and can be one of &GNET_ALL,
&GNET_CREATED, &GNET_MODIFIED or &GNET_CLOSED.

Note that with the exception of &GNET_ALL, the returned lists will only ever contain remote objects.


#### Returns
A linked list


<br/>

### `Function GNetMessages:TList( host:TGNetHost )`

Get a list of GNet messages sent to local objects

#### Returns
A linked list


<br/>

### `Function CreateGNetObject:TGNetObject( host:TGNetHost )`

Create a GNet object

#### Returns
A new GNet object


<br/>

### `Function CreateGNetMessage:TGNetObject( host:TGNetHost )`

Create a GNet message object

#### Returns
A new GNet object


<br/>

### `Function SendGNetMessage( msg:TGNetObject,toObject:TGNetObject )`

Send a GNet message to a remote object

<br/>

### `Function GNetMessageObject:TGNetObject( msg:TGNetObject )`

Get message target object

#### Returns
The object that <b>msg</b> was sent to


<br/>

### `Function GNetObjectState:Int( obj:TGNetObject )`

Get state of a GNet object

The returned value can be one of the following:
<table>
<tr><th>Object State</th><th>Meaning</th></tr>
<tr><td>GNET_CREATED</td><td>Object has been created</td></tr>
<tr><td>GNET_SYNCED</td><td>Object is in sync</td></tr>
<tr><td>GNET_MODIFIED</td><td>Object has been modified</td></tr>
<tr><td>GNET_CLOSED</td><td>Object has been closed</td></tr>
<tr><td>GNET_ZOMBIE</td><td>Object is a zombie</td></tr>
<tr><td>GNET_MESSAGE</td><td>Object is a message object</td></tr>
</table>
Zombie objects are objects that have been successfully closed and will never again be used
by GameNet. Therefore, such objects will never appear in any list returned by the
[GNetObjects](../../brl/brl.gnet/#function-gnetobjectstlist-hosttgnethoststateintgnetall-) function.


#### Returns
An integer state


<br/>

### `Function GNetObjectLocal:Int( obj:TGNetObject )`

Determine whether a GNet object is local

#### Returns
True if object is a local object


<br/>

### `Function GNetObjectRemote:Int( obj:TGNetObject )`

Determine whether a GNet object is remote

#### Returns
True if object is a remote object


<br/>

### `Function SetGNetInt( obj:TGNetObject,index:Int,value:Int )`

Set GNet object int data

<br/>

### `Function SetGNetFloat( obj:TGNetObject,index:Int,value# )`

Set GNet object float data

<br/>

### `Function SetGNetFloat( obj:TGNetObject,index:Int,value:Double )`

Set GNet object float data

There may be a precision loss during the conversion of [Double](../../brl/brl.blitz/#double) to [Float](../../brl/brl.blitz/#float).


<br/>

### `Function SetGNetString( obj:TGNetObject,index:Int,value$ )`

Set GNet object string data

<br/>

### `Function GetGNetInt:Int( obj:TGNetObject,index:Int )`

Get GNet object int data

<br/>

### `Function GetGNetFloat#( obj:TGNetObject,index:Int )`

Get GNet object float data

<br/>

### `Function GetGNetString$( obj:TGNetObject,index:Int )`

Get GNet object string data

<br/>

### `Function SetGNetTarget( obj:TGNetObject,target:Object )`

Set a GNet object's target object


This command allows you to bind an abitrary object to a GNet object.


<br/>

### `Function GetGNetTarget:Object( obj:TGNetObject )`

Get a GNet object's target object

#### Returns
The currently bound target object


<br/>

### `Function CloseGNetObject( obj:TGNetObject )`

Close a GNet object

<br/>

