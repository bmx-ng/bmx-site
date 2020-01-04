---
id: brl.math
title: BRL.Math
sidebar_label: BRL.Math
---


## Functions

### `Function IsNan( x:Double )`

Check if a value is NAN

#### Returns
True if <b>x</b> is 'not a number' (eg: Sqr(-1))


#### Example 1
```blitzmax
SuperStrict

For Local f:Float=-0.4 Until 0.4 Step 0.2
    If IsNan(Sqr(f)) = True Then
       Print "Square Root of "+f+" is not a real number"
    Else
       Print "Square Root of  "+f+" = "+Sqr(f)
    EndIf
Next

' ===================
' Output
' Square Root of -0.400000006 is not a real number
' Square Root of -0.200000003 is not a real number
' Square Root of  0.000000000 = 0.00000000000000000
' Square Root of  0.200000003 = 0.44721359883195888
```
#### Example 2
```blitzmax
SuperStrict

For Local f:Float = - 0.4 Until 0.4 Step 0.2
	If IsInf(Log(f) ) Then
		Print "Log(" + f + ")=Infinity "+Log(f)
	Else If IsNan(Log(f) ) Then
		Print "Log(" + f + ") is not a real number "+Log(f)
	Else
		Print "Log(" + f + ")=" + Log(f) 
   End If
Next

' ===================
' Output
' Log(-0.400000006) is not a real number -1.#IND000000000000
' Log(-0.200000003) is not a real number -1.#IND000000000000
' Log(0.000000000)=Infinity -1.#INF000000000000
' Log(0.200000003)=-1.6094378975329393
```
<br/>

### `Function IsInf( x:Double )`

Check if a value is infinite (eg: 1.0/0.0)

#### Returns
True if <b>x</b> is infinite


#### Example 1
```blitzmax
SuperStrict

For Local f:Float=-0.4 Until 0.4 Step 0.2
    If IsInf(1.0 / f) = True Then
       Print "Divide by Zero"
    Else
       Print "inverse of "+f+" = "+String(1.0/f)
    EndIf
Next

' ===================
' Output
' inverse of -0.400000006 = -2.50000000
' inverse of -0.200000003 = -5.00000000
' Divide by Zero
' inverse of 0.200000003 = 5.00000000
```
#### Example 2
```blitzmax
SuperStrict

For Local f:Float = - 0.4 Until 0.4 Step 0.2
	If IsInf(Log(f) ) Then
		Print "Log(" + f + ")=Infinity "+Log(f)
	Else If IsNan(Log(f) ) Then
		Print "Log(" + f + ") is not a real number "+Log(f)
	Else
		Print "Log(" + f + ")=" + Log(f) 
   End If
Next

' ===================
' Output
' Log(-0.400000006) is not a real number -1.#IND000000000000
' Log(-0.200000003) is not a real number -1.#IND000000000000
' Log(0.000000000)=Infinity -1.#INF000000000000
' Log(0.200000003)=-1.6094378975329393
```
<br/>

### `Function Sqr:Double( x:Double )`

Square root of <b>x</b>

#### Example
```blitzmax
'IsNan (Not a Number)
SuperStrict

For Local f:Float=-0.4 Until 0.4 Step 0.2
    If IsNan(Sqr(f)) = True Then
       Print "Square Root of "+f+" is not a real number"
    Else
       Print "Square Root of  "+f+" = "+Sqr(f)
    EndIf
Next

' ===================
' Output
' Square Root of -0.400000006 is not a real number
' Square Root of -0.200000003 is not a real number
' Square Root of  0.000000000 = 0.00000000000000000
' Square Root of  0.200000003 = 0.44721359883195888
```
<br/>

### `Function Sin:Double( x:Double )`

Sine of <b>x</b> degrees

#### Example 1
```blitzmax
Rem
Sin:Double( x:Double )
End Rem

SuperStrict

For Local d:Int = 0 To 360 Step 45
	Print "Sin("+d+")="+Sin(d)
Next
```
#### Example 2
```blitzmax
SuperStrict

Graphics 640,480

SetColor 128,128,128
DrawRect 0,240,360,1

SetColor 0,255,255

For Local t:Int=0 To 359
	Plot t,Float(240+Sin(t)*80)
Next

Flip

Repeat
	WaitKey()
Until KeyDown(KEY_ESCAPE)
```
#### Example 3
```blitzmax
SuperStrict

Graphics 640,480

Local radius:Int=80

SetColor 0,255,255

For Local t:Int=0 To 359 Step 4
	Plot Float(320+Sin(t)*radius), Float(240+Cos(t)*radius)
Next

Flip

Repeat
	WaitKey()
Until KeyDown(KEY_ESCAPE)
```
<br/>

### `Function Cos:Double( x:Double )`

Cosine of <b>x</b> degrees

#### Example 1
```blitzmax
Rem
Cosine of x
End Rem

SuperStrict

For Local d:Int = 0 To 360 Step 45
	Print "Cos("+d+")="+Cos(d)
Next
```
#### Example 2
```blitzmax
SuperStrict

Graphics 640,480

SetColor 128,128,128
DrawRect 0,240,360,1

SetColor 0,255,255

For Local t:Int=0 To 359
	Plot t,Float(240+Cos(t)*80)
Next

Flip

Repeat
	WaitKey()
Until KeyDown(KEY_ESCAPE)
```
#### Example 3
```blitzmax
'
' How to draw a 'dotted' flower using Sin/Cos
'
SuperStrict

Graphics 640,480

Local radius:Int

SetColor 0,255,255

For Local t:Int=0 To 359 Step 4
	radius=Sin(t*8)*40+80
	Plot Float(320+Sin(t)*radius), Float(240+Cos(t)*radius)
Next

Flip

Repeat
	WaitKey()
Until KeyDown(KEY_ESCAPE)
```
<br/>

### `Function Tan:Double( x:Double )`

Tangent of <b>x</b> degrees

#### Example
```blitzmax
Rem
Tangent of x degrees
End Rem

SuperStrict

For Local d:Int = 0 To 360 Step 45
	Print "Tan("+d+")="+Float(Tan(d))
Next
```
<br/>

### `Function ASin:Double( x:Double )`

Inverse Sine of <b>x</b>

#### Example
```blitzmax
Rem
Inverse Sine of x
End Rem

SuperStrict

For Local d:Double = -1.0 To 1.0 Step 0.125
	Print "ASin("+d+")="+ASin(d)
Next
```
<br/>

### `Function ACos:Double( x:Double )`

Inverse Cosine of <b>x</b>

#### Example
```blitzmax
Rem
Inverse Cosine of x
End Rem

SuperStrict

For Local d:Double = -1.0 To 1.0 Step 0.125
	Print "ACos("+d+")="+ACos(d)
Next
```
<br/>

### `Function ATan:Double( x:Double )`

Inverse Tangent of <b>x</b>

#### Example
```blitzmax
Rem
ATan returns the Inverse Tangent of x
End Rem

SuperStrict

For Local d:Double = -1.0 To 1.0 Step 0.125
	Print "ATan("+d+")="+ATan(d)
Next
```
<br/>

### `Function ATan2:Double( y:Double,x:Double )`

Inverse Tangent of two variables <b>x</b> , <b>y</b>

#### Example 1
```blitzmax
Rem
ATan2 returns the Inverse Tangent of two variables
End Rem

SuperStrict

Function Angle:Double(x0:Double,y0:Double,x1:Double,y1:Double)
	Return ATan2(y1-y0,x1-x0)
End Function

Graphics 640,480
While Not KeyHit(KEY_ESCAPE)
	Cls
	Local x:Float = MouseX()
	Local y:Float = MouseY()
	DrawLine 320,240,x,y
	DrawText "Angle="+Angle(320,240,x,y),20,20
	Flip
Wend
```
#### Example 2
```blitzmax
'
' ATan2
'
' returns the angle in degrees between two points by giving the width and height between then.
'
SuperStrict

Print ATan2(4,4)
'4^|    / (45 degrees)
'  |   / 
'  |  /
'  | /
'  |/
'  +-----
'       4>
```
<br/>

### `Function Sinh:Double( x:Double )`

Hyperbolic sine of <b>x</b>

#### Example
```blitzmax
'
' Sinh Hyperbolic Sine
'
SuperStrict

Graphics 640,480

For Local t:Float=-7To 7 Step .1
	Plot 100+t*10,Float(240+Sinh(t))
Next

Flip

Repeat Until KeyDown(KEY_ESCAPE) Or AppTerminate()
```
<br/>

### `Function Cosh:Double( x:Double )`

Hyperbolic cosine of <b>x</b>

#### Example
```blitzmax
'
' Cosh Hyperbolic Cosine
'
SuperStrict

Graphics 640,480

For Local t:Float = - 7To 7 Step .1
	SetColor 255,0,0 'red cosh
	Plot 100 + t * 10 , Float(240 + Cosh(t))
	SetColor 0,255,255 
	Plot 200 + t * 10 , Float(240 + Sinh(t))
Next

Flip

Repeat Until KeyDown(KEY_ESCAPE) Or AppTerminate()
```
<br/>

### `Function Tanh:Double( x:Double )`

Hyperbolic tangent of <b>x</b>

#### Example
```blitzmax
'
' Tanh Hyperbolic Cosine
'
SuperStrict

Graphics 640,480

For Local t:Float = -.2 To .2 Step .001
	SetColor 255,0,0 'red cosh
	Plot 100 + t * 500 , Float(240 + Tanh(t)*500)
Print t*500+":"+Tanh(t)*500
Next

Flip

Repeat Until KeyDown(KEY_ESCAPE) Or AppTerminate()
```
<br/>

### `Function Exp:Double( x:Double )`

Exponential function

#### Example
```blitzmax
'
' Exponential
'
SuperStrict

Graphics 640,480

For Local t:Float = - 7 To 7 Step .1
	Plot 100 + t * 10 , Float(240 - Exp(t))
	Print Exp(t)
Next

Flip

Repeat Until KeyDown(KEY_ESCAPE) Or AppTerminate()
```
<br/>

### `Function Log:Double( x:Double )`

Natural logarithm

#### Example
```blitzmax
Rem
Log(n#) returns the natural logarithm of n
End Rem

SuperStrict

For n:Float = 1 To 20
	Print "Log("+n+")="+Log(n)
Next
```
<br/>

### `Function Log10:Double( x:Double )`

Base 10 logarithm

#### Example
```blitzmax
Rem
Log10(n#) returns the Base 10 logarithm of n
End Rem

SuperStrict

For Local n:Float = 0 To 100 Step 10
	Print "Log10("+n+")="+Log10(n)
Next
```
<br/>

### `Function Ceil:Double( x:Double )`

Smallest integral value not less than <b>x</b>

#### Example 1
```blitzmax
Rem
Ceil(x#) returns the smallest integral value not less than x
End Rem

SuperStrict

For Local i:Float = -1 To 1 Step .2
	Print "Ceil("+i+")="+Ceil(i)
Next
```
#### Example 2
```blitzmax
SuperStrict

Graphics 640,480

Local x:Int,y:Int
Local mx:Int,my:Int

HideMouse
Repeat
	mx=MouseX()
	my=MouseY()
	
	Cls
	' draw grid
	SetColor 90,90,90
	For y=0 Until 480 Step 20
		For x=0 Until 640 Step 20
			Plot x,y
		Next
	Next
	
	'draw mouse mx,my
	SetColor 255,255,255
	DrawRect mx-1,my-1,3,3
	
	' draw ceiled and floored mouse mx,my
	SetColor 255,255,0
	DrawRect Float(Ceil( mx/20.0)*20-1),Float(Ceil(my/20.0)*20-1),3,3
	
	SetColor 0,255,255
	DrawRect Float(Floor(mx/20.0)*20-1),Float(Floor( my/20.0)*20-1),3,3
	
	Flip
	
Until KeyDown(KEY_ESCAPE)
```
<br/>

### `Function Floor:Double( x:Double )`

Largest integral value not greater than <b>x</b>

#### Example 1
```blitzmax
Rem
Floor(x!) returns the largest integral value not greater than x
End Rem

SuperStrict

For Local i:Double = -1 To 1 Step .2
	Print "Floor("+i+")="+Floor(i)
Next
```
#### Example 2
```blitzmax
SuperStrict

Graphics 640,480

Local x:Int,y:Int
Local mx:Int,my:Int

HideMouse
Repeat
	mx=MouseX()
	my=MouseY()
	
	Cls
	' draw grid
	SetColor 90,90,90
	For y=0 Until 480 Step 20
		For x=0 Until 640 Step 20
			Plot x,y
		Next
	Next
	
	'draw mouse mx,my
	SetColor 255,255,255
	DrawRect mx-1,my-1,3,3
	
	' draw ceiled and floored mouse mx,my
	SetColor 255,255,0
	DrawRect Float(Ceil( mx/20.0)*20-1),Float(Ceil(my/20.0)*20-1),3,3
	
	SetColor 0,255,255
	DrawRect Float(Floor(mx/20.0)*20-1),Float(Floor( my/20.0)*20-1),3,3
	
	Flip
	
Until KeyDown(KEY_ESCAPE)
```
<br/>

### `Function Round:Double( x:Double )`

Nearest integral value to <b>x</b>.

#### Example
```blitzmax
Rem
Nearest integral value to x
End Rem
SuperStrict

Framework brl.standardio
Import brl.math

Print "Round(+2.3) = " + Round(2.3)
Print "Round(+2.5) = " + Round(2.5)
Print "Round(+2.7) = " + round(2.7)
Print ""

Print "Round(-2.3) = " + Round(-2.3)
Print "Round(-2.5) = " + Round(-2.5)
Print "Round(-2.7) = " + Round(-2.7)

Print "Round(-0.0) = " + Round(-0.0)
```
<br/>

### `Function Trunc:Double( x:Double )`

Nearest integral not greater in magnitude than <b>x</b>.

#### Example
```blitzmax
Rem
Nearest integral not greater in magnitude than x
End Rem
SuperStrict

Framework brl.standardio
Import brl.math

Print "Trunc(+2.7) = " + Trunc(2.7)
Print "Trunc(-2.7) = " + Trunc(-2.7)
Print "Trunc(-0.0) = " + Trunc(-0.0)
```
<br/>

### `Function SqrF:Float( x:Float )`

Square root of <b>x</b>

<br/>

### `Function SinF:Float( x:Float )`

Sine of <b>x</b> degrees

<br/>

### `Function CosF:Float( x:Float )`

Cosine of <b>x</b> degrees

<br/>

### `Function TanF:Float( x:Float )`

Tangent of <b>x</b> degrees

<br/>

### `Function ASinF:Float( x:Float )`

Inverse Sine of <b>x</b>

<br/>

### `Function ACosF:Float( x:Float )`

Inverse Cosine of <b>x</b>

<br/>

### `Function ATanF:Float( x:Float )`

Inverse Tangent of <b>x</b>

<br/>

### `Function ATan2F:Float( y:Float,x:Float )`

Inverse Tangent of two variables <b>x</b> , <b>y</b>

<br/>

### `Function SinhF:Float( x:Float )`

Hyperbolic sine of <b>x</b>

<br/>

### `Function CoshF:Float( x:Float )`

Hyperbolic cosine of <b>x</b>

<br/>

### `Function TanhF:Float( x:Float )`

Hyperbolic tangent of <b>x</b>

<br/>

### `Function ExpF:Float( x:Float )`

Exponential function

<br/>

### `Function LogF:Float( x:Float )`

Natural logarithm

<br/>

### `Function Log10F:Float( x:Float )`

Base 10 logarithm

<br/>

### `Function CeilF:Float( x:Float )`

Smallest integral value not less than <b>x</b>

<br/>

### `Function FloorF:Float( x:Float )`

Largest integral value not greater than <b>x</b>

<br/>

### `Function RoundF:Float( x:Float )`

Nearest integral value to <b>x</b>.

<br/>

### `Function TruncF:Float( x:Float )`

Nearest integral not greater in magnitude than <b>x</b>.

<br/>

