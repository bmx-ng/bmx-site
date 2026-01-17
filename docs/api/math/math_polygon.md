---
id: math.polygon
title: Math.Polygon
sidebar_label: Math.Polygon
---


## Functions

### `Function TriangulatePoly:Int[](poly:SVec2I[])`

Runs a tesselation against a polygon [SVec2I](../../math/math.vector/svec2i) array, returning a list of triangle indices.

#### Returns
An array of indices that refer to the vertices of the input polygon. Three subsequent indices form a triangle.


<br/>

### `Function TriangulatePoly:Int[](poly:SVec2F[])`

Runs a tesselation against a polygon [SVec2F](../../math/math.vector/svec2f) array, returning a list of triangle indices.

#### Returns
An array of indices that refer to the vertices of the input polygon. Three subsequent indices form a triangle.


<br/>

### `Function TriangulatePoly:Int[](poly:Float[])`

Runs a tesselation against a polygon [Float](../../brl/brl.blitz/#float) array, returning a list of triangle indices.

The array consists of pairs of x, y vertices.  Output triangles are clockwise.


#### Returns
An array of indices that refer to the vertices of the input polygon. Three subsequent indices form a triangle.


<br/>

