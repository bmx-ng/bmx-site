---
id: crypto.cipher
title: Crypto.Cipher
sidebar_label: Introduction
---


### Supported Ciphers

| Name          | Block Size (bytes) | Key Range (bytes) | Rounds |
|---|---|---|---|
| [Crypto.BlowfishCipher](../crypto/crypto_blowfishcipher.md)   | 8  | 8 ... 56   | 16 |
| [Crypto.TeaCipher](../crypto/crypto_teacipher.md)        | 8  | 16         | 32 |
| [Crypto.XteaCipher](../crypto/crypto_xteacipher.md)       | 8  | 16         | 32 |
| [Crypto.AESCipher](../crypto/crypto_aescipher.md)        | 16 | 16, 24, 32 | 10, 12, 14 |
| [Crypto.TwofishCipher](../crypto/crypto_twofishcipher.md)    | 16 | 16, 24, 32 | 16 |
| [Crypto.DESCipher](../crypto/crypto_descipher.md)        | 8  | 8          | 16 |
| 3DES (EDE mode) (See [Crypto.DESCipher](../crypto/crypto_descipher.md)) | 8  | 16, 24     | 16 |
| [Crypto.Cast5Cipher](../crypto/crypto_cast5cipher.md)      | 8  | 5 ... 16   | 12, 16 |
| [Crypto.NoekeonCipher](../crypto/crypto_noekeoncipher.md)    | 16 | 16         | 16 |
| [Crypto.SkipjackCipher](../crypto/crypto_skipjackcipher.md)   | 8  | 10         | 32 |
| [Crypto.AnubisCipher](../crypto/crypto_anubiscipher.md)     | 16 | 16 ... 40  | 12 ... 18 |
| [Crypto.KhazadCipher](../crypto/crypto_khazadcipher.md)     | 8  | 16         | 8 |
| [Crypto.KSEEDCipher](../crypto/crypto_kseedcipher.md)      | 16 | 16         | 16 |
| [Crypto.KASUMICipher](../crypto/crypto_kasumicipher.md)     | 8  | 16         | 8 |
| [Crypto.CamelliaCipher](../crypto/crypto_camelliacipher.md)   | 16 | 16, 24, 32 | 18, 24 |
| [Crypto.IDEACipher](../crypto/crypto_ideacipher.md)       | 8  | 16         | 8 |
| [Crypto.SerpentCipher](../crypto/crypto_serpentcipher.md)    | 16 | 16, 24, 32 | 32 |

### Key sizes and Number of Rounds

As a general rule of thumb, do not use symmetric keys under 80 bits if you can help it.
Only a few of the ciphers support smaller keys (mainly for test vectors anyways).
Ideally, your application should be making at least 256 bit keys. This is not because you are to be paranoid.
It is because if your PRNG has a bias of any sort the more bits the better.
For example, if you have `Pr[X = 1] = 1/2 ±γ` where `|γ| > 0` then the total amount of entropy in N bits is `N·−log^2 (1/2 +|γ|)`.
So if `γ` were 0.25 (a severe bias) a 256-bit string would have about 106 bits of entropy whereas a 128-bit string would have only 53 bits of entropy.

The number of rounds of most ciphers is not an option you can change. Only RC5 allows you to change the number of rounds.
By passing zero as the number of rounds all ciphers will use their default number of rounds. Generally the ciphers are configured such that the default
number of rounds provide adequate security for the given block and key size.


## Types
| Type | Description |
|---|---|
| [TCipher](../../crypto/crypto.cipher/tcipher) | Cipher base type. |
| [TCipherMode](../../crypto/crypto.cipher/tciphermode) | Base type for cipher chaining modes. |

## Methods

### `Method BlockSize:Int() Abstract`

The block size for this cipher.

<br/>

### `Method Setup:Int(key:String, rounds:Int = 0) Abstract`

Sets up the cipher to be used with a given number of <b>rounds</b> and a given <b>key</b>.

<br/>

### `Method Setup:Int(key:Byte[], rounds:Int = 0) Abstract`

Sets up the cipher to be used with a given number of <b>rounds</b> and a given <b>key</b>.

<br/>

### `Method Setup:Int(key:Byte Ptr, keylen:Int, rounds:Int = 0) Abstract`

Sets up the cipher to be used with a given number of <b>rounds</b> and a given key length.

<br/>

### `Method Encrypt:Int(pt:Byte Ptr, ct:Byte Ptr) Abstract`

Encrypts a single block of text, <b>pt</b>, storing the result in the <b>ct</b> buffer.

It is possible that the input and output buffer are the same buffer.
The size of the block can be determined with [BlockSize](../../crypto/crypto.cipher/#method-blocksizeint-abstract).


<br/>

### `Method Decrypt:Int(ct:Byte Ptr, pt:Byte Ptr) Abstract`

Decrypts a single block of text, <b>ct</b>, storing the result in the <b>pt</b> buffer.

It is possible that the input and output buffer are the same buffer.
The size of the block can be determined with [BlockSize](../../crypto/crypto.cipher/#method-blocksizeint-abstract).


<br/>

## Functions

### `Function GetCipher:TCipher(name:String)`

Gets a cipher of the specified <b>name</b>.

A TNoSuchAlgorithmException is thrown if the requested cipher is not available.


<br/>

### `Function GetBlockCipher:TBlockCipher(name:String)`

Gets a block cipher of the specified <b>name</b>.

A TNoSuchAlgorithmException is thrown if the requested block cipher is not available.


<br/>

### `Function GetStreamCipher:TStreamCipher(name:String)`

Gets a stream cipher of the specified <b>name</b>.

A TNoSuchAlgorithmException is thrown if the requested stream cipher is not available.


<br/>

