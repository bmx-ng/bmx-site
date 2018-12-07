---
id: tsdlsensor
title: TSDLSensor
sidebar_label: TSDLSensor
---

A Sensor


## Methods

### `Method GetName:String()`

Gets the implementation dependent name of a sensor.

<br/>

### `Method GetType:Int()`

Gets the type of a sensor.

This can be called before any sensors are opened.


<br/>

### `Method GetNonPortableType:Int()`

Gets the platform dependent type of a sensor.

This can be called before any sensors are opened.


<br/>

### `Method GetInstanceID:Int()`

Gets the instance ID of a sensor.

This can be called before any sensors are opened.


<br/>

### `Method GetData:Int(data:Float Ptr, numValues:Int)`

Gets the current state of an opened sensor.

The number of values and interpretation of the data is sensor dependent.


<br/>

### `Method Close()`

Closes the sensor.

<br/>

## Functions

### `Function NumSensors:Int()`

Counts the number of sensors attached to the system right now.

<br/>

### `Function GetDeviceName:String(deviceIndex:Int)`

Gets the implementation dependent name of a sensor.

This can be called before any sensors are opened.


<br/>

### `Function GetDeviceType:Int(deviceIndex:Int)`

Gets the type of a sensor.

This can be called before any sensors are opened.


<br/>

### `Function GetDeviceNonPortableType:Int(deviceIndex:Int)`

Gets the platform dependent type of a sensor.

This can be called before any sensors are opened.


<br/>

### `Function GetDeviceInstanceID:Int(deviceIndex:Int)`

Gets the instance ID of a sensor.

This can be called before any sensors are opened.


<br/>

### `Function FromInstanceID:TSDLSensor(instanceID:Int)`

Returns the TSDLSensor associated with an instance id.

<br/>

### `Function Open:TSDLSensor(deviceIndex:Int)`

Opens a sensor for use.

The index passed as an argument refers to the N'th sensor on the system.


<br/>

### `Function Update()`

Updates the current state of the open sensors.

This is called automatically by the event loop if sensor events are enabled.
This needs to be called from the thread that initialized the sensor subsystem.


<br/>

