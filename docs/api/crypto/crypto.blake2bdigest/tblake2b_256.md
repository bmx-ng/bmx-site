---
id: tblake2b_256
title: TBlake2B_256
sidebar_label: TBlake2B_256
---

An BLAKE2B-256 message digest.


#### Example
```blitzmax
SuperStrict

Framework BRL.StandardIO
Import Crypto.Blake2BDigest

Local data:String = "Hello Digest World !!"

Local digest:TMessageDigest = GetMessageDigest("BLAKE2B_256")

If digest Then
	Print digest.Digest(data)
End If
```
## Methods

### `Method Update:Int(data:Byte Ptr, dataLen:Int) Override`

Updates the hash with <b>dataLen</b> bytes of data.

<br/>

### `Method Finish:Int(digest:Byte[]) Override`

Finishes hashing and produces the digest, filling <b>digest</b> with the hashed bytes.

The hashing state is reset, ready to create a new digest.


<br/>

