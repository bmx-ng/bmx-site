---
id: tthread
title: TThread
sidebar_label: TThread
---

Thread type


## Methods

### `Method Detach()`

Detach this thread


### `Method Wait:Object()`

Wait for this thread to finish

#### Returns
The object returned by the thread.



### `Method Running:Int()`

Check if this thread is running


## Functions

### `Function Create:TThread( entry:Object( data:Object),data:Object )`

Create a new thread


### `Function Main:TThread()`

Get main thread

#### Returns
A thread object representing the main application thread.



### `Function Current:TThread()`

Get current thread

#### Returns
A thread object representing the current thread.



