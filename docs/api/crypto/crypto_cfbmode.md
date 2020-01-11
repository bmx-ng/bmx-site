---
id: crypto.cfbmode
title: Crypto.CFBMode
sidebar_label: Crypto.CFBMode
---


Ciphertext Feedback Mode is a mode designed to prevent trivial forms of replay and swap attacks on ciphers.
It is given as:
$$$
\begin{aligned}
C_i &= P_i \oplus C_{-1} \\
C_{-1} &= E_k(C_i)
\end{aligned}
$$$

The output feedback width is equal to the size of the block cipher.
That is this mode is used to encrypt whole blocks at a time. However, the library will buﬀer data allowing the user
to encrypt or decrypt partial blocks without a delay. When this mode is first setup it will initially encrypt the initialization vector as required.


## Types
| Type | Description |
|---|---|
| [TCFBCipherMode](../../crypto/crypto.cfbmode/tcfbciphermode) | CFB Cipher Mode |

