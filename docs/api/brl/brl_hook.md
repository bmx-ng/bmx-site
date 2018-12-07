---
id: brl.hook
title: BRL.Hook
sidebar_label: BRL.Hook
---



This module provides a generic way to hook into various BlitzMax commands, and to add support for 
hooks into your own code.

The following hook ids are currently used by BlitzMax modules:

| Hook id | Description | Data |
| --- | --- | --- |
| FlipHook | A Max2D [Flip](../../brl/brl.graphics/#function-flip-sync-1) is about to occur | Null |
| EmitEventHook | An event has been emitted by a call to [EmitEvent](../../brl/brl.event/#function-emitevent-event-tevent) | A [TEvent](../../brl/brl.event/tevent) object |

To hook into any of these functions, use [AddHook](../../brl/brl.hook/#function-addhook-id-func-object-id-data-object-context-object-context-object-null-priority-0) with the specified hook id and your hook function.

To provide hook support for your own code, use [AllocHookId](../../brl/brl.hook/#function-allochookid) to generate a valid integer hook id 
somewhere in your program's startup code. Then, when the section of code you would like to be 
'hookable' is about to execute, simply call [RunHooks](../../brl/brl.hook/#function-runhooks-object-id-data-object) with the previously generated hook id and your
own custom 'data' object. 


## Functions

### `Function AllocHookId()`

Allocate a hook id


The returned hook id can be used with [AddHook](../../brl/brl.hook/#function-addhook-id-func-object-id-data-object-context-object-context-object-null-priority-0), [RunHooks](../../brl/brl.hook/#function-runhooks-object-id-data-object) and [RemoveHook](../../brl/brl.hook/#function-removehook-id-func-object-id-data-object-context-object-context-object-null).


#### Returns
An integer hook id


#### Example
```blitzmax
SuperStrict

Global myHookID:Int=AllocHookId()

' This function will be called everytime RunHook is executed due to the AddHook action below
Function MyHook:Object( id:Int,data:Object,context:Object )
	Global count:Int
	
	count:+1
	If count Mod 10=0 Then
		Print "Flips="+count
	End If
	
End Function

'Add the MyHook function to our hook ID
AddHook myHookID,MyHook

'Some simple graphics
Graphics 640,480,0

While Not KeyHit( KEY_ESCAPE )

   Cls
   DrawText MouseX()+","+MouseY(),0,0
   RunHooks myHookID, Null
   Flip

Wend
```
<br/>

### `Function AddHook( id,func:Object( id,data:Object,context:Object ),context:Object=Null,priority=0 )`

Add a hook function


Add a hook function to be executed when [RunHooks](../../brl/brl.hook/#function-runhooks-object-id-data-object) is called with the specified hook <b>id</b>.


#### Returns
A hook object that can be used with the [RemoveHook](../../brl/brl.hook/#function-removehook-id-func-object-id-data-object-context-object-context-object-null) command.


#### Example
```blitzmax
SuperStrict

'This function will be automagically called every Flip
Function MyHook:Object( id:Int,data:Object,context:Object )
	Global count:Int
	
	count:+1
	If count Mod 10=0 Then
		Print "Flips="+count
	End If
	
End Function

'Add our hook to the system
AddHook FlipHook,MyHook

'Some simple graphics
Graphics 640,480,0

While Not KeyHit( KEY_ESCAPE )

	Cls
	DrawText MouseX()+","+MouseY(),0,0
	Flip

Wend
```
<br/>

### `Function RunHooks:Object( id,data:Object )`

Run hook functions


[RunHooks](../../brl/brl.hook/#function-runhooks-object-id-data-object) runs all hook functions that have been added for the specified hook <b>id</b>.

The first hook function is called with the provided <b>data</b> object. The object returned by
this function is then passed as the <b>data</b> parameter to the next hook function and so on.
Therefore, hook functions should generally return the <b>data</b> parameter when finished.


#### Returns
The data produced by the last hook function


<br/>

### `Function RemoveHook( id,func:Object( id,data:Object,context:Object ),context:Object=Null )`

Remove a hook function


Removes the hook function specified by <b>id</b>, <b>func</b> and <b>context</b>.


<br/>

