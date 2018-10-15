---
id: tthreadpoolexecutor
title: TThreadPoolExecutor
sidebar_label: TThreadPoolExecutor
---


## Methods

### `Method execute(command:TRunnable)`

Executes the given command at some time in the future.


### `Method shutdown()`

Initiates an orderly shutdown in which previously submitted tasks are executed, but no new tasks will be accepted.


## Functions

### `Function newSingleThreadExecutor:TThreadPoolExecutor()`

Creates an executor that uses a single worker thread operating off an unbounded queue.


### `Function newFixedThreadPool:TThreadPoolExecutor(threads:Int)`

Creates a thread pool that reuses a fixed number of threads operating off a shared unbounded queue.

At any point, at most <b>threads</b> threads will be active processing tasks. If additional tasks are
submitted when all threads are active, they will wait in the queue until a thread is available.



