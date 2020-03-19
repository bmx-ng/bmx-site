---
id: text.xml
title: Text.XML
sidebar_label: Introduction
---


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

