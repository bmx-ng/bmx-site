---
id: oop_tutorial
title: Object-Oriented Programming in BlitzMax
sidebar_label: OOP Tutorial
---
by John Judnich & Bruce A Henderson

## Introduction

At first, object-oriented programming (OOP) may appear confusing or unnecessary to those accustomed to procedural
programming methods; however, once you are familiar with OOP techniques and their benefits, you may never want to go
back to procedural programming again. As the name implies, object-oriented programming basically provides a way to
associate variables and functions around virtual **objects**. By the end of this tutorial, you should have a good
understanding of the use and benefits of OOP techniques.

## Custom Types

> If you are already familiar with the use of custom Types with Fields, you can skip this section.

A custom [Type] definition is a handy way to define your own custom variable types. A custom [Type] is
basically a group of variables all bundled into one. For example:

```blitzmax
SuperStrict

Type TCar
    Field image:TImage
    Field name:String
    Field speed:Float, rotation:Float
End Type

Local a:Int, b:Float, car:TCar
```

Try running the above example. You may be surprised that it actually works. Yes - ''TCar'' is now a valid
variable type! You can pass it to functions, set its value, etc. just like any other variable. The [Field] lines supply
variables which TCar variables include internally; these internal variables are technically called "members" of TCar.
A custom Type is really just a handy way to group variables.

> The **T** prefix is just a way of indicating that it is a [Type], and is a standard convention used in BlitzMax.
> You are free to name your Types in any way you like, with or without a **T** prefix. It's entirely up to you!

Accessing a member of a TCar variable is very easy. Simply use the dot (.) operator like this:

```blitzmax
SuperStrict

Type TCar
    Field image:TImage
    Field name:String
    Field speed:Float, rotation:Float
End Type

Local a:Int, b:Float, car:TCar
car = New TCar
car.name = "70s Chevy"
Print car.name
```

As you can see, `car.name` is accessing the **name** member of the TCar variable **car**. As in the example, the
**name** can be modified and read from, just like any other variable.

You may be wondering what the `car = New TCar` line does. This aspect of custom Types is generally hard
to understand at first. Think of it this way: a custom type variable (unlike a normal Float, Int, etc. variable) is
not actually a variable – imagine the TCar variable in this example as a handle which you can stick onto any TCar
to get a grip on it. Through this handle (the **car** variable), you can access any of the TCar's data (such as
`car.name`). However, a handle on its own is worthless; it must first be attached to something. To attach this
handle (the **car** variable) to something, simply assign it to a real object. And, to create a real object, you use the
**[New]** keyword. The `car = New TCar` line in the example above creates a new TCar object and assigns it to **car**. Without
this line, the `car.name` code below will cause a runtime error since it is trying to access nothingness.


> When a custom type variable is attached to nothing, its value is called [Null]. If you want to
> detach a **handle** (custom type variable) from an object, simply set the variable's value to [Null] (such as `car = Null`).
> You should always detach variables from real objects when you no longer need access to it.

A real object (created with **[New]**) will always remain in memory until all "handles" have been detached from it. Take a look
at this example:

```blitzmax
SuperStrict

Type TCar
    Field image:TImage
    Field name:String
    Field speed:Float, rotation:Float
End Type

Local a:Int, b:Float, car:TCar, dup:TCar

car = New TCar
dup = car

car.name = "70s Chevy"

Print dup.name
```
First, a new car is created, and assigned to **car**. Then **car** is assigned to **dup** (another TCar "handle").
When a custom Type variable is assigned to another custom Type variable like this, **dup** is attached to the same
object that **car** is attached to. So now both **car** and **dup** should be attached to the same TCar.
As you can see below, `car.name` sets the TCar's name to "70s Chevy". Then, `dup.name` (this is **dup** now,
not **car**) displays "70s Chevy" on the screen. Since both **car** and **dup** are attached to the same TCar object, this is
the correct behavior.

You may be wondering what all this is good for. The real advantage to custom type variables being only
"handles" and not "real objects" is when you begin to represent actual real-world objects in your game. This
way, you have complete control over the creation/deletion of objects, and you can easily pass an existing object
into a function. For example:

```blitzmax
SuperStrict

Type TCar
    Field image:TImage
    Field name:String
    Field speed:Float, rotation:Float
End Type

Local a:Int, b:Float, car:TCar

car = New TCar ' Create a New Car object and assign it to c

InitCar(car)

' Demonstrate that the InitCar() function has actually modified car's TCar object
Print car.speed
Print car.rotation
car = Null ' Car is no longer needed

Function InitCar(obj:TCar)
    obj.speed = 0
    obj.rotation = 90
End Function
```

Since TCar variables are only "handles" to the real data, the `InitCar()` function is able to perform
operations on an existing object. In `InitCar()`, the TCar parameter (`obj:TCar`) gets attached to whatever TCar is
specified. In this case, it is the car which **car** is attached to. The function then modifies the variables of this car,
and returns.

Before you move on in this tutorial, you may want to take a while to experiment with custom Types. To
understand object-oriented techniques, you must first be completely comfortable working with custom Types.

## Object-Orient Programming Basics

First, take a look at the following example, which is an extremely simple demonstration of a traditional
(procedural) implementation of a "counter" (it simply increments a number every time a function is called):

```blitzmax
SuperStrict

Type TCounter
    Field value:Int
End Type

Function IncrementCounter(counter:TCounter)
    counter.value :+ 1
End Function

' Create a test counter
Local test:TCounter = New TCounter

' Display its value
Print "Counter value is " + test.value

' Increment it
IncrementCounter(test)

Print "Counter has been incremented"

' Now display it's value (which should now be 1+ the old value)
Print "Counter value is " + test.value
```

The above example simply creates an extremely simple type which contains a single integer field (called **value**). The function called
`IncrementCounter()` will add 1 to the **value** of any TCounter object. The rest of the code below simply
demonstrates the operation of the function and type.

Now, to convert this example into a more object-oriented program (OOP), only a few small changes would be
made. Since OOP allows you to insert procedures within a [Type] definition (just as you are allowed to insert
variables within them), `IncrementCounter()` can be moved inside the type definition (however, this [Function]
will now be called a [Method]). For example:

```blitzmax
SuperStrict

Type TCounter
    Field value:Int

    Method Increment()
        Self.value :+ 1
    End Method

End Type
```
Now, the Increment() method can now be called like this:

```blitzmax
' Create a test counter
Local test:TCounter = New TCounter

' Set the counter value
test.value = 5

' Increment it
test.Increment()
```
As you can see, the Increment() method is accessed the same way the Value variable is. The object
(**test**) is followed by a dot (.), then followed by the name of the member to access. In this case, test's **value** is
set to 5 (`test.value = 5`). Then, test's `Increment()` method is executed (`test.Increment()`).

You may have noticed that the `Increment()` Method definition has a few differences from the
`IncrementCounter()` function in the other example; the keyword **[Self]** is used in place of the `counter:TCounter`
parameter. Because `Increment()` is a member of TCounter, you can use [Self] to refer to whichever object is
being manipulated. For example:

```blitzmax
test.Increment()
```
When this is executed, the Increment() method is called:

```blitzmax
Method Increment()
    Self.value :+ 1
End Method
```
Now, since `test.Increment()` was just called, [Self] is actually referring to **test**, so `Self.value :+ 1` is effectively
performing this operation: `test.Value :+ 1`.

> The **[Self]** keyword is completely optional, and most programmers omit it entirely. For example,
> the Method `Increment()` could be written like this:
> `Method Increment()`
> `    value :+ 1`
> `End Method`
> In this case, BlitzMax will automatically assume you are referring to the TCounter's **value** variable. This
> allows the programmer to more easily focus on the object's perspective, rather than a global perspective. For
> example, the `Increment()` Method simply supplies the computer with a method to increment a TCounter object;
> it makes no difference what counter is being manipulated, where `Increment()` is being called from, etc. – just as
> long as `Increment()` does its job properly, everything will work seamlessly.

Now that you understand the basic concept of Methods, here is a more practical example which demonstrates the usefulness
of OOP techniques:

```blitzmax
SuperStrict

Type TRobot
    Field name:String
    Field x:Float, y:Float
    Field health:Int

    Method SetName(newName:String)
        name = newName
    End Method

    Method Move(x:Float, y:Float)
        Self.x :+ x
        Self.y :+ y
    End Method

    Method Draw()
        SetColor 255, 255, 255
        DrawText name, x - (TextWidth(name)/2), y - 20
        SetColor 0, 0, 255
        DrawRect x - 5, y - 5, 10, 10
        SetColor 255, 0, 0
        DrawRect x - 4, y - 4, 8, 8
    End Method

End Type
```
This TRobot Type has these members: **name**, **x**, **y**, **health**, `SetName()`, `Move()` and `Draw()`. The Fields (**name**,
**x**, and **y**) store information about the robot, while the Methods (`SetName()`, `Move()`, and `Draw()`) provide actions
which can be performed on any TRobot object. For example:

```blitzmax
Graphics 640, 480

Local robot:TRobot = New TRobot
robot.SetName("XB-75b")

While Not KeyHit(KEY_ESCAPE)
    Cls
    robot.Move(1, 1)
    robot.Draw()
    Flip
Wend
```
First, this example creates a New TRobot object (called **robot**). `robot.SetName("XB-75b")` executes the
TRobot `SetName()` Method (the `SetName()` Method is a little redundant here, since you could just as easily say
`robot.name = "XB-75b"`; However, it can be useful, and we will look into **[access modifiers]** later which will hopefully explain why).

The main While loop simply calls `robot.Move(1, 1)` and `robot.Draw()` each frame. The `Move()` method
moves the robot 1 unit to the right, and 1 unit down. The `Draw()` method draws the "robot" to the screen.

> The equivalent of this in traditional/procedural programming methods would be something like:
> `MoveRobot(robot, 1, 1)` and `DrawRobot(robot)`. The object-oriented style is not only more structured and
> intuitive, but provides advanced features such as Inheritance and Polymorphism which makes programming
> complex object relationships extremely easy.

As you can see, using OOP techniques enforces a modular design in your programs, taking your mind
off the complex inner workings of the system, and rather focusing on the higher level manipulation of objects.
When writing a `Draw()` Method for an object, for example, the programmer only needs to focus on one thing:
instructing the computer to draw an object correctly. Once that task is complete, you will never need to worry
about the internal operations of that Method again; whenever an object needs to be drawn, it's as simple as
calling `object.Draw()`.

## Inheritance

Inheritance in OOP is really very simple once you understand it. Inheritance is the term for appending
one Type onto another one. This may seem slightly confusing at first, and is best taught by example.
If you're making a game with BlitzMax, it's most likely that you'll have many different types of game
objects (for example, you might have a TPlayer, TRobot, and TBuilding). Here's a short example:

```blitzmax
SuperStrict

Type TPlayer
    Field x:Float, y:Float
    Field health:Int
End Type

Type TRobot
    Field x:Float, y:Float
    Field health:Int
End Type

Type TBuilding
    Field x:Float, y:Float
    Field enterable:Int
End Type

Local obj:TPlayer = New TPlayer
obj.x = 1
obj.y = 2
```
As you can see, all three types have a lot in common; they all have **x** and **y** variables, and both
TPlayer and TRobot have **health**. Inheritance provides a way to make a sort of template Type which others
can build on. For example:

```blitzmax
SuperStrict

Type TEntity
    Field x:Float, y:Float
End Type

Type TPlayer Extends TEntity
    Field health:Int
End Type

Type TRobot Extends TEntity
    Field health:Int
End Type

Type TBuilding Extends TEntity
    Field enterable:Int
End Type

Local obj:TPlayer = New TPlayer
obj.x = 1
obj.y = 2
```
In this example, the **[Extends]** keyword after TPlayer, for example, tells BlitzMax that TPlayer not only
contains `Field health:Int`, but everything else that TEntity has as well. The result is that any TPlayer objects
will now automatically have **x** and **y** variables (notice that `obj.x = 1` works just fine, even though the
TPlayer Type doesn't specifically include **x**).

This may at first seem like only a way to save typing, but it gets amazingly useful when you get into
polymorphism. However, you should first learn more about Inheritance's benefits which appear when your types
include Methods.

First, here is the same example with a Method added to TEntity:

```blitzmax
SuperStrict

Type TEntity
    Field x:Float, y:Float

    Method Draw()
        SetColor 255, 255, 255
        Plot x, y
    End Method
End Type

Type TPlayer Extends TEntity
    Field health:Int
End Type

Type TRobot Extends TEntity
    Field health:Int
End Type

Type TBuilding Extends TEntity
    Field enterable:Int
End Type

Graphics 640, 480

Local obj:TPlayer = New TPlayer
obj.x = 1
obj.y = 2

obj.Draw()

Flip

WaitKey
```
The `Draw()` method of TEntity simply plots a dot at the entity's location. Now, since TPlayer, TRobot,
and TBuilding all inherit TEntity's properties, this means that they now have a `Draw()` Method (as you can see if
you run the example).

Now, drawing a dot might be OK if you want to mark the position of an entity, but TBuilding's, TRobot's,
and TPlayer's should all look unique. This can be done by *overriding* the `Draw()` method. Doing this is really just
as simple as adding a `Draw()` method to TBuilding, for example, and BlitzMax will use that one instead. For
example:

```blitzmax
SuperStrict

Type TEntity
    Field x:Float, y:Float

    Method Draw()
        SetColor 255, 255, 255
        Plot x, y
    End Method
End Type

Type TPlayer Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method
End Type

Type TRobot Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 255, 0, 0
        DrawOval x, y, 5, 5
    End Method
End Type

Type TBuilding Extends TEntity
    Field enterable:Int

    Method Draw()
        SetColor 255, 255, 255
        DrawRect x - 5, y - 5, 10, 10
    End Method
End Type

Graphics 640, 480

Local obj:TPlayer = New TPlayer
obj.x = 5
obj.y = 7

obj.Draw()

Flip

WaitKey
```
When BlitzMax executes `obj.Draw()`, it uses the most appropriate Method. In this case, it is TPlayer's
`Draw()` Method (not TEntity's, because it is more abstract).

If you do not want TEntity to provide a **default** draw method (as it is now, it just draws a dot if no
specific `Draw()` Method is provided), you can delete TEntity's `Draw()` Method, and `obj.Draw` will still work,
since TPlayer contains a `Draw()` Method. However, a better way to do this is to add an **[Abstract]** `Draw()`
Method to TEntity. Making a Method [Abstract] is really just a way of saying that this Method is blank, and sub-
Types (such as TBuilding and TPlayer) must provide one (or else you'll get a compile error). For example:

```blitzmax
SuperStrict

Type TEntity
    Field x:Float, y:Float

    Method Draw() Abstract
End Type

Type TPlayer Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method
End Type

Type TRobot Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 255, 0, 0
        DrawOval x, y, 5, 5
    End Method
End Type

Type TBuilding Extends TEntity
    Field enterable:Int

    Method Draw()
        SetColor 255, 255, 255
        DrawRect x - 5, y - 5, 10, 10
    End Method
End Type

Graphics 640, 480

Local obj:TPlayer = New TPlayer
obj.x = 5
obj.y = 7

obj.Draw

Flip

WaitKey
```
You may notice that `Method Draw() Abstract` in TEntity has no `End Method` statement. This is
because an [Abstract] [Method] is always blank, and contains no data. This abstract method definition is really just
saying "*all Types which inherit TEntity must have a Draw() Method*". Try deleting TPlayer's `Draw()` Method, and
run the program. A compile error occurs, enforcing the rule that inheritors of TEntity must have a `Draw()`
Method.

This may at first seem only useful for error checking (to make sure that your entities can be drawn, or
whatever actions you require), but it comes in handy when using polymorphism.

## Polymorphism

Polymorphism is really just a fancy word for the process of handling your objects in a generalized way.
Polymorphism might be easier to understand if you think about it like this: in OOP, a TApple Type would Extend
the TFruit Type (since an apple is a fruit, of course). Now you can do this, for example:

```blitzmax
Local apple:TApple = New TApple
Local orange:TOrange = New TOrange

Local fruit:TFruit
fruit = apple
fruit = orange
```

The `fruit:TFruit` variable, has the capability to store apples, oranges, or any other [Type] which [Extends]
TFruit. In other words, with a generalized variable (a TFruit variable or TEntity variable, for example), you can
store any sub-Type object. This means that a TPlayer, TRobot, or TBuilding object can be stored in a TEntity
variable. This is called polymorphism. For example, you could do this:

```blitzmax
Graphics 640, 480

Local player:TPlayer = New TPlayer
player.x = 5
player.y = 7

Local entity:TEntity
entity = player

entity.Draw()
```
As you can see, the TEntity variable is used to reference a TPlayer Type. The `entity.Draw()` line tells
the computer to draw the TEntity. In this case, this TEntity is a actually a TPlayer, so TPlayer's `Draw()` Method is
used (not TEntity's). Whether the entity was a TPlayer, TRobot, TBuilding, etc. makes no difference; the
appropriate `Draw()` Method will automatically be executed.

However, when accessing a TPlayer, TRobot, etc. through a TEntity variable like this, you will only be
allowed access to fields and methods included in the TEntity definition; the only members you can be certain the
object will contain are TEntity members – anything else may vary (depending on whether it's a TPlayer, TRobot,
TBuilding, etc.)

You might be wondering what it could be useful for. The main advantages of polymorphism become
apparent when you want to do something to all objects of a general type. For example, what if you wanted to
execute `Draw()` for every TPlayer, TRobot, and TBuilding? Normally, you would have to keep a list of all players,
all houses, and all robots separately (which would get very messy, especially if you later decide to add more
TEntity-inherited Types). The solution is to keep a list of them as TEntity's, since a TEntity variable has the
polymorphic ability to store TPlayer's, TRobot's, TBuilding's, etc. You can then `Draw()` them whenever you need,
since `Draw()` is a Method common to all TEntity's. For example:

```blitzmax
Graphics 640, 480

Local entityList:TList = New TList

Local obj:TPlayer = New TPlayer
obj.x = 5
obj.y = 7

entityList.AddLast(obj)

Local obj2:TBuilding = New TBuilding
obj2.x = 15
obj2.y = 3

entityList.AddLast(obj2)

' Draw all entities

For Local ent:TEntity = EachIn entityList
    ent.Draw()
Next

Flip

WaitKey
```

> In case you are not familiar with BlitzMax's [TList Module], it simply provides an easy way to
> manage a list of objects, similarly to storing them in an array.

Polymorphism is useful in any case where generalization would benefit. For example, if you have a
general-purpose function which accepts a TEntity as a parameter, this means that your players, houses, and
robots will all work seamlessly with that function! For example:

```blitzmax
Graphics 640, 480

Local player:TPlayer = New TPlayer
player.x = 5
player.y = 7

Local house:TBuilding = New TBuilding
house.x = 15
house.y = 3

While Not KeyHit(KEY_ESCAPE)
    Cls
    DrawAndMove(player)
    DrawAndMove(house)
    Flip
Wend

WaitKey

Function DrawAndMove(entity:TEntity)
    entity.Draw()
    entity.x :+ 1
    entity.y :+ 1
End Function
```

## Constructors & Destructors

First, take a look at the following example (specifically, the section where obj and obj2 is added to
EntityList):

```blitzmax
SuperStrict

Type TEntity
    Field x:Float, y:Float

    Method Draw() Abstract
End Type

Type TPlayer Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 0, 0, 255
        Draw Oval x, y, 5, 5
        End Method
    End Type

Type TRobot Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 255, 0, 0
        DrawOval x, y, 5, 5
    End Method
End Type

Type TBuilding Extends TEntity
    Field enterable:Int

    Method Draw()
        SetColor 255, 255, 255
        DrawRect x - 5, y - 5, 10, 10
    End Method
End Type

Graphics 640, 480

Local entityList:TList = New TList

Local obj:TPlayer = New TPlayer
obj.x = 5
obj.y = 7

entityList.AddLast(obj)

Local obj2:TBuilding = New TBuilding
obj2.x = 15
obj2.y = 3

entityList.AddLast(obj2)

' Draw all entities
For Local ent:TEntity = EachIn entityList
    ent.Draw()
Next

Flip

WaitKey
```
There is one thing which might be considered messy or tedious in the above example: the need to call
`entityList.AddLast()` for each new TEntity-derived object (if it wasn't added to the list, it wouldn't be rendered
later on). Wouldn't it be a lot easier if could be done automatically? For example:

```blitzmax
Local obj:TPlayer = New TPlayer
obj.x = 5
obj.y = 7

Local obj2:TBuilding = New TBuilding
obj2.x = 15
obj2.y = 3
```
It would be much easier if these objects could automatically add themselves to a list somewhere.
Fortunately, this can be done in OOP! Any [Type] can have a special "*constructor*" [Method] which is automatically
called just as the object is created. The constructor can do anything you like, just as any other Method can (in
this case, it will be adding the TEntity to a list). To add a constructor to a [Type], simply add a Method named
`New()`. The `New()` Method will be executed whenever an object of that type is created.

In the example above, the best place to put the constructor is in TEntity; this way, TPlayer, TBuilding,
and all the other sub-Types will inherit the constructor as well. And if necessary, some of the sub-Types can
override the constructor Method. However, overriding a constructor is not the same as overriding a normal
Method; rather than the new Method being performed instead of the original Method, the new constructor method is done
in addition to the original Method. The reason for this should be clear in this example:

```blitzmax
SuperStrict

Global entityList:TList = New TList

Type TEntity
    Field x:Float, y:Float

    Method Draw() Abstract

    Method New()
        entityList.AddLast(Self)
    End Method
End Type

Type TPlayer Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method

    Method New()
        health = 100
    End Method
End Type

Type TRobot Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 255, 0, 0
        DrawOval x, y, 5, 5
    End Method

    Method New()
        health = 100
    End Method
End Type

Type TBuilding Extends TEntity
    Field enterable:Int

    Method Draw()
        SetColor 255, 255, 255
        DrawRect x - 5, y - 5, 10, 10
    End Method
End Type

Graphics 640, 480

Local obj:TPlayer = New TPlayer
obj.x = 5
obj.y = 7

Local obj2:TBuilding = New TBuilding
obj2.x = 15
obj2.y = 3

' Draw all entities
For Local ent:TEntity = EachIn EntityList
    ent.Draw()
Next

Flip

WaitKey
```
When the TPlayer object is created, first the inherited TEntity constructor is called, which properly adds
the TPlayer to the EntityList. Then, the TPlayer constructor is called additionally (remember – constructors
cannot be overridden like normal Methods), which sets the player's health to 100%. Next, the TBuilding is
created. With the TBuilding, only the inherited TEntity constructor is called, since no specific constructor code is
provided.

After the TBuilding is added to the EntityList through the TEntity constructor, all the items in the
EntityList are drawn to demonstrate that both TEntity's have been added to the list correctly.

## Constructor Overloading

We can even go one step further in our example above. Rather than having to set all the Type variables individually each
time after the creation of our objects, we can specify some parameters on the `New()` method and pass some initial values
into it. For example:

```blitzmax
SuperStrict

Global entityList:TList = New TList

Type TEntity
    Field x:Float, y:Float

    Method Draw() Abstract

    Method New(x:Float, y:Float)
        Self.x = x
        Self.y = y
        entityList.AddLast(Self)
    End Method
End Type

Type TPlayer Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float)
        Super.New(x, y)
        health = 100
    End Method
End Type

Type TRobot Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 255, 0, 0
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float)
        Super.New(x, y)
        health = 100
    End Method
End Type

Type TBuilding Extends TEntity
    Field enterable:Int

    Method Draw()
        SetColor 255, 255, 255
        DrawRect x - 5, y - 5, 10, 10
    End Method
End Type

Graphics 640, 480

Local obj:TPlayer = New TPlayer(5, 7)

Local obj2:TBuilding = New TBuilding(15, 3)

' Draw all entities
For Local ent:TEntity = EachIn entityList
    ent.Draw()
Next

Flip

WaitKey
```

As you can see above, the constructor for TEntity now looks like `New(x:Float, y:Float)`. This allows us to remove
lines like `obj.x = 5` and instead call `New()` by adding those values as arguments to the constructor `New TPlayer(5, 7)`.
Techniques such as this can greatly reduce the amount of code you end up having to write, and certainly makes your program
a little tidier.

In the above example, you may have noticed a new line in the TRobot and TPlayer constructors (`Super.New(x, y)`).
What this does is call the `New()` method of the inherited Type, which in this case is TEntity's `New()` method. You
could of course have added lines such as `Self.x = x`, but that defeats the elegance of having polymorphism in the
first place.

Of course, the use of a constructor here is only a small example of what you can do with constructors.
Basically, any initialization code you want to be performed to new objects can be automated with constructors.

In addition to constructors, there are also destructors. A destructor is done exactly like a constructor,
except **[Delete]** is used instead of **[New]** as the Method's name. Destructors in BlitzMax can be used to perform
some final steps before an object is deleted.

> Since BlitzMax uses a garbage collection system to delete objects, don't rely on a destructor being called at any
> specific time; the `Delete()` Method (destructor) will be called whenever the **garbage collector** gets around to it.

## Static Methods & Fields

As you know, a Type is a group of Methods and Fields. The value of Fields, and the operation of
Methods depends entirely on which object you are working with. For example, `car1.x` may be different than
`car2.x`. In OOP, you can also include what is called static methods and variables. A static variable is shared by
all objects of that type. Static variables in Type's are really no different from a standard [Global] variable, but with the
added benefit of keeping your code more object-oriented. For example, look at the example from the last
section:

```blitzmax
SuperStrict

Global entityList:TList = New TList

Type TEntity
    Field x:Float, y:Float

    Method Draw() Abstract

    Method New(x:Float, y:Float)
        Self.x = x
        Self.y = y
        entityList.AddLast(Self)
    End Method
End Type

Type TPlayer Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float)
        Super.New(x, y)
        health = 100
    End Method
End Type

Type TRobot Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 255, 0, 0
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float)
        Super.New(x, y)
        health = 100
    End Method
End Type

Type TBuilding Extends TEntity
    Field enterable:Int

    Method Draw()
        SetColor 255, 255, 255
        DrawRect x - 5, y - 5, 10, 10
    End Method
End Type

Graphics 640, 480

Local obj:TPlayer = New TPlayer(5, 7)

Local obj2:TBuilding = New TBuilding(15, 3)

' Draw all entities

For Local ent:TEntity = EachIn entityList
    ent.Draw()
Next

Flip

WaitKey
```
Now, the `Global entityList:TList = New Tlist` line can be moved inside the TEntity Type:

```blitzmax
SuperStrict

Type TEntity
    Field x:Float, y:Float
    Global entityList:TList = New TList

    Method Draw() Abstract

    Method New(x:Float, y:Float)
        Self.x = x
        Self.y = y
        entityList.AddLast(Self)
    End Method
End Type

Type TPlayer Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float)
        Super.New(x, y)
        health = 100
    End Method
End Type

Type TRobot Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 255, 0, 0
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float)
        Super.New(x, y)
        health = 100
    End Method

End Type

Type TBuilding Extends TEntity
    Field enterable:Int

    Method Draw()
        SetColor 255, 255, 255
        DrawRect x - 5, y - 5, 10, 10
    End Method
End Type

Graphics 640, 480

Local obj:TPlayer = New TPlayer(5, 7)

Local obj2:TBuilding = New TBuilding(15, 3)

' Draw all entities
For Local ent:TEntity = EachIn TEntity.entityList
    ent.Draw()
Next

Flip

WaitKey
```
This is how static fields work in BlitzMax; instead of using the [Field] keyword to define the variable,
**[Global]** is used. Below, you may notice the use of `TEntity.entityList` below. Since the static field **entityList** is
shared by all TEntity's, you can even use "TEntity." to access it. This comes in handy especially when you don't
know if there are any TEntity objects existing (yes - static fields can be accessed, even when there are no
objects of their type in existence).

Static fields are really just a nice way to categorize your [Global] variables, keeping everything object oriented.
BlitzMax also supports static methods. Just as static fields are simply [Global] variables associated with a
Type, static methods are simply Functions associated with a Type. Static method can be used for a variety of
purposes, although the most common is a form of initialization. For example, you could make the functions
CreatePlayer(), CreateRobot(), and CreateBuilding() to make it easier to initialize certain properties of objects
when creating them (since the functions would allow you to include parameters, such as x, y, etc.):

```blitzmax
SuperStrict

Type TEntity
    Field x:Float, y:Float
    Global entityList:TList = New TList

    Method Draw() Abstract

    Method New(x:Float, y:Float)
        Self.x = x
        Self.y = y
        entityList.AddLast(Self)
    End Method
End Type

Type TPlayer Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float, health:Int)
        Super.New(x, y)
        Self.health = health
    End Method
End Type

Type TRobot Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 255, 0, 0
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float, health:Int)
        Super.New(x, y)
        Self.health = health
    End Method
End Type

Type TBuilding Extends TEntity
    Field enterable:Int

    Method Draw()
        SetColor 255, 255, 255
        DrawRect x - 5, y - 5, 10, 10
    End Method
End Type

Function CreatePlayer:TPlayer(x:Float, y:Float, health:Int)
    Local ent:TPlayer = New TPlayer(x, y, health)
    Return ent
End Function

Function CreateRobot:TRobot(x:Float, y:Float, health:Int)
    Local ent: TRobot = New TRobot(x, y, health)
    Return ent
End Function

Function CreateBuilding:TBuilding(x:Float, y:Float, enterable:Int)
    Local ent:TBuilding = New TBuilding(x, y, enterable)
    Return ent
End Function

Graphics 640, 480

Local obj:TPlayer = CreatePlayer(5, 7, 100)
Local obj2:TBuilding = CreateBuilding(15, 3, False)

' Draw all entities

For Local ent:TEntity = EachIn TEntity.entityList
    ent.Draw()
Next

Flip

WaitKey
```
As you can see, using Functions to initialize object has advantages, but doing it this way is not very
object-oriented. Just like the `Global entityList` was moved into the Type definition, functions can be move in
also. This way, all player-related code is now associated with the TPlayer object, all building-related code is now
associated with the TBuilding object, etc.:

```blitzmax
SuperStrict

Type TEntity
    Field x:Float, y:Float
    Global entityList:TList = New TList

    Method Draw() Abstract

    Method New()
        entityList.AddLast(Self)
    End Method
End Type

Type TPlayer Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float, health:Int)
        Super.New(x, y)
        Self.health = health
    End Method

    Function Create:TPlayer(x:Float, y:Float, health:Int)
        Local ent:TPlayer = New TPlayer(x, y, health)
        Return ent
    End Function
End Type

Type TRobot Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 255, 0, 0
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float, health:Int)
        Super.New(x, y)
        Self.health = health
    End Method

    Function Create:TRobot(x:Float, y:Float, health:Int)
        Local ent: TRobot = New TRobot(x, y, health)
        Return ent
    End Function
End Type

Type TBuilding Extends TEntity
    Field enterable:Int

    Method Draw()
        SetColor 255, 255, 255
        DrawRect x - 5, y - 5, 10, 10
    End Method

    Function Create:TBuilding(x:Float, y:Float, Enterable:Int)
        Local ent:TBuilding = New TBuilding(x, y, enterable)
        ent.enterable = enterable
        Return ent
    End Function
End Type

Graphics 640, 480

Local obj:TPlayer = TPlayer.Create(5, 7, 100)
Local obj2:TBuilding = TBuilding.Create(15, 3, False)

' Draw all entities
For Local ent:TEntity = EachIn TEntity.entityList
    ent.Draw()
Next

Flip

WaitKey
```
Generally, static methods and fields are useful when you want to perform a Type-related operation
without regard to any specific object. Static fields provide globally applicable data regarding your custom Type,
while static methods provide globally applicable code regarding your custom Type. The `Create()` functions in the
previous example is a good demonstration of the most common use of static functions. However, there are
many other uses. For example, the code which draws all entities in the example above could be made into a
static method:

```blitzmax
SuperStrict

Type TEntity
    Field x:Float, y:Float
    Global entityList:TList = New TList

    Method Draw() Abstract

    Method New()
        entityList.AddLast(Self)
    End Method

    Function DrawAll()
        For Local ent:TEntity = EachIn entityList
            ent.Draw()
        Next
    End Function
End Type

Type TPlayer Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float, health:Int)
        Self.New(x, y)
        health = 100
    End Method

    Function Create:TPlayer(x:Float, y:Float, health:Int)
        Local ent:TPlayer = New TPlayer(x, y, health)
        Return ent
    End Function
End Type

Type TRobot Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 255, 0, 0
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float, health:Int)
        Super.New(x, y)
        Self.health = health
    End Method

    Function Create:TRobot(x:Float, y:Float, health:Int)
        Local ent: TRobot = New TRobot(x, y, health)
        Return ent
    End Function
End Type

Type TBuilding Extends TEntity
    Field enterable:Int

    Method Draw()
        SetColor 255, 255, 255
        DrawRect x - 5, y - 5, 10, 10
    End Method

    Function Create:TBuilding(x:Float, y:Float, enterable:Int)
        Local ent:TBuilding = New TBuilding(x, y)
        ent.enterable = enterable
        Return ent
    End Function
End Type

Graphics 640, 480

Local obj:TPlayer = TPlayer.Create(5, 7, 100)
Local obj2:TBuilding = TBuilding.Create(15, 3, False)

' Draw all entities
TEntity.DrawAll()

Flip

WaitKey
```

## Encapsulation & Access Modifiers

By default, all of a Type's Fields and Methods are visible (or accessible) from everywhere. This is all great, but sometimes
it would be nice if there were a way to "*hide*" specific implementation details of your Type, and only allow access to
them through the Object's own methods. This is called "Encapsulation". By using access modifiers, you can do just that -
hide functionality so that it is only visible from inside your Type.

Let's take a look at our earlier TCounter example:

```blitzmax
SuperStrict

Type TCounter
    Field value:Int

    Method Increment()
        value :+ 1
    End Method
End Type
```
As it stands, if you were to use TCounter in your program, you could manipulate **value** in any way you wished:

```blitzmax
Local counter:TCounter = New TCounter

counter.Increment()

counter.value = 50
```
Here, we've overriden the current value of our counter, and set it to 50. To prevent this, we can tell BlitzMax to change
the level of access to different parts of the Type, by utilising the **[Private]**, **[Protected]** and **[Public]** keywords.
Let's now lock down our TCounter Type so that we can arbitrarily change its value:

```blitzmax
SuperStrict

Type TCounter

    Private
    Field value:Int

    Public
    Method Increment()
        value :+ 1
    End Method
End Type
```
With this minor change to the code, our previous attempt to modify the value (`counter.value = 50`) will no longer compile,
warning us that **value** is not visible from that part of the program.

All Type members declared after an access modifier inherit that level of privacy, which gives you a fair amount of flexibility
in designing your Types with the levels of access that you desire. For example, if we neglected to add [Public] before
`Method Increment()` then BlitzMax would assume that you wanted the `Increment()` method to be Private too. In which case,
a call to `counter.Increment()` would not compile either for the same reasons as above.

When considering how to apply access modifiers to Types using inheritance, you will find the [Protected] modifier useful.
[Protected] allows access within a Type hierarchy but not outside of it. This means that a [Protected] member variable is
only visible to its Type and any sub-Types, and not to your program in general. Let's have a look at an example of the
different levels of accessibility we can play with:

```blitzmax
SuperStrict

Type TEntity
    Field x:Float, y:Float

    Method Draw() Abstract

    Method New(x:Float, y:Float)
        Self.x = x
        Self.y = y
    End Method
End Type

Type TPlayer Extends TEntity
    Field health:Int

    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float, health:Int)
        Super.New(x, y)
        Self.health = health
    End Method
End Type
```
In the code above, all Type members are publicly accessible to all parts of your program. We'll now prevent direct access
to the member variables:

```blitzmax
SuperStrict

Type TEntity

    Private
    Field x:Float, y:Float

    Public
    Method Draw() Abstract

    Method New(x:Float, y:Float)
        Self.x = x
        Self.y = y
    End Method
End Type

Type TPlayer Extends TEntity

    Private
    Field health:Int

    Public
    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float, health:Int)
        Super.New(x, y)
        Self.health = health
    End Method
End Type
```
That looks great; access to **x**, **y** and **health** are now Private. But wait. If you attempt to compile this, BlitzMax
will complain about the line `DrawOval x, y, 5, 5`, because TPlayer no longer has access to the [Private] members of TEntity.
We can fix this by changing access to those members to [Protected]:

```blitzmax
SuperStrict

Type TEntity

    Protected
    Field x:Float, y:Float

    Public
    Method Draw() Abstract

    Method New(x:Float, y:Float)
        Self.x = x
        Self.y = y
    End Method
End Type

Type TPlayer Extends TEntity

    Private
    Field health:Int

    Public
    Method Draw()
        SetColor 0, 0, 255
        DrawOval x, y, 5, 5
    End Method

    Method New(x:Float, y:Float, health:Int)
        Super.New(x, y)
        Self.health = health
    End Method
End Type
```
Now, Type members are only directly accessible from within the Types themselves.

By encapsulating your Types, you can protect their integrity by limiting the access your program has to the internal
data. This, in theory, can help to prevent subtle bugs by guaranteeing that data can only be changed through the "official"
methods, and not by some old code directly modifying it from a shady part of your program.

## Abstraction & Interfaces

Abstraction and Encapsulation are connected in terms hiding away the implementation details of your custom types.
BlitzMax supports the idea of abstract types and methods. An abstract method is a method that is declared, but contains
no implementation or body:

```blitzmax
Method Sleep(time:Int) Abstract
```
An abstract type is one which is either explicitly declared abstract using the **[Abstract]** keyword, or is a type that
has an abstract method.

You cannot create an instance of an abstract type, but you can **Extend** it with another custom type and implement any
abstract methods as required. For example :

```blitzmax
SuperStrict

Local obj:TGraphicObject = New TGraphicObject

Type TGraphicObject Abstract

    Field x:Float
    Field y:Float

    Method Draw() Abstract

End Type
```
This example will fail to compile with the error "*Cannot create instance of an abstract class.*", because the method
**Draw** has not been implemented. We need to extend TGraphicObject with a new type that will implement the **Draw** method :

```blitzmax
SuperStrict

Local obj:TGraphicObject = New TRectangle

obj.Draw()

Type TGraphicObject Abstract

    Field x:Float
    Field y:Float

    Method Draw() Abstract

End Type

Type TRectangle Extends TGraphicObject

    Field w:Float
    Field h:Float

    Method Draw()

        Print "Drawing a rectangle"

    End Method

End Type
```
Here, a non-abstract **TRectangle** type extends from TGraphicObject and implements the **Draw** method. We can now
create an instance of **TRectangle**, and when we run the program it outputs "`Drawing a rectangle`".

## Interface

An interface contains definitions for a group of related methods that a type can implement. This is similar in some respect
to an abstract type, except that an abstract type may implement as for or as many methods as it needs.

By using interfaces, you may include behaviour from multiple sources in your custom type. This is useful, because BlitzMax
doesn't support multiple inheritance of types (i.e. a type can only **Extend** a single type, but it can **Implement**
many interfaces).

You define an interface with the **[Interface]** keyword :

```blitzmax
Interface ISerializable

    Method Serialize:String()

End Interface
```
Any type that implements **ISerializable** must contain a definition for the **Serialize** method that matches the parameters and return
type. As a result, you guarantee that any type that implements **ISerializable** will contain an **Serialize** method.

Returning to the graphic object example above, let's say that rectangles should also be serializable. We can redefine the
**TRectangle** type like this :

```blitzmax
Type TRectangle Extends TGraphicObject Implements ISerializable
```
Which states that a **TRectangle** is contracted to implement both the abstract methods declared by TGraphicObject and those
of ISerializable. This amount of flexibility with our custom types allows us to use a specific type in completely different
ways. For example, **TGraphicObject** has no concept of serialization, but our subclass of it can be serialized because
it implements the appropriate interface :

```blitzmax
SuperStrict

Local obj:TRectangle = New TRectangle

Draw(obj)
Serialize(obj)

' draw an object
Function Draw(obj:TGraphicObject)
    obj.Draw()
End Function

' serialize an object
Function Serialize(obj:ISerializable)
    Print obj.Serialize()
End Function

Type TGraphicObject Abstract

    Field x:Float
    Field y:Float

    Method Draw() Abstract

End Type

Type TRectangle Extends TGraphicObject Implements ISerializable

    Field w:Float
    Field h:Float

    Method Draw()

        Print "Drawing a rectangle"

    End Method

    Method Serialize:String()
        Return x + ", " + y + ", " + w + ", " + h
    End Method

End Type

Interface ISerializable

    Method Serialize:String()

End Interface
```
The ideas behind abstraction and interfaces may appear complicated at first, but can be very powerful tools when applied
correctly.


## Operator Overloading

It is possible to add to and change the way operators (like `+` and `-`) work for custom types. Normally, for example,
you cannot add two object together:

```blitzmax
SuperStrict

Local a:TCalc = New TCalc(10)
Local b:TCalc = New TCalc(15)

' add two objects together
Local c:TCalc = a + b

Type TCalc

    Field value:Int

    Method New(value:Int)
        Self.value = value
    End Method

End Type
```
It will generate a compiler error, "*Operator + cannot be used with Objects.*"

Previously, in order to achieve the addition of two objects, you would need to have implemented your own "Add" method,
and used in the following way:

```blitzmax
SuperStrict

Local a:TCalc = New TCalc(10)
Local b:TCalc = New TCalc(15)

' add two objects together
Local c:TCalc = a.Add(b)

Print c.value

Type TCalc

    Field value:Int

    Method New(value:Int)
        Self.value = value
    End Method

    Method Add:TCalc(other:TCalc)
        Return New TCalc(value + other.value)
    End Method

End Type
```
Of course, there is nothing wrong with your program filled with code like `a.Add(b)`, but it may not seem as clear or
easy to read as it does when adding two Ints together, for example `n + j`

With *operator overloading* you now have the ability to write your code as "a + b".

Although you still need to write the equivalent of the "Add" method above, the main advantage is that you can *use* it in
an arguably cleaner way in your program. Operator overloading is "syntactic sugar", in that it can make your code easier to
read, perhaps therefore easier maintain and spot bugs.

To overload an operator, we use a specially named method, called **[Operator]**, followed by the operator symbol we are
overloading (for example, `+`), and then the rest of the method as normal.

To add an addition overload for our example above, we could write the following method :

```blitzmax
Method Operator+:TCalc(other:TCalc)
    Return New TCalc(value + other.value)
End Method
```
As you can see, apart from the method name, `Operator+`, the rest of the method is written in exactly the same way as
the **Add** method in the previous example. The method declares a return type of TCalc (`:TCalc`) and a parameter of
the type TCalc (`other:TCalc`).

Now we are free to write `a + b` to add the two TCalc objects together, just as we attempted to do in the first
example:

```blitzmax
SuperStrict

Local a:TCalc = New TCalc(10)
Local b:TCalc = New TCalc(15)

' add two objects together
Local c:TCalc = a + b

Print c.value

Type TCalc

    Field value:Int

    Method New(value:Int)
        Self.value = value
    End Method

    Method Operator+:TCalc(other:TCalc)
        Return New TCalc(value + other.value)
    End Method

End Type
```
When you run it this time, the result of `c.value` should be output as `25`, which of course is `10 + 15`.

The supported operators for overloading are `*` `/` `+` `-` `&` `|` `~` `:*` `:/` `:+` `:-` `:&` `:|`
`:~` `<` `>` `<=` `>=` `=` `<>` `mod` `shl` `shr` `:mod` `:shl` `:shr`,
where `=` is the equality symbol rather than the assignment symbol, eg. `If a = b Then`.

Now, you aren't just limited to object/object expressions, you can basically have operator overloads for object/anything,
including primitive types like Int and Double. In our above example, we want to add an overload for multiplying by an Int,
as well as one for determining if our object value is equal to another :

```blitzmax
Method Operator:*(value:Int)
    Self.value :* value
End Method
```
Here we implemented the overloaded operator as `:*` which is the symbol for *multiplication assignment*. You'll notice we don't
declare a return type, because generally `:*` is used as a statement rather than an expression.

For equality, we'll create the following overload :

```blitzmax
Method Operator=:Int(other:TCalc)
    Return value = other.value
End Method
```
This time we declare a return type of **[Int]** (for [True] or [False]), and inside the method we perform the actual comparison
test.

Here's our program with the new methods added:

```blitzmax
SuperStrict

Local a:TCalc = New TCalc(10)
Local b:TCalc = New TCalc(15)

' add two objects together
Local c:TCalc = a + b

' multiply by 3
c :* 3

Print c.value

' 1 if True, 0 if False
Print c = b

Type TCalc

    Field value:Int

    Method New(value:Int)
        Self.value = value
    End Method

    Method Operator+:TCalc(other:TCalc)
        Return New TCalc(value + other.value)
    End Method

    Method Operator:*(value:Int)
        Self.value :* value
    End Method

    Method Operator=:Int(other:TCalc)
        Return value = other.value
    End Method

End Type
```
As you can see, using overloaded operators with your custom types can certainly make the code less wordy, and hopefully
easier for you to read.

>    Operator overloading allows you to define how the operator works in any way you want, but you need to be careful with
>    that freedom.
>
>    Let's take another look at the addition overload from before :
>
>    `Method Operator+:TCalc(other:TCalc)`
>    `    Return New TCalc(value + other.value)`
>    `End Method`
>
>    It's pretty clear that this `+` overload adds the two object values together.
>    However, we could change it to use the following code instead, where we replace the addition with a subtraction :
>
>    `Method Operator+:TCalc(other:TCalc)`
>    `    Return New TCalc(value - other.value)`
>    `End Method`
>
>    Although the code is technically correct, the outcome of the result is confusing, rather difficult to understand and probably
>    hard to debug.
>
>    It is your responsibility to use operator overloading properly and in a consistent way, otherwise you are lining yourself
>    up for no end of problems in the future (when you've completely forgotten that your addition actually subtracts!)

And remember, that operator overloading only works for custom types. It does not work for BlitzMax's built in primitive
types like Int or Double. That is, you can't change the way `3 + 5` works, but you can change the way `MyObject + 5`
works.

## Generics

Generics adds improved type-safety to your BlitzMax applications by ensuring that a your code is working on the right
kind of data, and throwing a compile-time error if it isn't. A compile-time error is a much better time for your program
to fail than when it's busy running.

<TODO>



## Summary

Hopefully, by now you will have a good understanding of object-orient programming techniques, and
how to use them. Object-oriented programming is an extremely useful tool which makes even the most complex
programs easier to make than ever. The entire purpose of OOP is to allow you take your mind off the inner
working of your program (the parts you already completed), and lets you focus on more high-level tasks, as you
continue to create your program.

[Type]: ../../api/brl/brl.blitz/#type
[Field]: ../../api/brl/brl.blitz/#field
[New]: ../../api/brl/brl.blitz/#new
[Null]: ../../api/brl/brl.blitz/#null
[Function]: ../../api/brl/brl.blitz/#function
[Method]: ../../api/brl/brl.blitz/#method
[Self]: ../../api/brl/brl.blitz/#self
[access modifiers]: #encapsulation-access-modifiers
[Extends]: ../../api/brl/brl.blitz/#extends
[Abstract]: ../../api/brl/brl.blitz/#abstract
[TList Module]: ../../api/brl/brl.linkedlist
[Delete]: ../../api/brl/brl.blitz/#delete
[Global]: ../../api/brl/brl.blitz/#global
[Private]: ../../api/brl/brl.blitz/#private
[Protected]: ../../api/brl/brl.blitz/#protected
[Public]: ../../api/brl/brl.blitz/#public
[Interface]: ../../api/brl/brl.blitz/#interface
[Operator]: ../../api/brl/brl.blitz/#operator
[Int]: ../../api/brl/brl.blitz/#int
[True]: ../../api/brl/brl.blitz/#true
[False]: ../../api/brl/brl.blitz/#false
