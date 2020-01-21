---
id: crypto.xtsmode
title: Crypto.XTSMode
sidebar_label: Introduction
---


A chaining mode for 128–bit block ciphers, recommended by IEEE (P1619) for disk encryption.

It is meant to be an encryption mode with random access to the message data without compromising privacy.
It requires two private keys (of equal length) to perform the encryption process.
Each encryption invocation includes a sector number or unique identifier specified as a 128–bit string.


## Types
| Type | Description |
|---|---|
| [TXTSCipherMode](../../crypto/crypto.xtsmode/txtsciphermode) | XTS Cipher Mode. |

