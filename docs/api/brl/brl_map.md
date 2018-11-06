---
id: brl.map
title: BRL.Map
sidebar_label: BRL.Map
---


## Types
| Type | Description |
|---|---|
| [TIntMap](../../brl/brl.map/tintmap) | A key/value (Int/Object) map. |
| [TIntKey](../../brl/brl.map/tintkey) | Int holder for key returned by TIntMap.Keys() enumerator. |
| [TPtrMap](../../brl/brl.map/tptrmap) | A key/value (Byte Ptr/Object) map. |
| [TPtrKey](../../brl/brl.map/tptrkey) | Byte Ptr holder for key returned by TPtrMap.Keys() enumerator. |
| [TStringMap](../../brl/brl.map/tstringmap) | A key/value (String/Object) map. |
| [TMap](../../brl/brl.map/tmap) | An key/value (Object/Object) map backed by a Red/Black tree. |

## Functions

### `Function CreateMap:TMap()`

Creates a map

#### Returns
A new map object



### `Function ClearMap( map:TMap )`

Clears a map


[ClearMap](../../brl/brl.map/#function-clearmap-map-tmap) removes all keys and values from <b>map</b>



### `Function MapIsEmpty( map:TMap )`

Checks if a map is empty

#### Returns
True if <b>map</b> is empty, otherwise false



### `Function MapInsert( map:TMap,key:Object,value:Object )`

Inserts a key/value pair into a map


If <b>map</b> already contained <b>key</b>, it's value is overwritten with <b>value</b>.



### `Function MapValueForKey:Object( map:TMap,key:Object )`

Finds a value given a key


If <b>map</b> does not contain <b>key</b>, a [Null](../../brl/brl.blitz/#null) object is returned.


#### Returns
The value associated with <b>key</b>



### `Function MapContains( map:TMap,key:Object )`

Checks if a map contains a key

#### Returns
True if <b>map</b> contains <b>key</b>



### `Function MapRemove( map:TMap,key:Object )`

Removes a key/value pair from a map


### `Function MapKeys:TMapEnumerator( map:TMap )`

Gets map keys


The object returned by [MapKeys](../../brl/brl.map/#function-mapkeys-tmapenumerator-map-tmap) can be used with [EachIn](../../brl/brl.blitz/#eachin) to iterate through
the keys in <b>map</b>.


#### Returns
An iterator object



### `Function MapValues:TMapEnumerator( map:TMap )`

Gets map values


The object returned by [MapValues](../../brl/brl.map/#function-mapvalues-tmapenumerator-map-tmap) can be used with [EachIn](../../brl/brl.blitz/#eachin) to iterate through
the values in <b>map</b>.


#### Returns
An iterator object



### `Function CopyMap:TMap( map:TMap )`

Copies a map

#### Returns
A copy of <b>map</b>



