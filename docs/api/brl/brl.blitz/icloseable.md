---
id: icloseable
title: ICloseable
sidebar_label: ICloseable
---

An object that can be closed to release resources.


The [Close](../../../brl/brl.blitz/icloseable/#method-close) method of an ICloseable object is automatically called when exiting a [Using](../../../brl/brl.blitz/#using) block where the object has
been declared in the [Using](../../../brl/brl.blitz/#using) statement.


## Methods

### `Method Close()`

Closes the resource, releasing any associated resources.

This method is invoked automatically when exiting a [Using](../../../brl/brl.blitz/#using) block where the object has
been declared in the [Using](../../../brl/brl.blitz/#using) statement.


<br/>

