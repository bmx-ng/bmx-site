---
id: tbank
title: TBank
sidebar_label: TBank
---

Memory bank


## Methods

### `Method Buf:Byte Ptr()`

Get a bank's memory pointer


Please use [Lock](../../../brl/brl.bank/tbank/#method-lock-byte-ptr) and [Unlock](../../../brl/brl.bank/tbank/#method-unlock) instead of this method.


#### Returns
A byte pointer to the memory block controlled by the bank


#### Example
```blitzmax
SuperStrict

Local bank:TBank = CreateBank(100)
PokeByte bank, 10, 255
 
Local bptr:Byte Ptr = bank.Buf()

Print PeekByte(bank , 10)
Print bptr[10]
```

### `Method Lock:Byte Ptr()`

Lock a bank's memory block


While locked, a bank cannot be resized.

After you have finished with a bank's memory block, you must use [Unlock](../../../brl/brl.bank/tbank/#method-unlock)
to return it to the bank.


#### Returns
A byte pointer to the memory block controlled by the bank



### `Method Unlock()`

Unlock a bank's memory pointer


After you have finished with a bank's memory block, you must use [Unlock](../../../brl/brl.bank/tbank/#method-unlock)
to return it to the bank.



### `Method Size:Size_T()`

Get a bank's size

#### Returns
The size, in bytes, of the memory block controlled by the bank



### `Method Capacity:Size_T()`

Get capacity of bank

#### Returns
The capacity, in bytes, of the bank's internal memory buffer


#### Example
```blitzmax
SuperStrict

Local bank:TBank=CreateBank( Int(20 + Rnd(40)) )

Print "size of the bank is: "+BankSize(bank)
Print "capacity of the bank is: "+Bank.Capacity()
```

### `Method IsStatic:Int()`

Returns True if the bank is static.


### `Method Resize( size:Size_T )`

Resize a bank


### `Method Read:Long( stream:TStream,offset:Long,count:Long )`

Read bytes from a stream into a bank


### `Method Write:Long( stream:TStream,offset:Long,count:Long )`

Write bytes in a bank to a stream

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
myBank.write(bankStream,0,BankSize(MyBank))
CloseStream(bankStream)

Local myNextBank:TBank=TBank.Load("mybank.dat")
Print "Loaded Bank..."
For Local t:Int = 0 Until BankSize(myNextBank)
	Print PeekByte(myNextBank,t)
Next
```

### `Method PeekByte:Int( offset:Size_T )`

Peek a byte from a bank

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

### `Method PokeByte( offset:Size_T,value:Int )`

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

### `Method PeekShort:Int( offset:Size_T )`

Peek a short from a bank

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

### `Method PokeShort( offset:Size_T,value:Int )`

Poke a short into a bank

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

### `Method PeekInt:Int( offset:Size_T )`

Peek an int from a bank

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

### `Method PokeInt( offset:Size_T,value:Int )`

Poke an int into a bank

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

### `Method PeekLong:Long( offset:Size_T )`

Peek a long from a bank

#### Returns
The long value at the specified byte offset within the bank


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

### `Method PokeLong( offset:Size_T,value:Long )`

Poke a long value into a bank

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

### `Method PeekFloat:Float( offset:Size_T )`

Peek a float from a bank

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

### `Method PokeFloat( offset:Size_T,value:Float )`

Poke a float value into a bank

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

### `Method PeekDouble:Double( offset:Size_T )`

Peek a double from a bank

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

### `Method PokeDouble( offset:Size_T,value:Double )`

Poke a double value into a bank

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

### `Method Save:Int( url:Object )`

Save a bank to a stream


Return True if successful, otherwise False.


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(8)

Print "Created Bank..."
For Local t:Int = 0 Until BankSize(myBank)
	PokeByte mybank,t,Int(Rnd(255))
	Print PeekByte(myBank,t)
Next

myBank.Save("mybank.dat")

Local myNextBank:TBank = TBank.Load("mybank.dat")
Print "Loaded Bank..."
For Local t:Int = 0 Until BankSize(myNextBank)
	Print PeekByte(myNextBank,t)
Next
```

## Functions

### `Function Load:TBank( url:Object )`

Load a bank from a stream


Returns a new TBank object if successfull, otherwise Null.


#### Returns
A new TBank object


#### Example
```blitzmax
SuperStrict

Local myBank:TBank=CreateBank(8)

Print "Created Bank..."
For Local t:Int = 0 Until BankSize(myBank)
	PokeByte mybank,t,Int(Rnd(255))
	Print PeekByte(myBank,t)
Next

myBank.Save("mybank.dat")

Local myNextBank:TBank=TBank.Load("mybank.dat")
Print "Loaded Bank..."
For Local t:Int = 0 Until BankSize(myNextBank)
	Print PeekByte(myNextBank,t)
Next
```

### `Function Create:TBank( size:Int )`

Create a bank

#### Returns
A new TBank object with an initial size of <b>size</b>


#### Example
```blitzmax
SuperStrict

Local bank:TBank=TBank.Create(100)

For Local i:Int = 0 Until 100
	PokeByte bank , i , i
Next

Print "Original Bank Values..."
For Local i:Int = 0 Until 10
	Print PeekByte(Bank , 50 + i)
Next
```

### `Function CreateStatic:TBank( buf:Byte Ptr,size:Int )`

Create a bank from an existing block of memory


