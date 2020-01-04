---
id: tcrc32
title: TCRC32
sidebar_label: TCRC32
---

A CRC32 function.


## Methods

### `Method Update:Int(data:Byte Ptr, dataLen:Int) Override`

Updates the calculation with <b>dataLen</b> bytes of data.

<br/>

### `Method Digest(txt:String, result:Int Var)`

Calculates the CRC for the given [String](../../../brl/brl.blitz/#string), setting the value in <b>result</b>.

<br/>

### `Method Digest(stream:TStream, result:Int Var)`

Calculates the CRC for the given [TStream](../../../brl/brl.stream/tstream), setting the value in <b>result</b>.

<br/>

### `Method Finish:Int(result:Byte[]) Override`

Finishes calculation and produces the result, filling <b>result</b> with the calculated bytes.

The state is reset, ready to create a new calculation.


<br/>

### `Method Finish:Int(result:Int Var)`

Finishes calculation and produces the result, setting <b>result</b> with the result.

The state is reset, ready to create a new calculation.


<br/>

