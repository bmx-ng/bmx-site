---
id: enums
title: Enums
sidebar_label: Enums
---

## Introduction

An [Enum] is an efficient way to define a set of constants that can be assigned to variables.
Say, for example, you'd like to represent the days of the week. Since this is a fixed set of seven
possible values, you could define those values within an Enum :

```blitzmax
Enum EDay
	Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
End Enum
```

Comma separators are optional, and elements can be placed on separate lines.

```blitzmax
Enum ESequence
	Morning
	Afternoon
	Night
End Enum
```
By default, the underlying type of an enum element is an [Int], but you can specify a different numeric
type by using the standard type declaration syntax, as shown in the following example. Valid integral
numeric types that can be assigned as a type include, [Byte], [Short], [Int], [UInt], [Long], [ULong] and [Size_T].

```blitzmax
Enum EMonth:Byte
	Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
End Enum
```

When you do not specify any values for the elements, the default is to assign it the index in
the list of elements, starting from `0`. So, from the `EDay` example, `EDay.Sunday` is associated
with the value `0`, `EDay.Monday` with `1`, and so on.

## Using Enums

You assign an enum value to a variable just as you would any other type:

```blitzmax
Local meetingDay:EDay = EDay.Monday
```

A variable declared as a particular type of Enum can only be assigned to enum elements of that kind.
```blitzmax
meetingDay = EDay.Wednesday ' good

meetingDay = EMonth.Aug ' error
meetingDay = 3 ' error
```

To retrieve the numeric value for a particular enum element, you can use the `Ordinal()` method:
```blitzmax
Print EMonth.May.Ordinal()
```
Would print `4`.

The `ToString()` method returns a [String] representation of the enum element:
```blitzmax
Print EMonth.Sep.ToString()
```
Would print `Sep`.

The `Values()` function returns an array of all elements:
```blitzmax
For Local month:EMonth = Eachin EMonth.Values()
    Print month.ToString() + " = " + month.Ordinal()
Next
```

## Assigning Values

Rather than using just the default values, you can also assign any constant value
(or something that will evaluate to a constant value at compile time) to the elements of an Enum.

```blitzmax
Enum EMachineState
	PowerOff = 0
	Running = 5
	Sleeping = 10
	Hibernating = Sleeping + 5
End Enum
```

Subsequent elements that do not specify a value, increment from the preceding entry. So if the preceding element
had a value of `15`, the next would automatically have the value `16`.

## Bit Flag Enums

You can use an [Enum] to define bit flags, which enables an instance of the Enum to store
any combination of the values that are defined in its elements.

You create a bit flags enum by applying the `Flags` modifier to the Enum declaration,
defining the values appropriately so that standard bitwise operations can be performed on them.

In the following example, an Enum called EDays is defined with the Flags modifier. Each
value is automatically assigned the next greater power of `2`, starting at `1`. This enables you
to create an `EDays` variable whose value is `EDays.Tuesday | EDays.Thursday`.

```blitzmax
SuperStrict
Framework brl.standardio

Local meetingDays:EDays = EDays.Tuesday | EDays.Thursday
Print meetingDays.ToString()

Enum EDays Flags
	Sunday
	Monday
	Tuesday
	Wednesday
	Thursday
	Friday
	Saturday
End Enum
```

To set a flag on an enum, use the bitwise or operator (`|`) as shown in the following example:

```blitzmax
' Initialize with two flags using bitwise Or.
meetingDays = EDays.Tuesday | EDays.Thursday

' Set an additional flag using bitwise Or.
meetingDays :| EDays.Friday

Print "Meeting days are " + meetingDays.ToString()
' Output: Meeting days are Tuesday|Thursday|Friday

' Remove a flag using bitwise XOr.
meetingDays :~ EDays.Tuesday
Print "Meeting days are " + meetingDays.ToString()
' Output: Meeting days are Thursday|Friday
```

To determine whether a specific flag is set, use a bitwise AND operation (`&`), as shown in the following example:

```blitzmax
' Test value of flags using bitwise AND.
Local test:Int = (meetingDays & EDays.Thursday) = EDays.Thursday
If test Then
	Print "Thursday is a meeting day."
Else
	Print "Thursday is not a meeting day."
End If
' Output: Thursday is a meeting day.
```

Bit flag enums can also have their values specified. It is generally advised to make the values
powers of `2`, so that you can apply bitwise operations to them. Default values for elements will
always be a power of `2`, the next element being the next logical power of `2` higher than the previous entry.

```blitzmax
SuperStrict
Framework brl.standardio

For Local attackType:EAttackType = EachIn EAttackType.Values()
	Print attackType.ToString() + " = " + attackType.Ordinal()
Next

Enum EAttackType Flags
    Melee
    Fire
    Ice = $8
    Poison
End Enum
```

Because bit flags are limited to the number of bits for a given type (e.g. 8 bits for a [Byte],
32 bits for an [Int]), you need to ensure that the type you use for a bit flag Enum has enough
bits for all the elements you require.

If you try to use more bits than the type allows, the compile will fail with an appropriate error message.

## Enum vs Const

As well as making the code easier to read, by using an Enum instead of a set of [Const] values,
we can let the compiler ensure that only the specific set of values defined by the Enum be used.

In the following example, we define a set of consts to record the types of available tyres a car can use:

```blitzmax
SuperStrict
Framework brl.standardio

Local car:TCar = New TCar

TPitstop.ChangeTyre(car, TYRE_SOFT)

Const TYRE_SOFT:Int = 0
Const TYRE_MEDIUM:Int = 1
Const TYRE_HARD:Int = 2
Const TYRE_INTER:Int = 3
Const TYRE_WET:Int = 4

Type TPitstop

	Function ChangeTyre(car:TCar, set:Int)
		If car.tyreSet = set And set <> TYRE_WET Then
			Throw"Can't change to same kind of tyre"
		End If

		Local s:String
		Select set
			Case TYRE_SOFT
				s = "Soft"
			Case TYRE_MEDIUM
				s = "Medium"
			Case TYRE_HARD
				s = "Hard"
			Case TYRE_INTER
				s = "Inter"
			Case TYRE_WET
				s = "Wet"
			Default
				Throw "Not a valid tyre choice"
		End Select
		car.tyreSet = set
		Print "Changing to " + s
	End Function

End Type

Type TCar
	Field tyreSet:Int = TYRE_MEDIUM
End Type
```
We expect that users of our code will diligently use the defined constants,
instead of numbers – `TYRE_SOFT`, `TYRE_MEDIUM` and so on.
The problem lies in the fact that someone may decide not to use the constants defined
by us and may submit an invalid number as an argument of our function,
for example: `-1` or `10`. In this case, if the function does not check for
invalid value, it will likely result in incorrect behaviour.

To avoid this problem we can replace the constants with an Enum, thereby constraining
the values that can be passed into the function :
```blitzmax
SuperStrict
Framework brl.standardio

Local car:TCar = New TCar

TPitstop.ChangeTyre(car, ETyre.Soft)

Enum ETyre
	Soft
	Medium
	Hard
	Inter
	Wet
End Enum

Type TPitstop

	Function ChangeTyre(car:TCar, set:ETyre)
		If car.tyreSet = set And set <> ETyre.Wet Then
			Throw"Can't change to same kind of tyre"
		End If

		Local s:String
		Select set
			Case ETyre.Soft
				s = "Soft"
			Case ETyre.Medium
				s = "Medium"
			Case ETyre.Hard
				s = "Hard"
			Case ETyre.Inter
				s = "Inter"
			Case ETyre.Wet
				s = "Wet"
		End Select
		car.tyreSet = set
		Print "Changing to " + s
	End Function

End Type

Type TCar
	Field tyreSet:ETyre = ETyre.Medium
End Type
```

Notice that we no longer need to [Throw] on unsupported values of `set` because we know
that only the values specified by the [Enum] will ever be used.


[Enum]: ../../api/brl/brl.blitz/#enum
[Byte]: ../../api/brl/brl.blitz/#byte
[Short]: ../../api/brl/brl.blitz/#short
[Int]: ../../api/brl/brl.blitz/#int
[UInt]: ../../api/brl/brl.blitz/#uint
[Long]: ../../api/brl/brl.blitz/#long
[ULong]: ../../api/brl/brl.blitz/#ulong
[Size_T]: ../../api/brl/brl.blitz/#size-t
[Const]: ../../api/brl/brl.blitz/#const
[Throw]: ../../api/brl/brl.blitz/#throw
[String]: ../../api/brl/brl.blitz/#string
