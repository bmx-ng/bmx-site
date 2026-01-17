---
id: tfunction
title: TFunction
sidebar_label: TFunction
---

Type member function


## Methods

### `Method IsAbstract:Int()`

Determine if function is abstract

<br/>

### `Method IsFinal:Int()`

Determine if function is final

<br/>

### `Method ArgTypes:TTypeId[]()`

Get function arg types

<br/>

### `Method ReturnType:TTypeId()`

Get function return type

<br/>

### `Method FunctionPtr:Byte Ptr()`

Get function pointer

<br/>

### `Method Invoke:Object(args:Object[] = Null)`

Invoke function


If the function return type is a reference type, this returns the object returned by the function.
If it is a struct, it returns a <b>TBoxedValue</b>.
If it is another value type, it returns a string representation of the returned value.


<br/>

### `Method InvokeBoxed:Object(args:Object[] = Null)`

Invoke function

Like <b>Invoke</b>, but always returns a <b>TBoxedValue</b> for value types instead of converting the value to a string.


<br/>

