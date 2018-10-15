---
id: brl.filesystem
title: BRL.FileSystem
sidebar_label: BRL.FileSystem
---



The BlitzMax filesystem module contains commands to perform operations on the computer's
files and directories.

[OpenFile](../../brl/brl.filesystem/#function-openfile-tstream-url-object-readable-int-true-writeable-int-true), [ReadFile](../../brl/brl.filesystem/#function-readfile-tstream-url-object) and [WriteFile](../../brl/brl.filesystem/#function-writefile-tstream-url-object) return a stream object for reading and or writing data
to files.

Directories can be examined file by file using a combination of the
[ReadDir](../../brl/brl.filesystem/#function-readdir-byte-ptr-path), [NextFile](../../brl/brl.filesystem/#function-nextfile-dir-byte-ptr) and [CloseDir](../../brl/brl.filesystem/#function-closedir-dir-byte-ptr) commands, or [LoadDir](../../brl/brl.filesystem/#function-loaddir-dir-skip-dots-int-true) can be used to read the file names
of a directory into a string array.

File properties can be examined with the [FileType](../../brl/brl.filesystem/#function-filetype-int-path), [FileTime](../../brl/brl.filesystem/#function-filetime-int-path-timetype-int-filetime-modified), [FileSize](../../brl/brl.filesystem/#function-filesize-long-path) and [FileMode](../../brl/brl.filesystem/#function-filemode-int-path) commands.

Files and directories (folders) can be created and deleted with the [CreateFile](../../brl/brl.filesystem/#function-createfile-int-path), [CreateDir](../../brl/brl.filesystem/#function-createdir-int-path-recurse-int-false)
[DeleteFile](../../brl/brl.filesystem/#function-deletefile-int-path) and [DeleteDir](../../brl/brl.filesystem/#function-deletedir-int-path-recurse-int-false) commands.

Finally, the FileSystem module contains various utility functions for handling file paths
in a system independent manner. These commands include [RealPath](../../brl/brl.filesystem/#function-realpath-path), [StripDir](../../brl/brl.filesystem/#function-stripdir-path), [StripExt](../../brl/brl.filesystem/#function-stripext-path),
[StripAll](../../brl/brl.filesystem/#function-stripall-path), [ExtractDir](../../brl/brl.filesystem/#function-extractdir-path) and [ExtractExt](../../brl/brl.filesystem/#function-extractext-path).


## Functions

### `Function StripDir$( path$ )`

Strip directory from a file path

#### Example
```blitzmax
' stripdir.bmx

print stripdir("mypath/myfile.bmx")	'prints myfile.bmx
```

### `Function StripExt$( path$ )`

Strip extension from a file path

#### Example
```blitzmax
' stripext.bmx

print stripext("mypath/myfile.bmx")	'prints mypath/myfile
```

### `Function StripAll$( path$ )`

Strip directory and extension from a file path

#### Example
```blitzmax
' stripall.bmx

print stripall("mypath/myfile.bmx")	'prints myfile
```

### `Function StripSlash$( path$ )`

Strip trailing slash from a file path


[StripSlash](../../brl/brl.filesystem/#function-stripslash-path) will not remove the trailing slash from a 'root' path. For example, "/"
or (on Win32 only) "C:/".


#### Example
```blitzmax
' stripslash.bmx

print stripslash("mypath/")	'prints mypath
```

### `Function ExtractDir$( path$ )`

Extract directory from a file path

#### Example
```blitzmax
' extractdir.bmx

print extractdir("mypath/myfile.bmx")	'prints mypath
```

### `Function ExtractExt$( path$ )`

Extract extension from a file path

#### Example
```blitzmax
' extractext.bmx

print extractext("mypath/myfile.bmx")	'prints bmx
```

### `Function CurrentDir$()`

Get Current Directory

#### Returns
The current directory


#### Example
```blitzmax
' currentdir.bmx

cd$=currentdir()
print "CurrentDir()="+cd$
```

### `Function RealPath$( path$ )`

Get real, absolute path of a file path

#### Example
```blitzmax
' realpath.bmx

print realpath("realpath.bmx")	'prints full path of this source

print realpath("..") 'prints full path of parent directory
```

### `Function FileType:Int( path$ )`

Get file type

#### Returns
0 if file at <b>path</b> doesn't exist, FILETYPE_FILE (1) if the file is a plain file or FILETYPE_DIR (2) if the file is a directory


#### Example
```blitzmax
' filetype.bmx

print filetype(".")		'prints 2 for directory type
print filetype("filetype.bmx")	'prints 1 for file type
print filetype("notfound.file")	'prints 0 for doesn't exist
```

### `Function FileTime:Int( path$, timetype:Int=FILETIME_MODIFIED )`

Get file time

#### Returns
The time the file at <b>path</b> was last modified


#### Example
```blitzmax
' filetime.bmx

print filetime("filetime.bmx")
```

### `Function FileSize:Long( path$ )`

Get file size

#### Returns
Size, in bytes, of the file at <b>path</b>, or -1 if the file does not exist


#### Example
```blitzmax
' filesize.bmx

' the following prints the size of this source file in bytes

print filesize("filesize.bmx")
```

### `Function FileMode:Int( path$ )`

Get file mode

#### Returns
file mode flags


#### Example
```blitzmax
' filemode.bmx

' the following function converts the file mode to 
' the standard unix permission bits string

Function Permissions$(mode)
	local	testbit,pos
	local	p$="rwxrwxrwx"
	testbit=%100000000
	pos=1
	while (testbit)
		if mode & testbit res$:+mid$(p$,pos,1) else res$:+"-"
		testbit=testbit shr 1
		pos:+1	
	wend
	return res
End Function

print Permissions$(filemode("filemode.bmx"))
```

### `Function SetFileMode( path$,Mode:Int )`

Set file mode

#### Example
```blitzmax
' setfilemode.bmx

' the following makes this source file readonly

writebits=%010010010

' read the file mode

mode=filemode("setfilemode.bmx")

'mask out the write bits to make readonly

mode=mode & writebits

'set the new file mode

setfilemode("setfilemode.bmx",mode)
```

### `Function CreateFile:Int( path$ )`

Create a file

#### Returns
True if successful


#### Example
```blitzmax
' createfile.bmx

success=createfile("myfile")
if not success runtimeerror "error creating file"
```

### `Function CreateDir:Int( path$,recurse:Int=False )`

Create a directory


If <b>recurse</b> is true, any required subdirectories are also created.


#### Returns
True if successful


#### Example
```blitzmax
' createdir.bmx

success=createdir("myfolder")
if not success runtimeerror "error creating directory"
```

### `Function DeleteFile:Int( path$ )`

Delete a file

#### Returns
True if successful


#### Example
```blitzmax
' deletefile.bmx

success=deletefile("myfile")
if not success runtimeerror "error deleting file"
```

### `Function RenameFile:Int( oldpath$,newpath$ )`

Renames a file

#### Returns
True if successful



### `Function CopyFile:Int( src$,dst$ )`

Copy a file

#### Returns
True if successful



### `Function CopyDir:Int( src$,dst$ )`

Copy a directory

#### Returns
True if successful



### `Function DeleteDir:Int( path$,recurse:Int=False )`

Delete a directory

Set <b>recurse</b> to true to delete all subdirectories and files recursively -
but be careful!


#### Returns
True if successful


#### Example
```blitzmax
' deletedir.bmx

success=deletedir("myfolder")
if not success runtimeerror "error deleting directory"
```

### `Function ChangeDir:Int( path$ )`

Change current directory

#### Returns
True if successful


#### Example
```blitzmax
' changedir.bmx

print "CurrentDir()="+currentdir()

' change current folder to the parent folder

changedir ".."

' print new CurrentDir()

print "CurrentDir()="+currentdir()
```

### `Function ReadDir:Byte Ptr( path$ )`

Open a directory

#### Returns
A directory handle, or 0 if the directory does not exist


#### Example
```blitzmax
' readdir.bmx

dir=ReadDir(CurrentDir())

If Not dir RuntimeError "failed to read current directory"

Repeat
	t$=NextFile( dir )
	If t="" Exit
	If t="." Or t=".." Continue
	Print t	
Forever

CloseDir dir
```

### `Function NextFile$( dir:Byte Ptr )`

Return next file in a directory

#### Returns
File name of next file in directory opened using [ReadDir](../../brl/brl.filesystem/#function-readdir-byte-ptr-path), or an empty string if there are no more files to read.



### `Function CloseDir( dir:Byte Ptr )`

Close a directory


### `Function LoadDir$[]( dir$,skip_dots:Int=True )`

Load a directory

The <b>skip_dots</b> parameter, if true, removes the '.' (current) and '..'
(parent) directories from the returned array.


#### Returns
A string array containing contents of <b>dir</b>


#### Example
```blitzmax
' loaddir.bmx

' declare a string array

local files$[]

files=loaddir(currentdir())

for t$=eachin files
	print t	
next
```

### `Function OpenFile:TStream( url:Object,readable:Int=True,writeable:Int=True )`

Open a file for input and/or output.


This command is similar to the [OpenStream](../../brl/brl.stream/#function-openstream-tstream-url-object-readable-int-true-writeable-int-true) command but will attempt
to cache the contents of the file to ensure serial streams such as
http: based url's are seekable. Use the [CloseStream](../../brl/brl.stream/#function-closestream-stream-tstream) command when
finished reading and or writing to a Stream returned by [OpenFile](../../brl/brl.filesystem/#function-openfile-tstream-url-object-readable-int-true-writeable-int-true).


#### Example
```blitzmax
' openfile.bmx

' the following prints the contents of this source file 

file=openfile("openfile.bmx")

if not file runtimeerror "could not open file openfile.bmx"

while not eof(file)
	print readline(file)
wend
closestream file
```

### `Function ReadFile:TStream( url:Object )`

Open a file For Input.


This command is similar to the [ReadStream](../../brl/brl.stream/#function-readstream-tstream-url-object) command but will attempt
to cache the contents of the file to ensure serial streams such as
http: based url's are seekable. Use the [CloseStream](../../brl/brl.stream/#function-closestream-stream-tstream) command when
finished reading and or writing to a Stream returned by [OpenFile](../../brl/brl.filesystem/#function-openfile-tstream-url-object-readable-int-true-writeable-int-true).


#### Example
```blitzmax
' readfile.bmx

' the following prints the contents of this source file 

file=readfile("readfile.bmx")

if not file runtimeerror "could not open file openfile.bmx"

while not eof(file)
	print readline(file)
wend

closestream file
```

### `Function WriteFile:TStream( url:Object )`

Open a file for output.


This command is identical to the [WriteStream](../../brl/brl.stream/#function-writestream-tstream-url-object) command.


#### Example
```blitzmax
' writefile.bmx

file=writefile("test.txt")

if not file runtimeerror "failed to open test.txt file" 

writeline file,"hello world"

closestream file
```

### `Function CloseFile( stream:TStream )`

Closes a file stream.


After performing file operations on an open file make sure to
close the file stream with either [CloseFile](../../brl/brl.filesystem/#function-closefile-stream-tstream) or the identical
[CloseStream](../../brl/brl.stream/#function-closestream-stream-tstream) command.



