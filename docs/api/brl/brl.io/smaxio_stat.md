---
id: smaxio_stat
title: SMaxIO_Stat
sidebar_label: SMaxIO_Stat
---

File statistics, including file size, modification time, etc.


## Fields

### `Field _filesize:Long`

The size of the file, in bytes.

<br/>

### `Field _modtime:Long`

The modification time of the file, in seconds since the epoch.

<br/>

### `Field _createtime:Long`

The creation time of the file, in seconds since the epoch.

<br/>

### `Field _accesstime:Long`

The last access time of the file, in seconds since the epoch.

<br/>

### `Field _filetype:EMaxIOFileType`

The type of the file.

<br/>

### `Field _readonly:Int`

Whether the file is read only or not.

<br/>

## Methods

### `Method ModeTimeAsDateTime:SDateTime()`

Returns the file modified time as an [SDateTime](../../../pub/pub.stdc/sdatetime).

<br/>

### `Method CreatTimeAsDateTime:SDateTime()`

Returns the file creation time as an [SDateTime](../../../pub/pub.stdc/sdatetime).

<br/>

### `Method AccessTimeAsDateTime:SDateTime()`

Returns the last access time as an [SDateTime](../../../pub/pub.stdc/sdatetime).

<br/>

