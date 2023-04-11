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

### `Function IsInit:Int()`

Determines if the [MaxIO](../../../brl/brl.io/maxio) is initialized.

Once [Init](../../../brl/brl.io/maxio/#function-init)() returns successfully, this will return non-zero. Before a successful [Init](../../../brl/brl.io/maxio/#function-init)() and after [DeInit](../../../brl/brl.io/maxio/#function-deinitint)() returns
successfully, this will return zero. This function is safe to call at any time.


#### Returns
non-zero if [MaxIO](../../../brl/brl.io/maxio) is initialized, zero if it is not.


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


#### Returns
Nonzero if added to path, zero on failure (bogus archive, dir missing, etc).


<br/>

### `Function MountIncbin:Int(newDir:String, mountPoint:String = Null, appendToPath:Int = True)`

Adds an incbinned archive to the search path.

See [Mount](../../../brl/brl.io/maxio/#function-mountintnewdirstring-mountpointstring-null-appendtopathint-true) for more information.


<br/>

### `Function Unmount:Int(oldDir:String)`

Removes a directory or archive from the search path.

This must be a (case-sensitive) match to a dir or archive already in the
search path, specified in platform-dependent notation.

This call will fail (and fail to remove from the path) if the element still has files open in it.


#### Returns
Nonzero on success, zero on failure. Use [GetLastErrorCode](../../../brl/brl.io/maxio/#function-getlasterrorcodeemaxioerrorcode)() to obtain the specific error.


<br/>

### `Function GetMountPoint:String(dir:String)`

Determines a mounted archive's mountpoint.

You give this function the name of an archive or dir you successfully
added to the search path, and it reports the location in the interpolated
tree where it is mounted. Files mounted with a [Null](../../../brl/brl.blitz/#null) mountpoint will report "/".

<b>dir</b> must exactly match the string used when adding, even if your string would also reference the same file with a different string of characters.


#### Returns
The mount point if added to path, or [Null](../../../brl/brl.blitz/#null) on failure (bogus archive, etc). Use [GetLastErrorCode](../../../brl/brl.io/maxio/#function-getlasterrorcodeemaxioerrorcode)() to obtain the specific error.


<br/>

### `Function SetRoot:Int(archive:String, subdir:String)`

Makes a subdirectory of an archive its root directory.

This lets you narrow down the accessible files in a specific archive.

For example, if you have x.zip with a file in y/z.txt, mounted to /a, if you
call [SetRoot](../../../brl/brl.io/maxio/#function-setrootintarchivestring-subdirstring)("x.zip", "/y"), then the call OpenRead("/a/z.txt") will succeed.

You can change an archive's root at any time, altering the interpolated
file tree (depending on where paths shift, a different archive may be
providing various files). If you set the root to [Null](../../../brl/brl.blitz/#null) or "/", the
archive will be treated as if no special root was set (as if the archive
was just mounted normally).

Changing the root only affects future operations on pathnames; a file
that was opened from a path that changed due to a [SetRoot](../../../brl/brl.io/maxio/#function-setrootintarchivestring-subdirstring) will not be affected.

Setting a new root is not limited to archives in the search path; you may
set one on the write dir, too, which might be useful if you have files
open for write and thus can't change the write dir at the moment.

It is not an error to set a subdirectory that does not exist to be the
root of an archive; however, no files will be visible in this case. If
the missing directories end up getting created (a mkdir to the physical
filesystem, etc) then this will be reflected in the interpolated tree.


#### Returns
Nonzero on success, zero on failure. Use [GetLastErrorCode](../../../brl/brl.io/maxio/#function-getlasterrorcodeemaxioerrorcode)() to obtain the specific error.


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

> You should assume the path returned by this function is the only safe place to write files (and that [GetBaseDir](../../../brl/brl.io/maxio/#function-getbasedirstring)(),
while they might be writable, or even parents of the returned path, aren't where you should be writing things)..


#### Returns
The pref dir in platform-dependent notation, or [Null](../../../brl/brl.blitz/#null) if there's a problem (creating directory failed, etc).


<br/>

### `Function GetSearchPath:String[]()`

Gets the current search path.

The default search path is an empty list.


#### Returns
An array of Strings.


<br/>

### `Function SetWriteDir:Int(newDir:String)`

Indicates where files may be written.

Sets a new write dir. This will override the previous setting.

This call will fail (and fail to change the write dir) if the current write dir still has files open in it.

The directory will be the root of the write dir, specified in platform-dependent notation.
Setting to [Null](../../../brl/brl.blitz/#null) disables the write dir, so no files can be opened for writing.


<br/>

### `Function GetWriteDir:String()`

Gets the path where files may be written.

Gets the current write dir. The default write dir is [Null](../../../brl/brl.blitz/#null).


<br/>

### `Function GetRealDir:String(filename:String)`

Figures out where in the search path a file resides.

The file is specified in platform-independent notation. The returned
filename will be the element of the search path where the file was found,
which may be a directory, or an archive. Even if there are multiple
matches in different parts of the search path, only the first one found
is used, just like when opening a file.


#### Returns
The file location, or [Null](../../../brl/brl.blitz/#null) if not found.


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

### `Function GetLastErrorCode:EMaxIOErrorCode()`

Returns the last error code.

Calling this function resets the last error code.


<br/>

### `Function GetErrorForCode:String(errorCode:EMaxIOErrorCode)`

Returns the message for the specified <b>errorCode</b>.

<br/>

### `Function GetLastError:String()`

Returns the last error message, or [Null](../../../brl/brl.blitz/#null) if there is none.

Calling this function resets the last error.


<br/>

