---
id: squatd
title: SQuatD
sidebar_label: SQuatD
---

A Quaternion.


They are compact, don't suffer from gimbal lock, and can easily be interpolated.
Quaternions consist of four components (x, y, z, w), where x, y, z form the vector part,
and w is the scalar part.


## Constructors

### `Method New(x:Double, y:Double, z:Double, w:Double = 1)`

Creates a new [SQuatD](../../../math/math.quaternion/squatd) instance with the supplied <b>x</b>, <b>y</b>, <b>z</b>, and <b>w</b> components.

<br/>

## Operators

### `Method Operator*:SQuatD(b:SQuatD)`

Multiplies this quaternion by quaternion <b>b</b>, returning a new quaternion that represents the combined rotation.

<br/>

### `Method Operator-:SQuatD()`

Returns a new quaternion with the negation of this quaternion's components, representing the inverse rotation.

<br/>

## Methods

### `Method AngleTo:Double(quat:SQuatD)`

Returns the angle (in degrees) between this quaternion and the quaternion <b>quat</b>, representing the difference in their rotations.

<br/>

### `Method Dot:Double(b:SQuatD)`

Calculates the dot product between this quaternion and quaternion b, which is useful for various mathematical operations, such as finding the angle between two rotations.

<br/>

### `Method Invert:SQuatD()`

Returns the inverse of this quaternion, representing the opposite rotation.

<br/>

### `Method Interpolate:SQuatD(b:SQuatD, t:Double)`

Performs linear interpolation between this quaternion and quaternion <b>b</b> by the factor <b>t</b> `(0 <= t <= 1)`, and normalizes the result afterwards.

<br/>

### `Method Length:Double()`

Computes the length (magnitude) of this quaternion when considered as a 4-dimensional vector.

<br/>

### `Method LengthSquared:Double()`

Computes the squared length (squared magnitude) of this quaternion when considered as a 4-dimensional vector.

Calculating the squared length instead of the length is much faster.
Often if you are comparing lengths of two quaternions, you can just compare their squared lengths.


<br/>

### `Method Normal:SQuatD()`

Normalizes this quaternion, resulting in a quaternion with the same orientation but with a magnitude of 1.

<br/>

### `Method RotateTowards:SQuatD(quat:SQuatD, s:Double)`

Rotates this quaternion by an angular step <b>s</b> (in degrees) towards the specified quaternion <b>quat</b>.

<br/>

### `Method SphericalInterpolate:SQuatD(b:SQuatD, t:Double)`

Performs spherical linear interpolation (slerp) between this quaternion and quaternion <b>b</b> by the factor <b>t</b> `(0 <= t <= 1)`.

<br/>

### `Method EulerRotate:SQuatD(rot:SVec3D, order:ERotationOrder = ERotationOrder.XYZ)`

Returns a quaternion representing a rotation around the Euler angles specified by <b>rot</b>, using the specified rotation order.

<br/>

### `Method ToEuler:SVec3D(order:ERotationOrder = ERotationOrder.XYZ)`

Converts this quaternion to Euler angles (in degrees) using the specified rotation <b>order</b>.

<br/>

### `Method ToString:String() Override`

Returns a [String](../../../brl/brl.blitz/#string) representation of the quaternion.

<br/>

## Functions

### `Function CreateFromEuler:SQuatD(euler:SVec3D, order:ERotationOrder = ERotationOrder.XYZ)`

Creates a new [SQuatD](../../../math/math.quaternion/squatd) instance from the rotation specified by the Euler angles and the rotation <b>order</b>.

<br/>

### `Function CreateFromRotation:SQuatD(mat:SMat4D)`

Creates a new [SQuatD](../../../math/math.quaternion/squatd) instance from the rotation component of the 4x4 matrix <b>mat</b>.

see http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm


<br/>

### `Function ToMat3:SMat3D(a:SQuatD)`

Converts the quaternion <b>a</b> to a 3x3 rotation matrix, returning a new matrix that represents the same rotation as the quaternion.

<br/>

### `Function ToMat4:SMat4D(a:SQuatD)`

Converts the quaternion <b>a</b> to a 4x4 rotation matrix, returning a new matrix that represents the same rotation as the quaternion.

<br/>

### `Function RotTrans:SMat4D(a:SQuatD, s:SVec3D)`

Creates a 4x4 matrix that represents both translation and rotation.

The returned matrix places objects at position <b>s</b>, oriented with the rotation specified by quaternion <b>a</b>.


<br/>

### `Function RotTransOrigin:SMat4D(a:SQuatD, s:SVec3D, origin:SVec3D)`

Creates a translation, rotation and scaling matrix.

The returned matrix is such that it places objects at position <b>origin</b>, oriented in rotation <b>a</b> and scaled by <b>s</b>.


<br/>

### `Function Identity:SQuatD()`

Returns the identity quaternion, representing no rotation (x=0, y=0, z=0, w=1).

<br/>

