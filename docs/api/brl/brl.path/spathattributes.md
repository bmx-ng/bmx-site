---
id: spathattributes
title: SPathAttributes
sidebar_label: SPathAttributes
---

Structure representing file or directory attributes.


## Methods

### `Method GetPath:TPath()`

Return a [TPath](../../../brl/brl.path/tpath) object representing the path of the file/directory.

<br/>

### `Method GetSize:ULong()`

Returns the size of the file/directory in bytes.

<br/>

### `Method GetCreationTime:Int()`

Returns the creation time of the file/directory in seconds since the epoch (January 1, 1970).

<br/>

### `Method GetModifiedTime:Int()`

Returns the modified time of the file/directory in seconds since the epoch (January 1, 1970).

<br/>

### `Method GetDepth:Short()`

Returns the depth of the file/directory in the filesystem hierarchy.

<br/>

### `Method GetName:String()`

Returns the name of the file/directory.

<br/>

### `Method IsRegularFile:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the path represents a regular file.

<br/>

### `Method IsDirectory:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the path represents a directory.

<br/>

### `Method IsSymbolicLink:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the path represents a symbolic link.

<br/>

