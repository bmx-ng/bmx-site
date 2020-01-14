---
id: tripemd128
title: TRipemd128
sidebar_label: TRipemd128
---

An Ripemd-128 message digest.


#### Example
```blitzmax
SuperStrict

Framework BRL.StandardIO
Import Crypto.Ripemd128Digest

Local data:String = "Hello Digest World !!"

Local digest:TMessageDigest = GetMessageDigest("RIPEMD-128")

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

