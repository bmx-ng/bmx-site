---
id: tevent
title: TEvent
sidebar_label: TEvent
---

Event object type


## Fields

### `Field id:Int`

Event identifier


### `Field source:Object`

Event source object


### `Field data:Int`

Event specific data


### `Field mods:Int`

Event specific modifiers


### `Field x:Int`

Event specific position data


### `Field y:Int`

Event specific position data


### `Field extra:Object`

Event specific extra information


## Methods

### `Method Emit()`

Emit this event


This method runs all [EmitEventHook](../../../brl/brl.event/#global-emiteventhook-int-allochookid) hook function, passing <b>Self</b> as
the hook data.



### `Method ToString$()`

Convert event to a string


This method is mainly useful for debugging purposes.



## Functions

### `Function Create:TEvent( id:Int,source:Object=Null,data:Int=0,mods:Int=0,x:Int=0,y:Int=0,extra:Object=Null)`

Create an event object

#### Returns
A new event object



### `Function AllocUserId:Int()`

Allocate a user event id

#### Returns
A new user event id



