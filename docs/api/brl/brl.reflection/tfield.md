---
id: tfield
title: TField
sidebar_label: TField
---

Type member field


## Methods

### `Method IsReadOnly:Int()`

Determine if field is read-only

<br/>

### `Method Get:Object(obj:Object)`

Get field value


For reference types, this returns the object. For structs, it returns a <b>TBoxedValue</b>.
For other value types, it returns a string representation of the value.


<br/>

### `Method GetBoxed:Object(obj:Object)`

Get field value

Like <b>Get</b>, but always returns a <b>TBoxedValue</b> for value types instead of converting the value to a string.


<br/>

### `Method GetByte:Byte( obj:Object )`

Get field value as <b>Byte</b>

<br/>

### `Method GetShort:Short( obj:Object )`

Get field value as <b>Short</b>

<br/>

### `Method GetInt:Int( obj:Object )`

Get field value as <b>Int</b>

<br/>

### `Method GetUInt:UInt( obj:Object )`

Get field value as <b>UInt</b>

<br/>

### `Method GetLong:Long( obj:Object )`

Get field value as <b>Long</b>

<br/>

### `Method GetULong:ULong( obj:Object )`

Get field value as <b>ULong</b>

<br/>

### `Method GetSizeT:Size_T( obj:Object )`

Get field value as <b>Size_T</b>

<br/>

### `Method GetFloat:Float( obj:Object )`

Get field value as <b>Float</b>

<br/>

### `Method GetDouble:Double( obj:Object )`

Get field value as <b>Double</b>

<br/>

### `Method GetLongInt:LongInt( obj:Object )`

Get field value as <b>LongInt</b>

<br/>

### `Method GetULongInt:ULongInt( obj:Object )`

Get field value as <b>ULongInt</b>

<br/>

### `Method GetString:String( obj:Object )`

Get field value as <b>String</b>

<br/>

### `Method GetPointer:Byte Ptr(obj:Object)`

Get field value as <b>Byte Ptr</b>

<br/>

### `Method GetStruct(obj:Object, targetPtr:Byte Ptr)`

Get field value as struct

<b>targetPtr</b> must be a pointer to a variable of the correct struct type.


<br/>

### `Method GetEnumAsString:String( obj:Object )`

Get enum field value as <b>String</b>

Returns the name of the enum value. If the field value does not correspond to any enum value, throws an error.


<br/>

### `Method Set(obj:Object, value:Object)`

Set Field value

<br/>

### `Method Set( obj:Object,value:Byte )`

Set field value from <b>Byte</b>

<br/>

### `Method Set( obj:Object,value:Short )`

Set field value from <b>Short</b>

<br/>

### `Method Set( obj:Object,value:Int )`

Set field value from <b>Int</b>

<br/>

### `Method Set( obj:Object,value:UInt )`

Set field value from <b>UInt</b>

<br/>

### `Method Set( obj:Object,value:Long )`

Set field value from <b>Long</b>

<br/>

### `Method Set( obj:Object,value:ULong )`

Set field value from <b>ULong</b>

<br/>

### `Method Set( obj:Object,value:Size_T )`

Set field value from <b>Size_T</b>

<br/>

### `Method Set( obj:Object,value:Float )`

Set field value from <b>Float</b>

<br/>

### `Method Set( obj:Object,value:Double )`

Set field value from <b>Double</b>

<br/>

### `Method Set( obj:Object,value:LongInt )`

Set field value from <b>LongInt</b>

<br/>

### `Method Set( obj:Object,value:ULongInt )`

Set field value from <b>ULongInt</b>

<br/>

### `Method SetObject( obj:Object,value:Object )`

Set field value from <b>Object</b>

<br/>

### `Method SetByte( obj:Object,value:Byte )`

Set field value from <b>Byte</b>

<br/>

### `Method SetShort( obj:Object,value:Short )`

Set field value from <b>Short</b>

<br/>

### `Method SetInt( obj:Object,value:Int )`

Set field value from <b>Int</b>

<br/>

### `Method SetUInt( obj:Object,value:UInt )`

Set field value from <b>UInt</b>

<br/>

### `Method SetLong( obj:Object,value:Long )`

Set field value from <b>Long</b>

<br/>

### `Method SetULong( obj:Object,value:ULong )`

Set field value from <b>ULong</b>

<br/>

### `Method SetSizet( obj:Object,value:Size_T )`

Set field value from <b>Size_T</b>

<br/>

### `Method SetFloat( obj:Object,value:Float )`

Set field value from <b>Float</b>

<br/>

### `Method SetDouble( obj:Object,value:Double )`

Set field value from <b>Double</b>

<br/>

### `Method SetLongInt( obj:Object,value:LongInt )`

Set field value from <b>LongInt</b>

<br/>

### `Method SetULongInt( obj:Object,value:ULongInt )`

Set field value from <b>ULongInt</b>

<br/>

### `Method SetString( obj:Object,value:String )`

Set field value from <b>String</b>

<br/>

### `Method SetPointer(obj:Object, value:Byte Ptr)`

Set field value from <b>Byte Ptr</b>

<br/>

### `Method SetStruct(obj:Object, structPtr:Byte Ptr)`

Set field value from struct

<b>structPtr</b> must be a pointer to a variable of the correct struct type.


<br/>

### `Method SetEnum(obj:Object, value:String)`

Set field value from enum name

<b>value</b> must be a valid name for an enum value of the field's enum type.


<br/>

### `Method FieldPtr:Byte Ptr(obj:Object)`

Get pointer to the field

<br/>

### `Method Invoke:Object(obj:Object, args:Object[] = Null)`

Invoke field value

Field type must be a function pointer.


<br/>

