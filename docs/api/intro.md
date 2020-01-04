---
id: intro
title: Introduction
sidebar_label: Introduction
---

The BlitzMax APIs are a collection of core modules designed to help you build
your next, great BlitzMax application.

They include Modules for things such as image loading, audio handling,
fast 2D graphics, lua integration, threading, and window-based user interfaces.

They are split into what are known as `modscopes` in BlitzMax parlance, or
perhaps more familiarly as `namespaces`.

The Blitz Runtime Libraries (`BRL`), contain the core of BlitzMax functionality that you
are likely to use from day to day.

`MaxGUI` provides access to native windowing toolkits, such as Cocoa on macOS
and GTK+3 on Linux, allowing you to build complex user interface-driven
applications.

The `PUB` modscope generally contains third party libraries and platform-specific
helpers. These are considered more low-level, and generally you won't use
these modules directly.

The `SDL` modscope can be used as a replacement graphics and system-integration
backend for the default modules provided by `BRL`. It is optional on the main
desktop platforms, but generally required on the other targets (iOS, Android, rpi, NX).
It is a full implementation of SDL in BlitzMax, including SDL's Render and Window subsystems,
which can be used directly if preferred.

The `Steam` modscope is for integrating your game with Steam, providing access to all the commonly used Steam APIs,
such as friends, leader boards and Steam Workshop.
