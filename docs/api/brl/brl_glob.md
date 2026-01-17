---
id: brl.glob
title: BRL.Glob
sidebar_label: Introduction
---


## Types
| Type | Description |
|---|---|
| [TGlobIter](../../brl/brl.glob/tglobiter) | An iterator that yields all paths matching the given glob pattern. |

## Enums
| Enum | Description |
|---|---|
| [EGlobOptions](../../brl/brl.glob/egloboptions) | File globbing options |

## Functions

### `Function Glob:String[](pattern:String, flags:EGlobOptions = EGlobOptions.None, baseDir:String = "")`

Performs file globbing.


Expands a glob <b>pattern</b> into an array of matching files and/or directories.

The glob pattern supports the following constructs:

* `*` matches zero or more characters within a single path segment.
* `?` matches exactly one character within a single path segment.
* Character classes such as `[abc]`, `[a-z]`, and negated classes `[!abc]` or `[^abc]`.
* Backslash escaping of metacharacters (unless the EGlobOptions.NoEscape flag is set).
* The `**` globstar operator (when EGlobOptions.GlobStar is enabled) to match zero or more directory levels.

By default, wildcard patterns do not match entries whose names begin with `.`.
This behavior can be changed by enabling the EGlobOptions.Period flag.

Brace expansion using curly braces is supported.

A pattern of the form `{a,b}` is expanded into multiple patterns before globbing is performed. For example:

* `"src/{core,ui}/*.bmx"` expands to `"src/core/*.bmx"` and `"src/ui/*.bmx"`.

Brace expressions may be nested. Expansion is purely textual and occurs before any wildcard matching.

Only brace expressions containing at least one top-level comma are expanded.
Malformed or unterminated brace expressions are treated as literal text.

Note that `**/pattern` matches only files below the starting directory.
To include files in the starting directory, combine with pattern using brace expansion.
For example, `{pattern,**/pattern}`.

Backslash-escaped braces (`\{` and `\}`) are treated literally unless EGlobOptions.NoEscape is specified.

If <b>pattern</b> is not rooted, globbing begins relative to <b>baseDir</b> if supplied,
or the current directory as returned by [CurrentDir](../../brl/brl.filesystem/#function-currentdirstring).
If <b>pattern</b> is rooted, <b>baseDir</b> is ignored and matching begins at the root.

The returned paths are:

* Rooted paths if <b>pattern</b> is rooted.
* Paths relative to <b>baseDir</b> (or the current directory) if <b>pattern</b> is not rooted.

The <b>flags</b> parameter controls additional matching behavior and result filtering.
See [EGlobOptions](../../brl/brl.glob/egloboptions) for details.

The globbing implementation works consistently for both the native filesystem
and the virtual filesystem when [BRL.Io](../brl/brl_io.md) / [MaxIO](../../brl/brl.io/maxio) is enabled.


<br/>

### `Function MatchGlob:Int(pattern:String, path:String, flags:EGlobOptions = EGlobOptions.None)`

Matches a path against a glob pattern.


Checks whether a file path <b>path</b> matches the glob <b>pattern</b>.

The matching rules are identical to those used by [Glob](../../brl/brl.glob/#function-globstringpatternstring-flagsegloboptions-egloboptionsnone-basedirstring-), including support for
wildcards (`*`, `?`), character classes (`[ ]`), escaping, and the `**` globstar
operator when EGlobOptions.GlobStar is enabled.

Brace expansion using curly braces is supported.

Brace expressions such as `{a,b}` are expanded into multiple patterns before
matching is performed. For example, `"sub/{a,b}.txt"` is equivalent to matching
against `"sub/a.txt"` or `"sub/b.txt"`.

Only well-formed brace expressions containing at least one top-level comma are
expanded. Escaped or malformed brace expressions are treated as literal text.

Note that `**/pattern` matches only files below the starting directory.
To include files in the starting directory, combine with pattern using brace expansion.
For example, `{pattern,**/pattern}`.

If <b>pattern</b> does not contain any path separators (`/`), it is matched only against
the final path segment of <b>path</b> (the file or directory name).

If <b>pattern</b> contains path separators and is not rooted, it is matched against the
trailing segments of <b>path</b>. This allows relative patterns such as `"sub/*.txt"`
to match absolute paths like `"/path/to/sub/file.txt"`.

If <b>pattern</b> is rooted, <b>path</b> must also be rooted at the same location for a match
to succeed.

The <b>flags</b> parameter controls matching behavior such as case folding, dotfile
matching, globstar support, and escaping. See [EGlobOptions](../../brl/brl.glob/egloboptions) for details.

This function performs no filesystem access and does not require the path to exist.


<br/>

### `Function GlobIter:TGlobIter(pattern:String, flags:EGlobOptions = EGlobOptions.None, baseDir:String = "")`

Performs file globbing.


Expands a glob <b>pattern</b> into an iterator of matching files and/or directories.

The glob pattern supports the following constructs:

* `*` matches zero or more characters within a single path segment.
* `?` matches exactly one character within a single path segment.
* Character classes such as `[abc]`, `[a-z]`, and negated classes `[!abc]` or `[^abc]`.
* Backslash escaping of metacharacters (unless the EGlobOptions.NoEscape flag is set).
* The `**` globstar operator (when EGlobOptions.GlobStar is enabled) to match zero or more directory levels.

By default, wildcard patterns do not match entries whose names begin with `.`.
This behavior can be changed by enabling the EGlobOptions.Period flag.

Brace expansion using curly braces is supported.

A pattern of the form `{a,b}` is expanded into multiple patterns before globbing is performed. For example:

* `"src/{core,ui}/*.bmx"` expands to `"src/core/*.bmx"` and `"src/ui/*.bmx"`.

Brace expressions may be nested. Expansion is purely textual and occurs before any wildcard matching.

Only brace expressions containing at least one top-level comma are expanded.
Malformed or unterminated brace expressions are treated as literal text.

Note that `**/pattern` matches only files below the starting directory.
To include files in the starting directory, combine with pattern using brace expansion.
For example, `{pattern,**/pattern}`.

Backslash-escaped braces (`\{` and `\}`) are treated literally unless EGlobOptions.NoEscape is specified.

If <b>pattern</b> is not rooted, globbing begins relative to <b>baseDir</b> if supplied,
or the current directory as returned by [CurrentDir](../../brl/brl.filesystem/#function-currentdirstring).
If <b>pattern</b> is rooted, <b>baseDir</b> is ignored and matching begins at the root.

The returned paths are:

* Rooted paths if <b>pattern</b> is rooted.
* Paths relative to <b>baseDir</b> (or the current directory) if <b>pattern</b> is not rooted.

The <b>flags</b> parameter controls additional matching behavior and result filtering.
See [EGlobOptions](../../brl/brl.glob/egloboptions) for details.

The globbing implementation works consistently for both the native filesystem
and the virtual filesystem when [BRL.Io](../brl/brl_io.md) / [MaxIO](../../brl/brl.io/maxio) is enabled.

The returned iterator should be closed if not fully consumed, to release any held resources.
This can be done manually by calling [Close](../../archive/archive.core/twritearchive/#method-closeint)(), or automatically via a [Using](../../brl/brl.blitz/#using) block.
For example:
```blitzmax
Using
Local it:TGlobIter = GlobIter("src/**/*.bmx", EGlobOptions.GlobStar, "base/dir")
Do
For Local s:String = EachIn it
If s = "src/some/specific/file.bmx" Then
Print "Found it!"
Exit
End If
Next
End Using
```


<br/>

