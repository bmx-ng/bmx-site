---
id: tsteamugc
title: TSteamUGC
sidebar_label: TSteamUGC
---

Steam UGC API


Steam Workshop is a system of back-end storage and front-end web pages that make it easy to store, organize, sort, rate, and download content for your game or application.

In a typical set-up, customers of your game would use tools provided by you with purchase of your game to create modifications or entirely new content.
Those customers would then submit that content through a form built into your tool to the Steam Workshop.
Other customers would then be able to browse, sort, rate, and subscribe to items they wish to add to their game by going to the Steam Workshop
in the Steam Community. Those items would then download through Steam. By using the [OnItemInstalled](../../../steam/steam.steamsdk/isteamugclistener/#method-oniteminstalledappiduint-publishedfileidulong) callback within your game, you can then
call [GetItemInstallInfo](../../../steam/steam.steamsdk/tsteamugc/#method-getiteminstallinfointpublishedfileidulong-sizeondiskulong-var-folderstring-var-timestampuint-var) to get the installed location and read the data directly from that folder. That new content would then be recognized
by the game in whatever capacity makes sense for your game and the content created.

### Steam Workshop Types, Monetization, & Best Practices
For more information and definitions of the various types of Workshop integration you can utilize and how to make the best out of the
tools provided by Steam, please see the [Steam Workshop](https://partner.steamgames.com/doc/features/workshop) documentation.

### Enabling ISteamUGC for a Game or Application
Before workshop items can be uploaded to the Steamworks backend there are two configuration settings that must be made,
Configuring Steam Cloud Quotas and Enabling the ISteamUGC API.

The Steam Cloud feature is used to store the preview images associated to workshop items. The Steam Cloud Quota can be configured with the following steps:
1. Navigate to the Steam Cloud Settings page in the App Admin panel.
2. Set the Byte quota per user and Number of files allowed per user to appropriate values for preview image storage
3. Click Save Cloud Changes
4. From the Publish tab, click Prepare for Publishing
5. Click Publish to Steam and complete the process to publish the change.

Enabling the ISteamUGC API can be accomplished with the following steps:
1. Navigate to the Steam Workshop Configuration page in the App Admin panel.
2. Find the Additional Configuration Options section
3. Check on Use ISteamUGC for file transfer
4. Click Save Additional Configuration Options
5. From the Publish tab, click Prepare for Publishing
6. Click Publish to Steam and complete the process to publish the change.

Once these settings are in place workshop content can be uploaded via the API.

### Creating and Uploading Content
The process of creating and uploading workshop content is a simple and repeatable process.

#### Creating a Workshop Item
1. All workshop items begin their existence with a call to [CreateItem](../../../steam/steam.steamsdk/tsteamugc/#method-createitemconsumerappiduint-filetypeeworkshopfiletype)
* The <b>consumerAppId</b> variable should contain the App ID for the game or application. Do not pass the App ID of the workshop item creation tool if that is a separate App ID.
* [EWorkshopFileType](../../../steam/steam.steamsdk/eworkshopfiletype) is an enumeration type that defines how the shared file will be shared with the community. The valid values are:
* k_EWorkshopFileTypeCommunity - This file type is used to describe files that will be uploaded by users and made available to download by anyone in the community. Common usage of this would be to share user created mods.
* k_EWorkshopFileTypeMicrotransaction - This file type is used to describe files that are uploaded by users, but intended only for the game to consider adding as official content. These files will not be downloaded by users through the Workshop, but will be viewable by the community to rate. This is the implementation that Team Fortress 2 uses.
2. Register a call result handler for [OnCreateItem](../../../steam/steam.steamsdk/isteamugclistener/#method-oncreateitemresulteresult-publishedfileidulong-userneedstoacceptworkshoplegalagreementint).
3. First check the <b>result</b> to ensure that the item was created successfully.
4. When the call result handler is executed, read the <b>publishedFileId</b> value and store for future updates to the workshop item (e.g. in a project file associated with the creation tool).
5. The <b>userNeedsToAcceptWorkshopLegalAgreement</b> variable should also be checked and if it's true, the user should be redirected to accept the legal agreement. See the [Workshop Legal Agreement](https://partner.steamgames.com/doc/features/workshop/implementation#Legal) section for more details.

#### Uploading a Workshop Item
1. Once a workshop item has been created and a published file id value has been returned, the content of the workshop item can be populated and uploaded to the Steam Workshop.
2. An item update begins with a call to [StartItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-startitemupdateulongconsumerappiduint-publishedfileidulong)
3. Using the update handle that is returned from [StartItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-startitemupdateulongconsumerappiduint-publishedfileidulong), calls can be made to update the Title, Description, Visibility, Tags, Item Content and Item Preview Image through the various `SetItem[...]` methods.
* [SetItemTitle](../../../steam/steam.steamsdk/tsteamugc/#method-setitemtitleintupdatehandleulong-titlestring) - Sets a new title for an item.
* [SetItemDescription](../../../steam/steam.steamsdk/tsteamugc/#method-setitemdescriptionintupdatehandleulong-descriptionstring) - Sets a new description for an item.
* [SetItemUpdateLanguage](../../../steam/steam.steamsdk/tsteamugc/#method-setitemupdatelanguageintupdatehandleulong-languagestring) - Sets the language of the title and description that will be set in this item update.
* [SetItemMetadata](../../../steam/steam.steamsdk/tsteamugc/#method-setitemmetadataintupdatehandleulong-metadatastring) - Sets arbitrary metadata for an item. This metadata can be returned from queries without having to download and install the actual content.
* [SetItemVisibility](../../../steam/steam.steamsdk/tsteamugc/#method-setitemvisibilityintupdatehandleulong-visibilityeremotestoragepublishedfilevisibility) - Sets the visibility of an item.
* [SetItemTags](../../../steam/steam.steamsdk/tsteamugc/#method-setitemtagsintupdatehandleulong-tagsstring) - Sets arbitrary developer specified tags on an item.
* [AddItemKeyValueTag](../../../steam/steam.steamsdk/tsteamugc/#method-additemkeyvaluetagintqueryhandleulong-keystring-valuestring) - Adds a key-value tag pair to an item. Keys can map to multiple different values (1-to-many relationship).
* [RemoveItemKeyValueTags](../../../steam/steam.steamsdk/tsteamugc/#method-removeitemkeyvaluetagsintqueryhandleulong-keystring) - Removes an existing key value tag from an item.
* [SetItemContent](../../../steam/steam.steamsdk/tsteamugc/#method-setitemcontentintupdatehandleulong-contentfolderstring) - Sets the folder that will be stored as the content for an item.
* [SetItemPreview](../../../steam/steam.steamsdk/tsteamugc/#method-setitempreviewintupdatehandleulong-previewfilestring) -Sets the primary preview image for the item.
4. Once the update calls have been completed, calling [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring) will initiate the upload process to the Steam Workshop.
* Register a call result handler for [OnSubmitItemUpdate](../../../steam/steam.steamsdk/isteamugclistener/#method-onsubmititemupdateresulteresult-userneedstoacceptworkshoplegalagreementint)
* When the call result handler is executed, check the <b>result</b> to confirm the upload completed successfully.
* Note: There is no method to cancel the item update and upload once it's been called.
5. If desired, the progress of the upload can be tracked using [GetItemUpdateProgress](../../../steam/steam.steamsdk/tsteamugc/#method-getitemupdateprogresseitemupdatestatusqueryhandleulong-bytesprocessedulong-var-bytestotalulong-var)
* EItemUpdateStatus defines the upload and update progress.
* <b>bytesProcessed</b> and <b>bytesTotal</b> can be used to provide input for a user interface control such as a progress bar to indicate progress of the upload.
* <b>bytesTotal</b> may update during the upload process based upon the stage of the item update.
6. In the same way as Creating a Workshop Item, confirm the user has accepted the legal agreement. This is necessary in case where the user didn't initially create the item but is editing an existing item.

##### Additional Notes
* Workshop items were previously designated as single files. With ISteamUGC, a workshop item is a representation of a folder of files.
* If a workshop item requires additional metadata for use by the consuming application, you can attach metadata to your item using the [SetItemMetadata](../../../steam/steam.steamsdk/tsteamugc/#method-setitemmetadataintupdatehandleulong-metadatastring) call. This metadata can be returned in queries without having to download and install the item content.  Previously we suggested that you save this metadata to a file inside the workshop item folder, which of course you can still do.

### Consuming Content
Consuming workshop content falls into two categories, Item Subscription and Item Installation.

#### Item Subscription
The majority of subscriptions to a workshop item will happen through the Steam Workshop portal. It is a known location, common to all games and applications, and as such, users are likely to find and subscribe to items regularly on the workshop site.

However, ISteamUGC provides two methods for programmatically subscribing and unsubscribing to workshop items to support in-game item subscription management.
* [SubscribeItem](../../../steam/steam.steamsdk/tsteamugc/#method-subscribeitempublishedfileidulong) - Subscribe to a workshop item. It will be downloaded and installed as soon as possible.
* [UnsubscribeItem](../../../steam/steam.steamsdk/tsteamugc/#method-unsubscribeitempublishedfileidulong) - Unsubscribe from a workshop item. This will result in the item being removed after the game quits.

Two additional methods exist for enumerating through a user's subscribed items.
* [GetNumSubscribedItems](../../../steam/steam.steamsdk/tsteamugc/#method-getnumsubscribeditemsuint) - Gets the total number of items the current user is subscribed to for the game or application.
* [GetSubscribedItems](../../../steam/steam.steamsdk/tsteamugc/#method-getsubscribeditemsuintpublishedfileidsulong-ptr-maxentriesuint) - Gets a list of all of the items the current user is subscribed to for the current game.

##### Receiving Notifications for External Subscription Actions
In-game notifications can be received when a user has subscribed or unsubscribed from a file through any mechanism (e.g. ISteamUGC, Steam Workshop Website):
* Register a callback handler for OnRemoteStoragePublishedFileSubscribed and OnRemoteStoragePublishedFileUnsubscribed
* The <b>publishedFileId</b> will be returned which can then be used to access the information about the workshop item.
* The application ID (@appID) associated with the workshop item will also be returned. It should be compared against the running application ID as the handler will be called for all item subscriptions regardless of the running application.

#### Item Installation
Once Item Subscription information is known, the remaining consumption methods can be utilized. These methods provide information back to the game about the state of the item download and installation. Workshop item downloads are executed via the Steam Client and happen automatically, based on the following rules:

1. When the Steam Client indicates a game or application is to launch, all app depots that have been updated will be downloaded and installed.
2. Any existing installed workshop items are updated if needed
3. Game or application then launches
4. Newly subscribed workshop items that are not downloaded will then download and be installed in the background.
* Subscribed files will be downloaded to the client in the order they were subscribed in.
* The Steam download page will show workshop item downloads with a specific banner to indicate a workshop item download is occurring.

> Note: Using the "Verify Integrity of Game Files" feature in the Steam Client will also cause workshop items to be downloaded.

As the game will start before newly subscribed content is downloaded and installed, the remaining consumption methods exist to aid in monitoring and managing the install progress. They can also be used when items are subscribed in-game to provide status of installation in real time.

##### Status of a Workshop Item
* [GetItemState](../../../steam/steam.steamsdk/tsteamugc/#method-getitemstateeitemstatepublishedfileidulong) - Gets the current state of a workshop item on this client.

##### Download Progress of a Workshop Item
* [GetItemDownloadInfo](../../../steam/steam.steamsdk/tsteamugc/#method-getitemdownloadinfointpublishedfileidulong-bytesdownloadedulong-var-bytestotalulong-var) - Get info about a pending download of a workshop item that has k_EItemStateNeedsUpdate set.

##### Initiate or Increase the Priority of Downloading a Workshop Item
1. [DownloadItem](../../../steam/steam.steamsdk/tsteamugc/#method-downloaditemintpublishedfileidulong-highpriorityint)
* Set <b>highPriority</b> to [True](../../../brl/brl.blitz/#true) to pause any existing in-progress downloads and immediately begin downloading this workshop item.
* If the return value is [True](../../../brl/brl.blitz/#true) then register and wait for the callback [OnDownloadItem](../../../steam/steam.steamsdk/isteamugclistener/#method-ondownloaditemresulteresult-appiduint-publishedfileidulong) before calling [GetItemInstallInfo](../../../steam/steam.steamsdk/tsteamugc/#method-getiteminstallinfointpublishedfileidulong-sizeondiskulong-var-folderstring-var-timestampuint-var) or accessing the workshop item on disk.
* If the user is not subscribed to the item (e.g. a Game Server using anonymous login), the workshop item will be downloaded and cached temporarily.
* If the workshop item has an EItemState of k_EItemStateNeedsUpdate, [DownloadItem](../../../steam/steam.steamsdk/tsteamugc/#method-downloaditemintpublishedfileidulong-highpriorityint) can be called to initiate the update. Do not access the workshop item on disk until the callback ISteamUGC::DownloadItemResult_t is called.
* This method only works with ISteamUGC created workshop items. It will not work with legacy ISteamRemoteStorage workshop items.
* The [OnDownloadItem](../../../steam/steam.steamsdk/isteamugclistener/#method-ondownloaditemresulteresult-appiduint-publishedfileidulong) callback struct contains the application ID (m_unAppID) associated with the workshop item. It should be compared against the running application ID as the handler will be called for all item downloads regardless of the running application.

##### Retrieving information about the local copy of the Workshop Item
* [GetItemInstallInfo](../../../steam/steam.steamsdk/tsteamugc/#method-getiteminstallinfointpublishedfileidulong-sizeondiskulong-var-folderstring-var-timestampuint-var) - Gets info about currently installed content on the disc for workshop items that have k_EItemStateInstalled set.

##### Notification when a Workshop Item is Installed or Updated
* Register a callback handler for [OnItemInstalled](../../../steam/steam.steamsdk/isteamugclistener/#method-oniteminstalledappiduint-publishedfileidulong).

### Querying Content
The [TSteamUGC](../../../steam/steam.steamsdk/tsteamugc) interface provides a flexible way to enumerate the various kinds of UGC in Steam (e.g. Workshop items, screenshots, videos, etc.).

1. Register a call result handler for [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint).
2. There are a few methods available for creating the query depending upon the required scenario, Querying by Content Associated to a User or Querying All Content or getting the details of content you have ids for.
* [CreateQueryUserUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryuserugcrequestulongaccountiduint-listtypeeuserugclist-matchingugctypeeugcmatchingugctype-sortordereuserugclistsortorder-creatorappiduint-consumerappiduint-pageuint) - Query UGC associated with a user. You can use this to list the UGC the user is subscribed to amongst other things.
* CreateQueryAllUGCRequest - Query for all matching UGC. You can use this to list all of the available UGC for your app.
* CreateQueryUGCDetailsRequest - Query for the details of specific workshop items.
3. Customize the query as appropriate by calling the option setting methods:

When querying for User UGC
* [SetCloudFileNameFilter](../../../steam/steam.steamsdk/tsteamugc/#method-setcloudfilenamefilterintqueryhandleulong-matchcloudfilenamestring) - Sets to only return items that have a specific filename on a pending UGC Query.

When querying for All UGC
* [SetMatchAnyTag](../../../steam/steam.steamsdk/tsteamugc/#method-setmatchanytagintqueryhandleulong-matchanytagint) - Sets whether workshop items will be returned if they have one or more matching tag, or if all tags need to match on a pending UGC Query.
* [SetSearchText](../../../steam/steam.steamsdk/tsteamugc/#method-setsearchtextintqueryhandleulong-searchtextstring) - Sets a string to that items need to match in either the title or the description on a pending UGC Query.
* [SetRankedByTrendDays](../../../steam/steam.steamsdk/tsteamugc/#method-setrankedbytrenddaysintqueryhandleulong-daysuint) - Sets whether the order of the results will be updated based on the rank of items over a number of days on a pending UGC Query.

When querying for either type of UGC

* [AddRequiredTag](../../../steam/steam.steamsdk/tsteamugc/#method-addrequiredtagintqueryhandleulong-tagnamestring) - Adds a required tag to a pending UGC Query. This will only return UGC with the specified tag.
* [AddExcludedTag](../../../steam/steam.steamsdk/tsteamugc/#method-addexcludedtagintqueryhandleulong-tagnamestring) - Adds a excluded tag to a pending UGC Query. This will only return UGC without the specified tag.
* [AddRequiredKeyValueTag](../../../steam/steam.steamsdk/tsteamugc/#method-addrequiredkeyvaluetagintqueryhandleulong-keystring-valuestring) - Adds a required key-value tag to a pending UGC Query. This will only return workshop items that have a key = `key` and a value = `value`.
* [SetReturnOnlyIDs](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnonlyidsintqueryhandleulong-returnonlyidsint) - Sets whether to only return IDs instead of all the details on a pending UGC Query. This is useful for when you don't need all the information (e.g. you just want to get the IDs of the items a user has in their favorites list.)
* [SetReturnKeyValueTags](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnkeyvaluetagsintqueryhandleulong-returnkeyvaluetagsint) - Sets whether to return any key-value tags for the items on a pending UGC Query.
* [SetReturnLongDescription](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnlongdescriptionintqueryhandleulong-returnlongdescriptionint) - Sets whether to return the full description for the items on a pending UGC Query.
* [SetReturnMetadata](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnmetadataintqueryhandleulong-returnmetadataint) - Sets whether to return the developer specified metadata for the items on a pending UGC Query.
* [SetReturnChildren](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnchildrenintqueryhandleulong-returnchildrenint) - Sets whether to return the IDs of the child items of the items on a pending UGC Query.
* [SetReturnAdditionalPreviews](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnadditionalpreviewsintqueryhandleulong-returnadditionalpreviewsint) - Sets whether to return any additional images/videos attached to the items on a pending UGC Query.
* [SetReturnTotalOnly](../../../steam/steam.steamsdk/tsteamugc/#method-setreturntotalonlyintqueryhandleulong-returntotalonlyint) - Sets whether to only return the total number of matching items on a pending UGC Query. -- The actual items will not be returned when ISteamUGC::SteamUGCQueryCompleted_t is called.
* [SetLanguage](../../../steam/steam.steamsdk/tsteamugc/#method-setlanguageintqueryhandleulong-languagestring) - Sets the language to return the title and description in for the items on a pending UGC Query.
* [SetAllowCachedResponse](../../../steam/steam.steamsdk/tsteamugc/#method-setallowcachedresponseintqueryhandleulong-maxagesecondsuint) - Sets whether results to be will be returned from the cache for the specific period of time on a pending UGC Query.

4. Send the query to Steam using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong) which will invoke the [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint) call result handler registered in step 1.
5. In the call result handler for [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint), call GetQueryUGCResult to retrieve the details for each item returned.
6. You can also call these functions to retrieve additional information for each item (some of this data is not returned by default, so you need to configure your query appropriately):
* [GetQueryUGCPreviewURL](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcpreviewurlintqueryhandleulong-indexuint-urlstring-var) - Retrieve the URL to the preview image of an individual workshop item after receiving a querying UGC call result.
* [GetQueryUGCMetadata](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcmetadataintqueryhandleulong-indexuint-metadatastring-var) - Retrieve the developer set metadata of an individual workshop item after receiving a querying UGC call result.
* [GetQueryUGCChildren](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcchildrenintqueryhandleulong-indexuint-publishedfileidsulong-ptr-maxentriesuint) - Retrieve the ids of any child items of an individual workshop item after receiving a querying UGC call result.
* [GetQueryUGCStatistic](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcstatisticintqueryhandleulong-indexuint-stattypeeitemstatistic-statvalueulong-var) - Retrieve various statistics of an individual workshop item after receiving a querying UGC call result.
* [GetQueryUGCNumAdditionalPreviews](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcnumadditionalpreviewsuintqueryhandleulong-indexuint) and [GetQueryUGCAdditionalPreview](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcadditionalpreviewintqueryhandleulong-indexuint-previewindexuint-urlorvideoidstring-var-originalfilenamestring-var-previewtypeeitempreviewtype-var) - Retrieve the details of an additional preview associated with an individual workshop item after receiving a querying UGC call result.
* [GetQueryUGCNumKeyValueTags](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcnumkeyvaluetagsuintqueryhandleulong-indexuint) and [GetQueryUGCKeyValueTag](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugckeyvaluetagintqueryhandleulong-indexuint-keyvaluetagindexuint-keystring-var-valuestring-var) - Retrieve the details of a key-value tag associated with an individual workshop item after receiving a querying UGC call result.

7. Call [ReleaseQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-releasequeryugcrequestintqueryhandleulong) to free up any memory allocated while querying or retrieving the results.

##### Paging Results
Up to 50 results will be returned from each query. Paging through more results can be achieved by creating a query that increments the unPage parameter (which should start at 1).

### Playtime Tracking
To track the playtime of Workshop items simply call [StartPlaytimeTracking](../../../steam/steam.steamsdk/tsteamugc/#method-startplaytimetrackingpublishedfileidsulong-ptr-numpublishedfileidsuint) with the ids of the items you want to track. Then when the items are removed from play call [StopPlaytimeTracking](../../../steam/steam.steamsdk/tsteamugc/#method-stopplaytimetrackingpublishedfileidsulong-ptr-numpublishedfileidsuint) with the ids you want to stop tracking or call [StopPlaytimeTrackingForAllItems](../../../steam/steam.steamsdk/tsteamugc/#method-stopplaytimetrackingforallitems) to stop tracking playtime for all items at once.
When your app shuts down, playtime tracking will automatically stop.

You will also be able to sort items by various playtime metrics in [CreateQueryAllUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryallugcrequestulongquerytypeeugcquery-matchingematchingugctypefiletypeeugcmatchingugctype-creatorappiduint-consumerappiduint-pageuint) queries. Here are the playtime based query types you can use:
* k_EUGCQuery_RankedByPlaytimeTrend - Sort by total playtime in the "trend" period descending (set with [SetRankedByTrendDays](../../../steam/steam.steamsdk/tsteamugc/#method-setrankedbytrenddaysintqueryhandleulong-daysuint))
* k_EUGCQuery_RankedByTotalPlaytime - Sort by total lifetime playtime descending.
* k_EUGCQuery_RankedByAveragePlaytimeTrend - Sort by average playtime in the "trend" period descending (set with [SetRankedByTrendDays](../../../steam/steam.steamsdk/tsteamugc/#method-setrankedbytrenddaysintqueryhandleulong-daysuint))
* k_EUGCQuery_RankedByLifetimeAveragePlaytime - Soft by lifetime average playtime descending
* k_EUGCQuery_RankedByPlaytimeSessionsTrend - Sort by number of play sessions in the "trend" period descending (set in [SetRankedByTrendDays](../../../steam/steam.steamsdk/tsteamugc/#method-setrankedbytrenddaysintqueryhandleulong-daysuint))
* k_EUGCQuery_RankedByLifetimePlaytimeSessions - Sort by number of lifetime play sessions descending

### Deleting Workshop Item Content
To delete a Workshop item, you can call [DeleteItem](../../../steam/steam.steamsdk/tsteamugc/#method-deleteitempublishedfileidulong). Please note that this does not prompt the user and cannot be undone.

### Workshop Legal Agreement
Workshop items will be hidden by default until the contributor agrees to the Steam Workshop Legal Agreement. In order to make it easy for the contributor to make the item publicly visible, please do the following.
1. Include text next to the button that submits an item to the workshop, something to the effect of: "By submitting this item, you agree to the [workshop terms of service](http://steamcommunity.com/sharedfiles/workshoplegalagreement)" (including the link)
2. After a user submits an item, open a browser window to the Steam Workshop page for that item by calling ISteamFriends::ActivateGameOverlayToWebPage with pchURL set to steam://url/CommunityFilePage/&lt;PublishedFileId_t&gt; replacing &lt;PublishedFileId_t&gt; with the workshop item id.

This has the benefit of directing the author to the workshop page so that they can see the item and configure it further if necessary and will make it easy for the user to read and accept the Steam Workshop Legal Agreement.

### Errors and Logging
The majority of [TSteamUGC](../../../steam/steam.steamsdk/tsteamugc) methods return boolean values. For additional information on specific errors, there are a number of places to review:
* `Steam\logs\Workshop_log.txt` is a log for all transfers that occur during workshop item downloading and installation.
* `Steam\workshopbuilds\depot_build_<appid>.log` is a log for all actions during the upload and update of a workshop item.
* [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint), [OnCreateItem](../../../steam/steam.steamsdk/isteamugclistener/#method-oncreateitemresulteresult-publishedfileidulong-userneedstoacceptworkshoplegalagreementint) and [OnSubmitItemUpdate](../../../steam/steam.steamsdk/isteamugclistener/#method-onsubmititemupdateresulteresult-userneedstoacceptworkshoplegalagreementint) contain EResult variables that can be checked.



## Methods

### `Method AddAppDependency(publishedFileID:ULong, appID:UInt)`

Adds a dependency between the given item and the appid.

This list of dependencies can be retrieved by calling [GetAppDependencies](../../../steam/steam.steamsdk/tsteamugc/#method-getappdependenciespublishedfileidulong).
This is a soft-dependency that is displayed on the web. It is up to the application to determine whether the item can actually be used or not.

See Also: [RemoveAppDependency](../../../steam/steam.steamsdk/tsteamugc/#method-removeappdependencypublishedfileidulong-appiduint)


<br/>

### `Method AddDependency(publishedFileId:ULong, childPublishedFileId:ULong)`

Adds a workshop item as a dependency to the specified item.

If the <b>parentPublishedFileID</b> item is of type k_EWorkshopFileTypeCollection, then the childPublishedFileID is simply added to that collection.
Otherwise, the dependency is a soft one that is displayed on the web and can be retrieved via the [TSteamUGC](../../../steam/steam.steamsdk/tsteamugc) API using a combination of the <b>numChildren</b> member variable of the SteamUGCDetails_t struct and [GetQueryUGCChildren](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcchildrenintqueryhandleulong-indexuint-publishedfileidsulong-ptr-maxentriesuint).

See Also: [RemoveDependency](../../../steam/steam.steamsdk/tsteamugc/#method-removedependencyparentpublishedfileidulong-childpublishedfileidulong)


<br/>

### `Method AddExcludedTag:Int(queryHandle:ULong, tagName:String)`

Adds a excluded tag to a pending UGC Query.

This will only return UGC without the specified tag.

NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).

See Also: [AddRequiredTag](../../../steam/steam.steamsdk/tsteamugc/#method-addrequiredtagintqueryhandleulong-tagnamestring), [SetMatchAnyTag](../../../steam/steam.steamsdk/tsteamugc/#method-setmatchanytagintqueryhandleulong-matchanytagint), [SetItemTags](../../../steam/steam.steamsdk/tsteamugc/#method-setitemtagsintupdatehandleulong-tagsstring)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success or [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid, if the UGC query handle is from [CreateQueryUGCDetailsRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryugcdetailsrequestulongpublishedfileidsulong), or <b>tagName</b> was [Null](../../../brl/brl.blitz/#null).


<br/>

### `Method AddItemKeyValueTag:Int(queryHandle:ULong, key:String, value:String)`

Adds a key-value tag pair to an item.

Keys can map to multiple different values (1-to-many relationship).

Key names are restricted to alpha-numeric characters and the '_' character.
Both keys and values cannot exceed 255 characters in length.
Key-value tags are searchable by exact match only.

> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).

See Also: [RemoveItemKeyValueTags](../../../steam/steam.steamsdk/tsteamugc/#method-removeitemkeyvaluetagsintqueryhandleulong-keystring), [SetReturnKeyValueTags](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnkeyvaluetagsintqueryhandleulong-returnkeyvaluetagsint), [GetQueryUGCNumKeyValueTags](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcnumkeyvaluetagsuintqueryhandleulong-indexuint), [GetQueryUGCKeyValueTag](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugckeyvaluetagintqueryhandleulong-indexuint-keyvaluetagindexuint-keystring-var-valuestring-var)


<br/>

### `Method AddItemPreviewFile:Int(queryHandle:ULong, previewFile:String, previewType:EItemPreviewType)`

Adds an additional preview file for the item.

Then the format of the image should be one that both the web and the application (if necessary) can render, and must be under 1MB.
Suggested formats include JPG, PNG and GIF.

> NOTE: Using k_EItemPreviewType_YouTubeVideo or k_EItemPreviewType_Sketchfab are not currently supported with this API.
> For YouTube videos you should use [AddItemPreviewVideo](../../../steam/steam.steamsdk/tsteamugc/#method-additempreviewvideointqueryhandleulong-videoidstring).

> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).

See Also: [GetQueryUGCNumAdditionalPreviews](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcnumadditionalpreviewsuintqueryhandleulong-indexuint), [GetQueryUGCAdditionalPreview](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcadditionalpreviewintqueryhandleulong-indexuint-previewindexuint-urlorvideoidstring-var-originalfilenamestring-var-previewtypeeitempreviewtype-var), [SetReturnAdditionalPreviews](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnadditionalpreviewsintqueryhandleulong-returnadditionalpreviewsint), [UpdateItemPreviewFile](../../../steam/steam.steamsdk/tsteamugc/#method-updateitempreviewfileintupdatehandleulong-indexuint-previewfilestring), [AddItemPreviewVideo](../../../steam/steam.steamsdk/tsteamugc/#method-additempreviewvideointqueryhandleulong-videoidstring), [RemoveItemPreview](../../../steam/steam.steamsdk/tsteamugc/#method-removeitempreviewintqueryhandleulong-indexuint)


<br/>

### `Method AddItemPreviewVideo:Int(queryHandle:ULong, videoID:String)`

Adds an additional video preview from YouTube for the item.


> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).

See Also: [GetQueryUGCNumAdditionalPreviews](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcnumadditionalpreviewsuintqueryhandleulong-indexuint), [GetQueryUGCAdditionalPreview](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcadditionalpreviewintqueryhandleulong-indexuint-previewindexuint-urlorvideoidstring-var-originalfilenamestring-var-previewtypeeitempreviewtype-var), [SetReturnAdditionalPreviews](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnadditionalpreviewsintqueryhandleulong-returnadditionalpreviewsint), [UpdateItemPreviewVideo](../../../steam/steam.steamsdk/tsteamugc/#method-updateitempreviewvideointupdatehandleulong-indexuint-videoidstring), [AddItemPreviewFile](../../../steam/steam.steamsdk/tsteamugc/#method-additempreviewfileintqueryhandleulong-previewfilestring-previewtypeeitempreviewtype), [RemoveItemPreview](../../../steam/steam.steamsdk/tsteamugc/#method-removeitempreviewintqueryhandleulong-indexuint)


<br/>

### `Method AddItemToFavorites(appId:UInt, publishedFileID:ULong)`

Adds a workshop item to the users favorites list.

See Also: [RemoveItemFromFavorites](../../../steam/steam.steamsdk/tsteamugc/#method-removeitemfromfavoritesappiduint-publishedfileidulong)


<br/>

### `Method AddRequiredKeyValueTag:Int(queryHandle:ULong, key:String, value:String)`

Adds a required key-value tag to a pending UGC Query.

This will only return workshop items that have a key = pKey and a value = pValue.

> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).

See Also: [AddExcludedTag](../../../steam/steam.steamsdk/tsteamugc/#method-addexcludedtagintqueryhandleulong-tagnamestring), [SetMatchAnyTag](../../../steam/steam.steamsdk/tsteamugc/#method-setmatchanytagintqueryhandleulong-matchanytagint), [SetItemTags](../../../steam/steam.steamsdk/tsteamugc/#method-setitemtagsintupdatehandleulong-tagsstring)


<br/>

### `Method AddRequiredTag:Int(queryHandle:ULong, tagName:String)`

Adds a required tag to a pending UGC Query.

This will only return UGC with the specified tag.

> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).

See Also: [AddExcludedTag](../../../steam/steam.steamsdk/tsteamugc/#method-addexcludedtagintqueryhandleulong-tagnamestring), [SetMatchAnyTag](../../../steam/steam.steamsdk/tsteamugc/#method-setmatchanytagintqueryhandleulong-matchanytagint), [SetItemTags](../../../steam/steam.steamsdk/tsteamugc/#method-setitemtagsintupdatehandleulong-tagsstring)


<br/>

### `Method InitWorkshopForGameServer:Int(workshopDepotID:ULong, folder:String)`

Lets game servers set a specific workshop folder before issuing any UGC commands.

This is helpful if you want to support multiple game servers running out of the same install folder.


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise, [False](../../../brl/brl.blitz/#false) if the calling user is not a game server or if the workshop is currently updating it's content.


<br/>

### `Method CreateItem(consumerAppId:UInt, FileType:EWorkshopFileType)`

Creates a new workshop item with no content attached yet.

<br/>

### `Method CreateQueryAllUGCRequest:ULong(queryType:EUGCQuery, matchingeMatchingUGCTypeFileType:EUGCMatchingUGCType, creatorAppID:UInt, consumerAppID:UInt, page:UInt)`

Query for all matching UGC.

You can use this to list all of the available UGC for your app.

This will return up to 50 results per page. You can make subsequent calls to this method, increasing <b>page</b> each time to get the next set of results.

> NOTE: Either <b>consumerAppID</b> or <b>creatorAppID</b> must have a valid AppID!

> NOTE: You must release the handle returned by this function by calling [ReleaseQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-releasequeryugcrequestintqueryhandleulong) when you are done with it!

To query for the UGC associated with a single user you can use [CreateQueryUserUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryuserugcrequestulongaccountiduint-listtypeeuserugclist-matchingugctypeeugcmatchingugctype-sortordereuserugclistsortorder-creatorappiduint-consumerappiduint-pageuint) instead.


<br/>

### `Method CreateQueryUGCDetailsRequest:ULong(publishedFileIDs:ULong[])`

Query for the details of specific workshop items.

This will return up to 50 results per page.

> NOTE: Either <b>consumerAppID</b> or <b>creatorAppID</b> must have a valid AppID!

> NOTE: You must release the handle returned by this function by calling [ReleaseQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-releasequeryugcrequestintqueryhandleulong) when you are done with it!

To query all the UGC for your app you can use [CreateQueryAllUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryallugcrequestulongquerytypeeugcquery-matchingematchingugctypefiletypeeugcmatchingugctype-creatorappiduint-consumerappiduint-pageuint) instead.


<br/>

### `Method CreateQueryUGCDetailsRequest:ULong(publishedFileIDs:ULong Ptr, numPublishedFileIDs:Int)`

Query for the details of specific workshop items.

This will return up to 50 results per page.

> NOTE: Either <b>consumerAppID</b> or <b>creatorAppID</b> must have a valid AppID!

> NOTE: You must release the handle returned by this function by calling [ReleaseQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-releasequeryugcrequestintqueryhandleulong) when you are done with it!

To query all the UGC for your app you can use [CreateQueryAllUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryallugcrequestulongquerytypeeugcquery-matchingematchingugctypefiletypeeugcmatchingugctype-creatorappiduint-consumerappiduint-pageuint) instead.


<br/>

### `Method CreateQueryUserUGCRequest:ULong(accountID:UInt, listType:EUserUGCList, matchingUGCType:EUGCMatchingUGCType, sortOrder:EUserUGCListSortOrder, creatorAppID:UInt, consumerAppID:UInt, page:UInt)`

Query UGC associated with a user.

You can use this to list the UGC the user is subscribed to amongst other things.
This will return up to 50 results per page. You can make subsequent calls to this method, increasing <b>page</b> each time to get the next set of results.

> NOTE: Either <b>consumerAppID</b> or <b>creatorAppID</b> must have a valid AppID!

> NOTE: You must release the handle returned by this function by calling [ReleaseQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-releasequeryugcrequestintqueryhandleulong) when you are done with it!

To query all the UGC for your app you can use [CreateQueryAllUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryallugcrequestulongquerytypeeugcquery-matchingematchingugctypefiletypeeugcmatchingugctype-creatorappiduint-consumerappiduint-pageuint) instead.


<br/>

### `Method DeleteItem(publishedFileID:ULong)`

Deletes the item without prompting the user.

Results in a cal to [OnDeleteItem](../../../steam/steam.steamsdk/isteamugclistener/#method-ondeleteitemresulteresult-publishedfileidulong).


<br/>

### `Method DownloadItem:Int(publishedFileID:ULong, highPriority:Int)`

Downloads or updates a workshop item.

If the return value is [True](../../../brl/brl.blitz/#true) then wait for the callback to [OnDownloadItem](../../../steam/steam.steamsdk/isteamugclistener/#method-ondownloaditemresulteresult-appiduint-publishedfileidulong) before calling [GetItemInstallInfo](../../../steam/steam.steamsdk/tsteamugc/#method-getiteminstallinfointpublishedfileidulong-sizeondiskulong-var-folderstring-var-timestampuint-var) or accessing the workshop item on disk.

If the user is not subscribed to the item (e.g. a Game Server using anonymous login), the workshop item will be downloaded and cached temporarily.

If the workshop item has an item state of k_EItemStateNeedsUpdate, then this method can be called to initiate the update.
Do not access the workshop item on disk until the callback [OnDownloadItem](../../../steam/steam.steamsdk/isteamugclistener/#method-ondownloaditemresulteresult-appiduint-publishedfileidulong) is called.

The [OnDownloadItem](../../../steam/steam.steamsdk/isteamugclistener/#method-ondownloaditemresulteresult-appiduint-publishedfileidulong) callback contains the app ID associated with the workshop item. It should be compared against the running app ID as
the handler will be called for all item downloads regardless of the running application.


#### Returns
[True](../../../brl/brl.blitz/#true) if the download was successfully started, otherwise, [False](../../../brl/brl.blitz/#false) if <b>publishedFileID</b> is invalid or the user is not logged on.


<br/>

### `Method GetAppDependencies(publishedFileID:ULong)`

Gets the app dependencies associated with the given <b>publishedFileID</b>.

These are "soft" dependencies that are shown on the web. It is up to the application to determine whether an item can be used or not.

Results in a call to [OnGetAppDependencies](../../../steam/steam.steamsdk/isteamugclistener/#method-ongetappdependenciesresulteresult-publishedfileidulong-appiduint-ptr-numappdependenciesint-totalnumappdependenciesint).

See Also: [AddAppDependency](../../../steam/steam.steamsdk/tsteamugc/#method-addappdependencypublishedfileidulong-appiduint), [RemoveAppDependency](../../../steam/steam.steamsdk/tsteamugc/#method-removeappdependencypublishedfileidulong-appiduint)


<br/>

### `Method GetItemDownloadInfo:Int(publishedFileID:ULong, bytesDownloaded:ULong Var, bytesTotal:ULong Var)`

Gets info about a pending download of a workshop item that has k_EItemStateNeedsUpdate set.

#### Returns
[True](../../../brl/brl.blitz/#true) if the download information was available, otherwise, [False](../../../brl/brl.blitz/#false).


<br/>

### `Method GetItemInstallInfo:Int(publishedFileID:ULong, sizeOnDisk:ULong Var, folder:String Var, timestamp:UInt Var)`

Gets info about currently installed content on the disc for workshop items that have k_EItemStateInstalled set.

Calling this sets the "used" flag on the workshop item for the current player and adds it to their k_EUserUGCList_UsedOrPlayed list.

If k_EItemStateLegacyItem is set then <b>folder</b> contains the path to the legacy file itself, not a folder.


<br/>

### `Method GetItemState:EItemState(publishedFileID:ULong)`

Gets the current state of a workshop item on this client.

<br/>

### `Method GetItemUpdateProgress:EItemUpdateStatus(queryHandle:ULong, bytesProcessed:ULong Var, bytesTotal:ULong Var)`

Gets the progress of an item update.

See Also: [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring)


#### Returns
The current status.


<br/>

### `Method GetNumSubscribedItems:UInt()`

Gets the total number of items the current user is subscribed to for the game or application.

#### Returns
0 if called from a game server.


<br/>

### `Method GetQueryUGCAdditionalPreview:Int(queryHandle:ULong, index:UInt, previewIndex:UInt, URLOrVideoID:String Var, originalFileName:String Var, previewType:EItemPreviewType Var)`

Retrieves the details of an additional preview associated with an individual workshop item after receiving a querying UGC call result.

You should call this in a loop to get the details of all the workshop items returned.

> NOTE: This must only be called with the handle obtained from a successful [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint) call result.

Before calling this you should call [GetQueryUGCNumAdditionalPreviews](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcnumadditionalpreviewsuintqueryhandleulong-indexuint) to get number of additional previews.


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, indicates that <b>URLOrVideoID</b> and <b>previewType</b> have been filled out. Otherwise, [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid, the <b>index</b> is out of bounds, or <b>previewIndex</b> is out of bounds.


<br/>

### `Method GetQueryUGCChildren:Int(queryHandle:ULong, index:UInt, publishedFileIDs:ULong Ptr, maxEntries:UInt)`

Retrieves the ids of any child items of an individual workshop item after receiving a querying UGC call result.

These items can either be a part of a collection or some other dependency (see [AddDependency](../../../steam/steam.steamsdk/tsteamugc/#method-adddependencypublishedfileidulong-childpublishedfileidulong)).

You should call this in a loop to get the details of all the workshop items returned.

> NOTE: This must only be called with the handle obtained from a successful [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint) call result.

You should create <b>publishedFileIDs</b> with <b>numChildren</b> provided in OnSteamUGCDetails after getting the UGC details with GetQueryUGCResult.


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, indicates that <b>publishedFileIDs</b> has been filled out. Otherwise, [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid or the <b>index</b> is out of bounds.


<br/>

### `Method GetQueryUGCKeyValueTag:Int(queryHandle:ULong, index:UInt, keyValueTagIndex:UInt, key:String Var, value:String Var)`

Retrieves the details of a key-value tag associated with an individual workshop item after receiving a querying UGC call result.

You should call this in a loop to get the details of all the workshop items returned.

> NOTE: This must only be called with the handle obtained from a successful [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint) call result.

Before calling this you should call [GetQueryUGCNumKeyValueTags](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcnumkeyvaluetagsuintqueryhandleulong-indexuint) to get number of tags.


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, indicates that <b>key</b> and <b>value</b> have been filled out. Otherwise, [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid, the <b>index</b> is out of bounds, or <b>keyValueTagIndex</b> is out of bounds.


<br/>

### `Method GetQueryUGCMetadata:Int(queryHandle:ULong, index:UInt, metadata:String Var)`

Retrieves the developer set metadata of an individual workshop item after receiving a querying UGC call result.

You should call this in a loop to get the details of all the workshop items returned.

> NOTE: This must only be called with the handle obtained from a successful [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint) call result.

See Also: [SetItemMetadata](../../../steam/steam.steamsdk/tsteamugc/#method-setitemmetadataintupdatehandleulong-metadatastring)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, indicates that <b>metadata</b> has been filled out. Otherwise, false if the UGC query handle is invalid or the <b>index</b> is out of bounds.


<br/>

### `Method GetQueryUGCNumAdditionalPreviews:UInt(queryHandle:ULong, index:UInt)`

Retrieve the number of additional previews of an individual workshop item after receiving a querying UGC call result.

You should call this in a loop to get the details of all the workshop items returned.

> NOTE: This must only be called with the handle obtained from a successful [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint) call result.

You can then call [GetQueryUGCAdditionalPreview](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugcadditionalpreviewintqueryhandleulong-indexuint-previewindexuint-urlorvideoidstring-var-originalfilenamestring-var-previewtypeeitempreviewtype-var) to get the details of each additional preview.


#### Returns
The number of additional previews associated with the specified workshop item. Returns 0 if the UGC query handle is invalid or the <b>index</b> is out of bounds.


<br/>

### `Method GetQueryUGCNumKeyValueTags:UInt(queryHandle:ULong, index:UInt)`

Retrieves the number of key-value tags of an individual workshop item after receiving a querying UGC call result.

You should call this in a loop to get the details of all the workshop items returned.

> NOTE: This must only be called with the handle obtained from a successful [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint) call result.

You can then call [GetQueryUGCKeyValueTag](../../../steam/steam.steamsdk/tsteamugc/#method-getqueryugckeyvaluetagintqueryhandleulong-indexuint-keyvaluetagindexuint-keystring-var-valuestring-var) to get the details of each tag.


#### Returns
The number of key-value tags associated with the specified workshop item. Returns 0 if the UGC query handle is invalid or the <b>index</b> is out of bounds.


<br/>

### `Method GetQueryUGCPreviewURL:Int(queryHandle:ULong, index:UInt, URL:String Var)`

Retrieves the URL to the preview image of an individual workshop item after receiving a querying UGC call result.

You should call this in a loop to get the details of all the workshop items returned.

> NOTE: This must only be called with the handle obtained from a successful [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint) call result.

You can use this URL to download and display the preview image instead of having to download it using the <b>previewFile</b> from the SteamUGCDetails.


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, indicates that pchURL has been filled out. Otherwise, false if the UGC query handle is invalid or the <b>index</b> is out of bounds.


<br/>

### `Method GetQueryUGCStatistic:Int(queryHandle:ULong, index:UInt, statType:EItemStatistic, statValue:ULong Var)`

Retrieves various statistics of an individual workshop item after receiving a querying UGC call result.

You should call this in a loop to get the details of all the workshop items returned.

> NOTE: This must only be called with the handle obtained from a successful [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint) call result.


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, indicates that pStatValue has been filled out. Otherwise, [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid, the <b>index</b> is out of bounds, or <b>statType</b> was invalid.
 

<br/>

### `Method GetSubscribedItems:UInt(publishedFileIDs:ULong Ptr, maxEntries:UInt)`

Gets a list of all of the items the current user is subscribed to for the current game.

You create an array with the size provided by [GetNumSubscribedItems](../../../steam/steam.steamsdk/tsteamugc/#method-getnumsubscribeditemsuint) before calling this.


#### Returns
The number of subscribed workshop items that were populated into <b>publishedFileIDs</b>. Returns 0 if called from a game server.


<br/>

### `Method GetUserItemVote(publishedFileID:ULong)`

Gets the users vote status on a workshop item.

Results in a call to [OnGetUserItemVote](../../../steam/steam.steamsdk/isteamugclistener/#method-ongetuseritemvoteresulteresult-publishedfileidulong-votedupint-voteddownint-voteskippedint).

See Also: [SetUserItemVote](../../../steam/steam.steamsdk/tsteamugc/#method-setuseritemvotepublishedfileidulong-voteupint)


<br/>

### `Method ReleaseQueryUGCRequest:Int(queryHandle:ULong)`

Releases a UGC query handle when you are done with it to free up memory.

#### Returns
Always returns [True](../../../brl/brl.blitz/#true).


<br/>

### `Method RemoveAppDependency(publishedFileID:ULong, appID:UInt)`

Removes the dependency between the given item and the appid.

This list of dependencies can be retrieved by calling [GetAppDependencies](../../../steam/steam.steamsdk/tsteamugc/#method-getappdependenciespublishedfileidulong).

Results in a call to [OnRemoveAppDependency](../../../steam/steam.steamsdk/isteamugclistener/#method-onremoveappdependencyresulteresult-publishedfileidulong-appiduint).

See Also: [AddAppDependency](../../../steam/steam.steamsdk/tsteamugc/#method-addappdependencypublishedfileidulong-appiduint)


<br/>

### `Method RemoveDependency(parentPublishedFileID:ULong, childPublishedFileID:ULong)`

Removes a workshop item as a dependency from the specified item.

Results in a call to [OnRemoveUGCDependency](../../../steam/steam.steamsdk/isteamugclistener/#method-onremoveugcdependencyresulteresult-publishedfileidulong-childpublishedfileidulong).

See Also: [AddDependency](../../../steam/steam.steamsdk/tsteamugc/#method-adddependencypublishedfileidulong-childpublishedfileidulong)


<br/>

### `Method RemoveItemFromFavorites(appId:UInt, publishedFileID:ULong)`

Removes a workshop item from the users favorites list.

Results in a call to [OnUserFavoriteItemsListChanged](../../../steam/steam.steamsdk/isteamugclistener/#method-onuserfavoriteitemslistchangedresulteresult-publishedfileidulong-wasaddrequestint).

See Also: [AddItemToFavorites](../../../steam/steam.steamsdk/tsteamugc/#method-additemtofavoritesappiduint-publishedfileidulong)


<br/>

### `Method RemoveItemKeyValueTags:Int(queryHandle:ULong, key:String)`

Removes an existing key value tag from an item.

You can only call this up to 100 times per item update. If you need remove more tags than that you'll need to make subsequent item updates.

> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).

See Also: [AddItemKeyValueTag](../../../steam/steam.steamsdk/tsteamugc/#method-additemkeyvaluetagintqueryhandleulong-keystring-valuestring)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC update handle is invalid or if you are trying to remove more than 100 key-value tags in a single update.


<br/>

### `Method RemoveItemPreview:Int(queryHandle:ULong, index:UInt)`

Removes an item preview.

<br/>

### `Method SendQueryUGCRequest(queryHandle:ULong)`

Sends a UGC query to Steam.

This must be called with a handle obtained from [CreateQueryUserUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryuserugcrequestulongaccountiduint-listtypeeuserugclist-matchingugctypeeugcmatchingugctype-sortordereuserugclistsortorder-creatorappiduint-consumerappiduint-pageuint), [CreateQueryAllUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryallugcrequestulongquerytypeeugcquery-matchingematchingugctypefiletypeeugcmatchingugctype-creatorappiduint-consumerappiduint-pageuint), or [CreateQueryUGCDetailsRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryugcdetailsrequestulongpublishedfileidsulong) to actually send the request to Steam.
Before calling this you should use one or more of the following APIs to customize your query:
[AddRequiredTag](../../../steam/steam.steamsdk/tsteamugc/#method-addrequiredtagintqueryhandleulong-tagnamestring), [AddExcludedTag](../../../steam/steam.steamsdk/tsteamugc/#method-addexcludedtagintqueryhandleulong-tagnamestring), [SetReturnOnlyIDs](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnonlyidsintqueryhandleulong-returnonlyidsint), [SetReturnKeyValueTags](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnkeyvaluetagsintqueryhandleulong-returnkeyvaluetagsint), [SetReturnLongDescription](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnlongdescriptionintqueryhandleulong-returnlongdescriptionint), [SetReturnMetadata](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnmetadataintqueryhandleulong-returnmetadataint), [SetReturnChildren](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnchildrenintqueryhandleulong-returnchildrenint), [SetReturnAdditionalPreviews](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnadditionalpreviewsintqueryhandleulong-returnadditionalpreviewsint),
[SetReturnTotalOnly](../../../steam/steam.steamsdk/tsteamugc/#method-setreturntotalonlyintqueryhandleulong-returntotalonlyint), [SetLanguage](../../../steam/steam.steamsdk/tsteamugc/#method-setlanguageintqueryhandleulong-languagestring), [SetAllowCachedResponse](../../../steam/steam.steamsdk/tsteamugc/#method-setallowcachedresponseintqueryhandleulong-maxagesecondsuint), [SetCloudFileNameFilter](../../../steam/steam.steamsdk/tsteamugc/#method-setcloudfilenamefilterintqueryhandleulong-matchcloudfilenamestring), [SetMatchAnyTag](../../../steam/steam.steamsdk/tsteamugc/#method-setmatchanytagintqueryhandleulong-matchanytagint), [SetSearchText](../../../steam/steam.steamsdk/tsteamugc/#method-setsearchtextintqueryhandleulong-searchtextstring), [SetRankedByTrendDays](../../../steam/steam.steamsdk/tsteamugc/#method-setrankedbytrenddaysintqueryhandleulong-daysuint),
[AddRequiredKeyValueTag](../../../steam/steam.steamsdk/tsteamugc/#method-addrequiredkeyvaluetagintqueryhandleulong-keystring-valuestring)

Results in a call to [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint).


<br/>

### `Method SetAllowCachedResponse:Int(queryHandle:ULong, maxAgeSeconds:UInt)`

Sets whether results will be returned from the cache for the specific period of time on a pending UGC Query.



> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).



#### Returns
[True](../../../brl/brl.blitz/#true) upon success, [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid.


<br/>

### `Method SetCloudFileNameFilter:Int(queryHandle:ULong, matchCloudFileName:String)`

Sets to only return items that have a specific filename on a pending UGC Query.


> NOTE: This can only be used with [CreateQueryUserUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryuserugcrequestulongaccountiduint-listtypeeuserugclist-matchingugctypeeugcmatchingugctype-sortordereuserugclistsortorder-creatorappiduint-consumerappiduint-pageuint)!

> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid, if the UGC query handle is not from [CreateQueryUserUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryuserugcrequestulongaccountiduint-listtypeeuserugclist-matchingugctypeeugcmatchingugctype-sortordereuserugclistsortorder-creatorappiduint-consumerappiduint-pageuint) or if <b>matchCloudFileName</b> is not set.


<br/>

### `Method SetItemContent:Int(updateHandle:ULong, contentFolder:String)`

Sets the folder that will be stored as the content for an item.

For efficient upload and download, files should not be merged or compressed into single files (e.g. zip files).

> NOTE: This must be set before you submit the UGC update handle using SubmitItemUpdate.


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, [False](../../../brl/brl.blitz/#false) if the UGC update handle is invalid.


<br/>

### `Method SetItemDescription:Int(updateHandle:ULong, description:String)`

Sets a new description for an item.

The description must be limited to the length defined by [k_cchPublishedDocumentDescriptionMax](../../../steam/steam.steamsdk/#const-kcchpublisheddocumentdescriptionmaxuint-8000).

You can set what language this is for by using [SetItemUpdateLanguage](../../../steam/steam.steamsdk/tsteamugc/#method-setitemupdatelanguageintupdatehandleulong-languagestring), if no language is set then "english" is assumed.

> NOTE: This must be set before you submit the UGC update handle using SubmitItemUpdate.

See Also: [SetReturnLongDescription](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnlongdescriptionintqueryhandleulong-returnlongdescriptionint)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC update handle is invalid.


<br/>

### `Method SetItemMetadata:Int(updateHandle:ULong, metaData:String)`

Sets arbitrary metadata for an item.

This metadata can be returned from queries without having to download and install the actual content.

The metadata must be limited to the size defined by [k_cchDeveloperMetadataMax](../../../steam/steam.steamsdk/#const-kcchdevelopermetadatamaxuint-5000).

> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).

See Also: [SetReturnMetadata](../../../steam/steam.steamsdk/tsteamugc/#method-setreturnmetadataintqueryhandleulong-returnmetadataint)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC update handle is invalid, or if <b>metadata</b> is longer than [k_cchDeveloperMetadataMax](../../../steam/steam.steamsdk/#const-kcchdevelopermetadatamaxuint-5000).


<br/>

### `Method SetItemPreview:Int(updateHandle:ULong, previewFile:String)`

Sets the primary preview image for the item.

The format should be one that both the web and the application (if necessary) can render. Suggested formats include JPG, PNG and GIF.

> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC update handle is invalid.


<br/>

### `Method SetItemTags:Int(updateHandle:ULong, tags:String[])`

Sets arbitrary developer specified tags on an item.

Each tag must be limited to 255 characters. Tag names can only include printable characters, excluding ','. For reference on what characters are allowed, refer to http://en.cppreference.com/w/c/string/byte/isprint

> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC update handle is invalid, or if one of the tags is invalid either due to exceeding the maximum length or because it is empty.


<br/>

### `Method SetItemTitle:Int(updateHandle:ULong, title:String)`

Sets a new title for an item.

The title must be limited to the size defined by [k_cchPublishedDocumentTitleMax](../../../steam/steam.steamsdk/#const-kcchpublisheddocumenttitlemaxuint-128-1).

You can set what language this is for by using [SetItemUpdateLanguage](../../../steam/steam.steamsdk/tsteamugc/#method-setitemupdatelanguageintupdatehandleulong-languagestring), if no language is set then "english" is assumed.

> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC update handle is invalid.


<br/>

### `Method SetItemUpdateLanguage:Int(updateHandle:ULong, language:String)`

Sets the language of the title and description that will be set in this item update.

This must be in the format of the API language code.

If this is not set then "english" is assumed.

> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).

See Also: [SetItemTitle](../../../steam/steam.steamsdk/tsteamugc/#method-setitemtitleintupdatehandleulong-titlestring), [SetItemDescription](../../../steam/steam.steamsdk/tsteamugc/#method-setitemdescriptionintupdatehandleulong-descriptionstring), [SetLanguage](../../../steam/steam.steamsdk/tsteamugc/#method-setlanguageintqueryhandleulong-languagestring)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC update handle is invalid.


<br/>

### `Method SetItemVisibility:Int(updateHandle:ULong, visibility:ERemoteStoragePublishedFileVisibility)`

Sets the visibility of an item.


> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC update handle is invalid.
 

<br/>

### `Method SetLanguage:Int(queryHandle:ULong, language:String)`

Sets the language to return the title and description in for the items on a pending UGC Query.

This must be in the format of the API Language code.

If this is not set then "english" is assumed.

> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).

See Also: [SetItemUpdateLanguage](../../../steam/steam.steamsdk/tsteamugc/#method-setitemupdatelanguageintupdatehandleulong-languagestring)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid.


<br/>

### `Method SetMatchAnyTag:Int(queryHandle:ULong, matchAnyTag:Int)`

Sets whether workshop items will be returned if they have one or more matching tag, or if all tags need to match on a pending UGC Query.


> NOTE: This can only be used with [CreateQueryAllUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryallugcrequestulongquerytypeeugcquery-matchingematchingugctypefiletypeeugcmatchingugctype-creatorappiduint-consumerappiduint-pageuint)!

> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).

See Also: [AddRequiredTag](../../../steam/steam.steamsdk/tsteamugc/#method-addrequiredtagintqueryhandleulong-tagnamestring), [AddExcludedTag](../../../steam/steam.steamsdk/tsteamugc/#method-addexcludedtagintqueryhandleulong-tagnamestring), [SetItemTags](../../../steam/steam.steamsdk/tsteamugc/#method-setitemtagsintupdatehandleulong-tagsstring)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid or if the UGC query handle is not from [CreateQueryAllUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryallugcrequestulongquerytypeeugcquery-matchingematchingugctypefiletypeeugcmatchingugctype-creatorappiduint-consumerappiduint-pageuint).


<br/>

### `Method SetRankedByTrendDays:Int(queryHandle:ULong, days:UInt)`

Sets whether the order of the results will be updated based on the rank of items over a number of days on a pending UGC Query.


> NOTE: This can only be used with [CreateQueryAllUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryallugcrequestulongquerytypeeugcquery-matchingematchingugctypefiletypeeugcmatchingugctype-creatorappiduint-consumerappiduint-pageuint)!

> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid, if the UGC query handle is not from [CreateQueryAllUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryallugcrequestulongquerytypeeugcquery-matchingematchingugctypefiletypeeugcmatchingugctype-creatorappiduint-consumerappiduint-pageuint) or if the [EUGCQuery](../../../steam/steam.steamsdk/eugcquery) of the query is not one of k_PublishedFileQueryType_RankedByTrend, k_PublishedFileQueryType_RankedByPlaytimeTrend, k_PublishedFileQueryType_RankedByAveragePlaytimeTrend, k_PublishedFileQueryType_RankedByVotesUp, or k_PublishedFileQueryType_RankedByPlaytimeSessionsTrend.


<br/>

### `Method SetReturnAdditionalPreviews:Int(queryHandle:ULong, returnAdditionalPreviews:Int)`

Sets whether to return any additional images/videos attached to the items on a pending UGC Query.


> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid.


<br/>

### `Method SetReturnChildren:Int(queryHandle:ULong, returnChildren:Int)`

Sets whether to return the IDs of the child items of the items on a pending UGC Query.


> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid.


<br/>

### `Method SetReturnKeyValueTags:Int(queryHandle:ULong, returnKeyValueTags:Int)`

Sets whether to return any key-value tags for the items on a pending UGC Query.


> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid.


<br/>

### `Method SetReturnLongDescription:Int(queryHandle:ULong, returnLongDescription:Int)`

Sets whether to return the full description for the items on a pending UGC Query.

If you don't set this then you only receive the summary which is the description truncated at 255 bytes.

> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).

See Also: [SetItemDescription](../../../steam/steam.steamsdk/tsteamugc/#method-setitemdescriptionintupdatehandleulong-descriptionstring)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid.


<br/>

### `Method SetReturnMetadata:Int(queryHandle:ULong, returnMetadata:Int)`

Sets whether to return the developer specified metadata for the items on a pending UGC Query.


> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).

See Also: [SetItemMetadata](../../../steam/steam.steamsdk/tsteamugc/#method-setitemmetadataintupdatehandleulong-metadatastring)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid.


<br/>

### `Method SetReturnOnlyIDs:Int(queryHandle:ULong, returnOnlyIDs:Int)`

Sets whether to only return IDs instead of all the details on a pending UGC Query.


This is useful for when you don't need all the information (e.g. you just want to get the IDs of the items a user has in their favorites list.)

> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid or if the UGC query handle is from [CreateQueryUGCDetailsRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryugcdetailsrequestulongpublishedfileidsulong).
 

<br/>

### `Method SetReturnPlaytimeStats:Int(queryHandle:ULong, days:UInt)`

Sets whether to return the the playtime stats on a pending UGC Query.


> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid.


<br/>

### `Method SetReturnTotalOnly:Int(queryHandle:ULong, returnTotalOnly:Int)`

Sets whether to only return the the total number of matching items on a pending UGC Query.

The actual items will not be returned when [OnSteamUGCQueryCompleted](../../../steam/steam.steamsdk/isteamugclistener/#method-onsteamugcquerycompletedresulteresult-queryhandleulong-numresultsreturneduint-totalmatchingresultsuint) is called.

> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid or if the UGC query handle is from [CreateQueryUGCDetailsRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryugcdetailsrequestulongpublishedfileidsulong).


<br/>

### `Method SetSearchText:Int(queryHandle:ULong, searchText:String)`

Sets a string to that items need to match in either the title or the description on a pending UGC Query.


> NOTE: This can only be used with [CreateQueryAllUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryallugcrequestulongquerytypeeugcquery-matchingematchingugctypefiletypeeugcmatchingugctype-creatorappiduint-consumerappiduint-pageuint)!

> NOTE: This must be set before you send a UGC Query handle using [SendQueryUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-sendqueryugcrequestqueryhandleulong).


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, [False](../../../brl/brl.blitz/#false) if the UGC query handle is invalid, if the UGC query handle is not from [CreateQueryAllUGCRequest](../../../steam/steam.steamsdk/tsteamugc/#method-createqueryallugcrequestulongquerytypeeugcquery-matchingematchingugctypefiletypeeugcmatchingugctype-creatorappiduint-consumerappiduint-pageuint) or if <b>searchText</b> is empty.


<br/>

### `Method SetUserItemVote(publishedFileID:ULong, voteUp:Int)`

Allows the user to rate a workshop item up or down.

Results in a call to [OnSetUserItemVote](../../../steam/steam.steamsdk/isteamugclistener/#method-onsetuseritemvoteresulteresult-publishedfileidulong-voteupint).

See Also: [GetUserItemVote](../../../steam/steam.steamsdk/tsteamugc/#method-getuseritemvotepublishedfileidulong)


<br/>

### `Method StartItemUpdate:ULong(consumerAppId:UInt, publishedFileID:ULong)`

Starts the item update process.

This gets you a handle that you can use to modify the item before finally sending off the update to the server with [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).

See Also: Uploading a Workshop Item, [SetItemTitle](../../../steam/steam.steamsdk/tsteamugc/#method-setitemtitleintupdatehandleulong-titlestring), [SetItemDescription](../../../steam/steam.steamsdk/tsteamugc/#method-setitemdescriptionintupdatehandleulong-descriptionstring), [SetItemUpdateLanguage](../../../steam/steam.steamsdk/tsteamugc/#method-setitemupdatelanguageintupdatehandleulong-languagestring), [SetItemMetadata](../../../steam/steam.steamsdk/tsteamugc/#method-setitemmetadataintupdatehandleulong-metadatastring), [SetItemVisibility](../../../steam/steam.steamsdk/tsteamugc/#method-setitemvisibilityintupdatehandleulong-visibilityeremotestoragepublishedfilevisibility), [SetItemTags](../../../steam/steam.steamsdk/tsteamugc/#method-setitemtagsintupdatehandleulong-tagsstring), [SetItemContent](../../../steam/steam.steamsdk/tsteamugc/#method-setitemcontentintupdatehandleulong-contentfolderstring), [SetItemPreview](../../../steam/steam.steamsdk/tsteamugc/#method-setitempreviewintupdatehandleulong-previewfilestring), [RemoveItemKeyValueTags](../../../steam/steam.steamsdk/tsteamugc/#method-removeitemkeyvaluetagsintqueryhandleulong-keystring), [AddItemKeyValueTag](../../../steam/steam.steamsdk/tsteamugc/#method-additemkeyvaluetagintqueryhandleulong-keystring-valuestring), [AddItemPreviewFile](../../../steam/steam.steamsdk/tsteamugc/#method-additempreviewfileintqueryhandleulong-previewfilestring-previewtypeeitempreviewtype), [AddItemPreviewVideo](../../../steam/steam.steamsdk/tsteamugc/#method-additempreviewvideointqueryhandleulong-videoidstring), [UpdateItemPreviewFile](../../../steam/steam.steamsdk/tsteamugc/#method-updateitempreviewfileintupdatehandleulong-indexuint-previewfilestring), [UpdateItemPreviewVideo](../../../steam/steam.steamsdk/tsteamugc/#method-updateitempreviewvideointupdatehandleulong-indexuint-videoidstring), [RemoveItemPreview](../../../steam/steam.steamsdk/tsteamugc/#method-removeitempreviewintqueryhandleulong-indexuint)


#### Returns
A handle that you can use with future calls to modify the item before finally sending the update.


<br/>

### `Method StartPlaytimeTracking(publishedFileIDs:ULong Ptr, numPublishedFileIDs:UInt)`

Starts tracking playtime on a set of workshop items.

When your app shuts down, playtime tracking will automatically stop.

Results in a call to [OnStartPlaytimeTracking](../../../steam/steam.steamsdk/isteamugclistener/#method-onstartplaytimetrackingresulteresult)

See Also: [StopPlaytimeTracking](../../../steam/steam.steamsdk/tsteamugc/#method-stopplaytimetrackingpublishedfileidsulong-ptr-numpublishedfileidsuint), [StopPlaytimeTrackingForAllItems](../../../steam/steam.steamsdk/tsteamugc/#method-stopplaytimetrackingforallitems)


<br/>

### `Method StopPlaytimeTracking(publishedFileIDs:ULong Ptr, numPublishedFileIDs:UInt)`

Stops tracking playtime on a set of workshop items.

When your app shuts down, playtime tracking will automatically stop.

Results in a call to [OnStopPlaytimeTracking](../../../steam/steam.steamsdk/isteamugclistener/#method-onstopplaytimetrackingresulteresult)


<br/>

### `Method StopPlaytimeTrackingForAllItems()`

Stops tracking playtime of all workshop items.

When your app shuts down, playtime tracking will automatically stop.

Results in a call to [OnStopPlaytimeTracking](../../../steam/steam.steamsdk/isteamugclistener/#method-onstopplaytimetrackingresulteresult)


<br/>

### `Method SubmitItemUpdate(updateHandle:ULong, changeNote:String)`

Uploads the changes made to an item to the Steam Workshop.

You can track the progress of an item update with [GetItemUpdateProgress](../../../steam/steam.steamsdk/tsteamugc/#method-getitemupdateprogresseitemupdatestatusqueryhandleulong-bytesprocessedulong-var-bytestotalulong-var).

Results in a call to [OnSubmitItemUpdate](../../../steam/steam.steamsdk/isteamugclistener/#method-onsubmititemupdateresulteresult-userneedstoacceptworkshoplegalagreementint)


<br/>

### `Method SubscribeItem(publishedFileID:ULong)`

Subscribe to a workshop item. It will be downloaded and installed as soon as possible.

Results in a call to [OnRemoteStorageSubscribePublishedFile](../../../steam/steam.steamsdk/isteamugclistener/#method-onremotestoragesubscribepublishedfileresulteresult-publishedfileidulong)

See Also: [SubscribeItem](../../../steam/steam.steamsdk/tsteamugc/#method-subscribeitempublishedfileidulong)


<br/>

### `Method SuspendDownloads(suspend:Int)`

Suspends and resumes all workshop downloads.

If you call this with <b>suspend</b> set to [True](../../../brl/brl.blitz/#true) then downloads will be suspended until you resume them by setting <b>suspend</b> to [False](../../../brl/brl.blitz/#false) or when the game ends.


<br/>

### `Method UnsubscribeItem(publishedFileID:ULong)`

Unsubscribes from a workshop item.

This will result in the item being removed after the game quits.

Results in a call to [OnRemoteStorageUnsubscribePublishedFile](../../../steam/steam.steamsdk/isteamugclistener/#method-onremotestorageunsubscribepublishedfileresulteresult-publishedfileidulong)

See Also: [UnsubscribeItem](../../../steam/steam.steamsdk/tsteamugc/#method-unsubscribeitempublishedfileidulong)


<br/>

### `Method UpdateItemPreviewFile:Int(updateHandle:ULong, index:UInt, previewFile:String)`

Updates an existing additional preview file for the item.

If the preview type is an image then the format should be one that both the web and the application (if necessary) can render, and must be under 1MB.
Suggested formats include JPG, PNG and GIF.

> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).

See Also: [AddItemPreviewFile](../../../steam/steam.steamsdk/tsteamugc/#method-additempreviewfileintqueryhandleulong-previewfilestring-previewtypeeitempreviewtype)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC update handle is invalid.


<br/>

### `Method UpdateItemPreviewVideo:Int(updateHandle:ULong, index:UInt, videoID:String)`

Updates an additional video preview from YouTube for the item.


> NOTE: This must be set before you submit the UGC update handle using [SubmitItemUpdate](../../../steam/steam.steamsdk/tsteamugc/#method-submititemupdateupdatehandleulong-changenotestring).

See Also: [AddItemPreviewVideo](../../../steam/steam.steamsdk/tsteamugc/#method-additempreviewvideointqueryhandleulong-videoidstring)


#### Returns
[True](../../../brl/brl.blitz/#true) upon success, otherwise [False](../../../brl/brl.blitz/#false) if the UGC update handle is invalid.


<br/>

