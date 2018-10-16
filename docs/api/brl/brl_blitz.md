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

## Keywords

### `Strict`

Set strict mode


See the <a href=../../../../doc/bmxlang/compatibility.html>BlitzMax Language Reference</a> for more information on Strict mode programming.


#### Example
```blitzmax
Rem
Strict advises the BlitzMax compiler to report as errors all auto defined variables.
End Rem

Strict

local a=10

b=20	'compiler error, strict mode means variables must be declared b4 use
```

### `SuperStrict`

Set SuperStrict mode


### `End`

End program execution

#### Example
```blitzmax
Rem
The End command causes a program to exit immediately.
End Rem

Print "Hello!"
End
Print "This line will never be printed as the program has already been ended."
```

### `Rem`

Begin a remark block

#### Example
```blitzmax
Rem

My Rem Example
First created 9th August, 2004

(C)2050 Blitz Intergalactic Software Corporation

End Rem

Print "This program has no useful function"

Rem

Remarks are useful for making your program easily readable.
You can leave details explaining the function of your program
in a remarks section so that you and any other programmers
that work with your code can more easily understand the workings
of your program

End Rem

Print "Sorry."
End
```

### `EndRem`

End a remark block

#### Example
```blitzmax
Rem
All code between Rem and EndRem is ignored by the BlitzMax compiler.
Print "hello"
End Rem

Print "goodbye"
```

### `True`

Constant integer of value 1

#### Example
```blitzmax
Rem
True is a Constant Integer assigned the value 1.
End Rem

Print "True="+True

If True
	Print "This line will always be executed"
EndIf

If Not True
	Print "This line will never be executed"
EndIf
```

### `False`

Constant integer of value 0

#### Example
```blitzmax
Rem
False is a Constant Integer assigned the value 0.
End Rem

Print "False="+False

If False
	Print "This code will never be executed"
Endif
```

### `Pi`

Constant pi value: 3.1415926535897932384626433832795

#### Example
```blitzmax
Rem
Pi is a Constant Double assigned the value 3.1415926535897932384626433832795
End Rem

Print "Pi="+Pi
```

### `Null`

Get Null value (default value for types)

#### Example
```blitzmax
Rem
Null is a BlitzMax Constant representing an empty Object reference.
End Rem

Type mytype
	Field	atypevariable
End Type

Global a:mytype

if a=null Print "a is uninitialized"
a=new mytype
if a<>null Print "a is initialized"
```

### `Byte`

Unsigned 8 bit integer type

#### Example
```blitzmax
Rem
Byte is an unsigned 8 bit integer BlitzMax primitive type.
End Rem

Local a:byte

a=512;print "a="+a	'prints 0
a=-1;print "a="+a	'prints 255
```

### `Short`

Unsigned 16 bit integer type

#### Example
```blitzmax
Rem
Short is an unsigned 16 bit integer BlitzMax primitive type.
End Rem

Local a:short

a=65536;print "a="+a	'prints 0
a=-1;print "a="+a	'prints 65535
```

### `Int`

Signed 32 bit integer type

#### Example
```blitzmax
Rem
Int is a signed 32 bit integer BlitzMax primitive type.
End Rem

Local a:Int

' the following values all print 0 as BlitzMax "rounds to zero"
' when converting from floating point to integer

a=0.1;print a
a=0.9;print a
a=-0.1;print a
a=-0.9;print a
```

### `UInt`

Unsigned 32 bit integer type


### `Long`

Signed 64 bit integer type

#### Example
```blitzmax
Rem
Long is a signed 64 bit integer BlitzMax primitive type.
End Rem

Const MAXLONG:Long=$7fffffffffffffff:Long
Const MINLONG:Long=$8000000000000000:Long

Print "A long can have the maximum value of:"+MAXLONG
Print "A long can have the minimum value of:"+MINLONG
```

### `ULong`

Unsigned 64 bit integer type


### `Size_T`

Unsigned 32/64 bit integer type


### `LParam`

Signed 32/64 bit LPARAM WinAPI type

Only available on Windows.



### `WParam`

Unsigned 32/64 bit WPARAM WinAPI type

Only available on Windows.



### `Float`

32 bit floating point type

#### Example
```blitzmax
Rem
Float is a 32 bit floating point BlitzMax primitive type.
End Rem

Local a:float

a=1

for i=1 to 8
	print a
	a=a*0.1
next

for i=1 to 8
	a=a*10
	print a
next
```

### `Double`

64 bit floating point type

#### Example
```blitzmax
Rem
Double is a 64 bit floating point BlitzMax primitive type.
End Rem

Local speedoflight:Double
Local distance:Double
Local seconds:Double

speedoflight=299792458:Double	'meters per second
distance=149597890000:Double	'average distance in meters from earth sun

seconds=distance/speedoflight

Print "Number of seconds for light to travel from earth to sun="+seconds
```

### `Int128`

128 bit integer intrinsic type

Only available on x64.



### `Float64`

64 bit floating point intrinsic type

Only available on x64.



### `Float128`

128 bit floating point intrinsic type

Only available on x64.



### `Double128`

128 bit floating point intrinsic type

Only available on x64.



### `String`

String type

#### Example
```blitzmax
Rem
String is a BlitzMax container type containing a sequence of unicode characters.
End Rem

quote:String=Chr(34)
Print quote+"Hello World!"+quote
```

### `Object`

Object type

#### Example
```blitzmax
Rem
Object is the base class of all BlitzMax types.

The following function attempts to cast from any object to
the custom type TImage and returns true if the given object
is an instance of TImage or an instance of a &Type derived
from TImage.
End Rem

Function IsImage(obj:Object)
	If TImage(obj) return True
	Return False
End Function
```

### `Var`

Composite type specifier for 'by reference' types

#### Example
```blitzmax
Rem
Var is a composite type containing a reference to a variable of the 
specified Type.
End Rem

' the following illustrates parsing function parameters by reference

Function ReturnMultiplevalues(a Var,b Var,c Var)
	a=10
	b=20
	c=30
	Return
End Function

Local x,y,z

ReturnMultipleValues(x,y,z)

Print "x="+x	'10
Print "y="+y	'20
Print "z="+z	'30
```

### `Ptr`

Composite type specifier for pointer types

#### Example
```blitzmax
Rem
Ptr is a composite type containing a pointer to a variable of the specified Type.
End Rem

' the following illustrates the use of traditional c style pointers

Local c[]=[1,2,3,4]
Local p:Int Ptr

p=c
Print "pointer 'p' points to:"+p[0]	'1

p:+1
Print "pointer 'p' points to:"+p[0]	'2

p:+1
Print "pointer 'p' points to:"+p[0]	'3

p:+1
Print "pointer 'p' points to:"+p[0]	'4
```

### `If`

Begin a conditional block.

#### Example
```blitzmax
Rem
If begins a conditional block.
End Rem

If 3<5 Print "3<5"	'single line if

If 5<7				'if block
	Print "5<7"
EndIf
```

### `Then`

Optional separator between the condition and associated code in an If statement.

#### Example
```blitzmax
Rem
Then is an optional separator between the condition and the block of code following an If statement.
End Rem

If 3<5 Then Print "3<5"
```

### `Else`

Else provides the ability for an If-Then construct to execute a second block of code when the If condition is false.

#### Example
```blitzmax
Rem
Else provides the ability for an If Then construct to execute a second block of code when the If condition is false.
End Rem

i=3

If i<5 Print "i<5" Else Print "i>=5"	' single line If Else

If i<5			'block style If Else
	Print "i<5"
Else
	Print "i>=5"
EndIf
```

### `ElseIf`

ElseIf provides the ability to test and execute a section of code if the initial condition failed.

#### Example
```blitzmax
Rem
ElseIf provides the ability to test and execute a section of code if the initial condition failed.
End Rem

age=Int( Input("How old Are You?") )

If age<13
	Print "You are young"
ElseIf age<20
	Print "You are a teen!"
Else
	Print "You are neither young nor a teen"
EndIf
```

### `EndIf`

Marks the End of an If-Then construct.

#### Example
```blitzmax
Rem
EndIf marks the end of an If Then block.
End Rem

i=5

If i<10
	Print "i<10"
EndIf
```

### `For`

Marks the start of a loop that uses an iterator to execute a section of code repeatedly.

#### Example
```blitzmax
Rem
For marks the start of a loop that uses an iterator to execute a section of code repeatedly.
End Rem

' print 5 times table

For i=1 to 12
	Print "5*"+i+"="+5*i
Next
```

### `To`

Followed by a constant which is used to calculate when to exit a For..Next loop.

#### Example
```blitzmax
Rem
Followed by a constant which is used to calculate when to exit a For..Next loop.
End Rem

For i=1 To 5
	print i
Next
```

### `Step`

Specifies an optional constant that is used to increment the For iterator.

#### Example
```blitzmax
Rem
Specifies an optional constant that is used to increment the For iterator.
End Rem

' count backwards from 10 to 0

For i=10 to 0 step -1
	Print i
Next
```

### `Next`

End a For block

#### Example
```blitzmax
Rem
Marks the end of a For section.
End Rem

For i=1 to 5;print i;Next
```

### `EachIn`

Iterate through an array or collection

#### Example
```blitzmax
Rem
Specifies a BlitzMax collection type whose values are assigned sequentially to the For iterator.
End Rem

Local a[]=[0,5,12,13,20]

for b=eachin a
	print b
next
```

### `While`

Execute a block of code while a condition is true

#### Example
```blitzmax
Rem
While executes the following section of code repeatedly while a given condition is true.
End Rem

Graphics 640,480
While Not KeyHit(KEY_ESCAPE)	'loop until escape key is pressed
	Cls
	For i=1 to 200
		DrawLine rnd(640),rnd(480),rnd(640),rnd(480)
	Next
	Flip
Wend
```

### `Wend`

End a While block

#### Example
```blitzmax
Rem
Wend marks the end of a While section.
End Rem

While i<5
	print i
	i:+1
Wend
```

### `EndWhile`

End a While block


### `Repeat`

Execute a block of code until a termination condition is met, or forever

#### Example
```blitzmax
Rem
Repeat executes the following section of code until a terminating condition is true.
End Rem

Repeat
	print i
	i:+1
Until i=5
```

### `Until`

Conditionally continue a Repeat block

#### Example
```blitzmax
Rem
Until marks the end of a Repeat block and is followed by a terminating condition.
End Rem

i=2
Repeat
	print i
	i:*2
Until i>1000000
```

### `Forever`

Continue a Repeat block forever

#### Example
```blitzmax
Rem
Forever is an alternate ending to a Repeat block that will cause the loop to always repeat.
End Rem

Repeat
	Print i+" Ctrl-C to End!" 
	i:+1
Forever
```

### `Select`

Begin a Select block

#### Example
```blitzmax
Rem
Select begins a block featuring a sequence of multiple comparisons with a single value.
End Rem

a=Int( Input("Enter Your Country Code ") )

Select a
	Case 1
		Print "You are from America"
	Case 44
		Print "You are from the United Kingdom"
	Case 62
		Print "You are from Australia"
	Case 64
		Print "You are from New Zealand"
	Default
		Print "I cannot tell which country you are from"
End Select
```

### `EndSelect`

End a Select block

#### Example
```blitzmax
Rem
EndSelect marks the end of a Select block.
End Rem

SeedRnd MilliSecs()

a=Rand(5)

Select a
	Case 1 Print "one"
	Case 2 Print "two"
	Case 3 Print "three"
	Case 4 Print "four"
	Case 5 Print "five"
	Default Print "Program Error"
End Select
```

### `Case`

Conditional code inside a Select block

#### Example
```blitzmax
' case.bmx

' Case performs a comparison with the preceeding value(s) and that
' listed in the enclosing Select statement:

a=Int( Input("Enter a number between 1 and 5 ") )

Select a
	Case 1 Print "You think small"
	Case 2 Print "You are even tempered"
	Case 3,4 Print "You are middle of the road"	
	Case 5 Print "You think big"
	Default Print "You are unable to follow instructions"
End Select
```

### `Default`

Default code inside a Select block

#### Example
```blitzmax
Rem
Default is used in a Select block to mark a code section that is executed if all prior Case statements fail.
End Rem

a$=Input("What is your favorite color?")
a$=lower(a$)	'make sure the answer is lower case

Select a$
	case "yellow" Print "You a bright and breezy"
	case "blue" Print "You are a typical boy"
	case "pink" Print "You are a typical girl"
	default Print "You are quite unique!"
End Select
```

### `Exit`

Exit enclosing loop

#### Example
```blitzmax
Rem
Exit causes program flow to exit the enclosing While, Repeat or For loop.
End Rem

Repeat
	Print n
	n:+1
	If n=5 Exit
Forever
```

### `Continue`

Continue execution of enclosing loop

#### Example
```blitzmax
Rem
Continue causes program flow to return to the start of the enclosing While, Repeat or For program loop
End Rem

For i=1 To 20
	If i Mod 2 Continue
	Print i
Next
```

### `Const`

Declare a constant

#### Example
```blitzmax
Rem
Const defines the preceeding variable declaration as constant.
End Rem

Const ON=TRUE
Const OFF=FALSE

Const TWOPI#=2*PI

print TWOPI
```

### `Local`

Declare a local variable

#### Example
```blitzmax
Rem
Local defines a variable as local to the Method or Function it is defined meaning it is automatically released when the function returns.
End Rem

Function TestLocal()
	Local	a
	a=20
	print "a="+a
	Return
End Function

TestLocal
print "a="+a	'prints 0 or if in Strict mode is an error as a is only local to the TestLocal function
```

### `Global`

Declare a global variable

#### Example
```blitzmax
Rem
Global defines a variable as Global allowing it be accessed from within Methods and Functions.
End Rem

Global a=20

Function TestGlobal()
	print "a="+a
End Function

TestGlobal
print "a="+a
```

### `Field`

Declare a field variable

#### Example
```blitzmax
Rem
Field is used to declare the member variable(s) of a type.
End Rem

Type TVector
	Field	x,y,z
End Type

Local a:TVector=new TVector

a.x=10
a.y=20
a.z=30
```

### `Function`

Begin a function declaration

#### Example
```blitzmax
Rem
Function marks the beginning of a BlitzMax function declaration.

When a function does not return a value the use of brackets when
calling the function is optional.
End Rem

Function NextArg(a$)
	Local	p
	p=instr(a$,",")
	if p 
		NextArg a$[p..]
		print a$[..p-1]
	else
		print a$
	endif
End Function

NextArg("one,two,three,four")

NextArg "22,25,20"	'look ma, no brackets
```

### `EndFunction`

End a function declaration

#### Example
```blitzmax
Rem
Function marks the end of a BlitzMax function declaration.
End Rem

Function RandomName$()
	local a$[]=["Bob","Joe","Bill"]
	Return a[Rnd(Len a)]
End Function

For i=1 To 5
	Print RandomName$()
Next
```

### `Method`

Begin a method declaration

#### Example
```blitzmax
Rem
Method marks the beginning of a BlitzMax custom type member function.
End Rem

Type TPoint
	field	x,y

	Method ToString$()
		return x+","+y
	End Method
End Type

a:TPoint=new TPoint
print a.ToString()
```

### `EndMethod`

End a method declaration

#### Example
```blitzmax
Rem
EndMethod marks the end of a BlitzMax Method declaration.
End Rem

Type TPoint
	field	x,y

	Method ToString$()
		return x+","+y
	End Method
End Type

a:TPoint=new TPoint
print a.ToString()
```

### `Return`

Return from a method or function

#### Example
```blitzmax
Rem
Return exits a BlitzMax function or method with an optional value.
The type of return value is dictated by the type of the function.
End Rem

Function CrossProduct#(x0#,y0#,z0#,x1#,y1#,z1#)
	Return x0*x1+y0*y1+z0*z1
End Function

Print "(0,1,2)x(2,3,4)="+CrossProduct(0,1,2,2,3,4)

Function LongRand:long()
	Return (rand($80000000,$7fffffff) shl 32)|(rand($80000000,$7fffffff))
End Function

Print "LongRand()="+LongRand()
Print "LongRand()="+LongRand()
```

### `Type`

Begin a user defined class declaration

#### Example
```blitzmax
Rem
Type marks the beginning of a BlitzMax custom type.

Standard BlitzMax types use a preceeding "T" naming
convention to differentiate themselves from standard
BlitzMax variable names.
End Rem

Type TVector
	Field	x,y,z
End Type

Local a:TVector=new TVector

a.x=10
a.y=20
a.z=30
```

### `EndType`

End a user defined class declaration

#### Example
```blitzmax
Rem
EndType marks the end of a BlitzMax custom type.
End Rem

Type TVector
	Field	x,y,z
End Type

Local a:TVector=new TVector

a.x=10
a.y=20
a.z=30
```

### `Interface`

Begin a user defined interface declaration


### `EndInterface`

End a user defined interface declaration


### `Struct`

Begin a user defined structure declaration


### `EndStruct`

End a user defined structure declaration


### `Extends`

Specify supertype(s) of a user defined type

#### Example
```blitzmax
Rem
Extends is used in a BlitzMax Type declaration to derive the Type from a specified base class.
End Rem

Type TShape
	Field	xpos,ypos
	Method Draw() Abstract
End Type

Type TCircle extends TShape
	Field	radius
	
	Function Create:TCircle(x,y,r)
		local c:TCircle=new TCircle
		c.xpos=x;c.ypos=y;c.radius=r
		return c
	End Function
	
	Method Draw()
		DrawOval xpos,ypos,radius,radius
	End Method
End Type

Type TRect extends TShape
	Field	width,height
	
	Function Create:TRect(x,y,w,h)
		local r:TRect=new TRect
		r.xpos=x;r.ypos=y;r.width=w;r.height=h
		return r
	End Function
	
	Method Draw()
		DrawRect xpos,ypos,width,height
	End Method
End Type

local 	shapelist:TShape[4]
local	shape:TShape

shapelist[0]=TCircle.Create(200,50,50)
shapelist[1]=TRect.Create(300,50,40,40)
shapelist[2]=TCircle.Create(400,50,50)
shapelist[3]=TRect.Create(200,180,250,20)

graphics 640,480
while not keyhit(KEY_ESCAPE)
	cls
	for shape=eachin shapelist
		shape.draw
	next
	flip
wend
end
```

### `Implements`

Specify implemented interface(s) of a user defined type


### `Abstract`

Denote a class, function or method as abstract

#### Example
```blitzmax
Rem
A BlitzMax type that contains Abstract methods becomes abstract itself.
Abstract types are used to define interfaces that extending types must 
implement before they can be used to create new instances.

In the following code TShape is an abstract type in that you can not
create a TShape but anything extending a TShape must implement a Draw()
method.
End Rem

Type TShape
	Field	xpos,ypos
	Method Draw() Abstract
End Type

Type TCircle extends TShape
	Field	radius
	
	Function Create:TCircle(x,y,r)
		local c:TCircle=new TCircle
		c.xpos=x;c.ypos=y;c.radius=r
		return c
	End Function
	
	Method Draw()
		DrawOval xpos,ypos,radius,radius
	End Method
End Type

Type TRect extends TShape
	Field	width,height
	
	Function Create:TRect(x,y,w,h)
		local r:TRect=new TRect
		r.xpos=x;r.ypos=y;r.width=w;r.height=h
		return r
	End Function
	
	Method Draw()
		DrawRect xpos,ypos,width,height
	End Method
End Type

local 	shapelist:TShape[4]
local	shape:TShape

shapelist[0]=TCircle.Create(200,50,50)
shapelist[1]=TRect.Create(300,50,40,40)
shapelist[2]=TCircle.Create(400,50,50)
shapelist[3]=TRect.Create(200,180,250,20)

graphics 640,480
while not keyhit(KEY_ESCAPE)
	cls
	for shape=eachin shapelist
		shape.draw
	next
	flip
wend
end
```

### `Final`

Denote a class, function or method as final

#### Example
```blitzmax
Rem
Final stops methods from being redefined in super classes.
End Rem

Type T1
	Method ToString$() Final
		return "T1"
	end method
End Type

Type T2 extends T1
	method ToString$()	'compile time error "Final methods cannot be overridden"
		return "T2"
	end method
End Type
```

### `ReadOnly`

Denote a field as read only, where the value may only be set in its declaration or in the type constructor


### `Export`

Denote a function for export to a shared library. The generated function name will not be mangled.


### `Where`

Specify constraints on the types that can be used as arguments for a type parameter defined in a generic declaration


### `New`

Create an instance of a user defined type, or specify a custom constructor

#### Example
```blitzmax
Rem
New creates a BlitzMax variable of the Type specified.
End Rem

Type MyType
	Field	a,b,c
End Type

Local t:MyType
t=New MyType
t.a=20

print t.a

' if a new method is defined for the type it will also be called

Type MyClass
	Field	a,b,c
	Method New()
		print "Constructor invoked!"
		a=10
	End Method
End Type

Local c:MyClass
c=new MyClass
print c.a
```

### `Delete`

Specify a custom finalizer

#### Example
```blitzmax
Rem
Reserved for future expansions.
End Rem
```

### `Self`

Reference to this method's type instance

#### Example
```blitzmax
Rem
Self is used in BlitzMax Methods to reference the invoking variable.
End Rem

Type MyClass
	Global	count	
	Field	id
	
	Method new()
		id=count
		count:+1
		ClassList.AddLast(self)	'adds this new instance to a global list		
	End Method
End Type

Global ClassList:TList

classlist=new TList

local c:MyClass

c=new MyClass
c=new MyClass
c=new MyClass

for c=eachin ClassList
	print c.id
next
```

### `Super`

Reference to the super type instance

#### Example
```blitzmax
Rem
Super evaluates to Self cast to the method's immediate base class.
End Rem

Type TypeA
	Method Report()
		print "TypeA reporting"
	End Method
End Type

Type TypeB extends TypeA
	Method Report()
		Print "TypeB Reporting"
		super.Report()
	End Method
End Type

b:TypeB=new TypeB
b.Report()
```

### `Release`

Release an integer object handle

#### Example
```blitzmax
Rem
Release removes the internal reference caused by creating an integer handle to a type.
End Rem

Type MyType
	Field bigmap[1024*1024]
End Type

GCCollect
Print GCMemAlloced()

a=New MyType
GCCollect
Print GCMemAlloced()

Release a
GCCollect
Print GCMemAlloced()
```

### `Public`

Make a type, constant, global variable or function accessible from outside the current source file (default)

#### Example
```blitzmax
Rem
Public makes a variable, function or method accessible from outside the current source file (default).
End Rem

Public

Global	Score,Lives,Health

Private

Global	posx,posy,posz
```

### `Private`

Make a type, constant, global variable or function only accessible from within the current source file, or make a type member only accessible from within that type.

#### Example
```blitzmax
Rem
Private makes a variable, function or method only accessible from within the 
current source file.
End Rem

Public

Global	Score,Lives,Health

Private

Global	posx,posy,posz
```

### `Protected`

Make a type member accessible only from within that type and from its subtypes.

#### Example
```blitzmax
Rem
Protected
Protected makes a variable, function or method only accessible from within the current source file.
End Rem
```

### `Extern`

Begin an Extern section (a list of imported external declarations)

#### Example
```blitzmax
Rem
Extern marks the beginning of an external list of function declarations.
End Rem

Extern 
	Function puts( str$z )
	Function my_puts( str$z )="puts"
End Extern

puts "Using clib's put string!"
my_puts "Also using clib's put string!"
```

### `EndExtern`

End an Extern section

#### Example
```blitzmax
Rem
EndExtern marks the end of an Extern section.
End Rem

Extern 
	Function puts( str$z )
End Extern

puts "Using clib's put string!"
```

### `Module`

Declare module scope and identifier


See the <a href=../../../../doc/bmxlang/modules.html>BlitzMax Language Reference</a> for more information on BlitzMax Modules.


#### Example
```blitzmax
Rem
The Module keyword advises the BlitzMax program maker BMK to create a code 
module from the source file.
End Rem

Module PUB.Sequencer

ModuleInfo "Framework: Audio Sequencer for use with FreeAudio"
ModuleInfo "Copyright: Blitz Research Ltd"
ModuleInfo "Author: Simon Armstrong"
ModuleInfo "Version: 1.00"
```

### `ModuleInfo`

Define module properties

#### Example
```blitzmax
Rem
ModuleInfo allows properties such as Author and Copyright to be included in a module file.
End Rem

Module PUB.Sequencer

ModuleInfo "Framework: Audio Sequencer for use with FreeAudio"
ModuleInfo "Copyright: Blitz Research Ltd"
ModuleInfo "Author: Simon Armstrong"
ModuleInfo "Version: 1.00"
```

### `Incbin`

Embed a data file

#### Example
```blitzmax
Rem
IncBin embeds an external data file in a BlitzMax program that can 
then be read using the "incbin::" device name.
End Rem

' code snippet from demos/firepaint/firepaint.bmx

Incbin "stars.png"

Local stars=LoadImage( "incbin::stars.png" )
```

### `IncbinPtr`

Get start address of embedded data file

#### Example
```blitzmax
Rem
IncBinPtr returns a byte pointer to the specified embedded binary file.
End Rem

Incbin "incbinptr.bmx"

Local p:Byte Ptr=IncbinPtr("incbinptr.bmx")
Local bytes=IncbinLen("incbinptr.bmx")

Local s$=String.FromBytes(p,bytes)

Print "StringFromBytes(p,bytes)="+s$
```

### `IncbinLen`

Get length of embedded data file

#### Example
```blitzmax
Rem
IncBinLen returns the size in bytes of the specified embedded binary file.
End Rem

incbin "incbinlen.bmx"

local p:byte ptr=IncBinPtr("incbinlen.bmx")
local bytes=incbinlen("incbinlen.bmx")

local s$=StringFromBytes(p,bytes)

Print "StringFromBytes(p,bytes)="+s$
```

### `Include`

Include effectively 'inserts' the specified file into the file being compiled.


### `Framework`

Framework builds the BlitzMax application with only the module(s) specified rather than the standard set of modules.


### `Import`

Import declarations from a module or source file

#### Example
```blitzmax
Rem
:Import specifies the external BlitzMax modules and source files used by the program.
End Rem

Framework BRL.GlMax2D

Import BRL.System

Graphics 640,480,32

While Not KeyHit(KEY_ESCAPE)
	Cls
	DrawText "Minimal 2D App!",0,0
	Flip
Wend
```

### `Assert`

Throw a RuntimeError if a condition is false

#### Example
```blitzmax
Rem
Assert generates a BlitzMax runtime error if the specified condition is false.
End Rem

a=LoadImage("nonexistant image file")
Assert a,"Image Failed to Load"
```

### `Goto`

Transfer program flow to specified label

#### Example
```blitzmax
Rem
Causes program execution to jump to the label specified.
End Rem

Print "one"
Goto here
Print "two"
here
Print "three"
```

### `Try`

Begin declaration of a Try block

#### Example
```blitzmax
Rem
Begin declaration of a Try block.
End Rem

Try
	repeat
		a:+1
		print a
		if a>20 throw "chunks"
	forever
Catch a$
	print "caught exception "+a$
EndTry
```

### `Catch`

Catch an exception object in a Try block

#### Example
```blitzmax
Rem
Catch defines an exception handler following a Try..EndTry Block.
End Rem

Try
	repeat
		a:+1
		print a
		if a>20 throw "chunks"
	forever
Catch a$
	print "caught exception "+a$
EndTry
```

### `Finally`

Execute a block of code upon exiting a Try or Catch block


### `EndTry`

End declaration of a Try block

#### Example
```blitzmax
Rem
EndTry
EndTry marks the end of a Try block.
End Rem
```

### `Throw`

Throw an exception object to the enclosing Try block

#### Example
```blitzmax
Rem
Throw generates a BlitzMax exception.
End Rem

Try
	repeat
		a:+1
		print a
		if a>20 throw "chunks"
	forever
Catch a$
	print "caught exception "+a$
EndTry
```

### `DefData`

Define classic BASIC style data

#### Example
```blitzmax
' defdata.bmx

ReadData name$
ReadData age,skill

Print "name="+name+" age="+age+" skill="+skill

DefData "Simon",37,5000
```

### `ReadData`

Read classic BASIC style data


### `RestoreData`

Restore classic BASIC style data

#### Example
```blitzmax
' restoredata.bmx

For i=1 To 5
	RestoreData mydata	'reset the data pointer everly loop so we don't read past the end
	ReadData name$,age,skill
	Print "name="+name+" age="+age+" skill="+skill
Next

mydata	'program label that can be used with the RestoreData command

DefData "Simon",37,5000
```

### `And`

Conditional 'And' binary operator

#### Example
```blitzmax
Rem
And is a boolean operator that performs the AND function.
End Rem

For i=1 To 10
	If i>3 And i<6 Print "!" Else Print i
Next
```

### `Or`

Conditional 'Or' binary operator

#### Example
```blitzmax
Rem
Or is a boolean operator that performs the OR function.
End Rem

For i=1 To 5
	If i=2 Or i=4 Print "!" Else Print i
Next
```

### `Not`

Conditional 'Not' binary operator

#### Example
```blitzmax
Rem
Not is a boolean unary operator that performs the NOT function.
End Rem

Print Not 0			'prints 1 (TRUE)
Print Not 20		'prints 0 (FALSE)
```

### `Shl`

Bitwise 'Shift left' binary operator

#### Example
```blitzmax
Rem
Shl is a binary operator that performs the shift to left function.
End Rem

b=1
for i=1 to 32
	print bin(b)
	b=b shl 1
next
```

### `Shr`

Bitwise 'Shift right' binary operator

#### Example
```blitzmax
Rem
Shr is a binary operator that performs the shift to right function.
End Rem

b=-1
for i=1 to 32
	print bin(b)
	b=b shr 1
next
```

### `Sar`

Bitwise 'Shift arithmetic right' binary operator

#### Example
```blitzmax
Rem
Sar is a binary operator that performs the arithmetic shift to right function.
End Rem

b=$f0f0f0f0
for i=1 to 32
	print bin(b)
	b=b sar 1
next
```

### `Len`

Number of characters in a string or elements in an array

#### Example
```blitzmax
Rem
Len is a BlitzMax operator that returns the number of elements in a container Type.
End Rem

a$="BlitzMax Rocks"
Print Len a$	'prints 14

Local b[]
Print Len b		'prints 0

b=new Int[20]
Print Len b		'prints 20
```

### `Abs`

Numeric 'absolute value' unary operator

#### Example
```blitzmax
Rem
Abs is a mathematical operator that performs the Absolute function.
End Rem

For f#=-1 To 1 Step 0.125
	Print "Abs "+f+"="+Abs f
Next
```

### `Mod`

Numeric 'modulus' or 'remainder' binary operator

#### Example
```blitzmax
Rem
Mod is a mathematical operator that performs the Modulo function.
End Rem

For i=6 to -6 Step -1
	Print i+" Mod 3="+(i Mod 3)
Next
```

### `Sgn`

Numeric 'sign' unary operator

#### Example
```blitzmax
Rem
Sgn is a mathematical operator that returns the sign of a value.
End Rem

Print Sgn 50	'1
Print Sgn 0		'0
Print Sgn -50	'-1
```

### `Min`

Numeric 'minimum' builtin function

#### Returns
The lesser of the two numeric arguments



### `Max`

Numeric 'maximum' builtin function

#### Returns
The larger of the two numeric arguments



### `Varptr`

Find the address of a variable

#### Example
```blitzmax
Rem
Varptr returns the address of a variable in system memory.
End Rem

Local a:int
Local p:int ptr

a=20
p=varptr a
print p[0]
```

### `SizeOf`

Size, in bytes, occupied by a variable, string, array or object

#### Example
```blitzmax
Rem
SizeOf returns the number of bytes of system memory used to store the variable.
End Rem

Type MyType
	Field a,b,c
End Type

Local t:MyType
print sizeof t	'prints 12

Local f!
print sizeof f	'prints 8

Local i
print sizeof i	'prints 4

Local b:Byte
print sizeof b	'prints 1

a$="Hello World"
print sizeof a	'prints 22 (unicode characters take 2 bytes each)
```

### `Asc`

Get character value of the first character of a string

#### Example
```blitzmax
Rem
Asc returns the unicode value of the first character of a string.
End Rem

print Asc("A")	'65
Print "A"[0]	'65 - equivalent index style implementation
```

### `Chr`

Create a string of length 1 with a character code

#### Example
```blitzmax
Rem
Chr returns a String of length 1 containing the unicode character of the value.
End Rem

print Chr(65)	'A
```

