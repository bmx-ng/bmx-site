---
id: tregexmatch
title: TRegExMatch
sidebar_label: TRegExMatch
---

Used to extract the matched string when doing a search with regular expressions.


#### Example
```blitzmax
' Match and capture group
' Extract fields from date string.

SuperStrict

Framework Text.RegEx
Import BRL.StandardIO

Local date:String = "The dates are: 12/30/1969, 06/04/1974 and 15/08/1980"
Print "Original : " + date + "~n"

Local regex:TRegEx = TRegEx.Create("(\d\d)[-/](\d\d)[-/](\d\d(?:\d\d)?)")

Try

	Local match:TRegExMatch = regex.Find(date)
	
	While match

		Print "~nDate -"
		For Local i:Int = 0 Until match.SubCount()
			Print i + ": " + match.SubExp(i)
		Next

		match = regex.Find()
	Wend

Catch e:TRegExException

	Print "Error : " + e.toString()
	End
	
End Try

Print "Done."
```
## Methods

### `Method SubCount:Int()`

Returns the number of subexpressions as a result of the search.

<br/>

### `Method SubExp:String(matchNumber:Int = 0)`

Returns the subexpression for <b>matchNumber</b>.

For expressions with no subpattern groups, this method can be used without
a parameter to return the matched string.


#### Returns
The matched string, the subexpression string, or "" if <b>matchNumber</b> is out of range.


<br/>

### `Method SubStart:Int(matchNumber:Int = 0)`

Returns the start position for subexpression <b>matchNumber</b>.

For expressions with no subpattern groups, this method can be used without a parameter
to return the start position of the matched string.


#### Returns
The start position, or -1 if <b>matchNumber</b> is out of range.


<br/>

### `Method SubEnd:Int(matchNumber:Int = 0)`

Returns the end position for subexpression <b>matchNumber</b>.

For expressions with no subpattern groups, this method can be used without a parameter
to return the end position of the matched string.


#### Returns
The end position, or -1 if <b>matchNumber</b> is out of range.


<br/>

### `Method SubExp:String(name:String)`

Returns the subexpression for the given <b>name</b>.

#### Returns
The matched string, the subexpression string, or "" if <b>matchNumber</b> is out of range.


<br/>

### `Method SubExpByName:String(name:String)`

Returns the subexpression for the given <b>name</b>.

#### Returns
The matched string, the subexpression string, or "" if <b>matchNumber</b> is out of range.


<br/>

### `Method SubIndex:Int(name:String)`

Returns the index of the subexpression for the given <b>name</b>.

<br/>

### `Method SubIndexByName:Int(name:String)`

Returns the index of the subexpression for the given <b>name</b>.

<br/>

### `Method SubStart:Int(name:String)`

Returns the start position of the subexpression for the given <b>name</b>.

<br/>

### `Method SubStartByName:Int(name:String)`

Returns the start position of the subexpression for the given <b>name</b>.

<br/>

### `Method SubEnd:Int(name:String)`

Returns the end position of the subexpression for the given <b>name</b>.

<br/>

### `Method SubEndByName:Int(name:String)`

Returns the end position of the subexpression for the given <b>name</b>.

<br/>

