---
id: smat2d
title: SMat2D
sidebar_label: SMat2D
---

A 2x2 Matrix


## Constructors

### `Method New(a:Double, b:Double, c:Double, d:Double)`

Creates a new [SMat2D](../../../brl/brl.matrix/smat2d) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat2D(z:SMat2D)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat2D(z:SMat2D)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat2D(z:SMat2D)`

Multiplies the matrix by <b>z</b>, the dot product, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2D(v:SVec2D)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Adjoint:SMat2D()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat2D(z:SMat2D)`

Multiplies the matrix by <b>z</b> by its components, or element-wise matrix multiplication, return a new matrix.

<br/>

### `Method Determinant:Double()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat2D()`

Returns the inverse of the matrix.

<br/>

### `Method Rotate:SMat2D(angle:Double)`

Rotates the matrix by <b>angle</b> degrees, returning the rotated matrix.

<br/>

### `Method Scale:SMat2D(s:SVec2D)`

Returns the scale of this matrix.

<br/>

### `Method Transpose:SMat2D()`

Returns the transpose of this matrix.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat2D()`

Returns the identity matrix.

<br/>

### `Function Rotation:SMat2D(angle:Double)`

Creates a rotated matrix of <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat2D(s:SVec2D)`

Creates a scaled matrix of the scale <b>s</b>.

<br/>

