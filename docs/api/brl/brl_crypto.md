---
id: brl.crypto
title: BRL.Crypto
sidebar_label: BRL.Crypto
---


## Types
| Type | Description |
|---|---|
| [TCryptoRandom](../../brl/brl.crypto/tcryptorandom) | Generate unpredictable data, suitable for creating secret keys. |
| [TCryptoKey](../../brl/brl.crypto/tcryptokey) | A base for key implementations. |
| [TCryptoHashKey](../../brl/brl.crypto/tcryptohashkey) | A secret key suitable for use with the [TCryptoHash](../../brl/brl.crypto/tcryptohash) functions. |
| [TCryptoHash](../../brl/brl.crypto/tcryptohash) | Transforms an arbitrary-long input into a fixed length fingerprint |
| [TCryptoSecretBoxKey](../../brl/brl.crypto/tcryptosecretboxkey) | A secret key suitable for use with [TCryptoSecretBox](../../brl/brl.crypto/tcryptosecretbox). |
| [TCryptoSecretBox](../../brl/brl.crypto/tcryptosecretbox) | Encrypts a message with a secret key to keep it confidential. |
| [TCryptoSignKeyPair](../../brl/brl.crypto/tcryptosignkeypair) | A secret key and a corresponding public key. |
| [TCryptoSignature](../../brl/brl.crypto/tcryptosignature) | The signature for a message signed by a TCryptoSignKeyPair.secretKey. |
| [TCryptoSign](../../brl/brl.crypto/tcryptosign) | Message signing. |
| [TCryptoExchangeKeyPair](../../brl/brl.crypto/tcryptoexchangekeypair) | A long-term key pair. |
| [TCryptoSessionKeyPair](../../brl/brl.crypto/tcryptosessionkeypair) | A session key pair. |
| [TCryptoNPacket](../../brl/brl.crypto/tcryptonpacket) | Packet in N variant key exchange. |
| [TCryptoKK1Packet](../../brl/brl.crypto/tcryptokk1packet) | Packet 1 in KK variant key exchange. |
| [TCryptoKK2Packet](../../brl/brl.crypto/tcryptokk2packet) | Packet 2 in KK variant key exchange. |
| [TCryptoXX1Packet](../../brl/brl.crypto/tcryptoxx1packet) | Packet 1 in XX variant key exchange. |
| [TCryptoXX2Packet](../../brl/brl.crypto/tcryptoxx2packet) | Packet 2 in XX variant key exchange. |
| [TCryptoXX3Packet](../../brl/brl.crypto/tcryptoxx3packet) | Packet 3 in XX variant key exchange. |
| [TCryptoExchangeState](../../brl/brl.crypto/tcryptoexchangestate) | Key exchange state. |
| [TCryptoKeyExchange](../../brl/brl.crypto/tcryptokeyexchange) | Secure message exchange |
| [TCryptoPWHashMasterKey](../../brl/brl.crypto/tcryptopwhashmasterkey) | A secret key suitable for use with the [TCryptoHash](../../brl/brl.crypto/tcryptohash) functions. |
| [TCryptoPWHashStoredKey](../../brl/brl.crypto/tcryptopwhashstoredkey) | A fixed-length, hashed, encrypted, authenticated representative of a password, that can be safely stored in a database. |
| [TCryptoPasswordHash](../../brl/brl.crypto/tcryptopasswordhash) | Password Hashing |

