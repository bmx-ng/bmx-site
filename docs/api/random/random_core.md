---
id: random.core
title: Random.Core
sidebar_label: Introduction
---


## Introduction to Random Numbers

Random numbers are values generated in such a way that they appear unpredictable and evenly
distributed within a given range. They are widely used in games, simulations, procedural generation,
testing, and anywhere variation or chance is required.

On computers, random numbers are usually pseudo-random rather than truly random. This means they
are produced by deterministic algorithms called random number generators (RNGs). Given the same
starting state (called a seed), a pseudo-random generator will always produce the same sequence of
values. This property is extremely useful for debugging, testing, and reproducing procedural content.


## Random Number Generation in BlitzMax

BlitzMax provides a flexible random number system built around the Random.Core module. At
its core is the abstract base class TRandom, which defines a common interface for all random number generators.

Concrete implementations of TRandom are provided by separate modules, such as BRL.Random,
which contains the original BlitzMax random number generator. Other modules may provide
alternative generators with different statistical properties or performance characteristics.

## Global and Instance-Based Generators

BlitzMax supports two complementary ways of working with random numbers:

1. Global random generator
2. Explicit random generator instances

### Global Random Generator
When you import a random module, it typically registers a generator and makes it available globally.
If multiple random modules are imported, the last imported module becomes the default global generator.

The global generator is used by the standard random functions:

 * RndFloat()
 * RndDouble()
 * Rnd()
 * Rand()
 * SeedRnd()
 * RndSeed()

This allows most programs to use random numbers without needing to manage generator objects explicitly.

The active global generator can be queried or changed at runtime using:

 * GetRandomName() – returns the name of the current generator
 * GetRandomNames() – returns a list of all available generators
 * SetRandom(name) – selects a generator by name as the global default

If a generator name cannot be found, the currently active generator remains unchanged.

### Generator Instances
In addition to the global generator, you can create independent instances of random number generators using CreateRandom().

This is useful when:

 * You need multiple independent random streams
 * You want deterministic behavior isolated from global state
 * You want to compare or switch between different RNG implementations

Instances can be created with or without an explicit seed, and optionally by specifying
the generator name. If no name is given, the currently active global generator type is used.


## Seeding and Reproducibility

Seeding controls the initial state of a random number generator.

 * SeedRnd(seed) sets the seed of the global generator
 * RndSeed() retrieves the current seed

Using the same seed will always produce the same sequence of random values, making it
possible to reproduce results exactly. This is especially important for procedural generation, demos, and debugging.

## Types
| Type | Description |
|---|---|
| [TRandom](../../random/random.core/trandom) | Random number generator |

## Functions

### `Function SetRandom(name:String)`

Sets the current random number generator to <b>name</b>.

If no generator called <b>name</b> is found, the current random number generator remains active.


<br/>

### `Function GetRandomName:String()`

Gets the name of the current random number generator.

#### Returns
The name of the current random number generator, or [Null](../../brl/brl.blitz/#null) if none is set.


<br/>

### `Function GetRandomNames:String[]()`

Gets the names of available random number generators.

<br/>

### `Function CreateRandom:TRandom(name:String = Null)`

Creates a new TRandom instance.

<br/>

### `Function CreateRandom:TRandom(seed:Int, name:String = Null)`

Creates a new TRandom instance with the given <b>seed</b>.

<br/>

### `Function RndFloat:Float()`

Generate random float

#### Returns
A random float in the range 0 (inclusive) to 1 (exclusive)


<br/>

### `Function RndDouble:Double()`

Generate random double

#### Returns
A random double in the range 0 (inclusive) to 1 (exclusive)


<br/>

### `Function Rnd:Double(minValue:Double = 1, maxValue:Double = 0)`

Generate random double


The optional parameters allow you to use Rnd in 3 ways:

<table><tr><td> <b>Format</b></td><td><b>Result</b></td></tr><tr><td>  `Rnd()`</td><td>Random double in the range 0 (inclusive) to 1 (exclusive)</td></tr><tr><td>  `Rnd(x)`</td><td>Random double in the range 0 (inclusive) to n (exclusive)</td></tr><tr><td>  `Rnd(x,y)`</td><td>Random double in the range x (inclusive) to y (exclusive)</td></tr></table>



#### Returns
A random double in the range min (inclusive) to max (exclusive)


<br/>

### `Function Rand:Int(minValue:Int, maxValue:Int = 1)`

Generate random integer


The optional parameter allows you to use [Rand](../../random/random.core/trandom/#method-randintminvalueint-maxvalueint-1-abstract) in 2 ways:

<table><tr><td> <b>Format</b></td><td><b>Result</b></td></tr><tr><td>  `Rand(x)`</td><td>Random integer in the range 1 to x (inclusive)</td></tr><tr><td>  `Rand(x,y)`</td><td>Random integer in the range x to y (inclusive)</td></tr></table>



#### Returns
A random integer in the range min (inclusive) to max (inclusive)


<br/>

### `Function SeedRnd(seed:Int)`

Set random number generator seed

<br/>

### `Function RndSeed:Int()`

Get random number generator seed

Used in conjunction with SeedRnd, RndSeed allows you to reproduce sequences of random
numbers.


#### Returns
The current random number generator seed


<br/>

