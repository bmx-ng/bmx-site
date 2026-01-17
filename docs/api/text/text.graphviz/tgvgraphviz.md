---
id: tgvgraphviz
title: TGVGraphviz
sidebar_label: TGVGraphviz
---

A Graphviz context.





## Methods

### `Method Layout:Int(graph:TAGraph, layout:String)`

Lays out the graph.

<br/>

### `Method ToSvg:String(graph:TAGraph)`

Converts the graph to SVG.

<br/>

### `Method ToDot:String(graph:TAGraph)`

Produces output in the DOT language.

It reproduces the input, along with layout information for the graph. In particular, a bb attribute is attached to the graph,
specifying the bounding box of the drawing. If the graph has a label, its position is specified by the lp attribute.

Each node gets pos, width and the record rectangles are given in the rects attribute. If the node is a polygon and the vertices
attribute is defined, this attribute contains the vertices of the node.

Every edge is assigned a pos attribute, and if the edge has a label, the label position is given in lp.


<br/>

### `Method ToXDot:String(graph:TAGraph)`

Produces output in the DOT language.

It extends the <b>dot</b> format by providing much more detailed information about how graph components are drawn.
It relies on additional attributes for nodes, edges and graphs.


<br/>

### `Method Prettify:String(graph:TAGraph)`

Produces a pretty printed version of the input, with no layout performed.

<br/>

### `Method ToJson0:String(graph:TAGraph)`

Produces output in JSON format that contains the same information produced by [ToDot](../../../text/text.graphviz/tgvgraphviz/#method-todotstringgraphtagraph)

Assumes the graph has been processed by one of the layout algorithms.


<br/>

### `Method ToJson:String(graph:TAGraph)`

Produces output in JSON format that contains the same information produced by [ToXDot](../../../text/text.graphviz/tgvgraphviz/#method-toxdotstringgraphtagraph)

Assumes the graph has been processed by one of the layout algorithms.


<br/>

### `Method ToDotJson:String(graph:TAGraph)`

Produces JSON output similar to [ToJson0](../../../text/text.graphviz/tgvgraphviz/#method-tojson0stringgraphtagraph), except it only uses the content of the graph on input.

Does not assume that the graph has been processed by any layout algorithm, and the only xdot information appearing in the
output was in the original input file.


<br/>

### `Method ToXDotJson:String(graph:TAGraph)`

Produces JSON output similar to [ToJson](../../../text/text.graphviz/tgvgraphviz/#method-tojsonstringgraphtagraph), except it only uses the content of the graph on input.

Does not assume that the graph has been processed by any layout algorithm, and the only xdot information appearing in the
output was in the original input file.


<br/>

### `Method ToPlain:String(graph:TAGraph)`

Produces output using a simple, line-based language.

<br/>

### `Method ToPlainExt:String(graph:TAGraph)`

Produces output using a simple, line-based language.

On edges, it also provides port names on head and tail nodes when applicable.
see https://graphviz.org/docs/outputs/plain/


<br/>

### `Method RenderToString:String(graph:TAGraph, format:String)`

Produces output in the form of a text string.

The output is in the format specified by <b>format</b>.

Note that this method assumes the specified format is a text-based format.


<br/>

### `Method Free()`

Frees the context.

<br/>

