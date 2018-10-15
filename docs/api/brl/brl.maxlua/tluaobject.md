---
id: tluaobject
title: TLuaObject
sidebar_label: TLuaObject
---


## Methods

### `Method Init:TLuaObject( class:TLuaClass,supr:Object )`

Initialize the lua object


Sets the object's class and super object.

If the object was created with the TLuaObject.Create function, you do not need to call
this method.



### `Method Invoke:Object( name$,args:Object[] )`

Invoke an object method


<b>name</b> should refer to a function within the object's classes' source code.



## Functions

### `Function Create:TLuaObject( class:TLuaClass,supr:Object )`

Create a lua object


Once a lua object has been created, object methods (actually lua functions defined in the
class) can be invoked using the [Invoke](../../brl/brl.maxlua/#method-invoke-object-name-args-object) method.



