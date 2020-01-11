---
id: tsound
title: TSound
sidebar_label: TSound
---

Audio sound type


#### Example
```blitzmax
' TSound has three methods Play and Cue and a Load Function
SuperStrict

Graphics 640 , 480

Local Sound:TSound = TSound.Load(blitzmaxpath()+"\samples\hitoro\sounds\gameover.ogg",0)
Local Channel:TChannel = Sound.Cue() ' cue to a channel

Repeat
	DrawText "Press P to play, C to Cue and R to Resume sound",10,10
	
	If KeyHit(KEY_P) Then
		Sound.Play()
	End If
	
	If KeyHit(KEY_C) Then
		Channel=Sound.Cue()
	End If
	
	If KeyHit(KEY_R) Then
		ResumeChannel(Channel)
	End If
	
	Flip
Until AppTerminate() Or KeyHit(KEY_ESCAPE)
```
## Methods

### `Method Play:TChannel( alloced_channel:TChannel=Null )`

Play the sound


Starts a sound playing through an audio channel.
If no channel is specified, [Play](../../../brl/brl.audio/tsound/#method-playtchannel-allocedchanneltchannelnull-) automatically allocates a channel for you.


#### Returns
An audio channel object


#### Example
```blitzmax
' Play method example
SuperStrict

Graphics 640, 480

Local noise:TSound = TSound.Load(blitzmaxpath()+"\samples\hitoro\sounds\gameover.ogg",0)

Repeat
	DrawText "Press P to play sound",10,10
	
	If KeyHit(KEY_P) Then
		noise.Play
	End If
	
	Flip
Until AppTerminate() Or KeyHit(KEY_ESCAPE)
```
<br/>

### `Method Cue:TChannel( alloced_channel:TChannel=Null )`

Cue the sound for playback


Prepares an audio channel for playback of a sound.
To actually start the sound, you must use the channel's [SetPaused](../../../brl/brl.audio/tchannel/#method-setpaused-pausedint-) method.
If no channel is specified, [Cue](../../../brl/brl.audio/tsound/#method-cuetchannel-allocedchanneltchannelnull-) automatically allocates a channel for you.

[Cue](../../../brl/brl.audio/tsound/#method-cuetchannel-allocedchanneltchannelnull-) allows you to setup various audio channel states such as volume, pan, depth and rate before a sound
actually starts playing.


#### Returns
An audio channel object


#### Example
```blitzmax
'Cue Method

SuperStrict

Graphics 640 , 480

Local sound:TSound = TSound.Load(blitzmaxpath()+"\samples\hitoro\sounds\gameover.ogg",0)
Local channel:TChannel = CueSound(sound)

Repeat
	DrawText "Press A to play sound",10,10
	DrawText "Press C to Cue sound",10,30
	
	If KeyHit(KEY_A) Then
		ResumeChannel channel
	End If
	
	If KeyHit(KEY_C) Then
		channel = sound.Cue()
	End If

	Flip
Until AppTerminate() Or KeyHit(KEY_ESCAPE)
```
<br/>

## Functions

### `Function Load:TSound( url:Object,loop_flag:Int )`

Load sound


<b>url</b> can be either a string, a stream or an audio sample object.
The returned sound object can be played using [Play](../../../brl/brl.audio/tsound/#method-playtchannel-allocedchanneltchannelnull-) or [Cue](../../../brl/brl.audio/tsound/#method-cuetchannel-allocedchanneltchannelnull-).


#### Returns
A sound object


#### Example
```blitzmax
' load function

SuperStrict

Graphics 640 ,480

Local Sound:TSound = TSound.Load(blitzmaxpath()+"\samples\hitoro\sounds\gameover.ogg",0)
Local Channel:TChannel = CueSound(sound)

Repeat
	DrawText "Press A to play sound",10,10
	DrawText "Press C to Cue sound",10,30

	If KeyHit(KEY_A) Then
		ResumeChannel channel
	End If
	
	If KeyHit(KEY_C) Then
		channel = sound.Cue()
	End If

	Flip
Until AppTerminate() Or KeyHit(KEY_ESCAPE)
```
<br/>

