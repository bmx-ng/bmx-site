---
id: ttypeid
title: TTypeId
sidebar_label: TTypeId
---

Type id


## Methods

### `Method Name$()`

Get name of type


### `Method MetaData$( key$="" )`

Get type meta data


### `Method SuperType:TTypeId()`

Get super type


### `Method ArrayType:TTypeId(dims:Int = 1)`

Get array type


### `Method ElementType:TTypeId()`

Get element type


### `Method PointerType:TTypeId()`

Get pointer type


### `Method FunctionType:TTypeId( args:TTypeId[]=Null)`

Get function pointer type


### `Method ReturnType:TTypeId()`

Get function return type


### `Method ArgTypes:TTypeId[]()`

Get function argument types


### `Method ExtendsType( typeId:TTypeId )`

Determine if type extends a type


### `Method DerivedTypes:TList()`

Get list of derived types


### `Method NewObject:Object()`

Create a new object


### `Method IsInterface:Int()`

Returns True if this TypeId is an interface.


### `Method Constants:TStringMap()`

Get list of constants

Only returns constants declared in this type, not in super types.



### `Method Fields:TStringMap()`

Get list of fields

Only returns fields declared in this type, not in super types.



### `Method Globals:TStringMap()`

Get list of globals

Only returns globals declared in this type, not in super types.



### `Method Functions:TStringMap()`

Get list of functions

Only returns functions declared in this type, not in super types.



### `Method Methods:TStringMap()`

Get list of methods

Only returns methods declared in this type, not in super types.



### `Method Interfaces:TList()`

Get list of implemented interfaces.


### `Method FindConstant:TConstant( name$ )`

Find a constant by name

Searchs type hierarchy for constant called <b>name</b>.



### `Method FindField:TField( name$ )`

Find a field by name

Searchs type hierarchy for field called <b>name</b>.



### `Method FindGlobal:TGlobal( name$ )`

Find a global by name

Searchs type hierarchy for global called <b>name</b>.



### `Method FindFunction:TFunction(name:String)`

Find a function by name

Searches type heirarchy for function called <b>name</b>



### `Method FindMethod:TMethod( name$ )`

Find a method by name

Searchs type hierarchy for method called <b>name</b>.



### `Method EnumConstants:TList( list:TList=Null )`

Enumerate all constants

Returns a list of all constants in type hierarchy



### `Method EnumFields:TList( list:TList=Null )`

Enumerate all fields

Returns a list of all fields in type hierarchy



### `Method EnumGlobals:TList( list:TList=Null )`

Enumerate all globals

Returns a list of all globals in type hierarchy



### `Method EnumFunctions:TList( list:TList=Null )`

Enumerate all functions

Returns a list of all functions in type hierarchy



### `Method EnumMethods:TList( list:TList=Null )`

Enumerate all methods

Returns a list of all methods in type hierarchy - TO DO: handle overrides!



### `Method NewArray:Object( length, dims:Int[] = Null )`

Create a new array


### `Method ArrayLength( _array:Object, dim:Int = 0 )`

Get array length


### `Method ArrayDimensions:Int( _array:Object )`

Get the number of dimensions


### `Method GetArrayElement:Object( _array:Object,index )`

Get an array element


### `Method SetArrayElement( _array:Object,index,value:Object )`

Set an array element


## Functions

### `Function ForName:TTypeId( name$ )`

Get Type by name


### `Function ForObject:TTypeId( obj:Object )`

Get Type by object


### `Function EnumTypes:TList()`

Get list of all types


### `Function EnumInterfaces:TList()`

Gets a list of all interfaces


