---
id: svec2f
title: SVec2F
sidebar_label: SVec2F
---

A [Float](../../../brl/brl.blitz/#float) backed 2-element structure that can be used to represent positions and directions in 2D-space.


## Constructors

### `Method New(x:Float, y:Float)`

Creates a new [SVec2F](../../../brl/brl.vector/svec2f) from the supplied arguments.

<br/>

## Operators

### `Method Operator<>:Int(b:SVec2F)`

Returns [True](../../../brl/brl.blitz/#true) if <b>b</b> is different.

<br/>

### `Method Operator=:Int(b:SVec2F)`

Returns [True](../../../brl/brl.blitz/#true) if the vector and <b>b</b> are aproximately equal.

<br/>

### `Method Operator+:SVec2F(b:SVec2F)`

Adds <b>b</b> to the vector, returning a new vector.

<br/>

### `Method Operator-:SVec2F(b:SVec2F)`

Subtracts <b>b</b> from the vector, returning a new vector.

<br/>

### `Method Operator*:SVec2F(b:SVec2F)`

Multiplies the vector by <b>b</b>, returning a new vector.

<br/>

### `Method Operator/:SVec2F(b:SVec2F)`

Divides the vector by <b>b</b>, returning a new vector.

<br/>

### `Method Operator-:SVec2F()`

Returns a new vector, negated.

<br/>

### `Method Operator*:SVec2F(s:Float)`

Scales the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator/:SVec2F(s:Float)`

Divides the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator[]:Float(index:Int)`

Retrieves the x or y component using [0] or [1] respectively.

<br/>

## Methods

### `Method AngleTo:Float(b:SVec2F)`

Returns the unsigned angle between this vector and <b>b</b>.

<br/>

### `Method Clamp:SVec2F(minv:SVec2F, maxv:SVec2F)`

Returns a vector clamped between the vectors <b>minv</b> and <b>maxv</b>.

<br/>

### `Method Min:SVec2F(b:SVec2F)`

Returns a vector that is made from the smallest components of the two vectors.

<br/>

### `Method Max:SVec2F(b:SVec2F)`

Returns a vector that is made from the largest components of the two vectors.

<br/>

### `Method Interpolate:SVec2F(b:SVec2F, t:Float)`

Linearly interpolates between two vectors.

Interpolates between this vector and <b>b</b> by the interpolant <b>t</b>.
This is commonly used to find a point some fraction of the way along a line between two endpoints (e.g. to move an object gradually between those points).


<br/>

### `Method Normal:SVec2F()`

Returns a vector with a magnitude of 1.

When normalized, a vector keeps the same direction but its length is 1.0.


<br/>

### `Method Dot:Float(b:SVec2F)`

Returns the dot product of two vectors.

For normalized vectors [Dot](../../../brl/brl.vector/svec2f/#method-dotfloatbsvec2f) returns 1 if they point in exactly the same direction, -1 if they point in completely opposite directions,
and a number in between for other cases (e.g. Dot returns zero if vectors are perpendicular).


<br/>

### `Method Length:Float()`

Returns the length of the vector.

<br/>

### `Method LengthSquared:Float()`

Returns the squared length of the vector.

Calculating the squared length instead of the length is much faster.
Often if you are comparing lengths of two vectors you can just compare their squared lengths.


<br/>

### `Method DistanceTo:Float(b:SVec2F)`

Returns the distance between the vector And <b>b</b>.

<br/>

### `Method DistanceToSquared:Float(b:SVec2F)`

Returns the squared distance between the vector And <b>b</b>.

<br/>

### `Method Perpendicular:SVec2F()`

Returns a vector perpendicular to the vector.

<br/>

### `Method Reflect:SVec2F(n:SVec2F)`

Returns a vector reflected from the given plane, specified by its normal vector.

<br/>

### `Method Rotate:SVec2F(angle:Double)`

Returns a vector rotated by <b>angle</b> degrees.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the vector.

<br/>

