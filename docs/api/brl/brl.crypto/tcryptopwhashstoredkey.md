---
id: tcryptopwhashstoredkey
title: TCryptoPWHashStoredKey
sidebar_label: TCryptoPWHashStoredKey
---

A fixed-length, hashed, encrypted, authenticated representative of a password, that can be safely stored in a database.


This representative can be used to later check if a user provided password is likely to be the original one, without ever
storing the password in the database.


## Methods

### `Method ToString:String()`

Returns a String representation of the key.

<br/>

## Functions

### `Function FromString:TCryptoPWHashStoredKey(key:String)`

Retrieves a key from its String representation.

<br/>

