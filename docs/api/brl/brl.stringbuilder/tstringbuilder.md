---
id: tstringbuilder
title: TStringBuilder
sidebar_label: TStringBuilder
---

A modifiable String.


A string builder provides functionality to efficiently insert, replace, remove, append and reverse.
It is an order of magnitude faster to append Strings to a TStringBuilder than it is to append Strings to Strings.


#### Example
```blitzmax
'
' Append some strings, with basic timing comparison.
'
SuperStrict

Framework BRl.StringBuilder
Import brl.standardio

Const iterations:Int = 20000
Local ms:Int, nms:Int

Local sb:TStringBuilder = New TStringBuilder

Print "Appending a sequence of " + iterations + " numbers.."

Local s:String
ms = MilliSecs()
For Local i:Int = 0 Until iterations
	s :+ i + " "
Next
nms = MilliSecs()
Print "String concat : " + (nms - ms) + " ms"
Print "String length = " + s.Length

Print ""

ms = MilliSecs()
For Local i:Int = 0 Until iterations
	sb.Append(i).Append(" ")
Next
nms = MilliSecs()

Print "StringBuilder concat : " + (nms - ms) + " ms"

Print "StringBuilder String length = " + sb.Length()
Print "StringBuilder capacity = " + sb.Capacity()
```
## Constructors

### `Method New()`

Constructs a [TStringBuilder](../../../brl/brl.stringbuilder/tstringbuilder) with the default capacity.

<br/>

### `Method New(initialCapacity:Int)`

Constructs a [TStringBuilder](../../../brl/brl.stringbuilder/tstringbuilder) with a specified <b>initialCapacity</b>.

<br/>

### `Method New(Text:String)`

Constructs a [TStringBuilder](../../../brl/brl.stringbuilder/tstringbuilder) initialized to the contents of <b>Text</b>.

<br/>

## Operators

### `Method Operator[]:Int(index:Int)`

Returns the char value in the buffer at the specified index.

The first char value is at index 0, the next at index 1, and so on, as in array indexing.
<b>index</b> must be greater than or equal to 0, and less than the length of the buffer.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

Print Chr(sb[3])
Print Chr(sb[6])
```
<br/>

### `Method Operator []= (index:Int, char:Int)`

The character at the specified index is set to <b>char</b>.

<b>index</b> must be greater than or equal to 0, and less than the length of the buffer.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

sb[3] = Asc("p")
sb[4] = Asc(",")

Print sb.ToString()
```
<br/>

## Methods

### `Method Length:Int()`

Returns the length of the string the string builder would create.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

Print sb.Length() ' 12
```
<br/>

### `Method Capacity:Int()`

Returns the total number of characters that the string builder can accommodate before needing to grow.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

Print sb.Capacity() ' 16
```
<br/>

### `Method SetLength(length:Int)`

Sets the length of the string builder.

If the length is less than the current length, the current text will be truncated. Otherwise,
the capacity will be increased as necessary, although the actual length of text will remain the same.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

sb.SetLength(5)

Print sb.ToString()
```
<br/>

### `Method Append:TStringBuilder(value:String)`

Appends a [String](../../../brl/brl.blitz/#string) onto the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

sb.Append("Hello")
sb.Append(" ")
sb.Append("World")

Print sb.ToString()
```
<br/>

### `Method AppendByte:TStringBuilder(value:Byte)`

Appends a [Byte](../../../brl/brl.blitz/#byte) value to the string builder.

<br/>

### `Method Append:TStringBuilder(value:Byte)`

Appends a [Byte](../../../brl/brl.blitz/#byte) value onto the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

Local bytes:Byte[] = [0, 1, 2, 3, 4, 5]

For Local b:Byte = EachIn bytes
	sb.Append(b).Append(",")
Next

Print sb.ToString()
```
<br/>

### `Method AppendObject:TStringBuilder(obj:Object)`

Appends an object onto the string builder.

This generally calls the object's ToString() method.
TStringBuilder objects are simply mem-copied.


<br/>

### `Method Append:TStringBuilder(obj:Object)`

Appends an object onto the string builder.

This generally calls the object's ToString() method.
TStringBuilder objects are simply mem-copied.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

Local t:TMyType = New TMyType

sb.Append(t)

Print sb.ToString()

Type TMyType

	Method ToString:String()
		Return "Hello World!"
	End Method

End Type
```
<br/>

### `Method Append:TStringBuilder(sb:TStringBuilder)`

Appends a [TStringBuilder](../../../brl/brl.stringbuilder/tstringbuilder) onto the string builder.

<br/>

### `Method AppendCString:TStringBuilder(chars:Byte Ptr)`

Appends a null-terminated C string onto the string builder.

<br/>

### `Method AppendDouble:TStringBuilder(value:Double)`

Appends a [Double](../../../brl/brl.blitz/#double) value to the string builder.

<br/>

### `Method Append:TStringBuilder(value:Double)`

Appends a [Double](../../../brl/brl.blitz/#double) value to the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

Local x:Double = 35.7
Local y:Double = 40.1

sb.Append(x)
sb.Append(", ")
sb.Append(y)

Print sb.ToString()
```
<br/>

### `Method AppendFloat:TStringBuilder(value:Float)`

Appends a [Float](../../../brl/brl.blitz/#float) value to the string builder.

<br/>

### `Method Append:TStringBuilder(value:Float)`

Appends a [Float](../../../brl/brl.blitz/#float) value to the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

Local x:Float = 35.7
Local y:Float = 40.1

sb.Append(x)
sb.Append(", ")
sb.Append(y)

Print sb.ToString()
```
<br/>

### `Method AppendInt:TStringBuilder(value:Int)`

Appends an [Int](../../../brl/brl.blitz/#int) value to the string builder.

<br/>

### `Method Append:TStringBuilder(value:Int)`

Appends an [Int](../../../brl/brl.blitz/#int) value to the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

Local a:Int = 5
Local b:Int = 6

sb.Append(a).Append(" + ").Append(b)
sb.Append(" = ").Append(a + b)

Print sb.ToString()
```
<br/>

### `Method AppendLong:TStringBuilder(value:Long)`

Appends a [Long](../../../brl/brl.blitz/#long) value to the string builder.

<br/>

### `Method Append:TStringBuilder(value:Long)`

Appends a [Long](../../../brl/brl.blitz/#long) value to the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

Local num:Long = 100000000:Long * 9876
sb.Append(num).AppendNewLine()
sb.Append(num * 99)

Print sb.ToString()
```
<br/>

### `Method AppendNewLine:TStringBuilder()`

Appends the new line string to the string builder.

The new line string can be altered using [SetNewLineText](../../../brl/brl.stringbuilder/tstringbuilder/#method-setnewlinetext-tstringbuildernewline-string). This might be used to force the output to always use Unix line endings even when on Windows.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

sb.Append("Hello")
sb.AppendNewLine()
sb.AppendNewLine()
sb.Append("World")

Print sb.ToString()
```
<br/>

### `Method AppendNull:TStringBuilder()`

Appends the text representing null to the string builder.

<br/>

### `Method AppendShort:TStringBuilder(value:Short)`

Appends a Short value to the string builder.

<br/>

### `Method Append:TStringBuilder(value:Short)`

Appends a [Short](../../../brl/brl.blitz/#short) value to the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

Local x:Short = 100
Local y:Short = 55

sb.Append(x).Append(", ").Append(y)

Print sb.ToString()
```
<br/>

### `Method AppendUInt:TStringBuilder(value:UInt)`

Appends a [UInt](../../../brl/brl.blitz/#uint) value to the string builder.

<br/>

### `Method Append:TStringBuilder(value:UInt)`

Appends a [UInt](../../../brl/brl.blitz/#uint) value to the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

Local values:UInt[] = [2, 4, 6, 8, 10]

For Local value:UInt = EachIn values
	sb.Append(value).AppendNewLine()
Next

Print sb.ToString()
```
<br/>

### `Method AppendULong:TStringBuilder(value:ULong)`

Appends a [Ulong](../../../brl/brl.blitz/#ulong) value to the string builder.

<br/>

### `Method Append:TStringBuilder(value:ULong)`

Appends a [Ulong](../../../brl/brl.blitz/#ulong) value to the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

Local a:ULong = 900
Local b:ULong = 7400

sb.Append(a).Append(", ").Append(b)

Print sb.ToString()
```
<br/>

### `Method AppendSizet:TStringBuilder(value:Size_T)`

Appends a [Size_T](../../../brl/brl.blitz/#size-t) value to the string builder.

<br/>

### `Method Append:TStringBuilder(value:Size_T)`

Appends a [Size_T](../../../brl/brl.blitz/#size-t) value to the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

Local s:Size_T = 32684

sb.Append(s).Append(" ^ 2 = ")
sb.Append(Size_T(s ^ 2))

Print sb.ToString()
```
<br/>

### `Method AppendUTF8String:TStringBuilder(chars:Byte Ptr)`

Appends a null-terminated UTF-8 string onto the string builder.

<br/>

### `Method AppendShorts:TStringBuilder(shorts:Short Ptr, length:Int)`

Appends an array of shorts onto the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder

Local shorts:Short[] = [65, 66, 67, 68, 69, 70]

sb.AppendShorts(shorts, shorts.length)

Print sb.ToString()
```
<br/>

### `Method Find:Int(subString:String, startIndex:Int = 0)`

Finds first occurance of a sub string.

#### Returns
-1 if <b>subString</b> not found.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("one two three four five six seven")

Print sb.Find("w") ' 5
Print sb.Find("z") ' -1
Print sb.Find("e", 4) ' 11
```
<br/>

### `Method FindLast:Int(subString:String, startIndex:Int = 0)`

Finds last occurance of a sub string.

#### Returns
-1 if <b>subString</b> not found.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("one two three four five six seven")

Print sb.FindLast("w") ' 5
Print sb.FindLast("z") ' -1
Print sb.FindLast("w", 30) ' -1
```
<br/>

### `Method Left:String(length:Int)`

Extracts the leftmost characters from the string builder.

This method extracts the left <b>length</b> characters from the builder. If this many characters are not available, the whole builder is returned.
Thus the returned string may be shorter than the length requested.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

Print sb.Left(4)
```
<br/>

### `Method Trim:TStringBuilder()`

Removes leading and trailing non-printable characters from the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("  Hello World!tt ")

sb.Trim()

Print sb.ToString()
```
<br/>

### `Method Replace:TStringBuilder(subString:String, withString:String)`

Replaces all occurances of <b>subString</b> with <b>withString</b>.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

sb.Replace("o", "0")

Print sb.ToString()
```
<br/>

### `Method StartsWith:Int(subString:String)`

Returns true if string starts with <b>subString</b>.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

Print sb.StartsWith("he")
Print sb.StartsWith("He")
```
<br/>

### `Method EndsWith:Int(subString:String)`

Returns true if string ends with <b>subString</b>.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

Print sb.EndsWith("z")
Print sb.EndsWith("d!")
```
<br/>

### `Method CharAt:Int(index:Int)`

Returns the char value in the buffer at the specified index.

The first char value is at index 0, the next at index 1, and so on, as in array indexing.
<b>index</b> must be greater than or equal to 0, and less than the length of the buffer.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

Print Chr(sb.CharAt(3)) ' l
Print Chr(sb.CharAt(6)) ' W
```
<br/>

### `Method Contains:Int(subString:String)`

Returns true if string contains <b>subString</b>.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

Print sb.Contains("z")
Print sb.Contains("Wo")
```
<br/>

### `Method Join:TStringBuilder(bits:String[])`

Joins <b>bits</b> together by inserting this string builder between each bit.

#### Returns
A new TStringBuilder object.


<br/>

### `Method ToLower:TStringBuilder()`

Converts all of the characters in the buffer to lower case.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

Print sb.ToLower().ToString()
```
<br/>

### `Method ToUpper:TStringBuilder()`

Converts all of the characters in the buffer to upper case.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

Print sb.ToUpper().ToString()
```
<br/>

### `Method Remove:TStringBuilder(startIndex:Int, endIndex:Int)`

Removes a range of characters from the string builder.

<b>startIndex</b> is the first character to remove. <b>endIndex</b> is the index after the last character to remove.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

sb.Remove(2, 9)

Print sb.ToString()
```
<br/>

### `Method RemoveCharAt:TStringBuilder(index:Int)`

Removes the character at the specified position in the buffer.

The buffer is shortened by one character.


<br/>

### `Method Insert:TStringBuilder(offset:Int, value:String)`

Inserts text into the string builder at the specified offset.

<br/>

### `Method Reverse:TStringBuilder()`

Reverses the characters of the string builder.

#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

sb.Reverse()

Print sb.ToString()
```
<br/>

### `Method Right:String(length:Int)`

Extracts the rightmost characters from the string builder.

This method extracts the right <b>length</b> characters from the builder. If this many characters are not available, the whole builder is returned.
Thus the returned string may be shorter than the length requested.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

Print sb.Right(4)
```
<br/>

### `Method SetCharAt(index:Int, char:Int)`

The character at the specified index is set to <b>char</b>.

<b>index</b> must be greater than or equal to 0, and less than the length of the buffer.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("Hello World!")

sb.SetCharAt(3, Asc("p"))
sb.SetCharAt(4, Asc(","))

Print sb.ToString()
```
<br/>

### `Method SetNewLineText:TStringBuilder(newLine:String)`

Sets the text to be appended when a new line is added.

<br/>

### `Method SetNullText:TStringBuilder(nullText:String)`

Sets the text to be appended when null is added.

<br/>

### `Method Substring:String(beginIndex:Int, endIndex:Int = 0)`

Returns a substring of the string builder given the specified indexes.

<b>beginIndex</b> is the first character of the substring.
<b>endIndex</b> is the index after the last character of the substring. If <b>endIndex</b> is zero,
will return everything from <b>beginIndex</b> until the end of the string builder.


<br/>

### `Method Split:TSplitBuffer(separator:String)`

Creates a split buffer using the specified separator.

The [TSplitBuffer](../../../brl/brl.stringbuilder/tsplitbuffer) can be used to iterate over the split text.


#### Example
```blitzmax
SuperStrict

Framework BRL.StringBuilder
Import brl.standardio

Local sb:TStringBuilder = New TStringBuilder("1,2,3,4,5,6,7,8,9,10")

For Local s:String = EachIn sb.Split(",")
	Print s
Next
```
<br/>

### `Method ToString:String() Override`

Converts the string builder to a String.

<br/>

## Functions

### `Function Create:TStringBuilder(Text:String)`

Constructs a [TStringBuilder](../../../brl/brl.stringbuilder/tstringbuilder) initialized to the contents of the specified string.

<br/>

