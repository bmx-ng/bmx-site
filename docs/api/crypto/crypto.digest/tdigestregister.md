---
id: tdigestregister
title: TDigestRegister
sidebar_label: TDigestRegister
---

A register of available message digests and cryptographic functions.


This can be extended to add new digests to the register.


## Methods

### `Method GeTDigest:TMessageDigest( name:String ) Abstract`

Gets an instance of a messages digest.

This method must be implemented by extending types.


#### Returns
The message digest or [Null](../../../brl/brl.blitz/#null) if one of the given name does not exist.


<br/>

