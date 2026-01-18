---
id: brl.glob
title: BRL.Glob
sidebar_label: Introduction
---


# File Globbing in BlitzMax

File globbing is a powerful pattern-matching mechanism used to select files and directories
based on wildcard expressions. BlitzMax provides comprehensive glob support via the
[BRL.Glob](../brl/brl_glob.md) and [BRL.FileSystem](../brl/brl_filesystem.md) modules, with integration into higher-level APIs such as
[TPath](../../brl/brl.path/tpath).

This document describes the supported glob patterns, options, and usage conventions.

---

## What Is a Glob?

A *glob* is a string pattern that matches file system paths. Instead of specifying an exact
file name, you describe a *set* of possible matches using wildcard characters.

For example:

* `*.txt` matches all text files in a directory
* `src/**/*.bmx` matches all `.bmx` files anywhere under `src`

---

## Basic Wildcards

### `*` — Match Any Characters (Single Segment)

The asterisk (`*`) matches zero or more characters **within a single path segment**.

Examples:

* `*.bmx` → matches `main.bmx`, `test.bmx`
* `file*` → matches `file`, `file1`, `filename`

It does **not** cross directory boundaries:

* `*/*.bmx` matches `src/main.bmx`
* It does **not** match `src/utils/main.bmx`

---

### `?` — Match One Character

The question mark (`?`) matches exactly one character within a path segment.

Examples:

* `file?.txt` → matches `file1.txt`, `fileA.txt`
* Does **not** match `file10.txt`

---

## Character Classes

Character classes match one character from a defined set.

### `[abc]`

Matches one of the listed characters.

* `file[ab].txt` → matches `filea.txt`, `fileb.txt`

### `[a-z]`

Matches a character in a range.

* `[0-9].txt` → matches `1.txt`, `9.txt`

### Negated Classes

Negation can be written as either `!` or `^`.

* `[!a-z]`
* `[^a-z]`

These match any character *not* in the range.

---

## Path Separators

Glob patterns use `/` as the path separator, regardless of platform.

This ensures consistent behavior across:

* Windows
* macOS
* Linux
* Virtual filesystems ( [BRL.Io](../brl/brl_io.md) / [MaxIO](../../brl/brl.io/maxio) )

---

## Globstar: `**`

When the `EGlobOptions.GlobStar` flag is enabled, the special segment `**` matches **zero or more directory levels**.

Examples:

* `**/*.bmx` → all `.bmx` files recursively
* `src/**/test*.bmx` → matches tests at any depth under `src`

Important note:

* `**/*.txt` does **not** match files in the starting directory
* To include them, use brace expansion:
  `{*.txt,**/*.txt}`

---

## Dotfiles and the `Period` Flag

By default, wildcard patterns do **not** match entries whose names begin with `.`.

For example:

* `*` does **not** match `.gitignore`

To include dotfiles, enable:
  EGlobOptions.Period

---

## Case Sensitivity

Matching is case-sensitive by default.

To enable case-insensitive matching, use:
   EGlobOptions.CaseFold

This affects:

* `*`
* `?`
* character classes

---

## Escaping Metacharacters

By default, metacharacters can be escaped using backslash (`\`):

* `\*` matches a literal `*`
* `\[` matches a literal `[`
* `\{` matches a literal `{`

To disable escaping entirely, use:
   EGlobOptions.NoEscape

---

## Brace Expansion `{a,b}`

Brace expansion allows you to expand a pattern into multiple alternatives *before*
globbing occurs.

Example:

* `{a,b}.txt` expands to:
  * `a.txt`
  * `b.txt`

More complex examples:

* `src/{core,ui}/*.bmx`
* `{*.txt,**/*.txt}`

### Nested Braces

Brace expressions may be nested:

* `{a,{b,c}}.txt`

### Expansion Rules

* Expansion is purely textual
* Only braces containing a **top-level comma** are expanded
* Unterminated or malformed braces are treated as literal text
* Escaped braces (`\{`, `\}`) are not expanded

---

## Rooted vs Relative Patterns

### Rooted Patterns

Patterns starting with a root (`/` or drive root on Windows) are treated as absolute.

* Base directory is ignored
* Results are absolute paths

### Relative Patterns

If a pattern is not rooted:

* Matching starts from `baseDir` if supplied
* Otherwise, from the current directory

Results are returned as **relative paths**.

---

## Filtering Flags

Additional flags allow result filtering:

* `OnlyDir` → return directories only
* `NoDir` → exclude directories
* `Mark` → append `/` to directory matches
* `NoSort` → preserve filesystem order

---

## APIs

### Eager Globbing

[Glob](../../brl/brl.glob/#function-globstringpatternstring-flagsegloboptions-egloboptionsnone-basedirstring-) returns all matches as an array.

### Lazy Globbing (Iterators)

[GlobIter](../../brl/brl.glob/#function-globitertglobiterpatternstring-flagsegloboptions-egloboptionsnone-basedirstring-) returns an iterator that yields matches on demand.

Iterators should be closed if not fully consumed.
Use a [Using](../../brl/brl.blitz/#using) block to ensure cleanup:

```blitzmax
Using
    Local it:TGlobIter = GlobIter("**/*.bmx", EGlobOptions.GlobStar)
Do
    For Local s:String = EachIn it
        Print s
    Next
End Using
```

## Matching Paths Without Filesystem Access (MatchGlob)

[MatchGlob](../../brl/brl.glob/#function-matchglobintpatternstring-pathstring-flagsegloboptions-egloboptionsnone) compares a glob pattern against a single path as a string, without accessing the filesystem.

This function returns [True](../../brl/brl.blitz/#true) if <b>path</b> matches the glob <b>pattern</b> according to the same
matching rules used by [Glob](../../brl/brl.glob/#function-globstringpatternstring-flagsegloboptions-egloboptionsnone-basedirstring-), and [False](../../brl/brl.blitz/#false) otherwise.

Unlike [Glob](../../brl/brl.glob/#function-globstringpatternstring-flagsegloboptions-egloboptionsnone-basedirstring-) and [GlobIter](../../brl/brl.glob/#function-globitertglobiterpatternstring-flagsegloboptions-egloboptionsnone-basedirstring-), [MatchGlob](../../brl/brl.glob/#function-matchglobintpatternstring-pathstring-flagsegloboptions-egloboptionsnone):

* Does not read directories
* Does not require the path to exist
* Performs no filesystem I/O

It is purely a pattern-matching operation.

---

### What is MatchGlob used for?

[MatchGlob](../../brl/brl.glob/#function-matchglobintpatternstring-pathstring-flagsegloboptions-egloboptionsnone) is useful when you already have a path (or a list of paths) and want to filter them using glob syntax.

Common use cases include:

* Filtering results from WalkFileTree
* Matching paths obtained from another source (archives, manifests, logs)
* Applying glob rules to virtual or conceptual paths
* Implementing ignore/include filters (similar to .gitignore)

---

### Path-aware matching

[MatchGlob](../../brl/brl.glob/#function-matchglobintpatternstring-pathstring-flagsegloboptions-egloboptionsnone) is path-aware and understands directory separators.

If <b>pattern</b> contains no path separators (/), it is matched only against the
final path segment (the file or directory name).

Example:
```
MatchGlob("*.txt", "/data/files/readme.txt") ' True
```

If <b>pattern</b> contains path separators, it is matched against the trailing
segments of <b>path</b>.

Example:
```
MatchGlob("sub/*.txt", "/root/sub/file.txt") ' True
```

This allows relative patterns to match absolute paths naturally.

---

### Rooted patterns

If <b>pattern</b> is rooted (for example, starts with / on Unix),
then <b>path</b> must also be rooted at the same location for a match to succeed.

Rooted and non-rooted paths cannot be mixed.

---

Supported syntax
[MatchGlob](../../brl/brl.glob/#function-matchglobintpatternstring-pathstring-flagsegloboptions-egloboptionsnone) supports the same pattern features as filesystem globbing:

* `*` and `?` wildcards
* Character classes (`[a-z]`, `[!abc]`)
* Brace expansion (`{a,b}`)
* Backslash escaping (unless `NoEscape` is set)
* Globstar (`**`) when EGlobOptions.GlobStar is enabled
* Case folding via EGlobOptions.CaseFold
* Dotfile matching via EGlobOptions.Period

Example:
```
Local path:String = "/src/core/main.bmx"

If MatchGlob("src/**/main.bmx", path, EGlobOptions.GlobStar) Then
    Print "Matched!"
End If
```

---

### Notes

* [MatchGlob](../../brl/brl.glob/#function-matchglobintpatternstring-pathstring-flagsegloboptions-egloboptionsnone) does not check whether the path exists
* Directory vs file type is not considered
* Trailing slashes are matched literally

If you need filesystem-aware matching (for example, checking whether a matched path
is a directory), use [Glob](../../brl/brl.glob/#function-globstringpatternstring-flagsegloboptions-egloboptionsnone-basedirstring-), [GlobIter](../../brl/brl.glob/#function-globitertglobiterpatternstring-flagsegloboptions-egloboptionsnone-basedirstring-), or [TPath](../../brl/brl.path/tpath) based APIs instead.

## Virtual Filesystem Support

All glob functionality works identically when [BRL.Io](../brl/brl_io.md) / [MaxIO](../../brl/brl.io/maxio) is enabled.

This allows globbing over:

* Mounted archives
* Virtual directories
* Packaged game assets

---

## Performance Notes

* Prefer iterators for large directory trees
* Avoid unnecessary ** at high directory levels
* Combine patterns with brace expansion instead of multiple glob calls


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

