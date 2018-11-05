---
id: tstreamfactory
title: TStreamFactory
sidebar_label: TStreamFactory
---



Stream factories are used by the [OpenStream](../../../brl/brl.stream/#function-openstream-tstream-url-object-readable-int-true-writeable-int-true), [ReadStream](../../../brl/brl.stream/#function-readstream-tstream-url-object) and [WriteStream](../../../brl/brl.stream/#function-writestream-tstream-url-object) functions
to create streams based on a 'url object'.

Url objects are usually strings, in which case the url is divided into 2 parts - a
protocol and a path. These are separated by a double colon string - "::".

To create your own stream factories, you should extend the TStreamFactory type and
implement the CreateStream method.

To install your stream factory, simply create an instance of it using 'New'.


## Methods

### `Method CreateStream:TStream( url:Object,proto$,path$,readable:Int,writeable:Int ) Abstract`

Create a stream based on a url object


Types which extends TStreamFactory must implement this method.

<b>url</b> contains the original url object as supplied to [OpenStream](../../../brl/brl.stream/#function-openstream-tstream-url-object-readable-int-true-writeable-int-true), [ReadStream](../../../brl/brl.stream/#function-readstream-tstream-url-object) or
[WriteStream](../../../brl/brl.stream/#function-writestream-tstream-url-object).

If <b>url</b> is a string, <b>proto</b> contains the url protocol - for example, the "incbin" part
of "incbin::myfile".

If <b>url</b> is a string, <b>path</b> contains the remainder of the url - for example, the "myfile"
part of "incbin::myfile".

If <b>url</b> is not a string, both <b>proto</b> and <b>path</b> will be Null.



