---
id: tstringbuilder
title: TStringBuilder
sidebar_label: TStringBuilder
---


A string builder provides functionality to efficiently insert, replace, remove, append and reverse.
It is an order of magnitude faster to append Strings to a TStringBuilder than it is to append Strings to Strings.


## Methods

### `Method Length:Int()`

Returns the length of the string the string builder would create.


### `Method Capacity:Int()`

Returns the total number of characters that the string builder can accommodate before needing to grow.


### `Method SetLength(length:Int)`

Sets the length of the string builder.

If the length is less than the current length, the current text will be truncated. Otherwise,
the capacity will be increased as necessary, although the actual length of text will remain the same.



### `Method Append:TStringBuilder(value:String)`

Appends the text onto the string builder.


### `Method AppendByte:TStringBuilder(value:Byte)`

Appends a byte value to the string builder.


### `Method AppendObject:TStringBuilder(obj:Object)`

Appends an object onto the string builder.

This generally calls the object's ToString() method.
TStringBuilder objects are simply mem-copied.



### `Method AppendCString:TStringBuilder(chars:Byte Ptr)`

Appends a null-terminated C string onto the string builder.


### `Method AppendDouble:TStringBuilder(value:Double)`

Appends a double value to the string builder.


### `Method AppendFloat:TStringBuilder(value:Float)`

Appends a float value to the string builder.


### `Method AppendInt:TStringBuilder(value:Int)`

Appends a int value to the string builder.


### `Method AppendLong:TStringBuilder(value:Long)`

Appends a Long value to the string builder.


### `Method AppendNewLine:TStringBuilder()`

Appends the new line string to the string builder.

The new line string can be altered using [SetNewLineText](../../brl/brl.stringbuilder/#method-setnewlinetext-tstringbuilder-newline-string). This might be used to force the output to always use Unix line endings even when on Windows.



### `Method AppendNull:TStringBuilder()`

Appends the text representing null to the string builder.


### `Method AppendShort:TStringBuilder(value:Short)`

Appends a Short value to the string builder.


### `Method AppendUInt:TStringBuilder(value:UInt)`

Appends a UInt value to the string builder.


### `Method AppendULong:TStringBuilder(value:ULong)`

Appends a Ulong value to the string builder.


### `Method AppendSizet:TStringBuilder(value:Size_T)`

Appends a Size_T value to the string builder.


### `Method AppendUTF8String:TStringBuilder(chars:Byte Ptr)`

Appends a null-terminated UTF-8 string onto the string builder.


### `Method AppendShorts:TStringBuilder(shorts:Short Ptr, length:Int)`

Appends an array of shorts onto the string builder.


### `Method Find:Int(subString:String, startIndex:Int = 0)`

Finds first occurance of a sub string.

#### Returns
-1 if <b>subString</b> not found.



### `Method FindLast:Int(subString:String, startIndex:Int = 0)`

Finds last occurance of a sub string.

#### Returns
-1 if <b>subString</b> not found.



### `Method Left:String(length:Int)`

Extracts the leftmost characters from the string builder.

This method extracts the left <b>length</b> characters from the builder. If this many characters are not available, the whole builder is returned.
Thus the returned string may be shorter than the length requested.



### `Method Trim:TStringBuilder()`

Removes leading and trailing non-printable characters from the string builder.


### `Method Replace:TStringBuilder(subString:String, withString:String)`

Replaces all occurances of <b>subString</b> with <b>withString</b>.


### `Method StartsWith:Int(subString:String)`

Returns true if string starts with <b>subString</b>.


### `Method EndsWith:Int(subString:String)`

Returns true if string ends with <b>subString</b>.


### `Method CharAt:Int(index:Int)`

Returns the char value in the buffer at the specified index.

The first char value is at index 0, the next at index 1, and so on, as in array indexing.
<b>index</b> must be greater than or equal to 0, and less than the length of the buffer.



### `Method Contains:Int(subString:String)`

Returns true if string contains <b>subString</b>.


### `Method Join:TStringBuilder(bits:String[])`

Joins <b>bits</b> together by inserting this string builder between each bit.

#### Returns
A new TStringBuilder object.



### `Method ToLower:TStringBuilder()`

Converts all of the characters in the buffer to lower case.


### `Method ToUpper:TStringBuilder()`

Converts all of the characters in the buffer to upper case.


### `Method Remove:TStringBuilder(startIndex:Int, endIndex:Int)`

Removes a range of characters from the string builder.

<b>startIndex</b> is the first character to remove. <b>endIndex</b> is the index after the last character to remove.



### `Method RemoveCharAt:TStringBuilder(index:Int)`

Removes the character at the specified position in the buffer.

The buffer is shortened by one character.



### `Method Insert:TStringBuilder(offset:Int, value:String)`

Inserts text into the string builder at the specified offset.


### `Method Reverse:TStringBuilder()`

Reverses the characters of the string builder.


### `Method Right:String(length:Int)`

Extracts the rightmost characters from the string builder.

This method extracts the right <b>length</b> characters from the builder. If this many characters are not available, the whole builder is returned.
Thus the returned string may be shorter than the length requested.



### `Method SetCharAt(index:Int, char:Int)`

The character at the specified index is set to <b>char</b>.

<b>index</b> must be greater than or equal to 0, and less than the length of the buffer.



### `Method SetNewLineText:TStringBuilder(newLine:String)`

Sets the text to be appended when a new line is added.


### `Method SetNullText:TStringBuilder(nullText:String)`

Sets the text to be appended when null is added.


### `Method Substring:String(beginIndex:Int, endIndex:Int = 0)`

Returns a substring of the string builder given the specified indexes.

<b>beginIndex</b> is the first character of the substring.
<b>endIndex</b> is the index after the last character of the substring. If <b>endIndex</b> is zero,
will return everything from <b>beginIndex</b> until the end of the string builder.



### `Method ToString:String()`

Converts the string builder to a String.


## Functions

### `Function Create:TStringBuilder(Text:String)`

Constructs a string builder initialized to the contents of the specified string.


