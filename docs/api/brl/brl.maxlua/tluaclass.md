---
id: tluaclass
title: TLuaClass
sidebar_label: TLuaClass
---

A Lua 'class'



The TLuaClass type is used to contain lua source code.

The source code should consist of a series of one or more lua functions.

To actually invoke these functions a lua object must first be created - see [TLuaObject](../../../brl/brl.maxlua/tluaobject).


## Methods

### `Method SourceCode$()`

Get source code

#### Returns
The lua source code for the class.



### `Method SetSourceCode:TLuaClass( source$ )`

Set source code


Sets the class source code.

If the class was created with the TLuaClass.Create function, you do not need to call this
method.



## Functions

### `Function Create:TLuaClass( source$ )`

Create a lua class


The <b>source</b> parameter must be valid Lua source code, and should contain a series of one or
more lua function definitions.

These functions can later be invoked by using the TLuaObject.Invoke method.


#### Returns
A new lua class object.



