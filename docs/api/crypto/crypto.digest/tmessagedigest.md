---
id: tmessagedigest
title: TMessageDigest
sidebar_label: TMessageDigest
---

An abstract base type for message digest implementations.


## Methods

### `Method Digest:String(data:String)`

Calculates a digest for the given [String](../../../brl/brl.blitz/#string) input <b>data</b>.

#### Returns
A [String](../../../brl/brl.blitz/#string) representation of the digest.


<br/>

### `Method Digest:String(stream:TStream)`

Calculates a digest for the given [TStream](../../../brl/brl.stream/tstream) input <b>stream</b>.

#### Returns
A [String](../../../brl/brl.blitz/#string) representation of the digest.


<br/>

### `Method DigestBytes:Byte[](data:String)`

Calculates a digest for the given [String](../../../brl/brl.blitz/#string) input <b>data</b>.

#### Returns
A byte array representation of the digest.


<br/>

### `Method DigestBytes:Byte[](stream:TStream)`

Calculates a digest for the given [TStream](../../../brl/brl.stream/tstream) input <b>stream</b>.

#### Returns
A bytes array representation of the digest.


<br/>

