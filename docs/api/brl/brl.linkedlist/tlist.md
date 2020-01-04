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


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' print amount of elements in the list
Print list.Count()

' clear the list and remove all elements
list.Clear()

' print amount of elements in the list
Print list.Count()

' outputs:
' 3
' 0
```
<br/>

### `Method IsEmpty()`

Check if list is empty

#### Returns
True if list is empty, else false


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' check if the list contains some elements
If list.IsEmpty() Then
	Print "list is empty"
Else
	Print "list contains elements"
EndIf


' outputs:
' list contains elements
```
<br/>

### `Method Contains( value:Object )`

Check if list contains a value

#### Returns
True if list contains <b>value</b>, else false


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' check if the list contains some elements
If list.Contains("four") Then
	Print "four"
EndIf

If list.Contains("three") Then
	Print "three"
EndIf

' outputs:
' three
```
<br/>

### `Method AddFirst:TLink( value:Object )`

Add an object to the start of the list

#### Returns
A link object


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the begin of the list
list.AddFirst("one")
list.AddFirst("two")
list.AddFirst("three")

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

### `Method AddLast:TLink( value:Object )`

Add an object to the end of the list

#### Returns
A link object


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

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

### `Method First:Object()`

Returns the first object in the list

Returns Null if the list is empty.


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")


' request the first element in the list and cast it (back) to a string
' cast is needed as the function returns "object" rather than "string"
Local value:String = String(list.First())

Print value

' outputs:
' one
```
<br/>

### `Method Last:Object()`

Returns the last object in the list

Returns Null if the list is empty.


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")


' request the last element in the list and cast it (back) to a string
' cast is needed as the function returns "object" rather than "string"
Local value:String = String(list.Last())

Print value

' outputs:
' three
```
<br/>

### `Method RemoveFirst:Object()`

Removes and returns the first object in the list.

Returns Null if the list is empty.


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the begin of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' remove the first element of the list
list.RemoveFirst()

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' two
' three
```
<br/>

### `Method RemoveLast:Object()`

Removes and returns the last object in the list.

Returns Null if the list is empty.


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the begin of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' remove the last element of the list
list.RemoveLast()

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' two
```
<br/>

### `Method FirstLink:TLink()`

Returns the first link the list or null if the list is empty.

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' find first link 
Local link:TLink = list.FirstLink()

' remove the element from the list by utilizing the link
list.RemoveLink(link)

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' two
' three
```
<br/>

### `Method LastLink:TLink()`

Returns the last link the list or null if the list is empty.

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' find last link 
Local link:TLink = list.LastLink()

' remove the element from the list by utilizing the link
list.RemoveLink(link)

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' two
```
<br/>

### `Method InsertBeforeLink:TLink( value:Object,succ:TLink )`

Inserts an object before the specified list link.

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' find the link we want to insert something before or after, here for "two"
Local link:TLink = list.FindLink("two")

'insert a new element before the link
list.InsertBeforeLink("before two", link)

'insert a new element after the link
list.InsertAfterLink("after two", link)

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' before two
' two
' after two
' three
```
<br/>

### `Method InsertAfterLink:TLink( value:Object,pred:TLink )`

Inserts an object after the specified list link.

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' find the link we want to insert something before or after, here for "two"
Local link:TLink = list.FindLink("two")

'insert a new element before the link
list.InsertBeforeLink("before two", link)

'insert a new element after the link
list.InsertAfterLink("after two", link)

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' before two
' two
' after two
' three
```
<br/>

### `Method FindLink:TLink( value:Object )`

Returns the first link in the list with the given value, or null if none found.

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' find the TLink instance of the element/object "two" 
Local link:TLink = list.FindLink("two")

' remove the element from the list by utilizing the link
list.RemoveLink(link)

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' three
```
<br/>

### `Method ValueAtIndex:Object( index )`

Returns the value of the link at the given index.

Throws an exception if the index is out of range (must be 0..list.Count()-1 inclusive).


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' find the element at the given index and cast it (back) to a string
' cast is needed as the function returns "object" rather than "string"
Local value:String = String(list.ValueAtIndex(1))

Print value 

' outputs:
' two
```
<br/>

### `Method Count()`

Count list length

#### Returns
The numbers of objects in <b>list</b>.


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' print amount of elements in the list
Print list.Count()

' outputs:
' 3
```
<br/>

### `Method Remove( value:Object )`

Remove an object from a linked list

Remove scans a list for the specified value and removes its link.


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the begin of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' remove the string "two"
list.Remove("two")

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' three
```
<br/>

### `Method Swap( list:TList )`

Swap contents with the list specified.

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")


' create a second list
Local list2:TList = New TList
list2.AddLast("four")
list2.AddLast("five")
list2.AddLast("six")


' swap the lists
list.Swap(list2)

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

### `Method Copy:TList()`

Creates an identical copy of the list.

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' copy the list elements into another one
Local list2:TList = list.Copy()

' enumerate all the strings in the first list
For Local a:String = EachIn list
	Print a
Next

' enumerate all the strings in the second list
For Local a:String = EachIn list2
	Print a
Next

' outputs:
' one
' two
' three
' one
' two
' three
```
<br/>

### `Method Reverse()`

Reverse the order of the list.

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' reverse the list
list.Reverse()

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

### `Method Reversed:TList()`

Creates a new list that is the reversed version of this list.

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' create another list containing the elements in reversed order
Local list2:TList = list.Reversed()

' enumerate all the strings in the first list
For Local a:String = EachIn list
	Print a
Next

' enumerate all the strings in the second list
For Local a:String = EachIn list2
	Print a
Next

' outputs:
' one
' two
' three
' three
' two
' one
```
<br/>

### `Method Sort( ascending=True,compareFunc( o1:Object,o2:Object ) )`

Sort a list in either ascending (default) or decending order.

User types should implement a Compare method in order to be sorted.


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("short")
list.AddLast("longer")
list.AddLast("the longest")


' DEFAULT SORT
' sort them (in this case this leads to an alphabetic sort)
' second parameter sets sort to ascending or not
list.Sort(True)

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
list.Sort(True, MyCompare)

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

### `Method ToArray:Object[]()`

convert a list to an array

#### Returns
An array of objects


#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' create an array out of the list elements
Local objects:Object[] = list.ToArray() 

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

### `Method RemoveLink( link:TLink )`

Remove an object from a linked list.

#### Example
```blitzmax
SuperStrict

Framework Brl.LinkedList
Import Brl.StandardIO

' create a list to hold some objects
Local list:TList = New TList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' find the link of the element/object "two" 
Local link:TLink = list.FindLink("two")

' remove the element from the list by utilizing the link
list.RemoveLink(link)

' enumerate all the strings in the list
For Local a:String = EachIn list
	Print a
Next

' outputs:
' one
' three
```
<br/>

## Functions

### `Function FromArray:TList( arr:Object[] )`

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
Local list:TList = TList.FromArray(objects) 

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

