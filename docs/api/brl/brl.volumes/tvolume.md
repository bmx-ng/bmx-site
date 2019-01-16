---
id: tvolume
title: TVolume
sidebar_label: TVolume
---

A system Volume


## Fields

### `Field available:Int`

True if available, false if not.

<br/>

### `Field volumeName:String`

The volume name.

<br/>

### `Field volumeDevice:String`

The device name

<br/>

### `Field volumeType:String`

The system type.

<br/>

### `Field volumeSize:Long`

Cached volume size (in bytes)

For the current size, [Refresh](../../../brl/brl.volumes/tvolume/#method-refresh-abstract) first.


<br/>

### `Field volumeFree:Long`

Cached free space (in bytes)

For the current free space, [Refresh](../../../brl/brl.volumes/tvolume/#method-refresh-abstract) first.


<br/>

## Methods

### `Method Refresh() Abstract`

Refreshes size/free info for the volume.

<br/>

