---
id: tfuture
title: TFuture
sidebar_label: TFuture
---

A generic type for asynchronous result handling, allowing threads to wait for and retrieve results safely.


It provides a mechanism for one thread to produce a result that another thread can wait for and retrieve
at a later time. This is particularly useful for tasks that are executed in parallel, where the completion
time may vary, and the consumer needs to wait for the result before proceeding.


## Methods

### `Method GetResult:V()`

Waits for the result to become available and then returns it.

This method blocks the calling thread until result is available.


<br/>

### `Method SetResult( value:V )`

Sets the result of the asynchronous operation and signals any waiting threads.

<br/>

