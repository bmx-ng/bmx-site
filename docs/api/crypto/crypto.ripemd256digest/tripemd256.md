---
id: tripemd256
title: TRipemd256
sidebar_label: TRipemd256
---

An Ripemd-256 message digest.


## Methods

### `Method Update:Int(data:Byte Ptr, dataLen:Int) Override`

Updates the hash with <b>dataLen</b> bytes of data.

<br/>

### `Method Finish:Int(digest:Byte[]) Override`

Finishes hashing and produces the digest, filling <b>digest</b> with the hashed bytes.

The hashing state is reset, ready to create a new digest.


<br/>

