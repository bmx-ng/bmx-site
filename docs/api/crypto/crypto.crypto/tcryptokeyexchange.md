---
id: tcryptokeyexchange
title: TCryptoKeyExchange
sidebar_label: TCryptoKeyExchange
---

Secure message exchange


Using key exchange, two parties can securely compute a set of ephemeral, shared secret keys, that can be used to securely exchange messages.

The general pattern two build a secure channel is:

* Pick the variant that fits your application needs
* Use the functions from that variant to build and parse packets to be exchanged between parties
* Eventually, both parties will compute a shared secret, that can be used with [TCryptoSecretbox](../../../crypto/crypto.crypto/tcryptosecretbox).


#### Example 1
```blitzmax
'
' Example of N variant key exchange
'
' What the client needs to know about the server: the server's public key
' What the server needs to know about the client: nothing
'
SuperStrict

Framework brl.standardio
Import Crypto.Crypto

Local server:TServer = New TServer
Local client:TClient = New TClient

Print "SHARE PUBLIC KEY"
' Server: generate a long-term key pair
Print "Server: Generate a long-term key pair~n"
server.keyPair = TCryptoKeyExchange.KeyGen()

' Server: send public key to client
server.SendPublicKeyToClient(client)

Print "KEY EXCHANGE"

' Client: generate session keys and a packet with an ephemeral public key to send to the server
client.BuildKeys()

' Client: send packet to server
client.SendPacketToServer(server)

' Server: process the initial request from the client, and compute the session keys
server.ComputeSessionKeys()

Print "BEGIN MESSAGING"
'
' Client and Server can now securely send data to each other using their session keys
'
client.EncryptAndSendMessage(server, "Hello Server!")

server.EncryptAndSendMessage(client, "Hello Client!")

Type TBase

	Field sessionKeyPair:TCryptoSessionKeyPair

	Method Name:String() Abstract

	Method EncryptAndSendMessage(base:TBase, message:String)
		
		Local msg:Byte Ptr = message.ToUTF8String()
		
		Print Name() + ": Message to send : " + message + "~n"
		
		Local c:Byte[message.length + CRYPTO_SECRETBOX_HEADERBYTES]
		TCryptoSecretBox.Encrypt(c, Size_T(c.length), msg, Size_T(message.length), 0, "example", sessionKeyPair.tx)
		
		MemFree(msg)
		
		Local encoded:String = TBase64.Encode(c)

		Print Name() + ": Sending encrypted message : " + encoded + "~n"
		
		base.ReceiveMessage(encoded)
	End Method

	Method ReceiveMessage(encoded:String)
		Print Name() + ": Received encoded message~n"
		Local m:Byte[] = TBase64.Decode(encoded)
		
		Local msg:Byte[m.length - CRYPTO_SECRETBOX_HEADERBYTES]
		
		If Not TCryptoSecretBox.Decrypt(msg, Size_T(msg.length), m, Size_T(m.length), 0, "example", sessionKeyPair.rx) Then
			Throw Name() + ": Unable to decrypt message"
		End If
		
		Local message:String = String.FromUTF8String(msg)
		
		Print Name() + ": Decrypted message : " + message + "~n"
	End Method

End Type

Type TServer Extends TBase

	Field keyPair:TCryptoExchangeKeyPair

	Field clientPacket:TCryptoNPacket

	Method Name:String()
		Return "Server"
	End Method
	
	Method SendPublicKeyToClient(client:TClient)
		Print "Server: Sending public key to client~n"
		client.ReceiveServerPublicKey(keyPair.PublicKeyToString())
	End Method
	
	Method ReceivePacketFromClient(packet:String)
		clientPacket = TCryptoNPacket.FromString(packet)
		Print "Server: Received packet from client~n"
	End Method
	
	Method ComputeSessionKeys()
		Print "Server: Computing session keys~n"
		If Not TCryptoKeyExchange.N2(sessionKeyPair, clientPacket, Null, keyPair) Then
			Throw "Couldn't calculate server session keys~n"
		End If
	End Method
	
End Type


Type TClient Extends TBase

	Field serverPublicKey:TCryptoExchangeKeyPair

	Field packet:TCryptoNPacket

	Method Name:String()
		Return "Client"
	End Method

	Method ReceiveServerPublicKey(key:String)
		Print "Client: Received server public key~n"
		serverPublicKey = TCryptoExchangeKeyPair.PublicKeyFromString(key)
	End Method
	
	Method BuildKeys()
		Print "Client: Creating packet~n"
		If Not TCryptoKeyExchange.N1(sessionKeyPair, packet, Null, serverPublicKey) Then
			Throw "Couldn't calculate client session keys~n"
		End If
	End Method
	
	Method SendPacketToServer(server:TServer)
		Print "Client: Sending packet to server~n"
		server.ReceivePacketFromClient(packet.ToString())
	End Method
	
End Type
```
#### Example 2
```blitzmax
'
' Example of KK variant key exchange
'
' What the client needs to know about the server: the server's public key
' What the server needs to know about the client: the client's public key
'
' This variant is designed to exchange messages between two parties that already know each other's public key.
'
SuperStrict

Framework brl.standardio
Import Crypto.Crypto

Local server:TServer = New TServer
Local client:TClient = New TClient

Print "SHARE PUBLIC KEYS"

' Client: generate a long-term key pair
Print "Client: Generate a long-term key pair~n"
client.keyPair = TCryptoKeyExchange.KeyGen()

' Server: generate a long-term key pair
Print "Server: Generate a long-term key pair~n"
server.keyPair = TCryptoKeyExchange.KeyGen()

' Client: send public key to server
client.SendPublicKey(server)

' Server: send public key to client
server.SendPublicKey(client)

' KEY EXCHANGE
Print "KEY EXCHANGE"

' Client: initiate a key exchange
client.InitSession()

' Client: send packet to server
client.SendPacketToServer(server)

' Server: process the initial request from the client, and compute the session keys
server.ComputeSessionKeys()

' Server: send packet to client
server.SendPacketToClient(client)

' Client: process the server packet and compute the session keys
client.ComputeSessionKeys()

Print "BEGIN MESSAGING"

'
' Client and Server can now securely send data to each other using their session keys
'
client.EncryptAndSendMessage(server, "Hello Server!")

server.EncryptAndSendMessage(client, "Hello Client!")

Type TBase

	Field keyPair:TCryptoExchangeKeyPair
	Field otherPublicKey:TCryptoExchangeKeyPair

	Field sessionKeyPair:TCryptoSessionKeyPair

	Method Name:String() Abstract

	Method SendPublicKey(rec:TBase)
		Print Name() + ": Sending my public key~n"
		rec.ReceivePublicKey(keyPair.PublicKeyToString())
	End Method
	
	Method ReceivePublicKey(key:String)
		Print Name() + ": Received other public key~n"
		otherPublicKey = TCryptoExchangeKeyPair.PublicKeyFromString(key)
	End Method

	Method EncryptAndSendMessage(base:TBase, message:String)
		
		Local msg:Byte Ptr = message.ToUTF8String()
		
		Print Name() + ": Message to send : " + message + "~n"
		
		Local c:Byte[message.length + CRYPTO_SECRETBOX_HEADERBYTES]
		TCryptoSecretBox.Encrypt(c, Size_T(c.length), msg, Size_T(message.length), 0, "example", sessionKeyPair.tx)
		
		MemFree(msg)
		
		Local encoded:String = TBase64.Encode(c)

		Print Name() + ": Sending encrypted message : " + encoded + "~n"
		
		base.ReceiveMessage(encoded)
	End Method

	Method ReceiveMessage(encoded:String)
		Print Name() + ": Received encoded message~n"
		Local m:Byte[] = TBase64.Decode(encoded)
		
		Local msg:Byte[m.length - CRYPTO_SECRETBOX_HEADERBYTES]
		
		If Not TCryptoSecretBox.Decrypt(msg, Size_T(msg.length), m, Size_T(m.length), 0, "example", sessionKeyPair.rx) Then
			Throw Name() + ": Unable to decrypt message"
		End If
		
		Local message:String = String.FromUTF8String(msg)
		
		Print Name() + ": Decrypted message : " + message + "~n"
	End Method

End Type

Type TServer Extends TBase

	Field clientPacket:TCryptoKK1Packet
	Field packet2:TCryptoKK2Packet

	Method Name:String()
		Return "Server"
	End Method
	
	Method ReceivePacketFromClient(packet:String)
		clientPacket = TCryptoKK1Packet.FromString(packet)
		Print "Server: Received packet1 from client~n"
	End Method
	
	Method ComputeSessionKeys()
		Print "Server: Computing session keys~n"
		If Not TCryptoKeyExchange.KK2(sessionKeyPair, packet2, clientPacket, otherPublicKey, keyPair) Then
			Throw "Couldn't calculate server session keys~n"
		End If
	End Method

	Method SendPacketToClient(client:TClient)
		Print "Server: Sending packet to client~n"
		client.ReceivePacketFromServer(packet2.ToString())
	End Method
	
End Type


Type TClient Extends TBase

	Field state:TCryptoExchangeState
	Field packet1:TCryptoKK1Packet
	Field serverPacket:TCryptoKK2Packet
	
	Method Name:String()
		Return "Client"
	End Method

	Method InitSession()
		Print "Client: Initial packet creation~n"
		If Not TCryptoKeyExchange.KK1(state, packet1, otherPublicKey, keyPair ) Then
			Throw "Couldn't create initial client packet/state~n"
		End If
	End Method
	
	Method SendPacketToServer(server:TServer)
		Print "Client: Sending packet to server~n"
		server.ReceivePacketFromClient(packet1.ToString())
	End Method
	
	Method ReceivePacketFromServer(packet:String)
		serverPacket = TCryptoKK2Packet.FromString(packet)
		Print "Client: Received packet2 from server~n"
	End Method

	Method ComputeSessionKeys()
		Print "Client: Computing session keys~n"
		If Not TCryptoKeyExchange.KK3(state, sessionKeyPair, serverPacket, keyPair) Then
			Throw "Couldn't calculate client session keys~n"
		End If
	End Method

End Type
```
#### Example 3
```blitzmax
'
' Example of XX variant key exchange
'
' What the client needs to know about the server: nothing
' What the server needs to know about the client: nothing
'
' This is the most versatile variant, but it requires two round trips.
' In this variant, the client and the server don't need to share any prior data. However, the peers public keys will be exchanged. .
'
SuperStrict

Framework brl.standardio
Import Crypto.Crypto

Local server:TServer = New TServer
Local client:TClient = New TClient

Print "GENERATE PUBLIC KEYS"

' Client: generate a long-term key pair
Print "Client: Generate a long-term key pair~n"
client.keyPair = TCryptoKeyExchange.KeyGen()

' Server: generate a long-term key pair
Print "Server: Generate a long-term key pair~n"
server.keyPair = TCryptoKeyExchange.KeyGen()

' KEY EXCHANGE
Print "KEY EXCHANGE"

' Client: initiate a key exchange
client.InitSession()

' Client: send packet to server
client.SendPacket1ToServer(server)

' Server: process the initial request from the client
server.ProcessInitialRequest()

' Server: send packet to client
server.SendPacketToClient(client)

' Client: process the server packet and compute the session keys
client.ComputeSessionKeys()

' Client: send packet to server
client.SendPacket3ToServer(server)

' Server: process the client packet and compute the session keys
server.ComputeSessionKeys()


Print "BEGIN MESSAGING"

'
' Client and Server can now securely send data to each other using their session keys
'
client.EncryptAndSendMessage(server, "Hello Server!")

server.EncryptAndSendMessage(client, "Hello Client!")

Type TBase

	Field state:TCryptoExchangeState
	Field keyPair:TCryptoExchangeKeyPair
	Field otherPublicKey:TCryptoExchangeKeyPair

	Field sessionKeyPair:TCryptoSessionKeyPair

	Method Name:String() Abstract

	Method SendPublicKey(rec:TBase)
		Print Name() + ": Sending my public key~n"
		rec.ReceivePublicKey(keyPair.PublicKeyToString())
	End Method
	
	Method ReceivePublicKey(key:String)
		Print Name() + ": Received other public key~n"
		otherPublicKey = TCryptoExchangeKeyPair.PublicKeyFromString(key)
	End Method

	Method EncryptAndSendMessage(base:TBase, message:String)
		
		Local msg:Byte Ptr = message.ToUTF8String()
		
		Print Name() + ": Message to send : " + message + "~n"
		
		Local c:Byte[message.length + CRYPTO_SECRETBOX_HEADERBYTES]
		TCryptoSecretBox.Encrypt(c, Size_T(c.length), msg, Size_T(message.length), 0, "example", sessionKeyPair.tx)
		
		MemFree(msg)
		
		Local encoded:String = TBase64.Encode(c)

		Print Name() + ": Sending encrypted message : " + encoded + "~n"
		
		base.ReceiveMessage(encoded)
	End Method

	Method ReceiveMessage(encoded:String)
		Print Name() + ": Received encoded message~n"
		Local m:Byte[] = TBase64.Decode(encoded)
		
		Local msg:Byte[m.length - CRYPTO_SECRETBOX_HEADERBYTES]
		
		If Not TCryptoSecretBox.Decrypt(msg, Size_T(msg.length), m, Size_T(m.length), 0, "example", sessionKeyPair.rx) Then
			Throw Name() + ": Unable to decrypt message"
		End If
		
		Local message:String = String.FromUTF8String(msg)
		
		Print Name() + ": Decrypted message : " + message + "~n"
	End Method

End Type

Type TServer Extends TBase

	Field clientPacket1:TCryptoXX1Packet
	Field clientPacket3:TCryptoXX3Packet
	Field packet2:TCryptoXX2Packet

	Method Name:String()
		Return "Server"
	End Method
	
	Method ReceivePacket1FromClient(packet:String)
		clientPacket1 = TCryptoXX1Packet.FromString(packet)
		Print "Server: Received packet1 from client~n"
	End Method
	
	Method ProcessInitialRequest()
		Print "Server: Processing initial request~n"
		If Not TCryptoKeyExchange.XX2(state, packet2, clientPacket1, Null, keyPair) Then
			Throw "Couldn't initiate state~n"
		End If
	End Method

	Method SendPacketToClient(client:TClient)
		Print "Server: Sending packet to client~n"
		client.ReceivePacketFromServer(packet2.ToString())
	End Method

	Method ReceivePacket3FromClient(packet:String)
		clientPacket3 = TCryptoXX3Packet.FromString(packet)
		Print "Server: Received packet3 from client~n"
	End Method

	Method ComputeSessionKeys()
		Print "Server: Computing session keys~n"
		If Not TCryptoKeyExchange.XX4(state, sessionKeyPair, otherPublicKey, clientPacket3, Null) Then
			Throw "Couldn't calculate server session keys~n"
		End If
	End Method
	
End Type

Type TClient Extends TBase
	
	Field packet1:TCryptoXX1Packet
	Field packet3:TCryptoXX3Packet
	Field serverPacket:TCryptoXX2Packet
	
	Method Name:String()
		Return "Client"
	End Method

	Method InitSession()
		Print "Client: Initial packet creation~n"
		If Not TCryptoKeyExchange.XX1(state, packet1, Null ) Then
			Throw "Couldn't create initial client packet/state~n"
		End If
	End Method
	
	Method SendPacket1ToServer(server:TServer)
		Print "Client: Sending packet1 to server~n"
		server.ReceivePacket1FromClient(packet1.ToString())
	End Method
	
	Method ReceivePacketFromServer(packet:String)
		serverPacket = TCryptoXX2Packet.FromString(packet)
		Print "Client: Received packet2 from server~n"
	End Method

	Method ComputeSessionKeys()
		Print "Client: Computing session keys~n"
		If Not TCryptoKeyExchange.XX3(state, sessionKeyPair, packet3, otherPublicKey, serverPacket, Null, keyPair) Then
			Throw "Couldn't calculate client session keys~n"
		End If
	End Method

	Method SendPacket3ToServer(server:TServer)
		Print "Client: Sending packet3 to server~n"
		server.ReceivePacket3FromClient(packet3.ToString())
	End Method

End Type
```
## Functions

### `Function KeyGen:TCryptoExchangeKeyPair()`

Generates a long-term key pair.

These long-term keys can be reused indefinitely, even though rotating them from time to time is highly recommended
in case the secret key ever gets leaked.


<br/>

### `Function N1:Int(sessionKeyPair:TCryptoSessionKeyPair Var, packet:TCryptoNPacket Var, preSharedKey:TCryptoKey, serverKeyPair:TCryptoExchangeKeyPair)`

Computes a session key pair <b>sessionKeyPair</b> using the server's public key <b>publicKey</b>, and builds a packet <b>packet1</b> that has to be sent to the server.

This variant is designed to anonymously send messages to a recipient using its public key.
* What the client needs to know about the server: <b>the server's public key</b>
* What the server needs to know about the client: <b>nothing</b>


#### Returns
[True](../../../brl/brl.blitz/#true) on success, and [False](../../../brl/brl.blitz/#false) on error.


<br/>

### `Function N2:Int(sessionKeyPair:TCryptoSessionKeyPair Var, packet:TCryptoNPacket, preSharedKey:TCryptoKey, keyPair:TCryptoExchangeKeyPair)`

Computes a session key pair <b>sessionKeyPair</b> using the packet <b>packet1</b> received from the client.

#### Returns
[True](../../../brl/brl.blitz/#true) on success, and [False](../../../brl/brl.blitz/#false) on error.


<br/>

### `Function KK1:Int(state:TCryptoExchangeState Var, packet1:TCryptoKK1Packet Var, peerKeyPair:TCryptoExchangeKeyPair, keyPair:TCryptoExchangeKeyPair)`

Initializes the local state <b>state</b>, computes an ephemeral key pair, and puts the first packet to send to the server into <b>packet1</b>.

#### Returns
[True](../../../brl/brl.blitz/#true) on success, and [False](../../../brl/brl.blitz/#false) on error.


<br/>

### `Function KK2:Int(sessionKeyPair:TCryptoSessionKeyPair Var, packet2:TCryptoKK2Packet Var, packet1:TCryptoKK1Packet, peerKeyPair:TCryptoExchangeKeyPair, keyPair:TCryptoExchangeKeyPair)`

Validates the request, computes an ephemeral key pair, puts it into <b>sessionKeyPair</b>, and stores the packet to send to the client into <b>packet2</b>.

#### Returns
[True](../../../brl/brl.blitz/#true) on success, and [False](../../../brl/brl.blitz/#false) on error.


<br/>

### `Function KK3:Int(state:TCryptoExchangeState, sessionKeyPair:TCryptoSessionKeyPair Var, packet2:TCryptoKK2Packet, keyPair:TCryptoExchangeKeyPair)`

Validates the packet, computes the shared session key and puts it into <b>sessionKeyPair</b>.

#### Returns
[True](../../../brl/brl.blitz/#true) on success, and [False](../../../brl/brl.blitz/#false) on error.


<br/>

### `Function XX1:Int(state:TCryptoExchangeState Var, packet1:TCryptoXX1Packet Var, preSharedKey:TCryptoKey)`

Initializes the local state <b>state</b>, computes an ephemeral key pair, and puts the first packet to send to the server into <b>packet1</b>.

Using this API, a client and a server can securely generate and exchange session keys.

This API is designed for online protocols, and requires two round trips:

* The initiator (client) sends a key exchange request.
* The listener (server) receives the request, validates it, and sends a packet to the client.
* The client validates the packet, compute the session keys, and sends a last packet to the server. The client learns the server public key as well, and can drop the connection if it doesn't match an expected public key.
* The server use this packet and previous data in order to compute the same session keys. The server learns the client public key as well.

Two sessions keys are eventually computed. The former can be used to encrypt data sent from the client to the server, the later can be used
in the other direction.

If the the pre-shared secret <b>preSharedKey</b> is set, the server can detect a suspicious request after the first packet is received.
Without a pre-shared secret, an additional round trip is required.


#### Returns
[True](../../../brl/brl.blitz/#true) on success, and [False](../../../brl/brl.blitz/#false) on error.


<br/>

### `Function XX2:Int(state:TCryptoExchangeState Var, packet2:TCryptoXX2Packet Var, packet1:TCryptoXX1Packet, preSharedKey:TCryptoKey, keyPair:TCryptoExchangeKeyPair)`

Validates the request, computes an ephemeral key pair, and puts the packet to send to the client into <b>packet2</b>.

#### Returns
[True](../../../brl/brl.blitz/#true) on success, and [False](../../../brl/brl.blitz/#false) if the received packet doesn't appear to be valid.


<br/>

### `Function XX3:Int(state:TCryptoExchangeState, sessionKeyPair:TCryptoSessionKeyPair Var, packet3:TCryptoXX3Packet Var, peerKeyPair:TCryptoExchangeKeyPair Var, packet2:TCryptoXX2Packet, preSharedKey:TCryptoKey, keyPair:TCryptoExchangeKeyPair)`

Validates the packet, computes a session key and puts it into <b>sessionKeyPair</b>.

<b>sessionKeyPair</b> contains the final session key at this point.
A payload can already be sent by the client without waiting for the server to compute the session keys on its end.


#### Returns
[True](../../../brl/brl.blitz/#true) on success, and [False](../../../brl/brl.blitz/#false) if the received packet doesn't appear to be valid.


<br/>

### `Function XX4:Int(state:TCryptoExchangeState, sessionKeyPair:TCryptoSessionKeyPair Var, peerKeyPair:TCryptoExchangeKeyPair Var, packet3:TCryptoXX3Packet, preSharedKey:TCryptoKey)`

Validates the packet, computes the session key (identical to the one computed by the client) and puts it into <b>sessionKeyPair</b>.

#### Returns
[True](../../../brl/brl.blitz/#true) on success, and [False](../../../brl/brl.blitz/#false) if the received packet doesn't appear to be valid.


<br/>

