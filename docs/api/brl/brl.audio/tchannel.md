---
id: tchannel
title: TChannel
sidebar_label: TChannel
---


## Methods

### `Method Stop()`

Stop audio channel playback


Shuts down the audio channel. Further commands on this audio channel will have no effect.



### `Method SetPaused( paused:Int )`

Pause or unpause audio channel playback


If <b>paused</b> is True, the audio channel is paused. Otherwise, the audio channel is unpaused.



### `Method SetVolume( volume# )`

Set audio channel volume


<b>volume</b> should be in the range 0 (silence) to 1 (full volume).



### `Method SetPan( pan# )`

Set audio channel stereo pan


<b>pan</b> should be in the range -1 (full left) to 1 (full right).



### `Method SetDepth( depth# )`

Set audio channel depth


<b>depth</b> should be in the range -1 (back) to 1 (front).



### `Method SetRate( rate# )`

Set audio channel playback rate


<b>rate</b> is a multiplier used to modify the audio channel's frequency.
For example, a rate of .5 will cause the audio channel
to play at half speed (ie: an octave down) while a rate of 2 will
cause the audio channel to play at double speed (ie: an octave up).



### `Method Playing:Int()`

Determine whether audio channel is playing


[Playing](../../../brl/brl.audio/#method-playing-int) will return False if the audio channel is either paused, or has been stopped
using [Stop](../../../brl/brl.audio/#method-stop).


#### Returns
True if <b>channel</b> is currently playing



