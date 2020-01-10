---
id: tf8ciphermode
title: TF8CipherMode
sidebar_label: TF8CipherMode
---

F8 Cipher Mode


A chaining mode for block ciphers.


## Methods

### `Method Start:Int(cipher:TCipher, iv:Byte Ptr, key:Byte Ptr, keylen:Int, saltKey:Byte Ptr, saltkeylen:Int, numRounds:Int)`

Starts the cipher mode state using <b>key</b> as the secret key and <b>iv</b> as the counter.

It uses <b>saltKey</b> as the IV encryption. The salt key can be shorter than the secret key, but not longer.


#### Returns
CRYPT_OK if the cipher initialized correctly, otherwise, returns an error code.


<br/>

### `Method Encrypt:Int(pt:Byte Ptr, ct:Byte Ptr, length:UInt)`

Encrypts the plaintext <b>pt</b> of <b>length</b> to <b>ct</b>.

The <b>length</b> is specified in bytes and does not have to be a multiple of the ciphers block size.


#### Returns
CRYPT_OK on success.


<br/>

### `Method Decrypt:Int(ct:Byte Ptr, pt:Byte Ptr, length:UInt)`

Decrypts the ciphertext <b>ct</b> of <b>length</b> to <b>pt</b>.

The <b>length</b> is specified in bytes and does not have to be a multiple of the ciphers block size.


#### Returns
CRYPT_OK on success.


<br/>

### `Method GetIV:Int(IV:Byte Ptr, length:UInt Var)`

Reads the IV out of the chaining mode, and stores it in <b>IV</b> along with the <b>length</b> of the IV.

This works with the current IV value only and not the encrypted IV value specified during the call to [Start](../../../crypto/crypto.f8mode/tf8ciphermode/#method-startintciphertcipher-ivbyte-ptr-keybyte-ptr-keylenint-saltkeybyte-ptr-saltkeylenint-numroundsint).
The purpose of this method is to be able to seek within a current session only. If you want to change the session IV you will have to call [Done](../../../crypto/crypto.f8mode/tf8ciphermode/#method-doneint) and
then start a new state with [Start](../../../crypto/crypto.f8mode/tf8ciphermode/#method-startintciphertcipher-ivbyte-ptr-keybyte-ptr-keylenint-saltkeybyte-ptr-saltkeylenint-numroundsint).


<br/>

### `Method SetIV:Int(IV:Byte Ptr, length:UInt)`

Initializes the chaining mode state as if the original IV were the new IV specified.

The <b>length</b> of <b>IV</b> must be the size of the cipher block size.

This method is handy if you wish to change the IV without re–keying the cipher.

The IV is encrypted as if it were the prior encrypted pad.


<br/>

### `Method Done:Int()`

Terminates the cipher stream.

<br/>

