---
id: svec2d
title: SVec2D
sidebar_label: SVec2D
---

A 2-element structure that can be used to represent positions and directions in 2D-space.


## Constructors

### `Method New(x:Double, y:Double)`

Creates a new [SVec2D](../../../brl/brl.vector/svec2d) from the supplied arguments.

<br/>

## Operators

### `Method Operator<>:Int(b:SVec2D)`

Returns [True](../../../brl/brl.blitz/#true) if <b>b</b> is different.

<br/>

### `Method Operator=:Int(b:SVec2D)`

Returns [True](../../../brl/brl.blitz/#true) if the vector and <b>b</b> are aproximately equal.

<br/>

### `Method Operator+:SVec2D(b:SVec2D)`

Adds <b>b</b> to the vector, returning a new vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(3, 2)
Local b:SVec2D = New SVec2D(-2, 1)

Local c:SVec2D = a + b

Print c.ToString() ' 1, 3
```
<br/>

### `Method Operator-:SVec2D(b:SVec2D)`

Subtracts <b>b</b> from the vector, returning a new vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(12, 2)
Local b:SVec2D = New SVec2D(4, 5)

Local c:SVec2D = a - b

Print c.ToString() ' 8, -3
```
<br/>

### `Method Operator*:SVec2D(b:SVec2D)`

Multiplies the vector by <b>b</b>, returning a new vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(2, 3)
Local b:SVec2D = New SVec2D(5, 6)

Local c:SVec2D = a * b

Print c.ToString() ' 10, 18
```
<br/>

### `Method Operator/:SVec2D(b:SVec2D)`

Divides the vector by <b>b</b>, returning a new vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(10, 18)
Local b:SVec2D = New SVec2D(5, 6)

Local c:SVec2D = a / b

Print c.ToString() ' 2, 3
```
<br/>

### `Method Operator-:SVec2D()`

Returns a new vector, negated.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(12, 2)

Local b:SVec2D = -a

Print b.ToString() ' -12, -2
```
<br/>

### `Method Operator*:SVec2D(s:Double)`

Scales the vector by <b>s</b>, returning a new vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local m:SVec2D = New SVec2D(7, 3)

Local a:SVec2D = m * 3

Print a.ToString() ' 21, 9
```
<br/>

### `Method Operator/:SVec2D(s:Double)`

Divides the vector by <b>s</b>, returning a new vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local m:SVec2D = New SVec2D(21, 9)

Local a:SVec2D = m / 3

Print a.ToString() ' 7, 3
```
<br/>

### `Method Operator[]:Double(index:Int)`

Retrieves the x or y component using [0] or [1] respectively.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(6, 4)

Print a[0] + ", " + a[1]
```
<br/>

## Methods

### `Method AngleTo:Double(b:SVec2D)`

Returns the unsigned angle between this vector and <b>b</b>.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(-5, -5)
Local b:SVec2D = New SVec2D(5, 5)


Local c:Double = a.AngleTo(b)

Print c
```
<br/>

### `Method Clamp:SVec2D(minv:SVec2D, maxv:SVec2D)`

Returns a vector clamped between the vectors <b>minv</b> and <b>maxv</b>.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(0, 0)
Local b:SVec2D = New SVec2D(10, 5)

Local v:SVec2D = New SVec2D(11, -2)


Local c:SVec2D = v.Clamp(a, b)

Print c.ToString() ' 10, 0
```
<br/>

### `Method Min:SVec2D(b:SVec2D)`

Returns a vector that is made from the smallest components of the two vectors.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(12, 8)
Local b:SVec2D = New SVec2D(10, 16)


Local c:SVec2D = a.Min(b)

Print c.ToString() ' 10, 8
```
<br/>

### `Method Max:SVec2D(b:SVec2D)`

Returns a vector that is made from the largest components of the two vectors.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(12, 8)
Local b:SVec2D = New SVec2D(10, 16)


Local c:SVec2D = a.Max(b)

Print c.ToString() ' 12, 16
```
<br/>

### `Method Interpolate:SVec2D(b:SVec2D, t:Double)`

Linearly interpolates between two vectors.

Interpolates between this vector and <b>b</b> by the interpolant <b>t</b>.
This is commonly used to find a point some fraction of the way along a line between two endpoints (e.g. to move an object gradually between those points).


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(-6, 8)
Local b:SVec2D = New SVec2D(5, 12)

Print a.Interpolate(b, 0).ToString() ' -6, 8
Print a.Interpolate(b, 1).ToString() ' 5, 12
Print a.Interpolate(b, 0.5).ToString() ' -0.5, 10
```
<br/>

### `Method Normal:SVec2D()`

Returns a vector with a magnitude of 1.

When normalized, a vector keeps the same direction but its length is 1.0.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(10, 0)

Local b:SVec2D = a.Normal()

Print b.ToString() ' 1, 0
```
<br/>

### `Method Dot:Double(b:SVec2D)`

Returns the dot product of two vectors.

For normalized vectors [Dot](../../../brl/brl.vector/svec2d/#method-dot-doubleb-svec2d) returns 1 if they point in exactly the same direction, -1 if they point in completely opposite directions,
and a number in between for other cases (e.g. Dot returns zero if vectors are perpendicular).


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(-6, 8)
Local b:SVec2D = New SVec2D(5, 12)

Local dot:Float = a.Dot(b)

Print dot ' 66
```
<br/>

### `Method Length:Double()`

Returns the length of the vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(3, 4)

Local length:Float = a.Length()

Print length ' 5
```
<br/>

### `Method LengthSquared:Double()`

Returns the squared length of the vector.

Calculating the squared length instead of the length is much faster.
Often if you are comparing lengths of two vectors you can just compare their squared lengths.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(3, 4)

Local length:Double = a.LengthSquared()

Print length ' 25
```
<br/>

### `Method DistanceTo:Double(b:SVec2D)`

Returns the distance between the vector And <b>b</b>.

<br/>

### `Method DistanceToSquared:Double(b:SVec2D)`

Returns the squared distance between the vector and <b>b</b>.

<br/>

### `Method Perpendicular:SVec2D()`

Returns a vector perpendicular to the vector.

<br/>

### `Method Reflect:SVec2D(n:SVec2D)`

Returns a vector reflected from the given plane, specified by its normal vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.vector

Local a:SVec2D = New SVec2D(5, 0)
Local b:SVec2D = New SVec2D(0, 10)

Local c:SVec2D = a.Reflect(b)

Print c.ToString() ' -5, 0
```
<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the vector.

<br/>

