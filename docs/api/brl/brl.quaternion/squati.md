---
id: squati
title: SQuatI
sidebar_label: SQuatI
---

A Quaternion.


Quaternions are used to represent rotations.
They are compact, don't suffer from gimbal lock and can easily be interpolated.


## Constructors

### `Method New(x:Int, y:Int, z:Int, w:Int)`

Creates a new [SQuatI](../../../brl/brl.quaternion/squati) from the supplied arguments.

<br/>

## Operators

### `Method Operator*:SQuatI(b:SQuatI)`

Multiplies the quaternion by <b>b</b>, returning a new quaternion.

<br/>

### `Method Operator-:SQuatI()`

Returns a new quaternion, negated.

<br/>

## Methods

### `Method Dot:Int(b:SQuatI)`

The dot product between two rotations.

<br/>

### `Method Invert:SQuatI()`

Returns the Inverse of rotation.

<br/>

### `Method Interpolate:SQuatI(b:SQuatI, t:Int)`

Interpolates between the SQuatI and <b>b</b> by <b>t</b> and normalizes the result afterwards.

<br/>

### `Method Normal:SQuatI()`

Converts this quaternion to one with the same orientation but with a magnitude of 1.

<br/>

### `Method SphericalInterpolate:SQuatI(b:SQuatI, t:Int)`

Spherically interpolates between this SQuatI and <b>b</b> by <b>t</b>.

<br/>

### `Method EulerXYZ:SQuatI(rot:SVec3I)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerXZY:SQuatI(rot:SVec3I)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerYXZ:SQuatI(rot:SVec3I)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerYZX:SQuatI(rot:SVec3I)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerZXY:SQuatI(rot:SVec3I)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerZYX:SQuatI(rot:SVec3I)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

## Functions

### `Function ToMat3:SMat3I(a:SQuatI)`

Applies the quaternion <b>a</b> to the matrix, returning a new matrix.

<br/>

### `Function ToMat4:SMat4I(a:SQuatI)`

Applies the quaternian to the matrix, return the new matrix.

<br/>

### `Function RotTrans:SMat4I(a:SQuatI, s:SVec3I)`

Creates a translation and rotation matrix.

The returned matrix is such that it places objects at position <b>s</b>, oriented in rotation <b>a</b>.


<br/>

### `Function RotTransOrigin:SMat4I(a:SQuatI, s:SVec3I, origin:SVec3I)`

Creates a translation, rotation and scaling matrix.

The returned matrix is such that it places objects at position <b>origin</b>, oriented in rotation <b>a</b> and scaled by <b>s</b>.


<br/>

### `Function Identity:SQuatI()`

The identity rotation.

<br/>

