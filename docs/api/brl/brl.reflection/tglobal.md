---
id: tglobal
title: TGlobal
sidebar_label: TGlobal
---

Type member global variable


## Methods

### `Method Get:Object()`

Get global value


For reference types, this returns the object. For structs, it returns a <b>TBoxedValue</b>.
For other value types, it returns a string representation of the value.


<br/>

### `Method GetBoxed:Object()`

Get global value

Like <b>Get</b>, but always returns a <b>TBoxedValue</b> for value types instead of converting the value to a string.


<br/>

### `Method GetString:String()`

Get global value as <b>String</b>

<br/>

### `Method GetInt:Int()`

Get global value as <b>Int</b>

<br/>

### `Method GetLong:Long()`

Get global value as <b>Long</b>

<br/>

### `Method GetSizeT:Size_T()`

Get global value as <b>Size_T</b>

<br/>

### `Method GetFloat:Float()`

Get global value as <b>Float</b>

<br/>

### `Method GetDouble:Double()`

Get global value as <b>Double</b>

<br/>

### `Method GetPointer:Byte Ptr()`

Get global value as <b>Byte Ptr</b>

<br/>

### `Method GetStruct(targetPtr:Byte Ptr)`

Get global value as struct

<b>targetPtr</b> must be a pointer to a variable of the correct struct type.


<br/>

### `Method Set(value:Object)`

Set global value

<br/>

### `Method SetString(value:String)`

Set global value from <b>String</b>

<br/>

### `Method SetInt(value:Int)`

Set global value from <b>Int</b>

<br/>

### `Method SetLong(value:Long)`

Set global value from <b>Long</b>

<br/>

### `Method SetSizeT(value:Size_T)`

Set global value from <b>Size_T</b>

<br/>

### `Method SetFloat(value:Float)`

Set global value from <b>Float</b>

<br/>

### `Method SetDouble(value:Double)`

Set global value from <b>Double</b>

<br/>

### `Method SetPointer(value:Byte Ptr)`

Set global value from <b>Byte Ptr</b>

<br/>

### `Method SetStruct(structPtr:Byte Ptr)`

Set field value from struct

<b>structPtr</b> must be a pointer to a variable of the correct struct type.


<br/>

### `Method GlobalPtr:Byte Ptr()`

Get pointer to the global

<br/>

### `Method Invoke:Object(args:Object[] = Null)`

Invoke global value

Global type must be a function pointer.


<br/>

