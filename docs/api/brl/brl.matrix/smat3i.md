---
id: smat3i
title: SMat3I
sidebar_label: SMat3I
---

An [Int](../../../brl/brl.blitz/#int) backed 3x3 matrix.


## Constructors

### `Method New(a:Int, b:Int, c:Int, d:Int, e:Int, f:Int, g:Int, h:Int, i:Int)`

Creates a new [SMat3I](../../../brl/brl.matrix/smat3i) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat3I(z:SMat3I Var)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat3I(z:SMat3I Var)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat3I(z:SMat3I Var)`

Multiplies the matrix by <b>z</b>, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2I(v:SVec2I)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Apply:SVec3I(v:SVec3I)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Adjoint:SMat3I()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat3I(z:SMat3I Var)`

Multiplies the matrix by <b>z</b> by its components, return a new matrix.

<br/>

### `Method Determinant:Int()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat3I()`

Returns the inverse of the matrix.

<br/>

### `Method Rotate:SMat3I(angle:Double)`

Rotates the matrix by <b>angle</b> degrees, returning a new matrix.

<br/>

### `Method Scale:SMat3I(s:SVec2I)`

Scales the matrix by <b>s</b>, returning a new matrix.

<br/>

### `Method Scale:SMat3I(s:SVec2)`

Scales the matrix by <b>s</b>, returning a new matrix.

<br/>

### `Method Scale:SMat3I(s:SVec2F)`

Scales the matrix by <b>s</b>, returning a new matrix.

<br/>

### `Method Transpose:SMat3I()`

Returns a transposition of the matrix.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat3I()`

Return the 3x3 identity matrix.

<br/>

### `Function Rotation:SMat3I(angle:Double)`

Retrns a rotation matrix of <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat3I(s:SVec2I)`

Returns a scaling matrix of <b>s</b>.

<br/>

### `Function Scaling:SMat3I(s:SVec2)`

Returns a scaling matrix of <b>s</b>.

<br/>

### `Function Scaling:SMat3I(s:SVec2F)`

Returns a scaling matrix of <b>s</b>.

<br/>

