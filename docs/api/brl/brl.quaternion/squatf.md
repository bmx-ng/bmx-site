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

### `Method AngleTo:Float(quat:SQuatF)`

Returns the angle between ths quaternion and the quaternion <b>quat</b>.

<br/>

### `Method Dot:Float(b:SQuatF)`

The dot product between two rotations.

<br/>

### `Method Invert:SQuatF()`

Returns the Inverse of rotation.

<br/>

### `Method Interpolate:SQuatF(b:SQuatF, t:Float)`

Interpolates between the SQuatF and <b>b</b> by <b>t</b> and normalizes the result afterwards.

<br/>

### `Method Length:Float()`

Computes the length of this quaternion, considered as a 4 dimensional vector.

<br/>

### `Method LengthSquared:Float()`

Computes the length of this quaternion, considered as a 4 dimensional vector.

Calculating the squared length instead of the length is much faster.
Often if you are comparing lengths of two quaternions you can just compare their squared lengths.


<br/>

### `Method Normal:SQuatF()`

Converts this quaternion to one with the same orientation but with a magnitude of 1.

<br/>

### `Method RotateTowards:SQuatF(quat:SQuatF, s:Float)`

Rotates this quaternion by a given angular step <b>s</b> to the specified quaternion <b>quat</b>.

<br/>

### `Method SphericalInterpolate:SQuatF(b:SQuatF, t:Float)`

Spherically interpolates between this SQuatF and <b>b</b> by <b>t</b>.

<br/>

### `Method EulerRotate:SQuatF(rot:SVec3F, order:ERotationOrder = ERotationOrder.XYZ)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method ToEuler:SVec3F(order:ERotationOrder = ERotationOrder.XYZ)`

Returns the quaternion converted to Euler angles, using the specified rotation <b>order</b>.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the quaternion.

<br/>

## Functions

### `Function CreateFromEuler:SQuatF(euler:SVec3F, order:ERotationOrder = ERotationOrder.XYZ)`

Creates a new [SQuatF](../../../brl/brl.quaternion/squatf) from the rotation specified by the <b>euler</b> angle and <b>order</b>.

<br/>

### `Function CreateFromRotation:SQuatF(mat:SMat4F)`

Creates a new [SQuatD](../../../brl/brl.quaternion/squatd) from the rotation component of matrix <b>mat</b>.

see http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm


<br/>

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

