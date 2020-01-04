---
id: brl.timer
title: BRL.Timer
sidebar_label: BRL.Timer
---


## Types
| Type | Description |
|---|---|
| [TChrono](../../brl/brl.timer/tchrono) | A high resolution timing mechanism. |

## Functions

### `Function CreateTimer:TTimer( hertz#,event:TEvent=Null )`

Create a timer


[CreateTimer](../../brl/brl.timer/#function-createtimerttimer-hertzeventteventnull-) creates a timer object that 'ticks' <b>hertz</b> times per second.

Each time the timer ticks, <b>event</b> will be emitted using [EmitEvent](../../brl/brl.event/#function-emitevent-eventtevent-).

If <b>event</b> is Null, an event with an <b>id</b> equal to EVENT_TIMERTICK and
<b>source</b> equal to the timer object will be emitted instead.


#### Returns
A new timer object


#### Example 1
```blitzmax
SuperStrict

'Maximum allowable Timer is 16
Global timers:TTimer[500]

For Local n:Int = 0 Until 18
	timers[n] = CreateTimer(1)
	If timers[n] = Null
		Print "Cannot create timer "+n
	Else
		Print "Successfully created timer "+n
	EndIf
Next
```
#### Example 2
```blitzmax
'Animation on MaxGUI canvas
SuperStrict

Import MaxGUI.Drivers

Local MyWindow:TGadget=CreateWindow("Canvas Example", 200,200,320,240)
Local MyCanvas:TGadget=CreateCanvas(10,10,290,140,MyWindow)
Local timer:TTimer=CreateTimer(60)
Local x:Int=0

Repeat
  WaitEvent()
  Select EventID()
  Case EVENT_WINDOWCLOSE
     End
  Case EVENT_TIMERTICK
     x=x+1
     If x>240 x=0
     RedrawGadget(MyCanvas)
  Case EVENT_GADGETPAINT
    SetGraphics CanvasGraphics (MyCanvas)
    Cls
    DrawRect  x,20,50,80
    Flip
   End Select
Forever
```
<br/>

### `Function TimerTicks:Int( timer:TTimer )`

Get timer tick counter

#### Returns
The number of times <b>timer</b> has ticked over


<br/>

### `Function WaitTimer:Int( timer:TTimer )`

Wait until a timer ticks

#### Returns
The number of ticks since the last call to [WaitTimer](../../brl/brl.timer/#function-waittimerint-timerttimer-)


#### Example
```blitzmax
SuperStrict

Framework BRL.StandardIO
Import BRL.TimerDefault

Local timer:TTimer = CreateTimer( 10 )

Repeat
	Print "Ticks="+WaitTimer( timer )
Forever
```
<br/>

### `Function StopTimer( timer:TTimer )`

Stop a timer

Once stopped, a timer can no longer be used.


<br/>

