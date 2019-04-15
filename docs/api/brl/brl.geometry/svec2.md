---
id: svec2
title: SVec2
sidebar_label: SVec2
---

A 2-element structure that can be used to represent positions and directions in 2D-space.


## Constructors

### `Method New(x:Float, y:Float)`

Creates a new [SVec2](../../../brl/brl.geometry/svec2) from the supplied arguments.

<br/>

## Operators

### `Method Operator<>:Int(b:SVec2)`

Returns [True](../../../brl/brl.blitz/#true) if <b>b</b> is different.

<br/>

### `Method Operator=:Int(b:SVec2)`

Returns [True](../../../brl/brl.blitz/#true) if the vector and <b>b</b> are aproximately equal.

<br/>

### `Method Operator+:SVec2(b:SVec2)`

Adds <b>b</b> to the vector, returning the new vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(3, 2)
Local b:SVec2 = New SVec2(-2, 1)

Local c:SVec2 = a + b

Print c.ToString() ' 1, 3
```
<br/>

### `Method Operator-:SVec2(b:SVec2)`

Subtracts <b>b</b> from the vector, returning the new vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(12, 2)

Local b:SVec2 = -a

Print b.ToString() ' -12, -2
```
<br/>

### `Method Operator*:SVec2(b:SVec2)`

Multiplies the vector by <b>b</b>, returning the vectors.

<br/>

### `Method Operator/:SVec2(b:SVec2)`

Divides the vector by <b>b</b>, returning the new vector.

<br/>

### `Method Operator-:SVec2()`

Returns the vector, negated.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(12, 2)

Local b:SVec2 = -a

Print b.ToString() ' -12, -2
```
<br/>

### `Method Operator*:SVec2(s:Float)`

Scales the vector by <b>s</b>, returning the new vector.

<br/>

### `Method Operator/:SVec2(s:Float)`

Divides the vector by <b>s</b>, returning the new vector.

<br/>

### `Method Operator[]:Float(index:Int)`

Retrieves the x or y component using [0] or [1] respectively.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(6, 4)

Print a[0] + ", " + a[1]
```
<br/>

### `Method Operator[]=(index:Int, value:Float)`

Sets the x or y component using [0] or [1] respectively.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(0, 0)

Print a.ToString()

a[0] = 6
a[1] = 4

Print a.ToString()
```
<br/>

## Methods

### `Method Angle:Float(b:SVec2)`

Returns the unsigned angle between this vector and <b>b</b>.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(-5, -5)
Local b:SVec2 = New SVec2(5, 5)


Local c:Float = a.Angle(b)

Print c
```
<br/>

### `Method Apply:SVec2(z:SMat2)`

Applies the 2x2 matrix <b>z</b> to the vector, returning the new vector.

<br/>

### `Method Apply:SVec2(z:SMat3 Var)`

Applies the 3x3 matrix to the vector, returning the new vector.

<br/>

### `Method Apply:SVec2(z:SMat4 Var)`

Applies the 4x4 matrix to the vector, returning the new vector.

<br/>

### `Method Clamp:SVec2(minv:SVec2, maxv:SVec2)`

Returns the vector clamped between the vectors <b>minv</b> and <b>maxv</b>.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(0, 0)
Local b:SVec2 = New SVec2(10, 5)

Local v:SVec2 = New SVec2(11, -2)


Local c:SVec2 = v.Clamp(a, b)

Print c.ToString() ' 10, 0
```
<br/>

### `Method Min:SVec2(b:SVec2)`

Returns a vector that is made from the smallest components of the two vectors.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(12, 8)
Local b:SVec2 = New SVec2(10, 16)


Local c:SVec2 = a.Min(b)

Print c.ToString() ' 10, 8
```
<br/>

### `Method Max:SVec2(b:SVec2)`

Returns a vector that is made from the largest components of the two vectors.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(12, 8)
Local b:SVec2 = New SVec2(10, 16)


Local c:SVec2 = a.Max(b)

Print c.ToString() ' 12, 16
```
<br/>

### `Method Lerp:SVec2(b:SVec2, t:Float)`

Linearly interpolates between two vectors.

Interpolates between this vector and <b>b</b> by the interpolant <b>t</b>.
This is commonly used to find a point some fraction of the way along a line between two endpoints (e.g. to move an object gradually between those points).


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(-6, 8)
Local b:SVec2 = New SVec2(5, 12)

Print a.Lerp(b, 0).ToString() ' -6, 8
Print a.Lerp(b, 1).ToString() ' 5, 12
Print a.Lerp(b, 0.5).ToString() ' -0.5, 10
```
<br/>

### `Method Normal:SVec2()`

Returns the vector with a magnitude of 1.

When normalized, a vector keeps the same direction but its length is 1.0.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(10, 0)

Local b:SVec2= a.Normal()

Print b.ToString() ' 1, 0
```
<br/>

### `Method Dot:Float(b:SVec2)`

Returns the dot product of two vectors.

For normalized vectors [Dot](../../../brl/brl.geometry/svec2/#method-dot-floatb-svec2) returns 1 if they point in exactly the same direction, -1 if they point in completely opposite directions,
and a number in between for other cases (e.g. Dot returns zero if vectors are perpendicular).


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(-6, 8)
Local b:SVec2 = New SVec2(5, 12)

Local dot:Float = a.Dot(b)

Print dot ' 66
```
<br/>

### `Method Length:Float()`

Returns the length of the vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(3, 4)

Local length:Float = a.Length()

Print length ' 5
```
<br/>

### `Method LengthSquared:Float()`

Returns the squared length of the vector.

Calculating the squared length instead of the length is much faster.
Often if you are comparing lengths of two vectors you can just compare their squared lengths.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(3, 4)

Local length:Float = a.LengthSquared()

Print length ' 25
```
<br/>

### `Method Distance:Float(b:SVec2)`

Returns the distance between the vector And <b>b</b>.

<br/>

### `Method DistanceSquared:Float(b:SVec2)`

Returns the squared distance between the vector and <b>b</b>.

<br/>

### `Method Perpendicular:SVec2()`

Returns a vector perpendicular to the vector.

<br/>

### `Method Reflect:SVec2(n:SVec2)`

Returns the vector reflected from the given plane, specified by its normal vector.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import brl.geometry

Local a:SVec2 = New SVec2(5, 0)
Local b:SVec2 = New SVec2(0, 10)

Local c:SVec2 = a.Reflect(b)

Print c.ToString() ' -5, 0
```
<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the vector.

<br/>

