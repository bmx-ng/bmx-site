---
id: text.markdown
title: Text.Markdown
sidebar_label: Introduction
---


Can either use a custom renderer, or generate HTML directly.


## Types
| Type | Description |
|---|---|
| [TMDHtmlTocOptions](../../text/text.markdown/tmdhtmltocoptions) | Html table of contents options. |
| [TMarkdown](../../text/text.markdown/tmarkdown) | A Markdown text processor. |
| [TMDBlock](../../text/text.markdown/tmdblock) | A markdown block. |
| [TMDBlockDoc](../../text/text.markdown/tmdblockdoc) | A markdown block document body |
| [TMDBlockQuote](../../text/text.markdown/tmdblockquote) | A markdown block block quote |
| [TMDBlockUL](../../text/text.markdown/tmdblockul) | A markdown block unordered list |
| [TMDBlockOL](../../text/text.markdown/tmdblockol) | A markdown block ordered list |
| [TMDBlockLI](../../text/text.markdown/tmdblockli) | A markdown block list item |
| [TMDBlockHR](../../text/text.markdown/tmdblockhr) | A markdown block thematic break. |
| [TMDBlockH](../../text/text.markdown/tmdblockh) | A markdown header block. |
| [TMDBlockCode](../../text/text.markdown/tmdblockcode) | A markdown code block. |
| [TMDBlockHtml](../../text/text.markdown/tmdblockhtml) | A markdown HTML block. |
| [TMDBlockP](../../text/text.markdown/tmdblockp) | A markdown paragraph block. |
| [TMDBlockTable](../../text/text.markdown/tmdblocktable) | A markdown table block. |
| [TMDBlockTHead](../../text/text.markdown/tmdblockthead) | A markdown table head block. |
| [TMDBlockTBody](../../text/text.markdown/tmdblocktbody) | A markdown table body block. |
| [TMDBlockTR](../../text/text.markdown/tmdblocktr) | A markdown table row block. |
| [TMDBlockTH](../../text/text.markdown/tmdblockth) | A markdown table header cell block |
| [TMDBlockTD](../../text/text.markdown/tmdblocktd) | A markdown table cell block |
| [TMDSpan](../../text/text.markdown/tmdspan) | A markdown span. |
| [TMDSpanEM](../../text/text.markdown/tmdspanem) | A markdown emphasize span. |
| [TMDSpanStrong](../../text/text.markdown/tmdspanstrong) | A markdown strong span. |
| [TMDSpanA](../../text/text.markdown/tmdspana) | A markdown hyperlink span. |
| [TMDSpanImg](../../text/text.markdown/tmdspanimg) | A markdown image span. |
| [TMDSpanCode](../../text/text.markdown/tmdspancode) | A markdown code span. |
| [TMDSpanDel](../../text/text.markdown/tmdspandel) | A markdown strikethrough span. |
| [TMDSpanLatexMath](../../text/text.markdown/tmdspanlatexmath) | A markdown latex math span. |
| [TMDSpanLatexMathDisplay](../../text/text.markdown/tmdspanlatexmathdisplay) | A markdown latex math display span. |
| [TMDSpanWikiLink](../../text/text.markdown/tmdspanwikilink) | A markdown wikilink span. |
| [TMDSpanU](../../text/text.markdown/tmdspanu) | A markdown underline span. |

## Interfaces
| Interface | Description |
|---|---|
| [IMDRenderer](../../text/text.markdown/imdrenderer) | A renderer for markdown parser events. |

## Structs
| Struct | Description |
|---|---|
| [SMDAttribute](../../text/text.markdown/smdattribute) | A markdown attribute. |

## Methods

### `Method Text:Int(lang:String, info:String[], text:String, output:TStringBuilder) Abstract`

Provides the text for a code block.

If the code is processed, the output should be appended to <b>output</b>.


#### Returns
[True](../../brl/brl.blitz/#true) if the code was processed, [False](../../brl/brl.blitz/#false) if the default code block rendering should be used.


<br/>

