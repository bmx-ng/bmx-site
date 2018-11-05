---
id: tmutex
title: TMutex
sidebar_label: TMutex
---


## Methods

### `Method Close()`

Close the mutex


### `Method Lock()`

Lock the mutex


### `Method TryLock:Int()`

Try to lock the mutex

#### Returns
[True](../../../brl/brl.blitz/#true) if mutex was successfully locked; [False](../../../brl/brl.blitz/#false) if mutex was already locked by another thread.



### `Method Unlock()`

Unlock the mutex


## Functions

### `Function Create:TMutex()`

Create a new mutex


