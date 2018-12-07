---
id: brl.ramstream
title: BRL.RamStream
sidebar_label: BRL.RamStream
---


## Functions

### `Function CreateRamStream:TRamStream( ram:Byte Ptr,size:Long,readable,writeable )`

Create a ram stream

A ram stream allows you to read and/or write data directly from/to memory.
A ram stream extends a stream object so can be used anywhere a stream is expected.

Be careful when working with ram streams, as any attempt to access memory
which has not been allocated to your application can result in a runtime crash.


#### Returns
A ram stream object


<br/>

