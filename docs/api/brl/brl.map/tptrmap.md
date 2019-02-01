---
id: tptrmap
title: TPtrMap
sidebar_label: TPtrMap
---

A key/value (Byte Ptr/Object) map.


## Operators

### `Method Operator[]:Object(key:Byte Ptr)`

Finds a value given a <b>key</b> using index syntax.

If the map does not contain <b>key</b>, a [Null](../../../brl/brl.blitz/#null) object is returned.


#### Returns
The value associated with <b>key</b>.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.map

Local map:TPtrMap = New TPtrMap

map.Insert(Byte Ptr(1), "Hello")
map.Insert(Byte Ptr(2), "World")

For Local k:TPtrKey = EachIn map.Keys()
	Print Int(k.value) + " = " + String(map[k.value]) ' retrieve value using index operator
Next
```
<br/>

### `Method Operator[]=(key:Byte Ptr, value:Object)`

Inserts a key/value pair into the map using index syntax.

If the map already contains <b>key</b>, its value is overwritten with <b>value</b>.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.map

Local map:TPtrMap = New TPtrMap

map[Byte Ptr(1)] = "Hello" ' insert value using index operator
map[Byte Ptr(2)] = "World"

For Local k:TPtrKey = EachIn map.Keys()
	Print Int(k.value) + " = " + String(map.ValueForKey(k.value))
Next
```
<br/>

## Methods

### `Method Clear()`

Clears the map.

Removes all keys and values.


<br/>

### `Method IsEmpty()`

Checks if the map is empty.

[True](../../../brl/brl.blitz/#true) if <b>map</b> is empty, otherwise [False](../../../brl/brl.blitz/#false).


<br/>

### `Method Insert( key:Byte Ptr,value:Object )`

Inserts a key/value pair into the map.

If the map already contains <b>key</b>, its value is overwritten with <b>value</b>.


<br/>

### `Method Contains:Int( key:Byte Ptr )`

Checks if the map contains <b>key</b>.

#### Returns
[True](../../../brl/brl.blitz/#true) if the map contains <b>key</b>.


<br/>

### `Method ValueForKey:Object( key:Byte Ptr )`

Finds a value given a <b>key</b>.

If the map does not contain <b>key</b>, a [Null](../../../brl/brl.blitz/#null) object is returned.


#### Returns
The value associated with <b>key</b>.


<br/>

### `Method Remove( key:Byte Ptr )`

Remove a key/value pair from the map.

#### Returns
[True](../../../brl/brl.blitz/#true) if <b>key</b> was removed, or [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method Keys:TPtrMapEnumerator()`

Gets the map keys.

The object returned by [Keys](../../../brl/brl.map/tptrmap/#method-keys-tptrmapenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the keys in the map.


#### Returns
An enumeration object


<br/>

### `Method Values:TPtrMapEnumerator()`

Get the map values.

The object returned by [Values](../../../brl/brl.map/tptrmap/#method-values-tptrmapenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the values in the map.


#### Returns
An enumeration object.


<br/>

### `Method Copy:TPtrMap()`

Returns a copy the contents of this map.

<br/>

### `Method ObjectEnumerator:TPtrNodeEnumerator()`

Returns a node enumeration object.

The object returned by [ObjectEnumerator](../../../brl/brl.map/tptrmap/#method-objectenumerator-tptrnodeenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the nodes in the map.


<br/>

