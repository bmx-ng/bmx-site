---
id: pub.lua
title: Pub.Lua
sidebar_label: Pub.Lua
---


<div style="text-align: justify;">"<span style="font-style: italic;">Lua is an extension programming
language designed to support general procedural programming with data
description facilities. It also offers good support for object-oriented
programming, functional programming, and data-driven programming. Lua
is intended to be used as a powerful, light-weight scripting language
for any program that needs one.</span> " (from "<a href="../lua-5.1.4/doc/contents.html">Lua 5.1 Reference
Manual</a>" by Roberto Ierusalimschy, Luiz Henrique de
Figueiredo, Waldemar Celes)<br><br>This module provides a
BlitzMax interface to the Lua main and auxiliary APIs. It is almost
complete, the only functions missing are those with variable argument
lists (which are not yet supported by BlitzMax).<br><br>The
axe.lua package also contains the full Lua 5.1.4 distribution. The Lua
source code is completely integrated into the module, additional DLLs
(or shared libraries, resp.) are no longer required.<br><h2>Lua
Documentation</h2>The Lua Reference Manual is part of this
distribution and may be directly visited from here:<br><ul><li><a href="../lua-5.1.4/doc/contents.html">Lua 5.1 Contents</a></li><li><a href="../lua-5.1.4/doc/manual.html">Lua 5.1 Reference Manual</a></li><li><a href="../lua-5.1.4/doc/readme.html">Lua 5.1 ReadMe</a></li></ul>Additional
information can be found on the <a href="http://www.lua.org">Lua
web site</a>; the <a href="http://lua-users.org/wiki/">Lua
wiki</a> contains further material <a href="http://lua-users.org/wiki/BlitzMax">about this module</a>
and related packages.<br><h2>Introduction</h2>The
following description is not meant as a tutorial, but may still help
you to start Lua programming within BlitzMax. More API-related
information can be found in the <a href="../lua-5.1.4/doc/manual.html#3">Lua Reference manual</a><br><h3>Setting
up a Lua VM</h3>Running&nbsp;Lua scripts always require the
instantiation of at least one Lua VM:<br><pre> local LuaState:byte ptr = luaL_newstate()</pre>The
result of this instantiation is a pointer to a structure
which&nbsp;contains the full state of the new VM and has to be
passed as the first argument to almost any other Lua API function.<br><br>It
is now time to "open" the intrinsic Lua libraries (note: these
libraries are part of axe.lua now, external DLLs or shared libraries
are not necessary):<br><pre> luaL_openlibs(LuaState)</pre>Always
initialize the Lua VM by opening its libraries unless you really know
what you are doing!<br><br>Usually, creating a single Lua
state is sufficient, even further (Lua) threads share the basic Lua
state (and its associated environment).<br><h3>Shutting
down a Lua VM</h3>At the end, it's always a good idea to shut
down the Lua VM<br><pre> lua_close(LuaState)</pre>The
Lua interpreter has now been terminated and its state variable is no
longer valid.<br><h3>Accessing Lua Globals</h3>The
code<br><pre>&nbsp; lua_pushstring(LuaState, "BMXString")<br>  lua_setglobal (LuaState, "luaglobal")</pre>defines
a global Lua variable (called&nbsp;<span style="font-family: Courier New,Courier,monospace;">luaglobal</span>)
which contains a string (namely "<span style="font-family: Courier New,Courier,monospace;">BMXString</span>").<h3>Registering
BlitzMax Functions</h3>In order to access BlitzMax features from
within a Lua script, it is necessary to implement suitable BlitzMax
functions and register them in the Lua VM.<br><br>Such
BlitzMax functions typically look as follows:<br><pre> function BMXName:int (LuaState:Byte Ptr)<br>   ...      ' handling of parameters passed from Lua (if required)<br>     ...    ' actual function body<br>   ...      ' passing results back to Lua (if required)<br>   return 0 ' number of values returned to Lua<br> end function</pre>Such
a function is then registered using<br><pre> lua_register(LuaState, "luaname", BMXName)</pre>This
command registers a BlitzMax function (called&nbsp;<span style="font-family: Courier New,Courier,monospace;">BMXName</span>)
with the (global) name&nbsp;<span style="font-family: Courier New,Courier,monospace;">luaname</span>
under Lua. Both names may be equal, but they do not have to.<br><h3>Running
Lua Scripts From Within BlitzMax</h3>The code<br><pre> local Result:int = luaL_loadString(LuaState,LuaScript)<br> if (Result &lt;&gt; 0) then<br>   ' ERROR!!!<br>   lua_close(LuaState) ' just to be complete<br>   end<br> end if</pre>loads
and compiles a (BlitzMax) string containing a LuaScript. The result (of
compilation) is left on the (Lua) stack.<br><pre> lua_getfield(LuaState, LUA_GLOBALSINDEX, "debug")' get global "debug"<br> lua_getfield(LuaState, -1, "traceback")       ' get "debug.traceback"<br> lua_remove (LuaState, -2)           ' remove "debug" table from stack<br><br> Result = lua_pcall(LuaState,1,-1,-1)' use "debug.traceback" as err.hdlr<br> if (Result &lt;&gt; 0) then<br>   ' ERROR<br>   lua_close(LuaState) ' just to be complete<br>   end<br> end if</pre>actually
evaluates the previously loaded script. The initially mentioned Lua
commands just prepare for proper error messages should the Lua script
fail.</div>

## Functions

### `Function lua_atpanic:Byte Ptr (lua_state:Byte Ptr, panicf:Int(ls:Byte Ptr))`

see <a href="../lua-5.1.4/doc/manual.html#lua_atpanic">Lua Reference Manual</a>


### `Function lua_call (lua_state:Byte Ptr, nargs:Int, nresults:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_call">Lua Reference Manual</a>


### `Function lua_checkstack:Int (lua_state:Byte Ptr, extra:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_checkstack">Lua Reference Manual</a>


### `Function lua_close (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_close">Lua Reference Manual</a>


### `Function lua_concat (lua_state:Byte Ptr, n:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_concat">Lua Reference Manual</a>


### `Function lua_cpcall:Int (lua_state:Byte Ptr, func:Int(ls:Byte Ptr), ud:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_cpcall">Lua Reference Manual</a>


### `Function lua_createtable (lua_state:Byte Ptr, narr:Int, nrec:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_createtable">Lua Reference Manual</a>


### `Function lua_equal:Int (lua_state:Byte Ptr, index1:Int, index2:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_equal">Lua Reference Manual</a>


### `Function lua_error:Int (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_error">Lua Reference Manual</a>


### `Function lua_gc:Int (lua_state:Byte Ptr, what:Int, data:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_gc">Lua Reference Manual</a>


### `Function lua_getallocf:Byte Ptr (lua_state:Byte Ptr, ud:Byte Ptr Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_getallocf">Lua Reference Manual</a>


### `Function lua_getfenv (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_getfenv">Lua Reference Manual</a>


### `Function lua_getfield (lua_state:Byte Ptr, index:Int, k$z)              ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#lua_getfield">Lua Reference Manual</a>


### `Function lua_gethook:Byte Ptr (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_gethook">Lua Reference Manual</a>


### `Function lua_gethookcount:Int (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_gethookcount">Lua Reference Manual</a>


### `Function lua_gethookmask:Int (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_gethookmask">Lua Reference Manual</a>


### `Function lua_getinfo:Int (lua_state:Byte Ptr, what$z, ar:lua_Debug Ptr)    ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#lua_getinfo">Lua Reference Manual</a>


### `Function lua_getlocal$z (lua_state:Byte Ptr, ar:lua_Debug Ptr, n:Int)     ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#lua_getlocal">Lua Reference Manual</a>


### `Function lua_getmetatable:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_getmetatable">Lua Reference Manual</a>


### `Function lua_getstack:Int (lua_state:Byte Ptr, level:Int, ar:lua_Debug Ptr) ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#lua_getstack">Lua Reference Manual</a>


### `Function lua_gettable (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_gettable">Lua Reference Manual</a>


### `Function lua_gettop:Int (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_gettop">Lua Reference Manual</a>


### `Function lua_getupvalue$z (lua_state:Byte Ptr, funcindex:Int, n:Int)        ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#lua_getupvalue">Lua Reference Manual</a>


### `Function lua_insert (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_insert">Lua Reference Manual</a>


### `Function lua_iscfunction:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_iscfunction">Lua Reference Manual</a>


### `Function lua_isnumber:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_isnumber">Lua Reference Manual</a>


### `Function lua_isstring:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_isstring">Lua Reference Manual</a>


### `Function lua_isuserdata:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_isuserdata">Lua Reference Manual</a>


### `Function lua_lessthan:Int (lua_state:Byte Ptr, index1:Int, index2:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_lessthan">Lua Reference Manual</a>


### `Function lua_newthread:Byte Ptr (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_newthread">Lua Reference Manual</a>


### `Function lua_next:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_next">Lua Reference Manual</a>


### `Function lua_pcall:Int (lua_state:Byte Ptr, nargs:Int, nresults:Int, errfunc:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_pcall">Lua Reference Manual</a>


### `Function lua_pushboolean (lua_state:Byte Ptr, b:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_pushboolean">Lua Reference Manual</a>


### `Function lua_pushcclosure (lua_state:Byte Ptr, fn:Int(ls:Byte Ptr), n:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_pushcclosure">Lua Reference Manual</a>


### `Function lua_pushinteger (lua_state:Byte Ptr, n:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_pushinteger">Lua Reference Manual</a>


### `Function lua_pushlightuserdata (lua_state:Byte Ptr, p:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_pushlightuserdata">Lua Reference Manual</a>


### `Function lua_pushnil (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_pushnil">Lua Reference Manual</a>


### `Function lua_pushnumber (lua_state:Byte Ptr, n:Double)`

see <a href="../lua-5.1.4/doc/manual.html#lua_pushnumber">Lua Reference Manual</a>


### `Function lua_pushstring (lua_state:Byte Ptr, s$z)                         ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#lua_pushstring">Lua Reference Manual</a>


### `Function lua_pushthread:Int (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_pushthread">Lua Reference Manual</a>


### `Function lua_pushvalue (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_pushvalue">Lua Reference Manual</a>


### `Function lua_rawequal:Int (lua_state:Byte Ptr, index1:Int, index2:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_rawequal">Lua Reference Manual</a>


### `Function lua_rawget (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_rawget">Lua Reference Manual</a>


### `Function lua_rawgeti (lua_state:Byte Ptr, index:Int, n:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_rawgeti">Lua Reference Manual</a>


### `Function lua_rawset (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_rawset">Lua Reference Manual</a>


### `Function lua_rawseti (lua_state:Byte Ptr, index:Int, n:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_rawseti">Lua Reference Manual</a>


### `Function lua_remove (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_remove">Lua Reference Manual</a>


### `Function lua_replace (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_replace">Lua Reference Manual</a>


### `Function lua_resume:Int (lua_state:Byte Ptr, narg:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_resume">Lua Reference Manual</a>


### `Function lua_setfenv:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_setfenv">Lua Reference Manual</a>


### `Function lua_setfield (lua_state:Byte Ptr, index:Int, k$z)              ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#lua_setfield">Lua Reference Manual</a>


### `Function lua_sethook:Int (lua_state:Byte Ptr, f(ls:Byte Ptr,ar:lua_Debug Ptr), mask:Int, count:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_sethook">Lua Reference Manual</a>


### `Function lua_setlocal$z (lua_state:Byte Ptr, ar:lua_Debug Ptr, n:Int)     ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#lua_setlocal">Lua Reference Manual</a>


### `Function lua_setmetatable:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_setmetatable">Lua Reference Manual</a>


### `Function lua_settable (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_settable">Lua Reference Manual</a>


### `Function lua_settop (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_settop">Lua Reference Manual</a>


### `Function lua_setupvalue$z (lua_state:Byte Ptr, funcindex:Int, n:Int)        ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#lua_setupvalue">Lua Reference Manual</a>


### `Function lua_status:Int (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_status">Lua Reference Manual</a>


### `Function lua_toboolean:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_toboolean">Lua Reference Manual</a>


### `Function lua_tocfunction:Byte Ptr (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_tocfunction">Lua Reference Manual</a>


### `Function lua_tointeger:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_tointeger">Lua Reference Manual</a>


### `Function lua_tolstring:Byte Ptr (lua_state:Byte Ptr, index:Int, size:Size_T Ptr) ' without any conversion!`

see <a href="../lua-5.1.4/doc/manual.html#lua_tolstring">Lua Reference Manual</a>


### `Function lua_tonumber:Double (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_tonumber">Lua Reference Manual</a>


### `Function lua_topointer:Byte Ptr (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_topointer">Lua Reference Manual</a>


### `Function lua_tothread:Byte Ptr (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_tothread">Lua Reference Manual</a>


### `Function lua_touserdata:Byte Ptr (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_touserdata">Lua Reference Manual</a>


### `Function lua_type:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_type">Lua Reference Manual</a>


### `Function lua_typename$z (lua_state:Byte Ptr, tp:Int)                      ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#lua_typename">Lua Reference Manual</a>


### `Function lua_xmove                (fromState:Byte Ptr, toState:Byte Ptr, n:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_xmove">Lua Reference Manual</a>


### `Function lua_yield:Int (lua_state:Byte Ptr, nresults:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_yield">Lua Reference Manual</a>


### `Function lua_getglobal (lua_state:Byte Ptr, name:String)`

see <a href="../lua-5.1.4/doc/manual.html#lua_getglobal">Lua Reference Manual</a>


### `Function lua_isboolean:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_isboolean">Lua Reference Manual</a>


### `Function lua_isfunction:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_isfunction">Lua Reference Manual</a>


### `Function lua_islightuserdata:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_islightuserdata">Lua Reference Manual</a>


### `Function lua_isnil:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_isnil">Lua Reference Manual</a>


### `Function lua_isnone:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_isnone">Lua Reference Manual</a>


### `Function lua_isnoneornil:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_isnoneornil">Lua Reference Manual</a>


### `Function lua_istable:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_istable">Lua Reference Manual</a>


### `Function lua_isthread:Int (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_isthread">Lua Reference Manual</a>


### `Function lua_newtable (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#lua_newtable">Lua Reference Manual</a>


### `Function lua_pop (lua_state:Byte Ptr, n:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_pop">Lua Reference Manual</a>


### `Function lua_pushcfunction (lua_state:Byte Ptr, fn:Int(ls:Byte Ptr))`

see <a href="../lua-5.1.4/doc/manual.html#lua_pushcfunction">Lua Reference Manual</a>


### `Function lua_register (lua_state:Byte Ptr, name:String, f:Int(ls:Byte Ptr))`

see <a href="../lua-5.1.4/doc/manual.html#lua_register">Lua Reference Manual</a>


### `Function lua_setglobal (lua_state:Byte Ptr, name:String)`

see <a href="../lua-5.1.4/doc/manual.html#lua_setglobal">Lua Reference Manual</a>


### `Function lua_tostring:String (lua_state:Byte Ptr, index:Int)`

see <a href="../lua-5.1.4/doc/manual.html#lua_tostring">Lua Reference Manual</a>


### `Function luaL_addlstring (B:Byte Ptr, s:Byte Ptr, l:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_addlstring">Lua Reference Manual</a>


### `Function luaL_addsize (B:Byte Ptr, size:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_addsize">Lua Reference Manual</a>


### `Function luaL_addstring (B:Byte Ptr, s$z)                                 ' no 0 allowed!`

see <a href="../lua-5.1.4/doc/manual.html#luaL_addstring">Lua Reference Manual</a>


### `Function luaL_addvalue (B:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_addvalue">Lua Reference Manual</a>


### `Function luaL_argerror:Int (lua_state:Byte Ptr, narg:Int, extramsg$z)     ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#luaL_argerror">Lua Reference Manual</a>


### `Function luaL_buffinit (lua_state:Byte Ptr, B:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_buffinit">Lua Reference Manual</a>


### `Function luaL_callmeta:Int (lua_state:Byte Ptr, obj:Int, e$z)             ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#luaL_callmeta">Lua Reference Manual</a>


### `Function luaL_checkany (lua_state:Byte Ptr, narg:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_checkany">Lua Reference Manual</a>


### `Function luaL_checkinteger:Int (lua_state:Byte Ptr, narg:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_checkinteger">Lua Reference Manual</a>


### `Function luaL_checklstring:Byte Ptr (lua_state:Byte Ptr, narg:Int, size:Int Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_checklstring">Lua Reference Manual</a>


### `Function luaL_checknumber:Double (lua_state:Byte Ptr, narg:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_checknumber">Lua Reference Manual</a>


### `Function luaL_checkstack (lua_state:Byte Ptr, sz:Int, msg$z)                     ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#luaL_checkstack">Lua Reference Manual</a>


### `Function luaL_checktype (lua_state:Byte Ptr, narg:Int, t:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_checktype">Lua Reference Manual</a>


### `Function luaL_checkudata:Byte Ptr (lua_state:Byte Ptr, narg:Int, tname$z)        ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#luaL_checkudata">Lua Reference Manual</a>


### `Function luaL_getmetafield:Int (lua_state:Byte Ptr, obj:Int, e$z)                ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#luaL_getmetafield">Lua Reference Manual</a>


### `Function luaL_gsub$z (lua_state:Byte Ptr, s$z, p$z, r$z)                         ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#luaL_gsub">Lua Reference Manual</a>


### `Function luaL_loadbuffer:Int (lua_state:Byte Ptr, buff:Byte Ptr, sz:Int, name$z) ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#luaL_loadbuffer">Lua Reference Manual</a>


### `Function luaL_loadfile:Int (lua_state:Byte Ptr, filename$z)                      ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#luaL_loadfile">Lua Reference Manual</a>


### `Function luaL_loadstring:Int (lua_state:Byte Ptr, s$z)                           ' no 0 allowed!`

see <a href="../lua-5.1.4/doc/manual.html#luaL_loadstring">Lua Reference Manual</a>


### `Function luaL_newmetatable:Int (lua_state:Byte Ptr, tname$z)                     ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#luaL_newmetatable">Lua Reference Manual</a>


### `Function luaL_newstate:Byte Ptr ()`

see <a href="../lua-5.1.4/doc/manual.html#luaL_newstate">Lua Reference Manual</a>


### `Function luaL_openlibs (lua_state:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_openlibs">Lua Reference Manual</a>


### `Function luaL_optinteger:Int (lua_state:Byte Ptr, narg:Int, d:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_optinteger">Lua Reference Manual</a>


### `Function luaL_optlstring:Byte Ptr (lua_state:Byte Ptr, narg:Int, d$z, size:Int Ptr) ' no 0 expected in "d"`

see <a href="../lua-5.1.4/doc/manual.html#luaL_optlstring">Lua Reference Manual</a>


### `Function luaL_optnumber:Double (lua_state:Byte Ptr, narg:Int, d:Double)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_optnumber">Lua Reference Manual</a>


### `Function luaL_prepbuffer:Byte Ptr (B:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_prepbuffer">Lua Reference Manual</a>


### `Function luaL_pushresult (B:Byte Ptr)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_pushresult">Lua Reference Manual</a>


### `Function luaL_ref:Int (lua_state:Byte Ptr, t:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_ref">Lua Reference Manual</a>


### `Function luaL_register (lua_state:Byte Ptr, libname$z, l:lua_Reg Ptr)            ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#luaL_register">Lua Reference Manual</a>


### `Function luaL_typerror:Int (lua_state:Byte Ptr, narg:Int, tname$z)               ' no 0 expected`

see <a href="../lua-5.1.4/doc/manual.html#luaL_typerror">Lua Reference Manual</a>


### `Function luaL_unref (lua_state:Byte Ptr, t:Int, ref:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_unref">Lua Reference Manual</a>


### `Function luaL_where (lua_state:Byte Ptr, lvl:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_where">Lua Reference Manual</a>


### `Function luaL_addchar (B:Byte Ptr, c:String)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_addchar">Lua Reference Manual</a>


### `Function luaL_argcheck (lua_state:Byte Ptr, cond:Int, narg:Int, extramsg:String)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_argcheck">Lua Reference Manual</a>


### `Function luaL_checkint:Int (lua_state:Byte Ptr, narg:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_checkint">Lua Reference Manual</a>


### `Function luaL_checklong:Long (lua_state:Byte Ptr, narg:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_checklong">Lua Reference Manual</a>


### `Function luaL_checkstring:String (lua_state:Byte Ptr, narg:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_checkstring">Lua Reference Manual</a>


### `Function luaL_dofile:Int (lua_state:Byte Ptr, filename:String)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_dofile">Lua Reference Manual</a>


### `Function luaL_dostring:Int (lua_state:Byte Ptr, str:String)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_dostring">Lua Reference Manual</a>


### `Function luaL_getmetatable (lua_state:Byte Ptr, tname:String)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_getmetatable">Lua Reference Manual</a>


### `Function luaL_optint:Int (lua_state:Byte Ptr, narg:Int, d:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_optint">Lua Reference Manual</a>


### `Function luaL_optlong:Long (lua_state:Byte Ptr, narg:Int, d:Long)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_optlong">Lua Reference Manual</a>


### `Function luaL_optstring:String (lua_state:Byte Ptr, narg:Int, d:String)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_optstring">Lua Reference Manual</a>


### `Function luaL_typename:String (lua_state:Byte Ptr, idx:Int)`

see <a href="../lua-5.1.4/doc/manual.html#luaL_typename">Lua Reference Manual</a>


