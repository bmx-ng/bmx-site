---
id: tmarkdown
title: TMarkdown
sidebar_label: TMarkdown
---

A Markdown text processor.


## Functions

### `Function Parse:Int(renderer:IMDRenderer, text:String, flags:EMDFlags = EMDFlags.DIALECT_COMMONMARK)`

Parses markdown <b>text</b>, feeding parser events into the supplied <b>renderer</b>.

<br/>

### `Function ParseToHtml:Int(text:String, output:TStringBuilder, parserFlags:EMDFlags = EMDFlags.DIALECT_COMMONMARK,..`

Parses markdown <b>text</b>, appending HTML into <b>output</b>.

<br/>

