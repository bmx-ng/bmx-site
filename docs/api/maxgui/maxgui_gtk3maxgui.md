---
id: maxgui.gtk3maxgui
title: MaxGUI.GTK3MaxGUI
sidebar_label: MaxGUI.GTK3MaxGUI
---


## Types
| Type | Description |
|---|---|
| [TGTKDesktop](../../maxgui/maxgui.gtk3maxgui/tgtkdesktop) | The Desktop. |
| [TGTKContainer](../../maxgui/maxgui.gtk3maxgui/tgtkcontainer) | This type handles "internal" widget containers for "Container" gadgets. |
| [TGTKWindow](../../maxgui/maxgui.gtk3maxgui/tgtkwindow) | A Window |
| [TGTKMenuItem](../../maxgui/maxgui.gtk3maxgui/tgtkmenuitem) | A menu item. |
| [TGTKButton](../../maxgui/maxgui.gtk3maxgui/tgtkbutton) | Base type for button gadgets. |
| [TGTKButtonPush](../../maxgui/maxgui.gtk3maxgui/tgtkbuttonpush) | A push button |
| [TGTKToggleButton](../../maxgui/maxgui.gtk3maxgui/tgtktogglebutton) | A button which has a toggle-type usage (radio / checkbox) |
| [TGTKButtonRadio](../../maxgui/maxgui.gtk3maxgui/tgtkbuttonradio) | A radio button. |
| [TGTKButtonCheckbox](../../maxgui/maxgui.gtk3maxgui/tgtkbuttoncheckbox) | A checkbox button |
| [TGTKLabel](../../maxgui/maxgui.gtk3maxgui/tgtklabel) | A label. |
| [TGTKEditable](../../maxgui/maxgui.gtk3maxgui/tgtkeditable) | Base type for editable gadgets (textfield / textarea). |
| [TGTKTextField](../../maxgui/maxgui.gtk3maxgui/tgtktextfield) | A Text field. |
| [TGTKList](../../maxgui/maxgui.gtk3maxgui/tgtklist) | A base for list gadgets. |
| [TGTKComboBox](../../maxgui/maxgui.gtk3maxgui/tgtkcombobox) | A combo box |
| [TGTKListWithScrollWindow](../../maxgui/maxgui.gtk3maxgui/tgtklistwithscrollwindow) | A scrollable list. |
| [TGTKListbox](../../maxgui/maxgui.gtk3maxgui/tgtklistbox) | List box |
| [TGTKTreeViewNode](../../maxgui/maxgui.gtk3maxgui/tgtktreeviewnode) | A node in the tree view. |
| [TGTKTreeView](../../maxgui/maxgui.gtk3maxgui/tgtktreeview) | A tree view. |
| [TGTKRange](../../maxgui/maxgui.gtk3maxgui/tgtkrange) | A base-type for handling slider / range gadgets - ScrollBar and TrackBar |
| [TGTKScrollBar](../../maxgui/maxgui.gtk3maxgui/tgtkscrollbar) | A scrollbar |
| [TGTKTrackBar](../../maxgui/maxgui.gtk3maxgui/tgtktrackbar) | A trackbar |
| [TGTKProgressBar](../../maxgui/maxgui.gtk3maxgui/tgtkprogressbar) | A progress bar |
| [TGTKToolbar](../../maxgui/maxgui.gtk3maxgui/tgtktoolbar) | A Toolbar |
| [TGTKTabber](../../maxgui/maxgui.gtk3maxgui/tgtktabber) | A tabber. |
| [TGTKPanel](../../maxgui/maxgui.gtk3maxgui/tgtkpanel) | A Panel |
| [TGTKDefaultTextArea](../../maxgui/maxgui.gtk3maxgui/tgtkdefaulttextarea) | A text area. |
| [TGTKHTMLView](../../maxgui/maxgui.gtk3maxgui/tgtkhtmlview) | A base type for html view gadgets. |
| [TGTKTextArea](../../maxgui/maxgui.gtk3maxgui/tgtktextarea) | A base type for text area gadgets. |

## Methods

### `Method SetShow:Int(truefalse:Int)`

Show or hide the gadget.

<br/>

### `Method setToolTip:Int(tip:String)`

Set the gadget tooltip.

<br/>

### `Method Activate:Int(cmd:Int)`

Perform an activation command on the gadget.

<br/>

### `Method ClientWidth:Int()`

Return the gadget's client width.

<br/>

### `Method ClientHeight:Int()`

Return the gadget's client height.

<br/>

### `Method State:Int()`

Return the gadget state.

<br/>

### `Method SetProp:Int(value:Int)`

Sets the value on the slider.

<br/>

### `Method GetProp:Int()`

Returns the current slider value.

<br/>

### `Method SetRange:Int(visible:Int, total:Int)`

Sets the slider range.

<br/>

### `Method SetClipboardText(text:String)`

Sets the clipboard with the current text

<br/>

### `Method ClipboardText:String()`

Gets the text from the clipboard

<br/>

## Functions

### `Function OnFocusLost:Int(widget:Byte Ptr, event:Byte Ptr, obj:Object)`

Callback for focus lost.

<br/>

### `Function SetAppIcon(pix:TPixmap)`

Sets the application icon.

Note: Until BRL add app icon functionality, consider this function API volatile.


<br/>

### `Function SetButtonPixmap(gadget:TGadget, pixmap:TPixmap)`

Sets the button image using the specified pixmap.

Note: Until BRL add button image functionality, consider this function API volatile.


<br/>

### `Function GetWindowPointerPos(window:TGadget, x:Int Var, y:Int Var)`

Returns pointer coordinates relative to window.

<br/>

### `Function GetScreenPointerPos(x:Int Var, y:Int Var)`

Returns pointer coordinates relative to the screen.

<br/>

