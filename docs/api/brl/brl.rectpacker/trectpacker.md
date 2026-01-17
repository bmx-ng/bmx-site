---
id: trectpacker
title: TRectPacker
sidebar_label: TRectPacker
---

Packs rectangles into sheets.


The packer provides a number of settings that can be used to control how the rectangles are packed.
The rectangles are added to the packer using the [Add](../../../brl/brl.rectpacker/trectpacker/#method-addwidthint-heightint-idint) method, and then the [Pack](../../../brl/brl.rectpacker/trectpacker/#method-packtpackedsheet) method is called to pack them into sheets.
The packer will return an array of [TPackedSheet](../../../brl/brl.rectpacker/tpackedsheet) objects, each of which contains the rectangles that have been packed into it.
An <b>id</b> can be assigned to each rectangle, which can be used to identify the rectangle in the packed sheets.


## Fields

### `Field packingMethod:EPackingMethod = EPackingMethod.Best`

The packing method to use.

<br/>

### `Field maxSheets:Int = 1`

The maximum number of sheets to produce.

If the packer is unable to fit all the rectangles into the specified number of sheets, those that don't fit will be discarded.


<br/>

### `Field powerOfTwo:Int = True`

Whether to pack into power-of-two sized sheets.

If this is set to [True](../../../brl/brl.blitz/#true), the width and height of the sheets will be rounded up to the nearest power of two.
This is useful for creating sheets that are intended to be used for creating textures.


<br/>

### `Field square:Int = False`

Whether to pack into square sheets.

If this is set to [True](../../../brl/brl.blitz/#true), the width and height of the sheets will be the same.


<br/>

### `Field allowRotate:Int = False`

Whether to allow rectangles to be rotated.

If this is set to [True](../../../brl/brl.blitz/#true), the packer may attempt to rotate rectangles to help fit them into the sheets.


<br/>

### `Field alignWidth:Int = False`

Whether to align the width of the rectangles.

If this is set to [True](../../../brl/brl.blitz/#true), the packer will attempt to align the width of the rectangles to the width of the sheet.
This can help to reduce the amount of wasted space in the sheet.


<br/>

### `Field borderPadding:Int`

The amount of padding to add around individual rects.

<br/>

### `Field sheetPadding:Int`

The amount of padding to add around the edge of the sheet.

<br/>

### `Field overAllocate:Int`

The amount to over-allocate the sheet by.

This is useful if you want to add a border around the sheet, or if you want to add some padding around the rectangles.


<br/>

### `Field minWidth:Int`

The minimum width of the sheets.

<br/>

### `Field minHeight:Int`

The minimum height of the sheets.

<br/>

### `Field maxWidth:Int`

The maximum width of the sheets.

<br/>

### `Field maxHeight:Int`

The maximum height of the sheets.

<br/>

## Methods

### `Method Add(width:Int, height:Int, id:Int)`

Adds a rectangle with the given <b>id</b> to the packer.

<br/>

### `Method Pack:TPackedSheet[]()`

Packs the rectangles into sheets, based on the settings of the packer.

This method will return an array of [TPackedSheet](../../../brl/brl.rectpacker/tpackedsheet) objects, each of which contains the rectangles that have been packed into it.
Any rectangles that don't fit into the sheets will be discarded, and not be included in the returned array.


<br/>

