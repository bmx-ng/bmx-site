---
id: tmap
title: TMap
sidebar_label: TMap
---

An key/value (Object/Object) map backed by a Red/Black tree.


## Methods

### `Method Clear()`

Clears the map.

Removes all keys and values.



### `Method IsEmpty()`

Checks if the map is empty.

[True](../../../brl/brl.blitz/#true) if <b>map</b> is empty, otherwise [False](../../../brl/brl.blitz/#false).



### `Method Insert( key:Object,value:Object )`

Inserts a key/value pair into the map.

If the map already contains <b>key</b>, its value is overwritten with <b>value</b>.



### `Method Contains( key:Object )`

Checks if the map contains <b>key</b>.

#### Returns
[True](../../../brl/brl.blitz/#true) if the map contains <b>key</b>.



### `Method ValueForKey:Object( key:Object )`

Finds a value given a <b>key</b>.

If the map does not contain <b>key</b>, a [Null](../../../brl/brl.blitz/#null) object is returned.


#### Returns
The value associated with <b>key</b>.



### `Method Remove( key:Object )`

Remove a key/value pair from the map.

#### Returns
[True](../../../brl/brl.blitz/#true) if <b>key</b> was removed, or [False](../../../brl/brl.blitz/#false) otherwise.



### `Method Keys:TMapEnumerator()`

Gets the map keys.

The object returned by [Keys](../../../brl/brl.map/tmap/#method-keys-tmapenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the keys in the map.


#### Returns
An enumeration object



### `Method Values:TMapEnumerator()`

Get the map values.

The object returned by [Values](../../../brl/brl.map/tmap/#method-values-tmapenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the values in the map.


#### Returns
An enumeration object.



### `Method Copy:TMap()`

Returns a copy the contents of this map.


### `Method ObjectEnumerator:TNodeEnumerator()`

Returns a node enumeration object.

The object returned by [ObjectEnumerator](../../../brl/brl.map/tmap/#method-objectenumerator-tnodeenumerator) can be used with [EachIn](../../../brl/brl.blitz/#eachin) to iterate through the nodes in the map.



