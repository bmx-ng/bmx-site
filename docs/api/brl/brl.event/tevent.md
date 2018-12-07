---
id: tevent
title: TEvent
sidebar_label: TEvent
---

Event object type


## Fields

### `Field id:Int`

Event identifier

<br/>

### `Field source:Object`

Event source object

<br/>

### `Field data:Int`

Event specific data

<br/>

### `Field mods:Int`

Event specific modifiers

<br/>

### `Field x:Int`

Event specific position data

<br/>

### `Field y:Int`

Event specific position data

<br/>

### `Field extra:Object`

Event specific extra information

<br/>

## Methods

### `Method Emit()`

Emit this event


This method runs all [EmitEventHook](../../../brl/brl.event/#global-emiteventhook-int-allochookid) hook function, passing <b>Self</b> as
the hook data.


<br/>

### `Method ToString$()`

Convert event to a string


This method is mainly useful for debugging purposes.


<br/>

## Functions

### `Function Create:TEvent( id:Int,source:Object=Null,data:Int=0,mods:Int=0,x:Int=0,y:Int=0,extra:Object=Null)`

Create an event object

#### Returns
A new event object


<br/>

### `Function AllocUserId:Int()`

Allocate a user event id

#### Returns
A new user event id


<br/>

