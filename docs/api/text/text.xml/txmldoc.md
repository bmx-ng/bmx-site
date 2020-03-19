---
id: txmldoc
title: TxmlDoc
sidebar_label: TxmlDoc
---

An XML Document.


## Methods

### `Method setRootElement:TxmlNode(root:TxmlNode)`

Sets the root element of the document.

#### Returns
The old root element if any was found.


<br/>

### `Method getRootElement:TxmlNode()`

Returns the root element of the document.

<br/>

### `Method saveFile:Int(file:Object, autoClose:Int = True, format:Int = False)`

Dumps an XML document to a file.

#### Returns
True on success, or Fales otherwise.


#### Example
```blitzmax
SuperStrict

Framework Text.xml
Import BRL.StandardIO

' Create a new document
Local doc:TxmlDoc = TxmlDoc.newDoc("1.0")

If doc Then

	' create a test stream
	Local stream:TTestStream = TTestStream.Create()

	' create a new node, initially not attached to the document
	Local root:TxmlNode = TxmlNode.newNode("root")
	
	' set the node as the document root node
	doc.setRootElement(root)
 
	root.addChild("things", "some stuff")

	' output the document to a file
	doc.saveFile("testfile.xml")
	
	' output the document to a stream
	doc.saveFile(stream)
	
	' output the document to console
	doc.saveFile("-")
	
	doc.Free()
End If


Type TTestStream Extends TStream

	Function Create:TTestStream( )
		Return New TTestStream
	End Function

	Method Write:Long( buf:Byte Ptr, count:Long )
		
		Print "outputing..."
		Print String.FromBytes( buf, Int(count) )
		
		Return count
	End Method

	
End Type
```
<br/>

### `Method Free()`

Frees the document.

<br/>

## Functions

### `Function newDoc:TxmlDoc(version:String)`

Creates a new XML document.

<br/>

### `Function readDoc:TxmlDoc(doc:Object)`

Parses an XML document from a String or TStream and builds a tree.

#### Returns
The resulting document tree.


#### Example
```blitzmax
SuperStrict

Framework Text.xml
Import brl.standardio

Local xml:String = LoadText("sample.xml")

Local doc:TxmlDoc = TxmlDoc.readDoc(xml)

If doc Then
	doc.savefile("-", , True)
	doc.Free()
End If
```
<br/>

### `Function parseFile:TxmlDoc(file:Object)`

Parses an XML file and build a tree.

#### Returns
The resulting document tree or Null if error.


#### Example
```blitzmax
SuperStrict

Framework Text.xml
Import brl.standardio
Import brl.ramstream

Incbin "sample.xml"

Local doc:TxmlDoc = TxmlDoc.parseFile("sample.xml")

If doc Then
	Print "~nFilename :"
	doc.savefile("-")
	doc.Free()
End If

Local stream:TStream = ReadStream("sample.xml")
doc = TxmlDoc.parseFile(stream)

If doc Then
	Print "~nStream :"
	doc.savefile("-")
	doc.Free()
End If

stream = ReadStream("incbin::sample.xml")
doc = TxmlDoc.parseFile(stream)

If doc Then
	Print "~nIncbin Stream :"
	doc.savefile("-")
	doc.Free()
End If
```
<br/>

