---
id: crypto.digest
title: Crypto.Digest
sidebar_label: Crypto.Digest
---


A core tool of modern cryptography, message digests are a string of digits created by one-way hash function that is practically infeasible to reverse.

Because they are generally fast to compute, they are often used to protect the integrity of files and other data.

[Crypto.Digest](../crypto/crypto_digest.md) supports a wide range of commonly used digests and redundancy checking formulas.

For more general information, see <https://en.wikipedia.org/wiki/Cryptographic_hash_function>

### Supported Digests

The following is a list of available digests :

| Name | Size of Message Digest (bytes) |
|---|:---:|
| [Crypto.WhirlpoolDigest](../crypto/crypto_whirlpooldigest.md)           | 64 |
| [Crypto.SHA3Digest](../crypto/crypto_sha3digest.md) ([TSHA3_512])  | 64 |
| [Crypto.SHA512Digest](../crypto/crypto_sha512digest.md)              | 64 |
| [Crypto.Blake2BDigest](../crypto/crypto_blake2bdigest.md) ([TBlake2B_512])  | 64 |
| [Crypto.SHA3Digest](../crypto/crypto_sha3digest.md) ([TSHA3_384])  | 48 |
| [Crypto.Blake2BDigest](../crypto/crypto_blake2bdigest.md) ([TBlake2B_384])  | 48 |
| [Crypto.Ripemd320Digest](../crypto/crypto_ripemd320digest.md)           | 40 |
| [Crypto.SHA3Digest](../crypto/crypto_sha3digest.md) ([TSHA3_256])  | 32 |
| [Crypto.SHA256Digest](../crypto/crypto_sha256digest.md)              | 32 |
| [Crypto.Ripemd256Digest](../crypto/crypto_ripemd256digest.md)           | 32 |
| [Crypto.Blake2BDigest](../crypto/crypto_blake2bdigest.md) ([TBlake2B_256])  | 32 |
| [Crypto.SHA3Digest](../crypto/crypto_sha3digest.md) ([TSHA3_224])  | 28 |
| [Crypto.TigerDigest](../crypto/crypto_tigerdigest.md)               | 24 |
| [Crypto.SHA1Digest](../crypto/crypto_sha1digest.md)                | 20 |
| [Crypto.Ripemd160Digest](../crypto/crypto_ripemd160digest.md)           | 20 |
| [Crypto.Blake2BDigest](../crypto/crypto_blake2bdigest.md) ([TBlake2B_160])  | 20 |
| [Crypto.Ripemd128Digest](../crypto/crypto_ripemd128digest.md)           | 16 |
| [Crypto.MD5Digest](../crypto/crypto_md5digest.md)                 | 16 |

[TSHA3_512]: ../crypto.sha3digest/tsha3_512
[TSHA3_384]: ../crypto.sha3digest/tsha3_384
[TSHA3_256]: ../crypto.sha3digest/tsha3_256
[TSHA3_224]: ../crypto.sha3digest/tsha3_224
[TBlake2B_512]: ../crypto.blake2bdigest/tblake2b_512
[TBlake2B_384]: ../crypto.blake2bdigest/tblake2b_384
[TBlake2B_256]: ../crypto.blake2bdigest/tblake2b_256
[TBlake2B_160]: ../crypto.blake2bdigest/tblake2b_160


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


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import Crypto.MD5Digest

Local data:String = "Hello World"

Local digest:TMessageDigest = GetMessageDigest("md5")

If digest Then
	Print digest.Digest(data)
End If
```
<br/>

### `Function ListDigests:TArrayList<String>()`

Returns a list of all currently registered digests.

The returned digest names can be used with [GetMessageDigest](../../crypto/crypto.digest/#function-getmessagedigesttmessagedigestnamestring) to get a [TMessageDigest](../../crypto/crypto.digest/tmessagedigest) instance.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import Crypto.MD5Digest
Import Crypto.SHA3Digest

Print "Available digests:"
For Local digest:String = EachIn ListDigests()
	Print "  " + digest
Next
```
<br/>

### `Function BytesToHex:String(bytes:Byte[], uppercase:Int = False)`

Returns a hex representation of [Byte](../../brl/brl.blitz/#byte) array <b>bytes</b>.

<br/>

### `Function BytesToHex:String(bytes:Byte Ptr, size:Int, uppercase:Int = False)`

Returns a hex representation of <b>size</b> <b>bytes</b>.

<br/>

