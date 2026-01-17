---
id: brl.standardio
title: BRL.StandardIO
sidebar_label: BRL.StandardIO
---


The BlitzMax StandardIO module contains commands for reading and writing text to the standard IO (Input/Output) stream.<br/>
<br/>
The standard IO stream is generally connected to a 'console', allowing you to interact with an application in a very simple way.


## Functions

### `Function Print( str:String="" )`

Write a string to the standard errIO stream

A newline character is also written after <b>str</b>.


#### Example
```blitzmax
Rem
Use the Print command to output BlitzMax strings to the Console window.
End Rem

SuperStrict

Print "Hello World"
```
<br/>

### `Function ErrPrint( str:String="" )`

Write a string to the standard error IO stream

A newline character is also written after <b>str</b>.


<br/>

### `Function Input:String( prompt:String=">" )`

Receive a line of text from the standard IO stream

The optional <b>prompt</b> is displayed before input is returned.


#### Example
```blitzmax
Rem
Use the Input command to read user input from the console to a BlitzMax String.
End Rem

SuperStrict

Local name:String = Input("What is your name")
Print "Hello "+name
```
<br/>

## Globals

### `Global StandardIOStream:TStream=TTextStream.Create( New TCStandardIO,ETextStreamFormat.UTF8 )`

BlitzMax Stream object used for Print and Input

The [Print](../../brl/brl.standardio/#function-print-strstring-) and [Input](../../brl/brl.standardio/#function-inputstring-promptstring-) commands can be redirected by setting the <b>StandardIOStream</b> Global to an alternative Stream Object.


<br/>

### `Global StandardErrIOStream:TStream=TTextStream.Create( New TCStandardErrIO,ETextStreamFormat.UTF8 )`

BlitzMax Stream object used for [ErrPrint](../../brl/brl.standardio/#function-errprint-strstring-)

<br/>

