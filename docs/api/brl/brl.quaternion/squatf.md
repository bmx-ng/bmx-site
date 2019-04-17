---
id: squatf
title: SQuatF
sidebar_label: SQuatF
---

A [Float](../../../brl/brl.blitz/#float) backed Quaternion.


Quaternions are used to represent rotations.
They are compact, don't suffer from gimbal lock and can easily be interpolated.


## Constructors

### `Method New(x:Float, y:Float, z:Float, w:Float)`

Creates a new [SQuatF](../../../brl/brl.quaternion/squatf) from the supplied arguments.

<br/>

## Operators

### `Method Operator*:SQuatF(b:SQuatF)`

Multiplies the quaternion by <b>b</b>, returning a new quaternion.

<br/>

### `Method Operator-:SQuatF()`

Returns a new quaternion, negated.

<br/>

## Methods

### `Method Dot:Float(b:SQuatF)`

The dot product between two rotations.

<br/>

### `Method Invert:SQuatF()`

Returns the Inverse of rotation.

<br/>

### `Method Interpolate:SQuatF(b:SQuatF, t:Float)`

Interpolates between the SQuatF and <b>b</b> by <b>t</b> and normalizes the result afterwards.

<br/>

### `Method Normal:SQuatF()`

Converts this quaternion to one with the same orientation but with a magnitude of 1.

<br/>

### `Method SphericalInterpolate:SQuatF(b:SQuatF, t:Float)`

Spherically interpolates between this SQuatF and <b>b</b> by <b>t</b>.

<br/>

### `Method EulerXYZ:SQuatF(rot:SVec3F)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerXZY:SQuatF(rot:SVec3F)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerYXZ:SQuatF(rot:SVec3F)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerYZX:SQuatF(rot:SVec3F)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerZXY:SQuatF(rot:SVec3F)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerZYX:SQuatF(rot:SVec3F)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

## Functions

### `Function ToMat3:SMat3F(a:SQuatF)`

Applies the quaternion <b>a</b> to the matrix, returning a new matrix.

<br/>

### `Function ToMat4:SMat4F(a:SQuatF)`

Applies the quaternian to the matrix, return the new matrix.

<br/>

### `Function RotTrans:SMat4F(a:SQuatF, s:SVec3F)`

Creates a translation and rotation matrix.

The returned matrix is such that it places objects at position <b>s</b>, oriented in rotation <b>a</b>.


<br/>

### `Function RotTransOrigin:SMat4F(a:SQuatF, s:SVec3F, origin:SVec3F)`

Creates a translation, rotation and scaling matrix.

The returned matrix is such that it places objects at position <b>origin</b>, oriented in rotation <b>a</b> and scaled by <b>s</b>.


<br/>

### `Function Identity:SQuatF()`

The identity rotation.

<br/>

