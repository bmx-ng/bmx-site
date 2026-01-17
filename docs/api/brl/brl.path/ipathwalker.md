---
id: ipathwalker
title: IPathWalker
sidebar_label: IPathWalker
---

Interface for receiving callbacks during a file tree walk.


## Methods

### `Method WalkPath:EFileWalkResult(attributes:SPathAttributes Var)`

Called once for each file/folder traversed.

Return EFileWalkResult.OK to continue the tree traversal, or EFileWalkResult.Terminate to exit early.

Note that the contents of <b>attributes</b> is only valid for the duration of the call.


<br/>

