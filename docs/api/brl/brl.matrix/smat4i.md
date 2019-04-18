---
id: smat4i
title: SMat4I
sidebar_label: SMat4I
---

A standard [Int](../../../brl/brl.blitz/#int) backed 4x4 transformation matrix.


## Constructors

### `Method New(a:Int, b:Int, c:Int, d:Int, e:Int, f:Int, g:Int, h:Int, i:Int, j:Int, k:Int, l:Int, m:Int, n:Int, o:Int, p:Int)`

Creates a new [SMat4I](../../../brl/brl.matrix/smat4i) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat4I(z:SMat4I Var)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat4I(z:SMat4I Var)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat4I(z:SMat4I Var)`

Multiplies the matrix by <b>z</b>, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2I(v:SVec2I)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Apply:SVec3I(v:SVec3I)`

Applies the 4x4 matrix <b>b</b> to the vector, returning a new vector.

<br/>

### `Method Adjoint:SMat4I()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat4I(z:SMat4I Var)`

Multiplies the matrix by <b>z</b> by its components, returning a new matrix.

<br/>

### `Method Determinant:Int()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat4I()`

The inverse of this matrix.

An inverted matrix is such that if multiplied by the original would result in identity matrix.
If some matrix transforms vectors in a particular way, then the inverse matrix can transform them back.


<br/>

### `Method Rotate:SMat4I(axis:SVec3I, angle:Double)`

Creates a rotation matrix, rotated <b>angle</b> degrees around the point <b>axis</b>.

<br/>

### `Method Scale:SMat4I(s:SVec3I)`

Scales the matrix, return the new scaled matrix.

<br/>

### `Method Scale:SMat4I(s:SVec3D)`

Scales the matrix, return the new scaled matrix.

<br/>

### `Method Scale:SMat4I(s:SVec3F)`

Scales the matrix, return the new scaled matrix.

<br/>

### `Method Transpose:SMat4I()`

Returns the transpose of this matrix.

The transposed matrix is the one that has the columns exchanged with its rows.


<br/>

### `Method Translate:SMat4I(s:SVec3I)`

Translates the matrix to <b>s</b>.

<br/>

### `Method Translate:SMat4I(s:SVec3D)`

Translates the matrix to <b>s</b>.

<br/>

### `Method Translate:SMat4I(s:SVec3F)`

Translates the matrix To <b>s</b>.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat4I()`

Returns the identity matrix.

<br/>

### `Function Frustum:SMat4I(l:Double, r:Double, b:Double, t:Double, n:Double, f:Double)`

Returns a projection matrix with a viewing frustum defined by the plane coordinates passed in.

<br/>

### `Function LookAt:SMat4I(eye:SVec3I, pos:SVec3I, up:SVec3I)`

Computes a transformation matrix that corresponds to a camera viewing the <b>eye</b> from the <b>pos</b>.

The right-hand vector is perpendicular to the up vector.


<br/>

### `Function Orthogonal:SMat4I(width:Double, height:Double, zNear:Double, zFar:Double)`

Creates an orthogonal projection matrix.

The returned matrix, when used as a Camera's projection matrix, creates a view showing the area between <b>width</b> and <b>height</b>, with <b>zNear</b> and <b>zFar</b> as the near and far depth clipping planes.


<br/>

### `Function Perspective:SMat4I(fov:Double, w:Double, h:Double, n:Double, f:Double)`

Creates a Perspective projection matrix.

<br/>

### `Function Rotation:SMat4I(axis:SVec3I, angle:Double)`

Returns a rotation matrix on the given <b>axis</b> and <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat4I(s:SVec3I)`

Creates a scaling matrix.

<br/>

### `Function Scaling:SMat4I(s:SVec3D)`

Creates a scaling matrix.

<br/>

### `Function Scaling:SMat4I(s:SVec3F)`

Creates a scaling matrix.

<br/>

### `Function Translation:SMat4I(s:SVec3I)`

Creates a translation matrix.

<br/>

### `Function Translation:SMat4I(s:SVec3D)`

Creates a translation matrix.

<br/>

### `Function Translation:SMat4I(s:SVec3F)`

Creates a translation matrix.

<br/>

