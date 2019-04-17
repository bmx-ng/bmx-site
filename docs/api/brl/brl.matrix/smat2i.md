---
id: smat2i
title: SMat2I
sidebar_label: SMat2I
---

An [Int](../../../brl/brl.blitz/#int) backed 2x2 Matrix.


## Constructors

### `Method New(a:Int, b:Int, c:Int, d:Int)`

Creates a new [SMat2I](../../../brl/brl.matrix/smat2i) from the supplied arguments.

<br/>

## Operators

### `Method Operator+:SMat2I(z:SMat2I)`

Adds <b>z</b> to the matrix, returning a new matrix.

<br/>

### `Method Operator-:SMat2I(z:SMat2I)`

Subtracts <b>z</b> from the matrix, returning a new matrix.

<br/>

### `Method Operator*:SMat2I(z:SMat2I)`

Multiplies the matrix by <b>z</b>, returning a new matrix.

<br/>

## Methods

### `Method Apply:SVec2I(v:SVec2I)`

Applies the matrix to the vector <b>v</b>, returning a new vector.

<br/>

### `Method Adjoint:SMat2I()`

Returns the transposition of the cofactor matrix.

<br/>

### `Method CompMul:SMat2I(z:SMat2I)`

Multiplies the matrix by <b>z</b> by its components, return a new matrix.

<br/>

### `Method Determinant:Int()`

Returns the determinant of the matrix.

<br/>

### `Method Invert:SMat2I()`

Returns the inverse of the matrix.

<br/>

### `Method Rotate:SMat2I(angle:Double)`

Rotates the matrix by <b>angle</b> degrees, returning the rotated matrix.

<br/>

### `Method Scale:SMat2I(s:SVec2I)`

Returns the scale of this matrix.

<br/>

### `Method Scale:SMat2I(s:SVec2)`

Returns the scale of this matrix.

<br/>

### `Method Scale:SMat2I(s:SVec2F)`

Returns the scale of this matrix.

<br/>

### `Method Transpose:SMat2I()`

Returns the transpose of this matrix.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the matrix.

<br/>

## Functions

### `Function Identity:SMat2I()`

Returns the identity matrix.

<br/>

### `Function Rotation:SMat2I(angle:Double)`

Creates a rotated matrix of <b>angle</b> degrees.

<br/>

### `Function Scaling:SMat2I(s:SVec2I)`

Creates a scaled matrix of the scale <b>s</b>.

<br/>

