---
id: tintmap
title: TIntMap
sidebar_label: TIntMap
---

A key/value (Int/Object) map.


## Operators

### `Method Operator[]:Object(key:Int)`

Finds a value given a <b>key</b> using index syntax.

If the map does not contain <b>key</b>, a [Null](../../../brl/brl.blitz/#null) object is returned.


#### Returns
The value associated with <b>key</b>.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.map

Local map:TIntMap = New TIntMap

map.Insert(1, "Hello")
map.Insert(2, "World")

For Local k:TIntKey = EachIn map.Keys()
	Print k.value + " = " + String(map[k.value]) ' retrieve value using index operator
Next
```
<br/>

### `Method Operator[]=(key:Int, value:Object)`

Inserts a key/value pair into the map using index syntax.

If the map already contains <b>key</b>, its value is overwritten with <b>value</b>.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.map

Local map:TIntMap = New TIntMap

map[1] = "Hello" ' insert value using index operator
map[2] = "World"

For Local k:TIntKey = EachIn map.Keys()
	Print k.value + " = " + String(map.ValueForKey(k.value))
Next
```
<br/>

## Methods

### `Method Clear()`

Clears the map.

Removes all keys and values.


<br/>

### `Method IsEmpty:Int()`

Checks if the map is empty.

[True](../../../brl/brl.blitz/#true) if <b>map</b> is empty, otherwise [False](../../../brl/brl.blitz/#false).


<br/>

### `Method Insert( key:Int,value:Object )`

Inserts a key/value pair into the map.

If the map already contains <b>key</b>, its value is overwritten with <b>value</b>.


<br/>

### `Method Contains:Int( key:Int )`

Checks if the map contains <b>key</b>.

#### Returns
[True](../../../brl/brl.blitz/#true) if the map contains <b>key</b>.


<br/>

### `Method ValueForKey:Object( key:Int )`

Finds a value given a <b>key</b>.

If the map does not contain <b>key</b>, a [Null](../../../brl/brl.blitz/#null) object is returned.


#### Returns
The value associated with <b>key</b>.


<br/>

### `Method Remove:Int( key:Int )`

Remove a key/value pair from the map.

#### Returns
[True](../../../brl/brl.blitz/#true) if <b>key</b> was removed, or [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method Keys:TIntMapEnumerator()`

Gets the map keys.

The object returned by [Keys](../../../brl/brl.map/tintmap/#method-keystintmapenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the keys in the map.


#### Returns
An enumeration object


<br/>

### `Method Values:TIntMapEnumerator()`

Get the map values.

The object returned by [Values](../../../brl/brl.map/tintmap/#method-valuestintmapenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the values in the map.


#### Returns
An enumeration object.


<br/>

### `Method Copy:TIntMap()`

Returns a copy the contents of this map.

<br/>

### `Method ObjectEnumerator:TIntNodeEnumerator()`

Returns a node enumeration object.

The object returned by [ObjectEnumerator](../../../brl/brl.map/tintmap/#method-objectenumeratortintnodeenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the nodes in the map.


<br/>

