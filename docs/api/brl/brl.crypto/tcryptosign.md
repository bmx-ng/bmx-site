---
id: tcryptosign
title: TCryptoSign
sidebar_label: TCryptoSign
---

Message signing.


The nonces are non-deterministic. They are computed using the output of the CSPRNG as well as a hash of the
message to be signed. As a result, signing the same message multiple times can produce different, all valid signatures.
However, only the owner of the secret key can compute a valid signature.


#### Example 1
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.crypto

' generate a key pair
Local keyPair:TCryptoSignKeyPair = TCryptoSign.KeyGen()

Print "keypair : " + keyPair.ToString()

Local signature:TCryptoSignature

Local message:String = "Just a castaway, an island lost at sea. Another lonely day with no one here but me. More loneliness than any man could bear. Rescue me before I fall into despair."
Local mb:Byte Ptr = message.ToUTF8String()

' sign the message with the secret key
TCryptoSign.Sign(signature, mb, Size_T(message.length), "example", keyPair)

Print "signature : " + signature.ToString()

' verify the message with public key
If TCryptoSign.Verify(signature, mb, Size_T(message.length), "example", keyPair) Then
	Print "Verified !"
Else
	Print "Invalid"
End If

MemFree(mb)
```
#### Example 2
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.crypto

' generate a key pair
Local keyPair:TCryptoSignKeyPair = TCryptoSign.KeyGen()

Print "keypair : " + keyPair.ToString()

Local signature:TCryptoSignature

Local message:String[] = ["Just a castaway, an island lost at sea. " , ..
	"Another lonely day with no one here but me. " , ..
	"More loneliness than any man could bear. " , ..
	"Rescue me before I fall into despair."]

' create a signer with context
Local signer:TCryptoSign = New TCryptoSign.Create("example")

' update all the parts
Update(signer, message)

' create the signature
signer.FinishCreate(signature, keyPair)

Print "signature : " + signature.ToString()

' create a verifier with context
Local verifier:TCryptoSign = New TCryptoSign.Create("example")

' update all the parts
Update(verifier, message)

' verify the public key against the signature
If verifier.FinishVerify(signature, keyPair) Then
	Print "Verified !"
Else
	Print "Invalid"
End If


Function Update(signer:TCryptoSign, message:String[])
	For Local i:Int = 0 Until message.length
		Local mb:Byte Ptr = message[i].ToUTF8String()
		signer.Update(mb, Size_T(message[i].length))
		MemFree(mb)
	Next
End Function
```
## Methods

### `Method Create:TCryptoSign(context:String)`

Initializes a state state using the <b>context</b>.

<br/>

### `Method Update:Int(m:Byte Ptr, mLen:Size_T)`

Hashes chunk <b>m</b> of <b>mLen</b> bytes.

<br/>

### `Method Update:Int(m:Byte[])`

Hashes chunk <b>m</b>.

<br/>

### `Method FinishCreate:Int(csig:TCryptoSignature Var, kp:TCryptoSignKeyPair)`

Computes the signature into <b>csig</b> using the secret key from <b>kp</b>.

<br/>

### `Method FinishVerify:Int(csig:TCryptoSignature, kp:TCryptoSignKeyPair)`

Verifies the signature into <b>csig</b> using the public key from <b>kp</b>.

Returns [False](../../../brl/brl.blitz/#false) if the signature doesn't appear to be valid for the given message, context and public key, or [True](../../../brl/brl.blitz/#true) if it could be successfully verified.


<br/>

## Functions

### `Function KeyGen:TCryptoSignKeyPair()`

Generates a secret key and a corresponding public key.

<br/>

### `Function Sign:Int(csig:TCryptoSignature Var, m:Byte Ptr, mLen:Size_T, context:String, kp:TCryptoSignKeyPair)`

Computes a signature for a message <b>m</b> whose length is <b>mLen</b> bytes, using the secret key from <b>kp</b> and a <b>context</b>.

<br/>

### `Function Sign:Int(csig:TCryptoSignature Var, m:Byte[], context:String, kp:TCryptoSignKeyPair)`

Computes a signature for a message <b>m</b>, using the secret key from <b>kp</b> and a <b>context</b>.

<br/>

### `Function Verify:Int(csig:TCryptoSignature, m:Byte Ptr, mLen:Size_T, context:String, kp:TCryptoSignKeyPair)`

Checks that the signed message <b>m</b> whose length is <b>mLen</b> bytes has a valid signature for the public key <b>pk</b> and the <b>context</b>.

If the signature is doesn't appear to be valid, the function returns [False](../../../brl/brl.blitz/#false). On success, it returns [True](../../../brl/brl.blitz/#true).


<br/>

### `Function Verify:Int(csig:TCryptoSignature, m:Byte[], context:String, kp:TCryptoSignKeyPair)`

Checks that the signed message <b>m</b> has a valid signature for the public key <b>pk</b> and the <b>context</b>.

If the signature is doesn't appear to be valid, the function returns [False](../../../brl/brl.blitz/#false). On success, it returns [True](../../../brl/brl.blitz/#true).


<br/>

