---
id: tcryptohash
title: TCryptoHash
sidebar_label: TCryptoHash
---

Transforms an arbitrary-long input into a fixed length fingerprint


This API requires a context.
Similar to a type, a context is a 8 characters string describing what the function is going to be used for.

Its purpose is to mitigate accidental bugs by separating domains. The same function used with the same key but
in two distinct contexts is likely to generate two different outputs.

Therefore, a key designed to encrypt data used in a specific context will not be able to decrypt data if
accidentally used in another context.

Contexts don't have to be secret and can have a low entropy. Examples of contexts include `UserName`, `__auth__`, `pictures` and `userdata`.

If more convenient, it is also fine to use a single global context for a whole application. This will still prevent
the same key from being mistakenly used by another application.


## Methods

### `Method Create:TCryptoHash(context:String, key:TCryptoHashKey)`

Initializes a state state with a key <b>key</b> (that can be NULL), in order to eventually produce output.

<br/>

### `Method Update:Int(in:Byte Ptr, inLen:Size_T)`

Sequentially processes a chunk <b>in</b> of <b>inLen</b> bytes in length.

<br/>

### `Method Update:Int(in:Byte[])`

Sequentially processes a chunk <b>in</b>.

<br/>

### `Method Finish(out:Byte Ptr, outLen:Size_T)`

Completes the operation and puts the final fingerprint into <b>out</b> as <b>outlen</b> bytes.

<br/>

### `Method Finish(out:Byte[])`

Completes the operation and puts the final fingerprint into <b>out</b>.

<br/>

## Functions

### `Function KeyGen:TCryptoHashKey()`

Creates a secret key suitable for use with the [TCryptoHash](../../../brl/brl.crypto/tcryptohash) functions.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.crypto

Local key:TCryptoHashKey = TCryptoHash.KeyGen()

Print key.ToString()
```
<br/>

### `Function Hash:Int(out:Byte Ptr, outLen:Size_T, in:Byte Ptr, inLen:Size_T, context:String, key:TCryptoHashKey)`

Puts a fingerprint of the message <b>in</b> whose length is <b>inLen</b> bytes into <b>out</b>.

The output size can be chosen by the application.
The minimum recommended output size is CRYPTO_HASH_BYTES. This size makes it practically impossible for
two messages to produce the same fingerprint.

But for specific use cases, the size can be any value between CRYPTO_HASH_BYTES_MIN (included) and CRYPTO_HASH_BYTES_MAX (included).

<b>key</b> can be NULL. In this case, a message will always have the same fingerprint, similar to the MD5 or SHA-1 functions for which
[Hash](../../../brl/brl.crypto/tcryptohash/#function-hash-intout-byte-ptr-outlen-size-t-in-byte-ptr-inlen-size-t-context-string-key-tcryptohashkey)() is a faster and more secure alternative.

But a key can also be specified. A message will always have the same fingerprint for a given key, but different keys used
to hash the same message are very likely to produce distinct fingerprints.

In particular, the key can be used to make sure that different applications generate different fingerprints even if they process the same data.

The key size is CRYPTO_HASH_KEYBYTES bytes.


<br/>

### `Function Hash:Int(out:Byte[], in:Byte[], context:String, key:TCryptoHashKey)`

Puts a fingerprint of the message <b>in</b> into <b>out</b>.

The output size can be chosen by the application.
The minimum recommended output size is CRYPTO_HASH_BYTES. This size makes it practically impossible for
two messages to produce the same fingerprint.

But for specific use cases, the size can be any value between CRYPTO_HASH_BYTES_MIN (included) and CRYPTO_HASH_BYTES_MAX (included).

<b>key</b> can be NULL. In this case, a message will always have the same fingerprint, similar to the MD5 or SHA-1 functions for which
[Hash](../../../brl/brl.crypto/tcryptohash/#function-hash-intout-byte-ptr-outlen-size-t-in-byte-ptr-inlen-size-t-context-string-key-tcryptohashkey)() is a faster and more secure alternative.

But a key can also be specified. A message will always have the same fingerprint for a given key, but different keys used
to hash the same message are very likely to produce distinct fingerprints.

In particular, the key can be used to make sure that different applications generate different fingerprints even if they process the same data.

The key size is CRYPTO_HASH_KEYBYTES bytes.


<br/>

