---
id: brl.eventqueue
title: BRL.EventQueue
sidebar_label: BRL.EventQueue
---



The event queue is a simple first-in, first-out queue that is used to collect 
[TEvent](../../brl/brl.event/tevent) objects emitted by your application.

The [PollEvent](../../brl/brl.eventqueue/#function-pollevent-int) and [WaitEvent](../../brl/brl.eventqueue/#function-waitevent-int) commands can be used to receive the next event from the event
queue, while the [PeekEvent](../../brl/brl.eventqueue/#function-peekevent-tevent) command can be used to check if the event queue is empty.

Events are added to the event queue using [PostEvent](../../brl/brl.eventqueue/#function-postevent-event-tevent-update-int-false).


## Functions

### `Function PeekEvent:TEvent()`

Examine the next event in the event queue


[PeekEvent](../../brl/brl.eventqueue/#function-peekevent-tevent) examines the next event in the event queue, without removing it from the
event queue or modifying the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent) global variable.

If there are no events in the event queue, [PeekEvent](../../brl/brl.eventqueue/#function-peekevent-tevent) returns [Null](../../brl/brl.blitz/#null).



### `Function PollEvent:Int()`

Get the next event from the event queue


[PollEvent](../../brl/brl.eventqueue/#function-pollevent-int) removes an event from the event queue and updates the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent)
global variable.

If there are no events in the event queue, [PollEvent](../../brl/brl.eventqueue/#function-pollevent-int) returns 0.


#### Returns
The id of the next event in the event queue, or 0 if the event queue is empty



### `Function WaitEvent:Int()`

Get the next event from the event queue, waiting if necessary


[WaitEvent](../../brl/brl.eventqueue/#function-waitevent-int) removes an event from the event queue and updates the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent)
global variable.

If there are no events in the event queue, [WaitEvent](../../brl/brl.eventqueue/#function-waitevent-int) halts program execution until
an event is available.


#### Returns
The id of the next event in the event queue



### `Function PostEvent( event:TEvent,update:Int=False )`

Post an event to the event queue

[PostEvent](../../brl/brl.eventqueue/#function-postevent-event-tevent-update-int-false) adds an event to the end of the event queue.

The <b>update</b> flag can be used to update an existing event. If <b>update</b> is True
and an event with the same <b>id</b> and <b>source</b> is found in the event
queue, the existing event will be updated instead of <b>event</b>
being added to the event queue. This can be useful to prevent high frequency
events such as timer events from flooding the event queue.



### `Function EventID:Int()`

Get current event id

#### Returns
The <b>id</b> field of the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent) global variable


#### Example
```blitzmax
SuperStrict

Import MaxGUI.Drivers

Local MyWindow:TGadget=CreateWindow("Button Example", 200,200,320,240)
Local MyButton:TGadget=CreateButton("Click Me",140,60,80,40, MyWindow)

Repeat
  WaitEvent()
  Select EventID()
  Case EVENT_WINDOWCLOSE
     End
   End Select
Forever
```

### `Function EventData:Int()`

Get current event data

#### Returns
The <b>data</b> field of the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent) global variable


#### Example
```blitzmax
SuperStrict

Import MaxGUI.Drivers

Local window:tgadget=CreateWindow("leftclick/rightclick",0,0,320,240)

Local canvas:tgadget=CreateCanvas(4,4,160,160,window,1)

Repeat
	WaitEvent()
	If EventID()=EVENT_WINDOWCLOSE End
	
	Select EventData()
		Case 1 Print "leftclick"
		Case 2 Print "rightclick"
	End Select
Forever
```

### `Function EventMods:Int()`

Get current event modifiers

#### Returns
The <b>mods</b> field of the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent) global variable



### `Function EventX:Int()`

Get current event x value

#### Returns
The <b>x</b> field of the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent) global variable


#### Example
```blitzmax
SuperStrict

Import MaxGUI.Drivers

Local window:tgadget=CreateWindow("move mouse",0,0,320,240)

Local canvas:tgadget=CreateCanvas(4,4,160,160,window,1)

Repeat
	WaitEvent()
	If EventID()=EVENT_WINDOWCLOSE End
	
	If EventID()=EVENT_MOUSEMOVE
		Print EventX()
	EndIf
Forever
```

### `Function EventY:Int()`

Get current event y value

#### Returns
The <b>y</b> field of the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent) global variable


#### Example
```blitzmax
SuperStrict

Import MaxGUI.Drivers

Local window:tgadget=CreateWindow("move mouse",0,0,320,240)

Local canvas:tgadget=CreateCanvas(4,4,160,160,window,1)

Repeat
	WaitEvent()
	If EventID()=EVENT_WINDOWCLOSE End
	
	If EventID()=EVENT_MOUSEMOVE
		Print EventY()
	EndIf
Forever
```

### `Function EventExtra:Object()`

Get current event extra value

#### Returns
The <b>extra</b> field of the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent) global variable



### `Function EventText$()`

Get current event extra value converted to a string

#### Returns
The <b>extra</b> field of the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent) global variable converted to a string


#### Example
```blitzmax
'
' Drop a file onto the window to see EventText() return the path.
'
SuperStrict

Import MaxGUI.Drivers

Local window:tgadget=CreateWindow("move mouse",0,0,320,240,Null,15|WINDOW_ACCEPTFILES)

Repeat
	WaitEvent()
	If EventID()=EVENT_WINDOWCLOSE End
	
	If EventID()=EVENT_WINDOWACCEPT
		Print EventText()
	EndIf
Forever
```

### `Function EventSource:Object()`

Get current event source object

#### Returns
The <b>source</b> field of the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent) global variable


#### Example
```blitzmax
SuperStrict

Import MaxGUI.Drivers

Local MyWindow:TGadget=CreateWindow("Two Buttons Example", 200,200,320,240)
Local Button1:TGadget=CreateButton("One",140,40,80,40, MyWindow)
Local Button2:TGadget=CreateButton("Two",140,100,80,40, MyWindow)

Repeat
  WaitEvent()
  Select EventID()
  Case EVENT_WINDOWCLOSE
     End
  Case EVENT_GADGETACTION
    Select EventSource()
      Case Button1
         SetGadgetText(Button1,"One clicked")
      Case Button2
         SetGadgetText(Button2,"Two clicked")
      End Select
   End Select
Forever
```

### `Function EventSourceHandle:Size_T()`

Get current event source object handle

#### Returns
The <b>source</b> field of the [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent) global variable converted to an integer handle



## Globals

### `Global CurrentEvent:TEvent=NullEvent`

Current Event

The [CurrentEvent](../../brl/brl.eventqueue/#global-currentevent-tevent-nullevent) global variable contains the event most recently returned by
[PollEvent](../../brl/brl.eventqueue/#function-pollevent-int) or [WaitEvent](../../brl/brl.eventqueue/#function-waitevent-int).



