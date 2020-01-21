---
id: crypto.ecbmode
title: Crypto.ECBMode
sidebar_label: Introduction to Crypto.ECBMode
---


Electronic Codebook Mode is the simplest method to use.
It is given as:
$$$
C_i = E_k(P_i)
$$$

It is very weak since it allows people to swap blocks and perform replay attacks if the same key is used more than once.


## Types
| Type | Description |
|---|---|
| [TECBCipherMode](../../crypto/crypto.ecbmode/tecbciphermode) | ECB Cipher Mode |

