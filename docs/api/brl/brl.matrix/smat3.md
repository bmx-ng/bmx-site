---
id: smat3
title: SMat3
sidebar_label: SMat3
---

A 3x3 matrix.


## Constructors

### `Method New(a:Double, b:Double, c:Double, d:Double, e:Double, f:Double, g:Double, h:Double, i:Double)`

Creates a new [SMat3](../../../brl/brl.matrix/smat3) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat3(z:SMat3 Var)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat3(z:SMat3 Var)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat3(z:SMat3 Var)`

Multiplies the matrix by <b>z</b>, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2(v:SVec2)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Apply:SVec3(v:SVec3)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Adjoint:SMat3()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat3(z:SMat3 Var)`

Multiplies the matrix by <b>z</b> by its components, return a new matrix.

<br/>

### `Method Determinant:Double()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat3()`

Returns the inverse of the matrix.

<br/>

### `Method Rotate:SMat3(angle:Double)`

Rotates the matrix by <b>angle</b> degrees, returning a new matrix.

<br/>

### `Method Scale:SMat3(s:SVec2)`

Scales the matrix by <b>s</b>, returning a new matrix.

<br/>

### `Method Transpose:SMat3()`

Returns a transposition of the matrix.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat3()`

Return the 3x3 identity matrix.

<br/>

### `Function Rotation:SMat3(angle:Double)`

Retrns a rotation matrix of <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat3(s:SVec2)`

Returns a scaling matrix of <b>s</b>.

<br/>

