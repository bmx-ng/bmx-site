---
id: ttypeid
title: TTypeId
sidebar_label: TTypeId
---

Type ID


Represents a type. Type IDs can be compared for equality to find out if two types are equal.


## Methods

### `Method SuperType:TTypeId()`

Get super type

When called on an interface type ID, this method alwayss returns <b>Object</b>.
To get the super interfaces of an interface, use <b>Interfaces</b>.


<br/>

### `Method Interfaces:TList(list:TList = Null)`

Get list of implemented interfaces of a class, or super interfaces of an interface.

<br/>

### `Method UnderlyingType:TTypeId()`

Get underlying type

Returns the underlying integral type of an enum type.


<br/>

### `Method ArrayType:TTypeId(dims:Int = 1)`

Get array type with this element type

<br/>

### `Method ElementType:TTypeId()`

Get element type

<br/>

### `Method Dimensions:Int()`

Get number of array dimensions

<br/>

### `Method PointerType:TTypeId()`

Get pointer type with this element type

<br/>

### `Method VarType:TTypeId()`

Get var type with this element type

<br/>

### `Method FunctionType:TTypeId(argTypes:TTypeId[] = Null)`

Get function type with this return type

<br/>

### `Method ReturnType:TTypeId()`

Get function return type

<br/>

### `Method ArgTypes:TTypeId[]()`

Get function argument types

<br/>

### `Method ExtendsType:Int(typeId:TTypeId)`

Determine if this type extends, implements, or equals another type

<br/>

### `Method DerivedTypes:TList(list:TList = Null)`

Get list of derived types

<br/>

### `Method NewObject:Object()`

Create a new object

Creates a new instance of this type with the default constructor.
Can be used to create objects and struct instances.
This method can not be used on array type IDs. To create an array, use <b>NewArray</b> instead.


<br/>

### `Method NewObject:Object(constructor:TMethod, args:Object[])`

Create a new object with the given constructor

Creates a new instance of this type by calling <b>constructor</b>, which must be one of the constructors for this type.
To get a list of available constructors, use FindMethods("New").
Can be used to create objects and struct instances.
This method can not be used on array type IDs. To create an array, use <b>NewArray</b> instead.<br>


<br/>

### `Method IsReferenceType:Int()`

Determine if type is a reference type

<br/>

### `Method IsValueType:Int()`

Determine if type is a value type

Returns True for Var types


<br/>

### `Method IsClass:Int()`

Determine if type is a class

<br/>

### `Method IsInterface:Int()`

Determine if type is an interface

<br/>

### `Method IsStruct:Int()`

Determine if type is a struct

<br/>

### `Method IsEnum:Int()`

Determine if type is an enum

<br/>

### `Method IsFlagsEnum:Int()`

Determine if type is a flags enum

<br/>

### `Method IsAbstract:Int()`

Determine if type is abstract

<br/>

### `Method IsFinal:Int()`

Determine if type is final

<br/>

### `Method IsArrayType:Int()`

Determine if type is an array type

<br/>

### `Method Constants:TList(list:TList = Null)`

Get list of constants

Only returns constants declared in this type, not in super types.


<br/>

### `Method Fields:TList(list:TList = Null)`

Get list of fields

Only returns fields declared in this type, not in super types.


<br/>

### `Method Globals:TList(list:TList = Null)`

Get list of globals

Only returns globals declared in this type, not in super types.


<br/>

### `Method Functions:TList(list:TList = Null)`

Get list of functions

Only returns functions declared in this type, not in super types.


<br/>

### `Method Methods:TList(list:TList = Null)`

Get list of methods

Only returns methods declared in this type, not in super types.


<br/>

### `Method FindConstant:TConstant(name:String)`

Find a constant by name

Searches type hierarchy for a constant called <b>name</b>.


<br/>

### `Method FindField:TField(name:String)`

Find a field by name

Searches type hierarchy for a field called <b>name</b>.


<br/>

### `Method FindGlobal:TGlobal(name:String)`

Find a global by name

Searches type hierarchy for a global called <b>name</b>.


<br/>

### `Method FindFunction:TFunction(name:String)`

Find a function by name

Searches type hierarchy for a function called <b>name</b>.<br>
If the function is overloaded, the first overload declared in the most derived type will be returned.


<br/>

### `Method FindFunction:TFunction(name:String, argTypes:TTypeId[])`

Find a specific overload of a function by name and parameter list

Searches type hierarchy for a function called <b>name</b> with the specified argument types.<br>
This can be used to find a specific overload of a function.


<br/>

### `Method FindFunctions:TList(name:String, list:TList = Null)`

Find all overloads of a function by name

Searches type hierarchy for a function called <b>name</b>.<br>
Same as <b>FindFunction</b>, except it returns all overloads of the function.<br>
If an existing list is passed, retains the elements in that list and appends the results to the end. Otherwise, creates a new list.


<br/>

### `Method FindMethod:TMethod(name:String)`

Find a method by name

Searches type hierarchy for a method called <b>name</b>.<br>
If the method is overloaded, the first overload declared in the most derived type will be returned.


<br/>

### `Method FindMethod:TMethod(name:String, argTypes:TTypeId[])`

Find a specific overload of a method by name and parameter list

Searches type hierarchy for a method called <b>name</b> with the specified argument types.<br>
This can be used to find a specific overload of a method.


<br/>

### `Method FindMethods:TList(name:String, list:TList = Null)`

Find all overloads of a method by name

Searches type hierarchy for a method called <b>name</b>.<br>
Same as <b>FindMethod</b>, except it returns all overloads of the method.<br>
If an existing list is passed, retains the elements in that list and appends the results to the end. Otherwise, creates a new list.


<br/>

### `Method EnumConstants:TList(list:TList = Null)`

Enumerate all constants

Returns a list of all constants in type hierarchy.<br>
If an existing list is passed, retains the elements in that list and appends the results to the end. Otherwise, creates a new list.


<br/>

### `Method EnumFields:TList(list:TList = Null)`

Enumerate all fields

Returns a list of all fields in type hierarchy.<br>
If an existing list is passed, retains the elements in that list and appends the results to the end. Otherwise, creates a new list.


<br/>

### `Method EnumGlobals:TList(list:TList = Null)`

Enumerate all globals

Returns a list of all globals in type hierarchy.<br>
If an existing list is passed, retains the elements in that list and appends the results to the end. Otherwise, creates a new list.


<br/>

### `Method EnumFunctions:TList(list:TList = Null)`

Enumerate all functions

Returns a list of all functions in type hierarchy, excluding ones that have been overridden.<br>
If an existing list is passed, retains the elements in that list and appends the results to the end. Otherwise, creates a new list.


<br/>

### `Method EnumMethods:TList(list:TList = Null)`

Enumerate all methods

Returns a list of all methods in type hierarchy, excluding ones that have been overridden. Does not include unimplemented methods from interfaces implemented by this type.<br>
If an existing list is passed, retains the elements in that list and appends the results to the end. Otherwise, creates a new list.


<br/>

### `Method NullValue:Object()`

Get Null value


For reference types, this returns the object. For structs, it returns a <b>TBoxedValue</b>.
For other value types, it returns a string representation of the value.


<br/>

### `Method NullValueBoxed:Object()`

Get Null value

Like <b>NullValue</b>, but always returns a <b>TBoxedValue</b> for value types instead of converting the value to a string.


<br/>

### `Method NewArray:Object(length:Int = 0, dims:Int[] = Null)`

Create a new array

This method should only be called on an array type ID.<br>
If <b>dims</b> is not specified, this method will create a one-dimensional array with <b>length</b> elements.
Otherwise, <b>length</b> is ignored and a new array with dimensions as specified by <b>dims</b> is created.
The elements of the array are not initialized to valid values.


<br/>

### `Method ArraySlice:Object( _array:Object, _start:Int, _end:Int )`

Slice an array

<br/>

### `Method GetArrayElement:Object(_array:Object, index:Int)`

Get an array element


This method should only be called on the type ID corresponding to the type of the array.
For arrays of reference types, this returns the object from the array. For structs, it returns a <b>TBoxedValue</b>.
For other value types, it returns a string representation of the value.


<br/>

### `Method GetBoxedArrayElement:Object(_array:Object, index:Int)`

Get an array element


This method should only be called on the type ID corresponding to the type of the array.
Like <b>Get</b>, but always returns a <b>TBoxedValue</b> for arrays of value types instead of converting the value to a string.


<br/>

### `Method GetStringArrayElement:String( _array:Object,index:Int )`

Get an array element as <b>String</b>

This method should only be called on the type ID corresponding to the type of the array.


<br/>

### `Method GetEnumArrayElementAsString:String( _array:Object,index:Int )`

Get an array element as enum name <b>String</b>

This method should only be called on the type ID corresponding to the type of the array.


<br/>

### `Method GetByteArrayElement:Byte( _array:Object,index:Int )`

Get an array element as <b>Byte</b>

<br/>

### `Method GetShortArrayElement:Short( _array:Object,index:Int )`

Get an array element as <b>Short</b>

<br/>

### `Method GetIntArrayElement:Int( _array:Object,index:Int )`

Get an array element as <b>Int</b>

<br/>

### `Method GetUIntArrayElement:UInt( _array:Object,index:Int )`

Get an array element as <b>UInt</b>

<br/>

### `Method GetLongArrayElement:Long( _array:Object,index:Int )`

Get an array element as <b>Long</b>

<br/>

### `Method GetULongArrayElement:ULong( _array:Object,index:Int )`

Get an array element as <b>ULong</b>

<br/>

### `Method GetSizeTArrayElement:Size_T( _array:Object,index:Int )`

Get an array element as <b>Size_T</b>

<br/>

### `Method GetFloatArrayElement:Float( _array:Object,index:Int )`

Get an array element as <b>Float</b>

<br/>

### `Method GetDoubleArrayElement:Double( _array:Object,index:Int )`

Get an array element as <b>Double</b>

<br/>

### `Method GetLongIntArrayElement:LongInt( _array:Object,index:Int )`

Get an array element as <b>LongInt</b>

<br/>

### `Method GetULongIntArrayElement:ULongInt( _array:Object,index:Int )`

Get an array element as <b>ULongInt</b>

<br/>

### `Method SetArrayElement(_array:Object, index:Int, value:Object)`

Set an array element

This method should only be called on the type ID corresponding to the type of the array.


<br/>

### `Method SetArrayElement( _array:Object,index:Int,value:Byte )`

Set an array element from <b>Byte</b>

<br/>

### `Method SetArrayElement( _array:Object,index:Int,value:Short )`

Set an array element from <b>Short</b>

<br/>

### `Method SetArrayElement( _array:Object,index:Int,value:Int )`

Set an array element from <b>Int</b>

<br/>

### `Method SetArrayElement( _array:Object,index:Int,value:UInt )`

Set an array element from <b>UInt</b>

<br/>

### `Method SetArrayElement( _array:Object,index:Int,value:Long )`

Set an array element from <b>Long</b>

<br/>

### `Method SetArrayElement( _array:Object,index:Int,value:ULong )`

Set an array element from <b>ULong</b>

<br/>

### `Method SetArrayElement( _array:Object,index:Int,value:Size_T )`

Set an array element from <b>Size_T</b>

<br/>

### `Method SetArrayElement( _array:Object,index:Int,value:Float )`

Set an array element from <b>Float</b>

<br/>

### `Method SetArrayElement( _array:Object,index:Int,value:Double )`

Set an array element from <b>Double</b>

<br/>

### `Method SetArrayElement( _array:Object,index:Int,value:LongInt )`

Set an array element from <b>LongInt</b>

<br/>

### `Method SetArrayElement( _array:Object,index:Int,value:ULongInt )`

Set an array element from <b>ULongInt</b>

<br/>

### `Method SetEnumArrayElement( _array:Object,index:Int,value:String )`

Set an enum array element from <b>String</b>

<br/>

### `Method SetByteArrayElement( _array:Object,index:Int,value:Byte )`

Set an array element from <b>Byte</b>

<br/>

### `Method SetShortArrayElement( _array:Object,index:Int,value:Short )`

Set an array element from <b>Short</b>

<br/>

### `Method SetIntArrayElement( _array:Object,index:Int,value:Int )`

Set an array element from <b>Int</b>

<br/>

### `Method SetUIntArrayElement( _array:Object,index:Int,value:UInt )`

Set an array element from <b>UInt</b>

<br/>

### `Method SetLongArrayElement( _array:Object,index:Int,value:Long )`

Set an array element from <b>Long</b>

<br/>

### `Method SetULongArrayElement( _array:Object,index:Int,value:ULong )`

Set an array element from <b>ULong</b>

<br/>

### `Method SetSizeTArrayElement( _array:Object,index:Int,value:Size_T )`

Set an array element from <b>Size_T</b>

<br/>

### `Method SetFloatArrayElement( _array:Object,index:Int,value:Float )`

Set an array element from <b>Float</b>

<br/>

### `Method SetDoubleArrayElement( _array:Object,index:Int,value:Double )`

Set an array element from <b>Double</b>

<br/>

### `Method SetLongIntArrayElement( _array:Object,index:Int,value:LongInt )`

Set an array element from <b>LongInt</b>

<br/>

### `Method SetULongIntArrayElement( _array:Object,index:Int,value:ULongInt )`

Set an array element from <b>ULongInt</b>

<br/>

### `Method SetStringArrayElement( _array:Object,index:Int,value:String )`

Set an array element from <b>String</b>

<br/>

### `Method Size:Size_T()`

Size of the type in bytes

For reference types such as classes and interfaces, this function will return the size of the reference (equal to the size of PointerTypeId), not the size of the pointed to instance.


<br/>

## Functions

### `Function ArrayLength:Int(_array:Object, dim:Int = 0)`

Get length of an array

<br/>

### `Function ArrayDimensions:Int(_array:Object)`

Get the number of dimensions of an array

<br/>

### `Function ForName:TTypeId(name:String)`

Get type by name

<br/>

### `Function ForObject:TTypeId(obj:Object)`

Get type by object

<br/>

### `Function EnumTypes:TList()`

Get list of all data types currently used in this program

<br/>

### `Function EnumClasses:TList()`

Get a list of all class types

Does not include array types.


<br/>

### `Function EnumInterfaces:TList()`

Get a list of all interface types

<br/>

### `Function EnumStructs:TList()`

Get a list of all struct types

<br/>

### `Function EnumEnums:TList()`

Get a list of all enum types

<br/>

