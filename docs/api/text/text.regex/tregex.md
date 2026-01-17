---
id: tregex
title: TRegEx
sidebar_label: TRegEx
---

Performs [Find](../../../text/text.regex/tregex/#method-findtregexmatchtargetstring-null) and [Replace](../../../text/text.regex/tregex/#method-replacestringtargetstring-replacewithstring-startpossizet-0) / [ReplaceAll](../../../text/text.regex/tregex/#method-replaceallstringtargetstring-replacewithstring-startpossizet-0) on strings using Perl Compatible Regular Expressions.


## Constructors

### `Method New(searchPattern:String, options:TRegExOptions = Null)`

Creates a new [TRegEx](../../../text/text.regex/tregex) object.

<b>searchPattern</b> is the regular expression with which to perform the search.


<br/>

## Methods

### `Method ReplaceAll:String(target:String, replaceWith:String, startPos:Size_T = 0)`

Replaces all occurances of the search Pattern with <b>replaceWith</b> on <b>target</b>, from <b>startPos</b>.

Doesn't affect the original <b>target</b> contents.


#### Returns
The newly replaced string.


#### Example
```blitzmax
' Replaces all float/numeric values with '!GONE!'

SuperStrict

Framework Text.RegEx
Import BRL.StandardIO

Local change:String = "floats are 4.533, -10.232, 1446.2003 and even 100~n" + ..
	"If it wasn't enough 5 out of 10 applications said their users preferred them. That's 0.50 !~n"


Local regex:TRegEx = TRegEx.Create("[-+]?[0-9]*\.?[0-9]+")

Try

	Local s:String = regex.ReplaceAll(change, "!GONE!")
		
	Print "before = " + change
	Print "after  = " + s
	

Catch e:TRegExException

	Print "Error : " + e.toString()
	End
	
End Try

Print "Done."
```
<br/>

### `Method Replace:String(target:String, replaceWith:String, startPos:Size_T = 0)`

Replaces the first occurance of the search Pattern with <b>replaceWith</b> on <b>target</b>, from <b>startPos</b>.

To access a specific subquery during the replace, you can use the \n syntax in <b>replaceWith</b>, where \0
refers to the whole match, and \1 refers to the first subquery/group, and so on. <i>(see
<a href="../tests/test_07.bmx">test_07</a> for an example)</i>.
<p>Doesn't affect the original <b>target</b> contents.</p>


#### Returns
The newly replaced string.


#### Example
```blitzmax
' Replaces 'bb' for 'd'

SuperStrict

Framework Text.RegEx
Import BRL.StandardIO

Local change:String = "yabba dabba doo"


Local regex:TRegEx = TRegEx.Create("bb")

Try

	Local s:String = regex.Replace(change, "d")
		
	Print "before = " + change
	Print "after  = " + s
	

Catch e:TRegExException

	Print "Error : " + e.toString()
	End
	
End Try

Print "Done."
```
<br/>

### `Method Find:TRegExMatch(target:String = Null)`

Performs a search on the given <b>target</b> from <b>startPos</b>, using the search Pattern.

If <b>target</b> is <b>not</b> set, the search will use the <b>previous</b> <b>target</b>.
You will want to set <b>target</b> the first time this method is called.<br>
If you call this method with no parameters it will start the search from the end of the last search, effectively
iterating through the target string.


#### Returns
A [TRegExMatch](../../../text/text.regex/tregexmatch) object or Null if no matches found.


#### Example
```blitzmax
' Search for a floating point number in a string

SuperStrict

Framework Text.RegEx
Import BRL.StandardIO

Local floats:String = "floats are 4.533, -10.232, 1446.2003 and even 100"
Print "Original : " + floats + "~n"

Local regex:TRegEx = TRegEx.Create("[-+]?[0-9]*\.?[0-9]+")

Try

	Local match:TRegExMatch = regex.Find(floats)
		
	' get each match, and print it out.
	While match
	
		Print "Found : " + match.SubExp()
		
		match = regex.Find()
	Wend

Catch e:TRegExException

	Print "Error : " + e.toString()
	End
	
End Try

Print "Done."
```
<br/>

### `Method Find:TRegExMatch(target:String, startPos:Size_T)`

Performs a search on the given <b>target</b> from <b>startPos</b>, using the search Pattern.

#### Returns
A [TRegExMatch](../../../text/text.regex/tregexmatch) object or Null if no matches found.


#### Example
```blitzmax
' Search for a floating point number in a string

SuperStrict

Framework Text.RegEx
Import BRL.StandardIO

Local floats:String = "floats are 4.533, -10.232, 1446.2003 and even 100"
Print "Original : " + floats + "~n"

Local regex:TRegEx = TRegEx.Create("[-+]?[0-9]*\.?[0-9]+")

Try

	Local match:TRegExMatch = regex.Find(floats)
		
	' get each match, and print it out.
	While match
	
		Print "Found : " + match.SubExp()
		
		match = regex.Find()
	Wend

Catch e:TRegExException

	Print "Error : " + e.toString()
	End
	
End Try

Print "Done."
```
<br/>

## Functions

### `Function Create:TRegEx(searchPattern:String, options:TRegExOptions = Null)`

Creates a new [TRegEx](../../../text/text.regex/tregex) object.

<b>searchPattern</b> is the regular expression with which to perform the search.


<br/>

### `Function SetDefaultOptions(options:TRegExOptions)`

Sets the default options for all new [TRegEx](../../../text/text.regex/tregex) objects.

This is useful if you want to set the options once and use them for all searches.


<br/>

### `Function Config:Int(what:Int, where_:Int Var)`

Returns which optional features are available.

<br/>

