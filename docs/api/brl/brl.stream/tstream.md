---
id: tstream
title: TStream
sidebar_label: TStream
---

Data stream type



[TStream](../../../brl/brl.stream/tstream) extends [TIO](../../../brl/brl.stream/tio) to provide methods for reading and writing various types of values
to and from a stream.

Note that methods dealing with strings - ReadLine, WriteLine, ReadString and WriteString -
assume that strings are represented by bytes in the stream. In future, a more powerful
TextStream type will be added capable of decoding text streams in multiple formats.


## Methods

### `Method ReadBytes:Long( buf:Byte Ptr,count:Long )`

Reads bytes from a stream


[ReadBytes](../../../brl/brl.stream/tstream/#method-readbytes-long-buf-byte-ptr-count-long) reads <b>count</b> bytes from the stream into the memory block specified by <b>buf</b>.

If <b>count</b> bytes were not successfully read, a [TStreamReadException](../../../brl/brl.stream/tstreamreadexception) is thrown. This typically
occurs due to end of file.


<br/>

### `Method WriteBytes:Long( buf:Byte Ptr,count:Long )`

Writes bytes to a stream


[WriteBytes](../../../brl/brl.stream/tstream/#method-writebytes-long-buf-byte-ptr-count-long) writes <b>count</b> bytes from the memory block specified by <b>buf</b> to the stream.

If <b>count</b> bytes were not successfully written, a [TStreamWriteException](../../../brl/brl.stream/tstreamwriteexception) is thrown. This typically
occurs due to end of file.


<br/>

### `Method SkipBytes:Long( count:Long )`

Skip bytes in a stream


[SkipBytes](../../../brl/brl.stream/tstream/#method-skipbytes-long-count-long) read <b>count</b> bytes from the stream and throws them away.

If <b>count</b> bytes were not successfully read, a [TStreamReadException](../../../brl/brl.stream/tstreamreadexception) is thrown. This typically
occurs due to end of file.


<br/>

### `Method ReadByte:Int()`

Read a byte from the stream


If a value could not be read (possibly due to end of file), a [TStreamReadException](../../../brl/brl.stream/tstreamreadexception) is thrown.


#### Returns
The read value


<br/>

### `Method WriteByte( n:Int )`

Write a byte to the stream


If the value could not be written (possibly due to end of file), a [TStreamWriteException](../../../brl/brl.stream/tstreamwriteexception) is thrown.


<br/>

### `Method ReadShort:Int()`

Read a short (two bytes) from the stream


If a value could not be read (possibly due to end of file), a [TStreamReadException](../../../brl/brl.stream/tstreamreadexception) is thrown.


#### Returns
The read value


<br/>

### `Method WriteShort( n:Int )`

Write a short (two bytes) to the stream


If the value could not be written (possibly due to end of file), a [TStreamWriteException](../../../brl/brl.stream/tstreamwriteexception) is thrown.


<br/>

### `Method ReadInt:Int()`

Read an int (four bytes) from the stream


If a value could not be read (possibly due to end of file), a [TStreamReadException](../../../brl/brl.stream/tstreamreadexception) is thrown.


#### Returns
The read value


<br/>

### `Method WriteInt( n:Int )`

Write an int (four bytes) to the stream


If the value could not be written (possibly due to end of file), a [TStreamWriteException](../../../brl/brl.stream/tstreamwriteexception) is thrown.


<br/>

### `Method ReadLong:Long()`

Read a long (eight bytes) from the stream


If a value could not be read (possibly due to end of file), a [TStreamReadException](../../../brl/brl.stream/tstreamreadexception) is thrown.


#### Returns
The read value


<br/>

### `Method WriteLong( n:Long )`

Write a long (eight bytes) to the stream


If the value could not be written (possibly due to end of file), a [TStreamWriteException](../../../brl/brl.stream/tstreamwriteexception) is thrown.


<br/>

### `Method ReadFloat#()`

Read a float (four bytes) from the stream


If a value could not be read (possibly due to end of file), a [TStreamReadException](../../../brl/brl.stream/tstreamreadexception) is thrown.


#### Returns
The read value


<br/>

### `Method WriteFloat( n# )`

Write a float (four bytes) to the stream


If the value could not be written (possibly due to end of file), a [TStreamWriteException](../../../brl/brl.stream/tstreamwriteexception) is thrown.


<br/>

### `Method ReadDouble!()`

Read a double (eight bytes) from the stream


If a value could not be read (possibly due to end of file), a [TStreamReadException](../../../brl/brl.stream/tstreamreadexception) is thrown.


#### Returns
The read value


<br/>

### `Method WriteDouble( n! )`

Write a double (eight bytes) to the stream


If the value could not be written (possibly due to end of file), a [TStreamWriteException](../../../brl/brl.stream/tstreamwriteexception) is thrown.


<br/>

### `Method ReadLine$()`

Read a line of text from the stream


Bytes are read from the stream until a newline character (ascii code 10) or null
character (ascii code 0) is read, or end of file is detected.

Carriage return characters (ascii code 13) are silently ignored.

The bytes read are returned in the form of a string, excluding any terminating newline
or null character.


<br/>

### `Method WriteLine:Int( str$ )`

Write a line of text to the stream

A sequence of bytes is written to the stream (one for each character in <b>str</b>)
followed by the line terminating sequence "rn".


#### Returns
True if line successfully written, else False


<br/>

### `Method ReadString$( length:Int )`

Read characters from the stream


A [TStreamReadException](../../../brl/brl.stream/tstreamreadexception) is thrown if not all bytes could be read.


#### Returns
A string composed of <b>length</b> bytes read from the stream


<br/>

### `Method WriteString( str$ )`

Write characters to the stream


A [TStreamWriteException](../../../brl/brl.stream/tstreamwriteexception) is thrown if not all bytes could be written.


<br/>

