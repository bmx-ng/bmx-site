---
id: audio.soloud
title: Audio.SoLoud
sidebar_label: Introduction
---


## Types
| Type | Description |
|---|---|
| [TSoloud](../../audio/audio.soloud/tsoloud) | An instance of the Soloud player. |
| [TSLAudioSource](../../audio/audio.soloud/tslaudiosource) | Base type for audio sources. |
| [TSLSpeech](../../audio/audio.soloud/tslspeech) | Audio source for a Klatt-style formant speech synthesizer. |
| [TSLWav](../../audio/audio.soloud/tslwav) | Audio source for wave sound effects. |
| [TSLWavStream](../../audio/audio.soloud/tslwavstream) | Audio source for streamed wave sounds. |
| [TSLSfxr](../../audio/audio.soloud/tslsfxr) | Audio source for the sfxr sound effect synthesizer. |
| [TSLMonotone](../../audio/audio.soloud/tslmonotone) | Audio source for MONOTONE tracker songs. |
| [TSLTedSid](../../audio/audio.soloud/tsltedsid) | Audio source for TED and SID soundchip register write dumps. |
| [TSLAy](../../audio/audio.soloud/tslay) | Audio source for AY files in ZAK format. |

## Consts

### `Const SO_NO_ERROR:Int = 0`

No error

<br/>

### `Const INVALID_PARAMETER:Int = 1`

Some parameter is invalid

<br/>

### `Const FILE_NOT_FOUND:Int = 2`

File not found

<br/>

### `Const FILE_LOAD_FAILED:Int = 3`

File found, but could not be loaded

<br/>

### `Const DLL_NOT_FOUND:Int = 4`

DLL not found, or wrong DLL

<br/>

### `Const OUT_OF_MEMORY:Int = 5`

Out of memory

<br/>

### `Const NOT_IMPLEMENTED:Int = 6`

Feature not implemented

<br/>

### `Const UNKNOWN_ERROR:Int = 7`

Other error

<br/>

### `Const AUDIOSOURCE_LOOPING:Int = 1`

This audio instance loops (if supported)

<br/>

### `Const AUDIOSOURCE_PROTECTED:Int = 2`

This audio instance is protected - won't get stopped if we run out of voices

<br/>

### `Const AUDIOSOURCE_PAUSED:Int = 4`

This audio instance is paused

<br/>

### `Const AUDIOSOURCE_PROCESS_3D:Int = 8`

This audio instance is affected by 3d processing

<br/>

### `Const AUDIOSOURCE_LISTENER_RELATIVE:Int = 16`

This audio instance has listener-relative 3d coordinates

<br/>

### `Const AUDIOSOURCE_INAUDIBLE:Int = 32`

Currently inaudible

<br/>

### `Const AUDIOSOURCE_INAUDIBLE_KILL:Int = 64`

If inaudible, should be killed (default = don't kill kill)

<br/>

### `Const AUDIOSOURCE_INAUDIBLE_TICK:Int = 128`

If inaudible, should still be ticked (default = pause)

<br/>

