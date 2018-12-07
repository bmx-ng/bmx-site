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


#### Example
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
<br/>

### `Function IsInf( x:Double )`

Check if a value is infinite (eg: 1.0/0.0)

#### Returns
True if <b>x</b> is infinite


#### Example
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

#### Example
```blitzmax
Rem
Sin:Double( x:Double )
End Rem

SuperStrict

For Local d:Int = 0 To 360 Step 45
	Print "Sin("+d+")="+Sin(d)
Next
```
<br/>

### `Function Cos:Double( x:Double )`

Cosine of <b>x</b> degrees

#### Example
```blitzmax
Rem
Cosine of x
End Rem

SuperStrict

For Local d:Int = 0 To 360 Step 45
	Print "Cos("+d+")="+Cos(d)
Next
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

#### Example
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

#### Example
```blitzmax
Rem
Ceil(x#) returns the smallest integral value not less than x
End Rem

SuperStrict

For Local i:Float = -1 To 1 Step .2
	Print "Ceil("+i+")="+Ceil(i)
Next
```
<br/>

### `Function Floor:Double( x:Double )`

Largest integral value not greater than <b>x</b>

#### Example
```blitzmax
Rem
Floor(x!) returns the largest integral value not greater than x
End Rem

SuperStrict

For Local i:Double = -1 To 1 Step .2
	Print "Floor("+i+")="+Floor(i)
Next
```
<br/>

