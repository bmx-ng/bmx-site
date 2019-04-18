---
id: squatd
title: SQuatD
sidebar_label: SQuatD
---

A Quaternion.


Quaternions are used to represent rotations.
They are compact, don't suffer from gimbal lock and can easily be interpolated.


## Constructors

### `Method New(x:Double, y:Double, z:Double, w:Double)`

Creates a new [SQuatD](../../../brl/brl.quaternion/squatd) from the supplied arguments.

<br/>

## Operators

### `Method Operator*:SQuatD(b:SQuatD)`

Multiplies the quaternion by <b>b</b>, returning a new quaternion.

<br/>

### `Method Operator-:SQuatD()`

Returns a new quaternion, negated.

<br/>

## Methods

### `Method Dot:Double(b:SQuatD)`

The dot product between two rotations.

<br/>

### `Method Invert:SQuatD()`

Returns the Inverse of rotation.

<br/>

### `Method Interpolate:SQuatD(b:SQuatD, t:Double)`

Interpolates between the SQuatD and <b>b</b> by <b>t</b> and normalizes the result afterwards.

<br/>

### `Method Normal:SQuatD()`

Converts this quaternion to one with the same orientation but with a magnitude of 1.

<br/>

### `Method SphericalInterpolate:SQuatD(b:SQuatD, t:Double)`

Spherically interpolates between this SQuatD and <b>b</b> by <b>t</b>.

<br/>

### `Method EulerXYZ:SQuatD(rot:SVec3D)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerXZY:SQuatD(rot:SVec3D)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerYXZ:SQuatD(rot:SVec3D)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerYZX:SQuatD(rot:SVec3D)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerZXY:SQuatD(rot:SVec3D)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerZYX:SQuatD(rot:SVec3D)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

## Functions

### `Function ToMat3:SMat3D(a:SQuatD)`

Applies the quaternion <b>a</b> to the matrix, returning a new matrix.

<br/>

### `Function ToMat4:SMat4D(a:SQuatD)`

Applies the quaternian to the matrix, return the new matrix.

<br/>

### `Function RotTrans:SMat4D(a:SQuatD, s:SVec3D)`

Creates a translation and rotation matrix.

The returned matrix is such that it places objects at position <b>s</b>, oriented in rotation <b>a</b>.


<br/>

### `Function RotTransOrigin:SMat4D(a:SQuatD, s:SVec3D, origin:SVec3D)`

Creates a translation, rotation and scaling matrix.

The returned matrix is such that it places objects at position <b>origin</b>, oriented in rotation <b>a</b> and scaled by <b>s</b>.


<br/>

### `Function Identity:SQuatD()`

The identity rotation.

<br/>

