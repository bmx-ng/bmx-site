---
id: linux
title: Linux
sidebar_label: Linux
---

## Introduction

BlitzMax for Linux allows you to build native 32-bit or 64-bit applications for the Linux platform.

## What's in the box?

BlitzMax for Linux ships with a standard set of applications and utilities for programming with and compiling your
BlitzMax programs.

In addition, you will probably need to install some Linux developer tools and packages.

## Installation

BlitzMax for Linux doesn't require installing in any particular location.
Simply unzip the release into a folder on your Linux system, and the MaxIDE editor
should be ready to use.

Since BlitzMax is essentially self-contained, it's possible to have multiple copies of BlitzMax installed
in different locations on your computer. This is particularly useful when trying out new releases,
or simply for working on your own modules.

### Configuring your Linux Dependencies

Every Linux distribution is not quite the same. Often they have different package managers
and more often than not, a different set of default packages.

Depending on your version of Linux and how many additional packages you may
or may not have already installed, you will probably need to configure your
Linux with some additional packages in order to compile your BlitzMax apps.

The following is a list of Linux distributions we've tested against, and the packages that were required
to be installed. We've split requirements into two parts - the base set of packages you will
need in order to build BlitzMax graphics and MaxGUI apps, and those packages required
for the SDL backend.

> The samples are configured to build against the SDL backend by default.

#### Ubuntu (18.04)

| Requirement  | Command |
|---|---|
| Base  | ```sudo apt install g++ libglu1-mesa-dev libasound2-dev libfreetype6-dev libxpm-dev libxft-dev libxxf86vm-dev libpulse-dev libopenal-dev libwebkit2gtk-4.0-dev libgtk-3-dev``` |
| SDL  | `sudo apt install libx11-dev libxext-dev libxrandr-dev libxcursor-dev libxi-dev libxinerama-dev libxss-dev libgl1-mesa-dev libesd0-dev libdbus-1-dev libudev-dev`  |

#### Manjaro (18.04)

| Requirement | Command |
|---|---|
| Base  | `sudo pacman -S gcc` |
| SDL  | No further action required.  |

#### openSUSE ( Tumbleweed )

| Requirement | Command |
|---|---|
| Base  | `sudo zypper install gcc-c++ libXxf86vm-devel webkit2gtk3-devel alsa-lib-devel  freetype-devel  libpulse-devel glu-devel` |
| SDL   | `sudo zypper install libudev-devel libXss-devel` |

#### Fedora (30)

| Requirement | Command |
|---|---|
| Base  | `sudo dnf install gcc-c++ alsa-lib-devel pulseaudio-libs-devel freetype-devel mesa-libGLU-devel gtk3-devel webkit2gtk3-devel` |
| SDL   | `sudo dnf install dbus-devel libudev-devel libXScrnSaver-devel` |

## 64 or 32-bit

It is assumed that you will be targeting the same architecture as the version of Linux you are building upon. So for example,
if you are using 64-bit Linux, you are likely to be building 64-bit applications.

While it is possible to build 32-bit applications on 64-bit Linux, we do not encourage it as you may often find there are
various dependency issues when trying to get the development environments configured.

Your mileage may vary.
