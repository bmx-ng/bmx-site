---
id: smat4d
title: SMat4D
sidebar_label: SMat4D
---

A standard 4x4 transformation matrix.


## Constructors

### `Method New(a:Double, b:Double, c:Double, d:Double, e:Double, f:Double, g:Double, h:Double, i:Double, j:Double, k:Double, l:Double, m:Double, n:Double, o:Double, p:Double)`

Creates a new [SMat4D](../../../brl/brl.matrix/smat4d) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat4D(z:SMat4D Var)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat4D(z:SMat4D Var)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat4D(z:SMat4D Var)`

Multiplies the matrix by <b>z</b>, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2D(v:SVec2D)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Apply:SVec3D(v:SVec3D)`

Applies the 4x4 matrix <b>b</b> to the vector, returning a new vector.

<br/>

### `Method Adjoint:SMat4D()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat4D(z:SMat4D Var)`

Multiplies the matrix by <b>z</b> by its components, returning a new matrix.

<br/>

### `Method Determinant:Double()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat4D()`

The inverse of this matrix.

An inverted matrix is such that if multiplied by the original would result in identity matrix.
If some matrix transforms vectors in a particular way, then the inverse matrix can transform them back.


<br/>

### `Method Rotate:SMat4D(axis:SVec3D, angle:Double)`

Creates a rotation matrix, rotated <b>angle</b> degrees around the point <b>axis</b>.

<br/>

### `Method Scale:SMat4D(s:SVec3D)`

Scales the matrix, return the new scaled matrix.

<br/>

### `Method Transpose:SMat4D()`

Returns the transpose of this matrix.

The transposed matrix is the one that has the columns exchanged with its rows.


<br/>

### `Method Translate:SMat4D(s:SVec3D)`

Translates the matrix to <b>s</b>.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat4D()`

Returns the identity matrix.

<br/>

### `Function Frustum:SMat4D(l:Double, r:Double, b:Double, t:Double, n:Double, f:Double)`

Returns a projection matrix with a viewing frustum defined by the plane coordinates passed in.

<br/>

### `Function LookAt:SMat4D(eye:SVec3D, pos:SVec3D, upDir:SVec3D)`

Computes a transformation matrix that corresponds to a camera viewing the <b>eye</b> from the <b>pos</b>.

The right-hand vector is perpendicular to the up vector.


<br/>

### `Function Orthogonal:SMat4D(width:Double, height:Double, zNear:Double, zFar:Double)`

Creates an orthogonal projection matrix.

The returned matrix, when used as a Camera's projection matrix, creates a view showing the area between <b>width</b> and <b>height</b>, with <b>zNear</b> and <b>zFar</b> as the near and far depth clipping planes.


<br/>

### `Function Perspective:SMat4D(fov:Double, w:Double, h:Double, n:Double, f:Double)`

Creates a perspective projection matrix.

<br/>

### `Function Rotation:SMat4D(axis:SVec3D, angle:Double)`

Returns a rotation matrix on the given <b>axis</b> and <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat4D(s:SVec3D)`

Creates a scaling matrix.

<br/>

### `Function Translation:SMat4D(s:SVec3D)`

Creates a translation matrix.

<br/>

