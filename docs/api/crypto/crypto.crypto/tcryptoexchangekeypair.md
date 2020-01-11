---
id: tcryptoexchangekeypair
title: TCryptoExchangeKeyPair
sidebar_label: TCryptoExchangeKeyPair
---

A long-term key pair.


These long-term keys can be reused indefinitely, even though rotating them from time to time is highly recommended in case
the secret key ever gets leaked.


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

### `Function FromString:TCryptoExchangeKeyPair(keys:String)`

Retrieves the key pair from its String representation.

<br/>

### `Function PublicKeyFromString:TCryptoExchangeKeyPair(key:String)`

Retrieves the public key from its String representation.

<br/>

### `Function SecretKeyFromString:TCryptoExchangeKeyPair(key:String)`

Retrieves the secret key from its String representation.

<br/>

