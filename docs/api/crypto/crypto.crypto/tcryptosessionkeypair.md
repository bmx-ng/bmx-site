---
id: tcryptosessionkeypair
title: TCryptoSessionKeyPair
sidebar_label: TCryptoSessionKeyPair
---

A session key pair.


The tx key is used to encrypt outgoing messages.
The rx key is used to decrypt incoming messages.


## Methods

### `Method ToString:String() Override`

Returns a String representation of the key pair.

<br/>

### `Method RxToString:String()`

Returns a String representation of the rx key.

<br/>

### `Method TxToString:String()`

Returns a String representation of the tx key.

<br/>

## Functions

### `Function FromString:TCryptoSessionKeyPair(keys:String)`

Retrieves the key pair from its String representation.

<br/>

### `Function RxFromString:TCryptoSessionKeyPair(key:String)`

Retrieves the rx key from its String representation.

<br/>

### `Function TxFromString:TCryptoSessionKeyPair(key:String)`

Retrieves the tx key from its String representation.

<br/>

