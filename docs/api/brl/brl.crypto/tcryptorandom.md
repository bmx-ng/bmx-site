---
id: tcryptorandom
title: TCryptoRandom
sidebar_label: TCryptoRandom
---

Generate unpredictable data, suitable for creating secret keys.



> If this is used in an application inside a VM, and the VM is snapshotted and restored, then the above functions will produce the same output.


## Functions

### `Function Random:UInt()`

Returns an unpredictable value between 0 and $ffffffff (inclusive).

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.crypto

For Local i:Int = 0 Until 10
	Print TCryptoRandom.Random()
Next
```
<br/>

### `Function Uniform:UInt(upperBound:UInt)`

Returns an unpredictable value between 0 and <b>upperBound</b> (excluded).

Unlike `Random() Mod upperBound`, it does its best to guarantee a uniform distribution of the possible
output values even when <b>upperBound</b> is not a power of 2.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.crypto

For Local i:Int = 0 Until 10
	Print TCryptoRandom.Uniform(1000)
Next
```
<br/>

### `Function FillBuffer(buf:Byte Ptr, size:Size_T)`

Fills <b>size</b> bytes starting at <b>buf</b> with an unpredictable sequence of bytes, derived from a secret seed.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.crypto

Local buf:Byte[32]

TCryptoRandom.FillBuffer(buf)

For Local i:Int = 0 Until buf.length
	Print buf[i]
Next
```
<br/>

### `Function FillBuffer(buf:Byte[])`

Fills an array of bytes with an unpredictable sequence of bytes, derived from a secret seed.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.crypto

Local buf:Byte[32]

TCryptoRandom.FillBuffer(buf)

For Local i:Int = 0 Until buf.length
	Print buf[i]
Next
```
<br/>

### `Function FillKey(key:TCryptoKey Var, bytes:Size_T = 32)`

Fills a key with an unpredictable sequence of <b>bytes</b> in length, derived from a secret seed.

<br/>

### `Function Ratchet()`

Erases part of the state and replaces the secret key, making it impossible to recover the previous states in case the current one ever gets exposed due to a vulnerability.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.crypto

For Local i:Int = 0 Until 10
	Print TCryptoRandom.Random()
Next

TCryptoRandom.Ratchet()
```
<br/>

### `Function Reseed()`

Reseeds the random number generator.

Must be called after a `fork()` call.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.crypto

For Local i:Int = 0 Until 10
	Print TCryptoRandom.Random()
Next

TCryptoRandom.Reseed()
```
<br/>

