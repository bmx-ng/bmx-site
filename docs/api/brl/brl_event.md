---
id: brl.event
title: BRL.Event
sidebar_label: Introduction
---



Event objects are used to notify your application about external events such as user input, 
user interface activity and so on.

The are two main ways your program can receive events: either by adding a hook function to 
the [EmitEventHook](../../brl/brl.event/#global-emiteventhookintallochookid) hook, or by using using the global event queue

The most important field in an event object is the <b>id</b> field, which identifies the kind of 
event:

| Event id | Description |
| --- | --- |
| EVENT_APPSUSPEND | Application suspended |
| EVENT_APPRESUME | Application resumed |
| EVENT_APPTERMINATE | Application wants to terminate |
| EVENT_KEYDOWN | Key pressed. Event data contains keycode |
| EVENT_KEYUP | Key released. Event data contains keycode |
| EVENT_KEYCHAR | Key character being pressed. Event data contains unicode value of character. |
| EVENT_KEYREPEAT | Key held down. Event data contains keycode |
| EVENT_MOUSEDOWN | Mouse button pressed. Event data contains mouse button code |
| EVENT_MOUSEUP | Mouse button released. Event data contains mouse button code |
| EVENT_MOUSEMOVE | Mouse moved. Event x and y contain mouse coordinates |
| EVENT_MOUSEWHEEL | Mouse wheel spun. Event data contains delta clicks |
| EVENT_MOUSEENTER | Mouse entered gadget area |
| EVENT_MOUSELEAVE | Mouse left gadget area |
| EVENT_TIMERTICK | Timer ticked. Event source contains timer object |
| EVENT_HOTKEYHIT | Hot key hit. Event data and mods contains hotkey keycode and modifier |
| EVENT_MENUACTION | Menu has been selected |
| EVENT_WINDOWMOVE | Window has been moved |
| EVENT_WINDOWSIZE | Window has been resized |
| EVENT_WINDOWCLOSE | Window close icon clicked |
| EVENT_WINDOWACTIVATE | Window activated |
| EVENT_WINDOWACCEPT | Drag and Drop operation was attempted |
| EVENT_GADGETACTION | Gadget state has been updated |
| EVENT_GADGETPAINT | A Canvas Gadget needs to be redrawn |
| EVENT_GADGETSELECT | A TreeView Node has been selected |
| EVENT_GADGETMENU | User has right clicked a TreeView Node or TextArea gadget |
| EVENT_GADGETOPEN | A TreeView Node has been expanded |
| EVENT_GADGETCLOSE | A TreeView Node has been collapsed |
| EVENT_GADGETDONE | An HTMLView has completed loading a page |
| --- | --- |


## Types
| Type | Description |
|---|---|
| [TEvent](../../brl/brl.event/tevent) | Event object type |

## Functions

### `Function EmitEvent( event:TEvent )`

Emit an event


Runs all [EmitEventHook](../../brl/brl.event/#global-emiteventhookintallochookid) hooks, passing <b>event</b> as the hook data.


<br/>

### `Function CreateEvent:TEvent( id:Int,source:Object=Null,data:Int=0,mods:Int=0,x:Int=0,y:Int=0,extra:Object=Null)`

Create an event object

#### Returns
A new event object


#### Example
```blitzmax
SuperStrict

Graphics 640,480

Const MY_EVENT:Int = 99
Local myEvent:TEvent=CreateEvent(MY_EVENT)
Local myTimer:TTImer = CreateTimer(10,myEvent)
Repeat
	WaitEvent
	Cls
	If EventID() = MY_EVENT
		DrawText "Timer has ticked " + TimerTicks(myTimer) + " times",10,15
	EndIf
	Flip
Until AppTerminate()
```
<br/>

### `Function AllocUserEventId:Int( description$="" )`

Allocate a user event id

#### Returns
A new user event id


<br/>

## Globals

### `Global EmitEventHook:Int=AllocHookId()`

Hook id for emitted events


The [EmitEventHook](../../brl/brl.event/#global-emiteventhookintallochookid) global variable contains a hook id for use with [AddHook](../../brl/brl.hook/#function-addhook-idfuncobject-iddataobjectcontextobject-contextobjectnullpriority0-).

Each time [EmitEvent](../../brl/brl.event/#function-emitevent-eventtevent-) is called, the event is passed to all [EmitEventHook](../../brl/brl.event/#global-emiteventhookintallochookid)
hook functions by means of the hook function <b>data</b> parameter.


<br/>

