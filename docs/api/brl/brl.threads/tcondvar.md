---
id: tcondvar
title: TCondVar
sidebar_label: TCondVar
---

CondVar type


## Methods

### `Method Close()`

Close the condvar

<br/>

### `Method Wait( mutex:TMutex )`

Wait for the condvar

<br/>

### `Method TimedWait:Int( mutex:TMutex, millis:Int )`

Wait for the condvar

<br/>

### `Method Signal()`

Signal the condvar

<br/>

### `Method Broadcast()`

Broadcast the condvar

<br/>

## Functions

### `Function Create:TCondVar()`

Create a new condvar

<br/>

