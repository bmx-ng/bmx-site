---
id: brl.map
title: BRL.Map
sidebar_label: Introduction
---


## Types
| Type | Description |
|---|---|
| [TMap](../../brl/brl.map/tmap) | An key/value (Object/Object) map backed by a Red/Black tree. |

## Functions

### `Function CreateMap:TMap()`

Creates a map

#### Returns
A new map object


<br/>

### `Function ClearMap( map:TMap )`

Clears a map


[ClearMap](../../brl/brl.map/#function-clearmap-maptmap-) removes all keys and values from <b>map</b>


<br/>

### `Function MapIsEmpty:Int( map:TMap )`

Checks if a map is empty

#### Returns
True if <b>map</b> is empty, otherwise false


<br/>

### `Function MapInsert( map:TMap,key:Object,value:Object )`

Inserts a key/value pair into a map


If <b>map</b> already contained <b>key</b>, it's value is overwritten with <b>value</b>.


<br/>

### `Function MapValueForKey:Object( map:TMap,key:Object )`

Finds a value given a key


If <b>map</b> does not contain <b>key</b>, a [Null](../../brl/brl.blitz/#null) object is returned.


#### Returns
The value associated with <b>key</b>


<br/>

### `Function MapContains:Int( map:TMap,key:Object )`

Checks if a map contains a key

#### Returns
True if <b>map</b> contains <b>key</b>


<br/>

### `Function MapRemove( map:TMap,key:Object )`

Removes a key/value pair from a map

<br/>

### `Function MapKeys:TMapEnumerator( map:TMap )`

Gets map keys


The object returned by [MapKeys](../../brl/brl.map/#function-mapkeystmapenumerator-maptmap-) can be used with [EachIn](../../brl/brl.blitz/#eachin) to iterate through
the keys in <b>map</b>.


#### Returns
An iterator object


<br/>

### `Function MapValues:TMapEnumerator( map:TMap )`

Gets map values


The object returned by [MapValues](../../brl/brl.map/#function-mapvaluestmapenumerator-maptmap-) can be used with [EachIn](../../brl/brl.blitz/#eachin) to iterate through
the values in <b>map</b>.


#### Returns
An iterator object


<br/>

### `Function CopyMap:TMap( map:TMap )`

Copies a map

#### Returns
A copy of <b>map</b>


<br/>

