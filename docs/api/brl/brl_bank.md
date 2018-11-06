---
id: brl.bank
title: BRL.Bank
sidebar_label: BRL.Bank
---


A bank object encapsulates a block of memory you can use to store arbitrary data.

Banks are useful for storing data that is of no fixed type - for example, the contents
of a binary file.

To create a bank, use the [CreateBank](../../brl/brl.bank/#function-createbank-tbank-size-int-0) command.

To write data to a bank, use one of 'Poke' style commands, such as [PokeByte](../../brl/brl.bank/tbank/#method-pokebyte-offset-size-t-value).

To read data from a bank, use one of the 'Peek' style commands, such as [PeekByte](../../brl/brl.bank/tbank/#method-peekbyte-offset-size-t).

In addition, banks can be loaded or saved using [LoadBank](../../brl/brl.bank/#function-loadbank-tbank-url-object) or [SaveBank](../../brl/brl.bank/#function-savebank-bank-tbank-url-object).


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



### `Function CreateStaticBank:TBank( buf:Byte Ptr,size:Int )`

Create a bank with existing data


The memory referenced by a static bank is not released when the bank is deleted.
A static bank cannot be resized.


#### Returns
A bank object that references an existing block of memory



### `Function LoadBank:TBank( url:Object )`

Load a bank


[LoadBank](../../brl/brl.bank/#function-loadbank-tbank-url-object) reads the entire contents of a binary file from a specified <b>url</b> into a newly
created bank with a size matching that of the file.


#### Returns
A bank containing the binary contents of <b>url</b>, or null if <b>url</b> could not be opened



### `Function SaveBank( bank:TBank,url:Object )`

Save a bank


[SaveBank](../../brl/brl.bank/#function-savebank-bank-tbank-url-object) writes it's entire contents to a <b>url</b>. If the <b>url</b> is a file path a new
file is created.


#### Returns
True if successful.



### `Function BankBuf:Byte Ptr( bank:TBank )`

Get bank's memory buffer


Please use [LockBank](../../brl/brl.bank/#function-lockbank-byte-ptr-bank-tbank) and [UnlockBank](../../brl/brl.bank/#function-unlockbank-bank-tbank) instead of this method.


#### Returns
A byte pointer to the bank's internal memory buffer



### `Function LockBank:Byte Ptr( bank:TBank )`

Lock a bank's memory block


While locked, a bank cannot be resized.

After you have finished with a bank's memory block, you must use [UnlockBank](../../brl/brl.bank/#function-unlockbank-bank-tbank)
to return it to the bank.


#### Returns
A byte pointer to the memory block controlled by the bank.



### `Function UnlockBank( bank:TBank )`

Unlock a bank's memory block


After you have finished with a bank's memory block, you must use [UnlockBank](../../brl/brl.bank/#function-unlockbank-bank-tbank)
to return it to the bank.



### `Function BankSize:Long( bank:TBank )`

Get size of bank

#### Returns
The size, in bytes, of the bank's internal memory buffer



### `Function BankCapacity:Long( bank:TBank )`

Get capacity of bank


The capacity of a bank is the size limit before a bank must allocate
more memory due to a resize. Bank capacity may be increased due to a call
to [ResizeBank](../../brl/brl.bank/#function-resizebank-bank-tbank-size-size-t) by either 50% or the requested amount, whichever is greater.
Capacity never decreases.


#### Returns
The capacity, in bytes, of the bank's internal memory buffer



### `Function ResizeBank( bank:TBank,size:Size_T )`

Resize a bank


[ResizeBank](../../brl/brl.bank/#function-resizebank-bank-tbank-size-size-t) modifies the size limit of a bank. This may cause memory to be
allocated if the requested size is greater than the bank's current capacity,
see [BankCapacity](../../brl/brl.bank/#function-bankcapacity-long-bank-tbank) for more information.



### `Function CopyBank( src_bank:TBank,src_offset:Size_T,dst_bank:TBank,dst_offset:Size_T,count:Size_T )`

Copy bank contents


[CopyBank](../../brl/brl.bank/#function-copybank-src-bank-tbank-src-offset-size-t-dst-bank-tbank-dst-offset-size-t-count-size-t) copies <b>count</b> bytes from <b>src_offset</b> in <b>src_bank</b> to <b>dst_offset</b>
in <b>dst_bank</b>.



### `Function PeekByte( bank:TBank,offset:Size_T )`

Peek a byte from a bank


A byte is an unsigned 8 bit value with a range of 0..255.


#### Returns
The byte value at the specified byte offset within the bank



### `Function PokeByte( bank:TBank,offset:Size_T,value )`

Poke a byte into a bank


### `Function PeekShort( bank:TBank,offset:Size_T )`

Peek a short from a bank


A short is an unsigned 16 bit (2 bytes) value with a range of 0..65535.


#### Returns
The short value at the specified byte offset within the bank



### `Function PokeShort( bank:TBank,offset:Size_T,value )`

Poke a short into a bank


An short is an unsigned 16 bit value that requires 2 bytes of storage.



### `Function PeekInt( bank:TBank,offset:Size_T )`

Peek an int from a bank


An int is a signed 32 bit value (4 bytes).


#### Returns
The int value at the specified byte offset within the bank



### `Function PokeInt( bank:TBank,offset:Size_T,value )`

Poke an int into a bank


An int is a signed 32 bit value that requires 4 bytes of storage.



### `Function PeekLong:Long( bank:TBank,offset:Size_T )`

Peek a long integer from a bank


A long is a 64 bit integer that requires 8 bytes of memory.


#### Returns
The long integer value at the specified byte offset within the bank



### `Function PokeLong( bank:TBank,offset:Size_T,value:Long )`

Poke a long integer int into a bank


A long is a 64 bit integer that requires 8 bytes of storage.



### `Function PeekFloat#( bank:TBank,offset:Size_T )`

Peek a float from a bank


A float requires 4 bytes of storage


#### Returns
The float value at the specified byte offset within the bank



### `Function PokeFloat( bank:TBank,offset:Size_T,value# )`

Poke a float into a bank


A float requires 4 bytes of storage



### `Function PeekDouble!( bank:TBank,offset:Size_T )`

Peek a double from a bank


A double requires 8 bytes of storage


#### Returns
The double value at the specified byte offset within the bank



### `Function PokeDouble( bank:TBank,offset:Size_T,value! )`

Poke a double into a bank


A double requires 8 bytes of storage



### `Function ReadBank:Long( bank:TBank,stream:TStream,offset:Size_T,count:Long )`

Read bytes from a Stream to a Bank

#### Returns
The number of bytes successfully read from the Stream



### `Function WriteBank:Long( bank:TBank,stream:TStream,offset:Size_T,count:Long )`

Write bytes from a Bank to a Stream

#### Returns
The number of bytes successfully written to the Stream



