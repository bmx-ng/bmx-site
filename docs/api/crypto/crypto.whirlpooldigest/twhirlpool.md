---
id: twhirlpool
title: TWhirlpool
sidebar_label: TWhirlpool
---

A WHIRPOOL message digest.


#### Example
```blitzmax
SuperStrict

Framework BRL.StandardIO
Import Crypto.WhirlpoolDigest

Local data:String = "Hello Digest World !!"

Local digest:TMessageDigest = GetMessageDigest("WHIRLPOOL")

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

