---
id: arrays
title: Arrays
sidebar_label: Arrays
---

Arrays are used to store sequences of variables, or elements. 

There are two kinds of array in BlitzMax:
* **dynamic arrays** are multi-dimensional, managed objects.
* **static arrays** are of a fixed size and a single dimension. Its length is specified as a  constant value as part of the declaration.
Static arrays are allocated on the stack and not managed by the garbage collector. 

An element within an array is accessed by indexing the
array with an integer offset.

The general syntax for indexing an array is:

```blitzmax
ArrayExpression [ index1 , index2 etc... ]
```

# Dynamic Arrays

## Creating Arrays

The most common way to create a dynamic array is when declaring a variable.

```blitzmax
Local int_array:Int[10]
```

This will initialize the `int_array` variable with a 10 element array. You can declare an **empty** array by using []:

```
Local int_array:Int[]
```

An empty array is identical to an array with 0 elements.

Arrays may also be created 'on the fly' using the syntax:

```blitzmax
New [ Dimension1 , Dimension2 etc... ]
```

This returns an array of the specified dimension(s) with each element initialized to [Null]. For example:

```blitzmax
Local int_array:Int[]
int_array = New Int[10]
```

**Auto arrays** may be created using the syntax:

```blitzmax
[ Element1 , Element2 etc... ]
```

This returns a one dimensional array containing the specified elements, for example:

```blitzmax
Local int_array:Int[] = [1,2,3,4,5]
```

Each element of an auto array must have exactly the same type. If necessary, you can use type conversions to enforce this.

Here are some examples of using array methods:

```blitzmax
Strict

Local arr:String[] = ["some", "random", "strings", "in", "a", "string", "array"]

arr.Sort        ' sort ascending
Print "Array in ascending order..."
For Local t:String=EachIn arr
    Print t
Next

arr.Sort False  'sort descending
Print "Array in descending order..."
For Local t:String = EachIn arr
    Print t
Next

Local arr2[10,20,30,40]

'Dump array dimensions
For Local i = EachIn arr2.Dimensions()
    Print i
Next
```

## Copying an Array

Since arrays are objects, the following code does not actually copy the array, but rather creates another variable
that references the same object.
```blitzmax
Local arr:Int[] = [1,2,3]
Local arr2:Int[] = arr
```

To copy an array, you must use slices. The syntax for slicing is `array[from..to]`. Both from and to may
be omitted; they default to 0 and the last index, respectively. Copying the array is simple:
```blitzmax
Local arr2:Int[] = arr[..]
```

Resizing an array using slices:
```blitzmax
Local myArray[10] ' Create an array with 10 elements (0..9)
myArray = myArray[..20] ' Increase number of elements in the array to 20
myArray = myArray[..5] ' Take the first 5 elements
```
Note that you cannot use slices with multi-dimensional arrays.

## Resizing an Array of Arrays

> Note: this is a slightly advanced topic which may confuse beginners.

Although you cannot resize normal multi-dimensional arrays, you can resize an array of arrays
(that being a 1D array where each element is a 1D array).

You first need to resize the main array and then loop through each element in it and resize the arrays that they contain.

Example:
```blitzmax
Local x :Int[][] ' Create our array of arrays

x = x[ .. 5 ] ' resize the main array to have 5 elements

' loop through each new element in this array
' and resize the arrays that they contain
For l = 0 Until Len( X )
	x[ l ] = X[ l ][ .. 5 ]
Next
```

## Multi-Dimensional Arrays

To create an array with more than one dimension, you can specify indexes separated by commas:
```blitzmax
Local int_array1 : Int[4,4] 'create a 4x4 array
Local int_array2 : Int[3,3,3] 'create a 3x3x3 array
You can then refer to them like so:

int_array1[0,0] = 100
int_array2[2,1,0] = 1000
```

## Multi-Dimensional Auto Arrays

> Note: this is a slightly more advanced topic and as such, beginners may find it confusing.

It is not currently possible to create normal multi-dimensional arrays AND auto-initialize them.

You can however cheat a little:
```blitzmax
Local string_array:String[][] = [["Bob","Kate","Percy"],["Cecil","Edmund","Elizabeth"]]

Print string_array[0][2] 'this will print Percy
Print string_array[1][0] 'this will print Cecil
```

What the above actually does is create an array of type String Array. If you were to attempt to refer to
it in the conventional manner it would cause an error (Incorrect number of array dimensions).

```blitzmax
Local string_array:String[][] = [["Bob","Kate","Percy"],["Cecil","Edmund","Elizabeth"]]
Print string_array[0,0] 'this line would cause an error
```

## Array Methods

Arrays provide a Sort method, a Dimensions method and a read-only length field. In addition, there are
three other fields which you may find of some use.

### `Method Sort(ascending:Int = True)`

Takes an optional ascending parameter that defaults to true. Here is an example of sorting an array:

```blitzmax
Strict
Local arr:String[]=["some","random","strings","in","a","string","array"]
arr.Sort        'sort ascending
Print "Array in ascending order..."
For Local t:String=EachIn arr
       Print t
Next
arr.Sort False  'sort descending
Print "Array in descending order..."
For Local t:String=EachIn arr
       Print t
Next
```

### `Method Dimensions:Int[]()`

Returns an int array with array dimensions.

So for example `Int[10,5].Dimensions()` would return `Int[2]` equal to the auto array `[10,5]`.

## Array Fields

### `Field Length:Int`

Returns an Int value indicating the size of the array.

### `Field numberOfDimensions:Int`

Returns an Int value indicating the number of dimensions in the array.

### `Field elementTypeEncoding:Byte Ptr`

Byte Ptr to a value representing the data type of the array elements.

Type encoding will return one of the following: TYPE_BYTE, TYPE_SHORT, TYPE_INT, TYPE_UINT, TYPE_FLOAT,
TYPE_LONG, TYPE_ULONG, TYPE_DOUBLE, TYPE_SIZET, TYPE_STRING, TYPE_OBJECT, TYPE_ARRAY, TYPE_POINTER.

### `Field sizeMinusHeader:Int`

Returns an Int value, the number of elements * the size of the element type.

Example:
```blitzmax
Local a:Int[2,2,2]
Print a.numberOfDimensions ' Prints 3
Print a.elementTypeEncoding[0] ' Prints 105 if Int, 102 if Float, 36 if String
Print a.sizeMinusHeader
```

## Iterating through Array Elements

If you want to loop through each element of an array you can use a [For]/[EachIn] loop:
```blitzmax
' create a 10 element array and pre-initialize the values
Global myArray:Int[] = [0,1,2,3,4,5,6,7,8,9]

For Local i:Int = EachIn myArray
	' print the int contained in each array element
	Print i
Next
```

This is all very well, but what if you want to only loop through a portion of them? Say for instance,
the last five. Well for that, you need a slice like so:

```blitzmax
' create a 10 element array and pre-initialize the values
Global myArray:Int[] = [0,1,2,3,4,5,6,7,8,9]

' loop through each element starting with the sixth element (0 based array index)
For Local i:Int = EachIn myArray[5..]
	' print the int contained in each array element
	Print i
Next
```

# Static Arrays

Because a static array is allocated on the stack, their use is more suited to smaller array sizes. Creating static arrays of significant sizes could easily fill the stack and crash the application.

Static arrays are one dimensional.

A static array declaration requires the [StaticArray] property and a fixed length:

```blitzmax
Local StaticArray int_array:Int[10]
```
This will initialize the `int_array` variable with a 10 element fixed-length array.

> Note that a static array **must** declare a length at creation using a constant value.

Static array variables cannot be assigned another static array. Only the contents of the array may be changed.

For example, the following code will fail to compile :
```blitzmax
Local StaticArray a1:Float[5]
Local StaticArray a2:Float[5]

a2 = a1 ' <-- cannot assign a static array
```

When provided as an argument to a function or method, a static array must be declared using the standard notation : 
```blitzmax
Function myFunc(StaticArray an_array:Int[10])
...
End Function
```
Attempting to pass a static array of a different length will result in an error.

When a static array is passed into a function or method, any changes made to the contents of the  array will be reflected in the original array. For example:
```blitzmax
SuperStrict

Framework BRL.StandardIO

Local StaticArray arr:Int[10]
process(arr)
For Local i:Int = 0 Until arr.Length
    Print i + " = " + arr[i]
Next 

Function process(StaticArray arr:Int[10])
    For Local i:Int = 0 Until arr.Length
        arr[i] = i
    Next
End Function
```
will print
```
0 = 0
1 = 1
2 = 2
3 = 3
4 = 4
5 = 5
6 = 6
7 = 7
8 = 8
9 = 9
```

## Array Fields

### `Field Length:Int`

Returns an Int value indicating the size of the array.


[Null]: ../../api/brl/brl.blitz/#null
[For]: ../../api/brl/brl.blitz/#for
[Eachin]: ../../api/brl/brl.blitz/#eachin
[New]: ../../api/brl/brl.blitz/#new
[StaticArray]: ../../api/brl/brl.blitz/#staticarray
