---
id: tmutex
title: TMutex
sidebar_label: TMutex
---

Mutex type


## Methods

### `Method Close()`

Close the mutex

<br/>

### `Method Lock()`

Lock the mutex

<br/>

### `Method TryLock:Int()`

Try to lock the mutex

#### Returns
[True](../../../brl/brl.blitz/#true) if mutex was successfully locked; [False](../../../brl/brl.blitz/#false) if mutex was already locked by another thread.


<br/>

### `Method Unlock()`

Unlock the mutex

<br/>

## Functions

### `Function Create:TMutex()`

Create a new mutex

<br/>

