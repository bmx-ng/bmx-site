---
id: brl.bankstream
title: BRL.BankStream
sidebar_label: Introduction
---


A bank stream allows you to read data into or out of a bank. A bank stream can be used with
any of the stream commands, or anywhere a [TStream](../../brl/brl.stream/tstream) object is expected.

To create a bank stream, use the [CreateBankStream](../../brl/brl.bankstream/#function-createbankstreamtbankstream-banktbank-) command.

As with all streams, you should use [CloseStream](../../brl/brl.stream/#function-closestream-streamtstream-) when you are finished with the bank stream.


## Types
| Type | Description |
|---|---|
| [TBankStream](../../brl/brl.bankstream/tbankstream) | BankStream Object |

## Functions

### `Function CreateBankStream:TBankStream( bank:TBank )`

Create a bank stream


A bank stream allows you to read data into or out of a bank. A bank stream extends a stream so
can be used in place of a stream.


#### Returns
A bank stream object


#### Example
```blitzmax
SuperStrict

Local bank:TBank = CreateBank(1)  'This bank will resize itself with stream
Local stream:TBankStream = CreateBankStream(bank)
WriteString(stream, "Hello World")
CloseStream(stream)

For Local i:Int = 0 Until BankSize(bank)
	Print Chr(PeekByte(bank , i) )
Next
```
<br/>

