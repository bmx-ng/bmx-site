---
id: tcryptosecretbox
title: TCryptoSecretBox
sidebar_label: TCryptoSecretBox
---

Encrypts a message with a secret key to keep it confidential.


Computes a nonce and an authentication tag. This tag is used to make sure that the message hasn't been tampered with before decrypting it.

A single key is used both to encrypt/sign and verify/decrypt messages. For this reason, it is critical to keep the key confidential.


## Functions

### `Function KeyGen:TCryptoSecretBoxKey()`

Generates a secret key suitable for use with [TCryptoSecretBox](../../../brl/brl.crypto/tcryptosecretbox).

<br/>

### `Function Encrypt:Int(c:Byte Ptr, cLen:Size_T, m:Byte Ptr, mLen:Size_T, msgId:ULong, context:String, key:TCryptoKey)`

Encrypts a message <b>m</b> of length <b>mLen</b> bytes using a <b>context</b>, a secret <b>key</b> and a message counter <b>msgId</b>.

It puts the ciphertext whose length is CRYPTO_SECRETBOX_HEADERBYTES + mlen into <b>c</b>.

The header includes an automatically-generated 160-bit nonce as well as a 128-bit authentication tag.

A nonce doesn't have to be provided: it is automatically computed using the output of the PRNG and a keyed hash of the message
and its metadata. This prevents catastrophic failures even if the PRNG cannot be trusted.

<b>msgId</b> is an optional message tag. For example, if 3 messages are sent to the same recipient using the same key, these messages
can sequentially use 0, 1 and 2 as identifiers.

If the recipient expects message 2, but receives a message with a different identifier, it will not decrypt it even if it was
encrypted with the correct key.

This can be used to discard duplicate or old messages.

A <b>msgId</b> doesn't have to be secret and it doesn't have to be sequential either. Some applications might prefer a coarse timestamp instead.
Any value up to 2^64-1 is acceptable.

If this mechanism is not required by an application, using a constant <b>msgId</b> such as 0 is also totally fine. Message identifiers are
optional and do not have to be unique.


<br/>

### `Function Encrypt:Int(c:Byte[], m:Byte[], msgId:ULong, context:String, key:TCryptoKey)`

Encrypts a message <b>m</b> using a <b>context</b>, a secret <b>key</b> and a message counter <b>msgId</b>.

It puts the ciphertext whose length is <b>CRYPTO_SECRETBOX_HEADERBYTES</b> + m.length into c.

The header includes an automatically-generated 160-bit nonce as well as a 128-bit authentication tag.

A nonce doesn't have to be provided: it is automatically computed using the output of the PRNG and a keyed hash of the message
and its metadata. This prevents catastrophic failures even if the PRNG cannot be trusted.

<b>msgId</b> is an optional message tag. For example, if 3 messages are sent to the same recipient using the same key, these messages
can sequentially use 0, 1 and 2 as identifiers.

If the recipient expects message 2, but receives a message with a different identifier, it will not decrypt it even if it was
encrypted with the correct key.

This can be used to discard duplicate or old messages.

A <b>msgId</b> doesn't have to be secret and it doesn't have to be sequential either. Some applications might prefer a coarse timestamp instead.
Any value up to 2^64-1 is acceptable.

If this mechanism is not required by an application, using a constant <b>msgId</b> such as 0 is also totally fine. Message identifiers are
optional and do not have to be unique.


<br/>

### `Function Decrypt:Int(m:Byte Ptr, mLen:Size_T, c:Byte Ptr, cLen:Size_T, msgId:ULong, context:String, key:TCryptoKey)`

Decrypts the ciphertext <b>c</b> of length <b>cLen</b> (which includes the <b>CRYPTO_SECRETBOX_HEADERBYTES</b> bytes header) using the secret key <b>key</b>, the <b>context</b> and the message identifier <b>msgId</b>.

If the authentication tag can be verified using these parameters, the function stores the decrypted message into <b>m</b>.
The length of this decrypted message is cLen - CRYPTO_SECRETBOX_KEYBYTES. It then returns [True](../../../brl/brl.blitz/#true).

If the authentication tag doesn't appear to be valid for these parameters, the function returns [False](../../../brl/brl.blitz/#false).


<br/>

### `Function Decrypt:Int(m:Byte[], c:Byte[], msgId:ULong, context:String, key:TCryptoKey)`

Decrypts the ciphertext <b>c</b> (which includes the CRYPTO_SECRETBOX_HEADERBYTES bytes header) using the secret key <b>key</b>, the <b>context</b> and the message identifier <b>msgId</b>.

If the authentication tag can be verified using these parameters, the function stores the decrypted message into <b>m</b>.
The length of this decrypted message is c.length - CRYPTO_SECRETBOX_KEYBYTES. It then returns [True](../../../brl/brl.blitz/#true).

If the authentication tag doesn't appear to be valid for these parameters, the function returns [False](../../../brl/brl.blitz/#false).


<br/>

### `Function ProbeCreate(probe:Byte Ptr, probeLen:Size_T, c:Byte Ptr, cLen:Size_T, context:String, key:TCryptoKey)`

Computes a probe for the ciphertext <b>c</b> whose length is <b>cLen</b>, using the <b>context</b> and a shared secret key <b>key</b>.

The probe is put into probe whose size is CRYPTO_SECRETBOX_PROBEBYTES bytes.


<br/>

### `Function ProbeCreate(probe:Byte[], c:Byte[], context:String, key:TCryptoKey)`

Computes a probe for the ciphertext <b>c</b>, using the <b>context</b> and a shared secret key <b>key</b>.

The probe is put into <b>probe</b> whose size is CRYPTO_SECRETBOX_PROBEBYTES bytes.


<br/>

### `Function ProbeVerify:Int(probe:Byte Ptr, probeLen:Size_T, c:Byte Ptr, cLen:Size_T, context:String, key:TCryptoKey)`

Verifies that a received probe <b>probe</b> is valid for the ciphertext <b>c</b> whose length is <b>cLen</b>, using the <b>context</b> and the shared secret key <b>key</b> that was initially used to compute the probe.

It returns [True](../../../brl/brl.blitz/#true) on success, and [False](../../../brl/brl.blitz/#false) if the probe didn't pass verification.


<br/>

### `Function ProbeVerify:Int(probe:Byte[], c:Byte[], context:String, key:TCryptoKey)`

Verifies that a received probe <b>probe</b> is valid for the ciphertext <b>c</b>, using the <b>context</b> and the shared secret key <b>key</b> that was initially used to compute the probe.

It returns [True](../../../brl/brl.blitz/#true) on success, and [False](../../../brl/brl.blitz/#false) if the probe didn't pass verification.


<br/>

