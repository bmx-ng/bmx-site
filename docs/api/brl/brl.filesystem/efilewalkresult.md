---
id: efilewalkresult
title: EFileWalkResult
sidebar_label: EFileWalkResult
---

File walk result codes returned by the [IFileWalker](../../../brl/brl.filesystem/ifilewalker)




| Result | Description |
|--------|-------------|
| OK | Continue the file tree traversal. |
| Terminate | Stop the file tree traversal immediately. |
| SkipSubtree | If the current file is a directory, do not traverse its children. |
| SkipSiblings | Do not traverse any more files in the current directory. |



