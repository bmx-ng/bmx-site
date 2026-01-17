---
id: tctrciphermode
title: TCTRCipherMode
sidebar_label: TCTRCipherMode
---

CTR Cipher Mode


A symmetric mode block cipher.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import crypto.ctrmode
Import crypto.aescipher
Import crypto.crypto
Import brl.base64

Local cipher:TCipher = TCipher.Find("aes")
Local cipherMode:TCTRCipherMode = New TCTRCipherMode

Local txt:String = "The quick brown fox jumped over the lazy dog"
Print "Text    = " + txt

Local iv:Byte[32]
Local key:Byte[32]
TCryptoRandom.FillBuffer(iv)
TCryptoRandom.FillBuffer(key)

Print "IV      = " + TBase64.Encode(iv)
Print "Key     = " + TBase64.Encode(key)

Local pbuf:Byte Ptr = txt.ToUTF8String()
Local cbuf:Byte[txt.length]

cipherMode.Start(cipher, iv, key, 32, 14, ECTRCounterMode.LITTLE_ENDIAN)
cipherMode.Encrypt(pbuf, cbuf, UInt(txt.length))
cipherMode.Done()

Print "Encoded = " + TBase64.Encode(cbuf)

Local buf:Byte[txt.length + 1]

cipherMode.Start(cipher, iv, key, 32, 14, ECTRCounterMode.LITTLE_ENDIAN)
cipherMode.Decrypt(cbuf, buf, UInt(txt.length))
cipherMode.Done()

Print "Decoded = " + String.FromUTF8String(buf)
```
## Methods

### `Method Start:Int(cipher:TCipher, iv:Byte Ptr, key:Byte Ptr, keylen:Int, numRounds:Int, counterMode:ECTRCounterMode)`

Initializes the cipher mode.

The <b>iv</b> value is the initialization vector to be used with the cipher.
You must fill the IV yourself and it is assumed they are the same length as the block size of the cipher you choose.
It is important that the IV be random for each unique message you want to encrypt.

The <b>counterMode</b> parameter specfies the mode that the counter is to be used in. If ECTRCounterMode LITTLE_ENDIAN is specfied
then the counter will be treated as a little endian value. Otherwise, if BIG_ENDIAN is specified the counter will be treated as a
big endian value.
The RFC 3686 style of increment for encryption is also supported, by OR'ing RFC3686 with the CTR mode value.
The counter will be incremented before encrypting it for the first time.
It also supports variable length counters for CTR mode. The (optional) counter length is specified by OR'ing the octet length of
the counter against the <b>counterMode</b> parameter. The default, zero, indicates that a full block length counter will be used.


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

The IV is encrypted as if it were the prior encrypted pad.


<br/>

### `Method Done:Int()`

Terminates the cipher stream.

<br/>

