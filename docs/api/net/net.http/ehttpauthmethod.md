---
id: ehttpauthmethod
title: EHttpAuthMethod
sidebar_label: EHttpAuthMethod
---

Authentication methods for HTTP requests.


These flags can be used to specify the authentication methods to be used for HTTP requests.
Can be combined using bitwise `|` operator.

| Flag | Description |
|------|-------------|
| None | No authentication. |
| Basic | Basic authentication. |
| Digest | Digest authentication. |
| Negotiate | Negotiate authentication (SPNEGO/Kerberos). |
| NtLm | NTLM authentication. |
| DigestIE | Digest authentication for Internet Explorer. |
| Bearer | Bearer token authentication (e.g., OAuth). |
| AwsSigV4 | AWS Signature Version 4 authentication. |
| Only | This is a meta symbol. OR this value together with a single specific auth value to force it to probe for unrestricted auth and if not, only that single auth algorithm is acceptable. |
| Any | Allows any authentication method. Uses the one it finds most secure. |
| AnySafe | Allows any safe authentication method (excludes Basic). Uses the one it finds most secure. |



