---
id: tstreamwrapper
title: TStreamWrapper
sidebar_label: TStreamWrapper
---



[TStreamWrapper](../../brl/brl.stream/tstreamwrapper) 'wraps' an existing stream, redirecting all TIO method calls to the wrapped
stream.

This can be useful for writing stream 'filters' that modify the behaviour of existing
streams.

Note that the Close method causes the underlying stream to be closed, which may not always
be desirable. If necessary, you should override Close with a NOP version.


## Methods

### `Method SetStream( stream:TStream )`

Set underlying stream


Sets the stream to be 'wrapped'. All calls to TIO methods of this stream will be
redirected to <b>stream</b>.



