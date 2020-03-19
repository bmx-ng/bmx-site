---
id: tformatter
title: TFormatter
sidebar_label: TFormatter
---

The string formatter.


Processes printf-style format strings.


#### Example
```blitzmax
SuperStrict

Framework Text.Format
Import BRL.StandardIO

' Create a title
Local title:TFormatter = TFormatter.Create("%-30s %8s   %9s~n")
title.Arg("Product").Arg("Quantity").Arg("Value")

' print the title
Print title.Format()

' some data
Local prods:String[] = ["Keyboard", "Mouse", "10 CDs"]
Local amounts:Int[] = [4, 10, 15]
Local prices:Float[] = [12.99, 9.99, 5.50]

' the data formatting
Local dataFormat:TFormatter = TFormatter.Create("%-30s    %5d   %9.2f")

Local total:Float

' Print the data
For Local i:Int = 0 Until 3

	' apply the arguments
	dataFormat.Arg(prods[i])
	dataFormat.Arg(amounts[i])
	dataFormat.Arg(prices[i] * amounts[i])
	
	total:+ prices[i] * amounts[i]
	
	Print dataFormat.Format()
	
	' reset the formatter
	dataFormat.Clear()

Next

Print

' totals
Local totalFormat:TFormatter = TFormatter.Create("                                  %5s   %9.2f")
totalFormat.Arg("Total").Arg(total)

Print totalFormat.Format()
```
## Methods

### `Method Arg:TFormatter(value:Byte)`

Appends a [Byte](../../../brl/brl.blitz/#byte) argument to the formatter.

<br/>

### `Method Arg:TFormatter(value:Short)`

Appends a [Short](../../../brl/brl.blitz/#short) argument to the formatter.

<br/>

### `Method Arg:TFormatter(value:Int)`

Appends an [Int](../../../brl/brl.blitz/#int) argument to the formatter.

<br/>

### `Method Arg:TFormatter(value:UInt)`

Appends a [UInt](../../../brl/brl.blitz/#uint) argument to the formatter.

<br/>

### `Method Arg:TFormatter(value:Long)`

Appends a [Long](../../../brl/brl.blitz/#long) argument to the formatter.

<br/>

### `Method Arg:TFormatter(value:ULong)`

Appends a [ULong](../../../brl/brl.blitz/#ulong) argument to the formatter.

<br/>

### `Method Arg:TFormatter(value:Float)`

Appends a [Float](../../../brl/brl.blitz/#float) argument to the formatter.

<br/>

### `Method Arg:TFormatter(value:Double)`

Appends a [Double](../../../brl/brl.blitz/#double) argument to the formatter.

<br/>

### `Method Arg:TFormatter(value:Size_T)`

Appends a [Size_T](../../../brl/brl.blitz/#sizet) argument to the formatter.

<br/>

### `Method Arg:TFormatter(value:Byte Ptr)`

Appends a Byte Ptr argument to the formatter.

<br/>

### `Method Arg:TFormatter(value:String)`

Appends a [String](../../../brl/brl.blitz/#string) argument to the formatter.

<br/>

### `Method Format:String(sb:TStringBuilder = Null)`

Processes and returns the formatted string.

#### Returns
The formatted String.


#### Example
```blitzmax
SuperStrict

Framework Text.Format
Import BRL.StandardIO

Local formatter:TFormatter = TFormatter.Create("->%-10s<->%10s<->%.5s<-")

formatter.Arg("Left").Arg("Right").Arg("Trimmed")

Print formatter.Format()
```
<br/>

### `Method Clear:TFormatter()`

Clears the formatter argument list, ready for new arguments.

#### Example
```blitzmax
SuperStrict

Framework Text.Format
Import BRL.StandardIO

Local formatter:TFormatter = TFormatter.Create("%2d.   %.2d/%02d/%4d")

Local count:Int = 1

For Local m:Int = 1 To 12

	For Local d:Int = 1 To 21 Step 5
	
		' apply the arguments
		formatter.Arg(count)
		formatter.Arg(d).Arg(m).Arg(2007)
	
		' print the formatted string
		Print formatter.Format()
	
		' reset the arguments
		formatter.Clear()

		count:+ 1		
	Next

Next
```
<br/>

## Functions

### `Function Create:TFormatter(Text:String)`

Creates a new [TFormatter](../../../text/text.format/tformatter) object.

Parameters:
<ul>
<li><b>text</b> : The text containing formatting instructions</li>
</ul>


#### Example
```blitzmax
SuperStrict

Framework Text.Format
Import BRL.StandardIO

Local formatter:TFormatter = TFormatter.Create("Value = %2.1f%%")

Print formatter.Arg(46.4).Format()
```
<br/>

