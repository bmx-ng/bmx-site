---
id: tobjectlist
title: TObjectList
sidebar_label: TObjectList
---

Array-backed Object List


## Methods

### `Method Clear()`

Clears the list.

Removes all objects from list.


<br/>

### `Method IsEmpty:Int()`

Checks if the list is empty.

#### Returns
[True](../../../brl/brl.blitz/#true) if the list is empty, else [False](../../../brl/brl.blitz/#false)


<br/>

### `Method AddFirst(value:Object)`

Adds an object to the start of the list

<br/>

### `Method AddLast(value:Object)`

Adds an object to the end of the list

<br/>

### `Method Contains:Int(obj:Object)`

Checks if the list contains a value

#### Returns
[True](../../../brl/brl.blitz/#true) if the list contains <b>obj</b>, else [False](../../../brl/brl.blitz/#false)


<br/>

### `Method First:Object()`

Returns the first object in the list

Returns [Null](../../../brl/brl.blitz/#null) if the list is empty.


<br/>

### `Method Last:Object()`

Returns the last object in the list

Returns [Null](../../../brl/brl.blitz/#null) if the list is empty.


<br/>

### `Method RemoveFirst:Object()`

Removes and returns the first object in the list.

Returns [Null](../../../brl/brl.blitz/#null) if the list is empty.


<br/>

### `Method RemoveLast:Object()`

Removes and returns the last object in the list.

Returns [Null](../../../brl/brl.blitz/#null) if the list is empty.


<br/>

### `Method ValueAtIndex:Object(index:Int)`

Returns the object at the given index.

Throws an exception if the index is out of range (must be 0..list.Count()-1 inclusive).


<br/>

### `Method Count:Int()`

Counts the list length

#### Returns
The numbers of objects in the list.


<br/>

### `Method Remove:Int(value:Object, removeAll:Int = False, compactOnRemove:Int = True)`

Removes an object from the list.

Remove scans the list for the specified value and removes it.
By default, only the first found object is removed.	Enabling <b>removeAll</b> will result in all instances of <b>value</b> being removed from the list.
By default, the list is compacted on each remove. This can be inefficient if removing several objects from a list. Disabling <b>compactOnRemove</b>
will skip compaction until either [Compact](../../../brl/brl.objectlist/tobjectlist/#method-compact)() is called, or the current enumerator completes, or a different list method is called.
This mechanism allows for removal of elements during an enumeration.


<br/>

### `Method Compact()`

Compacts the list.

Use with [Remove](../../../brl/brl.objectlist/tobjectlist/#method-removeintvalueobject-removeallint-false-compactonremoveint-true)() and <b>compactOnRemove</b> = [False](../../../brl/brl.blitz/#false).


<br/>

### `Method Copy:TObjectList()`

Creates an identical copy of the list.

<br/>

### `Method Reverse()`

Reverses the order of the list.

<br/>

### `Method Reversed:TObjectList()`

Creates a new list that is the reversed version of this list.

<br/>

### `Method ToArray:Object[]()`

Converts the list to an array

#### Returns
An array of objects


<br/>

### `Method Sort(ascending:Int=True, compareFunc:Int( o1:Object,o2:Object ) )`

Sort the list in either ascending (default) or decending order.

User types should implement a Compare method in order to be sorted.


<br/>

## Functions

### `Function FromArray:TObjectList(arr:Object[])`

Creates a list from an array

#### Returns
A new object list


<br/>

