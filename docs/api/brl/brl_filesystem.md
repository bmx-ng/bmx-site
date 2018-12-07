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

SuperStrict

Print StripDir("mypath/myfile.bmx")	' prints myfile.bmx
```
<br/>

### `Function StripExt$( path$ )`

Strip extension from a file path

#### Example
```blitzmax
' stripext.bmx

SuperStrict

Print StripExt("mypath/myfile.bmx")	' prints mypath/myfile
```
<br/>

### `Function StripAll$( path$ )`

Strip directory and extension from a file path

#### Example
```blitzmax
' stripall.bmx

SuperStrict

Print StripAll("mypath/myfile.bmx")	' prints myfile
```
<br/>

### `Function StripSlash$( path$ )`

Strip trailing slash from a file path


[StripSlash](../../brl/brl.filesystem/#function-stripslash-path) will not remove the trailing slash from a 'root' path. For example, "/"
or (on Win32 only) "C:/".


#### Example
```blitzmax
' stripslash.bmx
SuperStrict

Print StripSlash("mypath/")	' prints mypath
```
<br/>

### `Function ExtractDir$( path$ )`

Extract directory from a file path

#### Example
```blitzmax
' extractdir.bmx

SuperStrict

Print ExtractDir("mypath/myfile.bmx")	' prints mypath
```
<br/>

### `Function ExtractExt$( path$ )`

Extract extension from a file path

#### Example
```blitzmax
' extractext.bmx

SuperStrict

Print ExtractExt("mypath/myfile.bmx")	' prints bmx
```
<br/>

### `Function CurrentDir$()`

Get Current Directory

#### Returns
The current directory


#### Example
```blitzmax
' currentdir.bmx
SuperStrict

Local cd:String = CurrentDir()
Print "CurrentDir()="+cd
```
<br/>

### `Function RealPath$( path$ )`

Get real, absolute path of a file path

#### Example
```blitzmax
' realpath.bmx

SuperStrict

Print RealPath("realpath.bmx")	'prints full path of this source

Print RealPath("..") 'prints full path of parent directory
```
<br/>

### `Function FileType:Int( path$ )`

Get file type

#### Returns
0 if file at <b>path</b> doesn't exist, FILETYPE_FILE (1) if the file is a plain file or FILETYPE_DIR (2) if the file is a directory


#### Example
```blitzmax
' filetype.bmx

SuperStrict

Print FileType(".")		' prints 2 for directory type
Print FileType("filetype.bmx")	' prints 1 for file type
Print FileType("notfound.file")	' prints 0 for doesn't exist
```
<br/>

### `Function FileTime:Int( path$, timetype:Int=FILETIME_MODIFIED )`

Get file time

#### Returns
The time the file at <b>path</b> was last modified


#### Example
```blitzmax
' filetime.bmx

SuperStrict

Print FileTime("filetime.bmx")
```
<br/>

### `Function FileSize:Long( path$ )`

Get file size

#### Returns
Size, in bytes, of the file at <b>path</b>, or -1 if the file does not exist


#### Example
```blitzmax
' filesize.bmx

SuperStrict

' the following prints the size of this source file in bytes

Print FileSize("filesize.bmx")
```
<br/>

### `Function FileMode:Int( path$ )`

Get file mode

#### Returns
file mode flags


#### Example
```blitzmax
' filemode.bmx
SuperStrict

' the following function converts the file mode to 
' the standard unix permission bits string

Function Permissions:String(mode:Int)
	Local testbit:Int, pos:Int
	Local p:String = "rwxrwxrwx"
	testbit = <i>100000000</i>
	pos = 1
	Local res:String
	While (testbit)
		If mode & testbit 
			res :+ Mid(p, pos, 1)
		Else 
			res :+ "-"
		EndIf
		testbit = testbit Shr 1
		pos :+ 1
	Wend
	Return res
End Function

Print Permissions(FileMode("filemode.bmx"))
```
<br/>

### `Function SetFileMode( path$,Mode:Int )`

Set file mode

#### Example
```blitzmax
' setfilemode.bmx
SuperStrict

' the following makes this source file readonly
Local writebits:Int = <i>010010010</i>

' read the file mode
Local mode:Int = FileMode("setfilemode.bmx")

'mask out the write bits to make readonly
mode = mode & writebits

'set the new file mode
SetFileMode("setfilemode.bmx",mode)
```
<br/>

### `Function CreateFile:Int( path$ )`

Create a file

#### Returns
True if successful


#### Example
```blitzmax
' createfile.bmx
SuperStrict

Local success:Int = CreateFile("myfile")
If Not success Then
	RuntimeError "error creating file"
End If
```
<br/>

### `Function CreateDir:Int( path$,recurse:Int=False )`

Create a directory


If <b>recurse</b> is true, any required subdirectories are also created.


#### Returns
True if successful


#### Example
```blitzmax
' createdir.bmx
SuperStrict

Local success:Int = CreateDir("myfolder")
If Not success Then
	RuntimeError "error creating directory"
End If
```
<br/>

### `Function DeleteFile:Int( path$ )`

Delete a file

#### Returns
True if successful


#### Example
```blitzmax
' deletefile.bmx
SuperStrict

Local success:Int = DeleteFile("myfile")
If Not success RuntimeError "error deleting file"
```
<br/>

### `Function RenameFile:Int( oldpath$,newpath$ )`

Renames a file

#### Returns
True if successful


#### Example
```blitzmax
SuperStrict

Local result:Int = CopyFile(BlitzMaxPath() + "\versions.txt", BlitzMaxPath() + "\versions2.txt")

If result = 0 Then
	RuntimeError "CopyFile not successful..."
End If

result = RenameFile(BlitzMaxPath() + "\versions.txt", BlitzMaxPath() + "\versions2.txt")

If result = 0 Then
	RuntimeError "Rename not successful..." ' as file already exist
End If
```
<br/>

### `Function CopyFile:Int( src$,dst$ )`

Copy a file

#### Returns
True if successful


#### Example
```blitzmax
SuperStrict

Local result:Int = CopyFile(BlitzMaxPath() + "\versions.txt",  BlitzMaxPath() + "\versions2.txt")

If result = 0 Then	
	RuntimeError "CopyFile not successful..."
End If

result = RenameFile(BlitzMaxPath() + "\versions.txt", BlitzMaxPath() + "\versions2.txt")

If result = 0 Then
	RuntimeError "Rename not successful..." ' as file already exists
End If
```
<br/>

### `Function CopyDir:Int( src$,dst$ )`

Copy a directory

#### Returns
True if successful


<br/>

### `Function DeleteDir:Int( path$,recurse:Int=False )`

Delete a directory

Set <b>recurse</b> to true to delete all subdirectories and files recursively -
but be careful!


#### Returns
True if successful


#### Example
```blitzmax
' deletedir.bmx
SuperStrict

Local success:Int = DeleteDir("myfolder")
If Not success Then
	RuntimeError "error deleting directory"
End If
```
<br/>

### `Function ChangeDir:Int( path$ )`

Change current directory

#### Returns
True if successful


#### Example
```blitzmax
' changedir.bmx

SuperStrict

Print "CurrentDir()="+CurrentDir()

' change current folder to the parent folder

ChangeDir ".."

' print new CurrentDir()

Print "CurrentDir()="+CurrentDir()
```
<br/>

### `Function ReadDir:Byte Ptr( path$ )`

Open a directory

#### Returns
A directory handle, or 0 if the directory does not exist


#### Example
```blitzmax
' readdir.bmx
SuperStrict

Local dir:Byte Ptr = ReadDir(CurrentDir())

If Not dir RuntimeError "failed to read current directory"

Repeat
	Local t:String = NextFile( dir )
	If t="" Exit
	If t="." Or t=".." Continue
	Print t	
Forever

CloseDir dir
```
<br/>

### `Function NextFile$( dir:Byte Ptr )`

Return next file in a directory

#### Returns
File name of next file in directory opened using [ReadDir](../../brl/brl.filesystem/#function-readdir-byte-ptr-path), or an empty string if there are no more files to read.


#### Example
```blitzmax
'File System Example

SuperStrict

Local dir:Byte Ptr = ReadDir(BlitzMaxPath() )

If Not dir Then
	RuntimeError "Cannot open folder"
End If

Local file:String
Repeat
	
	file = NextFile(Dir) ' Get the filenames in folder
	Print file
	
Until file = ""

CloseDir(dir)
```
<br/>

### `Function CloseDir( dir:Byte Ptr )`

Close a directory

#### Example
```blitzmax
'File System Example

SuperStrict

Local dir:Byte Ptr = ReadDir(BlitzMaxPath())

If Not dir Then
	RuntimeError "Cannot open folder"
End If

Local file:String
Repeat
	
	file = NextFile(dir) ' Get the filenames in folder
	Print file
	
Until Not file

CloseDir(dir)
```
<br/>

### `Function LoadDir$[]( dir$,skip_dots:Int=True )`

Load a directory

The <b>skip_dots</b> parameter, if true, removes the '.' (current) and '..'
(parent) directories from the returned array.


#### Returns
A string array containing contents of <b>dir</b>


#### Example
```blitzmax
' loaddir.bmx
SuperStrict

' declare a string array
Local files:String[] 
files = LoadDir(CurrentDir())

For Local t:String = EachIn files
	Print t	
Next
```
<br/>

### `Function OpenFile:TStream( url:Object,readable:Int=True,writeable:Int=True )`

Open a file for input and/or output.


This command is similar to the [OpenStream](../../brl/brl.stream/#function-openstream-tstream-url-object-readable-int-true-writeable-int-true) command but will attempt
to cache the contents of the file to ensure serial streams such as
http: based url's are seekable. Use the [CloseStream](../../brl/brl.stream/#function-closestream-stream-tstream) command when
finished reading and or writing to a Stream returned by [OpenFile](../../brl/brl.filesystem/#function-openfile-tstream-url-object-readable-int-true-writeable-int-true).


#### Example
```blitzmax
' openfile.bmx
SuperStrict

' the following prints the contents of this source file 

Local file:TStream = OpenFile("openfile.bmx")

If Not file RuntimeError "could not open file openfile.bmx"

While Not Eof(file)
	Print ReadLine(file)
Wend
CloseStream file
```
<br/>

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

SuperStrict

Local file:TStream = ReadFile("readfile.bmx")

If Not file RuntimeError "could not open file openfile.bmx"

While Not Eof(file)
	Print ReadLine(file)
Wend

CloseStream file
```
<br/>

### `Function WriteFile:TStream( url:Object )`

Open a file for output.


This command is identical to the [WriteStream](../../brl/brl.stream/#function-writestream-tstream-url-object) command.


#### Example
```blitzmax
' writefile.bmx
SuperStrict

Local file:TStream = WriteFile("test.txt")

If Not file Then RuntimeError "failed to open test.txt file" 

WriteLine file,"hello world"

CloseStream file
```
<br/>

### `Function CloseFile( stream:TStream )`

Closes a file stream.


After performing file operations on an open file make sure to
close the file stream with either [CloseFile](../../brl/brl.filesystem/#function-closefile-stream-tstream) or the identical
[CloseStream](../../brl/brl.stream/#function-closestream-stream-tstream) command.


#### Example
```blitzmax
SuperStrict

Local in:TStream = OpenFile(BlitzMaxPath() + "\versions.txt")
Local line:String

While Not Eof(in)
	line = ReadLine(in)
	Print line
Wend

CloseFile(in) ' can also use CloseStream(in)
```
<br/>

