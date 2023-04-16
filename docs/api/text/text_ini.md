---
id: text.ini
title: Text.Ini
sidebar_label: Introduction
---


Ini files (short for initialization files) are simple text files used to store settings and configurations
for applications. They are organized into sections, each containing key-value pairs known as properties. Ini
files are a popular choice for storing settings because they are easy to read and modify by both humans and programs.

In this introduction, we will discuss the Ini file format in detail, covering its typical use cases,
properties and sections, and how to use the module in BlitzMax to load, save, and edit Ini files.
By the end of this guide, you will have the knowledge to create your own Ini files, either with a separate editor or
using the `text.ini` module in BlitzMax.

## Understanding the Ini File Format

An Ini file is composed of sections, where each section starts with a section name enclosed in square brackets
(e.g., [SectionName]). Underneath each section are properties, which are key-value pairs separated by an equals
sign (=). For example:

```ini
[Settings]
Volume=80
FullScreen=False
Resolution=1920x1080

[UserProfile]
Username=JohnDoe
Email=johndoe@example.com
```

In this example, there are two sections, "Settings" and "UserProfile". The "Settings" section contains three
properties: Volume, FullScreen, and Resolution.

## Using the module

The `text.ini` module provides a simple and efficient way to work with Ini files in BlitzMax.
The following subsections will guide you through loading, saving, and editing Ini files using the module.

### Loading an Ini File

To load an Ini file from disk, use the `Load` function, providing the file path:

```blitzmax
Local iniFile:TIni = TIni.Load("config.ini")
```

Alternatively, to load an Ini file from a [TStream](../../brl/brl.stream/tstream), use the Load function with the stream as the argument:

```blitzmax
Local stream:TStream = ReadFile("config.ini")
Local iniFile:TIni = TIni.Load(stream)
```

### Saving an Ini File

To save an Ini file to disk, use the `Save` method and provide the file path:

```blitzmax
iniFile.Save("config.ini")
```

To save an Ini file to a [TStream](../../brl/brl.stream/tstream), use the `Save` method with the stream as the argument:

```blitzmax
Local stream:TStream = WriteFile("config.ini")
iniFile.Save(stream)
```

### Working with Sections and Properties

To create a new section, use the `AddSection` method:

```blitzmax
Local section:TIniSection = iniFile.AddSection("Settings")
```

To find a section by its name, use the `FindSection` method:

```blitzmax
Local section:TIniSection = iniFile.FindSection("Settings")
```

To add a new property to a section, use the `AddProperty` method:

```blitzmax
section.AddProperty("Volume", "80")
```

To find a property by its name, use the `FindProperty` method:

```blitzmax
Local property:TIniProperty = section.FindProperty("Volume")
```

To get or set a property's value, use the `GetValue` and `SetValue` methods:

```blitzmax
Local volume:Int = Int(property.GetValue())
property.SetValue("85")
```

### Cleaning Up

When you are done working with an Ini file, call the Free method to release any resources used by the [TIni](../../text/text.ini/tini) instance:

```blitzmax
iniFile.Free()
```

Here is a complete example that demonstrates how to create, edit, and save an Ini file using the text.ini module:

```blitzmax
SuperStrict

Framework Text.Ini

' Create a new empty TIni instance
Local iniFile:TIni = New TIni

' Add sections and properties
Local settingsSection:TIniSection = iniFile.AddSection("Settings")
settingsSection.AddProperty("Volume", "80")
settingsSection.AddProperty("FullScreen", "False")
settingsSection.AddProperty("Resolution", "1920x1080")

Local userProfileSection:TIniSection = iniFile.AddSection("UserProfile")
userProfileSection.AddProperty("Username", "JohnDoe")
userProfileSection.AddProperty("Email", "johndoe@example.com")

' Save the Ini file to disk
iniFile.Save("config.ini")

' Load the Ini file from disk
Local loadedIniFile:TIni = TIni.Load("config.ini")

' Retrieve and modify a property
Local section:TIniSection = loadedIniFile.FindSection("Settings")
Local property:TIniProperty = section.FindProperty("Volume")
Local volume:Int = Int(property.GetValue())
property.SetValue(String(volume + 5))

' Save the modified Ini file to disk
loadedIniFile.Save("config_modified.ini")

' Clean up
iniFile.Free()
loadedIniFile.Free()
```

This example creates a new Ini file with two sections and several properties, saves it to disk, loads it back,
modifies a property, and then saves the modified Ini file to a new file. The result is two Ini files: "config.ini"
containing the original settings, and "config_modified.ini" containing the modified settings.



## Types
| Type | Description |
|---|---|
| [TIni](../../text/text.ini/tini) | Represents the contents of an ini file. |
| [TIniSection](../../text/text.ini/tinisection) | An ini section. |
| [TIniProperty](../../text/text.ini/tiniproperty) | An ini property, with a name and value. |

## Consts

### `Const INI_GLOBAL_SECTION:Int = 0`

The index that indicates the global section.

<br/>

