---
id: tjconv
title: TJConv
sidebar_label: TJConv
---

Serialises or deserializes objects to and from JSON.


## Methods

### `Method FromJson:Object(json:String, typeName:String)`

Deserializes the specified JSON string into an object of the specified type.

#### Returns
The deserialized object.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import Text.jconv

' a serialized object as json
Local txt:String = "{~qposition~q:{~qx~q:100,~qy~q:50},~qspeed~q:{~qx~q:50,~qy~q:75}}"

' create jconv instance
Local jconv:TJConv = New TJConvBuilder.Build()

' deserialize into a TPlayer object
Local player:TPlayer = TPlayer(jconv.FromJson(txt, "TPlayer"))

If player Then
	Print "Position = " + player.position.x + ", " + player.position.y
	Print "Speed    = " + player.speed.x + ", " + player.speed.y
End If

Type TPlayer
	Field position:TVec2
	Field speed:TVec2
End Type

Type TVec2
	Field x:Int
	Field y:Int
End Type
```
<br/>

### `Method FromJson:Object(json:String, obj:Object)`

Deserializes the specified JSON string into <b>obj</b>.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import Text.jconv

' a serialized object as json
Local txt:String = "{~qposition~q:{~qx~q:100,~qy~q:50},~qspeed~q:{~qx~q:50,~qy~q:75}}"

' create jconv instance
Local jconv:TJConv = New TJConvBuilder.Build()

' deserialize into a TPlayer object
Local player:TPlayer = TPlayer(jconv.FromJson(txt, "TPlayer"))

If player Then
	Print "Position = " + player.position.x + ", " + player.position.y
	Print "Speed    = " + player.speed.x + ", " + player.speed.y
End If

Type TPlayer
	Field position:TVec2
	Field speed:TVec2
End Type

Type TVec2
	Field x:Int
	Field y:Int
End Type
```
<br/>

### `Method FromJsonInstance:Object(json:TJSON, obj:Object)`

Deserializes the specified JSON instance into <b>obj</b>.

<br/>

### `Method ToJson:String(obj:Object)`

Serializes the specified object into its equivalent JSON representation.

#### Returns
The JSON representation as a [String](../../../brl/brl.blitz/#string).


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import Text.jconv


' create a person with some data
Local person:TPerson = New TPerson
person.firstName = "John"
person.lastName = "Smith"

person.address = New TAddress
person.address.line1 = "10 Somewhere Street"
person.address.city = "SomeTown"
person.address.state = "SomeState"

person.notes = New String[2]
person.notes[0] = "Note 1"
person.notes[1] = "Note 2"

' create jconv instance
Local jconv:TJConv = New TJConvBuilder.Build()

' serialize the person data
Local s:String = jconv.ToJson(person)
Print s
Local p:TPerson = TPerson(jconv.FromJson(s, "TPerson"))
Print jconv.ToJson(p)

Type TPerson

	Field firstName:String
	Field lastName:String

	Field address:TAddress

	Field notes:String[]
End Type

Type TAddress

	Field line1:String
	Field line2:String
	Field city:String
	Field state:String

End Type
```
<br/>

### `Method ToJsonInstance:TJSON(obj:Object)`

Serializes the specified object into its equivalent JSON representation.

#### Returns
A JSON instance.


<br/>

### `Method ToJson(obj:Object, stream:TStream)`

Serializes the specified object into its equivalent JSON representation and outputs to a [TStream](../../../brl/brl.stream/tstream).

The stream should be open and writeable.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import Text.jconv


' create a person with some data
Local person:TPerson = New TPerson
person.firstName = "John"
person.lastName = "Smith"

person.address = New TAddress
person.address.line1 = "10 Somewhere Street"
person.address.city = "SomeTown"
person.address.state = "SomeState"

person.notes = New String[2]
person.notes[0] = "Note 1"
person.notes[1] = "Note 2"

' create jconv instance
Local jconv:TJConv = New TJConvBuilder.Build()

' serialize the person data
Local s:String = jconv.ToJson(person)
Print s
Local p:TPerson = TPerson(jconv.FromJson(s, "TPerson"))
Print jconv.ToJson(p)

Type TPerson

	Field firstName:String
	Field lastName:String

	Field address:TAddress

	Field notes:String[]
End Type

Type TAddress

	Field line1:String
	Field line2:String
	Field city:String
	Field state:String

End Type
```
<br/>

