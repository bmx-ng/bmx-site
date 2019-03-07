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


<br/>

### `Method IsEmpty()`

Check if list is empty

#### Returns
True if list is empty, else false


<br/>

### `Method Contains( value:Object )`

Check if list contains a value

#### Returns
True if list contains <b>value</b>, else false


<br/>

### `Method AddFirst:TLink( value:Object )`

Add an object to the start of the list

#### Returns
A link object


<br/>

### `Method AddLast:TLink( value:Object )`

Add an object to the end of the list

#### Returns
A link object


<br/>

### `Method First:Object()`

Returns the first object in the list

Returns Null if the list is empty.


<br/>

### `Method Last:Object()`

Returns the last object in the list

Returns Null if the list is empty.


<br/>

### `Method RemoveFirst:Object()`

Removes and returns the first object in the list.

Returns Null if the list is empty.


<br/>

### `Method RemoveLast:Object()`

Removes and returns the last object in the list.

Returns Null if the list is empty.


<br/>

### `Method FirstLink:TLink()`

Returns the first link the list or null if the list is empty.

<br/>

### `Method LastLink:TLink()`

Returns the last link the list or null if the list is empty.

<br/>

### `Method InsertBeforeLink:TLink( value:Object,succ:TLink )`

Inserts an object before the specified list link.

<br/>

### `Method InsertAfterLink:TLink( value:Object,pred:TLink )`

Inserts an object after the specified list link.

<br/>

### `Method FindLink:TLink( value:Object )`

Returns the first link in the list with the given value, or null if none found.

<br/>

### `Method ValueAtIndex:Object( index )`

Returns the value of the link at the given index.

Throws an exception if the index is out of range (must be 0..list.Count()-1 inclusive).


<br/>

### `Method Count()`

Count list length

#### Returns
The numbers of objects in <b>list</b>.


<br/>

### `Method Remove( value:Object )`

Remove an object from a linked list

Remove scans a list for the specified value and removes its link.


<br/>

### `Method Swap( list:TList )`

Swap contents with the list specified.

<br/>

### `Method Copy:TList()`

Creates an identical copy of the list.

<br/>

### `Method Reverse()`

Reverse the order of the list.

<br/>

### `Method Reversed:TList()`

Creates a new list that is the reversed version of this list.

<br/>

### `Method Sort( ascending=True,compareFunc( o1:Object,o2:Object ) )`

Sort a list in either ascending (default) or decending order.

User types should implement a Compare method in order to be sorted.


<br/>

### `Method ToArray:Object[]()`

convert a list to an array

#### Returns
An array of objects


<br/>

### `Method RemoveLink( link:TLink )`

Remove an object from a linked list.

<br/>

## Functions

### `Function FromArray:TList( arr:Object[] )`

Create a list from an array

#### Returns
A new linked list


<br/>

