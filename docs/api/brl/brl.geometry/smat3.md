---
id: smat3
title: SMat3
sidebar_label: SMat3
---

A 3x3 matrix.


## Constructors

### `Method New(a:Float, b:Float, c:Float, d:Float, e:Float, f:Float, g:Float, h:Float, i:Float)`

Creates a new [SMat3](../../../brl/brl.geometry/smat3) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat3(z:SMat3 Var)`

Adds <b>z</b> to the matrix, returning the new matrix.

<br/>

### `Method Operator-:SMat3(z:SMat3 Var)`

Subtracts <b>z</b> from the matrix, returning the new matrix.

<br/>

### `Method Operator*:SMat3(z:SMat3 Var)`

Multiplies the matrix by <b>z</b>, returning a new matrix.

<br/>

## Methods

### `Method Adjoint:SMat3()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat3(z:SMat3 Var)`

Multiplies the matrix by <b>z</b> by its components, return a new matrix.

<br/>

### `Method Det:Float()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat3()`

Returns the inverse of the matrix.

<br/>

### `Method Rotate:SMat3(angle:Float)`

Rotates the matrix by <b>angle</b> degrees, returning a new matrix.

<br/>

### `Method Scale:SMat3(s:SVec2)`

Scales the matrix by <b>s</b>, returning a new matrix.

<br/>

### `Method Transpose:SMat3()`

Returns a transposition of the matrix.

<br/>

### `Method Quat:SMat3(a:SQuat)`

Applies the quaternion <b>a</b> to the matrix, returning a new matrix.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat3()`

Return the 3x3 identity matrix.

<br/>

### `Function Rotation:SMat3(angle:Float)`

Retrns a rotation matrix of <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat3(s:SVec2)`

Returns a scaling matrix of <b>s</b>.

<br/>

