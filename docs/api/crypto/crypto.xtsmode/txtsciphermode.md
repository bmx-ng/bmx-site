---
id: txtsciphermode
title: TXTSCipherMode
sidebar_label: TXTSCipherMode
---

XTS Cipher Mode.


A chaining mode for 128–bit block ciphers


## Methods

### `Method Start:Int(cipher:TCipher, key1:Byte Ptr, key2:Byte Ptr, keylen:Int, numRounds:Int)`

Initializes the cipher mode.

It requires two private keys (of equal length) to perform the encryption process.


#### Returns
CRYPT_OK if the cipher initialized correctly, otherwise, returns an error code.


<br/>

### `Method Encrypt:Int(pt:Byte Ptr, ptlength:UInt, ct:Byte Ptr, tweak:Byte Ptr)`

Encrypts the plaintext <b>pt</b> of <b>length</b> to <b>ct</b>.

Supports ciphertext stealing (blocks that are not multiples of 16 bytes).

The P1619 specification states the tweak for sector number shall be represented as a 128–bit little endian string.


#### Returns
CRYPT_OK on success.


<br/>

### `Method Decrypt:Int(ct:Byte Ptr, ptlength:UInt, pt:Byte Ptr, tweak:Byte Ptr)`

Decrypts the ciphertext <b>ct</b> of <b>length</b> to <b>pt</b>.

Supports ciphertext stealing (blocks that are not multiples of 16 bytes).

The P1619 specification states the tweak for sector number shall be represented as a 128–bit little endian string.


#### Returns
CRYPT_OK on success.


<br/>

### `Method Done:Int()`

Terminates the cipher stream.

<br/>

