---
id: tjsonarray
title: TJSONArray
sidebar_label: TJSONArray
---

A JSON array is an ordered collection of other JSON values.


## Methods

### `Method Create:TJSONArray()`

Creates a new TJSONArray.

<br/>

### `Method Size:Int()`

Returns the number of elements in array, or 0 if array is NULL

<br/>

### `Method Get:TJSON(index:Int)`

Returns the element in array at position index.

The valid range for index is from 0 to the return value of Size() minus 1. If index is out of range, NULL is returned.


<br/>

### `Method Set:Int(index:Int, value:TJSON)`

Replaces the element in array at position index with value.

#### Returns
0 on success and -1 on error.


<br/>

### `Method Append:Int(value:TJSON)`

Appends value to the end of array, growing the size of array by 1.

#### Returns
0 on success and -1 on error.


<br/>

### `Method Insert:Int(index:Int, value:TJSON)`

Inserts <b>value</b> to array at position <b>index</b>, shifting the elements at index and after it one position towards the end of the array.

#### Returns
0 on success and -1 on error.


<br/>

### `Method Clear:Int()`

Removes all elements from array.

#### Returns
0 on sucess and -1 on error.


<br/>

### `Method Remove:Int(index:Int)`

Removes the element in array at position index, shifting the elements after index one position towards the start of the array.

#### Returns
0 on success and -1 on error.


<br/>

