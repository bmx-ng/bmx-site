---
id: brl.platform
title: BRL.Platform
sidebar_label: BRL.Platform
---


## Functions

### `Function OSVersion:String()`

Returns a [String](../../brl/brl.blitz/#string) representation of the OS version.

On Linux, this will return something like "Ubuntu" or "Fedora".
On Windows and macOS, this will return the version number, such as "10.11"


#### Example
```blitzmax
SuperStrict

Framework BRL.StandardIO
Import BRL.Platform

Print OSVersion()
```
<br/>

### `Function LogicalProcessorCount:Int()`

Returns the number of logical processors available.

Logical processors are the number of physical processors times the number of threads that can run on each.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.platform

Print "Core count = " + LogicalProcessorCount()
```
<br/>

### `Function PhysicalProcessorCount:Int()`

Returns the number of physical processors available.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.platform

Print "Core count = " + PhysicalProcessorCount()
```
<br/>

