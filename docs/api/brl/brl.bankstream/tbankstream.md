---
id: tbankstream
title: TBankStream
sidebar_label: TBankStream
---

BankStream Object


#### Example
```blitzmax
SuperStrict

Local bank:TBank = CreateBank(1)  'This bank will resize itself with stream
Local stream:TBankStream = TBankStream.Create(bank)
WriteString(stream, "Hello World")
CloseStream(stream)

For Local i:Int = 0 Until BankSize(bank)
	Print Chr(PeekByte(bank , i) )
Next
```
## Functions

### `Function Create:TBankStream( bank:TBank )`

Create a bank stream


A bank stream allows you to read data into or out of a bank. A bank stream extends a stream so
can be used in place of a stream.


#### Returns
A bank stream object


#### Example
```blitzmax
SuperStrict

Local bank:TBank = CreateBank(1)  'This bank will resize itself from stream
Local stream:TBankStream = TBankStream.Create(bank)
WriteString(stream, "Hello World")
CloseStream(stream)

For Local i:Int = 0 Until BankSize(bank)
	Print Chr(PeekByte(bank , i) )
Next
```
<br/>

