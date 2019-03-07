---
id: brl.linkedlist
title: BRL.LinkedList
sidebar_label: BRL.LinkedList
---


<h1>Linked lists</h1>

A linked list allows you to efficiently add and remove objects to and from a collection of objects.

To create a linked list, use the [CreateList](../../brl/brl.linkedlist/#function-createlist-tlist) command.

Add objects to a linked list using [ListAddFirst](../../brl/brl.linkedlist/#function-listaddfirst-tlink-list-tlist-value-object) or [ListAddLast](../../brl/brl.linkedlist/#function-listaddlast-tlink-list-tlist-value-object). Both commands return a link object which can be used to later remove the object with the [RemoveLink](../../brl/brl.linkedlist/tlist/#method-removelink-link-tlink) command. You can also remove objects with the [ListRemove](../../brl/brl.linkedlist/#function-listremove-list-tlist-value-object) command. However this is not as efficient as using [RemoveLink](../../brl/brl.linkedlist/tlist/#method-removelink-link-tlink) because the list must first be searched for the object to be removed.

To visit all the objects in a linked list, you can use an [EachIn](../../brl/brl.blitz/#eachin) loop.


## Types
| Type | Description |
|---|---|
| [TLink](../../brl/brl.linkedlist/tlink) | Link Object used by TList |
| [TListEnum](../../brl/brl.linkedlist/tlistenum) | Enumerator Object use by TList in order to implement Eachin support. |
| [TList](../../brl/brl.linkedlist/tlist) | Linked List |

## Functions

### `Function CreateList:TList()`

Create a linked list

#### Returns
A new linked list object


#### Example
```blitzmax
' createlist.bmx

SuperStrict

' create a list to hold some objects

Local list:TList=CreateList()

' add some string objects to the list

ListAddLast list,"one"
ListAddLast list,"two"
ListAddLast list,"three"

' enumerate all the strings in the list

For Local a:String = EachIn list
	Print a
Next
```
<br/>

### `Function ClearList( list:TList )`

Clear a linked list

Removes all objects from <b>list</b>.


<br/>

### `Function CountList( list:TList )`

Count list length

#### Returns
The numbers of objects in <b>list</b>.


<br/>

### `Function ListIsEmpty( list:TList )`

Check if list is empty

#### Returns
True if list is empty, else false


<br/>

### `Function ListContains( list:TList,value:Object )`

Check if list contains a value

#### Returns
True if list contains <b>value</b>, else false


<br/>

### `Function SortList( list:TList,ascending=True,compareFunc( o1:Object,o2:Object ) )`

Sort a list

<br/>

### `Function ListFromArray:TList( arr:Object[] )`

Create a list from an array

#### Returns
A new linked list


<br/>

### `Function ListToArray:Object[]( list:TList )`

convert a list to an array

#### Returns
An array of objects


<br/>

### `Function SwapLists( list_x:TList,list_y:TList )`

Swap the contents of 2 lists

<br/>

### `Function ReverseList( list:TList )`

Reverse the order of elements of a list

<br/>

### `Function ListFindLink:TLink( list:TList,value:Object )`

Find a link in a list

#### Returns
The link containting <b>value</b>


<br/>

### `Function ListAddLast:TLink( list:TList,value:Object )`

Add an object to a linked list

#### Returns
A link object


<br/>

### `Function ListAddFirst:TLink( list:TList,value:Object )`

Add an object to a linked list

#### Returns
A link object


<br/>

### `Function ListRemove( list:TList,value:Object )`

Remove an object from a linked list

[ListRemove](../../brl/brl.linkedlist/#function-listremove-list-tlist-value-object) scans a list for the specified value and removes its link.


<br/>

