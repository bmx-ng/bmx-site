---
id: squat
title: SQuat
sidebar_label: SQuat
---

A Quaternion.


Quaternions are used to represent rotations.
They are compact, don't suffer from gimbal lock and can easily be interpolated.


## Constructors

### `Method New(x:Double, y:Double, z:Double, w:Double)`

Creates a new [SQuat](../../../brl/brl.quaternion/squat) from the supplied arguments.

<br/>

## Operators

### `Method Operator*:SQuat(b:SQuat)`

Multiplies the quaternion by <b>b</b>, returning a new quaternion.

<br/>

### `Method Operator-:SQuat()`

Returns a new quaternion, negated.

<br/>

## Methods

### `Method Dot:Double(b:SQuat)`

The dot product between two rotations.

<br/>

### `Method Invert:SQuat()`

Returns the Inverse of rotation.

<br/>

### `Method Interpolate:SQuat(b:SQuat, t:Double)`

Interpolates between the SQuat and <b>b</b> by <b>t</b> and normalizes the result afterwards.

<br/>

### `Method Normal:SQuat()`

Converts this quaternion to one with the same orientation but with a magnitude of 1.

<br/>

### `Method SphericalInterpolate:SQuat(b:SQuat, t:Double)`

Spherically interpolates between this SQuat and <b>b</b> by <b>t</b>.

<br/>

### `Method EulerXYZ:SQuat(rot:SVec3)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerXZY:SQuat(rot:SVec3)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerYXZ:SQuat(rot:SVec3)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerYZX:SQuat(rot:SVec3)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerZXY:SQuat(rot:SVec3)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method EulerZYX:SQuat(rot:SVec3)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

## Functions

### `Function ToMat3:SMat3(a:SQuat)`

Applies the quaternion <b>a</b> to the matrix, returning a new matrix.

<br/>

### `Function ToMat4:SMat4(a:SQuat)`

Applies the quaternian to the matrix, return the new matrix.

<br/>

### `Function RotTrans:SMat4(a:SQuat, s:SVec3)`

Creates a translation and rotation matrix.

The returned matrix is such that it places objects at position <b>s</b>, oriented in rotation <b>a</b>.


<br/>

### `Function RotTransOrigin:SMat4(a:SQuat, s:SVec3, origin:SVec3)`

Creates a translation, rotation and scaling matrix.

The returned matrix is such that it places objects at position <b>origin</b>, oriented in rotation <b>a</b> and scaled by <b>s</b>.


<br/>

### `Function Identity:SQuat()`

The identity rotation.

<br/>

