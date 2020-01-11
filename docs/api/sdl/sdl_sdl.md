---
id: sdl.sdl
title: SDL.SDL
sidebar_label: SDL.SDL
---


Simple DirectMedia Layer is a cross-platform development library designed to provide low level access to audio,
keyboard, mouse, joystick, and graphics hardware via OpenGL and Direct3D.

SDL is a wrapper around operating-system-specific functions that a game needs to access.

It provides a common framework for accessing these functions for multiple operating systems (cross-platform).  SDL provides support for 2D pixel operations,
sound, file access, event handling, timing and threading. It is often used to complement OpenGL by setting up the graphical output an
providing mouse and keyboard input, since OpenGL comprises only rendering.



## Types
| Type | Description |
|---|---|
| [TSDLStream](../../sdl/sdl.sdl/tsdlstream) | An SDL-based data stream type. |

## Functions

### `Function OpenSDLStream:TSDLStream( file:String, readable:Int, writeMode:Int )`

Opens an SDL stream for reading/writing.

#### Returns
A stream object.


<br/>

### `Function SDLGetBasePath:String()`

Get the directory where the application was run from.

This is where the application data directory is.
This is not necessarily a fast call, though, so you should call this once near startup and save the string if you need it.<br/>
Mac OS X and iOS Specific Functionality: If the application is in a ".app" bundle, this function returns the Resource directory
(e.g. MyApp.app/Contents/Resources/). This behaviour can be overridden by adding a property to the Info.plist file. Adding a string key with
the name SDL_FILESYSTEM_BASE_DIR_TYPE with a supported value will change the behaviour.


<br/>

### `Function SDLGetPrefPath:String(org:String, app:String)`

Returns the preferences dir.

This is meant to be where the application can write personal files (Preferences and save games, etc.) that are specific to the application.
This directory is unique per user and per application. The path will be Null if there is a problem (creating directory failed, etc.)<br/>
The return path will be guaranteed to end with a path separator ('\' on Windows, '/' on most other platforms).
You should assume the path returned by this function is the only safe place to write files (and that GetBasePath(), while it might be writable, or even
the parent of the returned path, aren't where you should be writing things).<br/>
Both the org and app strings may become part of a directory name, so please follow these rules:<br/>
* Try to use the same org string (including case-sensitivity) for all your applications that use this function.<br/>
* Always use a unique app string for each one, and make sure it never changes for an app once you've decided on it.<br/>
* Only use letters, numbers, and spaces. Avoid punctuation like "Game Name 2: Bad Guy's Revenge!" ... "Game Name 2" is sufficient.


<br/>

### `Function SDLAndroidGetExternalStoragePath:String()`

Gets the path used for external storage for this application.

This path is unique to your application, but is public and can be written to by other applications.
Your external storage path is typically: /storage/sdcard0/Android/data/your.app.package/files.


#### Returns
The path used for external storage for this application on success or NULL on failure; call [SDLGetError](../../sdl/sdl.sdl/#function-sdlgeterrorstring)() for more information.


<br/>

### `Function SDLAndroidGetExternalStorageState:Int()`

Gets the current state of external storage.

The current state of external storage, a bitmask of these values: SDL_ANDROID_EXTERNAL_STORAGE_READ, SDL_ANDROID_EXTERNAL_STORAGE_WRITE.
If external storage is currently unavailable, this will return 0.


<br/>

### `Function SDLAndroidGetInternalStoragePath:String()`

Gets the path used for internal storage for this application.

This path is unique to your application and cannot be written to by other applications.
Your internal storage path is typically: /data/data/your.app.package/files.


#### Returns
The path used for internal storage or NULL on failure; call [SDLGetError](../../sdl/sdl.sdl/#function-sdlgeterrorstring)() for more information.


<br/>

### `Function SDLHasClipboardText:Int()`

Return a flag indicating whether the clipboard exists and contains a text string that is non-empty.

<br/>

### `Function SDLGetClipboardText:String()`

Returns the clipboard text.

<br/>

### `Function SDLSetClipboardText:Int(Text:String)`

Puts text into the clipboard.

#### Returns
0 on success or a negative error code on failure.


<br/>

### `Function SDLLogAppInfo(Text:String)`

Logs a message with [SDL_LOG_CATEGORY_APPLICATION](../../sdl/sdl.sdl/#const-sdllogcategoryapplicationint-0) and [SDL_LOG_PRIORITY_INFO](../../sdl/sdl.sdl/#const-sdllogpriorityinfoint-3).

<br/>

### `Function SDLLogDebug(category:Int, Text:String)`

Logs a message with [SDL_LOG_PRIORITY_DEBUG](../../sdl/sdl.sdl/#const-sdllogprioritydebugint-2).

<br/>

### `Function SDLLogError(category:Int, Text:String)`

Logs a message with [SDL_LOG_PRIORITY_ERROR](../../sdl/sdl.sdl/#const-sdllogpriorityerrorint-5).

<br/>

### `Function SDLLogCritical(category:Int, Text:String)`

Logs a message with [SDL_LOG_PRIORITY_CRITICAL](../../sdl/sdl.sdl/#const-sdllogprioritycriticalint-6).

<br/>

### `Function SDLLogInfo(category:Int, Text:String)`

Logs a message with [SDL_LOG_PRIORITY_INFO](../../sdl/sdl.sdl/#const-sdllogpriorityinfoint-3).

<br/>

### `Function SDLLogVerbose(category:Int, Text:String)`

Logs a message with [SDL_LOG_PRIORITY_VERBOSE](../../sdl/sdl.sdl/#const-sdllogpriorityverboseint-1).

<br/>

### `Function SDLLogWarn(category:Int, Text:String)`

Logs a message with [SDL_LOG_PRIORITY_WARN](../../sdl/sdl.sdl/#const-sdllogprioritywarnint-4).

<br/>

### `Function SDLLogSetAllPriority(priority:Int)`

Sets the priority of all log categories.

If you are debugging SDL, you might want to call this with [SDL_LOG_PRIORITY_WARN](../../sdl/sdl.sdl/#const-sdllogprioritywarnint-4).


<br/>

### `Function SDLGetPowerInfo:Int(seconds:Int Var, percent:Int Var)`

Gets the current power supply details.

You should never take a battery status as absolute truth. Batteries (especially failing batteries) are delicate hardware,
and the values reported here are best estimates based on what that hardware reports. It's not uncommon for older batteries to lose
stored power much faster than it reports, or completely drain when reporting it has 20 percent left, etc.
Battery status can change at any time; if you are concerned with power state, you should call this function frequently,
and perhaps ignore changes until they seem to be stable for a few seconds.


#### Returns
One of [SDL_POWERSTATE_UNKNOWN](../../sdl/sdl.sdl/#const-sdlpowerstateunknownint-0), [SDL_POWERSTATE_ON_BATTERY](../../sdl/sdl.sdl/#const-sdlpowerstateonbatteryint-1), [SDL_POWERSTATE_NO_BATTERY](../../sdl/sdl.sdl/#const-sdlpowerstatenobatteryint-2), [SDL_POWERSTATE_CHARGING](../../sdl/sdl.sdl/#const-sdlpowerstatechargingint-3), or [SDL_POWERSTATE_CHARGED](../../sdl/sdl.sdl/#const-sdlpowerstatechargedint-4).


<br/>

### `Function SDLGetPixelFormatName:String(format:UInt)`

Gets the human readable name of a pixel format

<br/>

### `Function SDLGetTicks:UInt()`

Gets the number of milliseconds since the SDL library initialization.

This value wraps if the program runs for more than 49 days.


#### Returns
A value representing the number of milliseconds since the SDL library initialized.


<br/>

### `Function SDLGetError:String()`

Retrieves a message about the last error that occurred.

#### Returns
A message with information about the specific error that occurred, or an empty string if there hasn't been an error message set since the last call to [SDLClearError](../../sdl/sdl.sdl/#function-sdlclearerror)(). The message is only applicable when an SDL function has signaled an error. You must check the return values of SDL function calls to determine when to appropriately call [SDLGetError](../../sdl/sdl.sdl/#function-sdlgeterrorstring)().


<br/>

### `Function SDLClearError()`

Clears any previous error message.

<br/>

### `Function SDLAudioInit:Int(name:String)`

(re)Initialises the audio subsystem.

<br/>

## Consts

### `Const SDL_APP_TERMINATING:Int         = $101`

The application is being terminated by the OS.

Called on iOS in applicationWillTerminate().
Called on Android in onDestroy()


<br/>

### `Const SDL_APP_LOWMEMORY:Int           = $102`

The application is low on memory, free memory if possible.

Called on iOS in applicationDidReceiveMemoryWarning().
Called on Android in onLowMemory()


<br/>

### `Const SDL_APP_WILLENTERBACKGROUND:Int = $103`

The application is about to enter the background.

Called on iOS in applicationWillResignActive().
Called on Android in onPause()


<br/>

### `Const SDL_APP_DIDENTERBACKGROUND:Int  = $104`

The application did enter the background and may not get CPU for some time.

Called on iOS in applicationDidEnterBackground().
Called on Android in onPause()


<br/>

### `Const SDL_APP_WILLENTERFOREGROUND:Int = $105`

The application is about to enter the foreground.

Called on iOS in applicationWillEnterForeground().
Called on Android in onResume()


<br/>

### `Const SDL_APP_DIDENTERFOREGROUND:Int  = $106`

The application is now interactive.

Called on iOS in applicationDidBecomeActive().
Called on Android in onResume()


<br/>

### `Const SDL_LOG_CATEGORY_APPLICATION:Int = 0`

Application log category.

Has a default log priority of SDL_LOG_PRIORITY_INFO.


<br/>

### `Const SDL_LOG_CATEGORY_ERROR:Int = 1`

Error log category.

Has a default log priority of SDL_LOG_PRIORITY_CRITICAL.


<br/>

### `Const SDL_LOG_CATEGORY_ASSERT:Int = 2`

Assertion log category.

Has a default log priority of SDL_LOG_PRIORITY_WARN.


<br/>

### `Const SDL_LOG_CATEGORY_SYSTEM:Int = 3`

System log category.

Has a default log priority of SDL_LOG_PRIORITY_CRITICAL.


<br/>

### `Const SDL_LOG_CATEGORY_AUDIO:Int = 4`

Audio log category.

Has a default log priority of SDL_LOG_PRIORITY_CRITICAL.


<br/>

### `Const SDL_LOG_CATEGORY_VIDEO:Int = 5`

Video log category.

Has a default log priority of SDL_LOG_PRIORITY_CRITICAL.


<br/>

### `Const SDL_LOG_CATEGORY_RENDER:Int = 6`

Render log category.

Has a default log priority of SDL_LOG_PRIORITY_CRITICAL.


<br/>

### `Const SDL_LOG_CATEGORY_INPUT:Int = 7`

Input log category.

Has a default log priority of SDL_LOG_PRIORITY_CRITICAL.


<br/>

### `Const SDL_LOG_CATEGORY_TEST:Int = 8`

Test log category.

Has a default log priority of SDL_LOG_PRIORITY_VERBOSE.


<br/>

### `Const SDL_LOG_CATEGORY_CUSTOM:Int = 19`

Application defined starting category.

An application can use subsequent category numbers as required, e.g. SDL_LOG_CATEGORY_CUSTOM + 1, etc.


<br/>

### `Const SDL_LOG_PRIORITY_VERBOSE:Int = 1`

Verbose log priority.

<br/>

### `Const SDL_LOG_PRIORITY_DEBUG:Int = 2`

Debug log priority.

<br/>

### `Const SDL_LOG_PRIORITY_INFO:Int = 3`

Info log priority.

<br/>

### `Const SDL_LOG_PRIORITY_WARN:Int = 4`

Warn log priority.

<br/>

### `Const SDL_LOG_PRIORITY_ERROR:Int = 5`

Error log priority.

<br/>

### `Const SDL_LOG_PRIORITY_CRITICAL:Int = 6`

Critical log priority.

<br/>

### `Const SDL_POWERSTATE_UNKNOWN:Int = 0`

Cannot determine power status

<br/>

### `Const SDL_POWERSTATE_ON_BATTERY:Int = 1`

Not plugged in, running on the battery

<br/>

### `Const SDL_POWERSTATE_NO_BATTERY:Int = 2`

Plugged in, no battery available

<br/>

### `Const SDL_POWERSTATE_CHARGING:Int = 3`

Plugged in, charging battery

<br/>

### `Const SDL_POWERSTATE_CHARGED:Int = 4`

Plugged in, battery charged

<br/>

