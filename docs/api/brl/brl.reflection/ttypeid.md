---
id: ttypeid
title: TTypeId
sidebar_label: TTypeId
---

Type id


## Methods

### `Method Name$()`

Get name of type

<br/>

### `Method MetaData$( key$="" )`

Get type meta data

<br/>

### `Method SuperType:TTypeId()`

Get super type

<br/>

### `Method ArrayType:TTypeId(dims:Int = 1)`

Get array type

<br/>

### `Method ElementType:TTypeId()`

Get element type

<br/>

### `Method PointerType:TTypeId()`

Get pointer type

<br/>

### `Method FunctionType:TTypeId( args:TTypeId[]=Null)`

Get function pointer type

<br/>

### `Method ReturnType:TTypeId()`

Get function return type

<br/>

### `Method ArgTypes:TTypeId[]()`

Get function argument types

<br/>

### `Method ExtendsType( typeId:TTypeId )`

Determine if type extends a type

<br/>

### `Method DerivedTypes:TList()`

Get list of derived types

<br/>

### `Method NewObject:Object()`

Create a new object

<br/>

### `Method IsInterface:Int()`

Returns True if this TypeId is an interface.

<br/>

### `Method Constants:TStringMap()`

Get list of constants

Only returns constants declared in this type, not in super types.


<br/>

### `Method Fields:TStringMap()`

Get list of fields

Only returns fields declared in this type, not in super types.


<br/>

### `Method Globals:TStringMap()`

Get list of globals

Only returns globals declared in this type, not in super types.


<br/>

### `Method Functions:TStringMap()`

Get list of functions

Only returns functions declared in this type, not in super types.


<br/>

### `Method Methods:TStringMap()`

Get list of methods

Only returns methods declared in this type, not in super types.


<br/>

### `Method Interfaces:TList()`

Get list of implemented interfaces.

<br/>

### `Method FindConstant:TConstant( name$ )`

Find a constant by name

Searchs type hierarchy for constant called <b>name</b>.


<br/>

### `Method FindField:TField( name$ )`

Find a field by name

Searchs type hierarchy for field called <b>name</b>.


<br/>

### `Method FindGlobal:TGlobal( name$ )`

Find a global by name

Searchs type hierarchy for global called <b>name</b>.


<br/>

### `Method FindFunction:TFunction(name:String)`

Find a function by name

Searches type heirarchy for function called <b>name</b>


<br/>

### `Method FindMethod:TMethod( name$ )`

Find a method by name

Searchs type hierarchy for method called <b>name</b>.


<br/>

### `Method EnumConstants:TList( list:TList=Null )`

Enumerate all constants

Returns a list of all constants in type hierarchy


<br/>

### `Method EnumFields:TList( list:TList=Null )`

Enumerate all fields

Returns a list of all fields in type hierarchy


<br/>

### `Method EnumGlobals:TList( list:TList=Null )`

Enumerate all globals

Returns a list of all globals in type hierarchy


<br/>

### `Method EnumFunctions:TList( list:TList=Null )`

Enumerate all functions

Returns a list of all functions in type hierarchy


<br/>

### `Method EnumMethods:TList( list:TList=Null )`

Enumerate all methods

Returns a list of all methods in type hierarchy - TO DO: handle overrides!


<br/>

### `Method NewArray:Object( length, dims:Int[] = Null )`

Create a new array

<br/>

### `Method ArrayLength( _array:Object, dim:Int = 0 )`

Get array length

<br/>

### `Method ArrayDimensions:Int( _array:Object )`

Get the number of dimensions

<br/>

### `Method GetArrayElement:Object( _array:Object,index )`

Get an array element

<br/>

### `Method SetArrayElement( _array:Object,index,value:Object )`

Set an array element

<br/>

## Functions

### `Function ForName:TTypeId( name$ )`

Get Type by name

<br/>

### `Function ForObject:TTypeId( obj:Object )`

Get Type by object

<br/>

### `Function EnumTypes:TList()`

Get list of all types

<br/>

### `Function EnumInterfaces:TList()`

Gets a list of all interfaces

<br/>

