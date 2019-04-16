---
id: smat2
title: SMat2
sidebar_label: SMat2
---

A 2x2 Matrix


## Constructors

### `Method New(a:Double, b:Double, c:Double, d:Double)`

Creates a new [SMat2](../../../brl/brl.matrix/smat2) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat2(z:SMat2)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat2(z:SMat2)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat2(z:SMat2)`

Multiplies the matrix by <b>z</b>, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2(v:SVec2)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Adjoint:SMat2()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat2(z:SMat2)`

Multiplies the matrix by <b>z</b> by its components, return a new matrix.

<br/>

### `Method Determinant:Double()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat2()`

Returns the inverse of the matrix.

<br/>

### `Method Rotate:SMat2(angle:Double)`

Rotates the matrix by <b>angle</b> degrees, returning the rotated matrix.

<br/>

### `Method Scale:SMat2(s:SVec2)`

Returns the scale of this matrix.

<br/>

### `Method Transpose:SMat2()`

Returns the transpose of this matrix.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat2()`

Returns the identity matrix.

<br/>

### `Function Rotation:SMat2(angle:Double)`

Creates a rotated matrix of <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat2(s:SVec2)`

Creates a scaled matrix of the scale <b>s</b>.

<br/>

