---
id: rpi
title: Raspberry Pi
sidebar_label: Raspberry Pi
---

## Introduction

BlitzMax for the Raspberry Pi allows you to build Blitzmax applications and games on your favourite credit card sized development platform.

## What's in the box?

BlitzMax for the Raspberry Pi ships with a standard set of applications and utilities for programming with and compiling your BlitzMax programs, and uses the SDL backend for graphics rendering.

Similar to developing on desktop Linux, you will probably need to install some extra developer tools and packages before diving into BlitzMax development on the Raspberry Pi.

## Installation

BlitzMax for the Raspberry Pi doesn't require installing in any particular location.
Simply unzip the release into a folder on your system, and the MaxIDE editor
should be ready to use.

Since BlitzMax is essentially self-contained, it's possible to have multiple copies of BlitzMax installed
in different locations on your computer. This is particularly useful when trying out new releases,
or simply for working on your own modules.

### Configuring your Dependencies

The following is a list of the packages that are required to be installed in order to build all the modules that ship with BlitzMax.

We've split requirements into two parts - the base set of packages you will
need in order to build BlitzMax console and MaxGUI apps, and those packages required
for graphics based apps and games using the SDL backend.

If you don't intend to create Open GL based applications, you can skip the SDL requirements.

| Requirement  | Command |
|---|---|
| Base  | ```sudo apt install g++ libglu1-mesa-dev libasound2-dev libfreetype6-dev libxpm-dev libxft-dev libxxf86vm-dev libpulse-dev libopenal-dev libwebkit2gtk-4.0-dev libgtk-3-dev``` |
| SDL  | `sudo apt install libx11-dev libxext-dev libxrandr-dev libxcursor-dev libxi-dev libxinerama-dev libxss-dev libgl1-mesa-dev libesd0-dev libdbus-1-dev libudev-dev libaudio-dev libgles2-mesa-dev libgbm-dev libdrm-dev`  |

## Compilation Times

Although BlitzMax applications run at native speeds, building applications (and modules in particular) can be a time-consuming process, depending on which version of the Raspberry Pi you are developing on. Obviously, the faster the CPU, the more quickly your work will compile.

Yes, you can develop directly on a Raspberry Pi Zero, but you will spend a lot of time waiting for things to build. For the best experience, we recommend working on the most recent hardware.

