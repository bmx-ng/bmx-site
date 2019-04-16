---
id: smat4
title: SMat4
sidebar_label: SMat4
---

A standard 4x4 transformation matrix.


## Constructors

### `Method New(a:Double, b:Double, c:Double, d:Double, e:Double, f:Double, g:Double, h:Double, i:Double, j:Double, k:Double, l:Double, m:Double, n:Double, o:Double, p:Double)`

Creates a new [SMat4](../../../brl/brl.matrix/smat4) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat4(z:SMat4 Var)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat4(z:SMat4 Var)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat4(z:SMat4 Var)`

Multiplies the matrix by <b>z</b>, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2(v:SVec2)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Apply:SVec3(v:SVec3)`

Applies the 4x4 matrix <b>b</b> to the vector, returning a new vector.

<br/>

### `Method Adjoint:SMat4()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat4(z:SMat4 Var)`

Multiplies the matrix by <b>z</b> by its components, returning a new matrix.

<br/>

### `Method Determinant:Double()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat4()`

The inverse of this matrix.

An inverted matrix is such that if multiplied by the original would result in identity matrix.
If some matrix transforms vectors in a particular way, then the inverse matrix can transform them back.


<br/>

### `Method Rotate:SMat4(axis:SVec3, angle:Double)`

Creates a rotation matrix, rotated <b>angle</b> degrees around the point <b>axis</b>.

<br/>

### `Method Scale:SMat4(s:SVec3)`

Scales the matrix, return the new scaled matrix.

<br/>

### `Method Transpose:SMat4()`

Returns the transpose of this matrix.

The transposed matrix is the one that has the columns exchanged with its rows.


<br/>

### `Method Translate:SMat4(s:SVec3)`

Translates the matrix to <b>s</b>.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat4()`

Returns the identity matrix.

<br/>

### `Function Frustum:SMat4(l:Double, r:Double, b:Double, t:Double, n:Double, f:Double)`

Returns a projection matrix with a viewing frustum defined by the plane coordinates passed in.

<br/>

### `Function LookAt:SMat4(eye:SVec3, pos:SVec3, up:SVec3)`

Computes a transformation matrix that corresponds to a camera viewing the <b>eye</b> from the <b>pos</b>.

The right-hand vector is perpendicular to the up vector.


<br/>

### `Function Orthogonal:SMat4(width:Double, height:Double, zNear:Double, zFar:Double)`

Creates an orthogonal projection matrix.

The returned matrix, when used as a Camera's projection matrix, creates a view showing the area between <b>width</b> and <b>height</b>, with <b>zNear</b> and <b>zFar</b> as the near and far depth clipping planes.


<br/>

### `Function Perspective:SMat4(fov:Double, w:Double, h:Double, n:Double, f:Double)`

Creates a perspective projection matrix.

<br/>

### `Function Rotation:SMat4(axis:SVec3, angle:Double)`

Returns a rotation matrix on the given <b>axis</b> and <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat4(s:SVec3)`

Creates a scaling matrix.

<br/>

### `Function Translation:SMat4(s:SVec3)`

Creates a translation matrix.

<br/>

