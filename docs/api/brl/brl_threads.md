---
id: brl.threads
title: BRL.Threads
sidebar_label: Introduction to BRL.Threads
---



Welcome to the weird and wonderful world of multithreading!

Multithreading effectively allows your programs to do several things at the same time. The word 'thread' in this context means 'thread of execution' - or, the series of instructions, branches and so on executed by your program. Most programs are 'single threaded', meaning there is only one thread of execution. However, more and more programs are using multiple threads.

Multithreading used to be achieved by software trickery, which made threading useful but not really faster - there was still only one CPU pretending to do multiple things at the same time! But these days, multicore CPUs mean that threading can be used to truly do multiple things at the same time (or 'in parallel').

Creating a thread is easy - just call [CreateThread](../../brl/brl.threads/#function-createthreadtthread-entryobject-dataobject-dataobject-). You will need to provide a function for the thread to use as it's 'entry point'. Once the thread is created, this function will start executing in parallel with the code that called [CreateThread](../../brl/brl.threads/#function-createthreadtthread-entryobject-dataobject-dataobject-). When the thread function returns, that thread will be 'terminated'.

Alas, threading turns out to be rather tricky due to an issue known as 'synchronization'. Synchronization is required when you need to prevent multiple threads from modifying or accessing the same data at the same time. Synchronization usually involves a thread 'blocking'. When a thread blocks, it completely halts execution until another thread does something that causes it to 'unblock' and resume execution.

BlitzMax provides 2 primitives known as 'mutexes' and 'semaphores' to assist with synchronization:

* Mutexes provide a simple locking mechanism. Only one thread at a time can lock a mutex (using [LockMutex](../../brl/brl.threads/#function-lockmutex-mutextmutex-) or [TryLockMutex](../../brl/brl.threads/#function-trylockmutexint-mutextmutex-)), so this is an easy way to protect resources from simultaneous access. If a thread calls [LockMutex](../../brl/brl.threads/#function-lockmutex-mutextmutex-) and the mutex is already locked by another thread, the current thread will block until the other thread releases the mutex using [UnlockMutex](../../brl/brl.threads/#function-unlockmutex-mutextmutex-). So don't forget to [UnlockMutex](../../brl/brl.threads/#function-unlockmutex-mutextmutex-) a mutex after you are finished with it!

* Semaphores provide a synchronized counting mechanism, and contain an internal integer counter. There are 2 operations you can perform on a semaphore - post and wait. Posting a semaphore (using [PostSemaphore](../../brl/brl.threads/#function-postsemaphore-semaphoretsemaphore-)) causes the semaphore's internal counter to be incremented, while waiting for a semaphore (using [WaitSemaphore](../../brl/brl.threads/#function-waitsemaphore-semaphoretsemaphore-)) will cause the current thread to block until the semaphore's internal counter is greater than 0. When it is, the counter is decremented and the thread unblocks. Semaphores are very useful for producer/consumer type situations.


## Types
| Type | Description |
|---|---|
| [TThread](../../brl/brl.threads/tthread) | Thread type |
| [TThreadData](../../brl/brl.threads/tthreaddata) | ThreadData type |
| [TMutex](../../brl/brl.threads/tmutex) | Mutex type |
| [TSemaphore](../../brl/brl.threads/tsemaphore) | Semaphore type |
| [TCondVar](../../brl/brl.threads/tcondvar) | CondVar type |

## Functions

### `Function CreateThread:TThread( entry:Object( data:Object ),data:Object )`

Create a thread


Creates a thread and returns a thread object.

The value returned by the thread <b>entry</b> routine can be later retrieved using [WaitThread](../../brl/brl.threads/#function-waitthreadobject-threadtthread-).

To 'close' a thread, call either [DetachThread](../../brl/brl.threads/#function-detachthread-threadtthread-) or [WaitThread](../../brl/brl.threads/#function-waitthreadobject-threadtthread-). This isn't strictly
necessary as the thread will eventually be closed when it is garbage collected, however, it
may be a good idea if you are creating many threads very often, as some operating systems have
a limit on the number of threads that can be allocated at once.


#### Returns
A new thread object.


#### Example
```blitzmax
'Make sure to have 'Threaded build' enabled!
'
SuperStrict

'Custom print that shows which thread is doing the printing
Function MyPrint( t:String )
	If CurrentThread()=MainThread() 
		Print "Main thread: "+t
	Else
		Print "Child thread: "+t
	EndIf
End Function

'Our thread function
Function MyThread:Object( data:Object )

	'show data we were passed
	Myprint data.ToString()

	'do some work
	For Local i:Int = 1 To 1000
		MyPrint "i="+i
	Next
	
	'return a value from the thread
	Return "Data returned from child thread."
	
End Function

MyPrint "About to start child thread."

'create a thread!
Local thread:TThread=CreateThread( MyThread,"Data passed to child thread." )

'wait for thread to finish and print value returned from thread
MyPrint WaitThread( Thread ).ToString()
```
<br/>

### `Function MainThread:TThread()`

Get main thread

#### Returns
A thread object representing the main application thread.


<br/>

### `Function CurrentThread:TThread()`

Get current thread

#### Returns
A thread object representing the current thread.


<br/>

### `Function DetachThread( thread:TThread )`

Detach a thread


[DetachThread](../../brl/brl.threads/#function-detachthread-threadtthread-) closes a thread's handle, but does not halt or otherwise affect the target thread.

Once one a thread has been detached, it wil no longer be possible to use [WaitThread](../../brl/brl.threads/#function-waitthreadobject-threadtthread-) to get its return value.

This allows the thread to run without your program having to continually check whether it has completedin order to close it.


<br/>

### `Function WaitThread:Object( thread:TThread )`

Wait for a thread to finish


[WaitThread](../../brl/brl.threads/#function-waitthreadobject-threadtthread-) causes the calling thread to block until the target thread has completed execution.

If the target thread has already completed execution, [WaitThread](../../brl/brl.threads/#function-waitthreadobject-threadtthread-) returns immediately.

The returned object is the object returned by the thread's entry routine, as passed to [CreateThread](../../brl/brl.threads/#function-createthreadtthread-entryobject-dataobject-dataobject-).


#### Returns
The object returned by the thread entry routine.


<br/>

### `Function ThreadRunning:Int( thread:TThread )`

Check if a thread is running

#### Returns
[True](../../brl/brl.blitz/#true) if <b>thread</b> is still running, otherwise [False](../../brl/brl.blitz/#false).


<br/>

### `Function CreateThreadData:TThreadData()`

Create thread data

#### Returns
A new thread data object.


<br/>

### `Function SetThreadDataValue( data:TThreadData,value:Object )`

Set thread data value

<br/>

### `Function GetThreadDataValue:Object( data:TThreadData )`

Get thread data value

<br/>

### `Function CreateMutex:TMutex()`

Create a mutex

#### Returns
A new mutex object


#### Example
```blitzmax
'Make sure to have 'Threaded build' enabled!
'
SuperStrict

'a global list that multiple threads want to modify
Global list:TList=New TList

'a mutex controlling access to the global list
Global listMutex:TMutex=CreateMutex()

Function MyThread:Object( data:Object )

	For Local item:Int = 1 To 10
		'simulate 'other' processing...
		Delay Rand( 10,50 )

		'lock mutex so we can safely modify global list
		LockMutex listMutex

		'modify list
		list.AddLast "Thread "+data.ToString()+" added item "+item

		'unlock mutex
		UnlockMutex listMutex
	Next
	
End Function

Local threads:TThread[10]

'Create worker threads
For Local i:Int = 0 Until 10
	threads[i]=CreateThread( MyThread,String( i+1 ) )
Next

Print "Waiting for worker threads..."

'Wait for worker threads to finish
For Local i:Int = 0 Until 10
	WaitThread threads[i]
Next

'Show the resulting list
'
'Note: We don't really have to lock the mutex here, as there are no other threads running.
'Still, it's a good habit to get into.
LockMutex listMutex
For Local t:String = EachIn list
	Print t
Next
UnlockMutex listMutex
```
<br/>

### `Function CloseMutex( mutex:TMutex )`

Close a mutex

<br/>

### `Function LockMutex( mutex:TMutex )`

Lock a mutex

<br/>

### `Function TryLockMutex:Int( mutex:TMutex )`

Try to lock a mutex

#### Returns
[True](../../brl/brl.blitz/#true) if <b>mutex</b> was successfully locked; [False](../../brl/brl.blitz/#false) if <b>mutex</b> was already locked by another thread.


<br/>

### `Function UnlockMutex( mutex:TMutex )`

Unlock a mutex

<br/>

### `Function CreateSemaphore:TSemaphore( count:Int )`

Create a semaphore

#### Returns
A new semaphore object


#### Example
```blitzmax
'Make sure to have 'Threaded build' enabled!
'
SuperStrict

' a simple queue
Global queue:String[100],put:Int,get:Int

' a counter semaphore
Global counter:TSemaphore=CreateSemaphore( 0 )

Function MyThread:Object( data:Object )

	' process 100 items
	For Local item:Int = 1 To 100
	
		' add an item to the queue
		queue[put]="Item "+item
		put:+1
		
		' increment semaphore count.
		PostSemaphore counter
	
	Next
		
End Function

' create worker thread
Local thread:TThread=CreateThread( MyThread,Null )

' receive 100 items
For Local i:Int = 1 To 100

	' Wait for semaphore count to be non-0, then decrement.
	WaitSemaphore counter
	
	' Get an item from the queue
	Local item:String = queue[get]
	get:+1
	
	Print item

Next
```
<br/>

### `Function CloseSemaphore( semaphore:TSemaphore )`

Close a semaphore

<br/>

### `Function WaitSemaphore( semaphore:TSemaphore )`

Wait for a semaphore

<br/>

### `Function PostSemaphore( semaphore:TSemaphore )`

Post a semaphore

<br/>

### `Function CreateCondVar:TCondVar()`

Create a condvar

#### Returns
A new condvar object


<br/>

### `Function CloseCondVar( condvar:TCondVar )`

Close a condvar

<br/>

### `Function WaitCondVar( condvar:TCondVar,mutex:TMutex )`

Wait for a condvar

<br/>

### `Function SignalCondVar( condvar:TCondVar )`

Signal a condvar

<br/>

### `Function BroadcastCondVar( condvar:TCondVar )`

Broadcast a condvar

<br/>

### `Function CompareAndSwap:Int( target:Int Var,oldValue:Int,newValue:Int )`

Compare and swap


Atomically replace <b>target</b> with <b>new_value</b> if <b>target</b> equals <b>old_value</b>.


#### Returns
<b>True</b> if target was updated


<br/>

### `Function AtomicAdd:Int( target:Int Var,value:Int )`

Atomic add


Atomically add <b>value</b> to <b>target</b>.


#### Returns
Previuous value of target


<br/>

### `Function AtomicSwap:Int( target:Int Var,value:Int )`

Atomically swap values

#### Returns
The old value of <b>target</b>


<br/>

