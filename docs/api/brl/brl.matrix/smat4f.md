---
id: smat4f
title: SMat4F
sidebar_label: SMat4F
---

A standard [Float](../../../brl/brl.blitz/#float) backed 4x4 transformation matrix.


## Constructors

### `Method New(a:Float, b:Float, c:Float, d:Float, e:Float, f:Float, g:Float, h:Float, i:Float, j:Float, k:Float, l:Float, m:Float, n:Float, o:Float, p:Float)`

Creates a new [SMat4F](../../../brl/brl.matrix/smat4f) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat4F(z:SMat4F Var)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat4F(z:SMat4F Var)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat4F(z:SMat4F Var)`

Multiplies the matrix by <b>z</b>, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2F(v:SVec2F)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Apply:SVec3F(v:SVec3F)`

Applies the 4x4 matrix <b>b</b> to the vector, returning a new vector.

<br/>

### `Method Adjoint:SMat4F()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat4F(z:SMat4F Var)`

Multiplies the matrix by <b>z</b> by its components, returning a new matrix.

<br/>

### `Method Determinant:Float()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat4F()`

The inverse of this matrix.

An inverted matrix is such that if multiplied by the original would result in identity matrix.
If some matrix transforms vectors in a particular way, then the inverse matrix can transform them back.


<br/>

### `Method Rotate:SMat4F(axis:SVec3F, angle:Double)`

Creates a rotation matrix, rotated <b>angle</b> degrees around the point <b>axis</b>.

<br/>

### `Method Scale:SMat4F(s:SVec3F)`

Scales the matrix, return the new scaled matrix.

<br/>

### `Method Scale:SMat4F(s:SVec3D)`

Scales the matrix, return the new scaled matrix.

<br/>

### `Method Transpose:SMat4F()`

Returns the transpose of this matrix.

The transposed matrix is the one that has the columns exchanged with its rows.


<br/>

### `Method Translate:SMat4F(s:SVec3F)`

Translates the matrix to <b>s</b>.

<br/>

### `Method Translate:SMat4F(s:SVec3D)`

Translates the matrix To <b>s</b>.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat4F()`

Returns the identity matrix.

<br/>

### `Function Frustum:SMat4F(l:Float, r:Float, b:Float, t:Float, n:Float, f:Float)`

Returns a projection matrix with a viewing frustum defined by the plane coordinates passed in.

<br/>

### `Function LookAt:SMat4F(eye:SVec3F, pos:SVec3F, up:SVec3F)`

Computes a transformation matrix that corresponds to a camera viewing the <b>eye</b> from the <b>pos</b>.

The right-hand vector is perpendicular to the up vector.


<br/>

### `Function Orthogonal:SMat4F(width:Float, height:Float, zNear:Float, zFar:Float)`

Creates an orthogonal projection matrix.

The returned matrix, when used as a Camera's projection matrix, creates a view showing the area between <b>width</b> and <b>height</b>, with <b>zNear</b> and <b>zFar</b> as the near and far depth clipping planes.


<br/>

### `Function Perspective:SMat4F(fov:Float, w:Float, h:Float, n:Float, f:Float)`

Creates a perspective projection matrix.

<br/>

### `Function Rotation:SMat4F(axis:SVec3F, angle:Double)`

Returns a rotation matrix on the given <b>axis</b> and <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat4F(s:SVec3F)`

Creates a scaling matrix.

<br/>

### `Function Scaling:SMat4F(s:SVec3D)`

Creates a Scaling matrix.

<br/>

### `Function Translation:SMat4F(s:SVec3F)`

Creates a translation matrix.

<br/>

### `Function Translation:SMat4F(s:SVec3D)`

Creates a translation matrix.

<br/>

