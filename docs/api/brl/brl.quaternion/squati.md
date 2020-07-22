---
id: squati
title: SQuatI
sidebar_label: SQuatI
---

An [Int](../../../brl/brl.blitz/#int) backed Quaternion.


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

### `Method AngleTo:Double(quat:SQuatI)`

Returns the angle between ths quaternion and the quaternion <b>quat</b>.

<br/>

### `Method Dot:Int(b:SQuatI)`

The dot product between two rotations.

<br/>

### `Method Invert:SQuatI()`

Returns the Inverse of rotation.

<br/>

### `Method Interpolate:SQuatI(b:SQuatI, t:Int)`

Interpolates between the SQuatI and <b>b</b> by <b>t</b> and normalizes the result afterwards.

<br/>

### `Method Length:Double()`

Computes the length of this quaternion, considered as a 4 dimensional vector.

<br/>

### `Method LengthSquared:Double()`

Computes the length of this quaternion, considered as a 4 dimensional vector.

Calculating the squared length instead of the length is much faster.
Often if you are comparing lengths of two quaternions you can just compare their squared lengths.


<br/>

### `Method Normal:SQuatI()`

Converts this quaternion to one with the same orientation but with a magnitude of 1.

<br/>

### `Method RotateTowards:SQuatI(quat:SQuatI, s:Double)`

Rotates this quaternion by a given angular step <b>s</b> to the specified quaternion <b>quat</b>.

<br/>

### `Method SphericalInterpolate:SQuatI(b:SQuatI, t:Double)`

Spherically interpolates between this SQuatI and <b>b</b> by <b>t</b>.

<br/>

### `Method EulerRotate:SQuatI(rot:SVec3I, order:ERotationOrder = ERotationOrder.XYZ)`

Returns a rotation that rotates around <b>rot</b>.

<br/>

### `Method ToEuler:SVec3I(order:ERotationOrder = ERotationOrder.XYZ)`

Returns the quaternion converted to Euler angles, using the specified rotation <b>order</b>.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the quaternion.

<br/>

## Functions

### `Function CreateFromEuler:SQuatI(euler:SVec3I, order:ERotationOrder = ERotationOrder.XYZ)`

Creates a new [SQuatI](../../../brl/brl.quaternion/squati) from the rotation specified by the <b>euler</b> angle and <b>order</b>.

<br/>

### `Function CreateFromRotation:SQuatI(mat:SMat4I)`

Creates a new [SQuatI](../../../brl/brl.quaternion/squati) from the rotation component of matrix <b>mat</b>.

see http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm


<br/>

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

