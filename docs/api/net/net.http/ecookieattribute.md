---
id: ecookieattribute
title: ECookieAttribute
sidebar_label: ECookieAttribute
---

Cookie attributes


Enumeration of standard cookie attributes.

| Attribute | Description |
|-----------|-------------|
| Comment | The Comment attribute is an optional attribute that provides a description of the cookie's purpose. It is primarily intended for human users and is not used by browsers for cookie management. |
| Domain | The Domain attribute specifies the domain for which the cookie is valid. If not specified, it defaults to the host of the current document URL, not including subdomains. If specified, it must start with a dot (e.g., .example.com) to allow subdomains to access the cookie. |
| Expires | The Expires attribute defines the date and time when the cookie will expire. After this date, the cookie will no longer be sent by the browser. The date should be in GMT format. |
| HttpOnly | The HttpOnly attribute is a security feature that prevents client-side scripts from accessing the cookie. This helps mitigate the risk of cross-site scripting (XSS) attacks. |
| Max-Age | The Max-Age attribute specifies the maximum age of the cookie in seconds. After this time, the cookie will expire. If both Expires and Max-Age are set, Max-Age takes precedence. |
| Path | The Path attribute indicates the URL path that must exist in the requested URL for the browser to send the Cookie header. If not specified, it defaults to the path of the current document URL. |
| SameSite | The SameSite attribute is used to control whether cookies are sent with cross-site requests. It can have three values: Strict, Lax, or None. This attribute helps prevent cross-site request forgery (CSRF) attacks. |
| Secure | The Secure attribute indicates that the cookie should only be sent over secure (HTTPS) connections. This helps protect the cookie from being intercepted during transmission. |
| Partitioned | The Partitioned attribute is used to indicate that the cookie is partitioned by the top-level site, meaning it is isolated to the context of the top-level site and cannot be accessed by third-party contexts. This enhances privacy by preventing cross-site tracking. |



