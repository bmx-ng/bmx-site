---
id: tsteamfriends
title: TSteamFriends
sidebar_label: TSteamFriends
---

Interface to access information about individual users and interact with the Steam Overlay.


## Methods

### `Method SetListener(listener:ISteamFriendsListener)`

Sets the steam utils callback listener.

Once installed, the listener will receive utils events via the callback methods.


<br/>

### `Method ActivateGameOverlay(dialog:String)`

Activates the Steam Overlay to a specific dialog.

This is equivalent to calling [ActivateGameOverlayToUser](../../../steam/steam.steamsdk/tsteamfriends/#method-activategameoverlaytouserdialogstring-steamidulong) with steamID set to ISteamUser::GetSteamID.
Valid options are: "friends", "community", "players", "settings", "officialgamegroup", "stats", "achievements".


<br/>

### `Method ActivateGameOverlayInviteDialog(steamIDLobby:ULong)`

Activates the [Steam Overlay](https://partner.steamgames.com/doc/features/overlay) to open the invite dialog.

Invitations sent from this dialog will be for the provided lobby.


<br/>

### `Method ActivateGameOverlayToStore(appID:UInt, flag:EOverlayToStoreFlag )`

Activates the [Steam Overlay](https://partner.steamgames.com/doc/features/overlay) to the Steam store page for the provided app.

Using k_uAppIdInvalid brings the user to the front page of the Steam store.


<br/>

### `Method ActivateGameOverlayToUser(dialog:String, steamID:ULong)`

Activates [Steam Overlay](https://partner.steamgames.com/doc/features/overlay) to a specific dialog.

Valid <b>dialog</b> options are:
* "steamid" - Opens the overlay web browser to the specified user or groups profile.
* "chat" - Opens a chat window to the specified user, or joins the group chat.
* "jointrade" - Opens a window to a Steam Trading session that was started with the ISteamEconomy/StartTrade Web API.
* "stats" - Opens the overlay web browser to the specified user's stats.
* "achievements" - Opens the overlay web browser to the specified user's achievements.
* "friendadd" - Opens the overlay in minimal mode prompting the user to add the target user as a friend.
* "friendremove" - Opens the overlay in minimal mode prompting the user to remove the target friend.
* "friendrequestaccept" - Opens the overlay in minimal mode prompting the user to accept an incoming friend invite.
* "friendrequestignore" - Opens the overlay in minimal mode prompting the user to ignore an incoming friend invite.


<br/>

### `Method ActivateGameOverlayToWebPage(url:String)`

Activates [Steam Overlay](https://partner.steamgames.com/doc/features/overlay) web browser directly to the specified URL.

A fully qualified address with the protocol is required, e.g. "http://www.steampowered.com"


<br/>

### `Method ClearRichPresence()`

Clears all of the current user's Rich Presence key/values.

<br/>

### `Method CloseClanChatWindowInSteam:Int(steamIDClanChat:ULong)`

Closes the specified Steam group chat room in the Steam UI.


See Also: [IsClanChatWindowOpenInSteam](../../../steam/steam.steamsdk/tsteamfriends/#method-isclanchatwindowopeninsteamintsteamidclanchatulong), [OpenClanChatWindowInSteam](../../../steam/steam.steamsdk/tsteamfriends/#method-openclanchatwindowinsteamintsteamidclanchatulong)


#### Returns
[True](../../../brl/brl.blitz/#true) if the user successfully left the Steam group chat room, otherwise [False](../../../brl/brl.blitz/#false) if the user is not in the provided Steam group chat room.


<br/>

### `Method DownloadClanActivityCounts(steamIDClans:ULong Ptr, clansToRequest:Int)`

Refreshes the Steam Group activity data or get the data from groups other than one that the current user is a member.

After receiving the callback you can then use [GetClanActivityCounts](../../../steam/steam.steamsdk/tsteamfriends/#method-getclanactivitycountsintsteamidclanulong-onlineint-var-ingameint-var-chattingint-var) to get the up to date user counts.


<br/>

### `Method EnumerateFollowingList(startIndex:UInt)`

Gets the list of users that the current user is following.

You can be following people that are not your friends. Following allows you to receive updates when the person does things like post a new piece of content to the Steam Workshop.

> NOTE: This returns up to k_cEnumerateFollowersMax users at once. If the current user is following more than that, you will need to call this repeatedly, with unStartIndex set to the total number of followers that you have received so far.
> i.e. If you have received 50 followers, and the user is following 105, you will need to call this again with unStartIndex = 50 to get the next 50, and then again with unStartIndex = 100 to get the remaining 5 users.


<br/>

### `Method GetChatMemberByIndex:ULong(steamIDClan:ULong, user:Int)`

Gets the Steam ID at the given index in a Steam group chat.


> NOTE: You must call [GetClanChatMemberCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getclanchatmembercountintsteamidclanulong) before calling this.


<br/>

### `Method GetClanActivityCounts:Int(steamIDClan:ULong, online:Int Var, inGame:Int Var, chatting:Int Var)`

Gets the most recent information we have about what the users in a Steam Group are doing.

This can only retrieve data that the local client knows about.
To refresh the data or get data from a group other than one that the current user is a member of you must call [DownloadClanActivityCounts](../../../steam/steam.steamsdk/tsteamfriends/#method-downloadclanactivitycountssteamidclansulong-ptr-clanstorequestint).


#### Returns
[True](../../../brl/brl.blitz/#true) if the data was successfully returned, otherwise [False](../../../brl/brl.blitz/#false) if the provided Steam ID is invalid or the local client does not have info about the Steam group and sets all the other parameters to 0.


<br/>

### `Method GetClanByIndex:ULong(clan:Int)`

Gets the Steam group's Steam ID at the given index.


> NOTE: You must call [GetClanCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getclancountint) before calling this.


<br/>

### `Method GetClanChatMemberCount:Int(steamIDClan:ULong)`

Gets the number of users in a Steam group chat.


> NOTE: Large steam groups cannot be iterated by the local user.

> NOTE: The current user must be in a lobby to retrieve the Steam IDs of other users in that lobby.

This is used for iteration, after calling this then [GetChatMemberByIndex](../../../steam/steam.steamsdk/tsteamfriends/#method-getchatmemberbyindexulongsteamidclanulong-userint) can be used to get the Steam ID of each person in the chat.


#### Returns
0 if the Steam ID provided is invalid or if the local user doesn't have the data available.


<br/>

### `Method GetClanChatMessage:Int(steamIDClanChat:ULong, message:Int, txt:String Var, chatEntryType:EChatEntryType Var, steamidChatter:ULong Var)`

Gets the data from a Steam group chat room message.

This should only ever be called in response to an [OnGameConnectedClanChatMsg](../../../steam/steam.steamsdk/isteamfriendslistener/#method-ongameconnectedclanchatmsgsteamidclanchatulong-steamiduserulong-messageidint) callback.


#### Returns
The number of bytes copied into <b>txt</b>. Returns 0 and sets <b>chatEntryType</b> to k_EChatEntryTypeInvalid if the current user is not in the specified Steam group chat room or if the index provided in iMessage is invalid.


<br/>

### `Method GetClanCount:Int()`

Gets the number of Steam groups that the current user is a member of.

This is used for iteration, after calling this then [GetClanByIndex](../../../steam/steam.steamsdk/tsteamfriends/#method-getclanbyindexulongclanint) can be used to get the Steam ID of each Steam group.


#### Returns
The number of Steam groups that the user is a member of.


<br/>

### `Method GetClanName:String(steamIDClan:ULong)`

Gets the display name for the specified Steam group; if the local client knows about it.


See Also: [DownloadClanActivityCounts](../../../steam/steam.steamsdk/tsteamfriends/#method-downloadclanactivitycountssteamidclansulong-ptr-clanstorequestint)


#### Returns
The Steam groups name. Returns an empty string ("") if the provided Steam ID is invalid or the user does not know about the group.


<br/>

### `Method GetClanOfficerByIndex:ULong(steamIDClan:ULong, officer:Int)`

Gets the Steam ID of the officer at the given index in a Steam group.


> NOTE: You must call GetClanOfficerCount before calling this.


<br/>

### `Method GetClanOfficerCount:Int(steamIDClan:ULong)`

Gets the number of officers (administrators and moderators) in a specified Steam group.

This also includes the owner of the Steam group.

This is used for iteration, after calling this then [GetClanOfficerByIndex](../../../steam/steam.steamsdk/tsteamfriends/#method-getclanofficerbyindexulongsteamidclanulong-officerint) can be used to get the Steam ID of each officer.

> NOTE: You must call [RequestClanOfficerList](../../../steam/steam.steamsdk/tsteamfriends/#method-requestclanofficerliststeamidclanulong) before this to get the required data!


#### Returns
The number of officers in the Steam group. Returns 0 if <b>steamIDClan</b> is invalid or if [RequestClanOfficerList](../../../steam/steam.steamsdk/tsteamfriends/#method-requestclanofficerliststeamidclanulong) has not been called for it.


<br/>

### `Method GetClanOwner:ULong(steamIDClan:ULong)`

Gets the owner of a Steam Group.


> NOTE: You must call [RequestClanOfficerList](../../../steam/steam.steamsdk/tsteamfriends/#method-requestclanofficerliststeamidclanulong) before this to get the required data!


#### Returns
Returns k_steamIDNil if steamIDClan is invalid or if [RequestClanOfficerList](../../../steam/steam.steamsdk/tsteamfriends/#method-requestclanofficerliststeamidclanulong) has not been called for it.
 

<br/>

### `Method GetClanTag:String(steamIDClan:ULong)`

Gets the unique tag (abbreviation) for the specified Steam group; If the local client knows about it.

The Steam group abbreviation is a unique way for people to identify the group and is limited to 12 characters.
In some games this will appear next to the name of group members.


#### Returns
The Steam groups tag, or an empty string ("") if the provided Steam ID is invalid or the user does not know about the group.


<br/>

### `Method GetCoplayFriend:ULong(coplayFriend:Int)`

Gets the Steam ID of the recently played with user at the given index.


> NOTE: You must call [GetCoplayFriendCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getcoplayfriendcountint) before calling this.


<br/>

### `Method GetCoplayFriendCount:Int()`

Gets the number of players that the current users has recently played with, across all games.

This is used for iteration, after calling this then [GetCoplayFriend](../../../steam/steam.steamsdk/tsteamfriends/#method-getcoplayfriendulongcoplayfriendint) can be used to get the Steam ID of each player.

These players are have been set with previous calls to [SetPlayedWith](../../../steam/steam.steamsdk/tsteamfriends/#method-setplayedwithsteamiduserplayedwithulong).


#### Returns
The number of users that the current user has recently played with.
 

<br/>

### `Method GetFollowerCount(steamID:ULong)`

Gets the number of users following the specified user.

Triggers an OnFriendsGetFollowerCount callback.


<br/>

### `Method GetFriendByIndex:ULong(friend:Int, friendFlags:Int)`

Gets the Steam ID of the user at the given index.


> NOTE: You must call [GetFriendCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendcountintfriendflagsint) before calling this.


<br/>

### `Method GetFriendCoplayGame:UInt(steamIDFriend:ULong)`

Gets the app ID of the game that user played with someone on their recently-played-with list.

<br/>

### `Method GetFriendCoplayTime:Int(steamIDFriend:ULong)`

Gets the timestamp of when the user played with someone on their recently-played-with list.

#### Returns
The time is provided in Unix epoch format (seconds since Jan 1st 1970). Steam IDs not in the recently-played-with list return 0.


<br/>

### `Method GetFriendCount:Int(friendFlags:Int)`

Gets the number of users the client knows about who meet a specified criteria. (Friends, blocked, users on the same server, etc)

This can be used to iterate over all of the users by calling [GetFriendByIndex](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendbyindexulongfriendint-friendflagsint) to get the Steam IDs of each user.

> NOTE: Returns -1 if the current user is not logged on.


#### Returns
The number of users that meet the specified criteria.


<br/>

### `Method GetFriendCountFromSource:Int(steamIDSource:ULong)`

Get the number of users in a source (Steam group, chat room, lobby, or game server).


> NOTE: Large Steam groups cannot be iterated by the local user.

> NOTE: If you're getting the number of lobby members then you should use ISteamMatchmaking::GetNumLobbyMembers instead.

This is used for iteration, after calling this then [GetFriendFromSourceByIndex](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendfromsourcebyindexulongsteamidsourceulong-friendint) can be used to get the Steam ID of each person in the source.


#### Returns
0 if the Steam ID provided is invalid or if the local user doesn't have the data available.


<br/>

### `Method GetFriendFromSourceByIndex:ULong(steamIDSource:ULong, friend:Int)`

Gets the Steam ID at the given index from a source (Steam group, chat room, lobby, or game server).


> NOTE: You must call [GetFriendCountFromSource](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendcountfromsourceintsteamidsourceulong) before calling this.


<br/>

### `Method GetFriendGamePlayed:Int(steamIDFriend:ULong, gameID:ULong Var, gameIP:UInt Var, gamePort:Short Var, queryPort:Short Var, steamIDLobby:ULong Var)`

Checks if the specified friend is in a game, and gets info about the game if they are.

#### Returns
[True](../../../brl/brl.blitz/#true) if the user is a friend and is in a game, otherwise [False](../../../brl/brl.blitz/#false).


<br/>

### `Method GetFriendMessage:Int(steamIDFriend:ULong, messageID:Int, txt:String Var, chatEntryType:EChatEntryType Var)`

Gets the data from a Steam friends message.

This should only ever be called in response to an OGameConnectedFriendChatMsg callback.


#### Returns
The number of bytes copied into <b>txt</b>. Returns 0 and sets <b>chatEntryType</b> to k_EChatEntryTypeInvalid if the current user is chat restricted, if the provided Steam ID is not a friend, or if the index provided in <b>messageID</b> is invalid.


<br/>

### `Method GetFriendPersonaName:String(steamIDFriend:ULong)`

Gets the specified user's persona (display) name.

This will only be known to the current user if the other user is in their friends list, on the same game server, in a chat room or
lobby, or in a small Steam group with the local user.

> NOTE: Upon on first joining a lobby, chat room, or game server the current user will not known the name of the other users automatically; that information will arrive asynchronously via [OnPersonaStateChanged](../../../steam/steam.steamsdk/isteamfriendslistener/#method-onpersonastatechangedsteamidulong-changeflagsint) callbacks.

To get the persona name of the current user use [GetPersonaName](../../../steam/steam.steamsdk/tsteamfriends/#method-getpersonanamestring).


#### Returns
The current users persona name, or an empty string (""), or "[unknown]" if the Steam ID is invalid or not known to the caller.


<br/>

### `Method GetFriendPersonaNameHistory:String(steamIDFriend:ULong, personaName:Int)`

Gets one of the previous display names for the specified user.

This only works for display names that the current user has seen on the local computer.


#### Returns
The players old persona name at the given index. Returns an empty string when there are no further items in the history.


<br/>

### `Method GetFriendPersonaState:EPersonaState(steamIDFriend:ULong)`

Gets the current status of the specified user.

This will only be known to the current user if the other user is in their friends list, on the same game server,
in a chat room or lobby, or in a small Steam group with the local user.

> To get the state of the current user use [GetPersonaState](../../../steam/steam.steamsdk/tsteamfriends/#method-getpersonastateepersonastate).


#### Returns
The friend state of the specified user. (Online, Offline, In-Game, etc)


<br/>

### `Method GetFriendRelationship:EFriendRelationship(steamIDFriend:ULong)`

Gets a relationship to a specified user.

#### Returns
How the users know each other.


<br/>

### `Method GetFriendRichPresence:String(steamIDFriend:ULong, key:String)`

Gets a Rich Presence value from a specified friend.


See Also: [RequestFriendRichPresence](../../../steam/steam.steamsdk/tsteamfriends/#method-requestfriendrichpresencesteamidfriendulong), [SetRichPresence](../../../steam/steam.steamsdk/tsteamfriends/#method-setrichpresenceintkeystring-valuestring)


#### Returns
An empty string ("") if the specified key is not set.


<br/>

### `Method GetFriendRichPresenceKeyByIndex:String(steamIDFriend:ULong, key:Int)`

Gets a Rich Presence value from a specified friend for the given key index.


See Also: [RequestFriendRichPresence](../../../steam/steam.steamsdk/tsteamfriends/#method-requestfriendrichpresencesteamidfriendulong), [SetRichPresence](../../../steam/steam.steamsdk/tsteamfriends/#method-setrichpresenceintkeystring-valuestring)


#### Returns
An empty string ("") if the index is invalid or the specified user has no Rich Presence data available.


<br/>

### `Method GetFriendRichPresenceKeyCount:Int(steamIDFriend:ULong)`

Gets the number of Rich Presence keys that are set on the specified user.

This is used for iteration, after calling this then [GetFriendRichPresenceKeyByIndex](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendrichpresencekeybyindexstringsteamidfriendulong-keyint) to get the rich presence keys.

This is typically only ever used for debugging purposes.


#### Returns
0 if there is no Rich Presence information for the specified user.


<br/>

### `Method GetFriendsGroupCount:Int()`

Gets the number of friends groups (tags) the user has created.

This is used for iteration, after calling this then [GetFriendsGroupIDByIndex](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendsgroupidbyindexshortfgint) can be used to get the ID of each friend group.

This is not to be confused with Steam groups. Those can be obtained with [GetClanCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getclancountint).


#### Returns
The number of friends groups the current user has.


<br/>

### `Method GetFriendsGroupIDByIndex:Short(fg:Int)`

Gets the friends group ID for the given index.


> NOTE: You must call [GetFriendsGroupCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendsgroupcountint) before calling this.




<br/>

### `Method GetFriendsGroupMembersCount:Int(friendsGroupID:Short)`

Gets the number of friends in a given friends group.

This should be called before getting the list of friends with [GetFriendsGroupMembersList](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendsgroupmemberslistfriendsgroupidshort-outsteamidmembersulong-ptr-memberscountint).

See Also: [GetFriendsGroupCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendsgroupcountint)


#### Returns
The number of friends in the specified friends group.


<br/>

### `Method GetFriendsGroupMembersList(friendsGroupID:Short, outSteamIDMembers:ULong Ptr, membersCount:Int)`

Gets the number of friends in the given friends group.

If fewer friends exist than requested those positions' Steam IDs will be invalid.

You must call [GetFriendsGroupMembersCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendsgroupmemberscountintfriendsgroupidshort) before calling this to set up the <b>outSteamIDMembers</b> array with an appropriate size!

See Also: [GetFriendsGroupCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendsgroupcountint)


<br/>

### `Method GetFriendsGroupName:String(friendsGroupID:Short)`

Gets the name for the given friends group.


See Also: [GetFriendsGroupCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendsgroupcountint)


#### Returns
The friend groups name or [Null](../../../brl/brl.blitz/#null) if the group ID is invalid.


<br/>

### `Method GetFriendSteamLevel:Int(steamIDFriend:ULong)`

Gets the Steam level of the specified user.

You can use the local users Steam ID (ISteamUser::GetSteamID) to get their level.


If the Steam level is not immediately available for the specified user then this returns 0 and queues it to be downloaded from the Steam servers.
When it gets downloaded an [OnPersonaStateChanged](../../../steam/steam.steamsdk/isteamfriendslistener/#method-onpersonastatechangedsteamidulong-changeflagsint) callback will be posted with <b>changeFlags</b> including k_EPersonaChangeSteamLevel.


#### Returns
The Steam level if it's available.


<br/>

### `Method GetLargeFriendAvatar:Int(steamIDFriend:ULong)`

Gets a handle to the large (128*128px) avatar for the specified user.

You can pass in ISteamUser::GetSteamID to get the current users avatar.

Triggers an [OnAvatarImageLoaded](../../../steam/steam.steamsdk/isteamfriendslistener/#method-onavatarimageloadedsteamidulong-imageint-widthint-heightint) callback.

> NOTE: This only works for users that the local user knows about. They will automatically know about their friends, people on leaderboards they've requested, or people in the same source as them (Steam group, chat room, lobby, or game server). If they don't know about them then you must call [RequestUserInformation](../../../steam/steam.steamsdk/tsteamfriends/#method-requestuserinformationintsteamiduserulong-requirenameonlyint) to cache the avatar locally.

See Also: [GetMediumFriendAvatar](../../../steam/steam.steamsdk/tsteamfriends/#method-getmediumfriendavatarintsteamidfriendulong), [GetSmallFriendAvatar](../../../steam/steam.steamsdk/tsteamfriends/#method-getsmallfriendavatarintsteamidfriendulong)


#### Returns
A Steam image handle which is used with ISteamUtils::GetImageSize and ISteamUtils::GetImageRGBA. Returns 0 if no avatar is set for the user. Returns -1 if the avatar image data has not been loaded yet and requests that it gets download. In this case wait for an [OnAvatarImageLoaded](../../../steam/steam.steamsdk/isteamfriendslistener/#method-onavatarimageloadedsteamidulong-imageint-widthint-heightint) callback and then call this again.


<br/>

### `Method GetMediumFriendAvatar:Int(steamIDFriend:ULong)`

Gets a handle to the medium (64*64px) avatar for the specified user.

You can pass in ISteamUser::GetSteamID to get the current users avatar.

> NOTE: This only works for users that the local user knows about. They will automatically know about their friends, people on leaderboards they've requested, or people in the same source as them (Steam group, chat room, lobby, or game server). If they don't know about them then you must call [RequestUserInformation](../../../steam/steam.steamsdk/tsteamfriends/#method-requestuserinformationintsteamiduserulong-requirenameonlyint) to cache the avatar locally.

See Also: [GetLargeFriendAvatar](../../../steam/steam.steamsdk/tsteamfriends/#method-getlargefriendavatarintsteamidfriendulong), [GetSmallFriendAvatar](../../../steam/steam.steamsdk/tsteamfriends/#method-getsmallfriendavatarintsteamidfriendulong)


#### Returns
A Steam image handle which is used with ISteamUtils::GetImageSize and ISteamUtils::GetImageRGBA, or 0 if no avatar is set for the user.


<br/>

### `Method GetPersonaName:String()`

Gets the current users persona (display) name.

This is the same name that is displayed the users community profile page.

To get the persona name of other users use [GetFriendPersonaName](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendpersonanamestringsteamidfriendulong).


#### Returns
The current users persona name.


<br/>

### `Method GetPersonaState:EPersonaState()`

Gets the friend status of the current user.

To get the state of other users use [GetFriendPersonaState](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendpersonastateepersonastatesteamidfriendulong).


#### Returns
The friend state of the current user. (Online, Offline, In-Game, etc)


<br/>

### `Method GetPlayerNickname:String(steamIDPlayer:ULong)`

Gets the nickname that the current user has set for the specified user.

#### Returns
[Null](../../../brl/brl.blitz/#null) if the no nickname has been set for that user.


<br/>

### `Method GetSmallFriendAvatar:Int(steamIDFriend:ULong)`

Gets a handle to the small (32*32px) avatar for the specified user.

You can pass in ISteamUser::GetSteamID to get the current users avatar.

> NOTE: This only works for users that the local user knows about. They will automatically know about their friends, people on leaderboards they've requested, or people in the same source as them (Steam group, chat room, lobby, or game server). If they don't know about them then you must call [RequestUserInformation](../../../steam/steam.steamsdk/tsteamfriends/#method-requestuserinformationintsteamiduserulong-requirenameonlyint) to cache the avatar locally.

See Also: [GetLargeFriendAvatar](../../../steam/steam.steamsdk/tsteamfriends/#method-getlargefriendavatarintsteamidfriendulong), [GetMediumFriendAvatar](../../../steam/steam.steamsdk/tsteamfriends/#method-getmediumfriendavatarintsteamidfriendulong)


#### Returns
A Steam image handle which is used with ISteamUtils::GetImageSize and ISteamUtils::GetImageRGBA, or 0 if no avatar is set for the user.


<br/>

### `Method GetUserRestrictions:UInt()`

Checks if current user is chat restricted.

If they are restricted, then they can't send or receive any text/voice chat messages, can't see custom avatars.
A chat restricted user can't add friends or join any groups.
Restricted users can still be online and send/receive game invites.


<br/>

### `Method HasFriend:Int(steamIDFriend:ULong, friendFlags:Int)`

Checks if the user meets the specified criteria. (Friends, blocked, users on the same server, etc)

#### Returns
[True](../../../brl/brl.blitz/#true) if the specified user meets any of the criteria specified in <b>friendFlags</b>; otherwise, [False](../../../brl/brl.blitz/#false).


<br/>

### `Method InviteUserToGame:Int(steamIDFriend:ULong, connectString:String)`

Invites a friend or clan member to the current game using a special invite string.

If the target user accepts the invite then the <b>connectString</b> gets added to the command-line when launching the game.

If the game is already running for that user, then they will receive an [OnGameRichPresenceJoinRequested](../../../steam/steam.steamsdk/isteamfriendslistener/#method-ongamerichpresencejoinrequestedsteamidfriendulong-connectstring) callback with the connect string.

See Also: ISteamMatchmaking::InviteUserToLobby


<br/>

### `Method IsClanChatAdmin:Int(steamIDClanChat:ULong, steamIDUser:ULong)`

Checks if a user in the Steam group chat room is an admin.

#### Returns
[True](../../../brl/brl.blitz/#true) if the specified user is an admin, otherwise [False](../../../brl/brl.blitz/#false) if the user is not an admin, if the current user is not in the chat room specified, or the specified user is not in the chat room.


<br/>

### `Method IsClanPublic:Int(steamIDClan:ULong)`

Checks if the Steam group is public.

#### Returns
[True](../../../brl/brl.blitz/#true) if the specified group is public, otherwise [False](../../../brl/brl.blitz/#false) if the specified group is not public.


<br/>

### `Method IsClanOfficialGameGroup:Int(steamIDClan:ULong)`

Checks if the Steam group is an official game group/community hub.

#### Returns
[True](../../../brl/brl.blitz/#true) if the specified group is an official game group/community hub, [False](../../../brl/brl.blitz/#false) if the specified group is not an official game group/community hub.


<br/>

### `Method IsClanChatWindowOpenInSteam:Int(steamIDClanChat:ULong)`

Checks if the Steam Group chat room is open in the Steam UI.


See Also: [OpenClanChatWindowInSteam](../../../steam/steam.steamsdk/tsteamfriends/#method-openclanchatwindowinsteamintsteamidclanchatulong), [CloseClanChatWindowInSteam](../../../steam/steam.steamsdk/tsteamfriends/#method-closeclanchatwindowinsteamintsteamidclanchatulong)


#### Returns
[True](../../../brl/brl.blitz/#true) if the specified Steam group chat room is opened, otherwise, [False](../../../brl/brl.blitz/#false). This also returns [False](../../../brl/brl.blitz/#false) if the specified Steam group chat room is unknown.


<br/>

### `Method IsFollowing(steamID:ULong)`

Checks if the current user is following the specified user.

Triggers the [OnFriendsIsFollowing](../../../steam/steam.steamsdk/isteamfriendslistener/#method-onfriendsisfollowingresulteresult-steamidulong-isfollowingint) callback.


<br/>

### `Method IsUserInSource:Int(steamIDUser:ULong, steamIDSource:ULong)`

Checks if a specified user is in a source (Steam group, chat room, lobby, or game server).

#### Returns
[True](../../../brl/brl.blitz/#true) if the local user can see that <b>steamIDUser</b> is a member or in <b>steamIDSource</b>, otherwise, [False](../../../brl/brl.blitz/#false).


<br/>

### `Method JoinClanChatRoom(steamIDClan:ULong)`

Allows the user to join Steam group (clan) chats right within the game.

The behavior is somewhat complicated, because the user may or may not be already in the group chat from outside the game or in the overlay.

You can use [ActivateGameOverlayToUser](../../../steam/steam.steamsdk/tsteamfriends/#method-activategameoverlaytouserdialogstring-steamidulong) to open the in-game overlay version of the chat.

If you have joined a Steam group chat then you should be watching for the following callbacks:
* [OnGameConnectedClanChatMsg](../../../steam/steam.steamsdk/isteamfriendslistener/#method-ongameconnectedclanchatmsgsteamidclanchatulong-steamiduserulong-messageidint)
* OnGameConnectedChatJoin
* [OnGameConnectedChatLeave](../../../steam/steam.steamsdk/isteamfriendslistener/#method-ongameconnectedchatleavesteamidclanchatulong-steamiduserulong-kickedint-droppedint)

See Also: [LeaveClanChatRoom](../../../steam/steam.steamsdk/tsteamfriends/#method-leaveclanchatroomintsteamidclanulong), [GetClanChatMemberCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getclanchatmembercountintsteamidclanulong), [GetChatMemberByIndex](../../../steam/steam.steamsdk/tsteamfriends/#method-getchatmemberbyindexulongsteamidclanulong-userint), [SendClanChatMessage](../../../steam/steam.steamsdk/tsteamfriends/#method-sendclanchatmessageintsteamidclanchatulong-txtstring), [GetClanChatMessage](../../../steam/steam.steamsdk/tsteamfriends/#method-getclanchatmessageintsteamidclanchatulong-messageint-txtstring-var-chatentrytypeechatentrytype-var-steamidchatterulong-var), [IsClanChatAdmin](../../../steam/steam.steamsdk/tsteamfriends/#method-isclanchatadminintsteamidclanchatulong-steamiduserulong), [IsClanChatWindowOpenInSteam](../../../steam/steam.steamsdk/tsteamfriends/#method-isclanchatwindowopeninsteamintsteamidclanchatulong)


<br/>

### `Method LeaveClanChatRoom:Int(steamIDClan:ULong)`

Leaves a Steam group chat that the user has previously entered with [JoinClanChatRoom](../../../steam/steam.steamsdk/tsteamfriends/#method-joinclanchatroomsteamidclanulong).

Triggers an [OnGameConnectedChatLeave](../../../steam/steam.steamsdk/isteamfriendslistener/#method-ongameconnectedchatleavesteamidclanchatulong-steamiduserulong-kickedint-droppedint) callback.


#### Returns
[True](../../../brl/brl.blitz/#true) if user is in the specified chat room, otherwise [False](../../../brl/brl.blitz/#false).


<br/>

### `Method OpenClanChatWindowInSteam:Int(steamIDClanChat:ULong)`

Opens the specified Steam group chat room in the Steam UI.


Returns [False](../../../brl/brl.blitz/#false) in one of the following situations:
* The provided Steam group chat room does not exist or the user does not have access to join it.
* The current user is currently rate limited.
* The current user is chat restricted.

See Also: [IsClanChatWindowOpenInSteam](../../../steam/steam.steamsdk/tsteamfriends/#method-isclanchatwindowopeninsteamintsteamidclanchatulong), [CloseClanChatWindowInSteam](../../../steam/steam.steamsdk/tsteamfriends/#method-closeclanchatwindowinsteamintsteamidclanchatulong)


#### Returns
[True](../../../brl/brl.blitz/#true) if the user successfully entered the Steam group chat room.


<br/>

### `Method ReplyToFriendMessage:Int(steamIDFriend:ULong, msgToSend:String)`

Sends a message to a Steam friend.

#### Returns
[True](../../../brl/brl.blitz/#true) if the message was successfully sent, otherwise [False](../../../brl/brl.blitz/#false) if the current user is rate limited or chat restricted.


<br/>

### `Method RequestClanOfficerList(steamIDClan:ULong)`

Requests information about a Steam group officers (administrators and moderators).


Triggers an OnClanOfficerListResponse callback.

> NOTE: You can only ask about Steam groups that a user is a member of.

> NOTE: This won't download avatars for the officers automatically. If no avatar image is available for an officer, then call [RequestUserInformation](../../../steam/steam.steamsdk/tsteamfriends/#method-requestuserinformationintsteamiduserulong-requirenameonlyint) to download the avatar.

See Also: [GetClanOwner](../../../steam/steam.steamsdk/tsteamfriends/#method-getclanownerulongsteamidclanulong), [GetClanOfficerCount](../../../steam/steam.steamsdk/tsteamfriends/#method-getclanofficercountintsteamidclanulong), [GetClanOfficerByIndex](../../../steam/steam.steamsdk/tsteamfriends/#method-getclanofficerbyindexulongsteamidclanulong-officerint)


<br/>

### `Method RequestFriendRichPresence(steamIDFriend:ULong)`

Requests Rich Presence data from a specific user.

This is used to get the Rich Presence information from a user that is not a friend of the current user, like someone in the same lobby or game server.

This method is rate limited, if you call this too frequently for a particular user then it will just immediately post a callback without requesting new data from the server.

Triggers an [OnFriendRichPresenceUpdated](../../../steam/steam.steamsdk/isteamfriendslistener/#method-onfriendrichpresenceupdatedsteamidfriendulong-appiduint) callback.

See Also: [GetFriendRichPresence](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendrichpresencestringsteamidfriendulong-keystring), [SetRichPresence](../../../steam/steam.steamsdk/tsteamfriends/#method-setrichpresenceintkeystring-valuestring)


<br/>

### `Method RequestUserInformation:Int(steamIDUser:ULong, requireNameOnly:Int)`

Requests the persona name and optionally the avatar of a specified user.


Triggers an [OnPersonaStateChanged](../../../steam/steam.steamsdk/isteamfriendslistener/#method-onpersonastatechangedsteamidulong-changeflagsint) callback.

> NOTE: It's a lot slower to download avatars and churns the local cache, so if you don't need avatars, don't request them.


#### Returns
[True](../../../brl/brl.blitz/#true) means that the data has being requested, and an [OnPersonaStateChanged](../../../steam/steam.steamsdk/isteamfriendslistener/#method-onpersonastatechangedsteamidulong-changeflagsint) callback will be posted when it's retrieved. [False](../../../brl/brl.blitz/#false) means that we already have all the details about that user, and functions that require this information can be used immediately.


<br/>

### `Method SendClanChatMessage:Int(steamIDClanChat:ULong, txt:String)`

Sends a message to a Steam group chat room.


Returns [False](../../../brl/brl.blitz/#false) under one of the following circumstances:
* The current user is not in the specified group chat.
* The current user is not connected to Steam.
* The current user is rate limited.
* The current user is chat restricted.
* The message in <b>txt</b> exceeds 2048 characters.


#### Returns
[True](../../../brl/brl.blitz/#true) if the message was successfully sent.


<br/>

### `Method SetInGameVoiceSpeaking(steamIDUser:ULong, speaking:Int)`

Lets Steam know that the user is currently using voice chat in game.

This will suppress the microphone for all voice communication in the Steam UI.


<br/>

### `Method SetListenForFriendsMessages:Int(interceptEnabled:Int)`

Listens for Steam friends chat messages.

You can then show these chats inline in the game. For example with a Blizzard style chat message system or the chat system in Dota 2.
After enabling this you will receive [OnGameConnectedFriendChatMsg](../../../steam/steam.steamsdk/isteamfriendslistener/#method-ongameconnectedfriendchatmsgsteamiduserulong-messageidint) callbacks when ever the user receives a chat message.
You can get the actual message data from this callback with [GetFriendMessage](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendmessageintsteamidfriendulong-messageidint-txtstring-var-chatentrytypeechatentrytype-var). You can send messages with [ReplyToFriendMessage](../../../steam/steam.steamsdk/tsteamfriends/#method-replytofriendmessageintsteamidfriendulong-msgtosendstring).

Triggers an [OnGameConnectedFriendChatMsg](../../../steam/steam.steamsdk/isteamfriendslistener/#method-ongameconnectedfriendchatmsgsteamiduserulong-messageidint) callback.


#### Returns
Always returns [True](../../../brl/brl.blitz/#true).


<br/>

### `Method SetPersonaName(personaName:String)`

Sets the current users persona name, stores it on the server and publishes the changes to all friends who are online.

Changes take place locally immediately, and an [OnPersonaStateChanged](../../../steam/steam.steamsdk/isteamfriendslistener/#method-onpersonastatechangedsteamidulong-changeflagsint) callback is posted, presuming success.

If the name change fails to happen on the server, then an additional [OnPersonaStateChanged](../../../steam/steam.steamsdk/isteamfriendslistener/#method-onpersonastatechangedsteamidulong-changeflagsint) callback will be posted to change the name back,
in addition to the final result available in the call result.


<br/>

### `Method SetPlayedWith(steamIDUserPlayedWith:ULong)`

Marks a target user as 'played with'.


> NOTE: The current user must be in game with the other player for the association to work.

You can view the players you have recently played with here on the Steam community and in the Steam Overlay.


<br/>

### `Method SetRichPresence:Int(key:String, value:String)`

Sets a Rich Presence key/value for the current user that is automatically shared to all friends playing the same game.

Each user can have up to 20 keys set as defined by [k_cchMaxRichPresenceKeys](../../../steam/steam.steamsdk/#const-kcchmaxrichpresencekeysint-20).

There are two special keys used for viewing/joining games:
* "status" - A [String](../../../brl/brl.blitz/#string) that will show up in the 'view game info' dialog in the Steam friends list.
* "connect" - A [String](../../../brl/brl.blitz/#string) that contains the command-line for how a friend can connect to a game. This enables the 'join game' button in the 'view game info' dialog, in the steam friends list right click menu, and on the players Steam community profile.

There are three additional special keys used by the new Steam Chat:
* "steam_display" - Names a rich presence localization token that will be displayed in the viewing user's selected language in the Steam client UI. See [Rich Presence Localization](https://partner.steamgames.com/doc/api/ISteamFriends#richpresencelocalization) for more info, including a link to a page for testing this rich presence data. If steam_display is not set to a valid localization tag, then rich presence will not be displayed in the Steam client.
* "steam_player_group" - When set, indicates to the Steam client that the player is a member of a particular group. Players in the same group may be organized together in various places in the Steam UI. This string could identify a party, a server, or whatever grouping is relevant for your game. The string itself is not displayed to users.
* "steam_player_group_size" - When set, indicates the total number of players in the steam_player_group. The Steam client may use this number to display additional information about a group when all of the members are not part of a user's friends list. (For example, "Bob, Pete, and 4 more".)

You can clear all of the keys for the current user with [ClearRichPresence](../../../steam/steam.steamsdk/tsteamfriends/#method-clearrichpresence).

To get rich presence keys for friends see: [GetFriendRichPresence](../../../steam/steam.steamsdk/tsteamfriends/#method-getfriendrichpresencestringsteamidfriendulong-keystring).

Returns [False](../../../brl/brl.blitz/#false) under the following conditions:
* <b>key</b> was longer than [k_cchMaxRichPresenceKeyLength](../../../steam/steam.steamsdk/#const-kcchmaxrichpresencekeylengthint-64) or had a length of 0.
* <b>value</b> was longer than [k_cchMaxRichPresenceValueLength](../../../steam/steam.steamsdk/#const-kcchmaxrichpresencevaluelengthint-256).
* The user has reached the maximum amount of rich presence keys as defined by [k_cchMaxRichPresenceKeys](../../../steam/steam.steamsdk/#const-kcchmaxrichpresencekeysint-20).


#### Returns
[True](../../../brl/brl.blitz/#true) if the rich presence was set successfully.


<br/>

