---
id: tsound
title: TSound
sidebar_label: TSound
---

Audio sound type


## Methods

### `Method Play:TChannel( alloced_channel:TChannel=Null )`

Play the sound


Starts a sound playing through an audio channel.
If no channel is specified, [Play](../../../brl/brl.audio/#method-play-tchannel-alloced-channel-tchannel-null) automatically allocates a channel for you.


#### Returns
An audio channel object



### `Method Cue:TChannel( alloced_channel:TChannel=Null )`

Cue the sound for playback


Prepares an audio channel for playback of a sound.
To actually start the sound, you must use the channel's [SetPaused](../../../brl/brl.audio/#method-setpaused-paused-int) method.
If no channel is specified, [Cue](../../../brl/brl.audio/#method-cue-tchannel-alloced-channel-tchannel-null) automatically allocates a channel for you.

[Cue](../../../brl/brl.audio/#method-cue-tchannel-alloced-channel-tchannel-null) allows you to setup various audio channel states such as volume, pan, depth and rate before a sound
actually starts playing.


#### Returns
An audio channel object



## Functions

### `Function Load:TSound( url:Object,loop_flag:Int )`

Load sound


<b>url</b> can be either a string, a stream or an audio sample object.
The returned sound object can be played using [Play](../../../brl/brl.audio/#method-play-tchannel-alloced-channel-tchannel-null) or [Cue](../../../brl/brl.audio/#method-cue-tchannel-alloced-channel-tchannel-null).


#### Returns
A sound object



