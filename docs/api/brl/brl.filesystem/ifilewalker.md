---
id: ifilewalker
title: IFileWalker
sidebar_label: IFileWalker
---

An interface for file tree traversal.


## Methods

### `Method WalkFile:EFileWalkResult(attributes:SFileAttributes Var)`

Called once for each file/folder traversed.

Return EFileWalkResult.OK to continue the tree traversal, or EFileWalkResult.Terminate to exit early.

The contents of <b>attributes</b> is only valid for the duration of the call.


<br/>

