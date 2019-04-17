---
id: smat3f
title: SMat3F
sidebar_label: SMat3F
---

A [Float](../../../brl/brl.blitz/#float) backed 3x3 matrix.


## Constructors

### `Method New(a:Float, b:Float, c:Float, d:Float, e:Float, f:Float, g:Float, h:Float, i:Float)`

Creates a new [SMat3F](../../../brl/brl.matrix/smat3f) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat3F(z:SMat3F Var)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat3F(z:SMat3F Var)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat3F(z:SMat3F Var)`

Multiplies the matrix by <b>z</b>, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2F(v:SVec2F)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Apply:SVec3F(v:SVec3F)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Adjoint:SMat3F()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat3F(z:SMat3F Var)`

Multiplies the matrix by <b>z</b> by its components, return a new matrix.

<br/>

### `Method Determinant:Float()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat3F()`

Returns the inverse of the matrix.

<br/>

### `Method Rotate:SMat3F(angle:Double)`

Rotates the matrix by <b>angle</b> degrees, returning a new matrix.

<br/>

### `Method Scale:SMat3F(s:SVec2F)`

Scales the matrix by <b>s</b>, returning a new matrix.

<br/>

### `Method Scale:SMat3F(s:SVec2)`

Scales the matrix by <b>s</b>, returning a new matrix.

<br/>

### `Method Transpose:SMat3F()`

Returns a transposition of the matrix.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat3F()`

Return the 3x3 identity matrix.

<br/>

### `Function Rotation:SMat3F(angle:Double)`

Retrns a rotation matrix of <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat3F(s:SVec2F)`

Returns a scaling matrix of <b>s</b>.

<br/>

### `Function Scaling:SMat3F(s:SVec2)`

Returns a scaling matrix of <b>s</b>.

<br/>

