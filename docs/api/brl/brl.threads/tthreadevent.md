---
id: tthreadevent
title: TThreadEvent
sidebar_label: TThreadEvent
---

A thread event object.


A basic synchronization object that allows one thread to signal an event to other threads.
It manages an internal flag that can be set or cleared, and provides methods to wait for the event to be set.


## Methods

### `Method Clear()`

Resets the internal flag to false.

After clearing, threads calling [Wait](../../../brl/brl.threads/tthreadevent/#method-wait) will block until [Set](../../../text/text.json/tjsonarray/#method-setintindexint-valuetjson) is called to set the internal flag to [True](../../../brl/brl.blitz/#true) again.


<br/>

### `Method Wait()`

Waits for the event to be set.

This method could block indefinitely if the event is never set.
If the event is already set, the method returns immediately.


<br/>

### `Method Wait:Int(timeout:ULong, unit:ETimeUnit = ETimeUnit.Milliseconds)`

Waits for the event to be set, with a timeout.

If the timeout is reached before the event is set, the method returns [False](../../../brl/brl.blitz/#false).


<br/>

### `Method IsSet:Int()`

Returns whether the event is set or not.

<br/>

