---
id: egloboptions
title: EGlobOptions
sidebar_label: EGlobOptions
---

File globbing options



Flags that control the behavior of file globbing and pattern matching.
Multiple flags can be combined using the bitwise `|` operator.

| Flag | Description |
|------|-------------|
| None | No special options. |
| CaseFold | Perform case-insensitive matching. |
| Period | Allow wildcard patterns to match filenames beginning with a dot (`.`). |
| GlobStar | Enable support for the `**` globstar operator to match zero or more directory levels. |
| NoEscape | Disable backslash escaping of metacharacters in the glob pattern. |
| NoSort | Do not sort the resulting list of matched paths. |
| Mark | Append a trailing slash (`/`) to directory matches in the result. |
| OnlyDir | Include only directory matches in the result. |
| NoDir | Exclude directory matches from the result. |



