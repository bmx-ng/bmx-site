---
id: tmethod
title: TMethod
sidebar_label: TMethod
---

Type member method


## Methods

### `Method IsAbstract:Int()`

Determine if method is abstract

<br/>

### `Method IsFinal:Int()`

Determine if method is final

<br/>

### `Method ArgTypes:TTypeId[]()`

Get method arg types

<br/>

### `Method ReturnType:TTypeId()`

Get method return type

<br/>

### `Method FunctionPtr:Byte Ptr()`

Get function pointer

<br/>

### `Method Invoke:Object(obj:Object, args:Object[] = Null)`

Invoke method


If the method return type is a reference type, this returns the object returned by the method.
If it is a struct, it returns a <b>TBoxedValue</b>.
If it is another value type, it returns a string representation of the returned value.


<br/>

### `Method InvokeBoxed:Object(obj:Object, args:Object[] = Null)`

Invoke method

Like <b>Invoke</b>, but always returns a <b>TBoxedValue</b> for value types instead of converting the value to a string.


<br/>

