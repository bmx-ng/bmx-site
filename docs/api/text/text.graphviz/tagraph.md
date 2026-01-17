---
id: tagraph
title: TAGraph
sidebar_label: TAGraph
---

A Graphviz graph.


A graph is the fundamental data structure representing a set of nodes
and the connections (edges) between them. It may be directed or undirected, and
can contain attributes that influence layout, style, and labeling. In addition to
nodes and edges, graphs can also include subgraphs and clusters to group related
elements, helping to produce clear and visually informative diagrams when rendered
by Graphviz.


## Methods

### `Method IsDirected:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the graph is directed.

<br/>

### `Method IsUndirected:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the graph is undirected.

<br/>

### `Method IsStrict:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the graph is a strict graph.

<br/>

### `Method IsSimple:Int()`

Returns [True](../../../brl/brl.blitz/#true) if the graph is strict with no loops.

<br/>

### `Method Unflatten(maxMinlen:Int = 0, doFans:Int = False, chainLimit:Int = 0)`

Used to improve the aspect ratio of graphs having many leaves or disconnected nodes.

The usual layout for such a graph is generally very wide or tall.
Unflatten inserts invisible edges or adjusts the minlen on edges to improve layout compaction.


<br/>

## Functions

### `Function FromString:TAGraph(text:String)`

Creates a new graph from a string.

<b>text</b> is the string representation of the graph.


<br/>

