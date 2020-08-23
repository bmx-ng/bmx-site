---
id: tslwavstream
title: TSLWavStream
sidebar_label: TSLWavStream
---

Audio source for streamed wave sounds.


The source files may be in various RIFF WAV file formats, FLAC, MP3 or Ogg Vorbis files.
The sounds are loaded in pieces while they are playing, which takes more processing power than playing samples from memory, but they require much less memory.

For short or often used samples, you may want to use [TSLWav](../../../audio/audio.soloud/tslwav) instead.


## Methods

### `Method setVolume(volume:Float) Override`

Sets default volume for instances.

<br/>

### `Method setLooping(loop:Int) Override`

Sets the looping of the instances created from this audio source.

<br/>

### `Method setAutoStop(autoStop:Int) Override`

Sets whether audio should auto-stop when it ends or not.

<br/>

### `Method set3dMinMaxDistance(minDistance:Float, maxDistance:Float) Override`

Sets the minimum and maximum distances for 3d audio source (closer to min distance = max vol)

<br/>

### `Method set3dAttenuation(attenuationModel:Int, attenuationRolloffFactor:Float) Override`

Sets attenuation model and rolloff factor for 3d audio source.

<br/>

### `Method set3dDopplerFactor(dopplerFactor:Float) Override`

Sets doppler factor to reduce or enhance doppler effect, default = 1.0

<br/>

### `Method set3dListenerRelative(listenerRelative:Int) Override`

Enables 3d processing.

Implicitly set by play3d calls.


<br/>

### `Method set3dDistanceDelay(distanceDelay:Int) Override`

Sets the coordinates for this audio source to be relative to listener's coordinates.

<br/>

### `Method set3dCollider(collider:TSLAudioCollider) Override`

Enables delaying the start of the sound based on the distance.

<br/>

### `Method set3dColliderEx(collider:TSLAudioCollider, userData:Int) Override`

Sets a custom 3d audio collider.

Set to Null to disable.


<br/>

### `Method set3dAttenuator(attenuator:TSLAudioAttenuator) Override`

Sets a custom attenuator.

Set to Null to disable.


<br/>

### `Method setInaudibleBehavior(mustTick:Int, kill:Int) Override`

Sets behavior for inaudible sounds.

<br/>

### `Method setFilter(filterId:Int, filter:TSLFilter) Override`

Sets filter.

Set to NULL to clear the filter.


<br/>

### `Method stop() Override`

Stops all instances of this audio source.

<br/>

