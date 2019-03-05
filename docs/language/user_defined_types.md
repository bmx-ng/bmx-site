---
id: user_defined_types
title: User Defined Types
sidebar_label: User Defined Types
---

## Introduction

User defined types allow you to group related data and program code together into a single entity known as an object.

The general syntax for declaring a user defined type is:

> `Type Typename Extends Typename Implements Interfacename, AnotherInterfacename`

**Typename** must be a valid identifier.

The [Extends] part is optional. If omitted, the user defined type extends the built in [Object] type.

The [Implements] part is also optional.

Once declared, you can create instances of such types using the [New] operator.

Within a user defined type, you can declare the following:

| Declaration | Description |
|---|---|
| Fields | Fields are variables associated with each instance of a user defined type. Fields are declared in the same way as local or global variables, only using the **[Field]** keyword. To access the fields of an object, use the `.` operator. |
| Methods | Methods are function-like operations associated with each instance of a user defined type. Methods are declared in the same way as functions, only using the **[Method]** keyword. To access the methods of an object, use the `.` operator. Program code within a method can access other fields, methods, functions, consts and globals within the same object simply by referring to them by name. |
| Functions | These are declared in the same way as 'normal' functions, and can be accessed using the `.` operator. Unlike methods, functions within a type are not associated with instances of the type, but with the type itself. This means such functions can be used regardless of whether or not any instances of the type have been created yet. Functions within a type can access other functions, consts or globals within the same type by referring to them by name. |
| Consts and Globals | These are declared in the same way as 'normal' consts and globals, and be accessed using the `.` operator. As with type functions, these are not associated with instances of the type, but with the type itself. |

Here is an example of a user defined type:
```blitzmax
Type MyType
	Const INC=1
	Global Counter
	Field x,y,z

	Method Sum()
		Counter=Counter+INC
		Return x+y+z
	End Method

	Function Create:MyType()
		Return New MyType
	End Function
End Type

Local MyObject:MyType=MyType.Create()

MyObject.x=10
MyObject.y=20
MyObject.z=30

Print MyObject.Sum()
Print MyType.Counter
```

Note that the object is created indirectly by calling MyType's Create function instead of [New]. This is a
frequently used technique that allows you to perform (possibly complex) initialization of an object before it is
returned to the user.

## Inheritance and polymorphism

User defined types can extend other user defined types using the Extends keyword. Extending a type means
adding more functionality to an existing type. The type being extended is often referred to as the base type,
while the resulting, extended type is often referred to as the derived type:

```blitzmax
Type BaseType
	Field x,y,z

	Method Sum()
		Return x+y+z
	End Method
End Type

Type DerivedType Extends BaseType
	Field p,q,r

	Method Sum() Override
		Return x+y+z+p+q+r
	End Method
End Type
```

This technique is also known as inheritance, as the derived type is inheriting functionality from the
base type (although no one had to die in the process!). Note that DerivedType actually has 6 fields -
x,y,z,p,q and r. It inherits x,y,z from BaseType and adds its own fields p,q,r.

BlitzMax allows you to use a derived type object anywhere a base type object is expected. This works because a
derived type object is a base type object - only with some 'extras'. For example, you can assign a derived type
object to a base type variable, or pass a derived type object to a function expecting a base type parameter.
This is really the whole point of inheritance - its not just a technique to save typing.

This behaviour allows for a very useful technique known as polymorphism. This means the ability of an object
to behave in different ways depending on its type. This is achieved in BlitzMax by *overriding* methods.

Notice in the above example that the method `Sum` has the same signature (parameters and return type) in both
the base type and the derived type, and that the [Override] definition is applied to the overriding method. To override
a method in a derived type it must have the same name as an existing method in a base type, and it must have the same
signature as the method in the base type, and use the [Override] definition to confirm that the method should actually
be an override of a method from a base type.

But now we have 2 versions of `Sum` - which gets called? This depends on the *runtime type* of an object. For example:
```blitzmax
Type BaseType
	Method Test:String()
		Return "BaseType.Test"
	End Method
End Type

Type DerivedType Extends BaseType
	Method Test:String() Override
		Return "DerivedType.Test"
	End Method
End Type

Local x:BaseType=New BaseType
Local y:BaseType=New DerivedType

Print x.Test()	'prints "BaseType.Test" - x's runtime type is BaseType
Print y.Test()	'prints "DerivedType.Test" - as y's runtime type is DerivedType
```

Note that when the variable `y` is initialized, it is assigned a DerivedType object, even though `y` is
a BaseType variable. This is legal because derived types can be used in place of base types. However, this
means the runtime type of `y` is actually DerivedType. Therefore, when `y.Test()` is called, the DerivedType method
`Test()` is called.

The use of [Override] is intended to prevent common errors when working with extended types. For example, imagine in the
previous example, we had decided to change the signature of the `Test()` method in order for it to provide
more functionality, but in doing so we neglected to also change that of the derived method.
```blitzmax
Type BaseType
	Method Test:String(action:Int)
		Return "BaseType.Test(" + action + ")"
	End Method
End Type

Type DerivedType Extends BaseType
	Method Test:String() Override
		Return "DerivedType.Test"
	End Method
End Type
```

Compilation would now fail, because the `Test()` method in the derived type is no longer overriding the `Test()`
method of its base type - the signatures are different!.

However, if this was intended, you could remove the [Override] from the derived method, and the method would
now become an *overloaded* method.

## Overloading

Overloading is similar to overriding, with the ability to create multiple functions or methods of the
same name with different implementations. Overloaded functions/methods must have a unique signature.

For example, the methods `Show()` and `Show(text:String)` in the same [Type] are overloaded methods.

```blitzmax
Type TMyType

    Method Show()
        Print "Hello"
    End Method

    Method Show(text:String)
        Print text
    End Method
End Type
```

To call the latter, a [String] must be passed as an argument, whereas to call the first, no argument is supplied.

> Be careful not to assign default values to parameters in some cases where it might introduce ambiguity - the
> compiler not knowing which of the two methods to use.

### Operator Overloading

In addition to overloading by method and function names, BlitzMax also supports the overloading of *operators*, like
`+` and `=`, which are treated like just like normal polymorphic methods, and have different behaviours depending on their arguments.

The use of operator overloading can arguably make code easier to read in some cases, as it
simplifies the syntax of some operations.

As an example, imagine we have a type to which you can add an integer. Normally
you might create an `Add(value:Int)` method, like so :

```blitzmax
Type TMyType
    Field total:Int

    Method Add(value:Int)
        total :+ value
    End Method
End Type
```
To use it, you could call it thus :
```blitzmax
myType.Add(10)
```

With operator overloading, we can create a special method using the [Operator] keyword followed
by the specific operator, and then implement the rest of the method as usual.
```blitzmax
Type TMyType
    Field total:Int

    Method Operator :+(value:Int)
        total :+ value
    End Method
End Type
```
As you can see, the two versions looks almost the same, apart from the name of the method.
The operator we have chosen here is `:+`, which is the addition assignment operator.

With the overloaded operator, we can now write :
```blitzmax
myType :+ 10
```

Any of the following operators can be overloaded : `*` `/` `+` `-` `&` `|` `~` `:*` `:/` `:+` `:-` `:&` `:|`
`:~` `<` `>` `<=` `>=` `=` `<>` `mod` `shl` `shr` `:mod` `:shl` `:shr` `[]` `[]=`

Generally, an overloaded operator is expected to behave in a similar way to the built in operator. Operator `+`
is expected to add rather than multiply, for example. However, there are no restrictions in BlitzMax on how
you actually implement the overload.

#### Index Operator overloading

The operators `[]` and `[]=` allow user defined types to support indexed element access using brackets (`[]`)
much in the same way you can use them to access arrays, strings and pointers.

* `Method Operator []` is the index operator. It should take one or more indices as parameters and return the corresponding element.
* `Method Operator []=` is the index assignment operator. It should take one or more indices and the to-be-assigned element as parameters and not return anything.

As an example, a wrapper type for an array that automatically grows when accessing an
out-of-bounds index can be written like this :

```blitzmax
SuperStrict
Framework BRL.StandardIO

Type TDynamicIntArray
	Private

	Field array:Int[]
	Field startIndex:Int = 0

	Public

	Method Operator [] :Int(index:Int)
		If index < startIndex Or index >= startIndex + array.length Then Return 0
		Return array[index - startIndex]
	End Method

	Method Operator []= (index:Int, value:Int)
		If index < startIndex Then
			array = array[index - startIndex..]
			startIndex = index
		Else If index >= startIndex + array.length Then
			array = array[..index - startIndex + 1]
		End If
		' ^ it's inefficient to grow arrays like this, but it's just a simple example
		array[index - startIndex] = value
	End Method
End Type

Local a:TDynamicIntArray = New TDynamicIntArray
a[-1] = -1 ' this calls Operator []=
a[2] = 2   ' this calls Operator []=
a[4] = 4   ' this calls Operator []=
For Local i:Int = -2 To 5
	Print i + ": " + a[i] ' this calls Operator []
Next
```

Indices can be of any type; they do not need to be #Int :

```blitzmax
SuperStrict
Framework BRL.StandardIO
Import BRL.Map

Type TMapWithOperators Extends TMap ' extending TMap to keep the example simple
	Method Operator [] :Object(key:Object)
		Return ValueForKey(key)
	End Method

	Method Operator []= (key:Object, value:Object)
		Insert key, value
	End Method
End Type

Local map:TMapWithOperators = New TMapWithOperators

' insert an element
map["hello"] = "world"

' retrieve the element
Print map["hello"].ToString()
```

And like the built-in multidimensional arrays, user-defined types can also support multiple indices :
```blitzmax
SuperStrict
Framework BRL.StandardIO

Type TMultidimTest
	Method Operator [] :String(index0:Int, index1:Int, index2:Float)
		Return "Element at [" + index0 + ", " + index1 + ", " + index2 + "]"
	End Method
End Type

Local x:TMultidimTest = New TMultidimTest
Print x[1, 2, 3]
```

## Interface

An [Interface] is a reference type. It is similar to an [Abstract] type, but it may **only** contain
method signatures. A derived type [Implements] the interface, thereby inheriting its abstract
methods. An instance of an interface itself cannot be created. Methods of an interface are always
[Public].

```blitzmax
Interface ISerializable
    Method SerializeToJson(stream:TStream)
End Interface
```

Once an interface is defined, a type can [Implement] it:
```blitzmax
Type TPlayer Implements ISerializable
    Field name:String

    Method SerializeToJson(stream:TStream)
        stream.WriteLine("{~qname~q : ~q" + name + "~q}")
    End Method
End Type
```

Interfaces can be more useful than simply extending a base type because a derived type can implement
as many different interfaces as required, allowing a particular type to be used in many different
and potentially unrelated contexts.

## Self and Super

Program code inside a method can access two special variables named [Self] and [Super].
[Self] refers to the object associated with the method, and its type is that of the user defined
type the method is declared in.

[Super] also refers to the object associated with the method, however its type is that of the user
defined type being extended. This can be very useful if you need to call the base type version of
the currently executing method:
```blitzmax
Type BaseType
	Method Test()
		Print "BaseType.Test"
	End Method
End Type

Type DerivedType Extends BaseType
	Method Test()
		Super.Test	'calls BaseType's Test() method first!
		Print "DerivedType.Test"
	End Method
End Type

Local x:BaseType=New DerivedType

x.Test
```

## New and Delete

User defined types can optionally declare two special methods named [New] and [Delete]. [Delete] must take no
arguments, whereas [New] can be overloaded, with the default having no arguments.

The [New] method is called when an object is first created with the [New] operator. This allows you to perform
extra initialization code.

The [Delete] method is called when an object is discarded by the memory manager. Note that critical
shutdown operations such as closing files etc should not be placed in the [Delete], as you can't always
be sure when [Delete] will be called.


## Abstract and Final

User defined types and methods can also be declared abstract or final by adding [Abstract] or [Final]
to the appropriate declaration:
```blitzmax
Type AbstractType Abstract
	Method AbstractMethod() Abstract
End Type

Type FinalType Final
	Method FinalMethod() Final
		Print "FinalType.FinalMethod"
	End Method
End Type
```
Declaring a user defined type abstract means that you can not create instances of it using [New]. However,
it is still possible to extend such types and create instances of these derived types. Declaring a method
abstract means that the method has no implementation and must be implemented by a derived type. Any user
defined type with at least one abstract method is itself abstract.

Declaring a user defined type final means that it can not be extended. Declaring a method final
means that derived types can not override the method. All methods of a final user defined type are themselves final.

Abstract types and methods are mostly used to create 'template' types and methods that leave implementation
details up to derived types.

Final types and methods are mostly used to prevent modification to a type's behaviour.

[Extends]: ../../api/brl/brl.blitz/#extends
[Field]: ../../api/brl/brl.blitz/#field
[Method]: ../../api/brl/brl.blitz/#method
[Object]: ../../api/brl/brl.blitz/#object
[New]: ../../api/brl/brl.blitz/#new
[Self]: ../../api/brl/brl.blitz/#self
[Super]: ../../api/brl/brl.blitz/#super
[Delete]: ../../api/brl/brl.blitz/#delete
[Abstract]: ../../api/brl/brl.blitz/#abstract
[Final]: ../../api/brl/brl.blitz/#final
[Type]: ../../api/brl/brl.blitz/#type
[Operator]: ../../api/brl/brl.blitz/#operator
[String]: ../../api/brl/brl.blitz/#string
[Override]: ../../api/brl/brl.blitz/#override
[Implements]: ../../api/brl/brl.blitz/#implements
[Interface]: ../../api/brl/brl.blitz/#interface
[Public]: ../../api/brl/brl.blitz/#public
