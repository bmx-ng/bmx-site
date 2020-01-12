---
id: crypto.digest
title: Crypto.Digest
sidebar_label: Crypto.Digest
---


### Supported Digests

| Name | Size of Message Digest (bytes) |
|---|---|
| [Crypto.WhirlpoolDigest](../crypto/crypto_whirlpooldigest.md)          | 64 |
| [Crypto.SHA3Digest](../crypto/crypto_sha3digest.md) ([TSHA3_512])  | 64 |
| [Crypto.SHA512Digest](../crypto/crypto_sha512digest.md)             | 64 |
| [Crypto.SHA3Digest](../crypto/crypto_sha3digest.md) ([TSHA3_384])  | 48 |
| [Crypto.SHA3Digest](../crypto/crypto_sha3digest.md) ([TSHA3_256])  | 32 |
| [Crypto.SHA256Digest](../crypto/crypto_sha256digest.md)             | 32 |
| [Crypto.SHA3Digest](../crypto/crypto_sha3digest.md) ([TSHA3_224])  | 28 |
| [Crypto.SHA1Digest](../crypto/crypto_sha1digest.md)               | 20 |
| [Crypto.MD5Digest](../crypto/crypto_md5digest.md)                | 16 |

[TSHA3_512]: ../crypto.sha3digest/tsha3_512
[TSHA3_384]: ../crypto.sha3digest/tsha3_384
[TSHA3_256]: ../crypto.sha3digest/tsha3_256
[TSHA3_224]: ../crypto.sha3digest/tsha3_224


## Types
| Type | Description |
|---|---|
| [TNoSuchAlgorithmException](../../crypto/crypto.digest/tnosuchalgorithmexception) | This exception is thrown when a particular cryptographic algorithm is requested but is not available in the environment. |
| [TMessageDigest](../../crypto/crypto.digest/tmessagedigest) | An abstract base type for message digest implementations. |
| [TDigestRegister](../../crypto/crypto.digest/tdigestregister) | A register of available message digests and cryptographic functions. |

## Functions

### `Function GetMessageDigest:TMessageDigest(name:String)`

Gets a digest of the specified <b>name</b>.

A [TNoSuchAlgorithmException](../../crypto/crypto.digest/tnosuchalgorithmexception) is thrown if the requested digest is not available.


<br/>

### `Function ListDigests:TArrayList<String>()`

Returns a list of all currently registered digests.

The returned digest names can be used with [GetMessageDigest](../../crypto/crypto.digest/#function-getmessagedigesttmessagedigestnamestring) to get a [TMessageDigest](../../crypto/crypto.digest/tmessagedigest) instance.


<br/>

### `Function BytesToHex:String(bytes:Byte[], uppercase:Int = False)`

Returns a hex representation of [Byte](../../brl/brl.blitz/#byte) array <b>bytes</b>.

<br/>

### `Function BytesToHex:String(bytes:Byte Ptr, size:Int, uppercase:Int = False)`

Returns a hex representation of <b>size</b> <b>bytes</b>.

<br/>

