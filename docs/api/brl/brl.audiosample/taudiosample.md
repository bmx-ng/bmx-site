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

### `Field length`

Length, in samples, of the sample data

<br/>

### `Field hertz`

Sample rate

<br/>

### `Field format`

Sample format

<br/>

## Methods

### `Method Copy:TAudioSample()`

Copy audio sample

#### Returns
A new audio sample object


<br/>

### `Method Convert:TAudioSample( to_format )`

Convert audio sample

#### Returns
A new audio sample object in the specified format


<br/>

## Functions

### `Function Create:TAudioSample( length,hertz,format )`

Create an audio sample

#### Returns
A new audio sample object


<br/>

### `Function CreateStatic:TAudioSample( samples:Byte Ptr,length,hertz,format )`

Create a static audio sample

#### Returns
A new audio sample object that references an existing block of memory


<br/>

