---
id: tbase64
title: TBase64
sidebar_label: TBase64
---

Encode/Decode Base64 data.





## Functions

### `Function Encode:String(source:Byte[], offset:Int = 0, options:EBase64Options = EBase64Options.None)`

Encodes byte array data <b>source</b> to a Base64 encoded String, starting at <b>offset</b>.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.base64

Local someData:String = "Hello BlitzMax World!"
Local encoded:String = TBase64.Encode(someData.ToUTF8String(), someData.length)
Print "Encoded : " + encoded
```
<br/>

### `Function Encode:String(source:Byte Ptr, length:Int, offset:Int = 0, options:EBase64Options = EBase64Options.None)`

Encodes byte data <b>source</b> to a Base64 encoded String, starting at <b>offset</b> and of <b>length</b> bytes.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.base64

Local someData:String = "Hello BlitzMax World!"
Local encoded:String = TBase64.Encode(someData.ToUTF8String(), someData.length)
Print "Encoded : " + encoded
```
<br/>

### `Function Decode:Byte[]( source:String, offset:Int = 0, options:EBase64Options = EBase64Options.None )`

Decodes Base64 encoded String <b>source</b> to an array of Bytes, starting at <b>offset</b>.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.base64

Local encodedData:String = "SGVsbG8gQmxpdHpNYXggV29ybGQh"
Local data:Byte[] = TBase64.Decode(encodedData)
Local decoded:String = String.FromUTF8String(data)
Print "Decoded : " + decoded
```
<br/>

