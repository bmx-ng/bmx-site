---
id: tcryptosignkeypair
title: TCryptoSignKeyPair
sidebar_label: TCryptoSignKeyPair
---

A secret key and a corresponding public key.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import Crypto.Crypto

Local keyPair:TCryptoSignKeyPair = TCryptoSign.KeyGen()

Local s:String = keyPair.ToString()

Print s
```
## Fields

### `Field secretKey:Byte[CRYPTO_SIGN_SECRETKEYBYTES]`

A secret key, that will be used to sign any number of messages

<br/>

### `Field publicKey:Byte[CRYPTO_SIGN_PUBLICKEYBYTES]`

A public key, that anybody can use to verify that the signature for a message was actually issued by the creator of the public key.

<br/>

## Methods

### `Method ToString:String() Override`

Returns a String representation of the key pair.

<br/>

### `Method PublicKeyToString:String()`

Returns a String representation of the public key.

<br/>

### `Method SecretKeyToString:String()`

Returns a String representation of the secret key.

<br/>

## Functions

### `Function FromString:TCryptoSignKeyPair(keys:String)`

Retrieves the key pair from its String representation.

<br/>

### `Function FromSecretKey:TCryptoSignKeyPair(sk:String)`

Retrieves the secret key from its String representation.

<br/>

### `Function FromPublicKey:TCryptoSignKeyPair(pk:String)`

Retrieves the public key from its String representation.

<br/>

