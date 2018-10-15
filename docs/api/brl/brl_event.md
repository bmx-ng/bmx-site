---
id: brl.event
title: BRL.Event
sidebar_label: BRL.Event
---



Event objects are used to notify your application about external events such as user input, 
user interface activity and so on.

The are two main ways your program can receive events: either by adding a hook function to 
the [EmitEventHook](../../brl/brl.event/#global-emiteventhook-int-allochookid) hook, or by using using the global event queue

The most important field in an event object is the <b>id</b> field, which identifies the kind of 
event:

<table><tr><td> <b>Event id</b></td><td><b>Description</b></td></tr><tr><td>  EVENT_APPSUSPEND</td><td>Application suspended</td></tr><tr><td>  EVENT_APPRESUME</td><td>Application resumed</td></tr><tr><td>  EVENT_APPTERMINATE</td><td>Application wants to terminate</td></tr><tr><td>  EVENT_KEYDOWN</td><td>Key pressed. Event data contains keycode</td></tr><tr><td>  EVENT_KEYUP</td><td>Key released. Event data contains keycode</td></tr><tr><td>  EVENT_KEYCHAR</td><td>Key character. Event data contains unicode value</td></tr><tr><td>  EVENT_MOUSEDOWN</td><td>Mouse button pressed. Event data contains mouse button code</td></tr><tr><td>  EVENT_MOUSEUP</td><td>Mouse button released. Event data contains mouse button code</td></tr><tr><td>  EVENT_MOUSEMOVE</td><td>Mouse moved. Event x and y contain mouse coordinates</td></tr><tr><td>  EVENT_MOUSEWHEEL</td><td>Mouse wheel spun. Event data contains delta clicks</td></tr><tr><td>  EVENT_MOUSEENTER</td><td>Mouse entered gadget area</td></tr><tr><td>  EVENT_MOUSELEAVE</td><td>Mouse left gadget area</td></tr><tr><td>  EVENT_TIMERTICK</td><td>Timer ticked. Event source contains timer object</td></tr><tr><td>  EVENT_HOTKEYHIT</td><td>Hot key hit. Event data and mods contains hotkey keycode and modifier</td></tr><tr><td>  EVENT_MENUACTION</td><td>Menu has been selected</td></tr><tr><td>  EVENT_WINDOWMOVE</td><td>Window has been moved</td></tr><tr><td>  EVENT_WINDOWSIZE</td><td>Window has been resized</td></tr><tr><td>  EVENT_WINDOWCLOSE</td><td>Window close icon clicked</td></tr><tr><td>  EVENT_WINDOWACTIVATE</td><td>Window activated</td></tr><tr><td>  EVENT_WINDOWACCEPT</td><td>Drag and Drop operation was attempted</td></tr><tr><td>  EVENT_GADGETACTION</td><td>Gadget state has been updated</td></tr><tr><td>  EVENT_GADGETPAINT</td><td>A Canvas Gadget needs to be redrawn</td></tr><tr><td>  EVENT_GADGETSELECT</td><td>A TreeView Node has been selected</td></tr><tr><td>  EVENT_GADGETMENU</td><td>User has right clicked a TreeView Node or TextArea gadget</td></tr><tr><td>  EVENT_GADGETOPEN</td><td>A TreeView Node has been expanded</td></tr><tr><td>  EVENT_GADGETCLOSE</td><td>A TreeView Node has been collapsed</td></tr><tr><td>  EVENT_GADGETDONE</td><td>An HTMLView has completed loading a page</table>



## Types
| Type | Description |
|---|---|
| [TEvent](../../brl/brl.event/tevent) | Event object type |

## Functions

### `Function EmitEvent( event:TEvent )`

Emit an event


Runs all [EmitEventHook](../../brl/brl.event/#global-emiteventhook-int-allochookid) hooks, passing <b>event</b> as the hook data.



### `Function CreateEvent:TEvent( id:Int,source:Object=Null,data:Int=0,mods:Int=0,x:Int=0,y:Int=0,extra:Object=Null)`

Create an event object

#### Returns
A new event object



### `Function AllocUserEventId:Int( description$="" )`

Allocate a user event id

#### Returns
A new user event id



## Globals

### `Global EmitEventHook:Int=AllocHookId()`

Hook id for emitted events


The [EmitEventHook](../../brl/brl.event/#global-emiteventhook-int-allochookid) global variable contains a hook id for use with [AddHook](../../brl/brl.hook/#function-addhook-id-func-object-id-data-object-context-object-context-object-null-priority-0).

Each time [EmitEvent](../../brl/brl.event/#function-emitevent-event-tevent) is called, the event is passed to all [EmitEventHook](../../brl/brl.event/#global-emiteventhook-int-allochookid)
hook functions by means of the hook function <b>data</b> parameter.



