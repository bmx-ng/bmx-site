---
id: tpath
title: TPath
sidebar_label: TPath
---

Class representing and manipulating file system paths.


## Constructors

### `Method New(path:String)`

Creates a [TPath](../../../brl/brl.path/tpath) object from a string path.

<br/>

## Operators

### `Method Operator/:TPath(part:String)`

Joins the current path with another string path using the / operator.

Allows you to write in the form:
```
Local p:TPath = New TPath("/etc") / "init.d" / "reboot"
```


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local root:TPath = New TPath("/etc")
Local p:TPath = root / "init.d" / "reboot"

Print p.ToString() ' /etc/init.d/reboot
```
<br/>

### `Method Operator/:TPath(other:TPath)`

Joins the current path with another [TPath](../../../brl/brl.path/tpath) using the / operator.

<br/>

## Methods

### `Method ToString:String() Override`

Returns the string representation of the path.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = New TPath("a/b/c.txt")
Print p.ToString() ' a/b/c.txt
```
<br/>

### `Method Equals:Int(other:Object) Override`

Compares this path with another object for equality.

Returns [True](../../../brl/brl.blitz/#true) if the other object is a [TPath](../../../brl/brl.path/tpath) and represents the same path.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local a:TPath = New TPath("a/b/")
Local b:TPath = New TPath("a\b")

Print a.Equals(b) ' True
```
<br/>

### `Method Compare:Int(other:Object) Override`

Compares this path with another object for ordering.

Returns a negative value if this path is less than the other path,
zero if they are equal, and a positive value if this path is greater than the other path.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local a:TPath = New TPath("a/b")
Local b:TPath = New TPath("a/c")

Print a.Compare(b) ' negative value
Print b.Compare(a) ' positive value
Print a.Compare(a) ' 0
```
<br/>

### `Method HashCode:UInt() Override`

Returns a hash code for the path.

This uses the hash code of the underlying string path.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local a:TPath = New TPath("a/b/")
Local b:TPath = New TPath("a\b")

Print a.HashCode()
Print b.HashCode()
```
<br/>

### `Method Name:String()`

Returns the name of the file or directory represented by the path.

This is equivalent to the last component of the path.
For example, for the path "/etc/init.d/reboot", this method would return "reboot".


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p1:TPath = New TPath("/etc/init.d/reboot")
Local p2:TPath = New TPath("src/main.bmx")
Local p3:TPath = New TPath("/home/user/.bashrc")

Print p1.Name() ' reboot
Print p2.Name() ' main.bmx
Print p3.Name() ' .bashrc
```
<br/>

### `Method BaseName:String()`

Returns the base name of the file without its extension.

For example, for the path "/etc/init.d/reboot.sh", this method would return "reboot".
Files beginning with a dot (e.g., ".bashrc") are treated as having no extension.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p1:TPath = New TPath("/etc/init.d/reboot.sh")
Local p2:TPath = New TPath("archive.tar.gz")
Local p3:TPath = New TPath(".gitignore")

Print p1.BaseName() ' reboot
Print p2.BaseName() ' archive.tar
Print p3.BaseName() ' .gitignore
```
<br/>

### `Method Extension:String()`

Returns the extension of the file.

For example, for the path "/etc/init.d/reboot.sh", this method would return "sh".
Files beginning with a dot (e.g., ".bashrc") are treated as having no extension.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p1:TPath = New TPath("/etc/init.d/reboot.sh")
Local p2:TPath = New TPath("archive.tar.gz")
Local p3:TPath = New TPath(".gitignore")

Print p1.Extension() ' sh
Print p2.Extension() ' gz
Print p3.Extension() ' (empty string)
```
<br/>

### `Method Parent:TPath()`

Returns the parent directory of the path as a [TPath](../../../brl/brl.path/tpath) object.

For example, for the path "/etc/init.d/reboot", this method would return a [TPath](../../../brl/brl.path/tpath) representing "/etc/init.d".
For root paths, returns the same [TPath](../../../brl/brl.path/tpath) instance.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = New TPath("/etc/init.d/reboot")

Print p.Parent().ToString() ' /etc/init.d
```
<br/>

### `Method Join:TPath(part:String)`

Joins the current path with another string path.

If the provided path is rooted, it replaces the current path.
Otherwise, it appends the provided path to the current path.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = New TPath("src")
Local q:TPath = p.Join("main.bmx")

Print q.ToString() ' src/main.bmx
```
<br/>

### `Method Join:TPath(other:TPath)`

Joins the current path with another [TPath](../../../brl/brl.path/tpath).

If the provided path is rooted, it replaces the current path.
Otherwise, it appends the provided path to the current path.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local src:TPath = New TPath("src")
Local main:TPath = New TPath("main.bmx")
Local q:TPath = src.Join(main)

Print q.ToString() ' src/main.bmx
```
<br/>

### `Method Child:TPath(name:String)`

Joins the current path with another [TPath](../../../brl/brl.path/tpath).

If the provided path is rooted, it replaces the current path.
Otherwise, it appends the provided path to the current path.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = New TPath("src")
Local q:TPath = p.Child("main.bmx")

Print q.ToString() ' src/main.bmx
```
<br/>

### `Method Child:TPath(other:TPath)`

Joins the current path with another [TPath](../../../brl/brl.path/tpath).

If the provided path is rooted, it replaces the current path.
Otherwise, it appends the provided path to the current path.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local src:TPath = New TPath("src")
Local main:TPath = New TPath("main.bmx")
Local q:TPath = src.Child(main)

Print q.ToString() ' src/main.bmx
```
<br/>

### `Method Resolve:TPath(other:TPath)`

Resolves the provided [TPath](../../../brl/brl.path/tpath) against the current path.

If the provided path is rooted, it is returned as-is.
Otherwise, it is appended to the current path.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath("/a/b")

Local rel:TPath = New TPath("c/d")
Local rooted:TPath = New TPath("/x/y")

Print base.Resolve(rel).ToString()    ' /a/b/c/d
Print base.Resolve(rooted).ToString() ' /x/y
```
<br/>

### `Method Resolve:TPath(part:String)`

Resolves the provided string path against the current path.

If the provided path is rooted, it is returned as a new [TPath](../../../brl/brl.path/tpath).
Otherwise, it is appended to the current path.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath("/a/b")

Local p1:TPath = base.Resolve("c/d")
Local p2:TPath = base.Resolve("/x/y")

Print p1.ToString() ' /a/b/c/d
Print p2.ToString() ' /x/y
```
<br/>

### `Method Relativize:TPath(other:TPath)`

Returns a [TPath](../../../brl/brl.path/tpath) representing the relative path from this path to another path.

For example, if this path is "/a/b/c" and the other path is "/a/d/e",
this method would return a [TPath](../../../brl/brl.path/tpath) representing "../../d/e".


#### Example 1
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = New TPath("/a/b")
Local q:TPath = New TPath("/a/b/c/d")

Local r:TPath = p.Relativize(q)

Print r.ToString() ' c/d
```
#### Example 2
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = New TPath("/a/b/c")
Local q:TPath = New TPath("/a/d/e")

Local r:TPath = p.Relativize(q)

Print r.ToString() ' ../../d/e
```
<br/>

### `Method Real:TPath()`

Returns the real (absolute) path as a [TPath](../../../brl/brl.path/tpath) object.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = New TPath(".")

Print p.Real().ToString()
```
<br/>

### `Method Exists:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the path exists.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "hello.txt"
f.CreateFile()

Print f.Exists()  ' True
Print f.IsFile()  ' True
Print base.IsDir() ' True

' Cleanup
f.DeleteFile()
base.DeleteDir(True)
```
<br/>

### `Method FileType:Int()`

Returns the type of the path: FILETYPE_FILE, FILETYPE_DIR, or FILETYPE_NONE.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "a.txt"
f.CreateFile()

Print base.FileType() ' FILETYPE_DIR (2)
Print f.FileType()    ' FILETYPE_FILE (1)

Print base.IsDir()    ' True
Print f.IsFile()      ' True

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method IsFile:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the path represents a file.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "a.txt"
f.CreateFile()

Print f.IsFile() ' True
Print f.IsDir()  ' False

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method IsDir:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the path represents a directory.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
Local dir:TPath = base / "sub"

dir.CreateDir(True)

Print dir.IsDir()  ' True
Print dir.IsFile() ' False

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method Size:Long()`

Returns the size of the file in bytes.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "a.txt"
Using
	Local s:TStream = f.Write()
Do
	s.WriteString("hello")
End Using

Print f.Size() ' 5

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method ModifiedTime:Long()`

Returns the last modified time of the file, representing the number of seconds since the epoch (January 1, 1970).

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "a.txt"
Using
	Local s:TStream = f.Write()
Do
	s.WriteString("x")
End Using

Print f.ModifiedTime()

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method ModifiedDateTime:SDateTime()`

Returns the last modified date and time of the file as an SDateTime structure.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "a.txt"
Using
	Local s:TStream = f.Write()
Do
	s.WriteString("x")
End Using

Print f.ModifiedDateTime().ToString()

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method CreatedTime:Long()`

Returns the creation time of the file, representing the number of seconds since the epoch (January 1, 1970).

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "a.txt"
f.CreateFile()

Print f.CreatedTime()

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method CreatedDateTime:SDateTime()`

Returns the creation date and time of the file as an SDateTime structure.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "a.txt"
f.CreateFile()

Print f.CreatedDateTime().ToString()

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method Open:TStream(readable:Int = True, writeable:Int = True)`

Opens the path as a stream.

By default, the stream is opened for both reading and writing.
The <b>readable</b> and <b>writeable</b> parameters can be used to control the access mode.
Note that if both are set to [True](../../../brl/brl.blitz/#true), the file should already exist.

The stream must be closed after use to ensure data is flushed to disk and to avoid resource leaks.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "rw.txt"
f.CreateFile()

Using
	Local s:TStream = f.Open(True, True)
Do
	s.WriteString("abc")
	s.Seek(0)
	Print s.ReadString(3) ' abc
End Using

' Cleanup
f.DeleteFile()
base.DeleteDir(True)
```
<br/>

### `Method Read:TStream()`

Opens the path for reading as a stream.

The stream must be closed after use to avoid resource leaks.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "msg.txt"

Using
	Local s:TStream = f.Write()
Do
	s.WriteString("hello")
End Using

Using
	Local r:TStream = f.Read()
Do
	Print r.ReadString(Int(r.Size())) ' hello
End Using

' Cleanup
f.DeleteFile()
base.DeleteDir(True)
```
<br/>

### `Method Write:TStream()`

Opens the path for writing as a stream.

If the file does not exist, it will be created. If it does exist, it will be truncated.

The stream must be closed after use to ensure data is flushed to disk and to avoid resource leaks.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "msg.txt"

Using
	Local s:TStream = f.Write()
Do
	s.WriteString("hello")
End Using

Print f.Size() ' 5

' Cleanup
f.DeleteFile()
base.DeleteDir(True)
```
<br/>

### `Method CreateFile:Int()`

Creates an empty file at the path.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "empty.txt"
f.CreateFile()

Print f.Exists() ' True
Print f.Size()   ' 0 (typically)

' Cleanup
f.DeleteFile()
base.DeleteDir(True)
```
<br/>

### `Method CreateDir:Int(recurse:Int = False)`

Creates a directory at the path.

If the directory already exists, this method does nothing and returns success.
If the <b>recurse</b> parameter is set to [True](../../../brl/brl.blitz/#true), any necessary parent directories will also be created.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())

Local nested:TPath = base / "a" / "b" / "c"
nested.CreateDir(True)

Print nested.Exists() ' True
Print nested.IsDir()  ' True

' Cleanup (remove the whole tree)
base.DeleteDir(True)
```
<br/>

### `Method DeleteFile:Int()`

Deletes the file at the path.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local f:TPath = base / "tmp.txt"
f.CreateFile()

Print f.Exists() ' True
f.DeleteFile()
Print f.Exists() ' False

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method DeleteDir:Int(recurse:Int = False)`

Deletes the directory at the path.

If the <b>recurse</b> parameter is set to [True](../../../brl/brl.blitz/#true), the directory and all its contents will be deleted.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
(base / "sub").CreateDir(True)

Using
	Local s:TStream = (base / "sub" / "a.txt").Write()
Do
	s.WriteString("x")
End Using

Print base.Exists() ' True
base.DeleteDir(True)
Print base.Exists() ' False
```
<br/>

### `Method RenameTo:Int(dst:TPath, newPath:TPath Var)`

Renames or moves the path to the destination path.

Returns [True](../../../brl/brl.blitz/#true) on success, and populates <b>newPath</b> with the new path.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local src:TPath = base / "src.txt"
Local dst:TPath = base / "dst.txt"

Using
	Local s:TStream = src.Write()
Do
	s.WriteString("data")
End Using

Local moved:TPath
If src.RenameTo(dst, moved) Then
	Print "Moved to: " + moved.ToString()
End If

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method RenameTo:Int(dst:TPath)`

Renames or moves the path to the destination path.

Returns [True](../../../brl/brl.blitz/#true) on success.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local a:TPath = base / "a.txt"
Local b:TPath = base / "b.txt"

Using
	Local s:TStream = a.Write()
Do
	s.WriteString("hello")
End Using

Print a.Exists() ' True
Print b.Exists() ' False

a.RenameTo(b)

Print a.Exists() ' False
Print b.Exists() ' True

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method CopyFileTo:Int(dst:TPath)`

Copies the file at the path to the destination path.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
base.CreateDir(True)

Local src:TPath = base / "src.txt"
Local dst:TPath = base / "dst.txt"

Using
	Local s:TStream = src.Write()
Do
	s.WriteString("copy me")
End Using

src.CopyFileTo(dst)

Print src.Size() ' 7
Print dst.Size() ' 7

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method CopyDirTo:Int(dst:TPath)`

Copies the directory at the path to the destination path.

If the destination directory does not exist, it will be created.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
Local src:TPath = base / "src"
Local dst:TPath = base / "dst"

(src / "sub").CreateDir(True)

Using
	Local s:TStream = (src / "a.txt").Write()
Do
	s.WriteString("A")
End Using

Using
	Local s:TStream = (src / "sub" / "b.txt").Write()
Do
	s.WriteString("B")
End Using

src.CopyDirTo(dst)

Print (dst / "a.txt").Exists()      ' True
Print (dst / "sub" / "b.txt").Exists() ' True

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method WithExtension:TPath(ext:String)`

Returns a new [TPath](../../../brl/brl.path/tpath) with the specified extension.

If the provided extension starts with a dot, it will be removed.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = New TPath("archive.tar.gz")

Print p.ToString()                 ' archive.tar.gz
Print p.WithExtension("zip").ToString()       ' archive.tar.zip
Print p.WithExtension(".txt").ToString()      ' archive.tar.txt
Print p.WithExtension("").ToString()          ' archive.tar
```
<br/>

### `Method WithName:TPath(name:String)`

Returns a new [TPath](../../../brl/brl.path/tpath) with the specified name in the same directory.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = New TPath("src/main.bmx")

Local q:TPath = p.WithName("app.bmx")

Print p.ToString() ' src/main.bmx
Print q.ToString() ' src/app.bmx
```
<br/>

### `Method IterDir:TPathDirIterator(skipDots:Int = True)`

Returns an iterator over the direct children of this directory.


Enumerates entries directly contained in this path (non-recursive) and yields a [TPath](../../../brl/brl.path/tpath)
for each entry.

The returned iterator should be closed if not fully consumed, either by calling [Close](../../../archive/archive.core/twritearchive/#method-closeint)
or by using a [Using](../../../brl/brl.blitz/#using) block.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local dir:TPath = New TPath(".")

Using
	Local it:TPathDirIterator = dir.IterDir()
Do
	For Local p:TPath = EachIn it
		Print p.Name()
	Next
End Using
```
<br/>

### `Method List:TPath[](skipDots:Int = True)`

Returns the direct children of this directory as an array of [TPath](../../../brl/brl.path/tpath).

This is the eager equivalent of [IterDir](../../../brl/brl.path/tpath/#method-iterdirtpathdiriteratorskipdotsint-true).


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local base:TPath = New TPath(CurrentDir()) / ("tpath_example_" + MilliSecs())
(base / "sub").CreateDir(True)

Using
	Local s:TStream = (base / "a.txt").Write()
Do
	s.WriteString("x")
End Using

Local items:TPath[] = base.List(True)

For Local p:TPath = EachIn items
	Print p.Name()
Next

' Cleanup
base.DeleteDir(True)
```
<br/>

### `Method GlobIter:TPathIterator(pattern:String, flags:EGlobOptions = EGlobOptions.None)`

Returns an iterator that yields paths matching the specified glob pattern.


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
or the current directory as returned by [CurrentDir](../../../brl/brl.filesystem/#function-currentdirstring).
If <b>pattern</b> is rooted, <b>baseDir</b> is ignored and matching begins at the root.

The returned paths are:

* Rooted paths if <b>pattern</b> is rooted.
* Paths relative to <b>baseDir</b> (or the current directory) if <b>pattern</b> is not rooted.

The <b>flags</b> parameter controls additional matching behavior and result filtering.
See [EGlobOptions](../../../brl/brl.glob/egloboptions) for details.

The globbing implementation works consistently for both the native filesystem
and the virtual filesystem when [MaxIO](../../../brl/brl.io/maxio) is enabled.

The returned iterator should be closed if not fully consumed, to release any held resources.
This can be done manually by calling [Close](../../../archive/archive.core/twritearchive/#method-closeint)(), or automatically via a [Using](../../../brl/brl.blitz/#using) block.


#### Example 1
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local dir:TPath = New TPath(".")

Using
	Local it:TPathIterator = dir.GlobIter("**/*.bmx", EGlobOptions.GlobStar)
Do
	For Local p:TPath = EachIn it
		Print p.ToString()
	Next
End Using
```
#### Example 2
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local dir:TPath = New TPath(".")

' **/*.bmx matches only below the starting directory.
' Use brace expansion to include both "*.bmx" and "**/*.bmx".
Using
	Local it:TPathIterator = dir.GlobIter("{*.bmx,**/*.bmx}", EGlobOptions.GlobStar)
Do
	For Local p:TPath = EachIn it
		Print p.ToString()
	Next
End Using
```
<br/>

### `Method GlobIterStrings:TGlobIter(pattern:String, flags:EGlobOptions = EGlobOptions.None)`

Returns an iterator that yields strings matching the specified glob pattern.

See [GlobIter](../../../brl/brl.path/tpath/#method-globitertpathiteratorpatternstring-flagsegloboptions-egloboptionsnone) for full glob pattern syntax and semantics.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local dir:TPath = New TPath(".")

Using
	Local it:TGlobIter = dir.GlobIterStrings("**/*.bmx", EGlobOptions.GlobStar)
Do
	For Local s:String = EachIn it
		Print s
	Next
End Using
```
<br/>

### `Method Glob:TPath[](pattern:String, flags:EGlobOptions = EGlobOptions.None)`

Returns an array of [TPath](../../../brl/brl.path/tpath) objects matching the specified glob pattern.

See [GlobIter](../../../brl/brl.path/tpath/#method-globitertpathiteratorpatternstring-flagsegloboptions-egloboptionsnone) for full glob pattern syntax and semantics.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local dir:TPath = New TPath(".")

Local matches:TPath[] = dir.Glob("**/*.bmx", EGlobOptions.GlobStar)

For Local p:TPath = EachIn matches
	Print p.ToString()
Next
```
<br/>

### `Method GlobStrings:String[](pattern:String, flags:EGlobOptions = EGlobOptions.None)`

Returns an array of strings matching the specified glob pattern.

See [GlobIter](../../../brl/brl.path/tpath/#method-globitertpathiteratorpatternstring-flagsegloboptions-egloboptionsnone) for full glob pattern syntax and semantics.


#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local dir:TPath = New TPath(".")

Local matches:String[] = dir.GlobStrings("**/*.bmx", EGlobOptions.GlobStar)

For Local s:String = EachIn matches
	Print s
Next
```
<br/>

### `Method MatchGlob:Int(pattern:String, flags:EGlobOptions = EGlobOptions.None)`

Checks if the current path matches the specified glob pattern.


The matching rules are identical to those used by [Glob](../../../brl/brl.path/tpath/#method-globtpathpatternstring-flagsegloboptions-egloboptionsnone), including support for
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
matching, globstar support, and escaping. See [EGlobOptions](../../../brl/brl.glob/egloboptions) for details.

This function performs no filesystem access and does not require the path to exist.


#### Example 1
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = New TPath("/path/to/sub/file.txt")

Print p.MatchGlob("*.txt")       ' True (pattern matches only the name segment)
Print p.MatchGlob("sub/*.txt")   ' True (matches trailing segments)
Print p.MatchGlob("sub/*.bmx")   ' False
```
#### Example 2
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local a:TPath = New TPath("/tmp/ReadMe.TXT")
Local b:TPath = New TPath("/tmp/.hidden")

' Case sensitive by default
Print a.MatchGlob("readme.txt") ' False

' CaseFold enables case-insensitive matching
Print a.MatchGlob("readme.txt", EGlobOptions.CaseFold) ' True

' Dotfiles are not matched by wildcard patterns by default
Print b.MatchGlob(".*") ' False

' Period allows wildcard patterns to match leading '.'
Print b.MatchGlob(".*", EGlobOptions.Period) ' True
```
<br/>

### `Method Walk:Int(pathWalker:IPathWalker, options:EFileWalkOption = EFileWalkOption.None, maxDepth:Int = 0)`

Walks the file tree starting from the current path, invoking the provided [IPathWalker](../../../brl/brl.path/ipathwalker) for each file/directory encountered.

The <b>options</b> parameter can be used to modify the behavior of the file walk, such as following symbolic links.
The <b>maxDepth</b> parameter limits how deep the traversal goes into the directory hierarchy. A value of 0 means no limit.


#### Example 1
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Type TPrintWalker Implements IPathWalker
	Method WalkPath:EFileWalkResult(attributes:SPathAttributes Var)
		Print attributes.GetPath().ToString()
		Return EFileWalkResult.OK
	End Method
End Type

New TPath(".").Walk(New TPrintWalker)
```
#### Example 2
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Type TFindReadmeWalker Implements IPathWalker
	Method WalkPath:EFileWalkResult(attributes:SPathAttributes Var)
		Local p:TPath = attributes.GetPath()
		If p.Name().ToLower() = "readme.md" Then
			Print "Found: " + p.ToString()
			Return EFileWalkResult.Terminate
		End If
		Return EFileWalkResult.OK
	End Method
End Type

New TPath(".").Walk(New TFindReadmeWalker)
```
#### Example 3
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Type TDepthWalker Implements IPathWalker
	Method WalkPath:EFileWalkResult(attributes:SPathAttributes Var)
		Print attributes.GetDepth() + ": " + attributes.GetPath().ToString()
		Return EFileWalkResult.OK
	End Method
End Type

' Walk only the current directory and its immediate children.
New TPath(".").Walk(New TDepthWalker, EFileWalkOption.None, 1)
```
<br/>

## Functions

### `Function FromString:TPath(path:String)`

Creates a [TPath](../../../brl/brl.path/tpath) object from a string path.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = TPath.FromString("src/main.bmx")

Print p.ToString() ' src/main.bmx
```
<br/>

### `Function FromParts:TPath(parts:Object[])`

Creates a [TPath](../../../brl/brl.path/tpath) by joining an array of multiple parts.

Each part can be either a [TPath](../../../brl/brl.path/tpath) or a string.

Note that if any part is rooted, it replaces any previously accumulated path.


#### Example 1
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local p:TPath = TPath.FromParts(["src", "core", "main.bmx"])

Print p.ToString() ' src/core/main.bmx
```
#### Example 2
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Local a:TPath = New TPath("src")
Local p:TPath = TPath.FromParts([a, Object("core"), Object("main.bmx")])

Print p.ToString() ' src/core/main.bmx
```
<br/>

### `Function Cwd:TPath()`

Returns the current working directory as a [TPath](../../../brl/brl.path/tpath) object.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Print TPath.Cwd().ToString()
```
<br/>

### `Function Root:TPath()`

Returns the root path as a [TPath](../../../brl/brl.path/tpath) object.

#### Example
```blitzmax
SuperStrict

Framework brl.standardio
Import BRL.Path

Print TPath.Root().ToString() ' /
```
<br/>

