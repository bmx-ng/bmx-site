---
id: sdl.sdlrendermax2d
title: SDL.SDLRenderMax2D
sidebar_label: SDL.SDLRenderMax2D
---



The SDLRender Max2D module provides an SDL-backend SDLRender driver for Max2D.


## Functions

### `Function SDLRenderMax2DDriver:TSDLRenderMax2DDriver()`

Get SDLRender Max2D Driver


The returned driver can be used with [SetGraphicsDriver](../../brl/brl.graphics/#function-setgraphicsdriver-drivertgraphicsdriverdefaultflagslonggraphicsbackbuffer-) to enable SDLRender Max2D
rendering.


<br/>

### `Function SDLSetPreferredRenderer( renderer:String )`

Defines the preferred renderer, by name.

Available renderers vary by platform. If <b>renderer</b> is not found, default will be used.


<br/>

### `Function SDLPrioritizeRenderer( renderer:String, priority:ESDLHintPriority = ESDLHintPriority.SDL_HINT_DEFAULT)`

Marks a renderer to be prioritized over others, by name.

Available renderers vary by platform. If <b>renderer</b> is not found or
cannot be initialized later then, normal default will be used.


<br/>

### `Function SDLGetRendererNames:String[]()`

Get a list of available renderer drivers.

Available renderers vary by platform.


<br/>

