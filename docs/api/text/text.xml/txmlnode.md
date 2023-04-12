---
id: txmlnode
title: TxmlNode
sidebar_label: TxmlNode
---

An XML Node.


## Methods

### `Method GetParent:TxmlNode()`

Gets the parent.

#### Returns
The parent to this object.


<br/>

### `Method addChild:TxmlNode(name:String, content:String = Null)`

Creates a new child element.

Added at the end of child nodes list.


#### Example
```blitzmax
SuperStrict

Framework Text.xml

Local doc:TxmlDoc = TxmlDoc.parseFile("attributes.xml")

If doc Then

	Local node:TxmlNode = TxmlNode(doc.getRootElement().getFirstChild())

	node.addChild("ID", "C0122200")

	doc.savefile("-")

End If
```
<br/>

### `Method addNextSibling(node:TxmlNode)`

Adds a new node <b>node</b> as the next sibling.

#### Example
```blitzmax
SuperStrict

Framework Text.xml

Local doc:TxmlDoc = TxmlDoc.parseFile("attributes.xml")

If doc Then

	Local node:TxmlNode = TxmlNode(doc.getRootElement().getFirstChild())

	' a new node for the document
	Local newNode:TxmlNode = TxmlNode.newNode("cd")
	newNode.addAttribute("title", "Together Alone")
	newNode.addAttribute("artist", "Crowded House")
	newNode.addChild("country", "NZ")
	
	' add new node to document as sibling of node.
	node.addNextSibling(newNode)

	' output the document to stdout
	doc.saveFile("-")
End If
```
<br/>

### `Method addPreviousSibling(node:TxmlNode)`

Adds a new node <b>node</b> as the previous sibling.

#### Example
```blitzmax
SuperStrict

Framework Text.xml

Local doc:TxmlDoc = TxmlDoc.parseFile("attributes.xml")

If doc Then

	Local node:TxmlNode = TxmlNode(doc.getRootElement().getFirstChild())
	
	' a new node for the document
	Local newNode:TxmlNode = TxmlNode.newNode("cd")
	newNode.addAttribute("title", "This is the Sea")
	newNode.addAttribute("artist", "Waterboys")
	newNode.addChild("country", "UK")
	
	' add new node to document as previous sibling of node.
	node.addPreviousSibling(newNode)

	' output the document to stdout
	doc.saveFile("-")
End If
```
<br/>

### `Method addContent(content:String)`

Appends the extra substring to the node content.

#### Example
```blitzmax
SuperStrict

Framework Text.xml
Import brl.standardio

Local doc:TxmlDoc = TxmlDoc.parseFile("attributes.xml")

If doc Then

	Local node:TxmlNode = TxmlNode(doc.getRootElement().getFirstChild())

	Local desc:TxmlNode = node.addChild("description")

	desc.addContent("Some of the songs on this CD are awesome.~n")
	desc.addContent("Tracks 5 & 6 put this CD up there...")

	doc.savefile("-")

End If
```
<br/>

### `Method setContent(content:String)`

Replaces the content of a node.

#### Example
```blitzmax
SuperStrict

Framework text.xml
Import BRL.StandardIO

Local doc:TxmlDoc = TxmlDoc.newDoc("1.0")

If doc Then
	
	Local root:TxmlNode = TxmlNode.newNode("root")
	doc.setRootElement(root)
	
	' create a new empty node
	Local node:TxmlNode = root.addChild("node")

	Print node.toString()

	' set the node content
	node.setContent("Some text content for the node")
	
	Print node.toString()
	
	' change the node content
	node.setContent("Modified content!")
	
	Print node.toString()

End If
```
<br/>

### `Method setName(name:String)`

Sets (or resets) the name of the node.

#### Example
```blitzmax
SuperStrict

Framework text.xml
Import BRL.StandardIO

Local doc:TxmlDoc = TxmlDoc.newDoc("1.0")

If doc Then
	
	Local root:TxmlNode = TxmlNode.newNode("root")
	doc.setRootElement(root)
	
	' create a new empty node
	Local node:TxmlNode = root.addChild("node")

	Print node.toString()

	' change the node name
	node.setName("branch")
	
	Print node.toString()
	
End If
```
<br/>

### `Method addAttribute(name:String, value:String = "")`

Creates a new attribute.

<br/>

### `Method setAttribute(name:String, value:String = "")`

Sets (or resets) an attribute carried by the node.

#### Example
```blitzmax
SuperStrict

Framework text.xml
Import BRL.StandardIO

Local doc:TxmlDoc = TxmlDoc.newDoc("1.0")

If doc Then
	
	Local root:TxmlNode = TxmlNode.newNode("root")
	doc.setRootElement(root)
	
	' create a new empty node
	Local node:TxmlNode = root.addChild("node")

	Print node.toString()

	' set an attribute
	node.setAttribute("attr1", "a value")
	
	Print node.toString()
	
	' change the attribute value
	node.setAttribute("attr1", "a new value")
	
	Print node.toString()
	
End If
```
<br/>

### `Method getAttribute:String(name:String)`

Provides the value of the attribute with the specified qualified name.

<br/>

### `Method getAttributeList:TList()`

Returns the list of node attributes.

#### Returns
The list of attributes.


#### Example
```blitzmax
SuperStrict

Framework Text.xml
Import brl.standardio

Local docname:String = "attributes.xml"
Local doc:TxmlDoc = TxmlDoc.parseFile(docname)

If doc Then
	Local root:TxmlNode = doc.getRootElement()
	For Local node:TxmlNode = EachIn root.getChildren()
		Print node.getName() + " : "
		
		For Local attribute:TxmlAttribute = EachIn node.getAttributeList()
			Print "    " + attribute.getName() + " : " + attribute.getValue()
		Next
		
		Print ""
	Next
End If
```
<br/>

### `Method unsetAttribute(name:String)`

Remove an attribute carried by the node.

#### Example
```blitzmax
SuperStrict

Framework text.xml
Import BRL.StandardIO

Local doc:TxmlDoc = TxmlDoc.newDoc("1.0")

If doc Then
	
	Local root:TxmlNode = TxmlNode.newNode("root")
	doc.setRootElement(root)
	
	' create a new empty node
	Local node:TxmlNode = root.addChild("node")

	Print node.toString()

	' add some attributes
	node.setAttribute("attr1", "Attribute value")
	node.setAttribute("attr2", "Another value")
	
	Print node.toString()
	
	' remove an attribute
	node.unsetAttribute("attr1")
	
	Print node.toString()
	
End If
```
<br/>

### `Method hasAttribute:Int(name:String)`

Search an attribute associated to the node

#### Returns
the attribute or Null if not found.


<br/>

### `Method getChildren:TList()`

Returns a list of child nodes.

<br/>

### `Method getFirstChild:TxmlBase()`

Gets the first child.

#### Returns
The first child or Null if none.


#### Example
```blitzmax
SuperStrict

Framework Text.xml
Import brl.standardio

Local docname:String = "sample.xml"
Local doc:TxmlDoc

doc = TxmlDoc.parseFile(docname)
If doc Then
	Local root:TxmlNode = doc.getRootElement()
	
	Print "First child is - " + root.getFirstChild().getName()

End If
```
<br/>

### `Method getLastChild:TxmlBase()`

Gets the last child.

#### Returns
The last child or Null if none.


#### Example
```blitzmax
SuperStrict

Framework Text.xml
Import brl.standardio

Local docname:String = "sample.xml"
Local doc:TxmlDoc

doc = TxmlDoc.parseFile(docname)
If doc Then
	Local root:TxmlNode = doc.getRootElement()
	
	Print "Last child is - " + root.getLastChild().getName()

End If
```
<br/>

### `Method nextSibling:TxmlNode()`

Get the next sibling node

#### Returns
The next node or Null if there are none.


#### Example
```blitzmax
SuperStrict

Framework text.xml
Import brl.standardio

Local docname:String = "sample.xml"
Local doc:TxmlDoc

doc = TxmlDoc.parseFile(docname)
If doc Then
	Local root:TxmlNode = doc.getRootElement()
	
	Local node:TxmlNode = TxmlNode(root.getFirstChild())
	
	Print "Next sibling is - " + node.nextSibling().getName()

End If
```
<br/>

### `Method previousSibling:TxmlNode()`

Get the previous sibling node

#### Returns
The previous node or Null if there are none.


#### Example
```blitzmax
SuperStrict

Framework text.xml
Import brl.standardio

Local docname:String = "sample.xml"
Local doc:TxmlDoc

doc = TxmlDoc.parseFile(docname)
If doc Then
	Local root:TxmlNode = doc.getRootElement()
	
	Local node:TxmlNode = TxmlNode(root.getLastChild())
	
	Print "Previous sibling is - " + node.previousSibling().getName()

End If
```
<br/>

### `Method getContent:String()`

Reads the value of a node.

#### Returns
The node content.


<br/>

### `Method findElement:TxmlNode(element:String = "", attr:String = "", value:String = "", descend:Int=MXML_DESCEND)`

Finds an element of the given <b>element</b> name, attribute or attribute/value.

#### Returns
A node or Null if no match was found.


#### Example
```blitzmax
SuperStrict

Framework Text.xml
Import brl.standardio

Local docname:String = "sample.xml"
Local doc:TxmlDoc

doc = TxmlDoc.parseFile(docname)
If doc Then

	Local root:TxmlNode = doc.getRootElement()
	
	Local node:TxmlNode = root.findElement("author")
	
	If node Then
		Print node.ToString()
	End If

End If
```
<br/>

### `Method Free()`

Frees a node and all of its children.

<br/>

## Functions

### `Function newNode:TxmlNode(name:String)`

Creates a new node element.

#### Example
```blitzmax
Framework text.xml
Import brl.standardio

Local doc:TxmlDoc = TxmlDoc.newDoc("1.0")

If doc Then
	
	' create a new node, initially not attached to the document
	Local root:TxmlNode = TxmlNode.newNode("root")
	
	' set the node as the document root node
	doc.setRootElement(root)
	
	' output the document to stdout
	doc.saveFile("-")
	
End If
```
<br/>

