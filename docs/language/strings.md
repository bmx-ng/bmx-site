---
id: strings
title: Strings
sidebar_label: Strings
---

Strings are used to store sequences of characters.

Strings are actually objects, so can be used where ever an object is expected.
Strings provide the following methods:

| Method | Description |
|---|---|
| `Find:Int( subString:String,startIndex=0 )` | Finds first occurance of a sub string. Returns -1 if **subString** not found. |
| `FindLast:Int( subString:String,startIndex=0 )` | Finds last occurance of a sub string. Returns -1 if **subString** not found. |
| `Hash:ULong()` | Returns the calculated hash for the string. |
| `Trim:String()` | Removes leading and trailing non-printable characters from a string. |
| `Replace:String( subString:String,withString:String )` | Replaces all occurances of **subString** with **withString**. |
| `StartsWith:Int( subString:String )` | Returns true if string starts with **subString**. |
| `EndsWith:Int( subString:String )` | Returns true if string ends with **subString**. |
| `Contains:Int( subString:String )` | Returns true if string contains **subString**. |
| `Join:String( bits:String[] )` | Joins **bits** together by inserting this string between each bit. |
| `Split:String[]( separator$[] )` | Splits this string into bits delimited by **separator**. |
| `ToLower:String()` | Converts string to lowercase. |
| `ToUpper:String()` | Converts string to uppercase. |
| `ToInt:Int()` | Converts string to an integer. |
| `ToUInt:UInt()` | Converts string to an unsigned integer. |
| `ToLong:Long()` | Converts string to a long. |
| `ToULong:ULong()` | Converts string to an unsigned long. |
| `ToSizeT:Size_T()` | Converts string to a size_t. |
| `ToFloat:Float()` | Converts string to a float. |
| `ToDouble:Double()` | Converts string to a double. |
| `ToCString:Byte Ptr()` | Converts string to a null terminated sequence of 8 bit bytes. The returned memory must eventually be freed with a call to [MemFree]. |
| `ToWString:Short Ptr()` | Converts string to a null terminated sequence of 16 bit shorts. The returned memory must eventually be freed with a call to [MemFree]. |
| `ToUTF8String:Byte Ptr()` | Converts string to a null terminated sequence of UTF-8 characters. The returned memory must eventually be freed with a call to [MemFree]. |
| `ToUTF8StringBuffer:Byte Ptr(buf:Byte Ptr, length:Size_T Var)` | Populates a pre-allocated buffer of **length** bytes with the string converted to a null terminated sequence of UTF-8 characters. On return, **length** contains the number of bytes copied to the buffer. |

Strings also provide a read-only length field.

Here is an example of using string methods:
```blitzmax
Local t:String="***** HELLO *****"

Print t.length			'return length of string: 17
Print t.Find( "HE" )		'returns index of substring "HE": 6
Print t.Replace( "*","!" )	'replaces all "*" with "!"
Print t.ToLower()		'coverts string to lowercase
Print ":".Join( ["Hello","World"] )	'returns "Hello:World"
```

String also provide the following functions to help with the creation of strings:

| Function | Description |
|---|---|
| `FromInt:String( value:Int )` | Creates a string from an integer. |
| `FromUInt:String( value:UInt )` | Creates a string from an unsigned integer. |
| `FromLong:String( value:Long )` | Creates a string from a long. |
| `FromULong:String( value:ULong )` | Creates a string from an unsigned long. |
| `FromSizeT:String( value:Size_T )` | Creates a string from a size_t. |
| `FromFloat:String( value:Float )` | Creates a string from a float. |
| `FromDouble:String( value:Double)` | Creates a string from a double. |
| `FromCString:String( cString:Byte Ptr )` | Creates a string from a null terminated sequence of 8 bit bytes. |
| `FromWString:String( wString:Short Ptr )` | Creates a string from a null terminated sequence of 16 bit shorts. |
| `FromUTF8String:String( utf8String:Byte Ptr )` | Creates a string from a null terminated sequence of UTF-8 characters. |
| `FromBytes:String( bytes:Byte Ptr,length )` | Creates a string from a sequence of length 8 bit bytes. |
| `FromUTF8Bytes:String( utf8String:Byte Ptr, length:Int )` | Creates a string from a sequence of **length** UTF-8 bytes. |
| `FromShorts:String( shorts:Short Ptr,length )` | Creates a string from a sequence of length 16 bit shorts. |


To call a string function, use: String.Function - for example:

```blitzmax
Print String.FromInt( 10 )
```

## String Hashes

A String hash can be used for faster string equality tests. If two strings are equal, the `Hash()` method returns identical values for both strings.
However, because there is not a unique hash for each unique string value, it is possible for different strings to return the same hash.

By default, all static/const strings will be compiled with their hash value pre-calculated.
For dynamic strings, the hash is calculated on the first call to `Hash()`. Subsequent calls will return the cached hash value.

In string equality tests, if both strings have a calculated hash, the hash value is used. Otherwise, the standard process of comparing
the contents of each string is performed, which involves comparing each character in turn until a difference is found.

In the following example, because the two static/const strings have hashes, the comparison will use the hash values rather than compare the String characters.
```blitzmax
Local hello:String = "Hello"
Local help:String = "Help"

If hello <> help Then
    ...
End If
```

[TStringMap] uses string hashes as the key. Depending on the data in use, this can result in improved performance over a [TMap] (which relies on string `Compare()`), for example. 

[MemFree]: ../../api/brl/brl.blitz/#memfree
[TStringMap]: ../../api/brl/brl.map/tstringmap
[TMap]: ../../api/brl/brl.map/tmap
