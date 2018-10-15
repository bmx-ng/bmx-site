---
id: brl.map
title: BRL.Map
sidebar_label: BRL.Map
---


## Types
| Type | Description |
|---|---|
| [TIntKey](../../brl/brl.map/tintkey) | Int holder for key returned by TIntMap.Keys() enumerator. |
| [TPtrKey](../../brl/brl.map/tptrkey) | Byte Ptr holder for key returned by TPtrMap.Keys() enumerator. |

## Functions

### `Function CreateMap:TMap()`

Create a map

#### Returns
A new map object



### `Function ClearMap( map:TMap )`

Clear a map


[ClearMap](../../brl/brl.map/#function-clearmap-map-tmap) removes all keys and values from <b>map</b>



### `Function MapIsEmpty( map:TMap )`

Check if a map is empty

#### Returns
True if <b>map</b> is empty, otherwise false



### `Function MapInsert( map:TMap,key:Object,value:Object )`

Insert a key/value pair into a map


If <b>map</b> already contained <b>key</b>, it's value is overwritten with <b>value</b>.



### `Function MapValueForKey:Object( map:TMap,key:Object )`

Find a value given a key


If <b>map</b> does not contain <b>key</b>, a [Null](../../brl/brl.blitz/#null) object is returned.


#### Returns
The value associated with <b>key</b>



### `Function MapContains( map:TMap,key:Object )`

Check if a map contains a key

#### Returns
True if <b>map</b> contains <b>key</b>



### `Function MapRemove( map:TMap,key:Object )`

Remove a key/value pair from a map


### `Function MapKeys:TMapEnumerator( map:TMap )`

Get map keys


The object returned by [MapKeys](../../brl/brl.map/#function-mapkeys-tmapenumerator-map-tmap) can be used with [EachIn](../../brl/brl.blitz/#eachin) to iterate through
the keys in <b>map</b>.


#### Returns
An iterator object



### `Function MapValues:TMapEnumerator( map:TMap )`

Get map values


The object returned by [MapValues](../../brl/brl.map/#function-mapvalues-tmapenumerator-map-tmap) can be used with [EachIn](../../brl/brl.blitz/#eachin) to iterate through
the values in <b>map</b>.


#### Returns
An iterator object



### `Function CopyMap:TMap( map:TMap )`

Copy a map

#### Returns
A copy of <b>map</b>



