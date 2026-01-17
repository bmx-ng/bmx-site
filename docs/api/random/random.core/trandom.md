---
id: trandom
title: TRandom
sidebar_label: TRandom
---

Random number generator



By creating multiple TRandom objects, multiple independent
random number generators can be used in parallel.


## Methods

### `Method RndFloat:Float() Abstract`

Generate random float

#### Returns
A random float in the range 0 (inclusive) to 1 (exclusive)


<br/>

### `Method RndDouble:Double() Abstract`

Generate random double

#### Returns
A random double in the range 0 (inclusive) to 1 (exclusive)


<br/>

### `Method Rnd:Double(minValue:Double = 1, maxValue:Double = 0) Abstract`

Generate random double


The optional parameters allow you to use Rnd in 3 ways:

<table><tr><td> <b>Format</b></td><td><b>Result</b></td></tr><tr><td>  `Rnd()`</td><td>Random double in the range 0 (inclusive) to 1 (exclusive)</td></tr><tr><td>  `Rnd(x)`</td><td>Random double in the range 0 (inclusive) to n (exclusive)</td></tr><tr><td>  `Rnd(x,y)`</td><td>Random double in the range x (inclusive) to y (exclusive)</td></tr></table>



#### Returns
A random double in the range min (inclusive) to max (exclusive)


<br/>

### `Method Rand:Int(minValue:Int, maxValue:Int = 1) Abstract`

Generate random integer


The optional parameter allows you to use [Rand](../../../random/random.core/trandom/#method-randintminvalueint-maxvalueint-1-abstract) in 2 ways:

<table><tr><td> <b>Format</b></td><td><b>Result</b></td></tr><tr><td>  `Rand(x)`</td><td>Random integer in the range 1 to x (inclusive)</td></tr><tr><td>  `Rand(x,y)`</td><td>Random integer in the range x to y (inclusive)</td></tr></table>



#### Returns
A random integer in the range min (inclusive) to max (inclusive)


<br/>

### `Method SeedRnd(seed:Int) Abstract`

Set random number generator seed

<br/>

### `Method RndSeed:Int() Abstract`

Get random number generator seed

Used in conjunction with SeedRnd, RndSeed allows you to reproduce sequences of random
numbers.


#### Returns
The current random number generator seed


<br/>

### `Method GetName:String() Abstract`

Gets the name of this random number generator

<br/>

