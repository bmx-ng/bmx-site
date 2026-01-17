---
id: tmdblockli
title: TMDBlockLI
sidebar_label: TMDBlockLI
---

A markdown block list item


## Methods

### `Method IsTask:Int()`

Can be non-zero only with MD_FLAG_TASKLISTS

<br/>

### `Method TaskMark:Int()`

If IsTask, then one of `x`, `X` or ` `, otherwise undefined.

<br/>

### `Method TaskMarkOffset:UInt()`

If IsTask, then offset in the input of the char between `[` and `]`.

<br/>

