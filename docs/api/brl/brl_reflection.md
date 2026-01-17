---
id: brl.reflection
title: BRL.Reflection
sidebar_label: Introduction
---


BlitzMax provides limited support for a form of runtime <i>reflection</i>.

Using reflection, programs can 'inspect' objects and types at runtime. You can determine the fields and methods contained in an object or type, set and get object fields and invoke - or 'call' - object methods.

To use reflection, you first need a TTypeId object. TTypeId objects correspond to BlitzMax user defined types, and there is a single TTypeId object for every user defined type in the program. There are also TTypeId objects for the 'primitive' types - byte, short, int, long, float, double and string. TTypeId objects are returned by the <b>TTypeId.ForName</b> and <b>TTypeId.ForObject</b> functions.

Once you have a TTypeId object, you can inspect the fields and methods of a user defined type using the <b>EnumFields</b> and <b>EnumMethods</b> methods. These methods return <b>TField</b> and <b>TMethod</b> objects that describe the fields and methods within the type. For example:
```
Strict

Type TMyType
	Field x,y,z
End Type

Local id:TTypeId=TTypeId.ForName( "TMyType" )

For Local fld:TField=EachIn id.EnumFields()
   Print fld.Name()+":"+fld.TypeId().Name()
Next
```

This simple program will print "x:Int", "y:Int" and "z:Int" - the names and types of the fields within TMyType. Note that this is done without actually creating a new TMyType.

The following example sets the fields of an object:
```
Strict

Type TMyType
	Field x,y,z
End Type

Local obj:TMyType=New TMyType
Local id:TTypeId=TTypeId.ForObject( obj )

For Local fld:TField=EachIn id.EnumFields()
	fld.Set obj,String( Rand(10) )
Next

Print obj.x+","+obj.y+","+obj.z
```

In this case we need an actual instance of TMyType, otherwise we have nothing to set the fields of! Also, we have used TTypeId.ForObject instead of TTypeId.ForName to get a TTypeId. While in this case TTypeId.ForName could have been used to achieve the same result, in general we may not know the exact type of the object, and therefore we wont know its type name.

Also note that the code that actually sets the fields uses String( Rand(10) ). This is because the <b>Set</b> method takes an object - but our fields are ints! BlitzMax reflection deals with this by using strings to represent numeric types. The same rule applies to the <b>Get</b> method. Any numeric fields will be returned as strings which you must then convert to the appropriate type if necessary.

Finally, let's invoke an object method:
```
Strict

Type TMyType
	Method Update( t# )
		Print "TMyType.Update:"+t
	End Method
End Type

Local obj:TMyType=New TMyType
Local id:TTypeId=TTypeId.ForObject( obj )

Local update:TMethod=id.FindMethod( "Update" )

update.Invoke obj,[String( .25 )]
```

This example uses <b>FindMethod</b> to locate a type method and <b>Invoke</b> to call it. Arguments to the method are contained in an object array, and again the float argument is converted to a string.

In addition to the TTypeId, TField and TMethod types, the BlitzMax reflection module also declares a number of global TTypeId objects:

 * <b>ByteTypeId</b>
 * <b>ShortTypeId</b>
 * <b>IntTypeId</b>
 * <b>LongTypeId</b>
 * <b>FloatTypeId</b>
 * <b>DoubleTypeId</b>
 * <b>StringTypeId</b>
 * <b>ObjectTypeId</b>

These may be used instead of the corresponding TTypeId.ForName call. For example, <b>TTypeId.ForName( "Int" )</b> and <b>IntTypeId</b> will return the same object.


## Types
| Type | Description |
|---|---|
| [TMember](../../brl/brl.reflection/tmember) | Type member |
| [TConstant](../../brl/brl.reflection/tconstant) | Type member constant |
| [TField](../../brl/brl.reflection/tfield) | Type member field |
| [TGlobal](../../brl/brl.reflection/tglobal) | Type member global variable |
| [TFunction](../../brl/brl.reflection/tfunction) | Type member function |
| [TMethod](../../brl/brl.reflection/tmethod) | Type member method |
| [TTypeId](../../brl/brl.reflection/ttypeid) | Type ID |

## Globals

### `Global ByteTypeId:TTypeId = New TTypeId.Init("Byte", SizeOf Byte Null)`

Primitive Byte type ID

<br/>

### `Global ShortTypeId:TTypeId = New TTypeId.Init("Short", SizeOf Short Null)`

Primitive Short type ID

<br/>

### `Global IntTypeId:TTypeId = New TTypeId.Init("Int", SizeOf Int Null)`

Primitive Int type ID

<br/>

### `Global UIntTypeId:TTypeId = New TTypeId.Init("UInt", SizeOf UInt Null)`

Primitive UInt type ID

<br/>

### `Global LongTypeId:TTypeId = New TTypeId.Init("Long", SizeOf Long Null)`

Primitive Long type ID

<br/>

### `Global ULongTypeId:TTypeId = New TTypeId.Init("ULong", SizeOf ULong Null)`

Primitive ULong type ID

<br/>

### `Global SizeTTypeId:TTypeId = New TTypeId.Init("Size_T", SizeOf Size_T Null)`

Primitive Size_T type ID

<br/>

### `Global FloatTypeId:TTypeId = New TTypeId.Init("Float", SizeOf Float Null)`

Primitive Float type ID

<br/>

### `Global DoubleTypeId:TTypeId = New TTypeId.Init("Double", SizeOf Double Null)`

Primitive Double type ID

<br/>

### `Global ObjectTypeId:TTypeId = New TTypeId.Init("Object", SizeOf Byte Ptr Null, bbRefObjectClass, , False)`

Object type ID

<br/>

### `Global StringTypeId:TTypeId = New TTypeId.Init("String", SizeOf Byte Ptr Null, bbRefStringClass, ObjectTypeId)`

String type ID

<br/>

### `Global LParamTypeId:TTypeId = New TTypeId.Init("LParam", SizeOf LParam Null)`

WinAPI LPARAM type ID

Only available on Windows.


<br/>

### `Global WParamTypeId:TTypeId = New TTypeId.Init("WParam", SizeOf WParam Null)`

WinAPI WPARAM type ID

Only available on Windows.


<br/>

### `Global Int128TypeId:TTypeId = New TTypeId.InitStruct(DebugScopePtrInt128)`

Intrinsic Int128 type ID

Only available on x64.


<br/>

### `Global Float64TypeId:TTypeId = New TTypeId.InitStruct(DebugScopePtrFloat64)`

Intrinsic Float64 type ID

Only available on x64.


<br/>

### `Global Float128TypeId:TTypeId = New TTypeId.InitStruct(DebugScopePtrFloat128)`

Intrinsic Float128 type ID

Only available on x64.


<br/>

### `Global Double128TypeId:TTypeId = New TTypeId.InitStruct(DebugScopePtrDouble128)`

Intrinsic Double128 type ID

Only available on x64.


<br/>

### `Global VoidTypeId:TTypeId = New TTypeId.Init("", 0)`

Primitive void type ID<br>Only used as a function/method return type

<br/>

### `Global ArrayTypeId:TTypeId = New TTypeId.Init("Null[]", SizeOf Byte Ptr Null, bbRefArrayClass, ObjectTypeId, False)`

Mock array base type ID

<br/>

### `Global PointerTypeId:TTypeId = New TTypeId.Init("Ptr", SizeOf Byte Ptr Null, , , False)`

Mock pointer base type ID

<br/>

### `Global VarTypeId:TTypeId = New TTypeId.Init("Var", SizeOf Byte Ptr Null, , , False)`

Mock var base type ID

<br/>

### `Global FunctionTypeId:TTypeId = New TTypeId.Init("Null()", SizeOf Byte Ptr Null, , , False)`

Mock function/method base type ID

<br/>

