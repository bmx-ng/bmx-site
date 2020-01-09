---
id: crypto.cbcmode
title: Crypto.CBCMode
sidebar_label: Crypto.CBCMode
---


Cipher Block Chaining mode is a simple mode designed to prevent trivial forms of replay and swap attacks on ciphers.
It is given as:
$$$
C_i = E_k(P_i \oplus C_{i - 1})
$$$

It is important that the initialization vector be unique and preferably random for each message encrypted under the same key.


## Methods

### `Method Encrypt:Int(pt:Byte Ptr, ct:Byte Ptr, length:UInt)`

Encrypts the plaintext <b>pt</b> of <b>length</b> to <b>ct</b>.

<b>length</b> must be a multiple of the cipher block size, otherwise you must manually pad the end of your
message (either with zeroes or with whatever your protocol requires).


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

