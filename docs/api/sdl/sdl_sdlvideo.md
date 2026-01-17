---
id: sdl.sdlvideo
title: SDL.SDLVideo
sidebar_label: Introduction
---


## Types
| Type | Description |
|---|---|
| [TICCProfile](../../sdl/sdl.sdlvideo/ticcprofile) | ICCProfile Data |
| [TSDLWindow](../../sdl/sdl.sdlvideo/tsdlwindow) | An SDL Window. |
| [TSDLGLContext](../../sdl/sdl.sdlvideo/tsdlglcontext) | An Open GL context. |
| [TSDLDisplay](../../sdl/sdl.sdlvideo/tsdldisplay) | Represents an indexed video display. |

## Structs
| Struct | Description |
|---|---|
| [SDLDisplayMode](../../sdl/sdl.sdlvideo/sdldisplaymode) | A structure that contains the description of a display mode. |

## Enums
| Enum | Description |
|---|---|
| [ESDLFlashOperation](../../sdl/sdl.sdlvideo/esdlflashoperation) | Window flash operation |

## Functions

### `Function SDLGetVideoDrivers:String[]()`

Returns the list of built-in video drivers.

The video drivers are presented in the order in which they are normally checked during initialization.


<br/>

### `Function SDLVideoInit:Int(driver:String)`

Initializes the video subsystem, optionally specifying a video driver.

Initializes the video subsystem; setting up a connection to the window manager,
etc, and determines the available display modes and pixel formats, but does not initialize a window or graphics mode.


<br/>

### `Function SDLVideoQuit()`

Shuts down the video subsystem.

Closes all windows, and restores the original video mode.


<br/>

### `Function SDLGetCurrentVideoDriver:String()`

Gets the name of the currently initialized video driver.

#### Returns
The name of the current video driver or NULL if no driver has been initialized.


<br/>

### `Function SDLGetNumVideoDisplays:Int()`

Gets the number of available video displays.

#### Returns
A number >= 1 or a negative error code on failure. Call [SDLGetError](../../sdl/sdl.sdl/#function-sdlgeterrorstring)() for more information.


<br/>

### `Function SDLGetGrabbedWindow:TSDLWindow()`

Gets the window that currently has an input grab enabled.

#### Returns
The window if input is grabbed, and Null otherwise.


<br/>

### `Function SDLIsScreenSaverEnabled:Int()`

Returns whether the screensaver is currently enabled (Default off).

The screensaver is disabled by default since SDL 2.0.2. Before SDL 2.0.2 the screensaver was enabled by default.


<br/>

### `Function SDLEnableScreenSaver()`

Allows the screen to be blanked by a screensaver.

<br/>

### `Function SDLDisableScreenSaver()`

Prevents the screen from being blanked by a screensaver.

If you disable the screensaver, it is automatically re-enabled when SDL quits.


<br/>

## Consts

### `Const SDL_WINDOW_FULLSCREEN:ULong = $00000001:ULong Shl 32`

fullscreen window

<br/>

### `Const SDL_WINDOW_OPENGL:ULong = $00000002:ULong Shl 32`

window usable with OpenGL context

<br/>

### `Const SDL_WINDOW_SHOWN:ULong = $00000004:ULong Shl 32`

window is visible

<br/>

### `Const SDL_WINDOW_HIDDEN:ULong = $00000008:ULong Shl 32`

window is not visible

<br/>

### `Const SDL_WINDOW_BORDERLESS:ULong = $00000010:ULong Shl 32`

no window decoration

<br/>

### `Const SDL_WINDOW_RESIZABLE:ULong = $00000020:ULong Shl 32`

window can be resized

<br/>

### `Const SDL_WINDOW_MINIMIZED:ULong = $00000040:ULong Shl 32`

window is minimized

<br/>

### `Const SDL_WINDOW_MAXIMIZED:ULong = $00000080:ULong Shl 32`

window is maximized

<br/>

### `Const SDL_WINDOW_INPUT_GRABBED:ULong = $00000100:ULong Shl 32`

window has grabbed input focus

<br/>

### `Const SDL_WINDOW_INPUT_FOCUS:ULong = $00000200:ULong Shl 32`

window has input focus

<br/>

### `Const SDL_WINDOW_MOUSE_FOCUS:ULong = $00000400:ULong Shl 32`

window has mouse focus

<br/>

### `Const SDL_WINDOW_FULLSCREEN_DESKTOP:ULong = SDL_WINDOW_FULLSCREEN | ($00001000:ULong Shl 32)`

full screen desktop

<br/>

### `Const SDL_WINDOW_FOREIGN:ULong = $00000800:ULong Shl 32`

window not created by SDL

<br/>

### `Const SDL_WINDOW_ALLOW_HIGHDPI:ULong = $00002000:ULong Shl 32`

window should be created in high-DPI mode if supported

<br/>

### `Const SDL_WINDOW_MOUSE_CAPTURE:ULong = $00004000:ULong Shl 32`

window has mouse captured (unrelated to INPUT_GRABBED)

<br/>

### `Const SDL_WINDOW_ALWAYS_ON_TOP:ULong = $00008000:ULong Shl 32`

window should always be above others

<br/>

### `Const SDL_WINDOW_SKIP_TASKBAR:ULong = $00010000:ULong Shl 32`

window should not be added to the taskbar

<br/>

### `Const SDL_WINDOW_UTILITY:ULong = $00020000:ULong Shl 32`

window should be treated as a utility window

<br/>

### `Const SDL_WINDOW_TOOLTIP:ULong = $00040000:ULong Shl 32`

window should be treated as a tooltip

<br/>

### `Const SDL_WINDOW_POPUP_MENU:ULong = $00080000:ULong Shl 32`

window should be treated as a popup menu

<br/>

### `Const SDL_WINDOW_KEYBOARD_GRABBED:ULong = $00100000:ULong Shl 32`

window has grabbed keyboard input

<br/>

### `Const SDL_WINDOW_VULKAN:ULong = $10000000:ULong Shl 32`

window usable for Vulkan surface

<br/>

### `Const SDL_WINDOW_METAL:ULong = $20000000:ULong Shl 32`

window usable for Metal view

<br/>

### `Const SDL_GL_RED_SIZE:Int = 0`

the minimum number of bits for the red channel of the color buffer; defaults to 3

<br/>

### `Const SDL_GL_GREEN_SIZE:Int = 1`

the minimum number of bits for the green channel of the color buffer; defaults to 3

<br/>

### `Const SDL_GL_BLUE_SIZE:Int = 2`

the minimum number of bits for the blue channel of the color buffer; defaults to 2

<br/>

### `Const SDL_GL_ALPHA_SIZE:Int = 3`

the minimum number of bits for the alpha channel of the color buffer; defaults to 0

<br/>

### `Const SDL_GL_BUFFER_SIZE:Int = 4`

the minimum number of bits for frame buffer size; defaults to 0

<br/>

### `Const SDL_GL_DOUBLEBUFFER:Int = 5`

whether the output is single or double buffered; defaults to double buffering on

<br/>

### `Const SDL_GL_DEPTH_SIZE:Int = 6`

the minimum number of bits in the depth buffer; defaults to 16

<br/>

### `Const SDL_GL_STENCIL_SIZE:Int = 7`

the minimum number of bits in the stencil buffer; defaults to 0

<br/>

### `Const SDL_GL_ACCUM_RED_SIZE:Int = 8`

the minimum number of bits for the red channel of the accumulation buffer; defaults to 0

<br/>

### `Const SDL_GL_ACCUM_GREEN_SIZE:Int = 9`

the minimum number of bits for the green channel of the accumulation buffer; defaults to 0

<br/>

### `Const SDL_GL_ACCUM_BLUE_SIZE:Int = 10`

the minimum number of bits for the blue channel of the accumulation buffer; defaults to 0

<br/>

### `Const SDL_GL_ACCUM_ALPHA_SIZE:Int = 11`

the minimum number of bits for the alpha channel of the accumulation buffer; defaults to 0

<br/>

### `Const SDL_GL_STEREO:Int = 12`

whether the output is stereo 3D; defaults to off

<br/>

### `Const SDL_GL_MULTISAMPLEBUFFERS:Int = 13`

the number of buffers used for multisample anti-aliasing; defaults to 0; see Remarks for details

<br/>

### `Const SDL_GL_MULTISAMPLESAMPLES:Int = 14`

the number of samples used around the current pixel used for multisample anti-aliasing; defaults to 0; see Remarks for details

<br/>

### `Const SDL_GL_ACCELERATED_VISUAL:Int = 15`

set to 1 to require hardware acceleration, set to 0 to force software rendering; defaults to allow either

<br/>

### `Const SDL_GL_RETAINED_BACKING:Int = 16`

not used (deprecated)

<br/>

### `Const SDL_GL_CONTEXT_MAJOR_VERSION:Int = 17`

OpenGL context major version; see Remarks for details

<br/>

### `Const SDL_GL_CONTEXT_MINOR_VERSION:Int = 18`

OpenGL context minor version; see Remarks for details

<br/>

### `Const SDL_GL_CONTEXT_FLAGS:Int = 19`

some combination of 0 or more of elements of the SDL_GLcontextFlag enumeration; defaults to 0

<br/>

### `Const SDL_GL_CONTEXT_PROFILE_MASK:Int = 20`

type of GL context (Core, Compatibility, ES). See SDL_GLprofile; default value depends on platform

<br/>

### `Const SDL_GL_SHARE_WITH_CURRENT_CONTEXT:Int = 21`

OpenGL context sharing; defaults to 0

<br/>

### `Const SDL_GL_FRAMEBUFFER_SRGB_CAPABLE:Int = 22`

requests sRGB capable visual; defaults to 0

<br/>

### `Const SDL_GL_CONTEXT_RELEASE_BEHAVIOR:Int = 23`

sets context the release behavior; defaults to 1

<br/>

### `Const SDL_ORIENTATION_UNKNOWN:Int = 0`

The display orientation can't be determined

<br/>

### `Const SDL_ORIENTATION_LANDSCAPE:Int = 1`

The display is in landscape mode, with the right side up, relative to portrait mode

<br/>

### `Const SDL_ORIENTATION_LANDSCAPE_FLIPPED:Int = 2`

The display is in landscape mode, with the left side up, relative to portrait mode

<br/>

### `Const SDL_ORIENTATION_PORTRAIT:Int = 3`

The display is in portrait mode

<br/>

### `Const SDL_ORIENTATION_PORTRAIT_FLIPPED:Int = 4`

The display is in portrait mode, upside down

<br/>

