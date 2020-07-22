---
id: taudiosample
title: TAudioSample
sidebar_label: TAudioSample
---

Audio sample type


## Fields

### `Field samples:Byte Ptr`

Byte pointer to sample data

<br/>

### `Field length:Int`

Length, in samples, of the sample data

<br/>

### `Field hertz:Int`

Sample rate

<br/>

### `Field format:Int`

Sample format

<br/>

### `Field capacity:Long`

Allocated memory in bytes

<br/>

## Methods

### `Method Copy:TAudioSample()`

Copy audio sample

#### Returns
A new audio sample object


<br/>

### `Method Convert:TAudioSample( to_format:Int )`

Convert audio sample

#### Returns
A new audio sample object in the specified format


<br/>

## Functions

### `Function Create:TAudioSample( length:Int,hertz:Int,format:Int )`

Create an audio sample

#### Returns
A new audio sample object


<br/>

### `Function CreateStatic:TAudioSample( samples:Byte Ptr,length:Int,hertz:Int,format:Int )`

Create a static audio sample

#### Returns
A new audio sample object that references an existing block of memory


<br/>

