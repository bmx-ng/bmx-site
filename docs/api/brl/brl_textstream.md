---
id: brl.textstream
title: BRL.TextStream
sidebar_label: BRL.TextStream
---



The Text Stream module allows you to load and save text in a number
of formats: LATIN1, UTF8 and UTF16.

The LATIN1 format uses a single byte to represent each character, and
is therefore only capable of manipulating 256 distinct character values.

The UTF8 and UTF16 formats are capable of manipulating up to 1114112
character values, but will generally use greater storage space. In addition,
many text processing applications are unable to handle UTF8 and UTF16 files.


## Functions

### `Function LoadText:String( url:Object, checkForUTF8:Int = True )`

Load text from a stream


[LoadText](../../brl/brl.textstream/#function-loadtextstring-urlobject-checkforutf8int-true-) loads LATIN1, UTF8 or UTF16 text from <b>url</b>.

The first bytes read from the stream control the format of the text:
<table><tr><td> &$fe $ff</td><td>Text is big endian UTF16</td></tr><tr><td>  &$ff $fe</td><td>Text is little endian UTF16</td></tr><tr><td>  &$ef $bb $bf</td><td>Text is UTF8</td></tr></table>


If the first bytes don't match any of the above values, the stream
is assumed to contain LATIN1 text. Additionally, when <b>checkForUTF8</b> is enabled, the
stream will be tested for UTF8 compatibility, and loaded as such as appropriate.

A [TStreamReadException](../../brl/brl.stream/tstreamreadexception) is thrown if not all bytes could be read.


#### Returns
A string containing the text


<br/>

### `Function SaveText:Int( str:String,url:Object, format:ETextStreamFormat = ETextStreamFormat.LATIN1, withBOM:Int = True )`

Save text to a stream


[SaveText](../../brl/brl.textstream/#function-savetextint-strstringurlobject-formatetextstreamformat-etextstreamformatlatin1-withbomint-true-) saves the characters in <b>str</b> to <b>url</b>.

If <b>str</b> contains any characters with a character code greater than 255,
then <b>str</b> is saved in UTF16 format. Otherwise, <b>str</b> is saved in LATIN1 format.

A [TStreamWriteException](../../brl/brl.stream/tstreamwriteexception) is thrown if not all bytes could be written.


<br/>

