---
id: pub.lua
title: Pub.Lua
sidebar_label: Pub.Lua
---


"*Lua is an extension programming language designed to support general procedural programming with data
description facilities. It also offers good support for object-oriented programming, functional programming,
and data-driven programming. Lua is intended to be used as a powerful, light-weight scripting language
for any program that needs one.*" (from "[Lua 5.1 Reference Manual](https://www.lua.org/manual/5.1/manual.html)" by Roberto Ierusalimschy, Luiz Henrique de
Figueiredo, Waldemar Celes)

This module provides a BlitzMax interface to the Lua main and auxiliary APIs. It is almost
complete, the only functions missing are those with variable argument lists (which are not supported by BlitzMax).

The [Pub.Lua](../pub/pub_lua.md) package contains the full Lua 5.1.4 distribution. The Lua source code is completely integrated into the module, additional DLLs
(or shared libraries, resp.) are not required.

# Introduction
The following description is not meant as a tutorial, but may still help you to start Lua programming within BlitzMax.
More API-related information can be found in the [Lua Reference manual](https://www.lua.org/manual/5.1/manual.html#3)

## Setting up a Lua VM

Running Lua scripts always require the instantiation of at least one Lua VM:
```blitzmax
Local LuaState:Byte Ptr = luaL_newstate()
```
The result of this instantiation is a pointer to a structure which contains the full state of the new VM and has to be
passed as the first argument to almost any other Lua API function.

It is now time to "open" the intrinsic Lua libraries (note: these libraries are part of [Pub.Lua](../pub/pub_lua.md) now, external DLLs or shared libraries
are not necessary):
```blitzmax
luaL_openlibs(LuaState)
```
Always initialize the Lua VM by opening its libraries unless you really know what you are doing!

Usually, creating a single Lua state is sufficient, even further (Lua) threads share the basic Lua
state (and its associated environment).

## Shutting down a Lua VM
At the end, it's always a good idea to shut down the Lua VM
```blitzmax
lua_close(LuaState)
```
The Lua interpreter has now been terminated and its state variable is no longer valid.

### Accessing Lua Globals

The code
```blitzmax
lua_pushstring(LuaState, "BMXString")
lua_setglobal (LuaState, "luaglobal")
```
defines a global Lua variable (called `luaglobal`) which contains a string (namely "`BMXString`").

## Registering BlitzMax Functions

In order to access BlitzMax features from within a Lua script, it is necessary to implement suitable BlitzMax functions
and register them in the Lua VM.

Such BlitzMax functions typically look as follows:
```blitzmax
Function BMXName:int (LuaState:Byte Ptr)
	...    ' handling of parameters passed from Lua (if required)
	...    ' actual function body
	...    ' passing results back to Lua (if required)
	return 0 ' number of values returned to Lua
End Function
```
Such a function is then registered using
```blitzmax
lua_register(LuaState, "luaname", BMXName)
```
This command registers a BlitzMax function (called `BMXName`) with the (global) name `luaname` under Lua.
Both names may be equal, but they do not have to.

##Running Lua Scripts From Within BlitzMax

The code
```blitzmax
Local Result:int = luaL_loadString(LuaState,LuaScript)
If Result <> 0 Then<br/>   ' ERROR!!!
	lua_close(LuaState) ' just to be complete
	End
End If
```
loads and compiles a (BlitzMax) string containing a LuaScript. The result (of compilation) is left on the (Lua) stack.
```blitzmax
lua_getfield(LuaState, LUA_GLOBALSINDEX, "debug") ' get global "debug"
lua_getfield(LuaState, -1, "traceback")           ' get "debug.traceback"
lua_remove (LuaState, -2)                         ' remove "debug" table from stack

Result = lua_pcall(LuaState,1,-1,-1)  ' use "debug.traceback" as err.hdlr

If Result <> 0 Then
	' ERROR
	lua_close(LuaState) ' just to be complete
	End
End if
```
actually evaluates the previously loaded script. The initially mentioned Lua commands just prepare for proper error messages should the Lua script
fail.


## Functions

### `Function lua_atpanic:Byte Ptr (lua_state:Byte Ptr, panicf:Int(ls:Byte Ptr))`

Sets a new panic function and returns the old one.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_atpanic)


<br/>

### `Function lua_call (lua_state:Byte Ptr, nargs:Int, nresults:Int)`

Calls a function.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_call)


<br/>

### `Function lua_checkstack:Int (lua_state:Byte Ptr, extra:Int)`

Ensures that there are at least <b>extra</b> free stack slots in the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_checkstack)


<br/>

### `Function lua_close (lua_state:Byte Ptr)`

Destroys all objects in the given Lua state and frees all dynamic memory used by this state.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_close)


<br/>

### `Function lua_concat (lua_state:Byte Ptr, n:Int)`

Concatenates the <b>n</b> values at the top of the stack, pops them, and leaves the result at the top.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_concat)


<br/>

### `Function lua_cpcall:Int (lua_state:Byte Ptr, func:Int(ls:Byte Ptr), ud:Byte Ptr)`

Calls the function <b>func</b> in protected mode.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_cpcall)


<br/>

### `Function lua_createtable (lua_state:Byte Ptr, narr:Int, nrec:Int)`

Creates a new empty table and pushes it onto the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_createtable)


<br/>

### `Function lua_equal:Int (lua_state:Byte Ptr, index1:Int, index2:Int)`

Returns 1 if the two values in acceptable indices <b>index1</b> and <b>index2</b> are equal.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_equal)


<br/>

### `Function lua_error:Int (lua_state:Byte Ptr)`

Generates a Lua error.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_error)


<br/>

### `Function lua_gc:Int (lua_state:Byte Ptr, what:Int, data:Int)`

Controls the garbage collector.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_gc)


<br/>

### `Function lua_getallocf:Byte Ptr (lua_state:Byte Ptr, ud:Byte Ptr Ptr)`

Returns the memory-allocation function of a given state.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_getallocf)


<br/>

### `Function lua_getfenv (lua_state:Byte Ptr, index:Int)`

Pushes onto the stack the environment table of the value at the given index.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_getfenv)


<br/>

### `Function lua_getfield (lua_state:Byte Ptr, index:Int, k$z)              ' no 0 expected`

Pushes onto the stack the value `t[k]`, where <b>t</b> is the value at the given valid index.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_getfield)


<br/>

### `Function lua_gethook:Byte Ptr (lua_state:Byte Ptr)`

Returns the current hook function.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_gethook)


<br/>

### `Function lua_gethookcount:Int (lua_state:Byte Ptr)`

Returns the current hook count.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_gethookcount)


<br/>

### `Function lua_gethookmask:Int (lua_state:Byte Ptr)`

Returns the current hook mask.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_gethookmask)


<br/>

### `Function lua_getinfo:Int (lua_state:Byte Ptr, what$z, ar:lua_Debug Ptr)    ' no 0 expected`

Returns information about a specific function or function invocation.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_getinfo)


<br/>

### `Function lua_getlocal$z (lua_state:Byte Ptr, ar:lua_Debug Ptr, n:Int)     ' no 0 expected`

Gets information about a local variable of a given activation record.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_getlocal)


<br/>

### `Function lua_getmetatable:Int (lua_state:Byte Ptr, index:Int)`

Pushes onto the stack the metatable of the value at the given acceptable <b>index</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_getmetatable)


<br/>

### `Function lua_getstack:Int (lua_state:Byte Ptr, level:Int, ar:lua_Debug Ptr) ' no 0 expected`

Get information about the interpreter runtime stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_getstack)


<br/>

### `Function lua_gettable (lua_state:Byte Ptr, index:Int)`

Pushes onto the stack the value `t[k]`, where <b>t</b> is the value at the given valid index and <b>k</b> is the value at the top of the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_gettable)


<br/>

### `Function lua_gettop:Int (lua_state:Byte Ptr)`

Returns the index of the top element in the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_gettop)


<br/>

### `Function lua_getupvalue$z (lua_state:Byte Ptr, funcindex:Int, n:Int)        ' no 0 expected`

Gets information about a closure's upvalue.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_getupvalue)


<br/>

### `Function lua_insert (lua_state:Byte Ptr, index:Int)`

Moves the top element into the given valid index, shifting up the elements above this index to open space.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_insert)


<br/>

### `Function lua_iscfunction:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the value at the given acceptable <b>index</b> is a C function, and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_iscfunction)


<br/>

### `Function lua_isnumber:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the value at the given acceptable <b>index</b> is a number or a string convertible to a number, and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_isnumber)


<br/>

### `Function lua_isstring:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the value at the given acceptable <b>index</b> is a string or a number (which is always convertible to a string), and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_isstring)


<br/>

### `Function lua_isuserdata:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the value at the given acceptable index is a userdata (either full or light), and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_isuserdata)


<br/>

### `Function lua_lessthan:Int (lua_state:Byte Ptr, index1:Int, index2:Int)`

Returns 1 if the value at acceptable index <b>index1</b> is smaller than the value at acceptable index <b>index2</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_lessthan)


<br/>

### `Function lua_newthread:Byte Ptr (lua_state:Byte Ptr)`

Creates a new thread, pushes it on the stack, and returns a pointer to a lua_State that represents this new thread.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_newthread)


<br/>

### `Function lua_next:Int (lua_state:Byte Ptr, index:Int)`

Pops a key from the stack, and pushes a key-value pair from the table at the given <b>index</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_next)


<br/>

### `Function lua_pcall:Int (lua_state:Byte Ptr, nargs:Int, nresults:Int, errfunc:Int)`

Calls a function in protected mode.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_pcall)


<br/>

### `Function lua_pushboolean (lua_state:Byte Ptr, b:Int)`

Pushes a boolean value with value <b>b</b> onto the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_pushboolean)


<br/>

### `Function lua_pushcclosure (lua_state:Byte Ptr, fn:Int(ls:Byte Ptr), n:Int)`

Pushes a new C closure onto the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_pushcclosure)


<br/>

### `Function lua_pushlightuserdata (lua_state:Byte Ptr, p:Byte Ptr)`

Pushes a light userdata onto the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_pushlightuserdata)


<br/>

### `Function lua_pushnil (lua_state:Byte Ptr)`

Pushes a nil value onto the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_pushnil)


<br/>

### `Function lua_pushnumber (lua_state:Byte Ptr, n:Double)`

Pushes a number with value <b>n</b> onto the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_pushnumber)


<br/>

### `Function lua_pushstring (lua_state:Byte Ptr, s$z)                         ' no 0 expected`

Pushes the [String](../../brl/brl.blitz/#string) pointed to by <b>s</b> onto the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_pushstring)


<br/>

### `Function lua_pushthread:Int (lua_state:Byte Ptr)`

Pushes the thread onto the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_pushthread)


<br/>

### `Function lua_pushvalue (lua_state:Byte Ptr, index:Int)`

Pushes a copy of the element at the given valid <b>index</b> onto the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_pushvalue)


<br/>

### `Function lua_rawequal:Int (lua_state:Byte Ptr, index1:Int, index2:Int)`

Returns 1 if the two values in acceptable indices <b>index1</b> and <b>index2</b> are primitively equal.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_rawequal)


<br/>

### `Function lua_rawget (lua_state:Byte Ptr, index:Int)`

Similar to [lua_gettable](../../pub/pub.lua/#function-luagettable-luastatebyte-ptr-indexint), but does a raw access


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_rawget)


<br/>

### `Function lua_rawgeti (lua_state:Byte Ptr, index:Int, n:Int)`

Pushes onto the stack the value `t[n]`, where <b>t</b> is the value at the given valid <b>index</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_rawgeti)


<br/>

### `Function lua_rawset (lua_state:Byte Ptr, index:Int)`

Similar to [lua_settable](../../pub/pub.lua/#function-luasettable-luastatebyte-ptr-indexint), but does a raw assignment.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_rawset)


<br/>

### `Function lua_rawseti (lua_state:Byte Ptr, index:Int, n:Int)`

Does the equivalent of `t[n] = v`, where <b>t</b> is the value at the given valid <b>index</b> and v is the value at the top of the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_rawseti)


<br/>

### `Function lua_remove (lua_state:Byte Ptr, index:Int)`

Removes the element at the given valid <b>index</b>, shifting down the elements above this index to fill the gap.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_remove)


<br/>

### `Function lua_replace (lua_state:Byte Ptr, index:Int)`

Moves the top element into the given position (and pops it), without shifting any element.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_replace)


<br/>

### `Function lua_resume:Int (lua_state:Byte Ptr, narg:Int)`

Starts and resumes a coroutine in a given thread.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_resume)


<br/>

### `Function lua_setfenv:Int (lua_state:Byte Ptr, index:Int)`

Pops a table from the stack and sets it as the new environment for the value at the given <b>index</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_setfenv)


<br/>

### `Function lua_setfield (lua_state:Byte Ptr, index:Int, k$z)              ' no 0 expected`

Does the equivalent to `t[k] = v`, where <b>t</b> is the value at the given valid <b>index</b> and v is the value at the top of the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_setfield)


<br/>

### `Function lua_sethook:Int (lua_state:Byte Ptr, f(ls:Byte Ptr,ar:lua_Debug Ptr), mask:Int, count:Int)`

Sets the debugging hook function.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_sethook)


<br/>

### `Function lua_setlocal$z (lua_state:Byte Ptr, ar:lua_Debug Ptr, n:Int)     ' no 0 expected`

Sets the value of a local variable of a given activation record.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_setlocal)


<br/>

### `Function lua_setmetatable:Int (lua_state:Byte Ptr, index:Int)`

Pops a table from the stack and sets it as the new metatable for the value at the given acceptable <b>index</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_setmetatable)


<br/>

### `Function lua_settable (lua_state:Byte Ptr, index:Int)`

Does the equivalent to `t[k] = v`, where <b>t</b> is the value at the given valid <b>index</b>, v is the value at the top of the stack, and k is the value just below the top.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_settable)


<br/>

### `Function lua_settop (lua_state:Byte Ptr, index:Int)`

Accepts any acceptable index, or 0, and sets the stack top to this <b>index</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_settop)


<br/>

### `Function lua_setupvalue$z (lua_state:Byte Ptr, funcindex:Int, n:Int)        ' no 0 expected`

Sets the value of a closure's upvalue.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_setupvalue)


<br/>

### `Function lua_status:Int (lua_state:Byte Ptr)`

Returns the status of the thread <b>lua_state</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_status)


<br/>

### `Function lua_toboolean:Int (lua_state:Byte Ptr, index:Int)`

Converts the Lua value at the given acceptable <b>index</b> to a boolean value (0 or 1).


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_toboolean)


<br/>

### `Function lua_tocfunction:Byte Ptr (lua_state:Byte Ptr, index:Int)`

Converts a value at the given acceptable index to a function.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_tocfunction)


<br/>

### `Function lua_tolstring:Byte Ptr (lua_state:Byte Ptr, index:Int, size:Size_T Ptr) ' without any conversion!`

Converts the Lua value at the given acceptable index to a C string.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_tolstring)


<br/>

### `Function lua_tonumber:Double (lua_state:Byte Ptr, index:Int)`

Converts the Lua value at the given acceptable index to the C type lua_Number.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_tonumber)


<br/>

### `Function lua_topointer:Byte Ptr (lua_state:Byte Ptr, index:Int)`

Converts the value at the given acceptable index to a generic C pointer.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_topointer)


<br/>

### `Function lua_tothread:Byte Ptr (lua_state:Byte Ptr, index:Int)`

Converts the value at the given acceptable index to a Lua thread.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_tothread)


<br/>

### `Function lua_touserdata:Byte Ptr (lua_state:Byte Ptr, index:Int)`

If the value at the given acceptable index is a full userdata, returns its block address.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_touserdata)


<br/>

### `Function lua_type:Int (lua_state:Byte Ptr, index:Int)`

Returns the type of the value in the given acceptable <b>index</b>, or LUA_TNONE for a non-valid index.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_type)


<br/>

### `Function lua_typename$z (lua_state:Byte Ptr, tp:Int)                      ' no 0 expected`

Returns the name of the type encoded by the value <b>tp</b>, which must be one the values returned by lua_type.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_typename)


<br/>

### `Function lua_xmove(fromState:Byte Ptr, toState:Byte Ptr, n:Int)`

Exchange values between different threads of the same global state.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_xmove)


<br/>

### `Function lua_yield:Int (lua_state:Byte Ptr, nresults:Int)`

Yields a coroutine.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_yield)


<br/>

### `Function lua_isboolean:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the value at the given acceptable <b>index</b> has type boolean, and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_isboolean)


<br/>

### `Function lua_isfunction:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the value at the given acceptable <b>index</b> is a function (either C or Lua), and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_isfunction)


<br/>

### `Function lua_islightuserdata:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the value at the given acceptable <b>index</b> is a light userdata, and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_islightuserdata)


<br/>

### `Function lua_isnil:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the value at the given acceptable <b>index</b> is nil, and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_isnil)


<br/>

### `Function lua_isnone:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the given acceptable <b>index</b> is not valid (that is, it refers to an element outside the current stack), and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_isnone)


<br/>

### `Function lua_isnoneornil:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the given acceptable <b>index</b> is not valid (that is, it refers to an element outside the current stack) or if the value at this index is nil, and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_isnoneornil)


<br/>

### `Function lua_istable:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the value at the given acceptable index is a table, and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_istable)


<br/>

### `Function lua_isthread:Int (lua_state:Byte Ptr, index:Int)`

Returns 1 if the value at the given acceptable <b>index</b> is a thread, and 0 otherwise.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_isthread)


<br/>

### `Function lua_newtable (lua_state:Byte Ptr)`

Creates a new empty table and pushes it onto the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_newtable)


<br/>

### `Function lua_pop (lua_state:Byte Ptr, n:Int)`

Pops <b>n</b> elements from the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_pop)


<br/>

### `Function lua_pushcfunction (lua_state:Byte Ptr, fn:Int(ls:Byte Ptr))`

Pushes a function onto the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_pushcfunction)


<br/>

### `Function lua_register (lua_state:Byte Ptr, name:String, f:Int(ls:Byte Ptr))`

Sets the function <b>f</b> as the new value of global <b>name</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_register)


<br/>

### `Function lua_setglobal (lua_state:Byte Ptr, name:String)`

Pops a value from the stack and sets it as the new value of global <b>name</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_setglobal)


<br/>

### `Function lua_tostring:String (lua_state:Byte Ptr, index:Int)`

Equivalent to lua_tolstring with len equal to NULL.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#lua_tostring)


<br/>

### `Function luaL_addlstring (B:Byte Ptr, s:Byte Ptr, l:Int)`

Adds the string pointed to by <b>s</b> with length <b>l</b> to the buffer <b>B</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_addlstring)


<br/>

### `Function luaL_addsize (B:Byte Ptr, size:Int)`

Adds to the buffer <b>B</b> (see luaL_Buffer) a string of length <b>size</b> previously copied to the buffer area


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_addsize)


<br/>

### `Function luaL_addstring (B:Byte Ptr, s$z)                                 ' no 0 allowed!`

Adds the zero-terminated string pointed to by <b>s</b> to the buffer <b>B</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_addstring)


<br/>

### `Function luaL_addvalue (B:Byte Ptr)`

Adds the value at the top of the stack to the buffer <b>B</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_addvalue)


<br/>

### `Function luaL_argerror:Int (lua_state:Byte Ptr, narg:Int, extramsg$z)     ' no 0 expected`

Raises an error with the following message, where func is retrieved from the call stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_argerror)


<br/>

### `Function luaL_buffinit (lua_state:Byte Ptr, B:Byte Ptr)`

Initializes a buffer <b>B</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_buffinit)


<br/>

### `Function luaL_callmeta:Int (lua_state:Byte Ptr, obj:Int, e$z)             ' no 0 expected`

Calls a metamethod.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_callmeta)


<br/>

### `Function luaL_checkany (lua_state:Byte Ptr, narg:Int)`

Checks whether the function has an argument of any type (including nil) at position <b>narg</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_checkany)


<br/>

### `Function luaL_checklstring:Byte Ptr (lua_state:Byte Ptr, narg:Int, size:Int Ptr)`

Checks whether the function argument <b>narg</b> is a string and returns this string.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_checklstring)


<br/>

### `Function luaL_checknumber:Double (lua_state:Byte Ptr, narg:Int)`

Checks whether the function argument narg is a number and returns this number.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_checknumber)


<br/>

### `Function luaL_checkstack (lua_state:Byte Ptr, sz:Int, msg$z)                     ' no 0 expected`

Grows the stack size to top + <b>sz</b> elements, raising an error if the stack cannot grow to that size.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_checkstack)


<br/>

### `Function luaL_checktype (lua_state:Byte Ptr, narg:Int, t:Int)`

Checks whether the function argument <b>narg</b> has type <b>t</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_checktype)


<br/>

### `Function luaL_checkudata:Byte Ptr (lua_state:Byte Ptr, narg:Int, tname$z)        ' no 0 expected`

Checks whether the function argument <b>narg</b> is a userdata of the type <b>tname</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_checkudata)


<br/>

### `Function luaL_getmetafield:Int (lua_state:Byte Ptr, obj:Int, e$z)                ' no 0 expected`

Pushes onto the stack the field <b>e</b> from the metatable of the object at index <b>obj</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_getmetafield)


<br/>

### `Function luaL_gsub$z (lua_state:Byte Ptr, s$z, p$z, r$z)                         ' no 0 expected`

Creates a copy of string <b>s</b> by replacing any occurrence of the string <b>p</b> with the string <b>r</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_gsub)


<br/>

### `Function luaL_loadbuffer:Int (lua_state:Byte Ptr, buff:Byte Ptr, sz:Int, name$z) ' no 0 expected`

Loads a buffer as a Lua chunk.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_loadbuffer)


<br/>

### `Function luaL_loadfile:Int (lua_state:Byte Ptr, filename$z)                      ' no 0 expected`

Loads a file as a Lua chunk.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_loadfile)


<br/>

### `Function luaL_loadstring:Int (lua_state:Byte Ptr, s$z)                           ' no 0 allowed!`

Loads a string as a Lua chunk.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_loadstring)


<br/>

### `Function luaL_newmetatable:Int (lua_state:Byte Ptr, tname$z)                     ' no 0 expected`

If the registry already has the key <b>tname</b>, returns 0.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_newmetatable)


<br/>

### `Function luaL_newstate:Byte Ptr ()`

Creates a new Lua state.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_newstate)


<br/>

### `Function luaL_openlibs (lua_state:Byte Ptr)`

Opens all standard Lua libraries into the given state.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_openlibs)


<br/>

### `Function luaL_optlstring:Byte Ptr (lua_state:Byte Ptr, narg:Int, d$z, size:Int Ptr) ' no 0 expected in "d"`

If the function argument <b>narg</b> is a string, returns this string.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_optlstring)


<br/>

### `Function luaL_optnumber:Double (lua_state:Byte Ptr, narg:Int, d:Double)`

If the function argument narg is a number, returns this number.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_optnumber)


<br/>

### `Function luaL_prepbuffer:Byte Ptr (B:Byte Ptr)`

Returns an address to a space of size LUAL_BUFFERSIZE where you can copy a string to be added to buffer <b>B</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_prepbuffer)


<br/>

### `Function luaL_pushresult (B:Byte Ptr)`

Finishes the use of buffer B leaving the final string on the top of the stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_pushresult)


<br/>

### `Function luaL_ref:Int (lua_state:Byte Ptr, t:Int)`

Creates and returns a reference, in the table at index <b>t</b>, for the object at the top of the stack (and pops the object).


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_ref)


<br/>

### `Function luaL_register (lua_state:Byte Ptr, libname$z, l:lua_Reg Ptr)            ' no 0 expected`

Opens a library.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_register)


<br/>

### `Function luaL_typerror:Int (lua_state:Byte Ptr, narg:Int, tname$z)               ' no 0 expected`

Generates an error with a message.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_typerror)


<br/>

### `Function luaL_unref (lua_state:Byte Ptr, t:Int, ref:Int)`

Releases reference <b>ref</b> from the table at index <b>t</b>.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_unref)


<br/>

### `Function luaL_where (lua_state:Byte Ptr, lvl:Int)`

Pushes onto the stack a string identifying the current position of the control at level <b>lvl</b> in the call stack.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_where)


<br/>

### `Function luaL_addchar (B:Byte Ptr, c:String)`

Adds the character c to the buffer B. (see luaL_Buffer).


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_addchar)


<br/>

### `Function luaL_argcheck (lua_state:Byte Ptr, cond:Int, narg:Int, extramsg:String)`

Checks whether <b>cond</b> is [True](../../brl/brl.blitz/#true).


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_argcheck)


<br/>

### `Function luaL_checkint:Int (lua_state:Byte Ptr, narg:Int)`

Checks whether the function argument narg is a number and returns this number cast to an [Int](../../brl/brl.blitz/#int).


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_checkint)


<br/>

### `Function luaL_checklong:Long (lua_state:Byte Ptr, narg:Int)`

Checks whether the function argument <b>narg</b> is a number and returns this number cast to a [Long](../../brl/brl.blitz/#long).


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_checklong)


<br/>

### `Function luaL_checkstring:String (lua_state:Byte Ptr, narg:Int)`

Checks whether the function argument <b>narg</b> is a string and returns this string.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_checkstring)


<br/>

### `Function luaL_dofile:Int (lua_state:Byte Ptr, filename:String)`

Loads and runs the given file.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_dofile)


<br/>

### `Function luaL_dostring:Int (lua_state:Byte Ptr, str:String)`

Loads and runs the given string.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_dostring)


<br/>

### `Function luaL_getmetatable (lua_state:Byte Ptr, tname:String)`

Pushes onto the stack the metatable associated with name <b>tname</b> in the registry (see [luaL_newmetatable](../../pub/pub.lua/#function-lualnewmetatableint-luastatebyte-ptr-tnamez-no-0-expected)).


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_getmetatable)


<br/>

### `Function luaL_optint:Int (lua_state:Byte Ptr, narg:Int, d:Int)`

If the function argument <b>narg</b> is a number, returns this number cast to an [Int](../../brl/brl.blitz/#int).


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_optint)


<br/>

### `Function luaL_optlong:Long (lua_state:Byte Ptr, narg:Int, d:Long)`

If the function argument <b>narg</b> is a number, returns this number cast to a [Long](../../brl/brl.blitz/#long).


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_optlong)


<br/>

### `Function luaL_optstring:String (lua_state:Byte Ptr, narg:Int, d:String)`

If the function argument <b>narg</b> is a [String](../../brl/brl.blitz/#string), returns this [String](../../brl/brl.blitz/#string).


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_optstring)


<br/>

### `Function luaL_typename:String (lua_state:Byte Ptr, idx:Int)`

Returns the name of the type of the value at the given index.


See [Lua Reference Manual](https://www.lua.org/manual/5.1/manual.html#luaL_typename)


<br/>

