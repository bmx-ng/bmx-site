---
id: itomlnode
title: ITomlNode
sidebar_label: ITomlNode
---

A toml node.


## Methods

### `Method NodeType:ETomlNodeType()`

Returns the type of this node.

<br/>

### `Method IsTable:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the node is a table.

<br/>

### `Method IsArray:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the node is an array.

<br/>

### `Method IsString:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the node is a String.

<br/>

### `Method IsInteger:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the node is an integer.

<br/>

### `Method IsFloatingPoint:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the node is a floating point number.

<br/>

### `Method IsBoolean:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the node is a boolean.

<br/>

### `Method IsDate:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the node is a date.

<br/>

### `Method IsTime:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the node is a time.

<br/>

### `Method IsDateTime:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the node is a date time.

<br/>

### `Method AsTable:TTomlTable()`

Returns this node as a table, or throws a TUnsupportedNodeError.

<br/>

### `Method AsArray:TTomlArray()`

Returns this node as an array, or throws a TUnsupportedNodeError.

<br/>

### `Method AsString:String()`

Returns this node as a [String](../../../brl/brl.blitz/#string), or throws a TUnsupportedNodeError.

<br/>

### `Method AsLong:Long()`

Returns this node as a [Long](../../../brl/brl.blitz/#long), or throws a TUnsupportedNodeError.

<br/>

### `Method AsDouble:Double()`

Returns this node as a [Double](../../../brl/brl.blitz/#double), or throws a TUnsupportedNodeError.

<br/>

### `Method AsBoolean:Int()`

Returns this node as a boolean, or throws a TUnsupportedNodeError.

<br/>

### `Method AsDate:STomlDate()`

Returns this node as a date, or throws a TUnsupportedNodeError.

<br/>

### `Method AsTime:STomlTime()`

Returns this node as a time, or throws a TUnsupportedNodeError.

<br/>

### `Method AsDateTime:STomlDateTime()`

Returns this node as a date time, or throws a TUnsupportedNodeError.

<br/>

