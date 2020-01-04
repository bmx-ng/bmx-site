---
id: tsdltimer
title: TSDLTimer
sidebar_label: TSDLTimer
---

An SDL implementation of a TTimer.


## Methods

### `Method Ticks:Int() Override`

Gets timer tick counter.

#### Returns
The number of times the timer has ticked over


<br/>

### `Method Stop() Override`

Stops the timer

Once stopped, the timer can no longer be used.


<br/>

### `Method Wait:Int() Override`

Waits until the timer ticks.

#### Returns
The number of ticks since the last call to [Wait](../../../sdl/sdl.sdltimer/tsdltimer/#method-waitint-override).


<br/>

