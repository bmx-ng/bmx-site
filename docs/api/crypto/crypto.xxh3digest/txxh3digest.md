---
id: txxh3digest
title: TXXH3Digest
sidebar_label: TXXH3Digest
---

A digest implementation for the XXH3 hash algorithm.


## Methods

### `Method Reset()`

Resets the calculation to its initial state.

This is useful if you want to reuse the same instance for multiple calculations.


<br/>

### `Method Update:Int(data:Byte Ptr, dataLen:Int) Override`

Updates the calculation with <b>dataLen</b> bytes of data.

<br/>

### `Method Digest(txt:String, result:ULong Var)`

Calculates the XXH3 hash for the given [String](../../../brl/brl.blitz/#string), setting the value in <b>result</b>.

This is different to String's [HashCode](../../../brl/brl.stringbuilder/tstringbuilder/#method-hashcodeuint-override) method, which produces a 32-bit hash.


<br/>

### `Method Digest(stream:TStream, result:ULong Var)`

Calculates the XXH3 hash for the given [TStream](../../../brl/brl.stream/tstream), setting the value in <b>result</b>.

<br/>

### `Method Finish:Int(result:Byte[]) Override`

Finishes calculation and produces the result, filling <b>result</b> with the calculated bytes.

The state is reset, ready to create a new calculation.


<br/>

### `Method Finish:Int(result:ULong Var)`

Finishes calculation and produces the result, setting <b>result</b> with the result.

The state is reset, ready to create a new calculation.


<br/>

