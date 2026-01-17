---
id: tscheduledthreadpoolexecutor
title: TScheduledThreadPoolExecutor
sidebar_label: TScheduledThreadPoolExecutor
---

An executor that can be used to schedule commands to run after a given delay, or to execute commands periodically.


## Methods

### `Method schedule(command:TRunnable, delay_:ULong, unit:ETimeUnit = ETimeUnit.Milliseconds)`

Schedules a one-shot command to run after a given delay.

<br/>

### `Method schedule(command:TRunnable, initialDelay:ULong, period:ULong, unit:ETimeUnit = ETimeUnit.Milliseconds)`

Schedules a recurring command to run after a given initial delay, and subsequently with the given period.

<br/>

### `Method shutdown() Override`

Initiates an orderly shutdown in which previously submitted tasks are executed, but no new tasks will be accepted.

<br/>

## Functions

### `Function newSingleThreadExecutor:TScheduledThreadPoolExecutor()`

Creates an executor that uses a single worker thread operating off an unbounded queue.

<br/>

### `Function newFixedThreadPool:TScheduledThreadPoolExecutor(threads:Int)`

Creates a thread pool that reuses a fixed number of threads operating off a shared unbounded queue.

At any point, at most <b>threads</b> threads will be active processing tasks. If additional tasks are
submitted when all threads are active, they will wait in the queue until a thread is available.


<br/>

### `Function newCachedThreadPool:TScheduledThreadPoolExecutor(idleWait:Int = 60000)`

Creates a thread pool that creates new threads as needed, but will reuse previously constructed threads when they are available.

These pools will typically improve the performance of programs that execute many short-lived asynchronous tasks.
Threads that remain idle for more than the specified <b>idleWait</b> time will be terminated and removed from the pool.


<br/>

