---
id: taudiosampleloader
title: TAudioSampleLoader
sidebar_label: TAudioSampleLoader
---


To create your own audio sample loaders, you should extend this type and
provide a <b>LoadAudioSample</b> method. To add your audio sample loader to the system,
simply create an instance of it using <b>New</b>.


## Methods

### `Method LoadAudioSample:TAudioSample( stream:TStream ) Abstract`

Load an audio sample

Extending types must implement this method.


#### Returns
A new audio sample object, or Null if sample could not be loaded



