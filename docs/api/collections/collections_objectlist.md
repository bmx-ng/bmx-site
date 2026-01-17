---
id: collections.objectlist
title: Collections.ObjectList
sidebar_label: Introduction
---


A [TObjectList](../../collections/collections.objectlist/tobjectlist) allows you to conveniently add and remove objects to and from a collection of objects.

It is a [Type](../../brl/brl.blitz/#type) bringing together the memory efficient storage
of arrays and the easy manageability of a [TMap](../../brl/brl.map/tmap) or [TList](../../brl/brl.linkedlist/tlist).

In most cases it is faster than the namend alternatives but of course it 
depends on the way you are using it in your code. So make sure to
benchmark according to your individual use case.

Object lists can replace [TList](../../brl/brl.linkedlist/tlist) easily when used in OOP-style as they share method names.


## Types
| Type | Description |
|---|---|
| [TObjectList](../../collections/collections.objectlist/tobjectlist) | Array-backed Object List |
| [TObjectListEnumerator](../../collections/collections.objectlist/tobjectlistenumerator) | Enumerator Object used by [TObjectList](../../collections/collections.objectlist/tobjectlist) in order to implement [Eachin](../../brl/brl.blitz/#eachin) support. |
| [TObjectListReverseEnumerator](../../collections/collections.objectlist/tobjectlistreverseenumerator) | Enumerator Object used by [TObjectList](../../collections/collections.objectlist/tobjectlist) in order to implement [Eachin](../../brl/brl.blitz/#eachin) support. |

