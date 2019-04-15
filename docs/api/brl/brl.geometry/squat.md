---
id: squat
title: SQuat
sidebar_label: SQuat
---

A Quaternion.


Quaternions are used to represent rotations.
They are compact, don't suffer from gimbal lock and can easily be interpolated.


## Constructors

### `Method New(x:Float, y:Float, z:Float, w:Float)`

Creates a new [SQuat](../../../brl/brl.geometry/squat) from the supplied arguments.

<br/>

## Operators

### `Method Operator*:SQuat(b:SQuat)`

Multiplies the quaternion by <b>b</b>, returning a new quaternion.

<br/>

### `Method Operator-:SQuat()`

Returns the quaternion, negated.

<br/>

## Methods

### `Method Dot:Float(b:SQuat)`

The dot product between two rotations.

<br/>

### `Method Invert:SQuat()`

Returns the Inverse of rotation.

<br/>

### `Method Lerp:SQuat(b:SQuat, t:Float)`

Interpolates between the SQuat and <b>b</b> by <b>t</b> and normalizes the result afterwards.

<br/>

### `Method Normal:SQuat()`

Converts this quaternion to one with the same orientation but with a magnitude of 1.

<br/>

### `Method Slerp:SQuat(b:SQuat, t:Float)`

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

### `Function Identity:SQuat()`

The identity rotation.

<br/>

