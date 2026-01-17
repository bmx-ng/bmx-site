---
id: smat2f
title: SMat2F
sidebar_label: SMat2F
---

A [Float](../../../brl/brl.blitz/#float) backed 2x2 Matrix.


## Constructors

### `Method New(a:Float, b:Float, c:Float, d:Float)`

Creates a new [SMat2F](../../../math/math.matrix/smat2f) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat2F(z:SMat2F)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat2F(z:SMat2F)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat2F(z:SMat2F)`

Multiplies the matrix by <b>z</b>, the dot product, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2F(v:SVec2F)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Adjoint:SMat2F()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat2F(z:SMat2F)`

Multiplies the matrix by <b>z</b> by its components, return a new matrix.

<br/>

### `Method Determinant:Float()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat2F()`

Returns the inverse of the matrix.

<br/>

### `Method Rotate:SMat2F(angle:Double)`

Rotates the matrix by <b>angle</b> degrees, returning the rotated matrix.

<br/>

### `Method Scale:SMat2F(s:SVec2F)`

Returns the scale of this matrix.

<br/>

### `Method Scale:SMat2F(s:SVec2D)`

Returns the scale of this matrix.

<br/>

### `Method Transpose:SMat2F()`

Returns the transpose of this matrix.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat2F()`

Returns the identity matrix.

<br/>

### `Function Rotation:SMat2F(angle:Double)`

Creates a rotated matrix of <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat2F(s:SVec2F)`

Creates a scaled matrix of the scale <b>s</b>.

<br/>

### `Function Scaling:SMat2F(s:SVec2D)`

Creates a scaled matrix of the scale <b>s</b>.

<br/>

