---
id: tstringmap
title: TStringMap
sidebar_label: TStringMap
---

A key/value (String/Object) map.


## Operators

### `Method Operator[]:Object(key:String)`

Finds a value given a <b>key</b> using index syntax.

If the map does not contain <b>key</b>, a [Null](../../../brl/brl.blitz/#null) object is returned.


#### Returns
The value associated with <b>key</b>.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.map

Local map:TStringMap = New TStringMap

map.Insert("one", "Hello")
map.Insert("two", "World")

For Local s:String = EachIn map.Keys()
	Print s + " = " + String(map[s]) ' retrieve value using index operator
Next
```
<br/>

### `Method Operator[]=(key:String, value:Object)`

Inserts a key/value pair into the map using index syntax.

If the map already contains <b>key</b>, its value is overwritten with <b>value</b>.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.map

Local map:TStringMap = New TStringMap

map["one"] = "Hello" ' insert value using index operator
map["two"] = "World"

For Local s:String = EachIn map.Keys()
	Print s + " = " + String(map.ValueForKey(s))
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

### `Method Insert( key:String,value:Object )`

Inserts a key/value pair into the map.

If the map already contains <b>key</b>, its value is overwritten with <b>value</b>.


<br/>

### `Method Contains:Int( key:String )`

Checks if the map contains <b>key</b>.

#### Returns
[True](../../../brl/brl.blitz/#true) if the map contains <b>key</b>.


<br/>

### `Method ValueForKey:Object( key:String )`

Finds a value given a <b>key</b>.

If the map does not contain <b>key</b>, a [Null](../../../brl/brl.blitz/#null) object is returned.


#### Returns
The value associated with <b>key</b>.


<br/>

### `Method Remove:Int( key:String )`

Remove a key/value pair from the map.

#### Returns
[True](../../../brl/brl.blitz/#true) if <b>key</b> was removed, or [False](../../../brl/brl.blitz/#false) otherwise.


<br/>

### `Method Keys:TStringMapEnumerator()`

Gets the map keys.

The object returned by [Keys](../../../brl/brl.map/tstringmap/#method-keyststringmapenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the keys in the map.


#### Returns
An enumeration object


<br/>

### `Method Values:TStringMapEnumerator()`

Get the map values.

The object returned by [Values](../../../brl/brl.map/tstringmap/#method-valueststringmapenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the values in the map.


#### Returns
An enumeration object.


<br/>

### `Method Copy:TStringMap()`

Returns a copy the contents of this map.

<br/>

### `Method ObjectEnumerator:TStringNodeEnumerator()`

Returns a node enumeration object.

The object returned by [ObjectEnumerator](../../../brl/brl.map/tstringmap/#method-objectenumeratortstringnodeenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the nodes in the map.


<br/>

