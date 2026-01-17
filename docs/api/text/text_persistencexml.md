---
id: text.persistencexml
title: Text.PersistenceXml
sidebar_label: Introduction
---


<p>Persistence is a means of storing data beyond the execution of a program, in such a way that the data can be reproduced, in memory, at a later time.</p>
<p>The Text.Persistence module attempts to do this through the use of reflection and xml.</p>
<h3>Usage</h3>
<p>
The most simple usage is to pass an object into TPersist.Serialize(), which returns the serialized representation of it as a String.
</p>
<p>
To reverse the process, the serialized String can be passed into TPersist.DeSerialize(), returning a new Object instance, which is essentially a "deep"
copy of the original object.
</p>
<p>
There are also methods, SerializeToFile(), SerializeToDoc(), and SerializeToStream() which output to different formats apporpriately.
</p>
<p>
The DeSerialize() function itself can take a TxmlDoc, TStream or String data as a parameter, as well as there being the specialised methods of
DeSerializeFromDoc(), DeSerializeFromFile(), and DeSerializeFromStream().
</p>
<p>
</p>
An XML-based object-persistence framework.


## Types
| Type | Description |
|---|---|
| [TPersist](../../text/text.persistencexml/tpersist) | Object Persistence. |

## Methods

### `Method TypeName:String() Abstract`

Returns the typeid name that the serializer handles - For example, "TMap"

<br/>

### `Method Serialize(tid:TTypeId, obj:Object, node:TxmlNode) Abstract`

Serializes the object.

<br/>

### `Method Deserialize:Object(objType:TTypeId, node:TxmlNode) Abstract`

Deserializes the object.

<br/>

### `Method Clone:TXMLSerializer() Abstract`

Returns a new instance.

<br/>

### `Method SerializeFields(tid:TTypeId, obj:Object, node:TxmlNode)`

Iterates over all of the object fields, serializing them.

<br/>

### `Method Contains:Int(ref:String, obj:Object)`

Returns True if the reference has already been processed.

<br/>

### `Method AddObjectRef(ref:String, obj:Object)`

Adds the object reference to the object map, in order to track what object instances have been processed.

<br/>

### `Method AddObjectRefAsRequired:Int(ref:String, obj:Object)`

Convenience method for checking and adding an object reference.

#### Returns
True if the object has already been processed.


<br/>

### `Method AddObjectRefNode(node:TxmlNode, obj:Object)`

Adds the xml reference to the object map, in order to track what object instances have been processed.

<br/>

### `Method GetObjRef:String(obj:Object)`

Returns a String representation of an object reference, suitable for serializing.

<br/>

### `Method SerializeField(f:TField, obj:Object, node:TxmlNode)`

Serializes a single field.

<br/>

