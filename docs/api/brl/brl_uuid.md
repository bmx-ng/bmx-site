---
id: brl.uuid
title: BRL.uuid
sidebar_label: BRL.uuid
---


## Functions

### `Function uuidGenerate:String(upperCase:Int = False)`

Generates a UUID in canonical form, optionally in uppercase.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.uuid

For Local i:Int = 0 Until 5
	Print uuidGenerate()
Next
```
<br/>

### `Function uuidGenerateBytes:Byte[](bytes:Byte[] = Null)`

Generates a UUID Byte array.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.StringBuilder
Import BRL.uuid

For Local i:Int = 0 Until 5
	Local bytes:Byte[] = uuidGenerateBytes()
	Local sb:TStringBuilder = New TStringBuilder
	For Local n:Int = 0 Until bytes.length
		If n Then
			sb.Append(",")
		End If
		sb.Append(bytes[n])
	Next
	Print sb.ToString()
Next
```
<br/>

### `Function uuidToCanonical:String(buf:Byte[], upperCase:Int = False)`

Converts a UUID Byte array into a String, optionally in uppercase.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.uuid

Local bytes:Byte[] = uuidGenerateBytes()
Print uuidToCanonical(bytes, False)
Print uuidToCanonical(bytes, True)
```
<br/>

