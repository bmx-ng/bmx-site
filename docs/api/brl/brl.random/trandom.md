---
id: trandom
title: TRandom
sidebar_label: TRandom
---

Random number generator



By creating multiple TRandom objects, multiple independent
random number generators can be used in parallel.


## Constructors

### `Method New()`

Create a new random number generator

<br/>

### `Method New(seed:Int)`

Create a new random number generator with the specified seed

<br/>

## Methods

### `Method RndFloat:Float()`

Generate random float

#### Returns
A random float in the range 0 (inclusive) to 1 (exclusive)


#### Example
```blitzmax
' RndFloat.bmx
' Two players take turns shooting at a target. The first hit wins.
' Player 1 hits 30% of the time, player 2 hits 40%.
' What is the probability that player 1 wins?

SuperStrict

Function winner:Int()   ' play game once, return winner 1 or 2
    Repeat
        If RndFloat() < 0.3 Then Return 1
        If RndFloat() < 0.4 Then Return 2
    Forever
End Function

Local count:Int[3]

Local trials:Int = 1000000

For Local n:Int = 1 To trials
    count[ winner() ] :+ 1
Next

Print "Estimated probability = " + ( Float( count[1] ) / Float( trials ) )
Print
Print "    Exact probability = " + ( 15.0 / 29.0 )
```
<br/>

### `Method RndDouble:Double()`

Generate random double

#### Returns
A random double in the range 0 (inclusive) to 1 (exclusive)


#### Example
```blitzmax
' RndDouble.bmx
' Two players take turns shooting at a target. The first hit wins.
' Player 1 hits 30% of the time, player 2 hits 40%.
' What is the probability that player 1 wins?

SuperStrict

Function winner:Int()   ' play game once, return winner 1 or 2
    Repeat
        If RndDouble() < 0.3 Then Return 1
        If RndDouble() < 0.4 Then Return 2
    Forever
End Function

Local count:Int[3]

Local trials:Int = 1000000

For Local n:Int = 1 To trials
    count[ winner() ] :+ 1
Next

Print "Estimated probability = " + ( Double( count[1] ) / Double( trials ) )
Print
Print "    Exact probability = " + ( 15.0 / 29.0 )
```
<br/>

### `Method Rnd:Double(minValue:Double = 1, maxValue:Double = 0)`

Generate random double


The optional parameters allow you to use Rnd in 3 ways:

<table><tr><td> <b>Format</b></td><td><b>Result</b></td></tr><tr><td>  &Rnd()</td><td>Random double in the range 0 (inclusive) to 1 (exclusive)</td></tr><tr><td>  &Rnd(_x_)</td><td>Random double in the range 0 (inclusive) to n (exclusive)</td></tr><tr><td>  &Rnd(_x,y_)</td><td>Random double in the range x (inclusive) to y (exclusive)</table>



#### Returns
A random double in the range min (inclusive) to max (exclusive)


#### Example
```blitzmax
' Rnd.bmx
' Use Rnd() to estimate area inside the unit circle x^2 + y^2 = 1.

SuperStrict

Local totalpoints:Int = 1000000
Local inpoints:Int

For Local n:Int = 1 To totalpoints
    Local x:Double = Rnd( -1.0, 1.0 )               ' Generate random point in 2 by 2 square.
    Local y:Double = Rnd( -1.0, 1.0 )

    If x*x + y*y < 1.0 Then inpoints :+ 1     ' point is inside the circle
Next

' Note: Ratio of areas circle/square is exactly Pi/4.

Print "Estimated area = " + ( 4.0 * Double(inpoints)/Double(totalpoints) )
Print
Print "    Exact area = " + Pi     '  4 * Pi/4, compare with estimate
```
<br/>

### `Method Rand:Int(minValue:Int, maxValue:Int = 1)`

Generate random integer


The optional parameter allows you to use [Rand](../../../brl/brl.random/trandom/#method-rand-intminvalue-int-maxvalue-int-1) in 2 ways:

<table><tr><td> <b>Format</b></td><td><b>Result</b></td></tr><tr><td>  &Rand(x)</td><td>Random integer in the range 1 to x (inclusive)</td></tr><tr><td>  &Rand(x,y)</td><td>Random integer in the range x to y (inclusive)</table>



#### Returns
A random integer in the range min (inclusive) to max (inclusive)


#### Example
```blitzmax
' Rand.bmx
' Toss a pair of dice. Result is in the range 1+1 to 6+6.
' Count how many times each result appears.

SuperStrict

Local count:Int[13]

For Local n:Int = 1 To 3600
    Local toss:Int = Rand(1,6) + Rand(1,6)
    count[toss] :+ 1
Next

For Local toss:Int = 2 To 12
    Print LSet(toss, 5)+count[toss]
Next
```
<br/>

### `Method SeedRnd(seed:Int)`

Set random number generator seed

#### Example
```blitzmax
' RndSeed.bmx and SeedRnd.bmx ( one example for both )
' Get/Set random number seed.

SuperStrict

SeedRnd MilliSecs()

Local seed:Int = RndSeed()

Print "Initial seed="+seed

For Local k:Int = 1 To 10
Print Rand(10)
Next

Print "Restoring seed"

SeedRnd seed

For Local k:Int = 1 To 10
Print Rand(10)
Next
```
<br/>

### `Method RndSeed:Int()`

Get random number generator seed

Used in conjunction with SeedRnd, RndSeed allows you to reproduce sequences of random
numbers.


#### Returns
The current random number generator seed


#### Example
```blitzmax
' RndSeed.bmx and SeedRnd.bmx ( one example for both )
' Get/Set random number seed.

SuperStrict

SeedRnd MilliSecs()

local seed:int = RndSeed()

Print "Initial seed="+seed

For local k:int = 1 To 10
	Print Rand(10)
Next

Print "Restoring seed"

SeedRnd seed

For local k:int = 1 To 10
	Print Rand(10)
Next
```
<br/>

