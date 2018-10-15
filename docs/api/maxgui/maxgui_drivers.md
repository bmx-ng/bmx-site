---
id: maxgui.drivers
title: MaxGUI.Drivers
sidebar_label: MaxGUI.Drivers
---



Your MaxGUI applications should import this module if they want BlitzMax to selectively import the latest official MaxGUI drivers for your application and platform:

<table><tr><td> <b>Platform</b></td><td><b>Default Driver</b></td></tr><tr><td>  Windows 2000/XP/Vista</td><td>[MaxGUI.Win32MaxGUIEx](../../maxgui/maxgui_win32maxguiex.md)</td></tr><tr><td>  Windows 9X</td><td>[MaxGUI.Win32MaxGUIEx](../../maxgui/maxgui_win32maxguiex.md) (requires unicows.dll or MSLU to run)</td></tr><tr><td>  Linux</td><td>Gtk.Gtk3MaxGUI</td></tr><tr><td>  Mac OS X</td><td>[MaxGUI.CocoaMaxGUI](../../maxgui/maxgui_cocoamaxgui.md)</table>



