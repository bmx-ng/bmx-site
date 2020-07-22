---
id: brl.audiosample
title: BRL.AudioSample
sidebar_label: Introduction
---


The BlitzMax audiosample module contains commands to create and load audio samples for
use with the BlitzMax [BRL.Audio](../brl/brl_audio.md) module.


## Types
| Type | Description |
|---|---|
| [TAudioSample](../../brl/brl.audiosample/taudiosample) | Audio sample type |
| [TAudioSampleLoader](../../brl/brl.audiosample/taudiosampleloader) | Audio sample loader type |

## Functions

### `Function CreateAudioSample:TAudioSample( length:Int,hertz:Int,format:Int )`

Create an audio sample


<b>length</b> is the number of samples to allocate for the sample. <b>hertz</b> is the frequency in samples per second (hz)
the audio sample will be played. <b>format</b> should be one of:

<table><tr><td> <b>Format</b></td><td><b>Description</b>
</td></tr><tr><td>  &SF_MONO8</td><td>Mono unsigned 8 bit
</td></tr><tr><td>  &SF_MONO16LE</td><td>Mono signed 16 bit little endian
</td></tr><tr><td>  &SF_MONO16BE</td><td>Mono signed 16 bit big endian
</td></tr><tr><td>  &SF_STEREO8</td><td>Stereo unsigned 8 bit
</td></tr><tr><td>  &SF_STEREO16LE</td><td>Stereo signed 16 bit little endian
</td></tr><tr><td>  &SF_STEREO16BE</td><td>Stereo signed 16 bit big endian</td></tr></table>



#### Returns
An audio sample object


#### Example
```blitzmax
' createaudiosample.bmx

SuperStrict

Local sample:TAudioSample=CreateAudioSample( 32,11025,SF_MONO8 )

For Local k:Int = 0 Until 32
	sample.samples[k]=Sin(k*360/32)*127.5+127.5
Next

Local sound:TSound=LoadSound( sample,True )

PlaySound(sound)

Input
```
<br/>

### `Function CreateStaticAudioSample:TAudioSample( samples:Byte Ptr,length:Int,hertz:Int,format:Int )`

Create an audio sample with existing data


The memory referenced by a static audio sample is not released when the audio sample is
deleted.

See [CreateAudioSample](../../brl/brl.audiosample/#function-createaudiosampletaudiosample-lengthinthertzintformatint-) for possile <b>format</b> values.


#### Returns
An audio sample object that references an existing block of memory


<br/>

### `Function LoadAudioSample:TAudioSample( url:Object )`

Load an audio sample

#### Returns
An audio sample object


<br/>

