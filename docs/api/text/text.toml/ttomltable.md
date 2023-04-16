---
id: ttomltable
title: TTomlTable
sidebar_label: TTomlTable
---

A TOML table.


## Operators

### `Method Operator [] :ITomlNode(key:String)`

Returns the node for the given <b>key</b>, or [Null](../../../brl/brl.blitz/#null) if none exists.

<br/>

## Methods

### `Method Add(key:String, node:ITomlNode)`

Adds a node with the key <b>key</b>.

<br/>

### `Method Keys:TStringMapEnumerator()`

Returns an enumeration of the table keys.

<br/>

