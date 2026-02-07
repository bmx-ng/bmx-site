---
id: sfileattributes
title: SFileAttributes
sidebar_label: SFileAttributes
---

File attributes


## Fields

### `Field size:ULong`

The size, in bytes, of the file.

<br/>

## Methods

### `Method GetName:String()`

Returns the name of the file/directory.

<br/>

### `Method IsRegularFile:Int()`

Checks if the file is a regular file.

#### Returns
[True](../../../brl/brl.blitz/#true) if the file is a regular file


<br/>

### `Method IsDirectory:Int()`

Checks if the file is a directory.

#### Returns
[True](../../../brl/brl.blitz/#true) if the file is a directory


<br/>

### `Method IsSymbolicLink:Int()`

Checks if the file is a symbolic link.

#### Returns
[True](../../../brl/brl.blitz/#true) if the file is a symbolic link


<br/>

### `Method GetSize:ULong()`

Gets the size of the file in bytes.

#### Returns
The size of the file in bytes


<br/>

### `Method GetDepth:Int()`

Gets the depth of the file in the tree.

#### Returns
The depth of the file in the tree


<br/>

### `Method GetCreationTime:Int()`

Gets the creation time of the file, in seconds since epoch.

#### Returns
The creation time of the file


<br/>

### `Method GetModifiedTime:Int()`

Gets the modified time of the file, in seconds since epoch.

#### Returns
The modified time of the file


<br/>

