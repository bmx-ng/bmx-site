---
id: tio
title: TIO
sidebar_label: TIO
---



To create your own stream types, you should extend TStream and implement
at least these methods.

You should also make sure your stream can handle multiple calls to the Close method.


## Methods

### `Method Eof:Int()`

Get stream end of file status


For seekable streams such as file streams, Eof generally returns True if the file
position equals the file size. This means that no more bytes can be read from the
stream. However, it may still be possible to write bytes, in which case the file will
'grow'.

For communication type streams such as socket streams, Eof returns True if the stream
has been shut down for some reason - either locally or by the remote host. In this case,
no more bytes can be read from or written to the stream.


#### Returns
True for end of file reached, otherwise False



### `Method Pos:Long()`

Get position of seekable stream

#### Returns
Stream position as a byte offset, or -1 if stream is not seekable



### `Method Size:Long()`

Get size of seekable stream

#### Returns
Size, in bytes, of seekable stream, or 0 if stream is not seekable



### `Method Seek:Long( pos:Long, whence:Int = SEEK_SET_ )`

Seek to position in seekable stream

#### Returns
New stream position, or -1 if stream is not seekable



### `Method Flush()`

Flush stream


Flushes any internal stream buffers.



### `Method Close()`

Close stream


Closes the stream after flushing any internal stream buffers.



### `Method Read:Long( buf:Byte Ptr,count:Long )`

Read at least 1 byte from a stream


This method may 'block' if it is not possible to read at least one byte due to IO
buffering.

If this method returns 0, the stream has reached end of file.


#### Returns
Number of bytes successfully read



### `Method Write:Long( buf:Byte Ptr,count:Long )`

Write at least 1 byte to a stream


This method may 'block' if it is not possible to write at least one byte due to IO
buffering.

If this method returns 0, the stream has reached end of file.


#### Returns
Number of bytes successfully written



