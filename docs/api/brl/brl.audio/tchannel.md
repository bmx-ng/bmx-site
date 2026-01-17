---
id: tchannel
title: TChannel
sidebar_label: TChannel
---

Audio channel Type


#### Example
```blitzmax
'TChannel controls the pipe thru which the sound plays
SuperStrict

Graphics 640 , 480

Local noise:TSound = TSound.Load(blitzmaxpath()+"\samples\hitoro\sounds\gameover.ogg",0)
Local channel:TChannel = PlaySound(noise)

Repeat
	Cls
	DrawText "Press P to play sound", 10, 10
	If channel.Playing() Then
		DrawText "You should hear something...",10,30
	End If
	If KeyHit(KEY_P) Then
		Channel=PlaySound(Noise)
	End If
	Flip
Until AppTerminate() Or KeyHit(KEY_ESCAPE)
```
## Methods

### `Method Stop()`

Stop audio channel playback


Shuts down the audio channel. Further commands on this audio channel will have no effect.


<br/>

### `Method SetPaused( paused:Int )`

Pause or unpause audio channel playback


If <b>paused</b> is True, the audio channel is paused. Otherwise, the audio channel is unpaused.


<br/>

### `Method SetVolume( volume:Float )`

Set audio channel volume


<b>volume</b> should be in the range 0 (silence) to 1 (full volume).


<br/>

### `Method SetPan( pan:Float )`

Set audio channel stereo pan


<b>pan</b> should be in the range -1 (full left) to 1 (full right).


<br/>

### `Method SetDepth( depth:Float )`

Set audio channel depth


<b>depth</b> should be in the range -1 (back) to 1 (front).


<br/>

### `Method SetRate( rate:Float )`

Set audio channel playback rate


<b>rate</b> is a multiplier used to modify the audio channel's frequency.
For example, a rate of .5 will cause the audio channel
to play at half speed (ie: an octave down) while a rate of 2 will
cause the audio channel to play at double speed (ie: an octave up).


<br/>

### `Method Playing:Int()`

Determine whether audio channel is playing


[Playing](../../../brl/brl.audio/tchannel/#method-playingint) will return False if the audio channel is either paused, or has been stopped
using [Stop](../../../brl/brl.audio/tchannel/#method-stop).


#### Returns
True if <b>channel</b> is currently playing


#### Example
```blitzmax
'TChannel Playing Method Example
SuperStrict

Graphics 640, 480

Local noise:TSound = TSound.Load(blitzmaxpath()+"\samples\hitoro\sounds\gameover.ogg",0)
Local channel:TChannel = PlaySound(noise)

Repeat
	Cls
	DrawText "Press P to play sound", 10, 10
	
	If channel.Playing() Then
		DrawText "You should hear something...", 10, 30
	End If
	
	If KeyHit(KEY_P) Then
		channel = PlaySound(noise)
	End If
	
	Flip
Until AppTerminate() Or KeyHit(KEY_ESCAPE)
```
<br/>

