---
id: crypto.digest
title: Crypto.Digest
sidebar_label: Crypto.Digest
---


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

