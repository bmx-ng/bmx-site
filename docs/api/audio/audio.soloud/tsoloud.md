---
id: tsoloud
title: TSoloud
sidebar_label: TSoloud
---

An instance of the Soloud player.


## Methods

### `Method init(flags:Int = SOLOUD_CLIP_ROUNDOFF, backend:Int = SOLOUD_AUTO, sampleRate:Int = SOLOUD_AUTO, bufferSize:Int = SOLOUD_AUTO, channels:Int = 2)`

Initializes the SoLoud object.

It has several optional parameters you can use to adjust SoLoud's behavior. The default values should work for most cases.


<br/>

### `Method getVersion:Int()`

Query SoLoud version number.

<br/>

### `Method getErrorString:String(errorCode:Int)`

Translate error number to an asciiz string

<br/>

### `Method play:Int(audioSource:TSLAudioSource, volume:Float = -1.0, pan:Float = 0.0, paused:Int = False, bus:Int = 0)`

Start playing a sound.

Returns voice handle, which can be ignored or used to alter the playing sound's parameters. Negative volume means to use default.


<br/>

### `Method playClocked:Int(soundTime:Double, audioSource:TSLAudioSource, volume:Float = -1.0, pan:Float = 0.0, bus:Int = 0)`

Start playing a sound delayed in relation to other sounds called via this method.

Negative volume means to use default.


<br/>

### `Method seek(voiceHandle:Int, seconds:Double)`

Seeks the audio stream to certain point in time.

Some streams can't seek backwards. Relative play speed affects time.


<br/>

### `Method stop(voiceHandle:Int)`

Stops the sound.

<br/>

### `Method stopAll()`

Stops all voices.

<br/>

### `Method stopAudioSource(audioSource:TSLAudioSource)`

Stops all voices that play this sound source.

<br/>

### `Method setFilterParameter(voiceHandle:Int, filterId:Int, attributeId:Int, value:Float)`

Sets a live filter parameter.

Use 0 for the global filters.


<br/>

### `Method getFilterParameter:Float(voiceHandle:Int, filterId:Int, attributeId:Int)`

Gets a live filter parameter.

Use 0 for the global filters.


<br/>

### `Method fadeFilterParameter(voiceHandle:Int, filterId:Int, attributeId:Int, _to:Float, time:Double)`

Fades a live filter parameter.

Use 0 for the global filters.


<br/>

### `Method oscillateFilterParameter(voiceHandle:Int, filterId:Int, attributeId:Int, _from:Float, _to:Float, time:Double)`

Oscillates a live filter parameter.

Use 0 for the global filters.


<br/>

### `Method getStreamTime:Double(voiceHandle:Int)`

Gets current play time, in seconds.

<br/>

### `Method getPause:Int(voiceHandle:Int)`

Gets current pause state.

<br/>

### `Method getVolume:Float(voiceHandle:Int)`

Gets current volume.

<br/>

### `Method getOverallVolume:Float(voiceHandle:Int)`

Gets current overall volume (set volume * 3d volume)

<br/>

### `Method getPan:Float(voiceHandle:Int)`

Gets current pan.

<br/>

### `Method getSamplerate:Float(voiceHandle:Int)`

Gets current sample rate.

<br/>

### `Method getProtectVoice:Int(voiceHandle:Int)`

Gets current voice protection state.

<br/>

### `Method getActiveVoiceCount:Int()`

Gets the current number of busy voices.

<br/>

### `Method getVoiceCount:Int()`

Gets the current number of voices in SoLoud

<br/>

### `Method isValidVoiceHandle:Int(voiceHandle:Int)`

Checks if the handle is still valid, or if the sound has stopped.

<br/>

### `Method getRelativePlaySpeed:Float(voiceHandle:Int)`

Gets current relative play speed.

<br/>

### `Method getPostClipScaler:Float()`

Gets current post-clip scaler value.

<br/>

### `Method getGlobalVolume:Float()`

Gets current global volume

<br/>

### `Method getMaxActiveVoiceCount:Int()`

Gets current maximum active voice setting

<br/>

### `Method getLooping:Int(voiceHandle:Int)`

Queries whether a voice is set to loop.

<br/>

### `Method setLooping(voiceHandle:Int, looping:Int)`

Sets voice's loop state.

<br/>

### `Method getAutoStop:Int(voiceHandle:Int)`

Queries whether a voice is set to auto-stop when it ends.

<br/>

### `Method setAutoStop(voiceHandle:Int, autoStop:Int)`

Sets whether sound should auto-stop when it ends.

<br/>

### `Method setMaxActiveVoiceCount:Int(voiceCount:Int)`

Sets current maximum active voice setting.

<br/>

### `Method setInaudibleBehavior(voiceHandle:Int, mustTick:Int, kill:Int)`

Sets behavior for inaudible sounds.

<br/>

### `Method SetGlobalVolume(volume:Float)`

Sets the global volume.

<br/>

### `Method setPostClipScaler(scaler:Float)`

Sets the post clip scaler value.

<br/>

### `Method setPause(voiceHandle:Int, pause:Int)`

Sets the pause state.

<br/>

### `Method setPauseAll(pause:Int)`

Pauses all voices.

<br/>

### `Method setRelativePlaySpeed:Int(voiceHandle:Int, speed:Float)`

Sets the relative play speed.

<br/>

### `Method setProtectVoice(voiceHandle:Int, protect:Int)`

Sets the voice protection state.

<br/>

### `Method setSamplerate(voiceHandle:Int, samplerate:Float)`

Sets the sample rate.

<br/>

### `Method setPan(voiceHandle:Int, pan:Float)`

Sets panning value

-1 is left, 0 is center, 1 is right


<br/>

### `Method SetChannelVolume(voiceHandle:Int, channel:Int, volume:Float)`

Sets absolute left/right volumes.

<br/>

### `Method setVolume(voiceHandle:Int, volume:Float)`

Sets overall volume.

<br/>

### `Method setDelaySamples(voiceHandle:Int, samples:Int)`

Sets delay, in samples, before starting to play samples.

Calling this on a live sound will cause glitches


<br/>

### `Method fadeVolume(voiceHandle:Int, _to:Float, time:Double)`

Sets up volume fader.

<br/>

### `Method fadePan(voiceHandle:Int, _to:Float, time:Double)`

Sets up panning fader.

<br/>

### `Method fadeRelativePlaySpeed(voiceHandle:Int, _to:Float, time:Double)`

Sets up relative play speed fader.

<br/>

### `Method fadeGlobalVolume(_to:Float, time:Double)`

Sets up global volume fader.

<br/>

### `Method schedulePause(voiceHandle:Int, time:Double)`

Schedules a stream to pause.

<br/>

### `Method scheduleStop(voiceHandle:Int, time:Double)`

Schedules a stream to stop.

<br/>

### `Method oscillateVolume(voiceHandle:Int, _from:Float, _to:Float, time:Double)`

Sets up volume oscillator.

<br/>

### `Method oscillatePan(voiceHandle:Int, _from:Float, _to:Float, time:Double)`

Sets up panning oscillator.

<br/>

### `Method oscillateRelativePlaySpeed(voiceHandle:Int, _from:Float, _to:Float, time:Double)`

Sets up relative play speed oscillator.

<br/>

### `Method oscillateGlobalVolume(_from:Float, _to:Float, time:Double)`

Sets up global volume oscillator.

<br/>

### `Method setGlobalFilter(filterId:Int, filter:TSLFilter)`

Set global filters.

Set to [Null](../../../brl/brl.blitz/#null) to clear the filter.


<br/>

### `Method setVisualizationEnable(enable:Int)`

Enables or disables visualization data gathering.

<br/>

### `Method calcFFT:Float Ptr()`

Calculates and gets 256 floats of FFT data for visualization.

Visualization has to be enabled before use.


<br/>

### `Method getWave:Float Ptr()`

Gets 256 floats of wave data for visualization.

Visualization has to be enabled before use.


<br/>

### `Method getApproximateVolume:Float(channel:Int)`

Gets approximate output volume for a channel for visualization.

Visualization has to be enabled before use.


<br/>

### `Method getLoopCount:Int(voiceHandle:Int)`

Gets current loop count.

Not all audio sources update loop count.


#### Returns
0 if handle is not valid.


<br/>

### `Method getInfo:Float(voiceHandle:Int, infoKey:Int)`

Gets audiosource-specific information from a voice.

<br/>

### `Method getStreamPosition:Double(voiceHandle:Int)`

Gets current sample position, in seconds.

<br/>

