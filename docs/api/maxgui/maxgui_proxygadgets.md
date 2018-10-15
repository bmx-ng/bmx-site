---
id: maxgui.proxygadgets
title: MaxGUI.ProxyGadgets
sidebar_label: MaxGUI.ProxyGadgets
---


This module contains any official proxy gadgets that wrap around the standard MaxGUI gadgets and provide an additional library
of gadgets that can be used in a whole host of programs. Any gadgets in this library can be used with the standard MaxGUI functions
available in the core [MaxGUI.MaxGUI](../../maxgui/maxgui_maxgui.md) module.


## Functions

### `Function CreateHyperlink:TGadget( url$,x,y,w,h,group:TGadget,style=0,customtext$ = "" )`

Creates a basic hyperlink gadget that opens the specified <b>url</b>$ in the default browser when clicked.

The underlying gadget is a label, and so the <b>style</b> parameter can take all the [CreateLabel](../../maxgui/maxgui.maxgui/#function-createlabel-tgadget-name-x-y-w-h-group-tgadget-style-label-left) flags apart from LABEL_SEPARATOR.

The normal and roll-over text color can be set individually using [SetGadgetTextColor](../../maxgui/maxgui.maxgui/#function-setgadgettextcolor-gadget-tgadget-r-g-b) and [SetGadgetColor](../../maxgui/maxgui.maxgui/#function-setgadgetcolor-gadget-tgadget-r-g-b-bg-true) respectively.

The optional <b>customtext</b>$ parameter allows you to set user-friendly text that masks the URL in the label. If this is specified in [CreateHyperlink](../../maxgui/maxgui.proxygadgets/#function-createhyperlink-tgadget-url-x-y-w-h-group-tgadget-style-0-customtext)
then the label's tooltip is automatically set to the URL the link refers to. This masking text can be changed at any time by calling [SetGadgetText](../../maxgui/maxgui.maxgui/#function-setgadgettext-gadget-tgadget-text).
Finally, the <b>url</b>$ that the hyperlink gadget opens can be modified/retrieved using [SetGadgetExtra](../../maxgui/maxgui.maxgui/#function-setgadgetextra-gadget-tgadget-extra-object) and String( [GadgetExtra](../../maxgui/maxgui.maxgui/#function-gadgetextra-object-gadget-tgadget) )
respectively (see code example).


#### Example
```blitzmax
Strict

Import MaxGUI.Drivers
Import MaxGUI.ProxyGadgets

AppTitle = "Hyperlink Test Window"

Global wndMain:TGadget = CreateWindow( AppTitle, 100, 100, 300, 159, Null, WINDOW_TITLEBAR|WINDOW_CLIENTCOORDS|WINDOW_STATUS )
	
	'Standard Hyperlink Gadget
	Global hypLeft:TGadget = CreateHyperlink( "http://www.google.com/", 2, 2, ClientWidth(wndMain)-4, 15, wndMain, LABEL_LEFT )
	
	'Center Aligned Hyperlink Gadget with alternate text
	Global hypCenter:TGadget = CreateHyperlink( "http://www.blitzbasic.com/", 2, 21, ClientWidth(wndMain)-4, 17, wndMain, LABEL_CENTER|LABEL_FRAME, "BlitzBasic" )
	
	'Right Aligned Sunken Hyperlink Gadget with custom rollover colors set
	Global hypRight:TGadget = CreateHyperlink( "http://www.blitzmax.com/", 2, 42, ClientWidth(wndMain)-4, 15, wndMain, LABEL_RIGHT, "Custom Rollover Colors" )
		SetGadgetTextColor(hypRight,128,128,128)	'Set normal text color to grey.
		SetGadgetColor(hypRight,255,128,0)			'Set rollover color to orange.

	Local button:TGadget = CreateButton("Select Font",0,ClientHeight(wndMain)-26,ClientWidth(wndMain),26,wndMain)
		SetGadgetLayout button, EDGE_ALIGNED, EDGE_ALIGNED, EDGE_CENTERED, EDGE_ALIGNED
  Local font:TGUIFont
'Example of how to retrieve a hyperlink gadget's URL
Print "Hyperlink 1 URL: " + String(GadgetExtra(hypLeft))
Print "Hyperlink 2 URL: " + String(GadgetExtra(hypCenter))
Print "Hyperlink 3 URL: " + String(GadgetExtra(hypRight))

'Example of how to set a hyperlink gadget's URL
SetGadgetExtra( hypRight, "http://www.blitzbasic.co.nz" )
'We need to update the tooltip to the new URL
SetGadgetToolTip( hypRight, String(GadgetExtra(hypRight)) )

Repeat
	
	WaitEvent()
	
	SetStatusText wndMain, CurrentEvent.ToString()
	
	Select EventID()
		Case EVENT_WINDOWCLOSE, EVENT_APPTERMINATE;End
		Case EVENT_GADGETACTION
			font = RequestFont(font)
			If font Then
			'DebugStop
				SetGadgetFont hypCenter, font
				SetStatusText wndMain,FontName(font) + ": " + Int(FontSize(font)+0.5) + "pt"
			EndIf
	EndSelect
	
Forever
```

### `Function CreateSplitter:TSplitter( pX%, pY%, pW%, pH%, pParent:TGadget, pOrientation% = SPLIT_VERTICAL, pHandleSize% = 10 )`

Creates a gadget consisting of two panels separated by a draggable divider.

A splitter is made up of two panels: a main panel (identified using SPLITPANEL_MAIN) which acts as the main working area; and a side pane
(identified using SPLITPANEL_SIDEPANE) which is typically used to display additional information. Both of these panels are contained within a
parent panel that is represented by the <b>TSplitter</b> instance. The two panels are separated by a split handle/divider, the behavior of which can be
queried and altered using the [SplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-splitterbehavior-int-splitter-tsplitter) and [SetSplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-setsplitterbehavior-splitter-tsplitter-flags-split-all) functions respectively.

The size of the split handle is determined using the optional <b>pHandleSize</b> parameter.  The default size of 10 pixels should work well in most
situations, and the minimum value that this can be is 4.

After creating a splitter gadget, you can start adding gadgets to it by retrieving the appropriate panel with the [SplitterPanel](../../maxgui/maxgui.proxygadgets/#function-splitterpanel-tgadget-splitter-tsplitter-panel-splitpanel-main) command.

The <b>TSplitter</b> type instance can be used with most of the standard MaxGUI commands, allowing you to change the properties of the entire splitter
gadget. There are, however, a few exceptions:

[SetGadgetSensitivity](../../maxgui/maxgui.maxgui/#function-setgadgetsensitivity-gadget-tgadget-flags) and [GadgetSensitivity](../../maxgui/maxgui.maxgui/#function-gadgetsensitivity-gadget-tgadget) will have no effect on the splitter gadget. If you want to use active panels, create your own
sub-panel within each splitter panel.

[SetGadgetTooltip](../../maxgui/maxgui.maxgui/#function-setgadgettooltip-gadget-tgadget-tip) and [GadgetTooltip](../../maxgui/maxgui.maxgui/#function-gadgettooltip-gadget-tgadget) will set/retrieve a tooltip for when the user is hovering over the splitter handle/divider.

[SetGadgetColor](../../maxgui/maxgui.maxgui/#function-setgadgetcolor-gadget-tgadget-r-g-b-bg-true) will modify the split handle/divider background color.

See Also: [SplitterPanel](../../maxgui/maxgui.proxygadgets/#function-splitterpanel-tgadget-splitter-tsplitter-panel-splitpanel-main), [SetSplitterPosition](../../maxgui/maxgui.proxygadgets/#function-setsplitterposition-splitter-tsplitter-position-save-true), [SplitterPosition](../../maxgui/maxgui.proxygadgets/#function-splitterposition-int-splitter-tsplitter), [SetSplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-setsplitterbehavior-splitter-tsplitter-flags-split-all), [SplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-splitterbehavior-int-splitter-tsplitter), [SetSplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-setsplitterorientation-splitter-tsplitter-orientation-1) and [SplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-splitterorientation-int-splitter-tsplitter).


#### Example
```blitzmax
Strict

Import MaxGUI.Drivers
Import MaxGUI.ProxyGadgets

Global wndMain:TGadget = CreateWindow("Splitter Example",100,100,400,300,Null,WINDOW_TITLEBAR|WINDOW_RESIZABLE|WINDOW_CENTER|WINDOW_CLIENTCOORDS|WINDOW_STATUS)
	
	'Create a splitter gadget
	Global spltMain:TSplitter = CreateSplitter( 0, 0, ClientWidth(wndMain), ClientHeight(wndMain), wndMain )
	SetGadgetLayout spltMain,EDGE_ALIGNED,EDGE_ALIGNED,EDGE_ALIGNED,EDGE_ALIGNED
	
	Local tmpSplitPanel:TGadget
		
		'Add a gadget to our left pane
		tmpSplitPanel = SplitterPanel(spltMain,SPLITPANEL_MAIN)
		Global txtEditor:TGadget = CreateTextArea(0,0,ClientWidth(tmpSplitPanel),ClientHeight(tmpSplitPanel),tmpSplitPanel,TEXTAREA_WORDWRAP)
		SetGadgetLayout(txtEditor,EDGE_ALIGNED,EDGE_ALIGNED,EDGE_ALIGNED,EDGE_ALIGNED)
		
			AddTextAreaText(txtEditor, "The quick brown fox jumped over the lazy dogs.nn")
			AddTextAreaText(txtEditor, "The quick brown fox jumped over the lazy dogs.nn")
			AddTextAreaText(txtEditor, "The quick brown fox jumped over the lazy dogs.nn")
		
		'Add a gadget to our right pane
		tmpSplitPanel = SplitterPanel(spltMain,SPLITPANEL_SIDEPANE)
		Global treeView:TGadget = CreateTreeView(0,0,ClientWidth(tmpSplitPanel),ClientHeight(tmpSplitPanel),tmpSplitPanel)
		SetGadgetLayout(treeView,EDGE_ALIGNED,EDGE_ALIGNED,EDGE_ALIGNED,EDGE_ALIGNED)
		
			AddTreeViewNode("Child", AddTreeViewNode("Parent Node", TreeViewRoot(treeView)))
			AddTreeViewNode("Other", TreeViewRoot(treeView))
	
Repeat
	WaitEvent()
	SetStatusText wndMain, CurrentEvent.ToString()
	Select EventID()
		Case EVENT_WINDOWCLOSE, EVENT_APPTERMINATE;End
	EndSelect
Forever
```

### `Function SplitterPanel:TGadget( splitter:TSplitter, panel% = SPLITPANEL_MAIN )`

Retrieves either one of the two panels which make up a TSplitter gadget.

This function is used to return a standard MaxGUI panel that you can add your gadgets to.

The panels available are SPLITPANEL_MAIN and SPLITPANEL_SIDEPANE. See [CreateSplitter](../../maxgui/maxgui.proxygadgets/#function-createsplitter-tsplitter-px-py-pw-ph-pparent-tgadget-porientation-split-vertical-phandlesize-10) for more information
about the differences between the two panels.

See Also: [CreateSplitter](../../maxgui/maxgui.proxygadgets/#function-createsplitter-tsplitter-px-py-pw-ph-pparent-tgadget-porientation-split-vertical-phandlesize-10), [SetSplitterPosition](../../maxgui/maxgui.proxygadgets/#function-setsplitterposition-splitter-tsplitter-position-save-true), [SplitterPosition](../../maxgui/maxgui.proxygadgets/#function-splitterposition-int-splitter-tsplitter), [SetSplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-setsplitterbehavior-splitter-tsplitter-flags-split-all), [SplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-splitterbehavior-int-splitter-tsplitter), [SetSplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-setsplitterorientation-splitter-tsplitter-orientation-1) and [SplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-splitterorientation-int-splitter-tsplitter).



### `Function SetSplitterPosition( splitter:TSplitter, position%, save% = True )`

Sets the position of the splitter (in pixels) from the edge of a TSplitter gadget.

This function's most common use is to restore a split position previously returned by [SplitterPosition](../../maxgui/maxgui.proxygadgets/#function-splitterposition-int-splitter-tsplitter).

The optional <b>save</b>% parameter determines whether or not the position supplied is restored when the splitter returns from it's hidden state.
In most circumstances, this should be left as [True](../../brl/brl.blitz/#true).

See Also: [CreateSplitter](../../maxgui/maxgui.proxygadgets/#function-createsplitter-tsplitter-px-py-pw-ph-pparent-tgadget-porientation-split-vertical-phandlesize-10), [SplitterPanel](../../maxgui/maxgui.proxygadgets/#function-splitterpanel-tgadget-splitter-tsplitter-panel-splitpanel-main), [SplitterPosition](../../maxgui/maxgui.proxygadgets/#function-splitterposition-int-splitter-tsplitter), [SetSplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-setsplitterbehavior-splitter-tsplitter-flags-split-all), [SplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-splitterbehavior-int-splitter-tsplitter), [SetSplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-setsplitterorientation-splitter-tsplitter-orientation-1) and [SplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-splitterorientation-int-splitter-tsplitter).



### `Function SplitterPosition:Int( splitter:TSplitter )`

Returns the position of the splitter (in pixels) from the edge of a TSplitter gadget.

This function's most common use is probably for saving the current splitter position to restore at a later time using [SetSplitterPosition](../../maxgui/maxgui.proxygadgets/#function-setsplitterposition-splitter-tsplitter-position-save-true).

See Also: [CreateSplitter](../../maxgui/maxgui.proxygadgets/#function-createsplitter-tsplitter-px-py-pw-ph-pparent-tgadget-porientation-split-vertical-phandlesize-10), [SplitterPanel](../../maxgui/maxgui.proxygadgets/#function-splitterpanel-tgadget-splitter-tsplitter-panel-splitpanel-main), [SetSplitterPosition](../../maxgui/maxgui.proxygadgets/#function-setsplitterposition-splitter-tsplitter-position-save-true), [SetSplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-setsplitterbehavior-splitter-tsplitter-flags-split-all), [SplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-splitterbehavior-int-splitter-tsplitter), [SetSplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-setsplitterorientation-splitter-tsplitter-orientation-1) and [SplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-splitterorientation-int-splitter-tsplitter).



### `Function SetSplitterOrientation( splitter:TSplitter, orientation% = -1 )`

Sets the splitter orientation.

The two orientations available are (both of which can be combined with SPLIT_FLIPPED):

<table><tr><td> <b>Orientation</b></td><td><b>Description</b></td></tr><tr><td>  -1</td><td>Toggles the SPLIT_FLIPPED flag.</td></tr><tr><td>  SPLIT_VERTICAL</td><td>The splitter consists of a main left panel with a side-pane along the right edge.</td></tr><tr><td>  SPLIT_HORIZONTAL</td><td>The splitter consists of a main top panel with a side-pane along the bottom edge.</td></tr><tr><td>  SPLIT_VERTICAL | SPLIT_FLIPPED</td><td>The splitter consists of a main right panel with a side-pane along the left edge.</td></tr><tr><td>  SPLIT_HORIZONTAL | SPLIT_FLIPPED</td><td>The splitter consists of a main bottom with a side-pane along the top edge.</table>


See Also: [CreateSplitter](../../maxgui/maxgui.proxygadgets/#function-createsplitter-tsplitter-px-py-pw-ph-pparent-tgadget-porientation-split-vertical-phandlesize-10), [SplitterPanel](../../maxgui/maxgui.proxygadgets/#function-splitterpanel-tgadget-splitter-tsplitter-panel-splitpanel-main), [SetSplitterPosition](../../maxgui/maxgui.proxygadgets/#function-setsplitterposition-splitter-tsplitter-position-save-true), [SplitterPosition](../../maxgui/maxgui.proxygadgets/#function-splitterposition-int-splitter-tsplitter), [SetSplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-setsplitterbehavior-splitter-tsplitter-flags-split-all) and [SplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-splitterorientation-int-splitter-tsplitter).



### `Function SplitterOrientation:Int( splitter:TSplitter )`

Returns the orientation of the splitter.

The two orientations available are (both of which can be combined with SPLIT_FLIPPED):

<table><tr><td> <b>Orientation</b></td><td><b>Description</b></td></tr><tr><td>  SPLIT_VERTICAL</td><td>The splitter consists of a main left panel with a side-pane along the right edge.</td></tr><tr><td>  SPLIT_HORIZONTAL</td><td>The splitter consists of a main top panel with a side-pane along the bottom edge.</td></tr><tr><td>  SPLIT_VERTICAL | SPLIT_FLIPPED</td><td>The splitter consists of a main right panel with a side-pane along the left edge.</td></tr><tr><td>  SPLIT_HORIZONTAL | SPLIT_FLIPPED</td><td>The splitter consists of a main bottom with a side-pane along the top edge.</table>


See Also: [CreateSplitter](../../maxgui/maxgui.proxygadgets/#function-createsplitter-tsplitter-px-py-pw-ph-pparent-tgadget-porientation-split-vertical-phandlesize-10), [SplitterPanel](../../maxgui/maxgui.proxygadgets/#function-splitterpanel-tgadget-splitter-tsplitter-panel-splitpanel-main), [SetSplitterPosition](../../maxgui/maxgui.proxygadgets/#function-setsplitterposition-splitter-tsplitter-position-save-true), [SplitterPosition](../../maxgui/maxgui.proxygadgets/#function-splitterposition-int-splitter-tsplitter), [SetSplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-setsplitterbehavior-splitter-tsplitter-flags-split-all) and [SetSplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-setsplitterorientation-splitter-tsplitter-orientation-1).



### `Function SetSplitterBehavior( splitter:TSplitter, flags%=SPLIT_ALL )`

Sets the behavior of a splitter.

Any combination of the following are available:

<table><tr><td> <b>Behavior Flag</b></td><td><b>Description</b></td></tr><tr><td>  0</td><td>The splitter does none of the actions listed below.</td></tr><tr><td>  SPLIT_RESIZABLE</td><td>The splitter can be resized by dragging.</td></tr><tr><td>  SPLIT_LIMITPANESIZE</td><td>The splitter side-pane is not allowed to take up more than half the splitted dimensions.</td></tr><tr><td>  SPLIT_CANFLIP</td><td>The splitter can switch between opposite edges by dragging to the edge.</td></tr><tr><td>  SPLIT_CANORIENTATE</td><td>The splitter can switch between vertical and horizontal modes by dragging to right/bottom edges.</td></tr><tr><td>  SPLIT_CLICKTOTOGGLE</td><td>The splitter will hide/show when the drag-bar is clicked.</td></tr><tr><td>  SPLIT_ALL</td><td>A shorthand flag for representing all of the above.</table>


The default behavior of a splitter is SPLIT_ALL&~SPLIT_LIMITPANESIZE (i.e. everything but SPLIT_LIMITPANESIZE).

See Also: [CreateSplitter](../../maxgui/maxgui.proxygadgets/#function-createsplitter-tsplitter-px-py-pw-ph-pparent-tgadget-porientation-split-vertical-phandlesize-10), [SplitterPanel](../../maxgui/maxgui.proxygadgets/#function-splitterpanel-tgadget-splitter-tsplitter-panel-splitpanel-main), [SplitterPosition](../../maxgui/maxgui.proxygadgets/#function-splitterposition-int-splitter-tsplitter), [SplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-splitterbehavior-int-splitter-tsplitter), [SetSplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-setsplitterorientation-splitter-tsplitter-orientation-1) and [SplitterOrientation](../../maxgui/maxgui.proxygadgets/#function-splitterorientation-int-splitter-tsplitter).



### `Function SplitterBehavior:Int( splitter:TSplitter )`

Returns the value previously set using [SetSplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-setsplitterbehavior-splitter-tsplitter-flags-split-all).

See [SetSplitterBehavior](../../maxgui/maxgui.proxygadgets/#function-setsplitterbehavior-splitter-tsplitter-flags-split-all) for more information.


#### Returns
An integer composed of a combination of bitwise flags that describe the behavior of the splitter.



### `Function CreateScrollPanel:TScrollPanel( x,y,w,h,group:TGadget,flags=0 )`

Creates a scrollable panel.

A scroll panel can be used to present a large number of gadgets in a small area.  Scrollbars are displayed to allow the
user to move around a client-area that is viewed through a, typically smaller, viewport.  The [ScrollPanelX](../../maxgui/maxgui.proxygadgets/#function-scrollpanelx-int-scrollpanel-tscrollpanel) and [ScrollPanelY](../../maxgui/maxgui.proxygadgets/#function-scrollpanely-int-scrollpanel-tscrollpanel) functions
can be used to retrieve the current scroll position, and the [ScrollScrollPanel](../../maxgui/maxgui.proxygadgets/#function-scrollscrollpanel-scrollpanel-tscrollpanel-px-scrollpanel-top-py-scrollpanel-left) command, to set the scroll position.  A <b>TScrollPanel</b> gadget
emits the following event when <i>the user</i> scrolls around the scroll area:

<table><tr><td> <b>Event</b></td><td><b>EventX</b></td><td><b>EventY</b></td></tr><tr><td>  EVENT_GADGETACTION</td><td>New value of [ScrollPanelX](../../maxgui/maxgui.proxygadgets/#function-scrollpanelx-int-scrollpanel-tscrollpanel).</td><td>New value of [ScrollPanelY](../../maxgui/maxgui.proxygadgets/#function-scrollpanely-int-scrollpanel-tscrollpanel).</table>


Any combination of the following style flags are supported:

<table><tr><td> <b>Constant</b></td><td><b>Meaning</b></td></tr><tr><td>  SCROLLPANEL_SUNKEN</td><td>The scroll-panel will be drawn with a sunken border.</td></tr><tr><td>  SCROLLPANEL_HALWAYS</td><td>The horizontal scroll-bar will be shown at all times (even if not necessary).</td></tr><tr><td>  SCROLLPANEL_VALWAYS</td><td>The vertical scroll-bar will be shown at all times (even if not necessary).</td></tr><tr><td>  SCROLLPANEL_HNEVER</td><td>The horizontal scroll-bar will never be shown (even if client-area width is greater than viewport's).</td></tr><tr><td>  SCROLLPANEL_VNEVER</td><td>The vertical scroll-bar will never be shown (even if client-area height is greater than viewport's).</table>


The above can also be combined with any of the following behavioural flags which determine how the scrollable client-area resizes with the viewport:

<table><tr><td> <b>Constant</b></td><td><b>Meaning</b></td></tr><tr><td>  SCROLLPANEL_HSCALING</td><td>The client area's width grows uniformly as the viewport is sized.</td></tr><tr><td>  SCROLLPANEL_VSCALING</td><td>The client area's height grows uniformly as the viewport is sized.</table>


* The <b>TScrollPanel</b> instance itself represents the viewport of the scroll-panel, which can be manipulated (e.g. resized/shown/hidden) using the
standard MaxGUI commands.
* The client area is the panel that will actually be scrolled and is retrieved using the [ScrollPanelClient](../../maxgui/maxgui.proxygadgets/#function-scrollpanelclient-tgadget-scrollpanel-tscrollpanel) command.  This is the panel
whose dimensions determine the total scrollable area, and is also the panel that all your child gadgets should be added to.

![](assets/scroll_dimensions.png)

The dimensions given above can each be retrieved programatically:

```
GadgetWidth( myScrollPanel )                           'Gadget Width
GadgetHeight( myScrollPanel )                          'Gadget Height

ClientWidth( myScrollPanel )                           'Viewport Width
ClientHeight( myScrollPanel )                          'Viewport Height

ClientWidth( ScrollPanelClient( myScrollPanel ) )      'Client Area Width
ClientHeight( ScrollPanelClient( myScrollPanel ) )     'Client Area Height
````


And the gadget and client dimensions can be set programatically using (viewport sizing is handled automatically):

```
'Set Gadget dimensions (and position).
SetGadgetShape( myScrollPanel, x, y, w, h )

'Set Client Area dimensions (position parameters are ignored).
SetGadgetShape( ScrollPanelClient( myScrollPanel ), 0, 0, w, h )
````


See Also: [ScrollPanelClient](../../maxgui/maxgui.proxygadgets/#function-scrollpanelclient-tgadget-scrollpanel-tscrollpanel), [FitScrollPanelClient](../../maxgui/maxgui.proxygadgets/#function-fitscrollpanelclient-scrollpanel-tscrollpanel-fittype-scrollpanel-sizetokids), [ScrollScrollPanel](../../maxgui/maxgui.proxygadgets/#function-scrollscrollpanel-scrollpanel-tscrollpanel-px-scrollpanel-top-py-scrollpanel-left), [ScrollPanelX](../../maxgui/maxgui.proxygadgets/#function-scrollpanelx-int-scrollpanel-tscrollpanel), [ScrollPanelY](../../maxgui/maxgui.proxygadgets/#function-scrollpanely-int-scrollpanel-tscrollpanel) and [FitScrollPanelClient](../../maxgui/maxgui.proxygadgets/#function-fitscrollpanelclient-scrollpanel-tscrollpanel-fittype-scrollpanel-sizetokids).


#### Example
```blitzmax
Strict

Import MaxGUI.Drivers
Import MaxGUI.ProxyGadgets

AppTitle = "Scroll Panel Example"
SeedRnd MilliSecs()

Global wndMain:TGadget = CreateWindow(AppTitle,100,100,400,300,Null,WINDOW_TITLEBAR|WINDOW_RESIZABLE|WINDOW_CENTER|WINDOW_CLIENTCOORDS|WINDOW_STATUS)
	
	' Create a scroll-panel
	Global scrlMain:TScrollPanel = CreateScrollPanel( 0, 0, ClientWidth(wndMain), ClientHeight(wndMain)-30, wndMain, SCROLLPANEL_SUNKEN )
	SetGadgetLayout scrlMain,EDGE_ALIGNED,EDGE_ALIGNED,EDGE_ALIGNED,EDGE_ALIGNED
	
	' Retrieve the panel that is scrolled
	Local tmpClient:TGadget = ScrollPanelClient(scrlMain)
	
	' Draw some buttons on the scroll-panel
	Local tmpButton:TGadget
	
	For Local i:Int = 1 To 50
		tmpButton = CreateButton( "Button " + i, 0, (i-1)*35, ClientWidth(scrlMain)-20, 30, tmpClient, BUTTON_PUSH )
		SetGadgetTextColor tmpButton,Rand(0,255),Rand(0,255),Rand(0,255)
		SetGadgetLayout tmpButton,EDGE_ALIGNED,EDGE_ALIGNED,EDGE_ALIGNED,EDGE_CENTERED
	Next
	
	' Resize the scrollable region tight around the buttons
	FitScrollPanelClient( scrlMain, SCROLLPANEL_SIZETOKIDS )
	
	' Add some buttons for testing the ScrollScrollPanel function.
	Global btnTopLeft:TGadget = CreateButton( "Top Left", 0, ClientHeight(wndMain)-30, ClientWidth(wndMain)/4, 30, wndMain, BUTTON_PUSH )
	SetGadgetLayout( btnTopLeft, EDGE_ALIGNED, EDGE_RELATIVE, EDGE_CENTERED, EDGE_ALIGNED )
	SetGadgetToolTip( btnTopLeft, "ScrollScrollPanel( scrlMain, SCROLLPANEL_LEFT, SCROLLPANEL_TOP )" )
	
	Global btnTopRight:TGadget = CreateButton( "Top Right", ClientWidth(wndMain)/4, ClientHeight(wndMain)-30, ClientWidth(wndMain)/4, 30, wndMain, BUTTON_PUSH )
	SetGadgetLayout( btnTopRight, EDGE_RELATIVE, EDGE_RELATIVE, EDGE_CENTERED, EDGE_ALIGNED )
	SetGadgetToolTip( btnTopRight, "ScrollScrollPanel( scrlMain, SCROLLPANEL_RIGHT, SCROLLPANEL_TOP )" )
	
	Global btnBottomLeft:TGadget = CreateButton( "Bottom Left", 2*ClientWidth(wndMain)/4, ClientHeight(wndMain)-30, ClientWidth(wndMain)/4, 30, wndMain, BUTTON_PUSH )
	SetGadgetLayout( btnBottomLeft, EDGE_RELATIVE, EDGE_RELATIVE, EDGE_CENTERED, EDGE_ALIGNED )
	SetGadgetToolTip( btnBottomLeft, "ScrollScrollPanel( scrlMain, SCROLLPANEL_LEFT, SCROLLPANEL_BOTTOM )" )
	
	Global btnBottomRight:TGadget = CreateButton( "Bottom Right", 3*ClientWidth(wndMain)/4, ClientHeight(wndMain)-30, ClientWidth(wndMain)/4, 30, wndMain, BUTTON_PUSH )
	SetGadgetLayout( btnBottomRight, EDGE_RELATIVE, EDGE_ALIGNED, EDGE_CENTERED, EDGE_ALIGNED )
	SetGadgetToolTip( btnBottomRight, "ScrollScrollPanel( scrlMain, SCROLLPANEL_RIGHT, SCROLLPANEL_BOTTOM )" )
	
Repeat
	Select WaitEvent()
		Case EVENT_WINDOWCLOSE, EVENT_APPTERMINATE;End
		Case EVENT_GADGETACTION
			Select EventSource()
				Case btnTopLeft
					ScrollScrollPanel( scrlMain, SCROLLPANEL_LEFT, SCROLLPANEL_TOP )
				Case btnTopRight
					ScrollScrollPanel( scrlMain, SCROLLPANEL_RIGHT, SCROLLPANEL_TOP )
				Case btnBottomLeft
					ScrollScrollPanel( scrlMain, SCROLLPANEL_LEFT, SCROLLPANEL_BOTTOM )
				Case btnBottomRight
					ScrollScrollPanel( scrlMain, SCROLLPANEL_RIGHT, SCROLLPANEL_BOTTOM )
			EndSelect
	EndSelect
	SetStatusText wndMain, "ScrollPanelX(): " + ScrollPanelX( scrlMain ) + ", ScrollPanelY():" + ScrollPanelY( scrlMain )
Forever
```

### `Function ScrollPanelClient:TGadget( scrollpanel:TScrollPanel )`

Retrieves the panel that is scrolled.

This panel represents the total scrollable region of the gadget.  As such, use [SetGadgetShape](../../maxgui/maxgui.maxgui/#function-setgadgetshape-gadget-tgadget-x-y-w-h) on this panel to alter the
scrollable region (the xpos and ypos parameters will be ignored) or use the helper function [FitScrollPanelClient](../../maxgui/maxgui.proxygadgets/#function-fitscrollpanelclient-scrollpanel-tscrollpanel-fittype-scrollpanel-sizetokids) to resize the client area to
common dimensions.  In either case, it is important to note that, contrary to typical MaxGUI behaviour, resizing the client panel
<i>will not alter the position or dimensions of the children</i>, irrespective of any sizing behaviour previously defined using [SetGadgetLayout](../../maxgui/maxgui.maxgui/#function-setgadgetlayout-gadget-tgadget-left-right-top-bottom).

See [CreateScrollPanel](../../maxgui/maxgui.proxygadgets/#function-createscrollpanel-tscrollpanel-x-y-w-h-group-tgadget-flags-0) for more information.



### `Function FitScrollPanelClient( scrollpanel:TScrollPanel, fitType% = SCROLLPANEL_SIZETOKIDS )`

Helper function that resizes the client area to common dimensions.

This function resizes the scrollable area of a <b>TScrollPanel</b> widget.  Any child gadgets will retain their current
position and dimensions, irrespective of any sizing behaviour previously defined using [SetGadgetLayout](../../maxgui/maxgui.maxgui/#function-setgadgetlayout-gadget-tgadget-left-right-top-bottom). This function will
also reset the current visible area, to the furthest top-left.

* <b>scrollpanel</b>: The scrollpanel whose client you want to resize.
* <b>fitType</b>: Should be one of the following constants:

<table><tr><td> <b>Constant</b></td><td><b>Meaning</b></td></tr><tr><td>  SCROLLPANEL_SIZETOKIDS</td><td>The client area will be resized so that its width and height are just enough to enclose all child gadgets.</td></tr><tr><td>  SCROLLPANEL_SIZETOVIEWPORT</td><td>The client area will be resized so that it is the same size that the viewport is currently (effectively removing the scrollbars).</table>


See [CreateScrollPanel](../../maxgui/maxgui.proxygadgets/#function-createscrollpanel-tscrollpanel-x-y-w-h-group-tgadget-flags-0) and [ScrollPanelClient](../../maxgui/maxgui.proxygadgets/#function-scrollpanelclient-tgadget-scrollpanel-tscrollpanel) for more information.



### `Function ScrollScrollPanel( scrollpanel:TScrollPanel, pX = SCROLLPANEL_TOP, pY = SCROLLPANEL_LEFT )`

Scrolls the current viewport to a new position.

This function moves the client area of the scroll panel so that the the top-left corner of the viewport is as close
as possible to the specified <b>pX</b>, <b>pY</b> position in the client-area.

![](assets/scroll_position.png)

There are 4 position constants provided:

<table><tr><td> <b>Constant</b></td><td><b>Position</b></td></tr><tr><td>  SCROLLPANEL_TOP</td><td>Top-most edge.</td></tr><tr><td>  SCROLLPANEL_LEFT</td><td>Left-most edge.</td></tr><tr><td>  SCROLLPANEL_BOTTOM</td><td>Bottom-most edge.</td></tr><tr><td>  SCROLLPANEL_RIGHT</td><td>Right-most edge.</td></tr><tr><td>  SCROLLPANEL_HOLD</td><td>Current position.</table>


For example, both of these commands...

```
ScrollScrollPanel( myScrollPanel, SCROLLPANEL_LEFT, SCROLLPANEL_TOP )
ScrollScrollPanel( myScrollPanel, 0, 0 )
````

...would scroll to the top-leftmost section of the client area. Conversely, we can scroll to the bottom-right most
region of the client area by calling:
```
ScrollScrollPanel( myScrollPanel, SCROLLPANEL_RIGHT, SCROLLPANEL_BOTTOM )
````


If we only want to change just the horizontal or just the vertical scroll position, we can use the SCROLLPANEL_HOLD constant. E.g.
to scroll to the left most side without changing the current vertical scroll position, we could use:
```
ScrollScrollPanel( myScrollPanel, SCROLLPANEL_LEFT, SCROLLPANEL_HOLD )
````


See [CreateScrollPanel](../../maxgui/maxgui.proxygadgets/#function-createscrollpanel-tscrollpanel-x-y-w-h-group-tgadget-flags-0), [ScrollPanelX](../../maxgui/maxgui.proxygadgets/#function-scrollpanelx-int-scrollpanel-tscrollpanel), [ScrollPanelY](../../maxgui/maxgui.proxygadgets/#function-scrollpanely-int-scrollpanel-tscrollpanel) and [ScrollPanelClient](../../maxgui/maxgui.proxygadgets/#function-scrollpanelclient-tgadget-scrollpanel-tscrollpanel) for more information.



### `Function ScrollPanelX:Int( scrollpanel:TScrollpanel )`

Returns the x position of the client-area that is currently at the top-left of the viewport.

Complementary function to [ScrollPanelY](../../maxgui/maxgui.proxygadgets/#function-scrollpanely-int-scrollpanel-tscrollpanel) and [ScrollScrollPanel](../../maxgui/maxgui.proxygadgets/#function-scrollscrollpanel-scrollpanel-tscrollpanel-px-scrollpanel-top-py-scrollpanel-left).  See [ScrollScrollPanel](../../maxgui/maxgui.proxygadgets/#function-scrollscrollpanel-scrollpanel-tscrollpanel-px-scrollpanel-top-py-scrollpanel-left) for a visual representation
of this value.

See [CreateScrollPanel](../../maxgui/maxgui.proxygadgets/#function-createscrollpanel-tscrollpanel-x-y-w-h-group-tgadget-flags-0) for more information.



### `Function ScrollPanelY:Int( scrollpanel:TScrollpanel )`

Returns the y position of the client-area that is currently at the top-left of the viewport.

Complementary function to [ScrollPanelX](../../maxgui/maxgui.proxygadgets/#function-scrollpanelx-int-scrollpanel-tscrollpanel) and [ScrollScrollPanel](../../maxgui/maxgui.proxygadgets/#function-scrollscrollpanel-scrollpanel-tscrollpanel-px-scrollpanel-top-py-scrollpanel-left).  See [ScrollScrollPanel](../../maxgui/maxgui.proxygadgets/#function-scrollscrollpanel-scrollpanel-tscrollpanel-px-scrollpanel-top-py-scrollpanel-left) for a visual representation
of this value.

See [CreateScrollPanel](../../maxgui/maxgui.proxygadgets/#function-createscrollpanel-tscrollpanel-x-y-w-h-group-tgadget-flags-0) for more information.



