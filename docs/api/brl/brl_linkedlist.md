---
id: brl.linkedlist
title: BRL.LinkedList
sidebar_label: Introduction
---


A linked list allows you to efficiently add and remove objects to and from a collection of objects.

To create a linked list, use the [CreateList](../../brl/brl.linkedlist/#function-createlisttlist) command.

Add objects to a linked list using [ListAddFirst](../../brl/brl.linkedlist/#function-listaddfirsttlink-listtlistvalueobject-) or [ListAddLast](../../brl/brl.linkedlist/#function-listaddlasttlink-listtlistvalueobject-). Both commands return a link object which can be used to later remove the object with the [RemoveLink](../../brl/brl.linkedlist/tlist/#method-removelink-linktlink-) command. You can also remove objects with the [ListRemove](../../brl/brl.linkedlist/#function-listremove-listtlistvalueobject-) command. However this is not as efficient as using [RemoveLink](../../brl/brl.linkedlist/tlist/#method-removelink-linktlink-) because the list must first be searched for the object to be removed.

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
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the list
ListAddLast(list,"one")
ListAddLast(list,"two")
ListAddLast(list,"three")

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next
```
<br/>

### `Function ClearList( list:TList )`

Clear a linked list

Removes all objects from <b>list</b>.


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the end of the list
ListAddLast(list, "one")
ListAddLast(list, "two")
ListAddLast(list, "three")

' print amount of elements in the list
Print CountList(list)

' clear the list and remove all elements
ClearList(list)

' print amount of elements in the list
Print CountList(list)

' outputs:
' 3
' 0
```
<br/>

### `Function CountList( list:TList )`

Count list length

#### Returns
The numbers of objects in <b>list</b>.


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the end of the list
ListAddLast(list, "one")
ListAddLast(list, "two")
ListAddLast(list, "three")

' print amount of elements in the list
Print CountList(list)

' outputs:
' 3
```
<br/>

### `Function ListIsEmpty( list:TList )`

Check if list is empty

#### Returns
True if list is empty, else false


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the end of the list
ListAddLast(list, "one")
ListAddLast(list, "two")
ListAddLast(list, "three")

' check if the list contains some elements
If ListIsEmpty(list) Then
	Print "list is empty"
Else
	Print "list contains elements"
EndIf

' outputs:
' list contains elements
```
<br/>

### `Function ListContains( list:TList,value:Object )`

Check if list contains a value

#### Returns
True if list contains <b>value</b>, else false


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the end of the list
ListAddLast(list, "one")
ListAddLast(list, "two")
ListAddLast(list, "three")

' check if the list contains some elements
If ListContains(list, "four") Then
	Print "four"
EndIf

If ListContains(list, "three") Then
	Print "three"
EndIf

' outputs:
' three
```
<br/>

### `Function SortList( list:TList,ascending=True,compareFunc( o1:Object,o2:Object ) )`

Sort a list

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the end of the list
ListAddLast(list, "short")
ListAddLast(list, "longer")
ListAddLast(list, "the longest")


' DEFAULT SORT
' sort them (in this case this leads to an alphabetic sort)
' second parameter sets sort to ascending or not
SortList(list, True)

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' longer
' short
' the longest


' CUSTOM SORT
' define a custom compare function
Function MyCompare:Int( o1:Object, o2:Object )
	If Len(String(o1)) < Len(String(o2)) Then
		Return -1 ' o1 before o2
	ElseIf Len(String(o1)) > Len(String(o2)) Then
		Return 1 ' o1 after o2
	Else
		Return 0 ' equal
	EndIf
End Function

' sort them with a custom compare function
SortList(list, True, MyCompare)

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' short
' longer
' the longest
```
<br/>

### `Function ListFromArray:TList( arr:Object[] )`

Create a list from an array

#### Returns
A new linked list


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create an array holding some objects
Local objects:Object[] = ["one", "two", "three"]

' create a linked list out of the elements
Local list:TList = ListFromArray(objects) 

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' two
' three
```
<br/>

### `Function ListToArray:Object[]( list:TList )`

convert a list to an array

#### Returns
An array of objects


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the end of the list
ListAddLast(list, "one")
ListAddLast(list, "two")
ListAddLast(list, "three")

' create an array out of the list elements
Local objects:Object[] = ListToArray(list) 

' enumerate all the strings in the array
For Local a:String = EachIn objects
	Print a
Next

' outputs:
' one
' two
' three
```
<br/>

### `Function SwapLists( list_x:TList,list_y:TList )`

Swap the contents of 2 lists

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the end of the list
ListAddLast(list, "one")
ListAddLast(list, "two")
ListAddLast(list, "three")


' create a second list
Local list2:TList = CreateList()
ListAddLast(list2, "four")
ListAddLast(list2, "five")
ListAddLast(list2, "six")


' swap the lists
SwapLists(list, list2)

' enumerate all the strings in the first list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' four
' five
' six
```
<br/>

### `Function ReverseList( list:TList )`

Reverse the order of elements of a list

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the end of the list
ListAddLast(list, "one")
ListAddLast(list, "two")
ListAddLast(list, "three")

' reverse the list
ReverseList(list)

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' three
' two
' one
```
<br/>

### `Function ListFindLink:TLink( list:TList,value:Object )`

Find a link in a list

#### Returns
The link containting <b>value</b>


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the begin of the list
ListAddLast(list, "one")
ListAddLast(list, "two")
ListAddLast(list, "three")

' find the TLink instance of the element/object "two" 
Local link:TLink = ListFindLink(list, "two")

' remove the element from the list by utilizing the link
ListRemoveLink(list, link)

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' three
```
<br/>

### `Function ListRemoveLink( list:TList,link:TLink )`

Remove an object from a linked list referenced by a link

[ListRemoveLink](../../brl/brl.linkedlist/#function-listremovelink-listtlistlinktlink-) removes an object from the linked list referenced by the given link


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the begin of the list
ListAddLast(list, "one")
ListAddLast(list, "two")
ListAddLast(list, "three")

' find the TLink instance of the element/object "two" 
Local link:TLink = ListFindLink(list, "two")

' remove the element from the list by utilizing the link
ListRemoveLink(list, link)

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' three
```
<br/>

### `Function ListAddLast:TLink( list:TList,value:Object )`

Add an object to a linked list

#### Returns
A link object


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the end of the list
ListAddLast(list, "one")
ListAddLast(list, "two")
ListAddLast(list, "three")

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' two
' three
```
<br/>

### `Function ListGetFirst:Object( list:TList )`

Returns the first object in the list

Returns Null if the list is empty.


<br/>

### `Function ListGetLast:Object( list:TList )`

Returns the last object in the list

Returns Null if the list is empty.


<br/>

### `Function ListAddFirst:TLink( list:TList,value:Object )`

Add an object to a linked list

#### Returns
A link object


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the begin of the list
ListAddFirst(list, "one")
ListAddFirst(list, "two")
ListAddFirst(list, "three")

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' three
' two
' one
```
<br/>

### `Function ListRemoveFirst:Object( list:TList )`

Removes and returns the first object in the list.

Returns Null if the list is empty.


<br/>

### `Function ListRemoveLast:Object( list:TList )`

Removes and returns the last object in the list.

Returns Null if the list is empty.


<br/>

### `Function ListRemove( list:TList,value:Object )`

Remove an object from a linked list

[ListRemove](../../brl/brl.linkedlist/#function-listremove-listtlistvalueobject-) scans a list for the specified value and removes its link.


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = CreateList()

' add some string objects to the begin of the list
ListAddLast(list, "one")
ListAddLast(list, "two")
ListAddLast(list, "three")

' remove the string "two"
ListRemove(list, "two")

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' three
```
<br/>

