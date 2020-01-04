---
id: tsteamutils
title: TSteamUtils
sidebar_label: TSteamUtils
---

Provides access to a range of miscellaneous utility functions.


## Methods

### `Method SetListener(listener:ISteamUtilsListener)`

Sets the steam utils callback listener.

Once installed, the listener will receive utils events via the callback methods.


<br/>

### `Method RemoveListener()`

Removes the current steam utils callback listener.

<br/>

### `Method OverlayNeedsPresent:Int()`

Checks if the Overlay needs a present.

Only required if using event driven render updates.


#### Returns
[True](../../../brl/brl.blitz/#true) if the overlay needs you to refresh the screen, otherwise [False](../../../brl/brl.blitz/#false).


<br/>

### `Method GetCurrentBatteryPower:Int()`

Gets the current amount of battery power on the computer.

#### Returns
The current battery power ranging between [0..100]%. Returns 255 when the user is on AC power.


<br/>

### `Method GetEnteredGamepadTextInput:Int(txt:String Var)`

Gets the gamepad text input from the Big Picture overlay.

This must be called within the [OnGamepadTextInputDismissed](../../../steam/steam.steamsdk/isteamutilslistener/#method-ongamepadtextinputdismissedsubmittedint-submittedtextlengthuint) callback, and only if <b>submitted</b> is [True](../../../brl/brl.blitz/#true).

See Also: [ShowGamepadTextInput](../../../steam/steam.steamsdk/tsteamutils/#method-showgamepadtextinputintinputmodeegamepadtextinputmode-lineinputmodeegamepadtextinputlinemode-descriptionstring-charmaxuint-existingtextstring), [GetEnteredGamepadTextLength](../../../steam/steam.steamsdk/tsteamutils/#method-getenteredgamepadtextlengthuint)


#### Returns
[True](../../../brl/brl.blitz/#true) if there was text to receive and <b>txt</b> is the same size as <b>submittedTextLength</b>; otherwise, [False](../../../brl/brl.blitz/#false).


<br/>

### `Method GetEnteredGamepadTextLength:UInt()`

Gets the length of the gamepad text input from the Big Picture overlay.

This must be called within the [OnGamepadTextInputDismissed](../../../steam/steam.steamsdk/isteamutilslistener/#method-ongamepadtextinputdismissedsubmittedint-submittedtextlengthuint) callback, and only if <b>submitted</b> is [True](../../../brl/brl.blitz/#true).

See Also: [ShowGamepadTextInput](../../../steam/steam.steamsdk/tsteamutils/#method-showgamepadtextinputintinputmodeegamepadtextinputmode-lineinputmodeegamepadtextinputlinemode-descriptionstring-charmaxuint-existingtextstring), [GetEnteredGamepadTextInput](../../../steam/steam.steamsdk/tsteamutils/#method-getenteredgamepadtextinputinttxtstring-var)


<br/>

### `Method GetImageRGBA:Int(image:Int, dest:Byte Ptr, destBufferSize:Int)`

Gets the image bytes from an image handle.

Prior to calling this you must get the size of the image by calling [GetImageSize](../../../steam/steam.steamsdk/tsteamutils/#method-getimagesizeintimageint-widthuint-var-heightuint-var) so that you can
create your buffer with an appropriate size. You can then allocate your buffer with the width and
height as: width * height * 4. The image is provided in RGBA format. This call can be somewhat expensive
as it converts from the compressed type (JPG, PNG, TGA) and provides no internal caching of returned buffer,
thus it is highly recommended to only call this once per image handle and cache the result.
This method is only used for Steam Avatars and Achievement images and those are not expected to change mid game.


#### Returns
[True](../../../brl/brl.blitz/#true) upon success if the image handle is valid and the buffer was filled out, otherwise [False](../../../brl/brl.blitz/#false).


<br/>

### `Method GetImageSize:Int(image:Int, width:UInt Var, height:UInt Var)`

Gets the size of a Steam image handle.

This must be called before calling [GetImageRGBA](../../../steam/steam.steamsdk/tsteamutils/#method-getimagergbaintimageint-destbyte-ptr-destbuffersizeint) to create an appropriately sized buffer that will
be filled with the raw image data.


#### Returns
[True](../../../brl/brl.blitz/#true) upon success if the image handle is valid and the sizes were filled out, otherwise [False](../../../brl/brl.blitz/#false).


<br/>

### `Method GetSecondsSinceAppActive:UInt()`

Returns the number of seconds since the application was active.

<br/>

### `Method GetSecondsSinceComputerActive:UInt()`

Returns the number of seconds since the user last moved the mouse.

<br/>

### `Method GetServerRealTime:UInt()`

Returns the Steam server time in Unix epoch format.

Number of seconds since Jan 1, 1970 UTC.


<br/>

### `Method GetIPCountry:String()`

Returns the 2 digit ISO 3166-1-alpha-2 format country code which client is running in.

This is looked up via an IP-to-location database.


<br/>

### `Method GetSteamUILanguage:String()`

Returns the language the steam client is running in.

You probably want TSteamApps.GetCurrentGameLanguage instead, this should only be used in very special cases.


<br/>

### `Method GetAppID:UInt()`

Gets the App ID of the current process.

#### Returns
The AppId.


<br/>

### `Method IsOverlayEnabled:Int()`

Checks if the Steam Overlay is running and the user can access it.

The overlay process could take a few seconds to start and hook the game process, so this method will
initially return [False](../../../brl/brl.blitz/#false) while the overlay is loading.


<br/>

### `Method IsSteamInBigPictureMode:Int()`

Checks if Steam and the Steam Overlay are running in Big Picture mode.

Games must be launched through the Steam client to enable the Big Picture overlay.
During development, a game can be added as a non-steam game to the developers library to test this feature.


#### Returns
[True](../../../brl/brl.blitz/#true) if the Big Picture overlay is available; otherwise, [False](../../../brl/brl.blitz/#false). This will always return [False](../../../brl/brl.blitz/#false) if your app is not the 'game' application type.


<br/>

### `Method IsSteamRunningInVR:Int()`

Checks if Steam is running in VR mode.

#### Returns
[True](../../../brl/brl.blitz/#true) if Steam itself is running in VR mode; otherwise, [False](../../../brl/brl.blitz/#false).


<br/>

### `Method IsVRHeadsetStreamingEnabled:Int()`

Checks if the HMD view will be streamed via Steam In-Home Streaming.

#### Returns
[True](../../../brl/brl.blitz/#true) if VR is enabled and the HMD view is currently being streamed; otherwise, [False](../../../brl/brl.blitz/#false).


<br/>

### `Method SetOverlayNotificationInset(horizontalInset:Int, verticalInset:Int)`

Sets the inset of the overlay notification from the corner specified by [SetOverlayNotificationPosition](../../../steam/steam.steamsdk/tsteamutils/#method-setoverlaynotificationpositionpositionenotificationposition).

A value of (0, 0) resets the position into the corner.
This position is per-game and is reset each launch.


<br/>

### `Method SetOverlayNotificationPosition(position:ENotificationPosition)`

Sets which corner the Steam overlay notification popup should display itself in.

You can also set the distance from the specified corner by using [SetOverlayNotificationInset](../../../steam/steam.steamsdk/tsteamutils/#method-setoverlaynotificationinsethorizontalinsetint-verticalinsetint).
This position is per-game and is reset each launch.



<br/>

### `Method SetVRHeadsetStreamingEnabled(enabled:Int)`

Sets whether the HMD content will be streamed via Steam In-Home Streaming.

If this is enabled, then the scene in the HMD headset will be streamed, and remote input will
not be allowed. Otherwise if this is disabled, then the application window will be streamed instead,
and remote input will be allowed. VR games default to enabled unless "VRHeadsetStreaming" "0" is in the
extended appinfo for a game.

This is useful for games that have asymmetric multiplayer gameplay.


<br/>

### `Method StartVRDashboard()`

Asks Steam to create and render the OpenVR dashboard.

<br/>

### `Method ShowGamepadTextInput:Int(inputMode:EGamepadTextInputMode, lineInputMode:EGamepadTextInputLineMode, description:String, charMax:UInt, existingText:String)`

Activates the Big Picture text input dialog which only supports gamepad input.

See Also: [GetEnteredGamepadTextLength](../../../steam/steam.steamsdk/tsteamutils/#method-getenteredgamepadtextlengthuint), [GetEnteredGamepadTextInput](../../../steam/steam.steamsdk/tsteamutils/#method-getenteredgamepadtextinputinttxtstring-var)


#### Returns
[True](../../../brl/brl.blitz/#true) if the big picture overlay is running; otherwise, [False](../../../brl/brl.blitz/#false).


<br/>

