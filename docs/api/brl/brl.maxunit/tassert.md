---
id: tassert
title: TAssert
sidebar_label: TAssert
---

A set of assert methods.


Messages are only displayed when an assert fails.


## Functions

### `Function assertTrue(bool:Int, message:String = Null)`

Asserts that a condition is [True](../../../brl/brl.blitz/#true).

If it isn't [True](../../../brl/brl.blitz/#true), it throws an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) with the given message.


<br/>

### `Function assertFalse(bool:Int, message:String = Null)`

Asserts that a condition is [False](../../../brl/brl.blitz/#false).

If it isn't [False](../../../brl/brl.blitz/#false), it throws an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) with the given message.


<br/>

### `Function fail(message:String)`

Fails a test with the given message.

<br/>

### `Function assertEquals(expected:Object, actual:Object, message:String = Null)`

Asserts that two objects are equal.

If they are not equal, an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertEqualsI(expected:Int, actual:Int, message:String = Null)`

Asserts that two ints are equal.

If they are not equal, an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertEqualsL(expected:Long, actual:Long, message:String = Null)`

Asserts that two longs are equal.

If they are not equal an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertEqualsF(expected:Float, actual:Float, delta:Float = 0, message:String = Null)`

Asserts that two floats are equal.

If they are not equal, an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertEqualsD(expected:Double, actual:Double, delta:Double = 0, message:String = Null)`

Asserts that two doubles are equal.

If they are not equal, an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertEqualsS(expected:Short, actual:Short, message:String = Null)`

Asserts that two shorts are equal.

If they are not equal, an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertEqualsB(expected:Byte, actual:Byte, message:String = Null)`

Asserts that two bytes are equal.

If they are not equal, an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertNotNull(obj:Object, message:String = Null)`

Asserts that an object isn't [Null](../../../brl/brl.blitz/#null).

If it is [Null](../../../brl/brl.blitz/#null), an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertNotNull(value:Byte Ptr, message:String = Null)`

Asserts that a pointer isn't [Null](../../../brl/brl.blitz/#null).

If it is [Null](../../../brl/brl.blitz/#null), an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertNull(obj:Object, message:String = Null)`

Asserts that an [Object](../../../brl/brl.blitz/#object) is [Null](../../../brl/brl.blitz/#null).


If it is not [Null](../../../brl/brl.blitz/#null), an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertSame(expected:Object, actual:Object, message:String = Null)`

Asserts that two objects refer to the same [Object](../../../brl/brl.blitz/#object).

If they are not the same, an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertNull(value:Byte Ptr, message:String = Null)`

Asserts that an pointer is [Null](../../../brl/brl.blitz/#null).


If it is not [Null](../../../brl/brl.blitz/#null), an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertNotSame(expected:Object, actual:Object, message:String = Null)`

Asserts that two objects refer to different objects.

If they are the same, an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertEquals(expected:UInt, actual:UInt, message:String = Null)`

Asserts that two UInts are equal.

If they are not equal, an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertEquals(expected:ULong, actual:ULong, message:String = Null)`

Asserts that two ULongs are equal.

If they are not equal, an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

### `Function assertEquals(expected:Size_T, actual:Size_T, message:String = Null)`

Asserts that two Size_Ts are equal.

If they are not equal, an [AssertionFailedException](../../../brl/brl.maxunit/assertionfailedexception) is thrown with the given message.


<br/>

