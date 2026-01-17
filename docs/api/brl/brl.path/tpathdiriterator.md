---
id: tpathdiriterator
title: TPathDirIterator
sidebar_label: TPathDirIterator
---

Iterator over the direct children of a directory [TPath](../../../brl/brl.path/tpath).



This iterator enumerates entries in a directory using [ReadDir](../../../brl/brl.filesystem/#function-readdirbyte-ptr-pathstring-) and [NextFile](../../../brl/brl.filesystem/#function-nextfilestring-dirbyte-ptr-)
and yields a [TPath](../../../brl/brl.path/tpath) for each child.

The iterator holds an open directory handle while iterating. It should be closed
when no longer needed, either explicitly via [Close](../../../archive/archive.core/twritearchive/#method-closeint) or automatically using a
Using block.


## Functions

### `Function Create:TPathDirIterator(baseDir:TPath, skipDots:Int = True)`

Creates a directory iterator for <b>baseDir</b>.

If <b>baseDir</b> is not a directory or cannot be opened, the iterator yields no items.


<br/>

