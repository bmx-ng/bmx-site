---
id: sdatetime
title: SDateTime
sidebar_label: SDateTime
---

A basic DateTime struct.


## Fields

### `Field year:Int`

The year.

<br/>

### `Field month:Int`

The month, 1-12.

<br/>

### `Field day:Int`

The day of the month, 1-31.

<br/>

### `Field hour:Int`

The hour, 0-23.

<br/>

### `Field minute:Int`

The minute, 0-59.

<br/>

### `Field second:Int`

The second, 0-59.

<br/>

### `Field millisecond:Int`

The millisecond, 0-999.

<br/>

### `Field utc:Int`

[True](../../../brl/brl.blitz/#true) if the date time is in UTC, [False](../../../brl/brl.blitz/#false) if it is in local time.

<br/>

### `Field offset:Int`

The offset from UTC, in minutes.

<br/>

### `Field dst:Int = -1`

1 if the date time is observing daylight savings time, 0 if not and -1 if it is not known.

Daylight Saving Time (DST) is the practice of setting the clock ahead by one hour from standard time
during the warmer months, and then back again in the fall, in order to extend evening daylight and reduce the
need for artificial lighting. This can affect local time calculations, and so it's important to track whether a
given datetime object is observing DST. Note that not all regions observe DST, and the start and end dates
for DST can vary from one region to another.


<br/>

## Constructors

### `Method New(year:Int, month:Int, day:Int, hour:Int, minute:Int, second:Int, millisecond:Int = 0, utc:Int = True, offset:Int = 0, dst:Int = -1)`

Creates a new [SDateTime](../../../pub/pub.stdc/sdatetime) instance from the given date and time information.

<br/>

## Methods

### `Method ToString:String()`

Returns a string representation of the date time in ISO 8601 format.

Without millisecond precision.


<br/>

### `Method ToIso8601:String(showMillis:Int = False)`

Returns a string representation in ISO 8601 format.

ISO 8601 is an international standard covering the exchange of date- and time-related data.
It was issued by the International Organization for Standardization (ISO) and provides a well-defined method of representing dates and
times in a way that avoids ambiguity.

An example of a date in ISO 8601 format is "2023-06-24T18:30:00Z", representing 6:30 pm on June 24, 2023, in Coordinated Universal Time (UTC).

If <b>showMillis</b> is set to [True](../../../brl/brl.blitz/#true), the output string will include millisecond precision. For instance, "2023-06-24T18:30:00.123Z"
where "123" represents milliseconds.


<br/>

### `Method ToEpochSecs:Long()`

Converts the current date and time to the number of seconds that have elapsed since the Unix Epoch.

The 'epoch' refers to the Unix epoch, which is a system for describing a point in time, defined as the number of seconds
that have elapsed since 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970, minus the number of leap seconds.


#### Returns
The number of seconds that have elapsed since the Unix Epoch, or -1 if the conversion failed.


<br/>

### `Method ToUtc:SDateTime()`

Converts the current date time to the equivalent in UTC.

#### Returns
The equivalent date time in UTC, or the original date time if the conversion failed.


<br/>

### `Method DayOfWeek:EWeekday()`

Returns the day of the week for the current date.

This method uses Zeller's Congruence algorithm to calculate the day of the week.


#### Returns
An enumeration representing the day of the week.


<br/>

## Functions

### `Function FromEpoch:SDateTime(epochSecs:Long, fracNanoSecs:Long = 0, isLocal:Int = False)`

Returns an instance of [SDateTime](../../../pub/pub.stdc/sdatetime) representing the date and time corresponding to the given epoch timestamp.

The 'epoch' refers to the Unix epoch, which is a system for describing a point in time, defined as the number of seconds
that have elapsed since 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970, minus the number of leap seconds.

If <b>fracNanoSecs</b> is provided, it will be used to set the 'millisecond' field of the SDateTime instance.
The nanosecond fraction is effectively divided by a million to provide millisecond precision.
If <b>isLocal</b> is set to [True](../../../brl/brl.blitz/#true), the epoch timestamp is assumed to be in local time, otherwise it is assumed to be in UTC.


<br/>

