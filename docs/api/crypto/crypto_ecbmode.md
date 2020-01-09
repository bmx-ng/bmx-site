---
id: crypto.ecbmode
title: Crypto.ECBMode
sidebar_label: Crypto.ECBMode
---


Electronic Codebook Mode is the simplest method to use.
It is given as:
$$$
C_i = E_k(P_i)
$$$

It is very weak since it allows people to swap blocks and perform replay attacks if the same key is used more than once.


## Methods

### `Method Encrypt:Int(pt:Byte Ptr, ct:Byte Ptr, length:UInt)`

Encrypts the plaintext <b>pt</b> of <b>length</b> to <b>ct</b>.

<b>length</b> must be a multiple of the cipher block size, otherwise you must manually pad the end of your
message (either with zeroes or with whatever your protocol requires).


#### Returns
CRYPT_OK on success.


<br/>

### `Method Done:Int()`

Terminates the cipher stream.

<br/>

