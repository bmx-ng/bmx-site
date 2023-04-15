---
id: smat3d
title: SMat3D
sidebar_label: SMat3D
---

A 3x3 matrix.


## Constructors

### `Method New(a:Double, b:Double, c:Double, d:Double, e:Double, f:Double, g:Double, h:Double, i:Double)`

Creates a new [SMat3D](../../../brl/brl.matrix/smat3d) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat3D(z:SMat3D Var)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat3D(z:SMat3D Var)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat3D(z:SMat3D Var)`

Multiplies the matrix by <b>z</b>, the dot product, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2D(v:SVec2D)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Apply:SVec3D(v:SVec3D)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Apply:SVec4D(v:SVec4D)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Adjoint:SMat3D()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat3D(z:SMat3D Var)`

Multiplies the matrix by <b>z</b> by its components, or element-wise matrix multiplication, return a new matrix.

<br/>

### `Method Determinant:Double()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat3D()`

Returns the inverse of the matrix.

<br/>

### `Method Rotate:SMat3D(angle:Double)`

Rotates the matrix on a 2D rotation in the XY plane by <b>angle</b> degrees, returning a new matrix.

<br/>

### `Method RotateZ:SMat3D(angle:Double)`

Rotates the matrix around the Z axis by <b>angle</b> degrees, returning a new matrix.

<br/>

### `Method Scale:SMat3D(s:SVec2D)`

Scales the matrix by <b>s</b>, returning a new matrix.

<br/>

### `Method Transpose:SMat3D()`

Returns a transposition of the matrix.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat3D()`

Return the 3x3 identity matrix.

<br/>

### `Function Rotation:SMat3D(angle:Double)`

Returns a rotation matrix of <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat3D(s:SVec2D)`

Returns a scaling matrix of <b>s</b>.

<br/>

