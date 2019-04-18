---
id: brl.stringbuilder
title: BRL.StringBuilder
sidebar_label: BRL.StringBuilder
---


This module provides a mutable [String](../../brl/brl.blitz/#string) like object, [TStringBuilder](../../brl/brl.stringbuilder/tstringbuilder).

Unlike with an instance of [String](../../brl/brl.blitz/#string), a [TStringBuilder](../../brl/brl.stringbuilder/tstringbuilder) object can be modified by
appending, removing, replacing or inserting characters. A [TStringBuilder](../../brl/brl.stringbuilder/tstringbuilder) object
maintains an internal buffer to efficiently accommodate expansions to the string.
New text is appended to the buffer there is space available, or a larger buffer is
allocated and the text copied into the new buffer.

The contents of a [String](../../brl/brl.blitz/#string), on the other hand, cannot be modified, and any manipulation
of a [String](../../brl/brl.blitz/#string) (like adding two strings together) results in the creation of new [String](../../brl/brl.blitz/#string) objects.

If you intend to perform extensive string manipulation, you should certainly consider using
a [TStringBuilder](../../brl/brl.stringbuilder/tstringbuilder).

> Although [TStringBuilder](../../brl/brl.stringbuilder/tstringbuilder) generally offers better efficiency over [String](../../brl/brl.blitz/#string), you don't
necessarily want to replace all uses of [String](../../brl/brl.blitz/#string) with [TStringBuilder](../../brl/brl.stringbuilder/tstringbuilder) whenever you do
string manipulation. There are a number of factors - like the size of the string, memory
allocations, the system you are running on, and the kind of operation - which determine
whether using a [TStringBuilder](../../brl/brl.stringbuilder/tstringbuilder) offers a significant performance improvement. Try to
benchmark any changes you make to ensure you are using the best features.


## Types
| Type | Description |
|---|---|
| [TStringBuilder](../../brl/brl.stringbuilder/tstringbuilder) | A modifiable String. |
| [TSplitBuffer](../../brl/brl.stringbuilder/tsplitbuffer) | An array of split text from a TStringBuilder. |

