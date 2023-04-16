---
id: ttoml
title: TToml
sidebar_label: TToml
---

TOML loader.


## Functions

### `Function Parse:TTomlTable(doc:String)`

Parses a String of TOML.


May throw a [TTomlParseError](../../../text/text.toml/ttomlparseerror).


<br/>

### `Function Load:TTomlTable(path:String)`

Loads a TOML file from the given <b>path</b>.


May throw a [TTomlParseError](../../../text/text.toml/ttomlparseerror).


<br/>

### `Function Load:TTomlTable(stream:TStream)`

Loads a TOML file from the given <b>stream</b>.


May throw a [TTomlParseError](../../../text/text.toml/ttomlparseerror).


<br/>

