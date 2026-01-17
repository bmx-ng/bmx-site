---
id: pub.stdc
title: Pub.StdC
sidebar_label: Introduction
---


## Structs
| Struct | Description |
|---|---|
| [SDateTime](../../pub/pub.stdc/sdatetime) | A basic DateTime struct. |

## Enums
| Enum | Description |
|---|---|
| [EWeekday](../../pub/pub.stdc/eweekday) | Enumeration for the days of the week. |
| [EShortWeekday](../../pub/pub.stdc/eshortweekday) | Enumeration for the abbreviated days of the week. |

## Functions

### `Function CurrentDateTime(dt:SDateTime Var, utc:Int = True)`

Returns the current date and time.

<br/>

### `Function CurrentUnixTime:ULong()`

Returns the current Unix time in milliseconds.

The Unix time is a system for describing a point in time, defined as the number of seconds that have
elapsed since 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970, minus the number of leap seconds.


<br/>

### `Function WeekDayToShortWeekday:EShortWeekday(day:EWeekday)`

Converts an [EWeekday](../../pub/pub.stdc/eweekday) value to its corresponding [EShortWeekday](../../pub/pub.stdc/eshortweekday) value.

#### Returns
The corresponding [EShortWeekday](../../pub/pub.stdc/eshortweekday) value.


<br/>

### `Function ShortWeekdayToWeekDay:EWeekday(shortDay:EShortWeekday)`

Converts an [EShortWeekday](../../pub/pub.stdc/eshortweekday) value to its corresponding [EWeekday](../../pub/pub.stdc/eweekday) value.

#### Returns
The corresponding [EWeekday](../../pub/pub.stdc/eweekday) value.


<br/>

### `Function CurrentDate:String(_format:String="%d <i>b</i> <i>Y</i>")`

Gets the current date string.


By default, it returns the current date in the format: DD MON YYYY (i.e. 10 DEC 2000).
You can also specify some parameters to return the date in a format of your choice:
<table><tr><td> <b>parameter</b></td><td><b>description</b></td></tr><tr><td>  %%a</td><td>Abbreviated day name (sun - mon).</td></tr><tr><td>  %%A</td><td>Long day name (Sunday - Monday).</td></tr><tr><td>  %%b</td><td>Abbreviated month name (jan - feb).</td></tr><tr><td>  %%B</td><td>Long month name (January...).</td></tr><tr><td>  %%c</td><td>Locale date & time.</td></tr><tr><td>  %%d</td><td>day - in number (1..31).</td></tr><tr><td>  %%H</td><td>hour - in number (0..23).</td></tr><tr><td>  %%I</td><td>hour - in number (1..12).</td></tr><tr><td>  %%j</td><td>day of the year (1..366).</td></tr><tr><td>  %%m</td><td>month - in number (1..12).</td></tr><tr><td>  %%M</td><td>minutes - in number (00..59).</td></tr><tr><td>  %%P</td><td>AM / PM.</td></tr><tr><td>  %%S</td><td>seconds - in number (00..59).</td></tr><tr><td>  %%U</td><td>week number</td></tr><tr><td>  %%w</td><td>day of the week (0..6).</td></tr><tr><td>  %%W</td><td>week of the year (0..53).</td></tr><tr><td>  %%x</td><td>locale data representation.</td></tr><tr><td>  %%y</td><td>year without century (2014 --> 14).</td></tr><tr><td>  %%Y</td><td>Year (2014).</td></tr><tr><td>  %%Z</td><td>Time zone name.</td></tr></table>

You can use these parameters together:<br/>
CurrentDate("Month: %%a Day: %%d")<br/>


#### Returns
The current date as a string


<br/>

### `Function CurrentTime:String()`

Gets the current time string.


Returns the current time in the format: HH:MM:SS (i.e. 14:31:57).


#### Returns
The current time as a string


<br/>

