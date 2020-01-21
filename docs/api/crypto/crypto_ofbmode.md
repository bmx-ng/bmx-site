---
id: crypto.ofbmode
title: Crypto.OFBMode
sidebar_label: Introduction
---


Similar to [Crypto.CBCMode](../crypto/crypto_cbcmode.md), it is a simple mode designed to prevent trivial forms of replay and swap attacks on ciphers.
It is given as:
$$$
\begin{aligned}
C_{-1} &= E_k(C_{-1}) \\
C_i &= P_i \oplus C_{-1}
\end{aligned}
$$$

Like in the [Crypto.CFBMode](../crypto/crypto_cfbmode.md), the output width is the same as the width of the block cipher.
This mode will also buﬀer the output which will allow you to encrypt or decrypt partial blocks without delay.


## Types
| Type | Description |
|---|---|
| [TOFBCipherMode](../../crypto/crypto.ofbmode/tofbciphermode) | OFB Cipher Mode |

