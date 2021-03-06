---
id: brl.stream
title: BRL.Stream
sidebar_label: Introduction
---



Streams are used to read or write data in a sequential manner.

BlitzMax supports many kinds of streams, including standard file streams 
(for reading and writing to files), bank streams (for reading and writing to banks) and 
endian streams (for swapping the byte order of stream data).

Streams are usually created using [OpenStream](../../brl/brl.stream/#function-openstreamtstream-urlobjectreadableinttruewritemodeintwritemodeoverwrite-), [ReadStream](../../brl/brl.stream/#function-readstreamtstream-urlobject-) or [WriteStream](../../brl/brl.stream/#function-writestreamtstream-urlobject-). However,
some kinds of streams provide their own methods for creating streams. For example, banks
streams are created with the [CreateBankStream](../../brl/brl.bankstream/#function-createbankstreamtbankstream-banktbank-) command.

[OpenStream](../../brl/brl.stream/#function-openstreamtstream-urlobjectreadableinttruewritemodeintwritemodeoverwrite-), [ReadStream](../../brl/brl.stream/#function-readstreamtstream-urlobject-) and [WriteStream](../../brl/brl.stream/#function-writestreamtstream-urlobject-) all require a <i>url</i> parameter, which is used to
'locate' the stream. A url is usually a string value.

If the url contains the string "::", then a stream <i>protocol</i> is being specified. If not,
then the url is assumed to be a simple filename.

External modules can add their own stream protocols to the system, allowing you to use streams
for a wide variety of purposes. For example, the "incbin::" protocol allows you to read data
from a binary file that has been embedded in an application using the [Incbin](../../brl/brl.blitz/#incbin) command.

Other protocols include "http::" for reading and writing data over a network, and 
"littleendian::" and "bigendian::" for swapping the byte order of streams.

To write to a stream, use one of the 'Write' style commands, such as [WriteByte](../../brl/brl.stream/tstream/#method-writebyte-nint-).

To read from a stream, use one of the 'Read' style commands, such as [ReadByte](../../brl/brl.stream/tstream/#method-readbyteint).

Some kinds of streams (for example, file streams and bank streams) support <i>random access</i>.
This means that you can modify where in the stream the next read or write is to occur using
the [SeekStream](../../brl/brl.stream/#function-seekstreamlong-streamtstream-poslong-whenceint-seekset-) command. You can also tell where you are in such streams using the 
[StreamPos](../../brl/brl.stream/#function-streamposlong-streamtstream-) command.

When you are finished with a stream, you should always close it using [CloseStream](../../brl/brl.stream/#function-closestream-streamtstream-).
Failure to do so may result in a resource leak, or prevent the stream from successfully
opening in future.


## Types
| Type | Description |
|---|---|
| [TStreamException](../../brl/brl.stream/tstreamexception) | Base exception type thrown by streams |
| [TStreamReadException](../../brl/brl.stream/tstreamreadexception) | Exception type thrown by streams in the event of read errors |
| [TStreamWriteException](../../brl/brl.stream/tstreamwriteexception) | Exception type thrown by streams in the event of write errors |
| [TIO](../../brl/brl.stream/tio) | Base input/output type |
| [TStream](../../brl/brl.stream/tstream) | Data stream type |
| [TStreamWrapper](../../brl/brl.stream/tstreamwrapper) | Utility stream wrapper type |
| [TCStream](../../brl/brl.stream/tcstream) | Standard C file stream type |
| [TStreamFactory](../../brl/brl.stream/tstreamfactory) | Base stream factory type |

## Functions

### `Function OpenStream:TStream( url:Object,readable:Int=True,writeMode:Int=WRITE_MODE_OVERWRITE )`

Open a stream for reading/writing/appending

All streams created by [OpenStream](../../brl/brl.stream/#function-openstreamtstream-urlobjectreadableinttruewritemodeintwritemodeoverwrite-), [ReadStream](../../brl/brl.stream/#function-readstreamtstream-urlobject-), [WriteStream](../../brl/brl.stream/#function-writestreamtstream-urlobject-) or [AppendStream](../../brl/brl.stream/#function-appendstreamtstream-urlobject-) should eventually be
closed using [CloseStream](../../brl/brl.stream/#function-closestream-streamtstream-).


#### Returns
A stream object


<br/>

### `Function ReadStream:TStream( url:Object )`

Open a stream for reading

All streams created by [OpenStream](../../brl/brl.stream/#function-openstreamtstream-urlobjectreadableinttruewritemodeintwritemodeoverwrite-), [ReadStream](../../brl/brl.stream/#function-readstreamtstream-urlobject-) or [WriteStream](../../brl/brl.stream/#function-writestreamtstream-urlobject-) should eventually
be closed using [CloseStream](../../brl/brl.stream/#function-closestream-streamtstream-).


#### Returns
A stream object


#### Example
```blitzmax
' readstream.bmx

' opens a read stream to the blitzmax.org website and
' dumps the content to the console using readline and print

SuperStrict

Local in:TStream = ReadStream("http::blitzmax.org")

If Not in RuntimeError "Failed to open a ReadStream to file http::blitzmax.org"

While Not Eof(in)
	Print ReadLine(in)
Wend
CloseStream in
```
<br/>

### `Function WriteStream:TStream( url:Object )`

Open a stream for writing

All streams created by [OpenStream](../../brl/brl.stream/#function-openstreamtstream-urlobjectreadableinttruewritemodeintwritemodeoverwrite-), [ReadStream](../../brl/brl.stream/#function-readstreamtstream-urlobject-), [WriteStream](../../brl/brl.stream/#function-writestreamtstream-urlobject-) or [AppendStream](../../brl/brl.stream/#function-appendstreamtstream-urlobject-) should eventually
be closed using [CloseStream](../../brl/brl.stream/#function-closestream-streamtstream-).


#### Returns
A stream object


#### Example
```blitzmax
' writestream.bmx

' opens a write stream to the file mygame.ini and
' outputs a simple text file using WriteLine

SuperStrict

Local out:TStream = WriteStream("mygame.ini")

If Not out RuntimeError "Failed to open a WriteStream to file mygame.ini"

WriteLine out,"[display]"
WriteLine out,"width=800"
WriteLine out,"height=600"
WriteLine out,"depth=32"
WriteLine out,""
WriteLine out,"[highscores]"
WriteLine out,"AXE=1000"
WriteLine out,"HAL=950"
WriteLine out,"MAK=920"

CloseStream out

Print "File mygame.ini created, bytes="+FileSize("mygame.ini")
```
<br/>

### `Function AppendStream:TStream( url:Object )`

Open a stream for appending

All streams created by [OpenStream](../../brl/brl.stream/#function-openstreamtstream-urlobjectreadableinttruewritemodeintwritemodeoverwrite-), [ReadStream](../../brl/brl.stream/#function-readstreamtstream-urlobject-), [WriteStream](../../brl/brl.stream/#function-writestreamtstream-urlobject-) or [AppendStream](../../brl/brl.stream/#function-appendstreamtstream-urlobject-) should eventually
be closed using [CloseStream](../../brl/brl.stream/#function-closestream-streamtstream-).


#### Returns
A stream object


<br/>

### `Function Eof:Int( stream:TStream )`

Get stream end of file status

#### Returns
True If stream is at end of file


<br/>

### `Function StreamPos:Long( stream:TStream )`

Get current position of seekable stream

#### Returns
Current stream position, or -1 If stream is not seekable


<br/>

### `Function StreamSize:Long( stream:TStream )`

Get current size of seekable stream

#### Returns
Current stream size in bytes, or -1 If stream is not seekable


<br/>

### `Function SeekStream:Long( stream:TStream, pos:Long, whence:Int = SEEK_SET_ )`

Set stream position of seekable stream

#### Returns
New stream position, or -1 If stream is not seekable


<br/>

### `Function FlushStream( stream:TStream )`

Flush a stream

[FlushStream](../../brl/brl.stream/#function-flushstream-streamtstream-) writes any outstanding buffered data to <b>stream</b>.


<br/>

### `Function CloseStream( stream:TStream )`

Close a stream


All streams should be closed when they are no longer required.
Closing a stream also flushes the stream before it closes.


<br/>

### `Function ReadByte:Int( stream:TStream )`

Read a Byte from a stream

[ReadByte](../../brl/brl.stream/tstream/#method-readbyteint) reads a single Byte from <b>stream</b>.
A TStreamReadException is thrown If there is not enough data available.


#### Returns
A Byte value


<br/>

### `Function ReadShort:Int( stream:TStream )`

Read a Short from a stream

[ReadShort](../../brl/brl.stream/tstream/#method-readshortint) reads 2 bytes from <b>stream</b>.
A TStreamReadException is thrown If there is not enough data available.


#### Returns
A Short value


<br/>

### `Function ReadInt:Int( stream:TStream )`

Read an Int from a stream

[ReadInt](../../brl/brl.stream/tstream/#method-readintint) reads 4 bytes from <b>stream</b>.
A TStreamReadException is thrown If there is not enough data available.


#### Returns
An Int value


<br/>

### `Function ReadLong:Long( stream:TStream )`

Read a Long from a stream

[ReadLong](../../brl/brl.stream/tstream/#method-readlonglong) reads 8 bytes from <b>stream</b>.
A TStreamReadException is thrown If there is not enough data available.


#### Returns
A Long value


<br/>

### `Function ReadFloat#( stream:TStream )`

Read a Float from a stream

[ReadFloat](../../brl/brl.stream/tstream/#method-readfloat) reads 4 bytes from <b>stream</b>.
A TStreamReadException is thrown If there is not enough data available.


#### Returns
A Float value


<br/>

### `Function ReadDouble!( stream:TStream )`

Read a Double from a stream

[ReadDouble](../../brl/brl.stream/tstream/#method-readdouble) reads 8 bytes from <b>stream</b>.
A TStreamWriteException is thrown If there is not enough data available.


#### Returns
A Double value


<br/>

### `Function WriteByte( stream:TStream,n:Int )`

Write a Byte to a stream

[WriteByte](../../brl/brl.stream/tstream/#method-writebyte-nint-) writes a single Byte to <b>stream</b>.
A TStreamWriteException is thrown If the Byte could Not be written


<br/>

### `Function WriteShort( stream:TStream,n:Int )`

Write a Short to a stream

[WriteShort](../../brl/brl.stream/tstream/#method-writeshort-nint-) writes 2 bytes to <b>stream</b>.
A TStreamWriteException is thrown if not all bytes could be written


<br/>

### `Function WriteInt( stream:TStream,n:Int )`

Write an Int to a stream

[WriteInt](../../brl/brl.stream/tstream/#method-writeint-nint-) writes 4 bytes to <b>stream</b>.
A TStreamWriteException is thrown if not all bytes could be written


<br/>

### `Function WriteLong( stream:TStream,n:Long )`

Write a Long to a stream

[WriteLong](../../brl/brl.stream/tstream/#method-writelong-nlong-) writes 8 bytes to <b>stream</b>.
A TStreamWriteException is thrown if not all bytes could be written


<br/>

### `Function WriteFloat( stream:TStream,n# )`

Write a Float to a stream

[WriteFloat](../../brl/brl.stream/tstream/#method-writefloat-n-) writes 4 bytes to <b>stream</b>.
A TStreamWriteException is thrown if not all bytes could be written


<br/>

### `Function WriteDouble( stream:TStream,n! )`

Write a Double to a stream

[WriteDouble](../../brl/brl.stream/tstream/#method-writedouble-n-) writes 8 bytes to <b>stream</b>.
A TStreamWriteException is thrown if not all bytes could be written


<br/>

### `Function ReadString$( stream:TStream,length:Int )`

Read a String from a stream


A [TStreamReadException](../../brl/brl.stream/tstreamreadexception) is thrown if not all bytes could be read.


#### Returns
A String of length <b>length</b>


<br/>

### `Function WriteString( stream:TStream,str$ )`

Write a String to a stream


Each character in <b>str</b> is written to <b>stream</b>.

A [TStreamWriteException](../../brl/brl.stream/tstreamwriteexception) is thrown if not all bytes could be written.


<br/>

### `Function ReadLine$( stream:TStream )`

Read a line of text from a stream


Bytes are read from <b>stream</b> until a newline character (ascii code 10) or null
character (ascii code 0) is read, or end of file is detected.

Carriage Return characters (ascii code 13) are silently ignored.

The bytes read are returned in the form of a string, excluding any terminating newline
or null character.


#### Returns
A string


<br/>

### `Function WriteLine:Int( stream:TStream,str$ )`

Write a line of text to a stream


A sequence of bytes is written to the stream (one for each character in <b>str</b>)
followed by the line terminating sequence "rn".


#### Returns
True if line successfully written, else False


<br/>

### `Function LoadString$( url:Object )`

Load a String from a stream


The specified <b>url</b> is opened for reading, and each byte in the resultant stream
(until eof of file is reached) is read into a string.

A [TStreamReadException](../../brl/brl.stream/tstreamreadexception) is thrown if the stream could not be read.


#### Returns
A String


<br/>

### `Function SaveString( str$,url:Object )`

Save a String to a stream


The specified <b>url</b> is opened For writing, and each character of <b>str</b> is written to the
resultant stream.

A [TStreamWriteException](../../brl/brl.stream/tstreamwriteexception) is thrown if not all bytes could be written.


<br/>

### `Function LoadByteArray:Byte[]( url:Object )`

Load a Byte array from a stream


The specified <b>url</b> is opened for reading, and each byte in the resultant stream
(until eof of reached) is read into a byte array.


#### Returns
A Byte array


<br/>

### `Function SaveByteArray( byteArray:Byte[],url:Object )`

Save a Byte array to a stream


The specified <b>url</b> is opened For writing, and each element of <b>byteArray</b> is written to the
resultant stream.

A [TStreamWriteException](../../brl/brl.stream/tstreamwriteexception) is thrown if not all bytes could be written.


<br/>

### `Function CopyStream( fromStream:TStream,toStream:TStream,bufSize:Int=4096 )`

Copy stream contents to another stream


[CopyStream](../../brl/brl.stream/#function-copystream-fromstreamtstreamtostreamtstreambufsizeint4096-) copies bytes from <b>fromStream</b> to <b>toStream</b> Until <b>fromStream</b> reaches end
of file.

A [TStreamWriteException](../../brl/brl.stream/tstreamwriteexception) is thrown if not all bytes could be written.


<br/>

### `Function CopyBytes( fromStream:TStream,toStream:TStream,count:Int,bufSize:Int=4096 )`

Copy bytes from one stream to another


[CopyBytes](../../brl/brl.stream/#function-copybytes-fromstreamtstreamtostreamtstreamcountintbufsizeint4096-) copies <b>count</b> bytes from <b>fromStream</b> to <b>toStream</b>.

A [TStreamReadException](../../brl/brl.stream/tstreamreadexception) is thrown if not all bytes could be read, and a
[TStreamWriteException](../../brl/brl.stream/tstreamwriteexception) is thrown if not all bytes could be written.


<br/>

### `Function CasedFileName$(path$)`

Returns a case sensitive filename if it exists from a case insensitive file path.

<br/>

## Consts

### `Const WRITE_MODE_OVERWRITE:Int = 1`

Opens a file for output operations.

<br/>

### `Const WRITE_MODE_APPEND:Int = 2`

Opens a file for appending with all output operations writing data at the end of the file.

Repositioning operations such as [Seek](../../brl/brl.stream/tio/#method-seeklong-poslong-whenceint-seekset-) affects the next input operations, but output operations move the position back to the end of file.


<br/>

