---
id: maxio
title: MaxIO
sidebar_label: MaxIO
---

IO abstraction implementation.





## Functions

### `Function Init()`

Initialises the abstraction layer.

This must be called before any other [MaxIO](../../../brl/brl.io/maxio) functions.


<br/>

### `Function DeInit:Int()`

Deinitializes the abstraction layer.

This closes any files opened via the abstraction layer, blanks the search/write paths, frees memory, and invalidates all of your file handles.

Note that this call can FAIL if there's a file open for writing that refuses to close (for example, the underlying operating system was
buffering writes to network filesystem, and the fileserver has crashed, or a hard drive has failed, etc). It is usually best to close
all write handles yourself before calling this function, so that you can gracefully handle a specific failure.

Once successfully deinitialized, [Init](../../../brl/brl.io/maxio/#function-init)() can be called again to restart the subsystem. All default API states are restored at this point.


<br/>

### `Function Mount:Int(newDir:String, mountPoint:String = Null, appendToPath:Int = True)`

Adds an archive or directory to the search path.

If this is a duplicate, the entry is not added again, even though the function succeeds.
You may not add the same archive to two different mountpoints: duplicate checking is done against the archive and not the mountpoint.

When you mount an archive, it is added to a virtual file system...all files in all of the archives are interpolated into a single
hierachical file tree. Two archives mounted at the same place (or an archive with files overlapping another mountpoint) may have
overlapping files: in such a case, the file earliest in the search path is selected, and the other files are inaccessible to the
application. This allows archives to be used to override previous revisions; you can use the mounting mechanism to place archives
at a specific point in the file tree and prevent overlap; this is useful for downloadable mods that might trample over application data
or each other, for example.

The mountpoint does not need to exist prior to mounting, which is different than those familiar with the Unix concept of "mounting"
may expect. As well, more than one archive can be mounted to the same mountpoint, or mountpoints and archive contents can overlap...the
interpolation mechanism still functions as usual.


<br/>

### `Function MountIncbin:Int(newDir:String, mountPoint:String = Null, appendToPath:Int = True)`

Adds an incbinned archive to the search path.

See [Mount](../../../brl/brl.io/maxio/#function-mountintnewdirstring-mountpointstring-null-appendtopathint-true) for more information.


<br/>

### `Function GetBaseDir:String()`

Gets the path where the application resides.

<br/>

### `Function GetPrefDir:String(org:String, app:String)`

Gets the user-and-app-specific path where files can be written.

Get the "pref dir". This is meant to be where users can write personal files (preferences and save games, etc) that are specific
to your application. This directory is unique per user, per application.

This function will decide the appropriate location in the native filesystem, create the directory if necessary, and return a string in platform-dependent
notation, suitable for passing to [SetWriteDir](../../../brl/brl.io/maxio/#function-setwritedirintnewdirstring)().

On Windows, this might look like: "C:\\Users\\bob\\AppData\\Roaming\\My Company\\My Program Name"

On Linux, this might look like: "/home/bob/.local/share/My Program Name"

On Mac OS X, this might look like: "/Users/bob/Library/Application Support/My Program Name"

(etc.)

You should probably use the pref dir for your write dir, and also put it near the beginning of your search path.
This finds the correct location for whatever platform, which not only changes between operating systems, but also versions of the same operating system.

You specify the name of your organization (if it's not a real organization, your name or an Internet domain you own might do) and the name of
your application. These should be proper names.

Both the (org) and (app) strings may become part of a directory name, so please follow these rules:

Try to use the same org string (including case-sensitivity) for all your applications that use this function.
Always use a unique app string for each one, and make sure it never changes for an app once you've decided on it.
Unicode characters are legal, as long as it's UTF-8 encoded, but...
...only use letters, numbers, and spaces. Avoid punctuation like "Game Name 2: Bad Guy's Revenge!" ... "Game Name 2" is sufficient.

> You should assume the path returned by this function is the only safe place to write files.


<br/>

### `Function SetWriteDir:Int(newDir:String)`

Indicates where files may be written.

Sets a new write dir. This will override the previous setting.

This call will fail (and fail to change the write dir) if the current write dir still has files open in it.


<br/>

### `Function Stat:Int(filename:String, _stat:SMaxIO_Stat Var)`

Gets various information about a directory or a file.

<br/>

### `Function DeletePath:Int(path:String)`

Deletes a file or directory.

<b>path</b> is specified in platform-independent notation in relation to the write dir.

A directory must be empty before this call can delete it.

Deleting a symlink will remove the link, not what it points to, regardless of whether you "permitSymLinks" or not.

So if you've got the write dir set to "C:\mygame\writedir" and call DeletePath("downloads/maps/level1.map") then the file
"C:\mygame\writedir\downloads\maps\level1.map" is removed from the physical filesystem, if it exists and the operating system permits the deletion.

Note that on Unix systems, deleting a file may be successful, but the actual file won't be removed until all processes that have
an open filehandle to it (including your program) close their handles.

Chances are, the bits that make up the file still exist, they are just made available to be written over at a later point. Don't
consider this a security method or anything.


<br/>

### `Function OpenWrite:Byte Ptr(path:String)`

Opens a file for writing.

Opens a file for writing, in platform-independent notation and in relation to the write dir as the root of the writable filesystem.
The specified file is created if it doesn't exist. If it does exist, it is truncated to zero bytes, and the writing offset is set to the start.

Note that entries that are symlinks are ignored if PermitSymbolicLinks(True) hasn't been called, and opening a symlink with this function will
fail in such a case.


<br/>

### `Function Close:Int(filePtr:Byte Ptr)`

Closes a file handle.

This call is capable of failing if the operating system was buffering writes to the physical media, and, now forced to write those
changes to physical media, can not store the data for some reason. In such a case, the filehandle stays open. A well-written program
should ALWAYS check the return value from the close call in addition to every writing call!


<br/>

### `Function MkDir:Int(dirName:String)`

Creates a directory.

This is specified in platform-independent notation in relation to the write dir. All missing parent directories are also created if they don't exist.


<br/>

