---
id: taudiosample
title: TAudioSample
sidebar_label: TAudioSample
---


## Fields

### `Field samples:Byte Ptr`

Byte pointer to sample data


### `Field length`

Length, in samples, of the sample data


### `Field hertz`

Sample rate


### `Field format`

Sample format


## Methods

### `Method Copy:TAudioSample()`

Copy audio sample

#### Returns
A new audio sample object



### `Method Convert:TAudioSample( to_format )`

Convert audio sample

#### Returns
A new audio sample object in the specified format



## Functions

### `Function Create:TAudioSample( length,hertz,format )`

Create an audio sample

#### Returns
A new audio sample object



### `Function CreateStatic:TAudioSample( samples:Byte Ptr,length,hertz,format )`

Create a static audio sample

#### Returns
A new audio sample object that references an existing block of memory



