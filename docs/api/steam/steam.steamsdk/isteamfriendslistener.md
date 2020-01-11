---
id: isteamfriendslistener
title: ISteamFriendsListener
sidebar_label: ISteamFriendsListener
---

Steam Friends listener interface


Implement this and add as a listener to an instance of [TSteamFriends](../../../steam/steam.steamsdk/tsteamfriends) to receive appropriate event callbacks.


## Methods

### `Method OnAvatarImageLoaded(steamID:ULong, image:Int, width:Int, height:Int)`

Called when a large avatar is loaded if you have tried requesting it when it was unavailable.

<br/>

### `Method OnFriendRichPresenceUpdated(steamIDFriend:ULong, appID:UInt)`

Called when Rich Presence data has been updated for a user.

This can happen automatically when friends in the same game update their rich presence, or after a call to [RequestFriendRichPresence](../../../steam/steam.steamsdk/tsteamfriends/#method-requestfriendrichpresencesteamidfriendulong).


<br/>

### `Method OnGameConnectedChatLeave(steamIDClanChat:ULong, steamIDUser:ULong, kicked:Int, dropped:Int)`

Called when a user has left a Steam group chat that the we are in.

<br/>

### `Method OnGameConnectedFriendChatMsg(steamIDUser:ULong, messageID:Int)`

Called when chat message has been received from a friend.


Associated Functions: [SetListenForFriendsMessages](../../../steam/steam.steamsdk/tsteamfriends/#method-setlistenforfriendsmessagesintinterceptenabledint)


<br/>

### `Method OnGameLobbyJoinRequested(steamIDLobby:ULong, steamIDFriend:ULong)`

Called when the user tries to join a lobby from their friends list or from an invite.

The game client should attempt to connect to specified lobby when this is received.
If the game isn't running yet then the game will be automatically launched with the command line parameter +connect_lobby &lt;64-bit lobby Steam ID&gt; instead.

> NOTE: This callback is made when joining a lobby. If the user is attempting to join a game but not a lobby, then the callback [OnGameRichPresenceJoinRequested](../../../steam/steam.steamsdk/isteamfriendslistener/#method-ongamerichpresencejoinrequestedsteamidfriendulong-connectstring) will be made.


<br/>

### `Method OnGameOverlayActivated(active:Int)`

Posted when the Steam Overlay activates or deactivates.

The game can use this to be pause or resume single player games.


<br/>

### `Method OnGameRichPresenceJoinRequested(steamIDFriend:ULong, connect:String)`

Called when the user tries to join a game from their friends list or after a user accepts an invite by a friend with [InviteUserToGame](../../../steam/steam.steamsdk/tsteamfriends/#method-inviteusertogameintsteamidfriendulong-connectstringstring).


> NOTE : This callback is made when joining a game. If the user is attempting to join a lobby, then the callback [OnGameLobbyJoinRequested](../../../steam/steam.steamsdk/isteamfriendslistener/#method-ongamelobbyjoinrequestedsteamidlobbyulong-steamidfriendulong) will be made.


<br/>

### `Method OnGameServerChangeRequested(server:String, password:String)`

Called when the user tries to join a different game server from their friends list.

The game client should attempt to connect to specified server when this is received.


<br/>

### `Method OnPersonaStateChanged(steamID:ULong, changeFlags:Int)`

Called whenever a friends' status changes.

<br/>

### `Method OnClanOfficerList(steamIDClan:ULong, officers:Int, success:Int)`

Marks the return of a request officer list call.

<br/>

### `Method OnDownloadClanActivityCounts(success:Int)`

Called when a Steam group activity has received.

<br/>

### `Method OnFriendsEnumerateFollowingList(result:EResult, steamIDS:ULong Ptr, resultsReturned:Int, totalResultCount:Int)`

Returns the result of [EnumerateFollowingList](../../../steam/steam.steamsdk/tsteamfriends/#method-enumeratefollowingliststartindexuint).

<br/>

### `Method OnFriendsGetFollowerCount(result:EResult, steamID:ULong, count:Int)`

Returns the result of [GetFollowerCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getfollowercountsteamidulong).

<br/>

### `Method OnFriendsIsFollowing(result:EResult, steamID:ULong, isFollowing:Int)`

Returns the result of [IsFollowing](../../../steam/steam.steamsdk/tsteamfriends/#method-isfollowingsteamidulong).

<br/>

### `Method OnGameConnectedChatJoined(steamIDClanChat:ULong, steamIDUser:ULong)`

Called when a user has joined a Steam group chat that the we are in.

<br/>

### `Method OnGameConnectedClanChatMsg(steamIDClanChat:ULong, steamIDUser:ULong, messageID:Int)`

Called when a chat message has been received in a Steam group chat that we are in.

<br/>

### `Method OnJoinClanChatRoomCompletion(steamIDClanChat:ULong, chatRoomEnterResponse:EChatRoomEnterResponse)`

Posted when the user has attempted to join a Steam group chat via [JoinClanChatRoom](../../../steam/steam.steamsdk/tsteamfriends/#method-joinclanchatroomsteamidclanulong).

<br/>

### `Method OnSetPersonaName(result:EResult, success:Int, localSuccess:Int)`

Reports the result of an attempt to change the current user's persona name.

<br/>

