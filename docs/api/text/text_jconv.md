---
id: text.jconv
title: Text.JConv
sidebar_label: Introduction
---


## Serialising with JConv

In the context of [Text.JConv](../text/text_jconv.md), serialisation is the mapping of BlitzMax objects to their JSON representation.

Take the following `TUser` type to start with :
```blitzmax
Type TUser
	Field name:String
	Field email:String
	Field age:int
End Type
```

The `TUser` object has three Fields,
* The user's `name` is a [String](../../brl/brl.blitz/#string)
* The user's `email` is a [String](../../brl/brl.blitz/#string)
* The user's `age` is an [Int](../../brl/brl.blitz/#int)

An application needs to convert a 'TUser' into its JSON representation, so assuming the member names
remained the same, we could expect a typical JSON representation to look like this :
```json
{
  "name" : "bob",
  "email" : "bob@example.com",
  "age" : 30
}
```

To convert a `TUser` to JSON, we first construct an instance of one for the user Bob :
```blitzmax
Local user:TUser = New TUser("bob", "bob@example.com", 30)
```

In order to do the serialisation, we need an instance of [TJConv](../../text/text.jconv/tjconv) to do the conversion :
```blitzmax
Local jconv:TJConv = New TJConvBuilder.Build()
```
The next step is to call the [ToJson](../../text/text.jconv/tjconv/#method-tojsonstringobjobject) method of [TJConv](../../text/text.jconv/tjconv), passing the object we want to serialise :
```blitzmax
Local json:String = jconv.ToJson(user)
```
The `json` [String](../../brl/brl.blitz/#string) contains the following value :
```json
{"name": "bob", "email": "bob@example.com", "age": 30}
```
Notice that [Text.JConv](../text/text_jconv.md) respects the field types, wrapping Strings in quotes, but not so for numbers.
Just a single method call is required to do the conversion of the entire object. This is useful when
working with more complex object structures.

Here's the example in full :
```blitzmax
SuperStrict

Framework BRL.StandardIO
Import Text.JConv

Local user:TUser = New TUser("bob", "bob@example.com", 30)

Local jconv:TJConv = New TJConvBuilder.Build()

Local json:String = jconv.ToJson(user)

Print json

Type TUser
	Field name:String
	Field email:String
	Field age:Int
	
	Method New(name:String, email:String, age:Int)
		Self.name = name
		Self.email = email
		Self.age = age
	End Method
End Type
```

## Deserialising with JConv

We'll start by creating a [String](../../brl/brl.blitz/#string) containing the JSON to convert :
```blitzmax
Local json:String = "{~qname~q: ~qbob~q, ~qemail~q: ~qbob@example.com~q, ~qage~q: 30}"
```
Again, we'll build an instance of [TJConv](../../text/text.jconv/tjconv) which will perform the conversion :
```blitzmax
Local jconv:TJConv = New TJConvBuilder.Build()
```
Finally, we need to map the JSON to a BlitzMax [Object](../../brl/brl.blitz/#object) with [FromJson](../../text/text.jconv/tjconv/#method-fromjsonobjectjsonstring-typenamestring) :
```blitzmax
Local user:TUser = TUser(jconv.FromJson(json, "TUser"))
```
Note that the second argument specifies the name of the [Type](../../brl/brl.blitz/#type) we want the [String](../../brl/brl.blitz/#string) to map the JSON to.
Without this *hint*, [Text.JConv](../text/text_jconv.md) wouldn't know what [Type](../../brl/brl.blitz/#type) to create from the text.

The `user` object returned from [FromJson](../../text/text.jconv/tjconv/#method-fromjsonobjectjsonstring-typenamestring) will have its fields populated accordingly.

Here's the example in full :
```blitzmax
SuperStrict

Framework BRL.StandardIO
Import Text.JConv

Local json:String = "{~qname~q: ~qbob~q, ~qemail~q: ~qbob@example.com~q, ~qage~q: 30}"

Local jconv:TJConv = New TJConvBuilder.Build()

Local user:TUser = TUser(jconv.FromJson(json, "TUser"))

Print "name  = " + user.name
Print "email = " + user.email
Print "age   = " + user.age

Type TUser
	Field name:String
	Field email:String
	Field age:Int
	
	Method New(name:String, email:String, age:Int)
		Self.name = name
		Self.email = email
		Self.age = age
	End Method
End Type
```

## Serialising Nested Objects

[Text.JConv](../text/text_jconv.md) can also handle the conversion of more complex objects that include the nesting of other non-primitive objects.
To demostrate this we will extend the `TUser` type to include an address, which will be represented by the `TAddress` [Type](../../brl/brl.blitz/#type) :
```blitzmax
Type TUser
	Field name:String
	Field email:String
	Field age:Int
	Field address:TAddress
End Type

Type TAddress
	Field line1:String
	Field city:String
	Field country:String
End Type
```
In BlitzMax the two models are cleanly separated by types, and the `TAddress` reference is held in the `address` [Field](../../brl/brl.blitz/#field) of the user.
In JSON however, the address must be nested directly within the user object, as we can see here :
```json
{
  "name" : "bob",
  "email" : "bob@example.com",
  "age" : 30,
  "address" : {
    "line1" : "66 Some Street",
    "city" : "Someville",
    "country" : "Someland"
  }
}
```
We'll initially create the required BlitzMax objects :
```blitzmax
Local address:TAddress = New TAddress("66 Some Street", "Someville", "Someland")
Local user:TUser = New TUser("bob", "bob@example.com", 30, address)
```
And then serialise the user with an instance of [TJConv](../../text/text.jconv/tjconv) :
```blitzmax
Local jconv:TJConv = New TJConvBuilder.Build()
Local json:String = jconv.ToJson(user)
```
The resulting conversion to JSON is :
```json
{"name": "bob", "email": "bob@example.com", "age": 30, "address": {"line1": "66 Some Street", "city": "Someville", "country": "Someland"}}
```
As you can see, [Text.JConv](../text/text_jconv.md) has correctly nested the address inside the user as a JSON object.

## Deserialising Nested Objects

In the real world, the developer is often presented with a JSON API from which they need to construct the relevant BlitzMax
Types in order to import the data.

As we have seen previously, the structure of a JSON object maps relatively well to a BlitzMax [Object](../../brl/brl.blitz/#object) and its fields.
In the next example, we'll start with a JSON object and construct a set of BlitzMax Types that we can use to deserialise the
data in order to use it within our BlitzMax application.

In this particular example, we will be retrieving some airport information from an online flight information resource :
```json
{
  "id": "BER",
  "code": "BER",
  "name": "Berlin Brandenburg",
  "slug": "berlin-brandenburg-berlin-germany",
  "timezone": "Europe/Berlin",
  "city": {
	"id": "berlin_de",
	"name": "Berlin",
	"code": "BER",
	"slug": "berlin-germany",
	"country": {
	  "id": "DE",
	  "name": "Germany",
	  "slug": "germany",
	  "code": "DE"
	},
	"region": {
	  "id": "central-europe",
	  "name": "Central Europe",
	  "slug": "central-europe"
	},
	"continent": {
	  "id": "europe",
	  "name": "Europe",
	  "slug": "europe",
	  "code": "EU"
	}
  },
  "location": {
	"lat": 52.366667,
	"lon": 13.503333
  }
}
```
As you can see, there are several levels of nesting. The main airport object has a nested `city`, and within that `country`, `region` and `continent` objects.
Also notice that many of the objects share a similar structure (`id`, `name`, `slug`, and `code`).
We can use BlitzMax's [Type](../../brl/brl.blitz/#type) polymorphism by creating a base [Type](../../brl/brl.blitz/#type) and avoid a lot of duplication :
```blitzmax
Type TBase
	Field id:String
	Field code:String
	Field name:String
	Field slug:String
End Type
```

Next, we'll define the BlitzMax types that will contain the more specific information :
```blitzmax
Type TAirport Extends TBase
	Field timezone:String
	Field city:TCity
	Field location:TLocation
End Type

Type TCity Extends TBase
	Field country:TCountry
	Field region:TRegion
	Field continent:TContinent
End Type

Type TCountry Extends TBase
End Type

Type TRegion Extends TBase
End Type

Type TContinent Extends TBase
End Type

Type TLocation
	Field lat:Double
	Field lon:Double
End Type
```
Each [Type](../../brl/brl.blitz/#type) represents a particular JSON object from original nested JSON. `TCity` contains fields for `country`, `region` and `continent`, each of which are types
representing that particular piece of information.

Where the naming of your fields must match those of the JSON objects, how you name your types is not important for JSON mapping, but you'll generally give them a
name that reflects the kind of information they contain.

Finally, we can use these types to de-serialise a matching JSON object, as shown in this complete example :
```blitzmax
SuperStrict

Framework BRL.StandardIO
Import Text.JConv

Local data:String = "{~qid~q:~qBER~q,~qcode~q:~qBER~q,~qname~q:~qBerlin Brandenburg~q,~qslug~q:~qberlin-brandenburg-berlin-germany~q,~qtimezone~q:~qEurope/Berlin~q,~qcity~q:{~qid~q:~qberlin_de~q,~qname~q:~qBerlin~q,~qcode~q:~qBER~q,~qslug~q:~qberlin-germany~q,~qcountry~q:{~qid~q:~qDE~q,~qname~q:~qGermany~q,~qslug~q:~qgermany~q,~qcode~q:~qDE~q},~qregion~q:{~qid~q:~qcentral-europe~q,~qname~q:~qCentral Europe~q,~qslug~q:~qcentral-europe~q},~qcontinent~q:{~qid~q:~qeurope~q,~qname~q:~qEurope~q,~qslug~q:~qeurope~q,~qcode~q:~qEU~q}},~qlocation~q:{~qlat~q:52.366667,~qlon~q:13.503333}}"

Local jconv:TJConv = New TJConvBuilder.Build()
Local airport:TAirport = TAirport(jconv.FromJson(data, "TAirport"))

Print "Airport    : " + airport.name
Print "  City     : " + airport.city.name
Print "  Location : " + airport.location.lat + ", " + airport.location.lon

Type TBase
	Field id:String
	Field code:String
	Field name:String
	Field slug:String
End Type

Type TAirport Extends TBase
	Field timezone:String
	Field city:TCity
	Field location:TLocation
End Type

Type TCity Extends TBase
	Field country:TCountry
	Field region:TRegion
	Field continent:TContinent
End Type

Type TCountry Extends TBase
End Type

Type TRegion Extends TBase
End Type

Type TContinent Extends TBase
End Type

Type TLocation
	Field lat:Double
	Field lon:Double
End Type
```

## Customising Field Names

Occasionally, a JSON object will use a key that has the same name as a reserved keyword in BlitzMax. In that case, you are unable create a field
using the desired name. Fortunately, [Text.JConv](../text/text_jconv.md) allows you use metadata to specify the serialised name of a given field using the `serializedName`
metadata property.

Take the following JSON object as an example :
```json
{
	"field" : "hello",
	"for" : "ever"
}
```
Neither `field` nor `for` are valid names for fields, but we can use the `serializedName` feature to create a valid BlitzMax [Type](../../brl/brl.blitz/#type) that can
deserialise this object :
```blitzmax
Type TCustomFields
	Field field_:String { serializedName="field" }
	Field anotherField:String { serializedName = "for" }
End Type
```
As this example demonstrates, when using the `serializedName` metadata property, you can give any name to your fields and the data will still be mapped from
the JSON object correctly.

Here the example in full :
```blitzmax:
SuperStrict

Framework BRL.StandardIO
Import Text.JConv

Local data:String = "{~qfield~q:~qhello~q,~qfor~q:~qever~q}"

Local jconv:TJConv = New TJConvBuilder.Build()
Local custom:TCustomFields = TCustomFields(jconv.FromJson(data, "TCustomFields"))

Print custom.field_
Print custom.anotherField

Type TCustomFields
	Field field_:String { serializedName="field" }
	Field anotherField:String { serializedName = "for" }
End Type
```

In addition to `serializedName`, another metadata property is available during deserialisation, `alternateName`. If you consider `serializedName` as being
the default value, `alternateName` allows you to map other JSON keys to a particular field. 

For example, given a `TUser` object where we are already mapping the JSON key `full_name` to the field `name` :
```blitzmax
Type TUser
	Field name:String { serializedName = "full_name" }
	Field email:String
	Field age:int
End Type
```
We decide we also want ingest similar data from another system in our application. Instead of `full_name`, the other system uses
`username` for this value. Using the `alternateName` metadata property we can add a comma-delimited list of other names, and our [Type](../../brl/brl.blitz/#type) becomes :
```blitzmax
Type TUser
	Field name:String { serializedName = "full_name", alternateName ="username" }
	Field email:String
	Field age:int
End Type
```
`alternateName` is only available during deserialisation. [Text.JConv](../text/text_jconv.md) will use either the [Field](../../brl/brl.blitz/#field) name or the `serializedName` when mapping a
BlitzMax object to JSON.

The following two sets of JSON would map to a `TUser` object and set the `name` [Field](../../brl/brl.blitz/#field) appropriately :
```json
{
  "full_name" : "Bob",
  "email" : "bob@example.com"
}
```

```json
{
  "username" : "userBob",
  "email" : "bob@example.com"
}
```

If there are multiple fields in the JSON that match, [Text.JConv](../text/text_jconv.md) will apply the value that is processed last. So, in the following example,
deserialising the JSON would result in the `name` [Field](../../brl/brl.blitz/#field) containing the value `userBob` :
```json
{
  "full_name" : "Bob",
  "username" : "userBob",
  "email" : "bob@example.com"
}
```

## Ignoring Fields

If you don't want a field to be mapped to or from JSON there are some metadata properties that you can apply to your types in order to do so.
The first, `transient`, completely disables field from mapping in either direction.

If you want more finer grained control, the metadata properties `noSerialize` and `noDeserialize` can be used instead.
The `noSerialize` property instructs [Text.JConv](../text/text_jconv.md) not to serialize a particular field to JSON, but it allows data from a JSON object to be
deserialized into the [Field](../../brl/brl.blitz/#field).
On the other hand, `noDeserialize` prevents data from a JSON object from deserializing into the [Field](../../brl/brl.blitz/#field), but does allow it to be serialized into
a JSON object.

We'll apply some properties to the `TUser` object to demonstrate the options :
```blitzmax
Type TUser
	Field name:String
	Field email:String { noSerialize }
	Field age:int { noDeserialize }
	Field passwordHash:String { transient }
End Type
```
Based on the above example, when serializing an instance of `TUser`, only the `name` and `age` fields would be mapped to JSON.
Similarly, only the `name` and `email` fields would be mapped from a JSON object.

The following is a complete example of these properties in action :
```blitzmax
SuperStrict

Framework BRL.StandardIO
Import Text.JConv

Local user:TUser = New TUser("bob", "bob@example.com", 30, "xxxx")

Local jconv:TJConv = New TJConvBuilder.Build()

Local json:String = jconv.ToJson(user)

Print "json  : " + json

json = "{~qname~q: ~qbob~q, ~qemail~q: ~qbob@example.com~q, ~qage~q: 30, ~qpasswordHash~q: ~qxxxx~q}"

user = TUser(jconv.FromJson(json, "TUser"))

Print "name  : " + user.name
Print "email : " + user.email
Print "age   : " + user.age
Print "hash  : " + user.passwordHash

Type TUser
	Field name:String
	Field email:String { noSerialize }
	Field age:Int { noDeserialize }
	Field passwordHash:String { transient }

	Method New(name:String, email:String, age:Int, ph:String)
		Self.name = name
		Self.email = email
		Self.age = age
		Self.passwordHash = ph
	End Method
End Type
```

## Configuring TJConv with the Builder

You may have noticed, that by default [Text.JConv](../text/text_jconv.md) serialises the JSON into a single line.
You can change this behaviour with one ofthe builder's configurable options.

The builder uses what is known as a fluent interface, or method chaining design, where a sequence of method calls can be used to construct the [TJConv](../../text/text.jconv/tjconv) instance.

For example, the following builder creates an instance of [TJConv](../../text/text.jconv/tjconv) which will serialise objects to JSON with a decimal a precision of 2 places and compact objects :
```blitzmax
Local jconv:TJConv = New TJConvBuilder.WithPrecision(2).WithCompact().Build()
```

### WithIndent

The [WithIndent](../../text/text.jconv/tjconvbuilder/#method-withindenttjconvbuilderindentint) method of [TJConvBuilder](../../text/text.jconv/tjconvbuilder) specifies the number of spaces to use for indenting of nested objects. The default of 0 (zero)
means not to use pretty-printing.

This is an example of `TUser` using the default options :
```json
{"name": "Bob", "email": "bob@example.com", "age": 30}
```
And this is an example of building with [WithIndent](../../text/text.jconv/tjconvbuilder/#method-withindenttjconvbuilderindentint) :
```json
{
  "name": "Bob",
  "email": "bob@example.com",
  "age": 30
}
```

### WithCompact

On the other hand, JSON can be compacted further using the [WithCompact](../../text/text.jconv/tjconvbuilder/#method-withcompacttjconvbuilder) method, which works to remove extra spaces :
```json
{"name":"Bob","email":"bob@example.com","age":30}
```
### WithPrecision
The representation of decimal numbers can be controlled by the [WithPrecision](../../text/text.jconv/tjconvbuilder/#method-withprecisiontjconvbuilderprecisionint) method, which specifies the maximum number of decimal places to used.

For example, the default representation of a [Type](../../brl/brl.blitz/#type) `TPoint` :
```blitzmax
Type TPoint
	Field x:Double
	Field y:Double
End Type
```
would normally result in the following JSON with fields of the values (10.565, 15.912) :
```json
{"x": 10.565, "y": 15.912000000000001}
```
Using a maximum precision of 3 (`WithPrecision(3)`), the resulting JSON would become :
```json
{"x": 10.565, "y": 15.912}
```

### WithEmptyArrays

By default, [Null](../../brl/brl.blitz/#null)/empty arrays are not serialised at all. That is, the field is not included in the JSON object.
The [WithEmptyArrays](../../text/text.jconv/tjconvbuilder/#method-withemptyarraystjconvbuilder) option can be enabled to generate an empty array (`[]`] instead.

### WithBoxing

Primitive numbers, by their very nature in BlitzMax, have no concept of nullability. JSON, conversely, can represent any field as a null value,
either by simply not including it in the object, or by having the value `null`.

To support this, [Text.JConv](../text/text_jconv.md) provides an option to use "boxed" primitives in your types. A Boxed primitive is just an instance of a [Type](../../brl/brl.blitz/#type) that has
a value field of the appropriate numeric [Type](../../brl/brl.blitz/#type). Using a boxed primitive then allows a field to contain a value, or be [Null](../../brl/brl.blitz/#null).

This feature is enabled by using the [WithBoxing](../../text/text.jconv/tjconvbuilder/#method-withboxingtjconvbuilder) option of the builder.

As an example, suppose there is a JSON object which has a numeric field `failures`. The schema specifies that this value can either be `null` or have a value
greater than zero :
```json
[
  {
    "jobId": "ABC123",
    "failures": 3,
    "lastError": "overflow"
  },
  {
    "jobId": "DEF456"
  }
]
```
Deserialising this wouldn't be a problem, as our `TJob` [Type](../../brl/brl.blitz/#type) could represent no `failures` by the number zero :
```blitzmax
Type TJob
	Field jobId:String
	Field failures:Int
	Field lastError:String
End Type
```
However, were we required to serialise our [Type](../../brl/brl.blitz/#type) to JSON for use by the API, we'd potentially fail schema validation by passing zero as a value for
the `failures` [Field](../../brl/brl.blitz/#field).

Utilising the boxing feature, we could instead define the `failures` [Field](../../brl/brl.blitz/#field) as `TInt` :
```blitzmax
Type TJob
	Field jobId:String
	Field failures:TInt
	Field lastError:String
End Type
```
Which would, for [Null](../../brl/brl.blitz/#null) values, result in the `features` [Field](../../brl/brl.blitz/#field) not being serialized to JSON.

Here's a full example highlighting the use of boxing :
```blitzmax
SuperStrict

Framework BRL.StandardIO
Import Text.JConv

Local job1:TJob = New TJob("ABC123", 3, "overflow")
Local job2:TBoxedJob = New TBoxedJob("DEF456", 0, Null)

Local jconv:TJConv = New TJConvBuilder.WithBoxing().WithIndent(2).Build()

Print jconv.ToJson(job1)
Print jconv.ToJson(job2)

Type TJob
	Field jobId:String
	Field failures:Int
	Field lastError:String
	
	Method New(jobId:String, failures:Int, lastError:String)
		Self.jobId = jobId
		Self.failures = failures
		Self.lastError = lastError
	End Method
End Type

Type TBoxedJob
	Field jobId:String
	Field failures:TInt
	Field lastError:String

	Method New(jobId:String, failures:Int, lastError:String)
		Self.jobId = jobId
		If failures > 0 Then
			Self.failures = New TInt(failures)
		End If
		Self.lastError = lastError
	End Method
End Type
```
Running the above example would result in the following output :
```
{
  "jobId": "ABC123",
  "failures": 3,
  "lastError": "overflow"
}
{
  "jobId": "DEF456"
}
```

### RegisterSerializer

Text.JConv can be extended with custom serializers for types which need a specific JSON representation.
This is useful when:

* A type should be represented differently to the default field-to-object mapping (for example, a vector as an array `[x, y]`).
* A type is not easily serialised using reflection (for example, it stores its data internally, or exposes it via methods rather than fields).
* You need to interoperate with an external JSON schema (for example, dates as ISO-8601 strings).

A custom serializer is registered with the builder, and will be used whenever JConv encounters a field of the specified type during serialisation
(and, where supported by the serializer, during deserialisation too).

#### Signature

    Method RegisterSerializer:TJConvBuilder(sourceType:String, serializer:Object)

* `sourceType` is the name of the BlitzMax `Type` you want to handle (for example `"TVec2"`).
* `serializer` is an instance of a serializer, typically a type that `Extends TJConvSerializer`.

> **Note:** Serializers must be registered **before** calling `Build()`.  
> If multiple serializers are registered for the same `sourceType`, the most recently registered serializer will be used.

#### Example : Serialising a vector as an array

By default, this type:

```
    Type TVec2
        Field x:Int
        Field y:Int
    End Type
```

would be serialized as an object:

```
    {"x": 10, "y": 20}
```

If your JSON schema expects a 2-element array instead (`[10, 20]`), you can register a custom serializer:

```
    SuperStrict

    Framework BRL.StandardIO
    Import Text.JConv
    Import Text.JSON

    Local v:TVec2 = New TVec2(10, 20)

    Local jconv:TJConv = New TJConvBuilder.RegisterSerializer("TVec2", New TVec2Serializer).Build()

    Print jconv.ToJson(v) ' -> [10, 20]

    Type TVec2
        Field x:Int
        Field y:Int

        Method New(x:Int, y:Int)
            Self.x = x
            Self.y = y
        End Method
    End Type

    ' A simple serializer which converts TVec2 <-> JSON array.
    Type TVec2Serializer Extends TJConvSerializer

        ' Called when serialising a TVec2 instance to JSON.
        Method Serialize:TJSON(source:Object, sourceType:String) Override
            Local v:TVec2 = TVec2(source)

			If v Then
				Local arr:TJSONArray = New TJSONArray
				arr.AddLast(New TJSONInteger(v.x))
				arr.AddLast(New TJSONInteger(v.y))
			End If

            Return arr
        End Method

        ' Called when deserialising JSON back into a TVec2 (if required).
        Method Deserialize:Object(json:TJSON, typeId:TTypeId, obj:Object) Override
            Local arr:TJSONArray = TJSONArray(json)
            If Not arr Or arr.Count() < 2 Then
				Return Null
			End If

			If Not obj Then
				Local x:Int = TJSONInteger(arr.ValueAtIndex(0)).Value
				Local y:Int = TJSONInteger(arr.ValueAtIndex(1)).Value
            	obj = New TVec2(x, y)
			End If

			Return obj
        End Method

    End Type
```

#### Notes

* The example above uses `Text.JSON`'s JSON node types (`TJSONArray`, `TJSONInteger`, etc.) to build and read JSON values.
* Keep serializers small and focused: ideally, each serializer handles one `sourceType`.
* If you need to customise the JSON output for a field but you do not control the type (for example, it comes from another module),
  using `RegisterSerializer` is generally preferable to adding extra wrapper types just for JSON purposes.

## Types
| Type | Description |
|---|---|
| [TJConvBuilder](../../text/text.jconv/tjconvbuilder) | Creates an instance of [TJConv](../../text/text.jconv/tjconv) with custom settings. |
| [TJConv](../../text/text.jconv/tjconv) | Serialises or deserializes objects to and from JSON. |
| [TJConvSerializer](../../text/text.jconv/tjconvserializer) | Serializes BlitzMax type to JSON. |

