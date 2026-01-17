---
id: steam.steamsdk
title: Steam.SteamSDK
sidebar_label: Introduction
---


## Overview

The Steamworks API allows your game to take full advantage of Steam by accessing all of the underlying systems provided through the API.
This includes things such as pausing your game when the user opens the [Steam Overlay](https://partner.steamgames.com/doc/features/overlay), inviting friends to play, allowing players to unlock [Steam Achievements](https://partner.steamgames.com/doc/features/achievements),
letting players compete on the [Steam Leaderboards](https://partner.steamgames.com/doc/features/leaderboards) and much more.

The [Steamworks API Reference](https://partner.steamgames.com/doc/api) catalogs and documents every interface, function, callback, and type supported in the API.

Integration with the Steamworks API is never required to ship your product on Steam, but it is highly recommended as it allows you to accomplish many interactions that Steam users expect.

## Initialization and Shutdown

### SteamInit

After you have the Steamworks API set up within your project you can start using it by calling [SteamInit](../../steam/steam.steamsdk/#function-steaminitintautoruncallbacksint-true) function to initialize the API.
This will set up the global state and populate the interface pointers which are accessible via the global functions which match the name of the interface.
This MUST be called and return successfully prior to accessing any of the Steamworks Interfaces!

The Steamworks API will not initialize if it does not know the App ID of your game. When you launch your app from Steam itself then it will automatically have the App ID available.
While developing you will need to hint this to Steam with a text file. Create the a text file called `steam_appid.txt` next to your executable containing just the App ID and nothing else.
This overrides the value that Steam provides. You should not ship this with your builds. Example:
```
480
```

A return of [False](../../brl/brl.blitz/#false) indicates one of the following conditions:
* The Steam client isn't running. A running Steam client is required to provide implementations of the various Steamworks interfaces.
* The Steam client couldn't determine the App ID of game. If you're running your application from the executable or debugger directly then you must have a steam_appid.txt in your game directory next to the executable, with your app ID in it and nothing else. Steam will look for this file in the current working directory. If you are running your executable from a different directory you may need to relocate the `steam_appid.txt` file.
* Your application is not running under the same OS user context as the Steam client, such as a different user or administration access level.
* Ensure that you own a license for the App ID on the currently active Steam account. Your game must show up in your Steam library.
* Your App ID is not completely set up, i.e. in `Release State: Unavailable`, or it's missing default packages.
* If you're running into initialization issues then see the Debugging the Steamworks API documentation to learn about the various methods of debugging the Steamworks API.

### SteamRestartAppIfNecessary

[SteamRestartAppIfNecessary](../../steam/steam.steamsdk/#function-steamrestartappifnecessaryintownappiduint) checks if your executable was launched through Steam and relaunches it through Steam if it wasn't.

This is optional but highly recommended as the Steam context associated with your application (including your App ID) will not be set up if the user launches the executable directly.
If this occurs then [SteamInit](../../steam/steam.steamsdk/#function-steaminitintautoruncallbacksint-true) will fail and you will be unable to use the Steamworks API.
If you choose to use this then it should be the first Steamworks function call you make, right before [SteamInit](../../steam/steam.steamsdk/#function-steaminitintautoruncallbacksint-true).

If this returns true then it starts the Steam client if required and launches your game again through it, and you should quit your process as soon as possible. This effectively
runs `steam://run/<AppID>` so it may not relaunch the exact executable that called this function (for example, if you were running from your debugger). It will always relaunch from
the version installed in your Steam library folder.

Otherwise, if it returns [False](../../brl/brl.blitz/#false), then your game was launched by the Steam client and no action needs to be taken. One exception is if a `steam_appid.txt` file is present then this will
return [False](../../brl/brl.blitz/#false) regardless. This allows you to develop and test without launching your game through the Steam client. Make sure to remove the steam_appid.txt file when uploading the game
to your Steam depot!

> NOTE: If you use the Steam DRM wrapper on your primary executable file, this check is unnecessary as the DRM wrapper will perform this internally.

### SteamShutdown

When you are done using the Steamworks API you must call [SteamShutdown](../../steam/steam.steamsdk/#function-steamshutdown) to release the resources used by your application internally within Steam. You should call this during process shutdown
if possible.

This will not unhook the Steam Overlay from your game as there's no guarantee that your rendering API is done using it.


## Types
| Type | Description |
|---|---|
| [TSteamClient](../../steam/steam.steamsdk/tsteamclient) | Provides an interface to a steam instance. |
| [TSteamUtils](../../steam/steam.steamsdk/tsteamutils) | Provides access to a range of miscellaneous utility functions. |
| [TSteamUserStats](../../steam/steam.steamsdk/tsteamuserstats) | Provides methods for accessing and submitting stats, achievements, and leaderboards. |
| [TSteamUGC](../../steam/steam.steamsdk/tsteamugc) | Steam UGC API |
| [TSteamFriends](../../steam/steam.steamsdk/tsteamfriends) | Interface to access information about individual users and interact with the Steam Overlay. |

## Interfaces
| Interface | Description |
|---|---|
| [ISteamUtilsListener](../../steam/steam.steamsdk/isteamutilslistener) | Utils listener interface |
| [ISteamUserStatsListener](../../steam/steam.steamsdk/isteamuserstatslistener) | Steam User Stats listener interface |
| [ISteamUGCListener](../../steam/steam.steamsdk/isteamugclistener) | Steam UGC listener interface |
| [ISteamFriendsListener](../../steam/steam.steamsdk/isteamfriendslistener) | Steam Friends listener interface |

## Enums
| Enum | Description |
|---|---|
| [EPersonaState](../../steam/steam.steamsdk/epersonastate) | List of states a Steam friend can be in. |
| [EUserRestriction](../../steam/steam.steamsdk/euserrestriction) | User restriction flags. |
| [EPersonaChange](../../steam/steam.steamsdk/epersonachange) | Used in [OnPersonaStateChanged](../../steam/steam.steamsdk/isteamfriendslistener/#method-onpersonastatechangedsteamidulong-changeflagsint), <b>changeFlags</b> to describe what's changed about a user. |
| [ERemoteStoragePublishedFileVisibility](../../steam/steam.steamsdk/eremotestoragepublishedfilevisibility) | Possible visibility states that a Workshop item can be in. |
| [EWorkshopFileType](../../steam/steam.steamsdk/eworkshopfiletype) | The way that a shared file will be shared with the community. |
| [EUGCMatchingUGCType](../../steam/steam.steamsdk/eugcmatchingugctype) | Specifies the types of UGC to obtain from a call to [CreateQueryUserUGCRequest](../../steam/steam.steamsdk/tsteamugc/#method-createqueryuserugcrequestulongaccountiduint-listtypeeuserugclist-matchingugctypeeugcmatchingugctype-sortordereuserugclistsortorder-creatorappiduint-consumerappiduint-pageuint) or CreateQueryAllUGCRequest. |
| [EUserUGCList](../../steam/steam.steamsdk/euserugclist) | Used with [CreateQueryUserUGCRequest](../../steam/steam.steamsdk/tsteamugc/#method-createqueryuserugcrequestulongaccountiduint-listtypeeuserugclist-matchingugctypeeugcmatchingugctype-sortordereuserugclistsortorder-creatorappiduint-consumerappiduint-pageuint) to obtain different lists of published UGC for a user. |
| [EUGCQuery](../../steam/steam.steamsdk/eugcquery) | Used with CreateQueryAllUGCRequest to specify the sorting and filtering for queries across all available UGC. |
| [EItemPreviewType](../../steam/steam.steamsdk/eitempreviewtype) | Flags that specify the type of preview an item has. |

## Functions

### `Function SteamInit:Int(autoRunCallbacks:Int = True)`

Initialises Steam.

By default callback processing is run once every 100ms. If you'd rather control this yourself, you can
set <b>autoRunCallbacks</b> to [False](../../brl/brl.blitz/#false), and call [SteamRunCallbacks](../../steam/steam.steamsdk/#function-steamruncallbacks) yourself.


<br/>

### `Function SteamRestartAppIfNecessary:Int(ownAppID:UInt)`

Checks if your executable was launched through Steam and relaunches it through Steam if it wasn't.


If this returns [True](../../brl/brl.blitz/#true) then it starts the Steam client if required and launches your game again through it, and you should quit your process as soon as possible.
This effectively runs `steam://run/<AppId>` so it may not relaunch the exact executable that called it, as it will always relaunch from the version installed
in your Steam library folder.

If it returns [False](../../brl/brl.blitz/#false), then your game was launched by the Steam client and no action needs to be taken. One exception is if a `steam_appid.txt` file is present
then this will return [False](../../brl/brl.blitz/#false) regardless. This allows you to develop and test without launching your game through the Steam client.
Make sure to remove the `steam_appid.txt` file when uploading the game to your Steam depot!


<br/>

### `Function SteamShutdown()`

Shuts down Steam.

This should be called before your application closes.


<br/>

### `Function SteamRunCallbacks()`

Dispatches callbacks and call results.

It's best to call this at >10Hz, the more time between calls, the more potential latency between receiving events or results
from the Steamworks API. Most games call this once per render-frame. All registered listener functions will be invoked during this call,
in the callers thread context.


<br/>

## Consts

### `Const k_UGCQueryHandleInvalid:ULong = $ffffffffffffffff:ULong`

Used to specify an invalid query handle.

This is frequently returned if a call fails.


<br/>

### `Const k_UGCUpdateHandleInvalid:ULong = $ffffffffffffffff:ULong`

Used to specify an invalid item update handle.

This is frequently returned if a call fails.


<br/>

### `Const k_cchPublishedDocumentDescriptionMax:UInt = 8000`

The maximum size in bytes that a Workshop item description can be.

<br/>

### `Const k_cchDeveloperMetadataMax:UInt = 5000`

The maximum amount of bytes you can set with [SetItemMetadata](../../steam/steam.steamsdk/tsteamugc/#method-setitemmetadataintupdatehandleulong-metadatastring).

<br/>

### `Const k_cchPublishedDocumentTitleMax:UInt = 128 + 1`

The maximum size in bytes that a Workshop item title can be.

<br/>

### `Const k_cchMaxRichPresenceKeys:Int = 20`

The maximum amount of rich presence keys that can be set.

<br/>

### `Const k_cchMaxRichPresenceValueLength:Int = 256`

The maximum length that a rich presence value can be.

<br/>

### `Const k_cchMaxRichPresenceKeyLength:Int = 64`

The maximum length that a rich presence key can be.

<br/>

