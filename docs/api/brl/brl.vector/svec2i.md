---
id: svec2i
title: SVec2I
sidebar_label: SVec2I
---

An [Int](../../../brl/brl.blitz/#int) backed 2-element structure that can be used to represent positions and directions in 2D-space.


## Constructors

### `Method New(x:Int, y:Int)`

Creates a new [SVec2I](../../../brl/brl.vector/svec2i) from the supplied arguments.

<br/>

## Operators

### `Method Operator<>:Int(b:SVec2I)`

Returns [True](../../../brl/brl.blitz/#true) if <b>b</b> is different.

<br/>

### `Method Operator=:Int(b:SVec2I)`

Returns [True](../../../brl/brl.blitz/#true) if the vector and <b>b</b> are aproximately equal.

<br/>

### `Method Operator+:SVec2I(b:SVec2I)`

Adds <b>b</b> to the vector, returning a new vector.

<br/>

### `Method Operator-:SVec2I(b:SVec2I)`

Subtracts <b>b</b> from the vector, returning a new vector.

<br/>

### `Method Operator*:SVec2I(b:SVec2I)`

Multiplies the vector by <b>b</b>, returning a new vector.

<br/>

### `Method Operator/:SVec2I(b:SVec2I)`

Divides the vector by <b>b</b>, returning a new vector.

<br/>

### `Method Operator-:SVec2I()`

Returns a new vector, negated.

<br/>

### `Method Operator*:SVec2I(s:Int)`

Scales the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator/:SVec2I(s:Int)`

Divides the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator/:SVec2I(s:Float)`

Divides the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator[]:Int(index:Int)`

Retrieves the x or y component using [0] or [1] respectively.

<br/>

## Methods

### `Method AngleTo:Int(b:SVec2I)`

Returns the unsigned angle between this vector and <b>b</b>.

<br/>

### `Method Clamp:SVec2I(minv:SVec2I, maxv:SVec2I)`

Returns a vector clamped between the vectors <b>minv</b> and <b>maxv</b>.

<br/>

### `Method Min:SVec2I(b:SVec2I)`

Returns a vector that is made from the smallest components of the two vectors.

<br/>

### `Method Max:SVec2I(b:SVec2I)`

Returns a vector that is made from the largest components of the two vectors.

<br/>

### `Method Interpolate:SVec2I(b:SVec2I, t:Int)`

Linearly interpolates between two vectors.

Interpolates between this vector and <b>b</b> by the interpolant <b>t</b>.
This is commonly used to find a point some fraction of the way along a line between two endpoints (e.g. to move an object gradually between those points).


<br/>

### `Method Normal:SVec2I()`

Returns a vector with a magnitude of 1.

When normalized, a vector keeps the same direction but its length is 1.0.


<br/>

### `Method Dot:Int(b:SVec2I)`

Returns the dot product of two vectors.

For normalized vectors [Dot](../../../brl/brl.vector/svec2i/#method-dotintbsvec2i) returns 1 if they point in exactly the same direction, -1 if they point in completely opposite directions,
and a number in between for other cases (e.g. Dot returns zero if vectors are perpendicular).


<br/>

### `Method Length:Int()`

Returns the length of the vector.

<br/>

### `Method LengthSquared:Int()`

Returns the squared length of the vector.

Calculating the squared length instead of the length is much faster.
Often if you are comparing lengths of two vectors you can just compare their squared lengths.


<br/>

### `Method DistanceTo:Int(b:SVec2I)`

Returns the distance between the vector And <b>b</b>.

<br/>

### `Method DistanceToSquared:Int(b:SVec2I)`

Returns the squared distance between the vector and <b>b</b>.

<br/>

### `Method Perpendicular:SVec2I()`

Returns a vector perpendicular to the vector.

<br/>

### `Method Reflect:SVec2I(n:SVec2I)`

Returns a vector reflected from the given plane, specified by its normal vector.

<br/>

### `Method Rotate:SVec2I(angle:Double)`

Returns a vector rotated by <b>angle</b> degrees.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the vector.

<br/>

