---
id: isteamuserstatslistener
title: ISteamUserStatsListener
sidebar_label: ISteamUserStatsListener
---

Steam User Stats listener interface


Implement this and add as a listener to an instance of [TSteamUserStats](../../../steam/steam.steamsdk/tsteamuserstats) to receive appropriate event callbacks.


## Methods

### `Method OnGlobalAchievementPercentagesReady(gameID:ULong, result:EResult)`

Called when the global achievement percentages have been received from the server.

<br/>

### `Method OnGlobalStatsReceived(gameID:ULong, result:EResult)`

Called when the global stats have been received from the server.

<br/>

### `Method OnLeaderboardFindResult(leaderboardHandle:ULong, leaderboardFound:Int)`

Result when finding a leaderboard.

<br/>

### `Method OnLeaderboardScoresDownloaded(leaderboardHandle:ULong, leaderboardEntriesHandle:ULong, entryCount:Int)`

Called when scores for a leaderboard have been downloaded and are ready to be retrieved.

After calling you must use GetDownloadedLeaderboardEntry to retrieve the info for each downloaded entry.


<br/>

### `Method OnLeaderboardScoreUploaded(success:Int, leaderboardHandle:ULong, score:UInt, scoreChanged:Int, globalRankNew:Int, globalRankPrevious:Int)`

Result indicating that a leaderboard score has been uploaded.

<br/>

### `Method OnGetNumberOfCurrentPlayers(success:Int, players:Int)`

Gets the current number of players for the current AppId.

<br/>

### `Method OnUserAchievementIconFetched(gameID:ULong, achievementName:String, achieved:Int, iconHandle:Int)`

Result of an achievement icon that has been fetched.

<br/>

### `Method OnUserAchievementStored(gameID:ULong, groupAchievement:Int, achievementName:String, curProgress:UInt, maxProgress:UInt)`

Result of a request to store the achievements on the server, or an "indicate progress" call.

If both <b>curProgress</b> and <b>maxProgress</b> are zero, that means the achievement has been fully unlocked.


<br/>

### `Method OnUserStatsReceived(gameID:ULong, result:EResult, steamID:ULong)`

Called when the latest stats and achievements for a specific user (including the local user) have been received from the server.

<br/>

### `Method OnUserStatsStored(gameID:ULong, result:EResult)`

Result of a request to store the user stats.

<br/>

### `Method OnUserStatsUnloaded(userID:ULong)`

Callback indicating that a user's stats have been unloaded.

Call [RequestUserStats](../../../steam/steam.steamsdk/tsteamuserstats/#method-requestuserstatssteamidulong) again before accessing stats for this user.


<br/>

