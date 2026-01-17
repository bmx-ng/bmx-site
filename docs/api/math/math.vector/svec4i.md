---
id: svec4i
title: SVec4I
sidebar_label: SVec4I
---

A 4-element structure.


## Constructors

### `Method New(x:Int, y:Int, z:Int, w:Int)`

Creates a new [SVec4I](../../../math/math.vector/svec4i) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SVec4I(b:SVec4I)`

Adds <b>b</b> to this vector, returning a new vector.

<br/>

### `Method Operator-:SVec4I(b:SVec4I)`

Subtracts <b>b</b> from this vector, returning a new vector.

<br/>

### `Method Operator*:SVec4I(b:SVec4I)`

Multiplies the vector by <b>b</b>, returning a new vector.

<br/>

### `Method Operator/:SVec4I(b:SVec4I)`

Devides the vector by <b>b</b>, returning a new vector.

<br/>

### `Method Operator-:SVec4I()`

Returns a negated version of this vector.

<br/>

### `Method Operator*:SVec4I(s:Int)`

Multiplies the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator/:SVec4I(s:Int)`

Divides the vector by <b>s</b>, returning a new vector.

<br/>

### `Method Operator[]:Int(index:Int)`

Retrieves the x, y, z or w component using [0], [1], [2] or [3] respectively.

<br/>

### `Method Operator<>:Int(b:SVec4I)`

Returns [True](../../../brl/brl.blitz/#true) if <b>b</b> is different.

<br/>

### `Method Operator=:Int(b:SVec4I)`

Returns [True](../../../brl/brl.blitz/#true) if the vector and <b>b</b> are aproximately equal.

<br/>

## Methods

### `Method Clamp:SVec4I(minv:SVec4I, maxv:SVec4I)`

Returns a vector clamped between the vectors <b>minv</b> and <b>maxv</b>.

<br/>

### `Method Cross:SVec4I(b:SVec4I)`

Returns the Cross Product of the two vectors.

A cross product of zero indicates that the two vectors are parallel.


<br/>

### `Method Min:SVec4I(b:SVec4I)`

Returns a vector that is made from the smallest components of the two vectors.

<br/>

### `Method Max:SVec4I(b:SVec4I)`

Returns a vector that is made from the largest components of the two vectors.

<br/>

### `Method Interpolate:SVec4I(b:SVec4I, t:Int)`

Linearly interpolates between two vectors.

Interpolates between this vector and <b>b</b> by the interpolant <b>t</b>.
This is commonly used to find a point some fraction of the way along a line between two endpoints (e.g. to move an object gradually between those points).


<br/>

### `Method Normal:SVec4I()`

Returns a vector with a magnitude of 1.

When normalized, a vector keeps the same direction but its length is 1.0.


<br/>

### `Method Dot:Int(b:SVec4I)`

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

### `Method DistanceTo:Int(b:SVec4I)`

Returns the distance between the vector and <b>b</b>.

<br/>

### `Method DistanceToSquared:Int(b:SVec4I)`

Returns the squared distance between the vector and <b>b</b>.

<br/>

### `Method Reflect:SVec4I(n:SVec4I)`

Returns a vector reflected from the given plane, specified by its normal vector.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the vector.

<br/>

