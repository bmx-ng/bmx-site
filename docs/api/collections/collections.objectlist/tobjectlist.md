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


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

### `Method IsEmpty:Int()`

Checks if the list is empty.

#### Returns
[True](../../../brl/brl.blitz/#true) if the list is empty, else [False](../../../brl/brl.blitz/#false)


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

### `Method AddFirst(value:Object)`

Adds an object to the start of the list

#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

### `Method AddLast(value:Object)`

Adds an object to the end of the list

#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

### `Method Contains:Int(obj:Object)`

Checks if the list contains a value

#### Returns
[True](../../../brl/brl.blitz/#true) if the list contains <b>obj</b>, else [False](../../../brl/brl.blitz/#false)


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

### `Method First:Object()`

Returns the first object in the list

Returns [Null](../../../brl/brl.blitz/#null) if the list is empty.


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList


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

Returns [Null](../../../brl/brl.blitz/#null) if the list is empty.


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

Returns [Null](../../../brl/brl.blitz/#null) if the list is empty.


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

Returns [Null](../../../brl/brl.blitz/#null) if the list is empty.


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

### `Method ValueAtIndex:Object(index:Int)`

Returns the object at the given index.

Throws an exception if the index is out of range (must be 0..list.Count()-1 inclusive).


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

### `Method Count:Int()`

Counts the list length

#### Returns
The numbers of objects in the list.


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList


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

### `Method Remove:Int(value:Object, removeAll:Int = False, compactOnRemove:Int = True)`

Removes an object from the list.

Remove scans the list for the specified value and removes it.
By default, only the first found object is removed.	Enabling <b>removeAll</b> will result in all instances of <b>value</b> being removed from the list.
By default, the list is compacted on each remove. This can be inefficient if removing several objects from a list. Disabling <b>compactOnRemove</b>
will skip compaction until either [Compact](../../../collections/collections.objectlist/tobjectlist/#method-compact)() is called, or the current enumerator completes, or a different list method is called.
This mechanism allows for removal of elements during an enumeration.


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

### `Method Compact()`

Compacts the list.

Use with [Remove](../../../collections/collections.objectlist/tobjectlist/#method-removeintvalueobject-removeallint-false-compactonremoveint-true)() and <b>compactOnRemove</b> = [False](../../../brl/brl.blitz/#false).


<br/>

### `Method Swap(list:TObjectList)`

Swaps content of two lists while keeping list references intact.

#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")


' create a second object list
Local list2:TObjectList = New TObjectList
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

### `Method Copy:TObjectList()`

Creates an identical copy of the list.

#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' copy the list elements into another one
Local list2:TObjectList = list.Copy()

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

Reverses the order of the list.

#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

### `Method Reversed:TObjectList()`

Creates a new list that is the reversed version of this list.

#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

' add some string objects to the end of the list
list.AddLast("one")
list.AddLast("two")
list.AddLast("three")

' create another object list containing the elements in reversed order
Local list2:TObjectList = list.Reversed()

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

### `Method ToArray:Object[]()`

Converts the list to an array

#### Returns
An array of objects


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

### `Method Sort(ascending:Int=True, compareFunc:Int( o1:Object,o2:Object ) )`

Sort the list in either ascending (default) or decending order.

User types should implement a Compare method in order to be sorted.


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an object list to hold some objects
Local list:TObjectList = New TObjectList

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

## Functions

### `Function FromArray:TObjectList(arr:Object[])`

Creates a list from an array

#### Returns
A new object list


#### Example
```blitzmax
SuperStrict

Framework Collections.ObjectList
Import Brl.StandardIO

' create an array holding some objects
Local objects:Object[] = ["one", "two", "three"]

' create a object list out of the elements
Local list:TObjectList = TObjectList.FromArray(objects) 

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

