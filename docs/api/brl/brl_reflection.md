---
id: brl.reflection
title: BRL.Reflection
sidebar_label: BRL.Reflection
---


<h1>Reflection</h1>

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
````

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
````

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
````

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
| [TMember](../../brl/brl.reflection/tmember) | Type member - Field Or Method. |
| [TConstant](../../brl/brl.reflection/tconstant) | Type constant |
| [TField](../../brl/brl.reflection/tfield) | Type field |
| [TGlobal](../../brl/brl.reflection/tglobal) | Type global |
| [TFunction](../../brl/brl.reflection/tfunction) | Type function |
| [TMethod](../../brl/brl.reflection/tmethod) | Type method |
| [TTypeId](../../brl/brl.reflection/ttypeid) | Type id |

## Globals

### `Global ByteTypeId:TTypeId`

Primitive byte type

<br/>

### `Global ShortTypeId:TTypeId`

Primitive short type

<br/>

### `Global IntTypeId:TTypeId`

Primitive int type

<br/>

### `Global UIntTypeId:TTypeId`

Primitive unsigned int type

<br/>

### `Global LongTypeId:TTypeId`

Primitive long type

<br/>

### `Global ULongTypeId:TTypeId`

Primitive unsigned long type

<br/>

### `Global FloatTypeId:TTypeId`

Primitive float type

<br/>

### `Global DoubleTypeId:TTypeId`

Primitive double type

<br/>

