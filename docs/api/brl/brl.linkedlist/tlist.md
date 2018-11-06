---
id: tlist
title: TList
sidebar_label: TList
---

Linked List


## Methods

### `Method Clear()`

Clear a linked list

Removes all objects from <b>list</b>.



### `Method IsEmpty()`

Check if list is empty

#### Returns
True if list is empty, else false



### `Method Contains( value:Object )`

Check if list contains a value

#### Returns
True if list contains <b>value</b>, else false



### `Method AddFirst:TLink( value:Object )`

Add an object to the start of the list

#### Returns
A link object



### `Method AddLast:TLink( value:Object )`

Add an object to the end of the list

#### Returns
A link object



### `Method First:Object()`

Returns the first object in the list

Returns Null if the list is empty.



### `Method Last:Object()`

Returns the last object in the list

Returns Null if the list is empty.



### `Method RemoveFirst:Object()`

Removes and returns the first object in the list.

Returns Null if the list is empty.



### `Method RemoveLast:Object()`

Removes and returns the last object in the list.

Returns Null if the list is empty.



### `Method FirstLink:TLink()`

Returns the first link the list or null if the list is empty.


### `Method LastLink:TLink()`

Returns the last link the list or null if the list is empty.


### `Method InsertBeforeLink:TLink( value:Object,succ:TLink )`

Inserts an object before the specified list link.


### `Method InsertAfterLink:TLink( value:Object,pred:TLink )`

Inserts an object after the specified list link.


### `Method FindLink:TLink( value:Object )`

Returns the first link in the list with the given value, or null if none found.


### `Method ValueAtIndex:Object( index )`

Returns the value of the link at the given index.

Throws an exception if the index is out of range (must be 0..list.Count()-1 inclusive).



### `Method Count()`

Count list length

#### Returns
The numbers of objects in <b>list</b>.



### `Method Remove( value:Object )`

Remove an object from a linked list

Remove scans a list for the specified value and removes its link.



### `Method Swap( list:TList )`

Swap contents with the list specified.


### `Method Copy:TList()`

Creates an identical copy of the list.


### `Method Reverse()`

Reverse the order of the list.


### `Method Reversed:TList()`

Creates a new list that is the reversed version of this list.


### `Method Sort( ascending=True,compareFunc( o1:Object,o2:Object ) )`

Sort a list in either ascending (default) or decending order.

User types should implement a Compare method in order to be sorted.



### `Method ToArray:Object[]()`

convert a list to an array

#### Returns
An array of objects



## Functions

### `Function FromArray:TList( arr:Object[] )`

Create a list from an array

#### Returns
A new linked list



