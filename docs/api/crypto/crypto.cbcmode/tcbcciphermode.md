---
id: tcbcciphermode
title: TCBCCipherMode
sidebar_label: TCBCCipherMode
---

CBC Cipher Mode.


A symmetric mode block cipher.


## Methods

### `Method Start:Int(cipher:TCipher, iv:Byte Ptr, key:Byte Ptr, keylen:Int, numRounds:Int)`

Initializes the cipher mode.

The <b>iv</b> value is the initialization vector to be used with the cipher.
You must fill the IV yourself and it is assumed they are the same length as the block size of the cipher you choose.
It is important that the IV be random for each unique message you want to encrypt.


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

### `Method GetIV:Int(IV:Byte Ptr, length:UInt Var)`

Reads the IV out of the chaining mode, and stores it in <b>IV</b> along with the <b>length</b> of the IV.

<br/>

### `Method SetIV:Int(IV:Byte Ptr, length:UInt)`

Initializes the chaining mode state as if the original IV were the new IV specified.

The <b>length</b> of <b>IV</b> must be the size of the cipher block size.

This method is handy if you wish to change the IV without re–keying the cipher.

The new IV replaces the existing IV as if it were the last ciphertext block.


<br/>

### `Method Done:Int()`

Terminates the cipher stream.

<br/>

