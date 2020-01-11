---
id: tchrono
title: TChrono
sidebar_label: TChrono
---

A high resolution timing mechanism.


## Constructors

### `Method New()`

Creates a new [TChrono](../../../brl/brl.timer/tchrono) instance.

<br/>

## Methods

### `Method Restart()`

Restarts the timing mechanism.

<br/>

### `Method GetElapsedTicks:Long()`

Returns the number of elapsed ticks since the timing mechanism was started.

<br/>

### `Method GetElapsedMilliseconds:ULong()`

Returns the number of elapsed milliseconds since the timing mechanism was started.

<br/>

### `Method Start()`

Starts the timimg mechanism.

<br/>

### `Method Stop()`

Stops the timing mechanism.

<br/>

## Functions

### `Function GetTimestamp:ULong()`

Returns the current timestamp, in ns.

<br/>

### `Function Create:TChrono(start:Int = True)`

Creates, and optionally starts an instance of [TChrono](../../../brl/brl.timer/tchrono).

<br/>

