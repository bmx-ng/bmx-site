---
id: tsdlglcontext
title: TSDLGLContext
sidebar_label: TSDLGLContext
---

An Open GL context.


## Methods

### `Method Free()`

Frees the GL Context.


## Functions

### `Function ExtensionSupported:Int(extension:String)`

Checks if an OpenGL extension is supported for the current context.

This method operates on the current GL context; you must have created a context and it must be current before calling this method.
Do not assume that all contexts you create will have the same set of extensions available, or that recreating an existing context
will offer the same extensions again.
While it's probably not a massive overhead, this method is not an O(1) operation. Check the extensions you care about after creating
the GL context and save that information somewhere instead of calling the method every time you need to know.


#### Returns
True if the extension is supported, False otherwise.



### `Function GetAttribute:Int(attr:Int, value:Int Var)`

Gets the actual value for an attribute from the current context.

#### Returns
0 on success or a negative error code on failure.



### `Function GetCurrentContext:TSDLGLContext()`

Gets the currently active OpenGL context.

#### Returns
The currently active OpenGL context or Null on failure.



### `Function GetCurrentWindow:TSDLWindow()`

Gets the currently active OpenGL window.

#### Returns
The currently active OpenGL window on success or Null on failure.



### `Function GetProcAddress:Byte Ptr(proc:String)`

Gets an OpenGL function by name.

If the GL library is loaded at runtime with GLLoadLibrary(), then all GL functions must be retrieved this way.
Usually this is used to retrieve function pointers to OpenGL extensions.


#### Returns
A pointer to the named OpenGL function. The returned pointer should be cast to the appropriate function signature.



### `Function LoadLibrary:Int(path:String)`

Dynamically loads an OpenGL library.

This should be done after initializing the video driver, but before creating any OpenGL windows.
If no OpenGL library is loaded, the default library will be loaded upon creation of the first OpenGL window.
If you do this, you need to retrieve all of the GL functions used in your program from the dynamic library using GLGetProcAddress().


#### Returns
0 on success or a negative error code on failure.



### `Function GetSwapInterval:Int()`

Gets the swap interval for the current OpenGL context.

If the system can't determine the swap interval, or there isn't a valid current context, this method will return 0 as a safe default.


#### Returns
0 if there is no vertical retrace synchronization, 1 if the buffer swap is synchronized with the vertical retrace, and -1 if late swaps happen immediately instead of waiting for the next retrace.



### `Function SetSwapInterval:Int(value:Int)`

Sets the swap interval for the current OpenGL context.

Some systems allow specifying -1 for the interval, to enable late swap tearing. Late swap tearing works the same as vsync,
but if you've already missed the vertical retrace for a given frame, it swaps buffers immediately, which might be less jarring for
the user during occasional framerate drops. If application requests late swap tearing and the system does not support it, this
method will fail and return -1. In such a case, you should probably retry the call with 1 for the interval.
Late swap tearing is implemented for some glX drivers with GLX_EXT_swap_control_tear and for some Windows drivers with WGL_EXT_swap_control_tear.


#### Returns
0 on success or -1 if setting the swap interval is not supported.



### `Function ResetAttributes()`

Resets all previously set OpenGL context attributes to their default values.


### `Function SetAttribute:Int(attr:Int, value:Int)`

Sets an OpenGL window attribute before window creation.

Sets the OpenGL attribute <b>attr</b> to <b>value</b>. The requested attributes should be set before creating an OpenGL window.
You should use [GetAttribute](../../../sdl/sdl.sdlvideo/TSDLGLContext/#function-getattribute-int-attr-int-value-int-var)() to check the values after creating the OpenGL context, since the values obtained can differ from
the requested ones.


#### Returns
0 on success or a negative error code on failure.



### `Function UnloadLibrary()`

Unloads the OpenGL library previously loaded by [LoadLibrary](../../../sdl/sdl.sdlvideo/TSDLGLContext/#function-loadlibrary-int-path-string)()


