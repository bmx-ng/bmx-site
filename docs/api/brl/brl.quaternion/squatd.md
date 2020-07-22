---
id: squatd
title: SQuatD
sidebar_label: SQuatD
---

A Quaternion.


Quaternions are used to represent rotations.
They are compact, don't suffer from gimbal lock and can easily be interpolated.


## Constructors

### `Method New(x:Double, y:Double, z:Double, w:Double = 1)`

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

### `Method AngleTo:Double(quat:SQuatD)`

Returns the angle between ths quaternion and the quaternion <b>quat</b>.

<br/>

### `Method Dot:Double(b:SQuatD)`

The dot product between two rotations.

<br/>

### `Method Invert:SQuatD()`

Returns the Inverse of rotation.

<br/>

### `Method Interpolate:SQuatD(b:SQuatD, t:Double)`

Interpolates between the SQuatD and <b>b</b> by <b>t</b> and normalizes the result afterwards.

<br/>

### `Method Length:Double()`

Computes the length of this quaternion, considered as a 4 dimensional vector.

<br/>

### `Method LengthSquared:Double()`

Computes the length of this quaternion, considered as a 4 dimensional vector.

Calculating the squared length instead of the length is much faster.
Often if you are comparing lengths of two quaternions you can just compare their squared lengths.


<br/>

### `Method Normal:SQuatD()`

Converts this quaternion to one with the same orientation but with a magnitude of 1.

<br/>

### `Method RotateTowards:SQuatD(quat:SQuatD, s:Double)`

Rotates this quaternion by a given angular step <b>s</b> to the specified quaternion <b>quat</b>.

<br/>

### `Method SphericalInterpolate:SQuatD(b:SQuatD, t:Double)`

Spherically interpolates between this SQuatD and <b>b</b> by <b>t</b>.

<br/>

### `Method EulerRotate:SQuatD(rot:SVec3D, order:ERotationOrder = ERotationOrder.XYZ)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method ToEuler:SVec3D(order:ERotationOrder = ERotationOrder.XYZ)`

Returns the quaternion converted to Euler angles, using the specified rotation <b>order</b>.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the quaternion.

<br/>

## Functions

### `Function CreateFromEuler:SQuatD(euler:SVec3D, order:ERotationOrder = ERotationOrder.XYZ)`

Creates a new [SQuatD](../../../brl/brl.quaternion/squatd) from the rotation specified by the <b>euler</b> angle and <b>order</b>.

<br/>

### `Function CreateFromRotation:SQuatD(mat:SMat4D)`

Creates a new [SQuatD](../../../brl/brl.quaternion/squatd) from the rotation component of matrix <b>mat</b>.

see http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm


<br/>

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

