---
id: tcastore
title: TCAStore
sidebar_label: TCAStore
---

Base class for Certificate Authority (CA) stores.


Represents a source of trusted CA certificates for verifying SSL/TLS connections.


## Methods

### `Method IsAFile:Int()`

Checks if the CA store is file-based.

Returns [True](../../../brl/brl.blitz/#true) if the CA store is based on a file, [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method IsABlob:Int()`

Checks if the CA store is blob-based.

Returns [True](../../../brl/brl.blitz/#true) if the CA store is based on a blob of data, [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method CertsAsBlob:Byte[]()`

Retrieves the CA certificates as a blob of bytes.

Returns the CA certificates as a byte array, or [Null](../../../brl/brl.blitz/#null) if not applicable.


<br/>

### `Method CertsAsPath:String()`

Retrieves the CA certificates as a file path.

Returns the file path to the CA certificates, or an empty string if not applicable.


<br/>

### `Method VerifyBundle:Int()`

Verifies the validity of the CA bundle.

Returns [True](../../../brl/brl.blitz/#true) if the CA bundle is valid and usable, [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

