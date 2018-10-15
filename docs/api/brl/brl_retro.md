---
id: brl.retro
title: BRL.Retro
sidebar_label: BRL.Retro
---



The BASIC compatibility module provides miscellaneous functions that emulate the behaviour
of 'classic' BASIC.

The functions in this module have largely been superceded by BlitzMax features such as 
'string slicing', and the Find, Replace, Trim, ToLower and ToUpper string methods.

However, for programmers from a classic BASIC background, these utility functions should make
the transition to BlitzMax a little easier.

NOTE: Strings in classic BASIC are '1 based'. This means that the first character within a 
string is at index 1, the second at index 2 and so on. However, BlitzMax strings are '0 based',
meaning the first character is at index 0, the second at index 1 and so on. The [instr](../../brl/brl.retro/#function-instr-str-sub-start-1) and
[Mid](../../brl/brl.retro/#function-mid-str-pos-size-1) functions in this module retain the '1 based' behaviour of classic BASIC.


## Functions

### `Function Mid$( str$,pos,size=-1 )`

Extract substring from a string


The Mid$ command returns a substring of a String.

Given an existing string, a <b>position</b> from the start of the string and
an optional <b>size</b>, [Mid](../../brl/brl.retro/#function-mid-str-pos-size-1) creates a new string equal to the section specified.
If no size if given, [Mid](../../brl/brl.retro/#function-mid-str-pos-size-1) returns the characters in the existing string from
<b>position</b> to the end of the string.

For compatibility with classic BASIC, the <b>pos</b> parameter is 'one based'.


#### Returns
A sequence of characters from <b>str</b> starting at position <b>pos</b> and of length <b>size</b>



### `Function Instr( str$,sub$,start=1 )`

Find a string within a string


The <b>start</b> parameter allows you to specifying a starting index for the search.

For compatiblity with classic BASIC, the <b>start</b> parameter and returned position
are both 'one based'.


#### Returns
The position within <b>str</b> of the first matching occurance of <b>sub</b>



### `Function Left$( str$,n )`

Extract characters from the beginning of a string


The Left$ command returns a substring of a String.
Given an existing String and a <b>size</b>, Left$ returns the first <b>size</b>
characters from the start of the String in a new String.


#### Returns
<b>size</b> leftmost characers of <b>str</b>



### `Function Right$( str$,n )`

Extract characters from the end of a string


The Right$ command returns a substring of a String.
Given an existing String and a <b>size</b>, Right$ returns the last <b>size</b>
characters from the end of the String.


#### Returns
<b>size</b> rightmost characters of <b>str</b>



### `Function LSet$( str$,n )`

Left justify string

#### Returns
A string of length <b>n</b>, padded with spaces



### `Function RSet$( str$,n )`

Right justify string

#### Returns
A string of length <b>n</b>, padded with spaces



### `Function Replace$( str$,sub$,replaceWith$ )`

Performs a search and replace function


The Replace$ command replaces all instances of one string with another.


#### Returns
A string with all instances of <b>sub</b>$ replaced by <b>replace</b>$



### `Function Trim$( str$ )`

Remove unprintable characters from ends a string

#### Returns
<b>str</b> with leading and trailing unprintable characters removed



### `Function Lower$( str$ )`

Convert string to lowercase

#### Returns
Lowercase equivalent of <b>str</b>



### `Function Upper$( str$ )`

Convert string to uppercase

#### Returns
Uppercase equivalent of <b>str</b>



### `Function Hex$( val )`

Convert an integer value to a hexadecimal string

#### Returns
The hexadecimal string representation of <b>val</b>



### `Function Bin$( val )`

Convert an integer value to a binary string

#### Returns
The binary string representation of <b>val</b>



### `Function LongHex$( val:Long )`

Convert a 64 bit long integer value to a hexadecimal string

#### Returns
The hexadecimal string representation of <b>val</b>



### `Function LongBin$( val:Long )`

Convert a 64 bit long integer value to a binary string

#### Returns
The binary string representation of <b>val</b>



