---
id: tcipher
title: TCipher
sidebar_label: TCipher
---

Cipher base type.


## Methods

### `Method KeySize:Int(size:Int) Abstract`

Determines the appropriate key size for <b>size</b>.

Rounds the input keysize <b>size</b> down to the next appropriate key size for use with the cipher.


#### Returns
The appropriate key size, or -1 if the provided <b>size</b> was not acceptable.


<br/>

### `Method Name:String() Abstract`

Returns the name of the cipher.

<br/>

### `Method Done() Abstract`

When you are finished with a cipher you can de–initialize it with the done method.

<br/>

## Functions

### `Function ListCiphers:String[]()`

Returns a list of all registered ciphers.

<br/>

### `Function Find:TCipher(name:String)`

Gets the cipher index of the given <b>name</b>.

#### Returns
the index or -1 if not found.


<br/>

