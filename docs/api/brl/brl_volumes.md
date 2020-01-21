---
id: brl.volumes
title: BRL.Volumes
sidebar_label: Introduction
---


![](assets/vol_logo.png)
<p><b>Volumes</b> is a small cross-platform module which provides useful volume/device information support for BlitzMax.</p>
<p>The module is essentially split into two parts, that of volume information, and some functions which give user-specific directory paths.</p>
<h2>Volume Information</h2>
<p>Enables access to all volumes on the system, as well as drive-details such as free and total space for the volume.</p>
<p>To get a list of volumes on the current system, simply call <a href="#ListVolumes">ListVolumes</a> which returns
a list of <a href="#TVolume">TVolume</a> objects, from which you have access to the extra information.<br/>
You can also retrieve size information directly using <a href="#GetVolumeSize">GetVolumeSize</a> and <a href="#GetVolumeFreeSpace">GetVolumeFreeSpace</a>.
</p>
<h2>User Directories</h2>
<p>Useful for the application developer is access to user-specific directories, like their home and document directories. 
The Volumes module provides access to four of these for all supported platforms: <a href="#GetUserAppDir">GetUserAppDir</a>, 
<a href="#GetUserDesktopDir">GetUserDesktopDir</a>, <a href="#GetUserDocumentsDir">GetUserDocumentsDir</a>, and <a href="#GetUserHomeDir">GetUserHomeDir</a>.</p>
<h2>Custom Directories</h2>
<p>
There are also more platform-specific directories available via the <a href="#GetCustomDir">GetCustomDir</a> method.
</p>
<p>
Generic paths include, DT_SHAREDUSERDATA, DT_USERPICTURES, DT_USERMUSIC and DT_USERMOVIES, which are standard values for all platforms.
</p>
<p>
On Windows, you can also use any of the CSIDL_xxxxxx identifiers to retrieve the specific path string.
</p>
<p>
On Mac, you can choose from a selection of "k" folder types, as well as an optional domain. The default domain is <a href="#kUserDomain">kUserDomain</a>. 
Others domains include <a href="#kSystemDomain">kSystemDomain</a>, <a href="#kLocalDomain">kLocalDomain</a> and <a href="#kNetworkDomain">kNetworkDomain</a>.
</p>


## Types
| Type | Description |
|---|---|
| [TVolume](../../brl/brl.volumes/tvolume) | A system Volume |

## Functions

### `Function ListVolumes:TList()`

Returns a list of volumes on the system.

#### Example 1
```blitzmax
SuperStrict

Framework BRL.volumes
Import brl.standardio

Local list:TList = ListVolumes()

If list Then
	Print "Volumes :"

	For Local v:TVolume = EachIn list
	
		'If v.available Then
			Print "~t" + v.volumeName + "  -  " + v.volumeDevice + " (" +  v.volumeType +  ") -  " + ((v.volumeFree / 1024) / 1024) + "mb"
		'End If
	
	Next
End If
```
#### Example 2
```blitzmax
SuperStrict

Framework BRL.volumes
Import brl.standardio

Local list:TList = ListVolumes()

If list Then
	Print "Volumes :"

	For Local v:TVolume = EachIn list
	
		'If v.available Then
			Print "~t" + v.volumeName + "  -  " + v.volumeDevice + " (" +  v.volumeType +  ") -  " + ((v.volumeFree / 1024) / 1024) + "mb"
		'End If
	
	Next
End If
```
#### Example 3
```blitzmax
SuperStrict

Framework BRL.volumes
Import brl.standardio

Local list:TList = ListVolumes()

If list Then
	Print "Volumes :"

	For Local v:TVolume = EachIn list
	
		'If v.available Then
			Print "~t" + v.volumeName + "  -  " + v.volumeDevice + " (" +  v.volumeType +  ") -  " + ((v.volumeFree / 1024) / 1024) + "mb"
		'End If
	
	Next
End If
```
<br/>

### `Function GetVolumeFreeSpace:Long(vol:String)`

Returns the amount of free space (in bytes) on the given volume.

Parameters:
<ul>
<li><b>vol</b> : the name of the volume</li>
</ul>


#### Example 1
```blitzmax
SuperStrict

Framework BRL.Volumes
Import brl.standardio

Local vol:String

?win32
vol = "C:\"
?linux
vol = "/"
?macos
vol = "/"
?

Print "Freespace :"
Print vol + " = " + (GetVolumeFreeSpace(vol) / 1024) + " kb"
```
#### Example 2
```blitzmax
SuperStrict

Framework BRL.Volumes
Import brl.standardio

Local vol:String

?win32
vol = "C:\"
?linux
vol = "/"
?macos
vol = "/"
?

Print "Freespace :"
Print vol + " = " + (GetVolumeFreeSpace(vol) / 1024) + " kb"
```
#### Example 3
```blitzmax
SuperStrict

Framework BRL.Volumes
Import brl.standardio

Local vol:String

?win32
vol = "C:\"
?linux
vol = "/"
?macos
vol = "/"
?

Print "Freespace :"
Print vol + " = " + (GetVolumeFreeSpace(vol) / 1024) + " kb"
```
<br/>

### `Function GetVolumeSize:Long(vol:String)`

Returns the size (in bytes) of the given volume.

Parameters:
<ul>
<li><b>vol</b> : the name of the volume</li>
</ul>


#### Example 1
```blitzmax
SuperStrict

Framework BRL.volumes
Import brl.standardio

Local vol:String

?win32
vol = "C:\"
?linux
vol = "/"
?macos
vol = "/"
?

Print "Total space :"
Print vol + " = " + (GetVolumeSize(vol) / 1024) + " kb"
```
#### Example 2
```blitzmax
SuperStrict

Framework BRL.volumes
Import brl.standardio

Local vol:String

?win32
vol = "C:\"
?linux
vol = "/"
?macos
vol = "/"
?

Print "Total space :"
Print vol + " = " + (GetVolumeSize(vol) / 1024) + " kb"
```
#### Example 3
```blitzmax
SuperStrict

Framework BRL.volumes
Import brl.standardio

Local vol:String

?win32
vol = "C:\"
?linux
vol = "/"
?macos
vol = "/"
?

Print "Total space :"
Print vol + " = " + (GetVolumeSize(vol) / 1024) + " kb"
```
<br/>

### `Function GetVolumeInfo:TVolume(vol:String)`

Populates and returns a [TVolume](../../brl/brl.volumes/tvolume) object.

Parameters:
<ul>
<li><b>vol</b> : the name of the volume</li>
</ul>


<br/>

### `Function GetUserHomeDir:String()`

Returns the user home directory.

The table lists examples for the various platforms -
<table align="center">
<tr><th>Platform</th><th>Example</th><th>Equivalent</th></tr>
<tr><td>Linux</td><td>`/home/username`</td><td>``</td></tr>
<tr><td>Mac OS</td><td>`/Users/username`</td><td>``</td></tr>
<tr><td>Win32</td><td>`C:\Documents and Settings\username`</td><td>&nbsp;</td></tr>
</table>


#### Example 1
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserHomeDir()
```
#### Example 2
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserHomeDir()
```
#### Example 3
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserHomeDir()
```
<br/>

### `Function GetUserDesktopDir:String()`

Returns the user Desktop directory.

The table lists examples for the various platforms -
<table align="center">
<tr><th>Platform</th><th>Example</th><th>Equivalent</th></tr>
<tr><td>Linux</td><td>`/home/username/Desktop`</td><td>`/Desktop`</td></tr>
<tr><td>Mac OS</td><td>`/Users/username/Desktop`</td><td>`/Desktop`</td></tr>
<tr><td>Win32</td><td>`C:\Documents and Settings\username\Desktop`</td><td>&nbsp;</td></tr>
</table>


#### Example 1
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserDesktopDir()
```
#### Example 2
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserDesktopDir()
```
#### Example 3
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserDesktopDir()
```
<br/>

### `Function GetUserAppDir:String()`

Returns the user directory for application data.

The table lists examples for the various platforms -
<table align="center">
<tr><th>Platform</th><th>Example</th><th>Equivalent</th></tr>
<tr><td>Linux</td><td>`/home/username`</td><td>``</td></tr>
<tr><td>Mac OS</td><td>`/Users/username/Library/Application Support`</td><td>`/Library/Application Support`</td></tr>
<tr><td>Win32</td><td>`C:\Documents and Settings\username\Application Data`</td><td>&nbsp;</td></tr>
</table>


#### Example 1
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserAppDir()
```
#### Example 2
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserAppDir()
```
#### Example 3
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserAppDir()
```
<br/>

### `Function GetUserDocumentsDir:String()`

Returns the user Documents directory.

The table lists examples for the various platforms -
<table align="center">
<tr><th>Platform</th><th>Example</th><th>Equivalent</th></tr>
<tr><td>Linux</td><td>`/home/username/Documents`</td><td>`/Documents`</td></tr>
<tr><td>Mac OS</td><td>`/Users/username/Documents`</td><td>`/Documents`</td></tr>
<tr><td>Win32</td><td>`C:\Documents and Settings\username\My Documents`</td><td>&nbsp;</td></tr>
</table>


#### Example 1
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserDocumentsDir()
```
#### Example 2
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserDocumentsDir()
```
#### Example 3
```blitzmax
SuperStrict

Framework BRL.Volumes
Import BRL.Standardio

Print GetUserDocumentsDir()
```
<br/>

### `Function GetCustomDir:String(dirType:Int, flags:Int = 0)`

Returns the custom directory path.

The following table lists valid <b>dirType</b> -
<table align="center">
<tr><th>Platform</th><th>dirType</th><th>Description</th></tr>
<tr><td>Mac, Linux</td><td>DT_SHAREDUSERDATA</td><td>The Shared documents folder.</td></tr>
<tr><td>All</td><td>DT_USERPICTURES</td><td>The &quot;Pictures&quot; or &quot;My Pictures&quot; folder of the user.</td></tr>
<tr><td>All</td><td>DT_USERMUSIC</td><td>The &quot;Music&quot; or &quot;My Music&quot; folder of the user.</td></tr>
<tr><td>All</td><td>DT_USERMOVIES</td><td>The &quot;Movies&quot;, &quot;Videos&quot; or &quot;My Videos&quot; folder of the user.</td></tr>
<tr><td>Win32</td><td>CSIDL_xxxxxxxx</td><td>Any of the Windows-specific CSIDL identifiers that represent different folders on the system.</td></tr>
</table>
<p>Returns Null if <b>dirType</b> is not valid for the platform.</p>


<br/>

## Consts

### `Const kSystemDomain:Int = -32766`

Read-only system hierarchy.

<br/>

### `Const kLocalDomain:Int = -32765`

All users of a single machine have access to these resources.

<br/>

### `Const kNetworkDomain:Int = -32764`

All users configured to use a common network server has access to these resources.

<br/>

### `Const kUserDomain:Int = -32763`

Resources that are private to the user.

Read/write.


<br/>

