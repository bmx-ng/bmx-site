---
id: crypto.ctrmode
title: Crypto.CTRMode
sidebar_label: Crypto.CTRMode
---


A mode which only uses the encryption function of the cipher.

Given a initialization vector which is treated as a large binary counter the CTR mode is given as:
$$$
\begin{aligned}
C_{-1} &= C_{-1} + 1\text{ }(\text{mod }2^W) \\
C_i &= P_i \oplus E_k(C_{-1})
\end{aligned}
$$$

As long as the initialization vector is random for each message encrypted under the same key replay and swap attacks are infeasible.
CTR mode may look simple but it is as secure as the block cipher is under a chosen plaintext attack (provided the initialization vector is unique).


## Types
| Type | Description |
|---|---|
| [TCTRCipherMode](../../crypto/crypto.ctrmode/tctrciphermode) | CTR Cipher Mode |

