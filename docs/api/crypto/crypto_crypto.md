---
id: crypto.crypto
title: Crypto.Crypto
sidebar_label: Introduction to Crypto.Crypto
---


## Types
| Type | Description |
|---|---|
| [TCryptoRandom](../../crypto/crypto.crypto/tcryptorandom) | Generate unpredictable data, suitable for creating secret keys. |
| [TCryptoKey](../../crypto/crypto.crypto/tcryptokey) | A base for key implementations. |
| [TCryptoHashKey](../../crypto/crypto.crypto/tcryptohashkey) | A secret key suitable for use with the [TCryptoHash](../../crypto/crypto.crypto/tcryptohash) functions. |
| [TCryptoHash](../../crypto/crypto.crypto/tcryptohash) | Transforms an arbitrary-long input into a fixed length fingerprint |
| [TCryptoSecretBoxKey](../../crypto/crypto.crypto/tcryptosecretboxkey) | A secret key suitable for use with [TCryptoSecretBox](../../crypto/crypto.crypto/tcryptosecretbox). |
| [TCryptoSecretBox](../../crypto/crypto.crypto/tcryptosecretbox) | Encrypts a message with a secret key to keep it confidential. |
| [TCryptoSignKeyPair](../../crypto/crypto.crypto/tcryptosignkeypair) | A secret key and a corresponding public key. |
| [TCryptoSignature](../../crypto/crypto.crypto/tcryptosignature) | The signature for a message signed by a TCryptoSignKeyPair.secretKey. |
| [TCryptoSign](../../crypto/crypto.crypto/tcryptosign) | Message signing. |
| [TCryptoExchangeKeyPair](../../crypto/crypto.crypto/tcryptoexchangekeypair) | A long-term key pair. |
| [TCryptoSessionKeyPair](../../crypto/crypto.crypto/tcryptosessionkeypair) | A session key pair. |
| [TCryptoNPacket](../../crypto/crypto.crypto/tcryptonpacket) | Packet in N variant key exchange. |
| [TCryptoKK1Packet](../../crypto/crypto.crypto/tcryptokk1packet) | Packet 1 in KK variant key exchange. |
| [TCryptoKK2Packet](../../crypto/crypto.crypto/tcryptokk2packet) | Packet 2 in KK variant key exchange. |
| [TCryptoXX1Packet](../../crypto/crypto.crypto/tcryptoxx1packet) | Packet 1 in XX variant key exchange. |
| [TCryptoXX2Packet](../../crypto/crypto.crypto/tcryptoxx2packet) | Packet 2 in XX variant key exchange. |
| [TCryptoXX3Packet](../../crypto/crypto.crypto/tcryptoxx3packet) | Packet 3 in XX variant key exchange. |
| [TCryptoExchangeState](../../crypto/crypto.crypto/tcryptoexchangestate) | Key exchange state. |
| [TCryptoKeyExchange](../../crypto/crypto.crypto/tcryptokeyexchange) | Secure message exchange |
| [TCryptoPWHashMasterKey](../../crypto/crypto.crypto/tcryptopwhashmasterkey) | A secret key suitable for use with the [TCryptoHash](../../crypto/crypto.crypto/tcryptohash) functions. |
| [TCryptoPWHashStoredKey](../../crypto/crypto.crypto/tcryptopwhashstoredkey) | A fixed-length, hashed, encrypted, authenticated representative of a password, that can be safely stored in a database. |
| [TCryptoPasswordHash](../../crypto/crypto.crypto/tcryptopasswordhash) | Password Hashing |

