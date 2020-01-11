---
id: svec3i
title: SVec3I
sidebar_label: SVec3I
---

An [Int](../../../brl/brl.blitz/#int) backed 3-element structure that can be used to represent positions and directions in 3D-space.


## Constructors

### `Method New(x:Int, y:Int, z:Int)`

Creates a new [SVec3I](../../../brl/brl.vector/svec3i) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SVec3I(b:SVec3I)`

Adds <b>b</b> to this vector, returning a new vector.

<br/>

### `Method Operator-:SVec3I(b:SVec3I)`

Subtracts <b>b</b> from this vector, returning a new vector.

<br/>

### `Method Operator*:SVec3I(b:SVec3I)`

Multiplies the vector by <b>b</b>, returning a new vector.

<br/>

### `Method Operator/:SVec3I(b:SVec3I)`

Devides the vector by <b>b</b>, returning a new vector.

<br/>

### `Method Operator-:SVec3I()`

Returns a negated version of this vector.

<br/>

### `Method Operator*:SVec3I(s:Int)`

Multiplies the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator/:SVec3I(s:Int)`

Divides the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator/:SVec3I(s:Float)`

Divides the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator[]:Int(index:Int)`

Retrieves the x, y or z component using [0], [1] or [2] respectively.

<br/>

## Methods

### `Method Clamp:SVec3I(minv:SVec3I, maxv:SVec3I)`

Returns a vector clamped between the vectors <b>minv</b> and <b>maxv</b>.

<br/>

### `Method Cross:SVec3I(b:SVec3I)`

Returns the Cross Product of the two vectors.

<br/>

### `Method Min:SVec3I(b:SVec3I)`

Returns a vector that is made from the smallest components of the two vectors.

<br/>

### `Method Max:SVec3I(b:SVec3I)`

Returns a vector that is made from the largest components of the two vectors.

<br/>

### `Method Interpolate:SVec3I(b:SVec3I, t:Int)`

Linearly interpolates between two vectors.

Interpolates between this vector and <b>b</b> by the interpolant <b>t</b>.
This is commonly used to find a point some fraction of the way along a line between two endpoints (e.g. to move an object gradually between those points).


<br/>

### `Method Normal:SVec3I()`

Returns a vector with a magnitude of 1.

When normalized, a vector keeps the same direction but its length is 1.0.


<br/>

### `Method Dot:Int(b:SVec3I)`

Returns the dot product of two vectors.

For normalized vectors Dot returns 1 if they point in exactly the same direction, -1 if they point in completely opposite directions,
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

### `Method DistanceTo:Int(b:SVec3I)`

Returns the distance between the vector and <b>b</b>.

<br/>

### `Method DistanceToSquared:Int(b:SVec3I)`

Returns the squared distance between the vector and <b>b</b>.

<br/>

### `Method Reflect:SVec3I(n:SVec3I)`

Returns a vector reflected from the given plane, specified by its normal vector.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the vector.

<br/>

