---
id: tecbciphermode
title: TECBCipherMode
sidebar_label: TECBCipherMode
---

ECB Cipher Mode


A symmetric mode block cipher.


## Methods

### `Method Start:Int(cipher:TCipher, key:Byte Ptr, keylen:Int, numRounds:Int)`

Initializes the cipher mode.

#### Returns
CRYPT_OK if the cipher initialized correctly, otherwise, returns an error code.


<br/>

### `Method Encrypt:Int(pt:Byte Ptr, ct:Byte Ptr, length:UInt)`

Encrypts the plaintext <b>pt</b> of <b>length</b> to <b>ct</b>.

<b>length</b> must be a multiple of the cipher block size, otherwise you must manually pad the end of your
message (either with zeroes or with whatever your protocol requires).


#### Returns
CRYPT_OK on success.


<br/>

### `Method Decrypt:Int(ct:Byte Ptr, pt:Byte Ptr, length:UInt)`

Decrypts the ciphertext <b>ct</b> of <b>length</b> to <b>pt</b>.

#### Returns
CRYPT_OK on success.


<br/>

### `Method Done:Int()`

Terminates the cipher stream.

<br/>

