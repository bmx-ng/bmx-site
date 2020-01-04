---
id: isteamutilslistener
title: ISteamUtilsListener
sidebar_label: ISteamUtilsListener
---

Utils listener interface


Implement this and add as a listener to an instance of [TSteamUtils](../../../steam/steam.steamsdk/tsteamutils) to receive appropriate event callbacks.


## Methods

### `Method OnCheckFileSignature(checkFileSignature:ECheckFileSignature)`

CallResult for CheckFileSignature.

<br/>

### `Method OnGamepadTextInputDismissed(submitted:Int, submittedTextLength:UInt)`

Called when the big picture gamepad text input has been closed.

<br/>

### `Method OnLowBatteryPower(minutesBatteryLeft:UInt)`

Called when running on a laptop and less than 10 minutes of battery is left, and then fires then every minute afterwards.

<br/>

### `Method OnSteamShutdown()`

Called when Steam wants to shutdown.

<br/>

