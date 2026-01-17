---
id: svec3f
title: SVec3F
sidebar_label: SVec3F
---

A [Float](../../../brl/brl.blitz/#float) backed 3-element structure that can be used to represent positions and directions in 3D-space.


## Constructors

### `Method New(x:Float, y:Float, z:Float)`

Creates a New [SVec3F](../../../math/math.vector/svec3f) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SVec3F(b:SVec3F)`

Adds <b>b</b> to this vector, returning a new vector.

<br/>

### `Method Operator-:SVec3F(b:SVec3F)`

Subtracts <b>b</b> from this vector, returning a new vector.

<br/>

### `Method Operator*:SVec3F(b:SVec3F)`

Multiplies the vector by <b>b</b>, returning a new vector.

<br/>

### `Method Operator/:SVec3F(b:SVec3F)`

Devides the vector by <b>b</b>, returning a new vector.

<br/>

### `Method Operator-:SVec3F()`

Returns a negated version of this vector.

<br/>

### `Method Operator*:SVec3F(s:Float)`

Multiplies the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator/:SVec3F(s:Float)`

Divides the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator[]:Float(index:Int)`

Retrieves the x, y or z component using [0], [1] or [2] respectively.

<br/>

### `Method Operator<>:Int(b:SVec3F)`

Returns [True](../../../brl/brl.blitz/#true) if <b>b</b> is different.

<br/>

### `Method Operator=:Int(b:SVec3F)`

Returns [True](../../../brl/brl.blitz/#true) if the vector and <b>b</b> are aproximately equal.

<br/>

## Methods

### `Method Clamp:SVec3F(minv:SVec3F, maxv:SVec3F)`

Returns a vector clamped between the vectors <b>minv</b> and <b>maxv</b>.

<br/>

### `Method Cross:SVec3F(b:SVec3F)`

Returns the Cross Product of the two vectors.

A cross product of zero indicates that the two vectors are parallel.


<br/>

### `Method Min:SVec3F(b:SVec3F)`

Returns a vector that is made from the smallest components of the two vectors.

<br/>

### `Method Max:SVec3F(b:SVec3F)`

Returns a vector that is made from the largest components of the two vectors.

<br/>

### `Method Interpolate:SVec3F(b:SVec3F, t:Float)`

Linearly interpolates between two vectors.

Interpolates between this vector and <b>b</b> by the interpolant <b>t</b>.
This is commonly used to find a point some fraction of the way along a line between two endpoints (e.g. to move an object gradually between those points).


<br/>

### `Method Normal:SVec3F()`

Returns a vector with a magnitude of 1.

When normalized, a vector keeps the same direction but its length is 1.0.


<br/>

### `Method Dot:Float(b:SVec3F)`

Returns the dot product of two vectors.

For normalized vectors Dot returns 1 if they point in exactly the same direction, -1 if they point in completely opposite directions,
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

### `Method DistanceTo:Float(b:SVec3F)`

Returns the distance between the vector and <b>b</b>.

<br/>

### `Method DistanceToSquared:Float(b:SVec3F)`

Returns the squared distance between the vector and <b>b</b>.

<br/>

### `Method Reflect:SVec3F(n:SVec3F)`

Returns a vector reflected from the given plane, specified by its normal vector.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the vector.

<br/>

