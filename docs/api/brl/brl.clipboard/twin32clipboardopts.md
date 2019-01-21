---
id: twin32clipboardopts
title: TWin32ClipboardOpts
sidebar_label: TWin32ClipboardOpts
---

Win32 options


## Fields

### `Field maxRetries:Int = 5`

Max number of retries to try to obtain clipboard lock.

If <b>maxRetries</b> is zero, the default value will be used. Specify a negative value for zero retries.


<br/>

### `Field retryDelay:Int = 5`

Delay in ms between retries to obtain clipboard lock.

If <b>retryDelay</b> is zero, the default value will be used. Specify a negative value for no (zero) delay.


<br/>

