---
id: brl.path
title: BRL.Path
sidebar_label: Introduction
---


BRL.Path provides an object-oriented, cross-platform way to represent and work with file system paths.

At its core is the [TPath](../../brl/brl.path/tpath) type, which wraps a normalized path string and provides convenient operations for:

* Joining and transforming paths (including the / operator).
* Resolving and relativizing paths (#Resolve and [Relativize](../../brl/brl.path/tpath/#method-relativizetpathothertpath)).
* Querying the filesystem (#Exists, [IsFile](../../brl/brl.path/tpath/#method-isfileint), [IsDir](../../brl/brl.path/tpath/#method-isdirint), [Size](../../brl/brl.path/tpath/#method-sizelong), timestamps, etc).
* Creating, deleting, renaming and copying files/directories.
* Iterating directory contents (#IterDir / [List](../../brl/brl.path/tpath/#method-listtpathskipdotsint-true)).
* Globbing and pattern matching (#Glob, [GlobIter](../../brl/brl.path/tpath/#method-globitertpathiteratorpatternstring-flagsegloboptions-egloboptionsnone), [MatchGlob](../../brl/brl.path/tpath/#method-matchglobintpatternstring-flagsegloboptions-egloboptionsnone)).
* Walking a directory tree (#Walk).

The module is designed to behave consistently whether using the native filesystem or the virtual filesystem when [BRL.Io](../brl/brl_io.md) / MaxIO is enabled.

## Quick start

```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = New TPath("src") / "core" / "main.bmx"

Print p.ToString()   ' src/core/main.bmx
Print p.Name()       ' main.bmx
Print p.BaseName()   ' main
Print p.Extension()  ' bmx
Print p.Parent().ToString() ' src/core
```

## Path normalization

When a [TPath](../../brl/brl.path/tpath) is created, the path is normalized:

* Backslashes are converted to forward slashes (\\ → /).
* Trailing slashes are removed (except for a root path such as /).

This keeps equality comparisons stable and predictable.


## Joining paths

Use [Join](../../brl/brl.path/tpath/#method-jointpathpartstring), [Child](../../brl/brl.path/tpath/#method-childtpathnamestring), or the / operator:

```blitzmax
Local root:TPath = New TPath("/etc")
Local q:TPath = root / "init.d" / "reboot"

Print q.ToString() ' /etc/init.d/reboot
```

If the right-hand side is a rooted path, it replaces the left-hand side:

```blitzmax
Local a:TPath = New TPath("a/b")
Local b:TPath = a / "/x/y"
Print b.ToString() ' /x/y
```

## Resolve and Relativize

Resolve appends a relative path (or replaces the base if the argument is rooted):

```blitzmax
Local base:TPath = New TPath("/a/b")
Local resolved:TPath = base.Resolve("c/d")
Print resolved.ToString() ' /a/b/c/d
```

Relativize constructs a relative path from one path to another:

```blitzmax
Local p:TPath = New TPath("/a/b")
Local q:TPath = New TPath("/a/b/c/d")
Local r:TPath = p.Relativize(q)

Print r.ToString() ' c/d
```

Relativization is the inverse of resolution. For normalized paths p and relative q:

```blitzmax
p.Relativize(p.Resolve(q)).Equals(q)
```

A relative path cannot be constructed if only one of the paths is rooted, or if rooted paths have different root components.

## Querying the filesystem

[TPath](../../brl/brl.path/tpath) exposes filesystem queries through simple methods:

* [Exists](../../brl/brl.path/tpath/#method-existsint)
* [FileType](../../brl/brl.path/tpath/#method-filetypeint), [IsFile](../../brl/brl.path/tpath/#method-isfileint), [IsDir](../../brl/brl.path/tpath/#method-isdirint)
* [Size](../../brl/brl.path/tpath/#method-sizelong)
* [ModifiedTime](../../brl/brl.path/tpath/#method-modifiedtimelong) / [ModifiedDateTime](../../brl/brl.path/tpath/#method-modifieddatetimesdatetime)
* [CreatedTime](../../brl/brl.path/tpath/#method-createdtimelong) / [CreatedDateTime](../../brl/brl.path/tpath/#method-createddatetimesdatetime)

```blitzmax
Local p:TPath = New TPath("README.md")
If p.Exists() Then
	Print "Size: " + p.Size()
	Print "Modified: " + p.ModifiedDateTime().ToString()
End If
```

## Creating, deleting, renaming and copying

```blitzmax
Local dir:TPath = New TPath("build")
dir.CreateDir(True)

Local file:TPath = dir / "out.txt"
file.CreateFile()

file.CopyFileTo(dir / "out_copy.txt")

Local moved:TPath
If file.RenameTo(dir / "moved.txt", moved) Then
	Print "Moved to: " + moved.ToString()
End If
```

## Directory listing

Use [IterDir](../../brl/brl.path/tpath/#method-iterdirtpathdiriteratorskipdotsint-true) to iterate lazily, or [List](../../brl/brl.path/tpath/#method-listtpathskipdotsint-true) to build an array.

The iterator holds an open directory handle while iterating; if you exit early, close it (or use a [Using](../../brl/brl.blitz/#using) block).

```blitzmax
Using
	Local it:TPathDirIterator = New TPath("src").IterDir()
Do
	For Local p:TPath = EachIn it
		Print p.Name()
	Next
End Using
```

## Globbing

[Glob](../../brl/brl.path/tpath/#method-globtpathpatternstring-flagsegloboptions-egloboptionsnone) and [GlobIter](../../brl/brl.path/tpath/#method-globitertpathiteratorpatternstring-flagsegloboptions-egloboptionsnone) expand glob patterns to matching filesystem entries.

Supported pattern features include:

* `*` matches zero or more characters within a segment.
* `?` matches a single character within a segment.
* Character classes: `[abc]`, `[a-z]`, and negated `[!abc]` / `[^abc]`.
* Backslash escaping (unless EGlobOptions.NoEscape is set).
* Brace expansion `{a,b}` (textual expansion before globbing).
* `**` globstar recursion when EGlobOptions.GlobStar is enabled.

By default, wildcard patterns do not match entries whose names begin with ..
Enable EGlobOptions.Period to include dotfiles.

### Iterating results (recommended)

```blitzmax
Using
	Local it:TPathIterator = New TPath("src").GlobIter("**/*.bmx", EGlobOptions.GlobStar)
Do
	For Local p:TPath = EachIn it
		Print p.ToString()
	Next
End Using
```

### Including files in the starting directory

A pattern of the form **/pattern matches only files below the starting directory (because the `/` is required).

To include files in the starting directory as well, combine patterns using brace expansion:

```blitzmax
Local p:TPath = New TPath("examples")

Using
	Local it:TPathIterator = p.GlobIter("{*.bmx,**/*.bmx}", EGlobOptions.GlobStar)
Do
	For Local f:TPath = EachIn it
		Print f.Name()
	Next
End Using
```

## Matching without filesystem access

[MatchGlob](../../brl/brl.path/tpath/#method-matchglobintpatternstring-flagsegloboptions-egloboptionsnone) matches a path against a pattern without touching the filesystem.

This is useful for filtering paths produced by other traversal methods:

```blitzmax
Local p:TPath = New TPath("/path/to/sub/file.txt")
If p.MatchGlob("sub/*.txt") Then
	Print "Matched!"
End If
```

## Walking a file tree

[Walk](../../brl/brl.path/tpath/#method-walkintpathwalkeripathwalker-optionsefilewalkoption-efilewalkoptionnone-maxdepthint-0) traverses a directory tree and calls an [IPathWalker](../../brl/brl.path/ipathwalker) for each entry.

```blitzmax
Type TPrintWalker Implements IPathWalker
	Method WalkPath:EFileWalkResult(attributes:SPathAttributes Var)
		Print attributes.GetPath().ToString()
		Return EFileWalkResult.OK
	End Method
End Type

New TPath(".").Walk(New TPrintWalker)
```

Traversal can be configured using EFileWalkOption (for example, following symlinks) and the maxDepth parameter.

## Resource management and Using

Iterators returned by [IterDir](../../brl/brl.path/tpath/#method-iterdirtpathdiriteratorskipdotsint-true) and [GlobIter](../../brl/brl.path/tpath/#method-globitertpathiteratorpatternstring-flagsegloboptions-egloboptionsnone) may hold native resources (directory handles).
If the iterator is not fully consumed, close it explicitly, or prefer a [Using](../../brl/brl.blitz/#using) block:

```blitzmax
Using
	Local it:TPathIterator = New TPath("src").GlobIter("**/*.bmx", EGlobOptions.GlobStar)
Do
	For Local p:TPath = EachIn it
		Print p.Name()
		Exit ' stop early, resources are still released at End Using
	Next
End Using
```
Provides the [TPath](../../brl/brl.path/tpath) class for representing and manipulating filesystem paths,


## Types
| Type | Description |
|---|---|
| [TPath](../../brl/brl.path/tpath) | Class representing and manipulating file system paths. |
| [TPathDirIterator](../../brl/brl.path/tpathdiriterator) | Iterator over the direct children of a directory [TPath](../../brl/brl.path/tpath). |

## Interfaces
| Interface | Description |
|---|---|
| [IPathWalker](../../brl/brl.path/ipathwalker) | Interface for receiving callbacks during a file tree walk. |

## Structs
| Struct | Description |
|---|---|
| [SPathAttributes](../../brl/brl.path/spathattributes) | Structure representing file or directory attributes. |

