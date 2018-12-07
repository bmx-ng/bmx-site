---
id: brl.bank
title: BRL.Bank
sidebar_label: BRL.Bank
---


A bank object encapsulates a block of memory you can use to store arbitrary data.

Banks are useful for storing data that is of no fixed type - for example, the contents
of a binary file.

To create a bank, use the [CreateBank](../../brl/brl.bank/#function-createbank-tbank-size-int-0) command.

To write data to a bank, use one of 'Poke' style commands, such as [PokeByte](../../brl/brl.bank/tbank/#method-pokebyte-offset-size-t-value-int).

To read data from a bank, use one of the 'Peek' style commands, such as [PeekByte](../../brl/brl.bank/tbank/#method-peekbyte-int-offset-size-t).

In addition, banks can be loaded or saved using [LoadBank](../../brl/brl.bank/#function-loadbank-tbank-url-object) or [SaveBank](../../brl/brl.bank/#function-savebank-int-bank-tbank-url-object).


## Types
| Type | Description |
|---|---|
| [TBank](../../brl/brl.bank/tbank) | Memory bank |

## Functions

### `Function CreateBank:TBank( size:Int=0 )`

Create a bank


[CreateBank](../../brl/brl.bank/#function-createbank-tbank-size-int-0) creates a Bank allocating a specified amount of memory that
can be used for storage of binary data using the various Poke and
Peek commands.


#### Returns
A bank object with an initial size of <b>size</b> bytes


#### Example
```blitzmax
SuperStrict

Local myBank:TBank = CreateBank(16)

For Local t:Int = 0 Until BankSize(myBank)
	Print PeekByte(myBank,t)
Next
```
<br/>

### `Function CreateStaticBank:TBank( buf:Byte Ptr,size:Int )`

Create a bank with existing data


The memory referenced by a static bank is not released when the bank is deleted.
A static bank cannot be resized.


#### Returns
A bank object that references an existing block of memory


<br/>

### `Function LoadBank:TBank( url:Object )`

Load a bank


[LoadBank](../../brl/brl.bank/#function-loadbank-tbank-url-object) reads the entire contents of a binary file from a specified <b>url</b> into a newly
created bank with a size matching that of the file.


#### Returns
A bank containing the binary contents of <b>url</b>, or null if <b>url</b> could not be opened


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

For Local t:Int=0 Until BankSize(myBank)
	PokeByte mybank,t,Int(Rnd(255))
	Print PeekByte(myBank,t)
Next

SaveBank myBank,"mybank.dat"

Local myNextBank:TBank=LoadBank("mybank.dat")

For Local t:Int = 0 Until BankSize(myNextBank)
	Print PeekByte(myNextBank,t)
Next
```
<br/>

### `Function SaveBank:Int( bank:TBank,url:Object )`

Save a bank


[SaveBank](../../brl/brl.bank/#function-savebank-int-bank-tbank-url-object) writes it's entire contents to a <b>url</b>. If the <b>url</b> is a file path a new
file is created.


#### Returns
True if successful.


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

For Local t:Int = 0 Until BankSize(myBank)
	PokeByte mybank,t,Int(Rnd(255))
	Print PeekByte(myBank,t)
Next

SaveBank MyBank,"mybank.dat"
```
<br/>

### `Function BankBuf:Byte Ptr( bank:TBank )`

Get bank's memory buffer


Please use [LockBank](../../brl/brl.bank/#function-lockbank-byte-ptr-bank-tbank) and [UnlockBank](../../brl/brl.bank/#function-unlockbank-bank-tbank) instead of this method.


#### Returns
A byte pointer to the bank's internal memory buffer


#### Example
```blitzmax
SuperStrict

Local bank:TBank = CreateBank(100)
PokeByte bank, 10, 255
 
Local bptr:Byte Ptr = BankBuf(bank)

Print PeekByte(bank , 10)
Print bptr[10]
```
<br/>

### `Function LockBank:Byte Ptr( bank:TBank )`

Lock a bank's memory block


While locked, a bank cannot be resized.

After you have finished with a bank's memory block, you must use [UnlockBank](../../brl/brl.bank/#function-unlockbank-bank-tbank)
to return it to the bank.


#### Returns
A byte pointer to the memory block controlled by the bank.


<br/>

### `Function UnlockBank( bank:TBank )`

Unlock a bank's memory block


After you have finished with a bank's memory block, you must use [UnlockBank](../../brl/brl.bank/#function-unlockbank-bank-tbank)
to return it to the bank.


<br/>

### `Function BankSize:Long( bank:TBank )`

Get size of bank

#### Returns
The size, in bytes, of the bank's internal memory buffer


#### Example
```blitzmax
SuperStrict

Local bank:TBank = CreateBank( Int(10 + Rnd(40)) )

Print "size of the bank is: "+BankSize(bank)
```
<br/>

### `Function BankCapacity:Long( bank:TBank )`

Get capacity of bank


The capacity of a bank is the size limit before a bank must allocate
more memory due to a resize. Bank capacity may be increased due to a call
to [ResizeBank](../../brl/brl.bank/#function-resizebank-bank-tbank-size-size-t) by either 50% or the requested amount, whichever is greater.
Capacity never decreases.


#### Returns
The capacity, in bytes, of the bank's internal memory buffer


#### Example
```blitzmax
SuperStrict

Local bank:TBank = CreateBank( Int(20 + Rnd(40)) )

Print "size of the bank is: "+BankSize(bank)
Print "capacity of the bank is: "+BankCapacity(bank)
```
<br/>

### `Function ResizeBank( bank:TBank,size:Size_T )`

Resize a bank


[ResizeBank](../../brl/brl.bank/#function-resizebank-bank-tbank-size-size-t) modifies the size limit of a bank. This may cause memory to be
allocated if the requested size is greater than the bank's current capacity,
see [BankCapacity](../../brl/brl.bank/#function-bankcapacity-long-bank-tbank) for more information.


<br/>

### `Function CopyBank( src_bank:TBank,src_offset:Size_T,dst_bank:TBank,dst_offset:Size_T,count:Size_T )`

Copy bank contents


[CopyBank](../../brl/brl.bank/#function-copybank-src-bank-tbank-src-offset-size-t-dst-bank-tbank-dst-offset-size-t-count-size-t) copies <b>count</b> bytes from <b>src_offset</b> in <b>src_bank</b> to <b>dst_offset</b>
in <b>dst_bank</b>.


#### Example
```blitzmax
SuperStrict

Local bank:TBank = CreateBank(100)

For Local i:Int = 0 Until 100
	PokeByte bank, i ,i
Next

Print "Original Bank Values..."
For Local i:Int = 0 To 10
	Print PeekByte(bank , 50 + i)
Next

Local copiedbank:TBank = CreateBank(100)
CopyBank(bank, 50, copiedBank, 0, 10+1) 
Print "Copied Bank Values..."
For Local i:Int = 0 To 10
	Print PeekByte(CopiedBank , i)
Next
```
<br/>

### `Function PeekByte:Int( bank:TBank,offset:Size_T )`

Peek a byte from a bank


A byte is an unsigned 8 bit value with a range of 0..255.


#### Returns
The byte value at the specified byte offset within the bank


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

For Local t:Int = 0 Until BankSize(myBank)
	PokeByte mybank,t,Int(Rnd(255))
Next

Print PeekByte(myBank,0)
Print PeekByte(myBank,1)

End
```
<br/>

### `Function PokeByte( bank:TBank,offset:Size_T,value:Int )`

Poke a byte into a bank

#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

PokeByte myBank,0,123
PokeByte myBank,15,234

For Local t:Int = 0 Until BankSize(myBank)
	Print PeekByte(myBank,t)
Next
```
<br/>

### `Function PeekShort:Int( bank:TBank,offset:Size_T )`

Reads an unsigned short value (2 bytes) from a bank, at a given address.


Take notice not to exceed the boundaries of the bank.

> A short value should not be read from the last possible byte address of the bank.


#### Returns
The short value at the specified byte offset within the bank


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

For Local t:Int = 0 Until BankSize(myBank)
	PokeByte mybank,t,Int(Rnd(255))
	Print PeekByte(myBank,t)
Next

Print
Print PeekShort(myBank,0)
Print PeekShort(myBank,1)
Print PeekShort(myBank,14)

End
```
<br/>

### `Function PokeShort( bank:TBank,offset:Size_T,value:Int )`

Writes an unsigned short value (2 bytes) into a bank, at a given address.


Take notice not to exceed the boundaries of the bank.

> A short value should not be poked at the last possible byte address of the bank.


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

PokeShort myBank,0,256
PokeShort myBank,14,32768+1

For Local t:Int = 0 Until BankSize(myBank)
	Print PeekByte(myBank,t)
Next
```
<br/>

### `Function PeekInt:Int( bank:TBank,offset:Size_T )`

Reads a signed int value (4 bytes) from a bank, at a given address.


Take notice not to exceed the boundaries of the bank.

> An int value should not be read from the last possible byte or short address of the bank.


#### Returns
The int value at the specified byte offset within the bank


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

For Local t:Int = 0 Until BankSize(myBank)
	PokeByte mybank,t,Int(Rnd(255))
	Print PeekByte(myBank,t)
Next

Print
Print PeekInt(myBank,0)
Print PeekInt(myBank,1)
Print PeekInt(myBank,12)
```
<br/>

### `Function PokeInt( bank:TBank,offset:Size_T,value:Int )`

Writes a signed int value (4 bytes) into a bank, at a given address.


Take notice not to exceed the boundaries of the bank.

> An int value should not be poked at the last possible byte or short address of the bank.


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

PokeInt myBank,0,-10000001
PokeInt myBank,12,31415926

For Local t:Int = 0 Until BankSize(myBank)
	Print PeekByte(myBank,t)
Next
```
<br/>

### `Function PeekLong:Long( bank:TBank,offset:Size_T )`

Reads a signed long value (8 bytes) from a bank, at a given address.


Take notice not to exceed the boundaries of the bank.

> A long value should not be read from the last possible byte, short or int address of the bank.


#### Returns
The long integer value at the specified byte offset within the bank


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

For Local t:Int = 0 Until BankSize(myBank)
	PokeByte mybank,t,Int(Rnd(255))
	Print PeekByte(myBank,t)
Next

Print
Print PeekLong(myBank,0)
Print PeekLong(myBank,1)
Print PeekLong(myBank,8)
```
<br/>

### `Function PokeLong( bank:TBank,offset:Size_T,value:Long )`

Writes a signed long value (8 bytes) into a bank, at a given address.


Take notice not to exceed the boundaries of the bank.

> A long value should not be poked at the last possible byte, short or int address of the bank.


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

PokeLong myBank,0,-10000001234567
PokeLong myBank,8,31415926000000

For Local t:Int = 0 Until BankSize(myBank)
	Print PeekByte(myBank,t)
Next
```
<br/>

### `Function PeekFloat:Float( bank:TBank,offset:Size_T )`

Reads a signed float value (4 bytes) from a bank, at a given address.


Take notice not to exceed the boundaries of the bank.

> A float value should not be read from the last possible byte or short address of the bank.


#### Returns
The float value at the specified byte offset within the bank


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

For Local t:Int = 0 Until BankSize(myBank)
	PokeByte mybank,t,Int(Rnd(255))
	Print PeekByte(myBank,t)
Next

Print
Print PeekFloat(myBank,0)
Print PeekFloat(myBank,1)
Print PeekFloat(myBank,12)

End
```
<br/>

### `Function PokeFloat( bank:TBank,offset:Size_T,value:Float )`

Writes a signed float value (4 bytes) into a bank, at a given address.


Take notice not to exceed the boundaries of the bank.

> A float value should not be poked at the last possible byte or short address of the bank.


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

PokeFloat myBank,0,0.123456
PokeFloat myBank,12,1234.5678

For Local t:Int = 0 ubtil BankSize(myBank)
	Print PeekByte(myBank,t)
Next
```
<br/>

### `Function PeekDouble:Double( bank:TBank,offset:Size_T )`

Reads a signed double value (8 bytes) from a bank, at a given address.


Take notice not to exceed the boundaries of the bank.

> A double value should not be read from the last possible byte, short, int or long address of the bank.


#### Returns
The double value at the specified byte offset within the bank


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

For Local t:Int = 0 Until BankSize(myBank)
	PokeByte mybank,t,Int(Rnd(255))
	Print PeekByte(myBank,t)
Next

Print
Print PeekDouble(myBank,0)
Print PeekDouble(myBank,1)
Print PeekDouble(myBank,8)

End
```
<br/>

### `Function PokeDouble( bank:TBank,offset:Size_T,value:Double )`

Writes a signed double value (8 bytes) into a bank, at a given address.


Take notice not to exceed the boundaries of the bank.

> A double value should not be poked at the last possible byte, short, int or float address of the bank.


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(16)

PokeDouble myBank,0,123495543.12342345123:Double
PokeDouble myBank,8,121235567.89015678123:Double

For Local t:Int = 0 Until BankSize(myBank)
	Print PeekByte(myBank,t)
Next
```
<br/>

### `Function ReadBank:Long( bank:TBank,stream:TStream,offset:Size_T,count:Long )`

Read bytes from a Stream to a Bank

#### Returns
The number of bytes successfully read from the Stream


<br/>

### `Function WriteBank:Long( bank:TBank,stream:TStream,offset:Size_T,count:Long )`

Write bytes from a Bank to a Stream

#### Returns
The number of bytes successfully written to the Stream


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(8)

Print "Created Bank..."
For Local t:Int = 0 Until BankSize(MyBank)
	PokeByte mybank,t,Int(Rnd(255))
	Print PeekByte(myBank,t)
Next

Local bankStream:TStream=WriteStream("mybank.dat")
WriteBank(myBank,bankStream,0,BankSize(myBank))
CloseStream(bankStream)

Local myNextBank:TBank=TBank.Load("mybank.dat")
Print "Loaded Bank..."
For Local t:Int = 0 Until BankSize(MyNextBank)
	Print PeekByte(MyNextBank,t)
Next
```
<br/>

