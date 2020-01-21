---
id: crypto.cbcmode
title: Crypto.CBCMode
sidebar_label: Introduction
---


Cipher Block Chaining mode is a simple mode designed to prevent trivial forms of replay and swap attacks on ciphers.
It is given as:
$$$
C_i = E_k(P_i \oplus C_{i - 1})
$$$

It is important that the initialization vector be unique and preferably random for each message encrypted under the same key.


## Types
| Type | Description |
|---|---|
| [TCBCCipherMode](../../crypto/crypto.cbcmode/tcbcciphermode) | CBC Cipher Mode. |

