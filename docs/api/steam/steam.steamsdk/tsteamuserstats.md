---
id: tsteamuserstats
title: TSteamUserStats
sidebar_label: TSteamUserStats
---

Provides methods for accessing and submitting stats, achievements, and leaderboards.


## Methods

### `Method SetListener(listener:ISteamUserStatsListener)`

Sets the user stats callback listener.

Once installed, the listener will receive stats events via the callback methods.


<br/>

### `Method RemoveListener()`

Removes the current user stats callback listener.

<br/>

### `Method ClearAchievement:Int(name:String)`

Resets the unlock status of an achievement.

This is primarily only ever used for testing.

You must have called [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) and it needs to return successfully via its callback prior to calling this!

This call only modifies Steam's in-memory state so it is quite cheap. To send the unlock status to the server and to
trigger the Steam overlay notification you must call [StoreStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-storestatsint).

See Also: [ResetAllStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-resetallstatsintachievementstooint), [GetAchievementAndUnlockTime](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementandunlocktimeintnamestring-achievedint-var-unlocktimeuint-var), [GetAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementintnamestring-achievedint-var), [SetAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-setachievementintnamestring)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).


<br/>

### `Method DownloadLeaderboardEntries(leaderboardHandle:ULong, leaderboardDataRequest:ELeaderboardDataRequest, rangeStart:Int, rangeEnd:Int)`

Fetches a series of leaderboard entries for a specified leaderboard.

You can ask for more entries than exist, then this will return as many as do exist.

If you want to download entries for an arbitrary set of users, such as all of the users on a server then you can
use [DownloadLeaderboardEntriesForUsers](../../../steam/steam.steamsdk/tsteamuserstats/#method-downloadleaderboardentriesforusersleaderboardhandleulong-usersulong) which takes an array of Steam IDs.

You must call [FindLeaderboard](../../../steam/steam.steamsdk/tsteamuserstats/#method-findleaderboardleaderboardnamestring) or [FindOrCreateLeaderboard](../../../steam/steam.steamsdk/tsteamuserstats/#method-findorcreateleaderboardleaderboardnamestring-sortmethodeleaderboardsortmethod-displaytypeeleaderboarddisplaytype) to get a <b>leaderboardHandle</b> prior to calling this method.


<br/>

### `Method DownloadLeaderboardEntriesForUsers(leaderboardHandle:ULong, users:ULong[])`

Fetches leaderboard entries for an arbitrary set of users on a specified leaderboard.

A maximum of 100 users can be downloaded at a time, with only one outstanding call at a time. If a user doesn't
have an entry on the specified leaderboard, they won't be included in the result.

If you want to download entries based on their ranking or friends of the current user then you should use [DownloadLeaderboardEntries](../../../steam/steam.steamsdk/tsteamuserstats/#method-downloadleaderboardentriesleaderboardhandleulong-leaderboarddatarequesteleaderboarddatarequest-rangestartint-rangeendint).

You must call [FindLeaderboard](../../../steam/steam.steamsdk/tsteamuserstats/#method-findleaderboardleaderboardnamestring) or [FindOrCreateLeaderboard](../../../steam/steam.steamsdk/tsteamuserstats/#method-findorcreateleaderboardleaderboardnamestring-sortmethodeleaderboardsortmethod-displaytypeeleaderboarddisplaytype) to get a <b>leaderboardHandle</b> prior to calling this method.


<br/>

### `Method FindLeaderboard(leaderboardName:String)`

Gets a leaderboard by name.

You must call either this or [FindOrCreateLeaderboard](../../../steam/steam.steamsdk/tsteamuserstats/#method-findorcreateleaderboardleaderboardnamestring-sortmethodeleaderboardsortmethod-displaytypeeleaderboarddisplaytype) to obtain the leaderboard handle which is valid
for the game session for each leaderboard you wish to access prior to calling any other Leaderboard methods.

See Also: [GetLeaderboardEntryCount](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboardentrycountintleaderboardhandleulong), [DownloadLeaderboardEntries](../../../steam/steam.steamsdk/tsteamuserstats/#method-downloadleaderboardentriesleaderboardhandleulong-leaderboarddatarequesteleaderboarddatarequest-rangestartint-rangeendint), [UploadLeaderboardScore](../../../steam/steam.steamsdk/tsteamuserstats/#method-uploadleaderboardscoreleaderboardhandleulong-uploadscoremethodeleaderboarduploadscoremethod-scoreint-scoredetailsint)


<br/>

### `Method FindOrCreateLeaderboard(leaderboardName:String, sortMethod:ELeaderboardSortMethod , displayType:ELeaderboardDisplayType)`

Gets a leaderboard by name, it will create it if it's not yet created.

You must call either this or [FindLeaderboard](../../../steam/steam.steamsdk/tsteamuserstats/#method-findleaderboardleaderboardnamestring) to obtain the leaderboard handle which is valid for the
game session for each leaderboard you wish to access prior to calling any other Leaderboard methods.

Leaderboards created with this method will not automatically show up in the Steam Community. You must manually
set the Community Name field in the App Admin panel of the Steamworks website. As such it's generally
recommended to prefer creating the leaderboards in the App Admin panel on the Steamworks website and using
[FindLeaderboard](../../../steam/steam.steamsdk/tsteamuserstats/#method-findleaderboardleaderboardnamestring) unless you're expected to have a large amount of dynamically created leaderboards.

> You should never pass k_ELeaderboardSortMethodNone for <b>sortMethod</b> or k_ELeaderboardDisplayTypeNone for <b>displayType</b> as this is undefined behavior.

See Also: [GetLeaderboardEntryCount](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboardentrycountintleaderboardhandleulong), [DownloadLeaderboardEntries](../../../steam/steam.steamsdk/tsteamuserstats/#method-downloadleaderboardentriesleaderboardhandleulong-leaderboarddatarequesteleaderboarddatarequest-rangestartint-rangeendint), [UploadLeaderboardScore](../../../steam/steam.steamsdk/tsteamuserstats/#method-uploadleaderboardscoreleaderboardhandleulong-uploadscoremethodeleaderboarduploadscoremethod-scoreint-scoredetailsint)


<br/>

### `Method GetAchievement:Int(name:String, achieved:Int Var)`

Gets the unlock status of the Achievement.

The equivalent method for other users is [GetUserAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-getuserachievementintsteamidulong-namestring-achievedint-var).

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has completed and successfully returned its callback.
* The 'API Name' of the specified achievement exists in App Admin on the Steamworks website, and the changes are published.

If the call is successful then the unlock status is returned via the <b>achieved</b> parameter.

See Also: [GetAchievementDisplayAttribute](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementdisplayattributestringnamestring-keystring), [GetAchievementName](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementnamestringachievementuint), [GetAchievementIcon](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementiconintnamestring), [GetAchievementAndUnlockTime](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementandunlocktimeintnamestring-achievedint-var-unlocktimeuint-var), [GetAchievementAchievedPercent](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementachievedpercentintnamestring-percentfloat-var)


<br/>

### `Method GetAchievementAchievedPercent:Int(name:String, percent:Float Var)`

Returns the percentage of users who have unlocked the specified achievement.

You must have called [RequestGlobalAchievementPercentages](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalachievementpercentages) and it needs to return successfully via its callback prior to calling this.

See Also: [GetMostAchievedAchievementInfo](../../../steam/steam.steamsdk/tsteamuserstats/#method-getmostachievedachievementinfointnamestring-var-percentfloat-var-achievedint-var), [GetNextMostAchievedAchievementInfo](../../../steam/steam.steamsdk/tsteamuserstats/#method-getnextmostachievedachievementinfointpreviousint-namestring-var-percentfloat-var-achievedint-var)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success; otherwise [False](../../../brl/brl.blitz/#false) if [RequestGlobalAchievementPercentages](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalachievementpercentages) has not been called or if the specified 'API Name' does not exist in the global achievement percentages.


<br/>

### `Method GetAchievementAndUnlockTime:Int(name:String, achieved:Int Var, unlockTime:UInt Var)`

Gets the achievement status, and the time it was unlocked if unlocked.

If the return value is [True](../../../brl/brl.blitz/#true), but the unlock time is zero, that means it was unlocked before Steam began
tracking achievement unlock times (December 2009). The time is provided in Unix epoch format, seconds since January 1, 1970 UTC.

The equivalent function for other users is GetUserAchievementAndUnlockTime.

See Also: [GetAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementintnamestring-achievedint-var), [GetAchievementDisplayAttribute](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementdisplayattributestringnamestring-keystring), [GetAchievementName](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementnamestringachievementuint), [GetAchievementIcon](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementiconintnamestring)


<br/>

### `Method GetAchievementDisplayAttribute:String(name:String, key:String)`

Get general attributes for an achievement. Currently provides: Name, Description, and Hidden status.

This receives the value from a dictionary/map keyvalue store, so you must provide one of the following keys.
* "name" to retrive the localized achievement name in UTF8
* "desc" to retrive the localized achievement description in UTF8
* "hidden" for retrieving if an achievement is hidden. Returns "0" when not hidden, "1" when hidden

This localization is provided based on the games language if it's set, otherwise it checks if a localization
is avilable for the users Steam UI Language. If that fails too, then it falls back to english.

See Also: [GetAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementintnamestring-achievedint-var), [GetAchievementName](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementnamestringachievementuint), [GetAchievementIcon](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementiconintnamestring), [GetAchievementAndUnlockTime](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementandunlocktimeintnamestring-achievedint-var-unlocktimeuint-var)


<br/>

### `Method GetAchievementIcon:Int(name:String)`

Gets the icon for an achievement.

Triggers an OnUserAchievementIconFetched callback.
The image is returned as a handle to be used with TSteamUtils.GetImageRGBA to get the actual image data.

An invalid handle of 0 will be returned under the following conditions:
* [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has not completed and successfully returned its callback.
* The specified achievement does not exist in App Admin on the Steamworks website, or the changes are not published.
* Steam is still fetching the image data from the server. This will trigger an OnUserAchievementIconFetched callback which will notify you when the image data is ready and provide you with a new handle. If the <b>iconHandle</b> in the callback is still 0, then there is no image set for the specified achievement.

See Also: [GetAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementintnamestring-achievedint-var), [GetAchievementName](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementnamestringachievementuint), [GetAchievementAndUnlockTime](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementandunlocktimeintnamestring-achievedint-var-unlocktimeuint-var), [GetAchievementAchievedPercent](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementachievedpercentintnamestring-percentfloat-var), [GetAchievementDisplayAttribute](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementdisplayattributestringnamestring-keystring)


<br/>

### `Method GetAchievementName:String(achievement:UInt)`

Gets the 'API name' for an achievement index between 0 and [GetNumAchievements](../../../steam/steam.steamsdk/tsteamuserstats/#method-getnumachievementsuint).

This method must be used in cojunction with [GetNumAchievements](../../../steam/steam.steamsdk/tsteamuserstats/#method-getnumachievementsuint) to loop over the list of achievements.
In general games should not need these methods as they should have the list of achievements compiled into them.

[RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) must have been called and successfully returned its callback, and the current App ID must have achievements.


<br/>

### `Method GetGlobalStat:Int(statName:String, data:Long Var)`

Gets the lifetime totals for an aggregated stat.

You must have called [RequestGlobalStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalstatshistorydaysint) and it needs to return successfully via its callback prior to calling this.

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* The specified stat exists in App Admin on the Steamworks website, and the changes are published.
* [RequestGlobalStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalstatshistorydaysint) has completed and successfully returned its callback.
* The type does not match the type listed in the App Admin panel of the Steamworks website.

See Also: [GetGlobalStatHistory](../../../steam/steam.steamsdk/tsteamuserstats/#method-getglobalstathistoryintstatnamestring-datalong)


<br/>

### `Method GetGlobalStat:Int(statName:String, data:Double Var)`

Gets the lifetime totals for an aggregated stat.

You must have called [RequestGlobalStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalstatshistorydaysint) and it needs to return successfully via its callback prior to calling this.

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* The specified stat exists in App Admin on the Steamworks website, and the changes are published.
* [RequestGlobalStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalstatshistorydaysint) has completed and successfully returned its callback.
* The type does not match the type listed in the App Admin panel of the Steamworks website.

See Also: [GetGlobalStatHistory](../../../steam/steam.steamsdk/tsteamuserstats/#method-getglobalstathistoryintstatnamestring-datalong)


<br/>

### `Method GetGlobalStatHistory:Int(statName:String, data:Long[])`

Gets the daily history for an aggregated stat.

<b>data</b> will be filled with daily values, starting with today.
So when called, <b>data</b>[0] will be today, <b>data</b>[1] will be yesterday, and <b>data</b>[2] will be two days ago, etc.

You must have called [RequestGlobalStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalstatshistorydaysint) and it needs to return successfully via its callback prior to calling this.

A return value of `0` indicates failure for one of the following reasons:
* The specified stat does not exist in App Admin on the Steamworks website, or the changes aren't published.
* [RequestGlobalStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalstatshistorydaysint) has not been called or returned its callback, with at least 1 day of history.
* The type does not match the type listed in the App Admin panel of the Steamworks website.
* There is no history available.


#### Returns
The number of elements returned in the <b>data</b> array.


<br/>

### `Method GetGlobalStatHistory:Int(statName:String, data:Double[])`

Gets the daily history for an aggregated stat.

<b>data</b> will be filled with daily values, starting with today.
So when called, <b>data</b>[0] will be today, <b>data</b>[1] will be yesterday, and <b>data</b>[2] will be two days ago, etc.

You must have called [RequestGlobalStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalstatshistorydaysint) and it needs to return successfully via its callback prior to calling this.

A return value of `0` indicates failure for one of the following reasons:
* The specified stat does not exist in App Admin on the Steamworks website, or the changes aren't published.
* [RequestGlobalStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalstatshistorydaysint) has not been called or returned its callback, with at least 1 day of history.
* The type does not match the type listed in the App Admin panel of the Steamworks website.
* There is no history available.


#### Returns
The number of elements returned in the <b>data</b> array.


<br/>

### `Method GetLeaderboardDisplayType:ELeaderboardDisplayType(leaderboardHandle:ULong)`

Returns the display type of a leaderboard handle.


See Also: [GetLeaderboardName](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboardnamestringleadboarhandleulong), [GetLeaderboardSortMethod](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboardsortmethodeleaderboardsortmethodleaderboardhandleulong), [GetLeaderboardEntryCount](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboardentrycountintleaderboardhandleulong)


#### Returns
The display type of the leaderboard. Returns ELeaderboardDisplayType.k_ELeaderboardDisplayTypeNone if the leaderboard handle is invalid.


<br/>

### `Method GetLeaderboardEntryCount:Int(leaderboardHandle:ULong)`

Returns the total number of entries in a leaderboard.

This is cached on a per leaderboard basis upon the first call to [FindLeaderboard](../../../steam/steam.steamsdk/tsteamuserstats/#method-findleaderboardleaderboardnamestring) or [FindOrCreateLeaderboard](../../../steam/steam.steamsdk/tsteamuserstats/#method-findorcreateleaderboardleaderboardnamestring-sortmethodeleaderboardsortmethod-displaytypeeleaderboarddisplaytype) and
is refreshed on each successful call to [DownloadLeaderboardEntries](../../../steam/steam.steamsdk/tsteamuserstats/#method-downloadleaderboardentriesleaderboardhandleulong-leaderboarddatarequesteleaderboarddatarequest-rangestartint-rangeendint), [DownloadLeaderboardEntriesForUsers](../../../steam/steam.steamsdk/tsteamuserstats/#method-downloadleaderboardentriesforusersleaderboardhandleulong-usersulong), and [UploadLeaderboardScore](../../../steam/steam.steamsdk/tsteamuserstats/#method-uploadleaderboardscoreleaderboardhandleulong-uploadscoremethodeleaderboarduploadscoremethod-scoreint-scoredetailsint).

See Also: [GetLeaderboardName](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboardnamestringleadboarhandleulong), [GetLeaderboardSortMethod](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboardsortmethodeleaderboardsortmethodleaderboardhandleulong), [GetLeaderboardDisplayType](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboarddisplaytypeeleaderboarddisplaytypeleaderboardhandleulong)


#### Returns
The number of entries in the leaderboard. Returns 0 if the leaderboard handle is invalid.


<br/>

### `Method GetLeaderboardName:String(leadboarHandle:ULong)`

Returns the name of a leaderboard handle.


See Also: [GetLeaderboardEntryCount](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboardentrycountintleaderboardhandleulong), [GetLeaderboardSortMethod](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboardsortmethodeleaderboardsortmethodleaderboardhandleulong), [GetLeaderboardDisplayType](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboarddisplaytypeeleaderboarddisplaytypeleaderboardhandleulong)


#### Returns
The name of the leaderboard. Returns [Null](../../../brl/brl.blitz/#null) if the leaderboard handle is invalid.


<br/>

### `Method GetLeaderboardSortMethod:ELeaderboardSortMethod(leaderboardHandle:ULong)`

Returns the sort order of a leaderboard handle.


See Also: [GetLeaderboardName](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboardnamestringleadboarhandleulong), [GetLeaderboardDisplayType](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboarddisplaytypeeleaderboarddisplaytypeleaderboardhandleulong), [GetLeaderboardEntryCount](../../../steam/steam.steamsdk/tsteamuserstats/#method-getleaderboardentrycountintleaderboardhandleulong)


#### Returns
The sort method of the leaderboard. Returns ELeaderboardSortMethod.k_ELeaderboardSortMethodNone if the leaderboard handle is invalid.


<br/>

### `Method GetMostAchievedAchievementInfo:Int(name:String Var, percent:Float Var, achieved:Int Var)`

Gets the info on the most achieved achievement for the game.

You must have called [RequestGlobalAchievementPercentages](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalachievementpercentages) and it needs to return successfully via its callback prior to calling this.
If the call is successful it returns an iterator which should be used with [GetNextMostAchievedAchievementInfo](../../../steam/steam.steamsdk/tsteamuserstats/#method-getnextmostachievedachievementinfointpreviousint-namestring-var-percentfloat-var-achievedint-var).

See Also: [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint), [RequestGlobalAchievementPercentages](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalachievementpercentages), [GetNextMostAchievedAchievementInfo](../../../steam/steam.steamsdk/tsteamuserstats/#method-getnextmostachievedachievementinfointpreviousint-namestring-var-percentfloat-var-achievedint-var), [GetAchievementAchievedPercent](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementachievedpercentintnamestring-percentfloat-var)


#### Returns
-1 if [RequestGlobalAchievementPercentages](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalachievementpercentages) has not been called or if there are no global achievement percentages for this app Id.


<br/>

### `Method GetNextMostAchievedAchievementInfo:Int(previous:Int, name:String Var, percent:Float Var, achieved:Int Var)`

Gets the info on the next most achieved achievement for the game.

You must have called [RequestGlobalAchievementPercentages](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalachievementpercentages) and it needs to return successfully via its callback prior to calling this.
If the call is successful it returns an iterator which should be used with subsequent calls to this method.


#### Returns
-1 if [RequestGlobalAchievementPercentages](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestglobalachievementpercentages) has not been called or if there are no global achievement percentages for this app Id.


<br/>

### `Method GetNumAchievements:UInt()`

Gets the number of achievements defined in the App Admin panel of the Steamworks website.

This is used for iterating through all of the achievements with [GetAchievementName](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementnamestringachievementuint).
In general games should not need these methods because they should have a list of existing achievements compiled into them.

See Also: [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint), [GetAchievementName](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementnamestringachievementuint)


#### Returns
The number of achievements. Returns 0 if [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has not been called and successfully returned its callback, or the current App ID has no achievements.


<br/>

### `Method GetNumberOfCurrentPlayers()`

Asynchronously retrieves the total number of players currently playing the current game.

Both online and in offline mode.


<br/>

### `Method GetStat:Int(name:String, data:Int Var)`

Gets the current value of the a stat for the current user.

You must have called [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) and it needs to return successfully via its callback prior to calling this.

To receive stats for other users use [GetUserStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-getuserstatintsteamidulong-namestring-dataint-var).

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* The specified stat exists in App Admin on the Steamworks website, and the changes are published.
* [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has completed and successfully returned its callback.
* The type passed to this function must match the type listed in the App Admin panel of the Steamworks website.

See Also: [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint), [SetStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-setstatintnamestring-dataint), [UpdateAvgRateStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-updateavgratestatintnamestring-countthissessionfloat-sessionlengthdouble), [StoreStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-storestatsint), [ResetAllStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-resetallstatsintachievementstooint)


<br/>

### `Method GetStat:Int(name:String, data:Float Var)`

Gets the current value of the a stat for the current user.

You must have called [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) and it needs to return successfully via its callback prior to calling this.

To receive stats for other users use [GetUserStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-getuserstatintsteamidulong-namestring-dataint-var).

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* The specified stat exists in App Admin on the Steamworks website, and the changes are published.
* [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has completed and successfully returned its callback.
* The type passed to this function must match the type listed in the App Admin panel of the Steamworks website.

See Also: [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint), [SetStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-setstatintnamestring-dataint), [UpdateAvgRateStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-updateavgratestatintnamestring-countthissessionfloat-sessionlengthdouble), [StoreStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-storestatsint), [ResetAllStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-resetallstatsintachievementstooint)


<br/>

### `Method GetUserAchievement:Int(steamID:ULong, name:String, achieved:Int Var)`

Gets the unlock status of the Achievement.

The equivalent function for the local user is [GetAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementintnamestring-achievedint-var).

This function returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* [RequestUserStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestuserstatssteamidulong) has completed and successfully returned its callback.
* The 'API Name' of the specified achievement exists in App Admin on the Steamworks website, and the changes are published.

If the call is successful then the unlock status is returned via the <b>achieved</b> parameter


<br/>

### `Method GetUserAchievementAndUnlockTime:Int(steamID:ULong, name:String, achieved:Int Var, unlockTime:UInt Var)`

Gets the achievement status, and the time it was unlocked if unlocked.

If the return value is true, but the unlock time is zero, that means it was unlocked before Steam
began tracking achievement unlock times (December 2009). The time is provided in Unix epoch format, seconds since January 1, 1970 UTC.
The equivalent method for the local user is [GetAchievementAndUnlockTime](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementandunlocktimeintnamestring-achievedint-var-unlocktimeuint-var).

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* [RequestUserStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestuserstatssteamidulong) has completed and successfully returned its callback.
* The 'API Name' of the specified achievement exists in App Admin on the Steamworks website, and the changes are published.

If the call is successful then the achieved status and unlock time are provided via the arguments pbAchieved and punUnlockTime.


<br/>

### `Method GetUserStat:Int(steamID:ULong, name:String, data:Int Var)`

Gets the current value of the a stat for the specified user.

You must have called [RequestUserStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestuserstatssteamidulong) and it needs to return successfully via its callback prior to calling this.
The equivalent method for the local user is [GetStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-getstatintnamestring-dataint-var).

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* The specified stat exists in App Admin on the Steamworks website, and the changes are published.
* [RequestUserStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestuserstatssteamidulong) has completed and successfully returned its callback.
* The type does not match the type listed in the App Admin panel of the Steamworks website.


<br/>

### `Method GetUserStat:Int(steamID:ULong, name:String, data:Float Var)`

Gets the current value of the a stat for the specified user.

You must have called [RequestUserStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestuserstatssteamidulong) and it needs to return successfully via its callback prior to calling this.
The equivalent method for the local user is [GetStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-getstatintnamestring-dataint-var).

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* The specified stat exists in App Admin on the Steamworks website, and the changes are published.
* [RequestUserStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestuserstatssteamidulong) has completed and successfully returned its callback.
* The type does not match the type listed in the App Admin panel of the Steamworks website.


<br/>

### `Method IndicateAchievementProgress:Int(name:String, curProgress:UInt, maxProgress:UInt)`

Shows the user a pop-up notification with the current progress of an achievement.

Calling this method will **NOT** set the progress or unlock the achievement, the game must do that manually by calling [SetStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-setstatintnamestring-dataint)!

Triggers an [OnUserStatsStored](../../../steam/steam.steamsdk/isteamuserstatslistener/#method-onuserstatsstoredgameidulong-resulteresult) callback.
Triggers an [OnUserAchievementStored](../../../steam/steam.steamsdk/isteamuserstatslistener/#method-onuserachievementstoredgameidulong-groupachievementint-achievementnamestring-curprogressuint-maxprogressuint) callback.

This method returns true upon success if all of the following conditions are met; otherwise, false.
* [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has completed and successfully returned its callback.
* The specified achievement exists in App Admin on the Steamworks website, and the changes are published.
* The specified achievement is not already unlocked.
* <b>curProgress</b> is less than <b>maxProgress</b>.


<br/>

### `Method RequestCurrentStats:Int()`

Asynchronously request the user's current stats and achievements from the server.

You must always call this first to get the initial status of stats and achievements.
Only after the resulting callback comes back can you start calling the rest of the stats and achievement functions for the current user.

The equivalent function for other users is [RequestUserStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestuserstatssteamidulong).

See Also: [GetStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-getstatintnamestring-dataint-var), [SetStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-setstatintnamestring-dataint), [SetAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-setachievementintnamestring), [StoreStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-storestatsint)


<br/>

### `Method RequestGlobalAchievementPercentages()`

Asynchronously fetch the data for the percentage of players who have received each achievement for the current game globally.

You must have called [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) and it needs to return successfully via its callback prior to calling this.

Triggers an [OnGlobalAchievementPercentagesReady](../../../steam/steam.steamsdk/isteamuserstatslistener/#method-onglobalachievementpercentagesreadygameidulong-resulteresult) callback.

See Also: [GetMostAchievedAchievementInfo](../../../steam/steam.steamsdk/tsteamuserstats/#method-getmostachievedachievementinfointnamestring-var-percentfloat-var-achievedint-var), [GetNextMostAchievedAchievementInfo](../../../steam/steam.steamsdk/tsteamuserstats/#method-getnextmostachievedachievementinfointpreviousint-namestring-var-percentfloat-var-achievedint-var), [GetAchievementAchievedPercent](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementachievedpercentintnamestring-percentfloat-var)


<br/>

### `Method RequestGlobalStats(historyDays:Int)`

Asynchronously fetches global stats data, which is available for stats marked as "aggregated" in the App Admin panel of the Steamworks website.

You must have called [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) and it needs to return successfully via its callback prior to calling this.

Triggers an [OnGlobalStatsReceived](../../../steam/steam.steamsdk/isteamuserstatslistener/#method-onglobalstatsreceivedgameidulong-resulteresult) callback.

See Also: [GetGlobalStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-getglobalstatintstatnamestring-datalong-var), [GetGlobalStatHistory](../../../steam/steam.steamsdk/tsteamuserstats/#method-getglobalstathistoryintstatnamestring-datalong)


<br/>

### `Method RequestUserStats(steamID:ULong)`

Asynchronously downloads stats and achievements for the specified user from the server.

These stats are not automatically updated; you'll need to call this method again to refresh any data that may have changed.
To keep from using too much memory, a least recently used cache (LRU) is maintained and other user's stats will occasionally be
unloaded. When this happens an [OnUserStatsUnloaded](../../../steam/steam.steamsdk/isteamuserstatslistener/#method-onuserstatsunloadeduseridulong) callback is sent. After receiving this callback the user's stats will be
unavailable until this method is called again.

The equivalent method for the local user is [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint).

Triggers an [OnUserStatsReceived](../../../steam/steam.steamsdk/isteamuserstatslistener/#method-onuserstatsreceivedgameidulong-resulteresult-steamidulong) callback.

See Also: [GetUserAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-getuserachievementintsteamidulong-namestring-achievedint-var), [GetUserAchievementAndUnlockTime](../../../steam/steam.steamsdk/tsteamuserstats/#method-getuserachievementandunlocktimeintsteamidulong-namestring-achievedint-var-unlocktimeuint-var), [GetUserStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-getuserstatintsteamidulong-namestring-dataint-var)


<br/>

### `Method ResetAllStats:Int(achievementsToo:Int)`

Resets the current users stats and, optionally achievements.

This automatically calls [StoreStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-storestatsint) to persist the changes to the server. This should typically only
be used for testing purposes during development. Ensure that you sync up your stats with the new default
values provided by Steam after calling this by calling [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint).


#### Returns
[True](../../../brl/brl.blitz/#true) indicating success if [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has been called and successfully returned its callback; otherwise [False](../../../brl/brl.blitz/#false).


<br/>

### `Method SetAchievement:Int(name:String)`

Unlocks an achievement.

You must have called [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) and it needs to return successfully via its callback prior to calling this!
You can unlock an achievement multiple times so you don't need to worry about only setting achievements that
aren't already set. This call only modifies Steam's in-memory state so it is quite cheap. To send the unlock
status to the server and to trigger the Steam overlay notification you must call [StoreStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-storestatsint).

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* The specified achievement "API Name" exists in App Admin on the Steamworks website, and the changes are published.
* [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has completed and successfully returned its callback.

See Also: [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint), [StoreStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-storestatsint), [ResetAllStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-resetallstatsintachievementstooint), [GetAchievementAndUnlockTime](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementandunlocktimeintnamestring-achievedint-var-unlocktimeuint-var), [GetAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-getachievementintnamestring-achievedint-var)


<br/>

### `Method SetStat:Int(name:String, data:Int)`

Sets / updates the value of a given stat for the current user.

You must have called [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) and it needs to return successfully via its callback prior to calling this!

This call only modifies Steam's in-memory state and is very cheap. Doing so allows Steam to persist the
changes even in the event of a game crash or unexpected shutdown. To submit the stats to the server you must call [StoreStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-storestatsint).

If this is returning [False](../../../brl/brl.blitz/#false) and everything appears correct, then check to ensure that your changes in the App Admin
panel of the Steamworks website are published.

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* The specified stat exists in App Admin on the Steamworks website, and the changes are published.
* [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has completed and successfully returned its callback.
* The type passed to this function must match the type listed in the App Admin panel of the Steamworks website.

See Also: [GetStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-getstatintnamestring-dataint-var), [UpdateAvgRateStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-updateavgratestatintnamestring-countthissessionfloat-sessionlengthdouble), [ResetAllStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-resetallstatsintachievementstooint)


<br/>

### `Method SetStat:Int(name:String, data:Float)`

Sets / updates the value of a given stat for the current user.

You must have called [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) and it needs to return successfully via its callback prior to calling this!

This call only modifies Steam's in-memory state and is very cheap. Doing so allows Steam to persist the
changes even in the event of a game crash or unexpected shutdown. To submit the stats to the server you must call [StoreStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-storestatsint).

If this is returning [False](../../../brl/brl.blitz/#false) and everything appears correct, then check to ensure that your changes in the App Admin
panel of the Steamworks website are published.

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* The specified stat exists in App Admin on the Steamworks website, and the changes are published.
* [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has completed and successfully returned its callback.
* The type passed to this function must match the type listed in the App Admin panel of the Steamworks website.

See Also: [GetStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-getstatintnamestring-dataint-var), [UpdateAvgRateStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-updateavgratestatintnamestring-countthissessionfloat-sessionlengthdouble), [ResetAllStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-resetallstatsintachievementstooint)


<br/>

### `Method StoreStats:Int()`

Sends the changed stats and achievements data to the server for permanent storage.

If this fails then nothing is sent to the server. It's advisable to keep trying until the call is successful.

This call can be rate limited. Call frequency should be on the order of minutes, rather than seconds. You should only
be calling this during major state changes such as the end of a round, the map changing, or the user leaving a server.
This call is required to display the achievement unlock notification dialog though, so if you have called [SetAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-setachievementintnamestring)
then it's advisable to call this soon after that.

If you have stats or achievements that you have saved locally but haven't uploaded with this method when your
application process ends then this function will automatically be called.

You can find additional debug information written to the <i>steam_install</i><i>\logs</i>\stats_log.txt file.

Triggers an [OnUserStatsStored](../../../steam/steam.steamsdk/isteamuserstatslistener/#method-onuserstatsstoredgameidulong-resulteresult) callback.
Triggers an [OnUserAchievementStored](../../../steam/steam.steamsdk/isteamuserstatslistener/#method-onuserachievementstoredgameidulong-groupachievementint-achievementnamestring-curprogressuint-maxprogressuint) callback.

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has completed and successfully returned its callback.
* The current game has stats associated with it in the Steamworks Partner backend, and those stats are published.

If the call is successful you will receive an [OnUserStatsStored](../../../steam/steam.steamsdk/isteamuserstatslistener/#method-onuserstatsstoredgameidulong-resulteresult) callback.

If <b>esult</b> has a result of k_EResultInvalidParam, then one or more stats uploaded has been rejected, either because
they broke constraints or were out of date. In this case the server sends back updated values and the stats
should be updated locally to keep in sync.

If one or more achievements has been unlocked then this will also trigger an [OnUserAchievementStored](../../../steam/steam.steamsdk/isteamuserstatslistener/#method-onuserachievementstoredgameidulong-groupachievementint-achievementnamestring-curprogressuint-maxprogressuint) callback.

See Also: [SetStat](../../../steam/steam.steamsdk/tsteamuserstats/#method-setstatintnamestring-dataint), [SetAchievement](../../../steam/steam.steamsdk/tsteamuserstats/#method-setachievementintnamestring)


<br/>

### `Method UpdateAvgRateStat:Int(name:String, countThisSession:Float, sessionLength:Double)`

Updates an AVGRATE stat with new values.

You must have called [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) and it needs to return successfully via its callback prior to calling this!

This call only modifies Steam's in-memory state and is very cheap. Doing so allows Steam to
persist the changes even in the event of a game crash or unexpected shutdown.
To submit the stats to the server you must call [StoreStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-storestatsint).

If this is returning false and everything appears correct, then check to ensure that your changes in
the App Admin panel of the Steamworks website are published.

This method returns [True](../../../brl/brl.blitz/#true) upon success if all of the following conditions are met; otherwise, [False](../../../brl/brl.blitz/#false).
* The specified stat exists in App Admin on the Steamworks website, and the changes are published.
* [RequestCurrentStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestcurrentstatsint) has completed and successfully returned its callback.
* The type must be AVGRATE in the Steamworks Partner backend.


<br/>

### `Method UploadLeaderboardScore(leaderboardHandle:ULong, uploadScoreMethod:ELeaderboardUploadScoreMethod, score:Int, scoreDetails:Int[])`

Uploads a user score to a specified leaderboard.

Details are optional game-defined information which outlines how the user got that score.
For example if it's a racing style time based leaderboard you could store the timestamps when the
player hits each checkpoint. If you have collectibles along the way you could use bit fields as
booleans to store the items the player picked up in the playthrough.

Uploading scores to Steam is rate limited to 10 uploads per 10 minutes and you may only
have one outstanding call to this function at a time.

Triggers an [OnLeaderboardScoreUploaded](../../../steam/steam.steamsdk/isteamuserstatslistener/#method-onleaderboardscoreuploadedsuccessint-leaderboardhandleulong-scoreuint-scorechangedint-globalranknewint-globalrankpreviousint) callback.

See Also: [DownloadLeaderboardEntries](../../../steam/steam.steamsdk/tsteamuserstats/#method-downloadleaderboardentriesleaderboardhandleulong-leaderboarddatarequesteleaderboarddatarequest-rangestartint-rangeendint), AttachLeaderboardUGC


<br/>

