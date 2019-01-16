---
id: tjsonobject
title: TJSONObject
sidebar_label: TJSONObject
---

A JSON object is a dictionary of key-value pairs, where the key is a Unicode string and the value is any JSON value.


## Methods

### `Method Create:TJSONObject()`

Creates a new TJSONObject.

<br/>

### `Method Size:Int()`

Returns the number of elements in the object.

<br/>

### `Method Get:TJSON(key:String)`

Gets a value corresponding to key from the object.

#### Returns
Null if key is not found or on error.


<br/>

### `Method Set:Int(key:String, value:TJSON)`

Sets the value of key to value in the object.

If there already is a value for key, it is replaced by the new value.


#### Returns
0 on success and -1 on error.


<br/>

### `Method Set:Int(key:String, value:String)`

Sets the value of key To the [String](../../../brl/brl.blitz/#string) value.

If there already is a value for key, it is replaced by the new value.


#### Returns
0 on success and -1 on error.


<br/>

### `Method Set:Int(key:String, value:Int)`

Sets the value of key to the [Int](../../../brl/brl.blitz/#int) value.

If there already is a value for key, it is replaced by the new value.


#### Returns
0 on success and -1 on error.


<br/>

### `Method Set:Int(key:String, value:Short)`

Sets the value of key to the [Short](../../../brl/brl.blitz/#short) value.

If there already is a value for key, it is replaced by the new value.


#### Returns
0 on success and -1 on error.


<br/>

### `Method Set:Int(key:String, value:Byte)`

Sets the value of key to the [Byte](../../../brl/brl.blitz/#byte) value.

If there already is a value for key, it is replaced by the new value.


#### Returns
0 on success and -1 on error.


<br/>

### `Method Set:Int(key:String, value:Long)`

Sets the value of key to the [Long](../../../brl/brl.blitz/#long) value.

If there already is a value for key, it is replaced by the new value.


#### Returns
0 on success and -1 on error.


<br/>

### `Method Set:Int(key:String, value:UInt)`

Sets the value of key to the [UInt](../../../brl/brl.blitz/#uint) value.

If there already is a value for key, it is replaced by the new value.


#### Returns
0 on success and -1 on error.


<br/>

### `Method Set:Int(key:String, value:ULong)`

Sets the value of key to the [ULong](../../../brl/brl.blitz/#ulong) value.

If there already is a value for key, it is replaced by the new value.


#### Returns
0 on success and -1 on error.


<br/>

### `Method Set:Int(key:String, value:Size_T)`

Sets the value of key to the [Size_t](../../../brl/brl.blitz/#size-t) value.

If there already is a value for key, it is replaced by the new value.


#### Returns
0 on success and -1 on error.


<br/>

### `Method Set:Int(key:String, value:Float)`

Sets the value of key to the [Float](../../../brl/brl.blitz/#float) value.

If there already is a value for key, it is replaced by the new value.


#### Returns
0 on success and -1 on error.


<br/>

### `Method Set:Int(key:String, value:Double)`

Sets the value of key to the [Double](../../../brl/brl.blitz/#double) value.

If there already is a value for key, it is replaced by the new value.


#### Returns
0 on success and -1 on error.


<br/>

### `Method Del:Int(key:String)`

Deletes key from the Object If it exists.

#### Returns
0 on success, or -1 if key was not found.


<br/>

### `Method Clear:Int()`

Removes all elements from the object.

#### Returns
0 on success, -1 otherwise.


<br/>

### `Method Update:Int(other:TJSONObject)`

Updates the object with the key-value pairs from <b>other</b>, overwriting existing keys.

#### Returns
0 on success or -1 on error.


<br/>

### `Method UpdateExisting:Int(other:TJSONObject)`

Updates the object with the key-value pairs from <b>other</b>, but only the values of existing keys are updated.

No new keys are created.


#### Returns
0 on success or -1 on error.


<br/>

### `Method UpdateMissing:Int(other:TJSONObject)`

Updates the object with the key-value pairs from <b>other</b>, but only new keys are created.

The value of any existing key is not changed.


#### Returns
0 on success or -1 on error.


<br/>

### `Method GetString:String(key:String)`

Gets a String value corresponding to key from the object.

#### Returns
Null if key is not found, the value is not a String, or on error.


<br/>

### `Method GetInteger:Long(key:String)`

Gets an Integer (Long) value corresponding to key from the object.

#### Returns
Null if key is not found, the value is not an Integer, or on error.


<br/>

### `Method GetReal:Double(key:String)`

Gets a Real (Double) value corresponding to key from the object.

#### Returns
Null if key is not found, the value is not a Real, or on error.


<br/>

