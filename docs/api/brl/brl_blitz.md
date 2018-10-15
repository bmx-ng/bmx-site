---
id: brl.blitz
title: BRL.Blitz
sidebar_label: BRL.Blitz
---


The Blitz runtime module provides low level functionality required by  BlitzMax applications when they are running. This includes things like memory management, exception handling and string and array operations.<br>
<br>
Much of the functionality provided by this module is hidden from application programmers, but is instead used 'behind the scenes' by the compiler. However, there are some very useful commands for debugging, memory management and simple standard IO.


## Types
| Type | Description |
|---|---|
| [TBlitzException](../../brl/brl.blitz/tblitzexception) | Exception |
| [TNullObjectException](../../brl/brl.blitz/tnullobjectexception) | Null object exception |
| [TNullMethodException](../../brl/brl.blitz/tnullmethodexception) | Null method exception |
| [TNullFunctionException](../../brl/brl.blitz/tnullfunctionexception) | Null function exception |
| [TArrayBoundsException](../../brl/brl.blitz/tarrayboundsexception) | Null method exception |
| [TOutOfDataException](../../brl/brl.blitz/toutofdataexception) | Out of data exception |
| [TRuntimeException](../../brl/brl.blitz/truntimeexception) | Runtime exception |

## Functions

### `Function RuntimeError( message$ )`

Generate a runtime error

Throws a [TRuntimeException](../../brl/brl.blitz/truntimeexception).


#### Example
```blitzmax
' runtimeerror.bmx

If a=0 RuntimeError "This program has failed badly."
```

### `Function DebugStop()`

Stop program execution and enter debugger

If there is no debugger present, this command is ignored.



### `Function DebugLog( message$ )`

Write a string to debug log

If there is no debugger present, this command is ignored.



### `Function OnEnd( fun() )`

Add a function to be called when the program ends

[OnEnd](../../brl/brl.blitz/#function-onend-fun) allows you to specify a function to be called when the program ends. OnEnd functions are called
in the reverse order to that in which they were added.


#### Example
```blitzmax
' onend.bmx

Function cleanup()
Print "cleaning up"
End Function

OnEnd cleanup
Print "program running"
End	'the cleanup function will be called at this time
```

### `Function ReadStdin$()`

Read a string from stdin

#### Returns
A string read from stdin. The newline terminator, if any, is included in the returned string.



### `Function WriteStdout( str$ )`

Write a string to stdout

Writes <b>str</b> to stdout and flushes stdout.



### `Function WriteStderr( str$ )`

Write a string to stderr

Writes <b>str</b> to stderr and flushes stderr.



### `Function Delay( millis:Int )`

Wait for a given number of milliseconds


[Delay](../../brl/brl.blitz/#function-delay-millis-int) suspends program execution for at least <b>millis</b> milliseconds.<br>
<br>
A millisecond is one thousandth of a second.



### `Function MilliSecs:Int()`

Get millisecond counter


[MilliSecs](../../brl/brl.blitz/#function-millisecs-int) returns the number of milliseconds elapsed since the computer
was turned on.<br>
<br>
A millisecond is one thousandth of a second.


#### Returns
Milliseconds since computer turned on.



### `Function MemAlloc:Byte Ptr( size:Size_T )`

Allocate memory

#### Returns
A new block of memory <b>size</b> bytes long



### `Function MemFree( mem:Byte Ptr )`

Free allocated memory

The memory specified by <b>mem</b> must have been previously allocated by [MemAlloc](../../brl/brl.blitz/#function-memalloc-byte-ptr-size-size-t) or [MemExtend](../../brl/brl.blitz/#function-memextend-byte-ptr-mem-byte-ptr-size-size-t-new-size-size-t).



### `Function MemExtend:Byte Ptr( mem:Byte Ptr,size:Size_T,new_size:Size_T )`

Extend a block of memory

An existing block of memory specified by <b>mem</b> and <b>size</b> is copied into a new block
of memory <b>new_size</b> bytes long. The existing block is released and the new block is returned.


#### Returns
A new block of memory <b>new_size</b> bytes long



### `Function MemClear( mem:Byte Ptr,size:Size_T )`

Clear a block of memory to 0


### `Function MemCopy( dst:Byte Ptr,src:Byte Ptr,size:Size_T )`

Copy a non-overlapping block of memory


### `Function MemMove( dst:Byte Ptr,src:Byte Ptr,size:Size_T )`

Copy a potentially overlapping block of memory


### `Function GCSetMode( Mode:Int )`

Set garbage collector mode


<b>mode</b> can be one of the following:<br>
1 : automatic GC - memory will be automatically garbage collected<br>
2 : manual GC - no memory will be collected until a call to GCCollect is made<br>
<br>
The default GC mode is automatic GC.



### `Function GCSuspend()`

Suspend garbage collector


[GCSuspend](../../brl/brl.blitz/#function-gcsuspend) temporarily suspends the garbage collector. No garbage
collection will be performed following a call to [GCSuspend](../../brl/brl.blitz/#function-gcsuspend).<br>
<br>
Use [GCResume](../../brl/brl.blitz/#function-gcresume) to resume the garbage collector. Note that [GCSuspend](../../brl/brl.blitz/#function-gcsuspend)
and [GCResume](../../brl/brl.blitz/#function-gcresume) 'nest', meaning that each call to [GCSuspend](../../brl/brl.blitz/#function-gcsuspend) must be
matched by a call to [GCResume](../../brl/brl.blitz/#function-gcresume).



### `Function GCResume()`

Resume garbage collector


[GCResume](../../brl/brl.blitz/#function-gcresume) resumes garbage collection following a call to [GCSuspend](../../brl/brl.blitz/#function-gcsuspend).<br>
<br>
See [GCSuspend](../../brl/brl.blitz/#function-gcsuspend) for more details.



### `Function GCCollect:Int()`

Run garbage collector


This function will have no effect if the garbage collector has been
suspended due to [GCSuspend](../../brl/brl.blitz/#function-gcsuspend).


#### Returns
The amount of memory, in bytes, collected.



### `Function GCCollectALittle:Int()`

Run garbage collector, collecting a little


This function will have no effect if the garbage collector has been
suspended due to [GCSuspend](../../brl/brl.blitz/#function-gcsuspend).


#### Returns
Returns 0 if there is no more to collect.



### `Function GCMemAlloced:Int()`

Memory allocated by application


This function only returns 'managed memory'. This includes all objects, strings and
arrays in use by the application.


#### Returns
The amount of memory, in bytes, currently allocated by the application



### `Function GCEnter()`

Private: do not use


### `Function GCLeave()`

Private: do not use


### `Function HandleFromObject:Size_T( obj:Object )`

Convert object to integer handle


After converting an object to an integer handle, you must later
release it using the [Release](../../brl/brl.blitz/#release) command.


#### Returns
An integer object handle



### `Function HandleToObject:Object( handle:Size_T )`

Convert integer handle to object

#### Returns
The object associated with the integer handle



### `Function ArrayCopy(src:Object, srcPos:Int, dst:Object, dstPos:Int, length:Int)`

Copies an array from the specified <b>src</b> array, starting at the position <b>srcPos</b>, to the position <b>dstPos</b> of the destination array.


## Globals

### `Global AppDir$="bbAppDir"`

Application directory

The [AppDir](../../brl/brl.blitz/#global-appdir-bbappdir) global variable contains the fully qualified directory of the currently
executing application. An application's initial current directory is also set to [AppDir](../../brl/brl.blitz/#global-appdir-bbappdir)
when an application starts.


#### Example
```blitzmax
' appdir.bmx
' requests the user to select a file from the application's directory

Print "Application Directory="+AppDir$

file$=RequestFile("Select File to Open","",False,AppDir$)

Print "file selected was :"+file
```

### `Global AppFile$="bbAppFile"`

Application file name

The [AppFile](../../brl/brl.blitz/#global-appfile-bbappfile) global variable contains the fully qualified file name of the currently
executing application.


#### Example
```blitzmax
' appfile.bmx

Print "This program's executable is located at "+AppFile$
```

### `Global AppTitle$="bbAppTitle"`

Application title

The [AppTitle](../../brl/brl.blitz/#global-apptitle-bbapptitle) global variable is used by various commands when a
default application title is required - for example, when opening simple
windows or requesters.<br>
<br>
Initially, [AppTitle](../../brl/brl.blitz/#global-apptitle-bbapptitle) is set to the value "BlitzMax Application". However, you may change
[AppTitle](../../brl/brl.blitz/#global-apptitle-bbapptitle) at any time with a simple assignment.



### `Global AppArgs$[]="bbAppArgs"`

Arguments passed to the application at startup

The [AppArgs](../../brl/brl.blitz/#global-appargs-bbappargs) global array contains the command line parameters sent to an application
when it was started. The first element of [AppArgs](../../brl/brl.blitz/#global-appargs-bbappargs) always contains the name of the
application. However, the format of the name may change depending on how the application
was launched. Use [AppDir](../../brl/brl.blitz/#global-appdir-bbappdir) or [AppFile](../../brl/brl.blitz/#global-appfile-bbappfile) for consistent information about the applications name
or directory.


#### Example
```blitzmax
' appargs.bmx
' print the command line arguments passed to the program at runtime

Print "Number of arguments = "+AppArgs.length

For a$=EachIn AppArgs
Print a$
Next
```

### `Global LaunchDir$="bbLaunchDir"`

Directory from which application was launched

The [LaunchDir](../../brl/brl.blitz/#global-launchdir-bblaunchdir) global variable contains the current directory at the time the
application was launched. This is mostly of use to command line tools which may need to
access the 'shell' current directory as opposed to the application directory.


#### Example
```blitzmax
' launchdir.bmx

Print "This program was launched from "+LaunchDir$
```

