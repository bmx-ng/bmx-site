---
id: collections
title: Collections
sidebar_label: Collections
---

BlitzMax provides built-in support for working with **collections** of values or objects, and
for visiting each element in a collection using the [`For`]/[`EachIn`]/[`Next`] loop construct.

A *collection* is any value that can be iterated using `EachIn`.

## Arrays

The simplest and most common kind of collection is an array:

```blitzmax
Local a[] = [1, 2, 3, 4, 5]

For Local k:Int = EachIn a
	Print k
Next
```

Each iteration assigns the next array element (starting at index 0) to the loop variable
before executing the loop body. This allows you to **visit** each element in turn without
explicit indexing.

Arrays of any type may be used in this way:

```blitzmax
Local words:String[] = ["Hello", "World"]

For Local s:String = EachIn words
	Print s
Next
```

## Iterable Objects

In addition to arrays, user-defined types may also act as collections.
This allows custom data structures (lists, trees, streams, generators, etc.)
to integrate naturally with [`EachIn`].

A value can be iterated by [`EachIn`] if it provides **any one** of the following:

- An `ObjectEnumerator` method (legacy mechanism)
- The `IIterable<T>` interface
- The `IIterator<T>` interface

---

## Using `ObjectEnumerator` (Legacy Mechanism)

A type may define a method named `ObjectEnumerator` that returns an *enumerator object*.

```blitzmax
Method ObjectEnumerator:Object()
```

The returned object must provide the following methods:

```blitzmax
Method HasNext:Int()        ' returns True if another value is available
Method NextObject:Object()  ' returns the next value
```

### Example

In this example, the class is both enumerable as well as being the enumerator.

```blitzmax
Type TCounter
	Field value:Int = 1

	Method ObjectEnumerator:Object()
		Return Self
	End Method

	Method HasNext:Int()
		Return value <= 3
	End Method

	Method NextObject:Object()
		Local v:Int = value
		value :+ 1
		Return v
	End Method
End Type

For Local n:Int = EachIn New TCounter
	Print n
Next
```

This approach remains fully supported, primarily for compatibility with existing code.

---

## Using `IIterable` and `IIterator`

BlitzMax also provides two generic interfaces that define a clear, type-safe iteration model.

```blitzmax
Interface IIterable<T>
	Method GetIterator:IIterator<T>()
End Interface
```

```blitzmax
Interface IIterator<T>
	Method Current:T()
	Method MoveNext:Int()
End Interface
```

Both interfaces are **directly supported** by the `EachIn` mechanism.

- If a value implements **`IIterable<T>`**, `EachIn` will call `GetIterator()` to obtain an iterator.
- If a value implements **`IIterator<T>`**, it can be used **directly** in an `EachIn` loop.

This makes it possible to iterate over iterators that have been obtained or constructed elsewhere.

---

## Iterating an `IIterable`

```blitzmax
Type TRangeIterator Implements IIterator<Int>
	Field current:Int
	Field last:Int

	Method MoveNext:Int()
		If current < last Then
			current :+ 1
			Return True
		End If
		Return False
	End Method

	Method Current:Int()
		Return current
	End Method
End Type

Type TRange Implements IIterable<Int>
	Field first:Int
	Field last:Int

	Method GetIterator:IIterator<Int>()
		Local it:TRangeIterator = New TRangeIterator
		it.current = first - 1
		it.last = last
		Return it
	End Method
End Type

For Local i:Int = EachIn New TRange(1, 5)
	Print i
Next
```

---

## Iterating an `IIterator` Directly

An iterator can also be used as a collection on its own.

This is useful when an iterator has been obtained from another object, function, or API.

```blitzmax
Local it:IIterator<String> = GetStringIterator()

For Local s:String = EachIn it
	Print s
Next
```

In this case, [`EachIn`] operates directly on the iterator by repeatedly calling
`MoveNext()` and `Current()`.

---

## Choosing an Approach

- **`ObjectEnumerator`**
  - Simple and compact
  - Object-based (non-generic)
  - Widely used in legacy code

- **`IIterable<T>`**
  - Strongly typed
  - Produces fresh iterators
  - Ideal for reusable collections

- **`IIterator<T>`**
  - Strongly typed
  - Can be consumed directly
  - Ideal for streams and externally acquired iterators

All three mechanisms are fully supported by [`EachIn`].

---

[`For`]: ../../api/brl/brl.blitz/#for
[`EachIn`]: ../../api/brl/brl.blitz/#eachin
[`Next`]: ../../api/brl/brl.blitz/#next