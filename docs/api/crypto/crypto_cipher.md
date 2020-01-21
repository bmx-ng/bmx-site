---
id: crypto.cipher
title: Crypto.Cipher
sidebar_label: Introduction
---


### Supported Ciphers

| Name          | Block Size (bytes) | Key Range (bytes) | Rounds |
|---|---|---|---|
| [Crypto.BlowfishCipher](../crypto/crypto_blowfishcipher.md)   | 8  | 8 ... 56   | 16 |
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

