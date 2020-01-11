---
id: brl.audio
title: BRL.Audio
sidebar_label: BRL.Audio
---



The BlitzMax audio module contains commands to load and play sounds.

A sound file can be played in BlitzMax with a combination of [LoadSound](../../brl/brl.audio/#function-loadsoundtsound-urlobjectflagsint0-) that loads a sound file
and [PlaySound](../../brl/brl.audio/#function-playsoundtchannel-soundtsoundchanneltchannelnull-) which plays the sound through the systems audio system if available.

BlitzMax contains native support for sound files in both .wav (uncompressed)
and .ogg (compressed) file formats.

Playback of sounds can be controlled with various audio channel
operators including [SetChannelVolume](../../brl/brl.audio/#function-setchannelvolume-channeltchannelvolume-), [SetChannelPan](../../brl/brl.audio/#function-setchannelpan-channeltchannelpan-), [SetChannelDepth](../../brl/brl.audio/#function-setchanneldepth-channeltchanneldepth-) and [SetChannelRate](../../brl/brl.audio/#function-setchannelrate-channeltchannelrate-).

A channel handle is obtained from either the return value of [PlaySound](../../brl/brl.audio/#function-playsoundtchannel-soundtsoundchanneltchannelnull-) and [CueSound](../../brl/brl.audio/#function-cuesoundtchannel-soundtsoundchanneltchannelnull-) or from
reserving a channel with [AllocChannel](../../brl/brl.audio/#function-allocchanneltchannel).


## Types
| Type | Description |
|---|---|
| [TSound](../../brl/brl.audio/tsound) | Audio sound type |
| [TChannel](../../brl/brl.audio/tchannel) | Audio channel Type |

## Functions

### `Function LoadSound:TSound( url:Object,flags:Int=0 )`

Load a sound


<b>url</b> can be either a string, a stream or a [TAudioSample](../../brl/brl.audiosample/taudiosample) object.
The returned sound can be played using [PlaySound](../../brl/brl.audio/#function-playsoundtchannel-soundtsoundchanneltchannelnull-) or [CueSound](../../brl/brl.audio/#function-cuesoundtchannel-soundtsoundchanneltchannelnull-).

The <b>flags</b> parameter can be any combination of:

<table><tr><td> <b>Flag value</b></td><td><b>Effect</b></td></tr><tr><td>  SOUND_LOOP</td><td>The sound should loop when played back.</td></tr><tr><td>  SOUND_HARDWARE</td><td>The sound should be placed in onboard soundcard memory if possible.</td></tr></table>


To combine flags, use the binary 'or' operator: '|'.


#### Returns
A sound object


#### Example
```blitzmax
Rem
Load and Play a small example wav file.
End Rem

SuperStrict

Local sound:TSound = LoadSound("shoot.wav")
PlaySound sound

Input "Press any key to continue"
```
<br/>

### `Function PlaySound:TChannel( sound:TSound,channel:TChannel=Null )`

Play a sound


[PlaySound](../../brl/brl.audio/#function-playsoundtchannel-soundtsoundchanneltchannelnull-) starts a sound playing through an audio channel.
If no <b>channel</b> is specified, [PlaySound](../../brl/brl.audio/#function-playsoundtchannel-soundtsoundchanneltchannelnull-) automatically allocates a channel for you.


#### Returns
An audio channel object


#### Example
```blitzmax
Rem
Load and Play a small example wav file with looping.
End Rem

SuperStrict

Local sound:TSound = LoadSound("shoot.wav",True)
PlaySound sound

Input "Press any key to continue"
```
<br/>

### `Function CueSound:TChannel( sound:TSound,channel:TChannel=Null )`

Cue a sound


Prepares a sound for playback through an audio channel.
To actually start the sound, you must use [ResumeChannel](../../brl/brl.audio/#function-resumechannel-channeltchannel-).
If no <b>channel</b> is specified, [CueSound](../../brl/brl.audio/#function-cuesoundtchannel-soundtsoundchanneltchannelnull-) automatically allocates a channel for you.

[CueSound](../../brl/brl.audio/#function-cuesoundtchannel-soundtsoundchanneltchannelnull-) allows you to setup various audio channel states such as volume, pan, depth
and rate before a sound actually starts playing.


#### Returns
An audio channel object


#### Example
```blitzmax
' CueSound example

SuperStrict

Local sound:TSound = LoadSound("shoot.wav")
Local channel:TChannel = CueSound(sound)

Input "Press return key to play cued sound"

ResumeChannel channel

Input "Press return key to quit"
```
<br/>

### `Function AllocChannel:TChannel()`

Allocate audio channel


Allocates an audio channel for use with [PlaySound](../../brl/brl.audio/#function-playsoundtchannel-soundtsoundchanneltchannelnull-) and [CueSound](../../brl/brl.audio/#function-cuesoundtchannel-soundtsoundchanneltchannelnull-).
Once you are finished with an audio channel, you should use [StopChannel](../../brl/brl.audio/#function-stopchannel-channeltchannel-).


#### Returns
An audio channel object


#### Example
```blitzmax
'AllocChannel.bmx

SuperStrict

Local timer:TTimer = CreateTimer(20)

Local sound:TSound = LoadSound ("shoot.wav")
Local channel:TChannel = AllocChannel()

For Local i:Int = 1 To 20
	WaitTimer timer
	PlaySound sound,channel
Next
```
<br/>

### `Function StopChannel( channel:TChannel )`

Stop an audio channel


Shuts down an audio channel. Further commands using this channel will have no effect.


#### Example
```blitzmax
' StopChannel example

SuperStrict

Local sound:TSound = LoadSound("shoot.wav",True)
Local channel:TChannel = PlaySound(sound)

Input "Press return key to stop sound"

StopChannel channel

Input "Press return key to quit"
```
<br/>

### `Function ChannelPlaying:Int( channel:TChannel )`

Determine whether an audio channel is playing


[ChannelPlaying](../../brl/brl.audio/#function-channelplayingint-channeltchannel-) will return [False](../../brl/brl.blitz/#false) if either the channel has been paused using [PauseChannel](../../brl/brl.audio/#function-pausechannel-channeltchannel-),
or stopped using [StopChannel](../../brl/brl.audio/#function-stopchannel-channeltchannel-).


#### Returns
[True](../../brl/brl.blitz/#true) if <b>channel</b> is currently playing


#### Example
```blitzmax
' channelplaying.bmx

SuperStrict

Local sound:TSound = LoadSound ("shoot.wav")

Input "Hit return to begin channelplaying test, use ctrl-C to exit"

Local channel:TChannel = PlaySound (sound)
While True
	Print "ChannelPlaying(channel)="+ChannelPlaying(channel)
Wend
```
<br/>

### `Function SetChannelVolume( channel:TChannel,volume# )`

Set playback volume of an audio channel


<b>volume</b> should be in the range 0 (silent) to 1 (full volume)


#### Example
```blitzmax
' setchannelvolume.bmx

SuperStrict

Local timer:TTimer = CreateTimer(20)

Local sound:TSound = LoadSound ("shoot.wav")

For Local volume#=.1 To 2 Step .05
	WaitTimer timer
	Local channel:TChannel = CueSound(sound)
	SetChannelVolume channel,volume
	ResumeChannel channel
Next
```
<br/>

### `Function SetChannelPan( channel:TChannel,pan# )`

Set stereo balance of an audio channel


<b>pan</b> should be in the range -1 (left) to 1 (right)


#### Example
```blitzmax
' setchannelpan.bmx

SuperStrict

Graphics 640, 480

Local channel:TChannel = AllocChannel ()
Local sound:TSound = LoadSound ("shoot.wav") ' Use a short sample...

Repeat
	If MouseHit(1) Then
		PlaySound sound,channel
	End If
	
	Local pan# = MouseX () / (GraphicsWidth () / 2.0) - 1
	Local vol# = 1 - MouseY () / 480.0
	SetChannelPan channel, pan
	SetChannelVolume channel, vol*2

	Cls
	DrawText "Click to play...", 240, 200
	DrawText "Pan   : " + pan, 240, 220
	DrawText "Volume: " + vol, 240, 240

	Flip
Until KeyHit (KEY_ESCAPE)

End
```
<br/>

### `Function SetChannelDepth( channel:TChannel,depth# )`

Set surround sound depth of an audio channel


<b>depth</b> should be in the range -1 (back) to 1 (front)


#### Example
```blitzmax
' setchanneldepth.bmx

SuperStrict

Graphics 640, 480

Local channel:TChannel = AllocChannel ()
Local sound:TSound = LoadSound ("shoot.wav") ' Use a short sample...

Repeat
	If MouseHit(1) Then
		PlaySound sound,channel
	End If
	
	Local pan# = MouseX () / (640 / 2.0) - 1
	Local depth# = MouseY () / (480 /2.0) -1
	
	SetChannelPan channel,pan
	SetChannelDepth channel,depth

	Cls
	DrawText "Click to play...", 240, 200
	DrawText "Pan   : " + pan, 240, 220
	DrawText "Depth : " + depth, 240, 240

	Flip
Until KeyHit (KEY_ESCAPE)

End
```
<br/>

### `Function SetChannelRate( channel:TChannel,rate# )`

Set playback rate of an audio channel


<b>rate</b> is a multiplier used to modify the audio channel's frequency.
For example, a rate of .5 will cause the audio channel
to play at half speed (ie: an octave down) while a rate of 2 will
cause the audio channel to play at double speed (ie: an octave up).


#### Example
```blitzmax
' setchannelrate.bmx

SuperStrict

Local timer:TTimer = CreateTimer(20)

Local sound:TSound = LoadSound ("shoot.wav",True)
Local channel:TChannel = CueSound(sound)
ResumeChannel channel

For Local rate#=1.0 To 4 Step 0.01
	WaitTimer timer
	SetChannelRate channel,rate
Next
```
<br/>

### `Function PauseChannel( channel:TChannel )`

Pause audio channel playback


Pauses audio channel playback.


#### Example
```blitzmax
' PauseChannel Example

SuperStrict

Graphics 640 , 480

Local noise:TSound = TSound.Load(blitzmaxpath()+"\samples\hitoro\sounds\gameover.ogg",0)
Local channel:TChannel = PlaySound(noise)
Local elapsed:Int = MilliSecs()

Repeat
	Cls
	DrawText "Press P to play sound" , 10 , 10
	If (MilliSecs() - elapsed) > 500
		PauseChannel(channel) ' pause after 0.5 secs played
	End If
	
	If KeyHit(KEY_P) Then
		channel = PlaySound(noise)
		elapsed = MilliSecs() 
	End If
	Flip
Until AppTerminate() Or KeyHit(KEY_ESCAPE)
```
<br/>

### `Function ResumeChannel( channel:TChannel )`

Resume audio channel playback


Resumes audio channel playback after it has been paused by [CueSound](../../brl/brl.audio/#function-cuesoundtchannel-soundtsoundchanneltchannelnull-) or [PauseChannel](../../brl/brl.audio/#function-pausechannel-channeltchannel-).


#### Example
```blitzmax
' ResumeChannel example
SuperStrict

Graphics 640, 480

Local sound:TSound = LoadSound(blitzmaxpath()+"\samples\hitoro\sounds\gameover.ogg")
Local channel:TChannel = CueSound(sound)

Repeat
	DrawText "Press A to play sound",10,10
	DrawText "Press C to Cue sound",10,30
	
	If KeyHit(KEY_A) Then
		ResumeChannel channel
	End If
	
	If KeyHit(KEY_C) Then
		Channel=CueSound(sound)
	End If

	Flip
Until AppTerminate() Or KeyHit(KEY_ESCAPE)
```
<br/>

### `Function AudioDrivers$[]()`

Get audio drivers


Returns an array of strings, where each string describes an audio driver.


#### Example
```blitzmax
SuperStrict

'Iterate through every available audio driver on your system
For Local a:String = EachIn AudioDrivers()
	Print a
Next
```
<br/>

### `Function AudioDriverExists:Int( name$ )`

Determine if an audio driver exists


Returns True if the audio drvier specified by <b>driver</b> exists.


#### Example
```blitzmax
SuperStrict

'Iterate through every available audio driver on your system
For Local a:String = EachIn AudioDrivers()
	Print a + ":"+AudioDriverExists(a)
Next

Local a:String ="imaginary driver"
Print a+":"+AudioDriverExists(a)
```
<br/>

### `Function SetAudioDriver:Int( name$ )`

Set current audio driver


Returns true if the audio driver was successfully set.


#### Example
```blitzmax
SuperStrict

Repeat
	Print "Select Audio Driver:"
	Print "1) FreeAudio"
	Print "2) OpenAL"
	Print "3) DirectSound"

	Local n:Int
	Select Input( ">" )
		Case 1
			n = SetDriver( "FreeAudio" )
		Case 2
			n = SetDriver( "OpenAL" )
		Case 3
			n = SetDriver( "DirectSound" )
	End Select
	If n Exit
Forever

Function SetDriver:Int(d:String)
	If AudioDriverExists(d) Then
		Return SetAudioDriver(d)
	Else
		RuntimeError "Cannot set " + d
	EndIf
End Function
```
<br/>

