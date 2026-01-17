---
id: sdl.sdlsystem
title: SDL.SDLSystem
sidebar_label: Introduction
---


## Types
| Type | Description |
|---|---|
| [TSDLMultiGesture](../../sdl/sdl.sdlsystem/tsdlmultigesture) | Information about multiple finger gestures. |

## Functions

### `Function SDLStartTextInput()`

Start accepting Unicode text input events.

This function will start accepting Unicode text input events in the focused SDL window,
and start emitting SDLTextInputEvent (SDL_TEXTINPUT) and SDLTextEditingEvent (SDL_TEXTEDITING) events.

Please use this function in pair with [SDLStopTextInput](../../sdl/sdl.sdlsystem/#function-sdlstoptextinput)().

On some platforms using this function activates the screen keyboard.


<br/>

### `Function SDLStopTextInput()`

Stop receiving any text input events.

<br/>

### `Function SDLIsTextInputShown:Int()`

Returns if an IME Composite or Candidate window is currently shown.

<br/>

### `Function SDLIsTextInputActive:Int()`

Checks whether or not Unicode text input events are enabled.

#### Returns
[True](../../brl/brl.blitz/#true) if text input events are enabled else [False](../../brl/brl.blitz/#false).


<br/>

### `Function SDLClearComposition()`

Dismisses the composition window/IME without disabling the subsystem.

<br/>

### `Function SDLHasScreenKeyboardSupport:Int()`

Checks whether the platform has screen keyboard support.

#### Returns
[True](../../brl/brl.blitz/#true) if the platform has some screen keyboard support or [False](../../brl/brl.blitz/#false) if not.


<br/>

