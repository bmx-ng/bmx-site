---
id: text.xml
title: Text.XML
sidebar_label: Introduction
---


## What is XML?

XML (eXtensible Markup Language) is a markup language that defines a set of rules for encoding
documents in a format that is both human-readable and machine-readable. It is designed to store
and transport data, as well as being a universal standard for data interchange between different
applications and platforms.

XML files have a hierarchical structure, where data is organized into elements, attributes,
and text nodes. Elements are the primary building blocks of XML, and they can be nested within each
other to create a tree-like structure. Attributes provide additional information about elements and
are defined within the opening tag of an element. Text nodes store the actual content of the elements.

Similar to XML, JSON (JavaScript Object Notation) is another popular format for data interchange,
which also uses a hierarchical structure to organize data. Both XML and JSON are designed to be
human-readable and machine-readable, making them well-suited for exchanging data between different
programming languages and platforms.

However, there are some differences between XML and JSON. While XML relies on tags and attributes to
define and structure data, JSON uses key-value pairs and objects (denoted by curly braces) or arrays
(denoted by square brackets) to represent data. In general, JSON is considered to be more compact and less
verbose than XML, which can result in faster parsing and reduced data size for transmission.

Here is a comparison of XML and JSON representations for the same data:

XML:
```xml
<bookstore>
  <book id="1">
    <title>Book Title 1</title>
    <author>Author 1</author>
    <price>19.99</price>
  </book>
  <book id="2">
    <title>Book Title 2</title>
    <author>Author 2</author>
    <price>24.99</price>
  </book>
</bookstore>
```

JSON:
```json
{
  "bookstore": {
    "book": [
      {
        "id": "1",
        "title": "Book Title 1",
        "author": "Author 1",
        "price": 19.99
      },
      {
        "id": "2",
        "title": "Book Title 2",
        "author": "Author 2",
        "price": 24.99
      }
    ]
  }
}
```

## XML by Example

We are going to explore the fundamentals of XML by creating an example book store application.
This application will manage a list of books, including their titles, authors, publication years,
prices, and other relevant details. Through this example, we will demonstrate how XML is used to
organize and structure data, making it easier to store, exchange, and process information.

Our example book store will maintain an XML file, books.xml, which contains the following book data:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>

<book category="cooking">
  <title lang="en">Everyday Italian</title>
  <author>Giada De Laurentiis</author>
  <year>2005</year>
  <price>30.00</price>
</book>

<book category="children">
  <title lang="en">Harry Potter</title>
  <author>J K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book>

<book category="web">
  <title lang="en">XQuery Kick Start</title>
  <author>James McGovern</author>
  <author>Per Bothner</author>
  <author>Kurt Cagle</author>
  <author>James Linn</author>
  <author>Vaidyanathan Nagarajan</author>
  <year>2003</year>
  <price>49.99</price>
</book>

<book category="web" cover="paperback">
  <title lang="en">Learning XML</title>
  <author>Erik T. Ray</author>
  <year>2003</year>
  <price>39.95</price>
</book>

</bookstore>
```
__Source:__ https://www.w3schools.com/xml/books.xml

In this XML file, each book is represented as a separate element node, with the books nested within
the parent "bookstore" element. Element nodes can contain attributes, such as "category" or "lang",
and they can wrap either text or child element nodes.

For instance, the last book in our example has a "category" attribute with the value "web" and a
"cover" attribute with the value "paperback". This book also has multiple authors, which
demonstrates that element nodes can contain multiple child nodes of the same type.

#### Nodes

In XML, the DOM (Document Object Model) represents everything within an XML file as a node.
A node is a fundamental component of an XML document, and there are various types of nodes,
including element nodes, attribute nodes, and text nodes. Understanding these different node
types is crucial for effectively working with XML data.

* **Element nodes** : These are the primary building blocks of an XML document, representing
the XML tags and their content. In our example, `<book>` is an element node. Element nodes can
be nested within one another, creating a tree-like structure that organizes the data.

* **Attribute nodes** : These nodes provide additional information about an element node and are
defined within the opening tag of the element. For instance, the category attribute in the `<book>`
element is an attribute node. Attribute nodes are associated with a specific element and cannot exist
on their own.

* **Text nodes** : These nodes store the actual content within element nodes. In our example, the
text "Everyday Italian" within the `<title>` element is a text node.

For simplicity, we will often refer to them as elements, attributes, and text.

#### Analyzing an XML file

Examining an XML file allows us to extract various valuable information, such as:

* **File encoding, XML version, and root node name** : These metadata details are essential for processing
and interpreting the XML file. In our example, the file encoding is UTF-8, the XML version is 1.0,
and the root node name is "bookstore."

* **Attributes of nodes** : Attributes provide extra information about elements, such as
categorization, language, or other properties. In our book store example, the "category" and
"lang" attributes are used to classify books and specify the language of the titles, respectively.

* **Content of nodes** : The content within nodes can be either text or other nodes, representing
data or further organization of the XML structure. In our example, the `<book>` element contains
both text nodes (e.g., the book title) and child element nodes (e.g., the `<author>` element).

* **Number of nodes, attributes in a node, and children of a node** : Counting and understanding the
relationships between nodes, their attributes, and their children is vital for navigating and manipulating
XML data effectively. For instance, knowing the number of books in the bookstore or the number of
authors for a particular book can be useful for various operations and analyses.

### Reading XML Files
To read data from an existing XML file, you first need to create an [TXmlDoc](../../text/text.xml/txmldoc) instance and parse
the `books.xml` file.

```blitzmax
Local xmlDoc:TXmlDoc = TXmlDoc.parseFile("books.xml")
```

However, we also want to store the book data as objects in BlitzMax,
so we will create a custom [Type](../../brl/brl.blitz/#type) for it first. As you observed in the XML file, the book titles
can be in different languages, so we need to ensure that we can identify them using the `lang`
attribute of the `<title>` element. We can achieve this with a key-value mapping using a StringMap.
For authors, since they are not identified by a key, we can use a simple [String](../../brl/brl.blitz/#string) array to store them.

```blitzmax
Type TBook
    Field category:String
    Field cover:String
    Field title:StringMap
    Field authors:String[]
    Field year:Int
    Field price:Float
End Type
```
_(Note: Using floating-point numbers for financial values should generally be avoided,
as it can lead to rounding errors, which is undesirable in financial contexts. For the sake
of simplicity, we will use `Float` in this example.)_

Now that we have parsed the XML file and created the `TBook` type to store the information,
we are ready to read the data from the XML and store it in our custom class.

To extract information from the nodes in the parsed XML file, we can start by retrieving
the root node using the `getRootElement()` method provided by the [TXmlDoc](../../text/text.xml/txmldoc) instance.

```blitzmax
Local rootNode:XmlNode = xmlDoc.getRootElement()
```

XmlNode objects have various methods for setting and retrieving values. While reading our
XML file, the following methods might prove useful:

* **Finding elements**: `getAttribute()`, `getAttributeList()`, `hasAttribute()`, `getChildren()`,
`nextSibling()`, `previousSibling()`, and `findElement()` (if you know what you're looking for).
* **Retrieving content**: `getContent()`.

Now that we have the root node - which is the `<bookstore>` element - we can access its
children, which in this case are the `<book>` elements. To iterate over all the books,
we can use the root node's `getChildren()` method, which returns a [TList](../../brl/brl.linkedlist/tlist). We can then
iterate over this list using a `For EachIn` loop.

```blitzmax
For local childNode:XmlNode = EachIn rootNode.getChildren()
    ' read data of interest from childNode
Next
```

Let's take a closer look at a typical book entry in our XML file:

```xml
<book category="web">
  <title lang="en">XQuery Kick Start</title>
  <author>James McGovern</author>
  <author>Per Bothner</author>
  <author>Kurt Cagle</author>
  <author>James Linn</author>
  <author>Vaidyanathan Nagarajan</author>
  <year>2003</year>
  <price>49.99</price>
</book>
```

To extract information from this book entry, we will use the following approaches:

* **Category attribute** : Use `getAttribute()` to retrieve the category value.
* **Title element and `lang` attribute** : Use `getAttribute()` to obtain the language key of the
title, and `getContent()` to get the title text.
* **Author, year, and price elements** : These elements only contain text, so we can use `getContent()`
to read their values.

For each book, we will create a new `TBook` instance and add it to a [TList](../../brl/brl.linkedlist/tlist) that stores all our books.
In your own projects, you might want to add conditional checks before adding a book to the list.
For example, you could skip adding a book if certain required data is missing from the XML file
(e.g., both "title" and "author" are absent). For the purpose of this example, we will skip checking
for duplicates or incomplete entries.

```blitzmax
Local allBooks:TList = New TList
For Local childNode:TxmlNode = EachIn rootNode.getChildren()
    ' create a new book instance
    Local book:TBook = New TBook
	
    book.category = childNode.getAttribute( "category" )
    ' this stays empty if the attribute is not set 
    book.cover = childNode.getAttribute( "cover" )
	
    ' loop over all child nodes and handle them according to
    ' their name
    For Local subNode:TxmlNode = EachIn childNode.getChildren()
        Select subNode.getName()
            Case "title"
                Local key:String = subNode.getAttribute( "lang" ).ToLower()
                Local value:String = subNode.getContent()
                book.title.Insert(key, value) 
            Case "author"
                ' add the "single entry array" to the authors array
                book.authors :+ [ subNode.getContent() ]
            Case "year"
                ' cast the string content value to Int
                book.year = Int( subNode.getContent() )
            Case "price"
                ' cast the string content value to Float
                book.price = Float( subNode.getContent() )
        End Select
    Next
	
    ' add the book to our book storage list
    allBooks.AddLast( book )
Next

' close the TxmlDoc instance
xmlDoc.Free()
```

Now that we have successfully extracted all the book information from the XML file and stored
it in our application, it is time to take the next step. Let's explore how to save our book data back
to a new XML file. 

### Saving Changes to XML Files

When working with XML files, it is crucial to save your changes periodically.
In this section, we will explore the process of saving objects to XML files, otherwise known as
"serialization." This involves converting the desired data into text format, making it compatible
with XML file structures.

In our book example, we only have to handle numbers and text data, which simplifies the serialization process.
To save our data, we will need a [TxmlDoc](../../text/text.xml/txmldoc) object as the foundation and a root node to add our book nodes.

When creating a new [TxmlDoc](../../text/text.xml/txmldoc), it is a good practice to use the `newDoc()` helper function, which allows you
to specify the XML version to use. This ensures that your output file is consistent with the original
`books.xml` file format.

For demonstration purposes, we will also print the content of the document using the [TxmlDoc](../../text/text.xml/txmldoc)'s `saveFile()`
method (passing "-" skips saving and redirects content to the output):

```blitzmax
Local exportXmlDoc:TxmlDoc = TxmlDoc.newDoc("1.0")
Local exportRootNode:TxmlNode = TxmlNode.newNode("bookstore")

' Set the newly created node as the root for the empty document
exportXmlDoc.setRootElement(exportRootNode)

' Print the content in a formatted manner
exportXmlDoc.saveFile("-", True, True)
```

This code will output the following:

```xml
<?xml version="1.0" encoding="utf-8"?>
<bookstore />
```

As you can see, we've successfully created an empty XML file with the correct root element.

In order to save each book, we need to create a new [TxmlNode](../../text/text.xml/txmlnode) for each book, along with additional
nodes or attributes to represent the properties. The BlitzMax XML module simplifies this process
by allowing you to pass values directly when creating a new child node using `addChild(name, value)`.

```blitzmax
' Create and attach a new book node under the root node
Local bookNode:TxmlNode = exportRootNode.addChild("book")

bookNode.setAttribute("category", book.category)

' Iterate over title keys and store the corresponding values
' Using method chaining, we can save storing the node first
For local lang:String = EachIn book.title.Keys()
    Local title:String = String(book.title.ValueForKey(lang))
    bookNode.addChild("title", title).addAttribute("lang", lang)
Next

For local author:String = EachIn book.authors
    bookNode.addChild("author", author)
Next

bookNode.addChild("year", book.year)

bookNode.addChild("price", book.price)
```

Now, we can combine all of the code blocks we've discussed so far to accomplish the following tasks:

1. Load the `books.xml` file.
2. Save all the books as a new file named `books.new.xml`.

By combining these code blocks, you can create a complete solution to read, manipulate, and save
XML data using BlitzMax. 

```blitzmax
SuperStrict
' xml.mod is not automatically imported like brl.mod and pub.mod, so you need to manually import it
Import text.xml

Type TBook
    Field category:String
    Field cover:String
    Field title:TStringMap = New TStringMap
    Field authors:String[]
    Field year:Int
    Field price:Float
End Type
Local allBooks:TList = New TList

' === LOADING ===
' Load and parse the books.xml file
Local xmlDoc:TxmlDoc = TxmlDoc.parseFile("books.xml")
' Retrieve the root element (bookstore)
Local rootNode:TxmlNode = xmlDoc.getRootElement()

' Loop through all child nodes (books)
For Local childNode:TxmlNode = EachIn rootNode.getChildren()
    ' Create a new TBook instance
    Local book:TBook = New TBook

    ' Get the book attributes
    book.category = childNode.getAttribute("category")
    book.cover = childNode.getAttribute("cover") ' This remains empty if the attribute is not set

    ' Loop through all child nodes of the current book and handle them according to their name
    For Local subNode:TxmlNode = EachIn childNode.getChildren()
        Select subNode.getName()
            Case "title"
                ' Store the title in the TStringMap using the language as the key
                Local key:String = subNode.getAttribute("lang").ToLower()
                Local value:String = subNode.getContent()
                book.title.Insert(key, value)
            Case "author"
                ' Add the author to the authors array
                book.authors :+ [subNode.getContent()]
            Case "year"
                ' Convert the year from a string to an integer
                book.year = Int(subNode.getContent())
            Case "price"
                ' Convert the price from a string to a float
                book.price = Float(subNode.getContent())
        End Select
    Next

    ' Add the TBook instance to the allBooks list
    allBooks.AddLast(book)
Next

' Release resources associated with xmlDoc
xmlDoc.Free()

' === SAVING ===
' Create a new TxmlDoc with version 1.0
Local exportXmlDoc:TxmlDoc = TxmlDoc.newDoc("1.0")
' Create a new root node (bookstore) for the export document
Local exportRootNode:TxmlNode = TxmlNode.newNode("bookstore")

' Set the new root node as the document's root element
exportXmlDoc.setRootElement(exportRootNode)

' Loop through all books in the allBooks list
For Local book:TBook = EachIn allBooks
    ' Create a new book node under the root node
    Local bookNode:TxmlNode = exportRootNode.addChild("book")

    ' Set the book's attributes
    bookNode.setAttribute("category", book.category)
    If book.cover
        bookNode.setAttribute("cover", book.cover)
    EndIf

    ' Add title nodes with their corresponding language attributes
    For local lang:String = EachIn book.title.Keys()
        Local title:String = String(book.title.ValueForKey(lang))
        bookNode.addChild("title", title).addAttribute("lang", lang)
    Next

    ' Add author nodes
    For local author:String = EachIn book.authors
        bookNode.addChild("author", author)
    Next

    ' Add year and price nodes
    bookNode.addChild("year", book.year)
    bookNode.addChild("price", book.price)
Next

' Save the XML file as books.new.xml with formatting
exportXmlDoc.saveFile("books.new.xml", True, True)
' Release resources associated with exportXmlDoc
exportXmlDoc.free()

' Now, the new XML file has been created with the processed book data from the original XML file.
' You can check the output in the "books.new.xml" file.
```

This is the content of the generated `books.new.xml` file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<bookstore>
  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.0000000</price>
  </book>
  <book category="children">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.9899998</price>
  </book>
  <book category="web">
    <title lang="en">XQuery Kick Start</title>
    <author>James McGovern</author>
    <author>Per Bothner</author>
    <author>Kurt Cagle</author>
    <author>James Linn</author>
    <author>Vaidyanathan Nagarajan</author>
    <year>2003</year>
    <price>49.9900017</price>
  </book>
  <book category="web" cover="paperback">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.9500008</price>
  </book>
</bookstore>
```

### Summary

Throughout this short guide, we have demonstrated how to create a bookstore application using XML
files to store and manipulate book data. Here's a recap of the key steps we covered:

1. **Understanding XML Structure** : We examined the hierarchical structure of XML files, which consists
of elements, attributes, and text nodes. We also touched upon the similarities between XML and JSON.

2. **Creating a Bookstore Example** : We designed an XML file representing a bookstore that contains
information about various books, including their categories, titles, authors, publication years, and prices.

3. **XML Nodes** : We explored the concept of nodes in XML and their various types, including element
nodes, attribute nodes, and text nodes.

4. **Reading XML Files** : We demonstrated how to read an existing XML file using the [TxmlDoc](../../text/text.xml/txmldoc) class
and parse the book data into our custom `TBook` type.

5. **Storing Book Data** : We created a custom `TBook` type to store book data within our application and
added the book instances to a [TList](../../brl/brl.linkedlist/tlist).

6. **Accessing XML Elements** : We retrieved specific elements and their attributes from the XML file
using various [TxmlNode](../../text/text.xml/txmlnode) methods.

7. **Saving XML Files** : We discussed how to serialize our `TBook` objects and save them into a new
XML file, creating new TxmlNodes for each book and setting their attributes and child nodes accordingly.

By following these steps, we successfully built a bookstore application that reads, processes, and saves book
data using XML files.


## Types
| Type | Description |
|---|---|
| [TxmlNode](../../text/text.xml/txmlnode) | An XML Node. |
| [TxmlDoc](../../text/text.xml/txmldoc) | An XML Document. |
| [TxmlAttribute](../../text/text.xml/txmlattribute) | An xml element attribute name/value pair. (read only) |

## Methods

### `Method getName:String()`

Returns the element name.

<br/>

### `Method ToString:String() Override`

Returns a string representation of the element.

<br/>

### `Method ToStringFormat:String(format:Int = False)`

Returns a string representation of the element, optionally formatting the output.

<br/>

## Functions

### `Function XMLSetErrorCallback(callback(message:Byte Ptr))`

Sets the callback for handing errors, errors will print if not set.

<br/>

## Consts

### `Const MXML_DESCEND:Int = 1`

Descend when finding/walking.

<br/>

### `Const MXML_NO_DESCEND:Int = 0`

Don't descend when finding/walking.

<br/>

### `Const MXML_DESCEND_FIRST:Int = -1`

Descend for first find.

<br/>

