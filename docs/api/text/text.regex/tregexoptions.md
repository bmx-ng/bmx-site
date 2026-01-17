---
id: tregexoptions
title: TRegExOptions
sidebar_label: TRegExOptions
---

Specifies options used when performing searches.


## Fields

### `Field onlyPatternOptions:Int = False`

Ignore other options and use only the pattern's options, like case sensitivity, etc.

<br/>

### `Field caseSensitive:Int = False`

Whether matches are case sensitive.

<br/>

### `Field dotMatchAll:Int = False`

Allow dot (period) to match new lines as well as everything else.

False indicates dot doesn't match new lines.


<br/>

### `Field greedy:Int = True`

Greedy matches everything from the beginning of the first delimeter to the end of the last delimiter, and everything in between.




<br/>

### `Field lineEndType:Int = 0`

Determines how new lines are interpreted.


<ul>
<li>0 - any line ending</li>
<li>1 - \r</li>
<li>2 - \n</li>
<li>3 - \r\n</li>
</ul>


<br/>

### `Field matchEmpty:Int = True`

Allow patterns to match empty strings.

<br/>

### `Field stringIsLineBeginning:Int = True`

Count the beginning of a string as the beginning of a line.

<br/>

### `Field stringIsLineEnding:Int = True`

Count the end of a string as the end of a line.

<br/>

### `Field targetIsMultiline:Int = True`

Matches internal new lines against ^ and $.

Set to false to ignore internal new lines.


<br/>

### `Field dollarEndOnly:Int = False`

Dollar ($) matches newline at end.

Set to True for dollar to only match the end of the string, otherwise
matches a newline before the end of the string.


<br/>

### `Field extended:Int = False`

Ignore whitespace and # comments.

When set to True, whitespace in the pattern (other than in a character class) and
characters between a # outside a character class and the next newline are ignored.<br>
An escaping backslash can be used to include a whitespace or # character as part of the pattern.


<br/>

### `Field jitComplete:Int = False`

Compile code for full matching.

When set to True, the JIT compiler is enabled.


<br/>

### `Field jitPartialSoft:Int = False`

Compile code For soft partial matching.

When set to True, the JIT compiler is enabled.


<br/>

### `Field jitPartialHard:Int = False`

Compile code for hard partial matching.

When set to True, the JIT compiler is enabled.


<br/>

