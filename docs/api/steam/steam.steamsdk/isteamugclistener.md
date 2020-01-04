---
id: isteamugclistener
title: ISteamUGCListener
sidebar_label: ISteamUGCListener
---

Steam UGC listener interface


Implement this and add as a listener to an instance of [TSteamUGC](../../../steam/steam.steamsdk/tsteamugc) to receive appropriate event callbacks.


## Methods

### `Method OnAddAppDependency(result:EResult, publishedFileId:ULong, appID:UInt)`

The result of a call to [AddAppDependency](../../../steam/steam.steamsdk/tsteamugc/#method-addappdependencypublishedfileidulong-appiduint)

<br/>

### `Method OnAddDependency(result:EResult, publishedFileId:ULong, childPublishedFileId:ULong)`

The result of a call to [AddDependency](../../../steam/steam.steamsdk/tsteamugc/#method-adddependencypublishedfileidulong-childpublishedfileidulong).

<br/>

### `Method OnUserFavoriteItemsListChanged(result:EResult, publishedFileId:ULong, wasAddRequest:Int)`

Called when the user has added or removed an item to/from their favorites.

<br/>

### `Method OnCreateItem(result:EResult, publishedFileId:ULong, userNeedsToAcceptWorkshopLegalAgreement:Int)`

Called when a new workshop item has been created.

<br/>

### `Method OnDeleteItem(result:EResult, publishedFileId:ULong)`

Called when an attempt at deleting an item completes.

<br/>

### `Method OnDownloadItem(result:EResult, appID:UInt, publishedFileId:ULong)`

Called when a workshop item has been downloaded.

NOTE: This callback goes out to all running applications, ensure that the app ID associated with the item matches what you expect.


<br/>

### `Method OnGetUserItemVote(result:EResult, publishedFileId:ULong, votedUp:Int, votedDown:Int, voteSkipped:Int)`

Called when getting the users vote status on an item.

<br/>

### `Method OnItemInstalled(appID:UInt, publishedFileId:ULong)`

Called when a workshop item has been installed or updated.


> NOTE: This callback goes out to all running applications, ensure that the app ID associated with the item matches what you expect.


<br/>

### `Method OnRemoveAppDependency(result:EResult, publishedFileId:ULong, appID:UInt)`

The result of a call to [RemoveAppDependency](../../../steam/steam.steamsdk/tsteamugc/#method-removeappdependencypublishedfileidulong-appiduint).

<br/>

### `Method OnRemoveUGCDependency(result:EResult, publishedFileId:ULong, childPublishedFileId:ULong)`

The result of a call to [RemoveDependency](../../../steam/steam.steamsdk/tsteamugc/#method-removedependencyparentpublishedfileidulong-childpublishedfileidulong).

<br/>

### `Method OnSteamUGCQueryCompleted(result:EResult, queryHandle:ULong, numResultsReturned:UInt, totalMatchingResults:UInt)`

Called when a UGC query request completes.

<br/>

### `Method OnSetUserItemVote(result:EResult, publishedFileId:ULong, voteUp:Int)`

Called when the user has voted on an item.

<br/>

### `Method OnStartPlaytimeTracking(result:EResult)`

Called when workshop item playtime tracking has started.

<br/>

### `Method OnStopPlaytimeTracking(result:EResult)`

Called when workshop item playtime tracking has stopped.

<br/>

### `Method OnGetAppDependencies(result:EResult, publishedFileId:ULong, appID:UInt Ptr, numAppDependencies:Int, totalNumAppDependencies:Int)`

Called when getting the app dependencies for an item.

<br/>

### `Method OnSubmitItemUpdate(result:EResult, userNeedsToAcceptWorkshopLegalAgreement:Int)`

Called when an item update has completed.

<br/>

### `Method OnRemoteStorageSubscribePublishedFile(result:EResult, publishedFileId:ULong)`

Called when the user has subscribed to a piece of UGC.

<br/>

### `Method OnRemoteStorageUnsubscribePublishedFile(result:EResult, publishedFileId:ULong)`

Called when the user has unsubscribed from a piece of UGC.

<br/>

