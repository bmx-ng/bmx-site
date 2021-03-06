---
id: objects
title: Objects
sidebar_label: Objects
---

Strings, arrays and instances of user defined types are all different kinds of objects.

Objects are handled by reference. This means that the actual memory used by an object to store
its data is shared between all the variables that refer to that object.

This makes objects very efficient to deal with, as assigning an object to a variable simply
involves assigning a reference to the object - not an entire object. Passing objects to functions
and returning objects from functions is also very efficient as again only references need to be copied.

BlitzMax uses a technique known as reference counting to keep track of objects that are in use by your program.

The basic idea behind reference counting is that each object includes a counter reflecting the
number of variables referencing that object. When an object's counter reaches 0, the object is
no longer in use and its memory can be returned to the system.

The process of returning unused objects to the system is called 'garbage collection' and, by
default, is performed automatically. However, it may be desirable to 'force' a garbage collection
(for example, to check for memory leaks) and this can be done using the [GCCollect] command.

Objects can also have methods - function-like operations associated with the object. All objects, including
strings and arrays, provide at least the following methods:

| Method | Description |
|---|---|
| `ToString:String()` | Convert object to a string representation. |
| `Compare:Int( withObject:Object )` | Returns a value less than 0 if an object is less than another object, a value greater than 0 if an object is greater than another object or the value 0 if an object equals another object. |
| `SendMessage:Object( message:Object,context:Object )` | Used to send a generic message to an object. |

The default implementation of the `ToString` method converts the address of the object to hexadecimal
and returns this value as a string. String objects override this behaviour to the return the object itself.

The default implementation of the `Compare` method subtracts object addresses. String objects override
this behaviour to return the result of a character-by-character comparison.

The `SendMessage` method provides a simple, generic messaging system available to all objects. The default
implementation of `SendMessage` simply returns null.

Note that the built-in equals and not equals operators do not actually use the compare method
(with one exception). Instead, these operators compare memory addresses, allowing you to determine
if 2 object references actually refer to the same object. The exception to this rule is when comparisons
are performed on strings, in which case a character-by-character comparison is performed instead.

To access an object's methods, use the member access operator. For example:
```blitzmax
Print "Hello".Compare( "Goodbye" )
```

[GCCollect]: ../../api/brl/brl.blitz/#function-gccollect-int