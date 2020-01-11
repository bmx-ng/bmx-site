---
id: brl.endianstream
title: BRL.EndianStream
sidebar_label: BRL.EndianStream
---


Endian streams allow you to swap the byte order of stream data.<br/>
<br/>
This can be useful for reading or writing binary streams which are in a fixed endian format on multiple platforms.<br/>
<br/>
Endian format refers to the order multi-byte values are stored. For example, an integer is four bytes long, but in what order should each byte be stored? Low byte first or high byte first?<br/>
<br/>
This choice is generally dictated by the CPU. For example, Intel CPU's such as the pentium store multi-byte values 'low byte first' which is known as <i>little endian</i>. On the other hand, PowerPC CPU's store multi-byte values 'high byte first' which is known as <i>big endian</i>.<br/>
<br/>
Most of the time, you don't have to worry about endian issues. As long as the same endian format is being used to read and write data, there is no problem. However, endian issues do need to be taken into account when reading or writing binary files. For example, writing a binary file on a PC  (which is little endian) and reading it back on a Mac (which is big endian) may produce odd results if the file contains multibyte values.<br/>
<br/>
Endian streams help solve this problem by modifying the behaviour of stream commands that read or write multi-byte values. These commands are:
[ReadShort](../../brl/brl.stream/tstream/#method-readshortint), [ReadInt](../../brl/brl.stream/tstream/#method-readintint), [ReadLong](../../brl/brl.stream/tstream/#method-readlonglong), [ReadFloat](../../brl/brl.stream/tstream/#method-readfloat), [ReadDouble](../../brl/brl.stream/tstream/#method-readdouble), [WriteShort](../../brl/brl.stream/tstream/#method-writeshort-nint-), [WriteInt](../../brl/brl.stream/tstream/#method-writeint-nint-), [WriteLong](../../brl/brl.stream/tstream/#method-writelong-nlong-), [WriteFloat](../../brl/brl.stream/tstream/#method-writefloat-n-) and [WriteDouble](../../brl/brl.stream/tstream/#method-writedouble-n-).


## Functions

### `Function BigEndianStream:TStream( stream:TStream )`

BigEndianStream

#### Returns
A big endian stream


<br/>

### `Function LittleEndianStream:TStream( stream:TStream )`

LittleEndianStream

#### Returns
A little endian stream


<br/>

