---
id: brl.random
title: BRL.Random
sidebar_label: BRL.Random
---


<h1>Random numbers</h1>

The random module contains commands for generating random numbers.

The numbers generated are not really random, as without special hardware support a software algorithm cannot produce 'real' random numbers.

Instead, the algorithm produces values that merely appear to be random. In reality, each generated value actually depends on the previously generated value.

You can set the 'state' of the random number generator using the [SeedRnd](../../brl/brl.random/#function-seedrnd-seed-int) command. A common practice is to seed the random number generator with the system time when your program starts up, for example:
```
SeedRnd MilliSecs()
````

This ensures that the random number generator does not start in the same state each time your program is run, which would cause it to produce the same sequence of random numbers.


## Functions

### `Function RndFloat#()`

Generate random float

#### Returns
A random float in the range 0 (inclusive) to 1 (exclusive)


#### Example
```blitzmax
' RndFloat.bmx
' Two players take turns shooting at a target. The first hit wins.
' Player 1 hits 30% of the time, player 2 hits 40%.
' What is the probability that player 1 wins?

Function winner()   ' play game once, return winner 1 or 2
    Repeat
        If RndFloat() < 0.3 Then Return 1
        If RndFloat() < 0.4 Then Return 2
    Forever
End Function

Local count[3]

trials = 1000000

For n = 1 to trials
    count[ winner() ] :+ 1
Next

Print "Estimated probability = " + ( Float( count[1] ) / Float( trials ) )
Print
Print "    Exact probability = " + ( 15.0 / 29.0 )

Input ; End
```

### `Function RndDouble!()`

Generate random double

#### Returns
A random double in the range 0 (inclusive) to 1 (exclusive)


#### Example
```blitzmax
' RndDouble.bmx
' Two players take turns shooting at a target. The first hit wins.
' Player 1 hits 30% of the time, player 2 hits 40%.
' What is the probability that player 1 wins?

Function winner()   ' play game once, return winner 1 or 2
    Repeat
        If RndDouble() < 0.3 Then Return 1
        If RndDouble() < 0.4 Then Return 2
    Forever
End Function

Local count[3]

trials = 1000000

For n = 1 to trials
    count[ winner() ] :+ 1
Next

Print "Estimated probability = " + ( Double( count[1] ) / Double( trials ) )
Print
Print "    Exact probability = " + ( 15.0 / 29.0 )

Input ; End
```

### `Function Rnd!( min_value!=1,max_value!=0 )`

Generate random double


The optional parameters allow you to use Rnd in 3 ways:

<table><tr><td> <b>Format</b></td><td><b>Result</b></td></tr><tr><td>  &Rnd()</td><td>Random double in the range 0 (inclusive) to 1 (exclusive)</td></tr><tr><td>  &Rnd(_x_)</td><td>Random double in the range 0 (inclusive) to n (exclusive)</td></tr><tr><td>  &Rnd(_x,y_)</td><td>Random double in the range x (inclusive) to y (exclusive)</table>



#### Returns
A random double in the range min (inclusive) to max (exclusive)


#### Example
```blitzmax
' Rnd.bmx
' Use Rnd() to estimate area inside the unit circle x^2 + y^2 = 1.

totalpoints = 1000000

For n = 1 to totalpoints
    x! = Rnd( -1.0, 1.0 )               ' Generate random point in 2 by 2 square.
    y! = Rnd( -1.0, 1.0 )

    If x*x + y*y < 1.0 Then inpoints :+ 1     ' point is inside the circle
Next

' Note: Ratio of areas circle/square is exactly Pi/4.

Print "Estimated area = " + ( 4.0 * Double(inpoints)/Double(totalpoints) )
Print
Print "    Exact area = " + Pi     '  4 * Pi/4, compare with estimate

Input ; End
```

### `Function Rand:Int( min_value:Int,max_value:Int=1 )`

Generate random integer


The optional parameter allows you to use [Rand](../../brl/brl.random/#function-rand-int-min-value-int-max-value-int-1) in 2 ways:

<table><tr><td> <b>Format</b></td><td><b>Result</b></td></tr><tr><td>  &Rand(x)</td><td>Random integer in the range 1 to x (inclusive)</td></tr><tr><td>  &Rand(x,y)</td><td>Random integer in the range x to y (inclusive)</table>



#### Returns
A random integer in the range min (inclusive) to max (inclusive)


#### Example
```blitzmax
' Rand.bmx
' Toss a pair of dice. Result is in the range 1+1 to 6+6.
' Count how many times each result appears.

Local count[13]

For n = 1 To 3600
    toss = Rand(1,6) + Rand(1,6)
    count[toss] :+ 1
Next

For toss = 2 To 12
    Print LSet(toss, 5)+count[toss]
Next
```

### `Function SeedRnd( seed:Int )`

Set random number generator seed

#### Example
```blitzmax
' RndSeed.bmx and SeedRnd.bmx ( one example for both )
' Get/Set random number seed.

SeedRnd MilliSecs()

seed=RndSeed()

Print "Initial seed="+seed

For k=1 To 10
Print Rand(10)
Next

Print "Restoring seed"

SeedRnd seed

For k=1 To 10
Print Rand(10)
Next
```

### `Function RndSeed:Int()`

Get random number generator seed

Use in conjunction with SeedRnd, RndSeed allows you to reproduce sequences of random
numbers.


#### Returns
The current random number generator seed


#### Example
```blitzmax
' RndSeed.bmx and SeedRnd.bmx ( one example for both )
' Get/Set random number seed.

SeedRnd MilliSecs()

seed=RndSeed()

Print "Initial seed="+seed

For k=1 To 10
Print Rand(10)
Next

Print "Restoring seed"

SeedRnd seed

For k=1 To 10
Print Rand(10)
Next
```

