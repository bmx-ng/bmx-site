---
id: tlrwciphermode
title: TLRWCipherMode
sidebar_label: TLRWCipherMode
---

LRW Cipher Mode


## Methods

### `Method Start:Int(cipher:TCipher, iv:Byte Ptr, key:Byte Ptr, keylen:Int, tweak:Byte Ptr, numRounds:Int)`

Initializes the cipher mode.

The key is specified in two parts. The first <b>key</b> is the (normally AES) key and can be any length (typically 16, 24 or 32 octets long).
The second key is the <b>tweak</b> key and is always 16 octets long.

The <b>tweak</b> value is NOT a nonce or IV value it must be random and secret.


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

Reads the 16 octet IV out of the chaining mode, and stores it in <b>IV</b> along with the <b>length</b> of the IV.

<br/>

### `Method SetIV:Int(IV:Byte Ptr, length:UInt)`

Sets the 16 octet IV.

Note that setting the IV is the same as seeking and unlike other modes is not a free operation.
It requires updating the entire tweak which is slower than sequential use.
Avoid seeking excessively in performance constrained code.


<br/>

### `Method Done:Int()`

Terminates the cipher stream.

<br/>

