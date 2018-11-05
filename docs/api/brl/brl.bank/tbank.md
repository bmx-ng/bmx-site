---
id: tbank
title: TBank
sidebar_label: TBank
---


## Methods

### `Method Buf:Byte Ptr()`

Get a bank's memory pointer


Please use [Lock](../../../brl/brl.bank/#method-lock-byte-ptr) and [Unlock](../../../brl/brl.bank/#method-unlock) instead of this method.


#### Returns
A byte pointer to the memory block controlled by the bank



### `Method Lock:Byte Ptr()`

Lock a bank's memory block


While locked, a bank cannot be resized.

After you have finished with a bank's memory block, you must use [Unlock](../../../brl/brl.bank/#method-unlock)
to return it to the bank.


#### Returns
A byte pointer to the memory block controlled by the bank



### `Method Unlock()`

Unlock a bank's memory pointer


After you have finished with a bank's memory block, you must use [Unlock](../../../brl/brl.bank/#method-unlock)
to return it to the bank.



### `Method Size:Size_T()`

Get a bank's size

#### Returns
The size, in bytes, of the memory block controlled by the bank



### `Method Capacity:Size_T()`

Get capacity of bank

#### Returns
The capacity, in bytes, of the bank's internal memory buffer



### `Method IsStatic:Int()`

Returns True if the bank is static.


### `Method Resize( size:Size_T )`

Resize a bank


### `Method Read:Long( stream:TStream,offset:Long,count:Long )`

Read bytes from a stream into a bank


### `Method Write:Long( stream:TStream,offset:Long,count:Long )`

Write bytes in a bank to a stream


### `Method PeekByte( offset:Size_T )`

Peek a byte from a bank

#### Returns
The byte value at the specified byte offset within the bank



### `Method PokeByte( offset:Size_T,value )`

Poke a byte into a bank


### `Method PeekShort( offset:Size_T )`

Peek a short from a bank

#### Returns
The short value at the specified byte offset within the bank



### `Method PokeShort( offset:Size_T,value )`

Poke a short into a bank


### `Method PeekInt( offset:Size_T )`

Peek an int from a bank

#### Returns
The int value at the specified byte offset within the bank



### `Method PokeInt( offset:Size_T,value )`

Poke an int into a bank


### `Method PeekLong:Long( offset:Size_T )`

Peek a long from a bank

#### Returns
The long value at the specified byte offset within the bank



### `Method PokeLong( offset:Size_T,value:Long )`

Poke a long value into a bank


### `Method PeekFloat#( offset:Size_T )`

Peek a float from a bank

#### Returns
The float value at the specified byte offset within the bank



### `Method PokeFloat( offset:Size_T,value# )`

Poke a float value into a bank


### `Method PeekDouble!( offset:Size_T )`

Peek a double from a bank

#### Returns
The double value at the specified byte offset within the bank



### `Method PokeDouble( offset:Size_T,value! )`

Poke a double value into a bank


### `Method Save( url:Object )`

Save a bank to a stream


Return True if successful, otherwise False.



## Functions

### `Function Load:TBank( url:Object )`

Load a bank from a stream


Returns a new TBank object if successfull, otherwise Null.


#### Returns
A new TBank object



### `Function Create:TBank( size:Int )`

Create a bank

#### Returns
A new TBank object with an initial size of <b>size</b>



### `Function CreateStatic:TBank( buf:Byte Ptr,size:Int )`

Create a bank from an existing block of memory


