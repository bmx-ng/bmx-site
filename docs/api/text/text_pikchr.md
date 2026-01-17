---
id: text.pikchr
title: Text.Pikchr
sidebar_label: Introduction
---


Pikchr (pronounced "picture") is a PIC-like markup language for diagrams in technical documentation.
Pikchr is produces SVG output, and can be used in fenced code blocks of Markdown when supported by the renderer. The [Text.Markdown](../text/text_markdown.md) renderer,
for example, can be used to embed output in its generated HTML.

Here's a simple Hello World example:
```
     line; box "Hello," "World!"; arrow
```
which produces the following output:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:260px;" viewBox="0 0 260.64 76.32">
<path d="M2.16,38.16L74.16,38.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M74.16,74.16L182.16,74.16L182.16,2.16L74.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="128.16" y="28.08" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Hello,</text>
<text x="128.16" y="48.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">World!</text>
<polygon points="254.16,38.16 242.64,42.48 242.64,33.84" style="fill:rgb(0,0,0)"></polygon>
<path d="M182.16,38.16L248.4,38.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

## About Pikchr Scripts

Pikchr is designed to be simple. A Pikchr script is just a sequence of Pikchr statements, separated by either new-lines or semicolons.
The "Hello, world!" example above used three statements, a "line", a "box", and an "arrow", each separated by semicolons.

Whitespace (other than newlines) and comments are ignored. Comments in pikchr can be in the style of TCL, C, or C++.
That is to say, comments consist of a "`#`" or "`//`" and include all characters up to but not including the next new-line, or all text
in between "`/*`" and the first following "`*/`". The example script above could be rewritten with each statement on a separate line,
and with comments describing what each statement is doing:
```
    # The first component of the drawing is a line
    line
    // The second component is a box with text "Hello, World!"
    box "Hello," "World!"
    /* Finally an arrow */
    arrow
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:260px;" class="pikchr" viewBox="0 0 260.64 76.32">
<path d="M2.16,38.16L74.16,38.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M74.16,74.16L182.16,74.16L182.16,2.16L74.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="128.16" y="28.08" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Hello,</text>
<text x="128.16" y="48.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">World!</text>
<polygon points="254.16,38.16 242.64,42.48 242.64,33.84" style="fill:rgb(0,0,0)"></polygon>
<path d="M182.16,38.16L248.4,38.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

Remember that new-lines separate statements. If you have a long statement that needs to be split into multiple lines, escape the newline with a
backslash character and the new-line will be treated as any other space:
```
    line
    box \
       "Hello," \
       "World!"
    arrow
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:260px;" class="pikchr" viewBox="0 0 260.64 76.32">
<path d="M2.16,38.16L74.16,38.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M74.16,74.16L182.16,74.16L182.16,2.16L74.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="128.16" y="28.08" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Hello,</text>
<text x="128.16" y="48.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">World!</text>
<polygon points="254.16,38.16 242.64,42.48 242.64,33.84" style="fill:rgb(0,0,0)"></polygon>
<path d="M182.16,38.16L248.4,38.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

So, a Pikchr script is just a list of statements, but what is a statement?

## Pikchr Statements

Most statements are descriptions of a single graphic object that becomes part of the diagram. The first token of the statement is the object class-name.

The following classes are currently supported:
```
box "box"
circle "circle" at 1 right of previous
ellipse "ellipse" at 1 right of previous
oval "oval" at 1 right of previous
cylinder "cylinder" at .8 below first box
file "file" at 1 right of previous
diamond "diamond" at 1 right of previous
line "line" above from .8 below last cylinder.w
arrow "arrow" above from 1 right of previous
spline from previous+(1.8cm,-.2cm) \
   go right .15 then .3 heading 30 then .5 heading 160 then .4 heading 20 \
   then right .15
"spline" at 3rd vertex of previous
dot at .6 below last line
text "dot" with .s at .2cm above previous.n
arc from 1 right of previous dot
text "arc" at (previous.start, previous.end)
text "text" at 1.3 right of start of previous arc
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:562px;" viewBox="0 0 562.32 372.24">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="56.16" y="38.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">box</text>
<circle cx="200.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="200.16" y="38.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">circle</text>
<ellipse cx="344.16" cy="38.16" rx="54" ry="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></ellipse>
<text x="344.16" y="38.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ellipse</text>
<path d="M452.16,74.16L524.16,74.16A36 36 0 0 0 560.16 38.16A36 36 0 0 0 524.16 2.16L452.16,2.16A36 36 0 0 0 416.16 38.16A36 36 0 0 0 452.16 74.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="488.16" y="38.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">oval</text>
<path d="M2.16,128.16L2.16,178.56A54 10.8 0 0 0 110.16 178.56L110.16,128.16A54 10.8 0 0 0 2.16 128.16A54 10.8 0 0 0 110.16 128.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="56.16" y="161.46" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">cylinder</text>
<path d="M164.16,207.36L236.16,207.36L236.16,120.96L214.56,99.36L164.16,99.36Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M214.56,99.36L214.56,120.96L236.16,120.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="200.16" y="153.36" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">file</text>
<path d="M272.16,153.36L344.16,207.36L416.16,153.36L344.16,99.36Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="344.16" y="153.36" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">diamond</text>
<path d="M2.16,268.56L74.16,268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="38.16" y="256.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">line</text>
<polygon points="254.16,268.56 242.64,272.88 242.64,264.24" style="fill:rgb(0,0,0)"></polygon>
<path d="M182.16,268.56L248.4,268.56" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="218.16" y="256.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">arrow</text>
<path d="M320.207,279.899 L 331.007,279.899 Q 341.807,279.899 352.607,261.192 Q 363.407,242.486 375.72,276.315 Q 388.033,310.144 397.883,283.081 Q 407.733,256.018 418.533,256.018 L 429.333,256.018" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="363.407" y="242.486" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">spline</text>
<circle cx="38.16" cy="354.96" r="2.16" style="fill:rgb(0,0,0);stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="38.16" y="328.501" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">dot</text>
<path d="M182.16,354.96Q218.16,354.96 218.16,318.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="182.16" y="318.96" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">arc</text>
<text x="369.36" y="354.96" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">text</text>
</svg>

A statement can be only the class-name and nothing else, but the class-name is usually followed by one or more "attributes". Attributes are used to
modify the appearance of the object, or to position the object relative to prior objects.

So to revisit the "Hello, World" demonstration script above, we see that that script contains three object descriptions:

1. A "line" object with no attributes (meaning that the line is shown with no changes to its default appearance).
2. A "box" object with two string literal attributes. The string literal attributes cause the corresponding strings to be drawn inside the box.
3. An "arrow" object with no attributes.

## Layout

By default, objects are stacked beside each other from left to right. The Pikchr layout engine keeps track of the "layout direction", which can be one of "right", "down", "left", or "up". The layout direction defaults to "right", but you can change it using a statement which consists of just the name of the new direction. So, if we insert the "down" statement in front of our test script, like this:
```
    down
    line
    box  "Hello,"  "World!"
    arrow
```

Then the objects are stacked moving downward:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:112px;max-height:224px;" viewBox="0 0 112.32 224.64">
<path d="M56.16,2.16L56.16,74.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M2.16,146.16L110.16,146.16L110.16,74.16L2.16,74.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="56.16" y="100.08" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Hello,</text>
<text x="56.16" y="120.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">World!</text>
<polygon points="56.16,218.16 51.84,206.64 60.48,206.64" style="fill:rgb(0,0,0)"></polygon>
<path d="M56.16,146.16L56.16,212.4" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

Or, you can change the layout direction to "left":
```
    left
    line
    box  "Hello,"  "World!"
    arrow
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:260px;" viewBox="0 0 260.64 76.32">
<path d="M258.48,38.16L186.48,38.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M78.48,74.16L186.48,74.16L186.48,2.16L78.48,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="132.48" y="28.08" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Hello,</text>
<text x="132.48" y="48.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">World!</text>
<polygon points="6.48,38.16 18,33.84 18,42.48" style="fill:rgb(0,0,0)"></polygon>
<path d="M78.48,38.16L12.24,38.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

Or to "up":
```
    up
    line
    box  "Hello,"  "World!"
    arrow
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:112px;" viewBox="0 0 112.32 224.64">
<path d="M56.16,222.48L56.16,150.48" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M2.16,150.48L110.16,150.48L110.16,78.48L2.16,78.48Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="56.16" y="104.4" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Hello,</text>
<text x="56.16" y="124.56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">World!</text>
<polygon points="56.16,6.48 60.48,18 51.84,18" style="fill:rgb(0,0,0)"></polygon>
<path d="M56.16,78.48L56.16,12.24" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

It is common to stack line objects (lines, arrows, splines) against block objects (boxes, circles, ovals, etc.), but this is not required.
You can stack a bunch of block objects together. For example:
```
    box; circle; cylinder
```

Yields:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:292px;" viewBox="0 0 292.32 76.32">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="146.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M182.16,12.96L182.16,63.36A54 10.8 0 0 0 290.16 63.36L290.16,12.96A54 10.8 0 0 0 182.16 12.96A54 10.8 0 0 0 290.16 12.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

More often, you want to put space in between the block objects. The special "move" object exists for that purpose. Consider:
```
    box; move; circle; move; cylinder
```
This script creates the same three block objects but with whitespace in between them:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:436px;" viewBox="0 0 436.32 76.32">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="218.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M326.16,12.96L326.16,63.36A54 10.8 0 0 0 434.16 63.36L434.16,12.96A54 10.8 0 0 0 326.16 12.96A54 10.8 0 0 0 434.16 12.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

Implementation note: a "move" is really just an invisible "line," which is why the following script generates the same output as the previous. (Try it!)
```
    box; line invisible; circle; line invisible; cylinder
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:436px;" viewBox="0 0 436.32 76.32">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="218.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M326.16,12.96L326.16,63.36A54 10.8 0 0 0 434.16 63.36L434.16,12.96A54 10.8 0 0 0 326.16 12.96A54 10.8 0 0 0 434.16 12.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

## Controlling Layout Using Attributes
The automatic stacking of objects is convenient in many cases, but most diagrams will want some objects placed somewhere
other than immediately adjacent to their predecessor. For that reason, layout attributes are provided that allow precise placement of objects.

To see how this works, consider the previous example of a box, circle, and cylinder separated by some space. Suppose we
want to draw an arrow that goes downward out of the box, then right, then up into the cylinder. The complete script might look something like this:
```
    box; move; circle; move; cylinder
    arrow from first box.s \
          down 1cm \
          then right until even with first cylinder \
          then to first cylinder.s
```
This script results in the following diagram:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:436px;" viewBox="0 0 436.32 133.013">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="218.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M326.16,12.96L326.16,63.36A54 10.8 0 0 0 434.16 63.36L434.16,12.96A54 10.8 0 0 0 326.16 12.96A54 10.8 0 0 0 434.16 12.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="380.16,74.16 384.48,85.68 375.84,85.68" style="fill:rgb(0,0,0)"></polygon>
<path d="M56.16,74.16L56.16,130.853L380.16,130.853L380.16,79.92" style="fill:none;stroke-width:2.16;stroke-linejoin:round;stroke:rgb(0,0,0);"></path>
</svg>

That is indeed the image we want, but there are a lot of words on that "arrow" statement! Don't panic, though. It's actually pretty
simple. We'll take it apart and explain it piece by piece.

First note that the "arrow" statement is broken up into four separate lines of text, with a "\" at the end of the first
three lines to prevent the subsequent new-line from prematurely closing the statement. Splitting up the arrow into separate
lines this way is purely for human readability. If you are more comfortable putting the whole statement on one line, that is
fine too. Pikchr doesn't care. Just be sure to remember the backslashes if you do split lines!

The attributes on the "arrow" statement describe the path taken by the arrow. The first attribute is "from first box.s".
This "from" attribute specifies where the arrow starts. In this case, it starts at the "s" (or "south") anchor point of the
"first box". The "first box" part is probably self explanatory. (You can also write it as "1st box" instead of "first box",
and in fact legacy-PIC requires the use of "1st" instead of "first".) But what is the ".s" part?

Every block object has eight anchor points on its perimeter that are named for compass points, like this:
```
A: box
dot color red at A.nw ".nw " rjust above
dot same at A.w ".w " rjust
dot same at A.sw ".sw " rjust below
dot same at A.s ".s" below
dot same at A.se " .se" ljust below
dot same at A.e " .e" ljust
dot same at A.ne " .ne" ljust above
dot same at A.n ".n" above
dot same at A.c " .c" ljust
A: circle at 1.5 right of A
dot color red at A.nw ".nw " rjust above
dot same at A.w ".w " rjust
dot same at A.sw ".sw " rjust below
dot same at A.s ".s" below
dot same at A.se " .se" ljust below
dot same at A.e " .e" ljust
dot same at A.ne " .ne" ljust above
dot same at A.n ".n" above
dot same at A.c " .c" ljust
A: cylinder at 1.5 right of A
dot color red at A.nw ".nw " rjust above
dot same at A.w ".w " rjust
dot same at A.sw ".sw " rjust below
dot same at A.s ".s" below
dot same at A.se " .se" ljust below
dot same at A.e " .e" ljust
dot same at A.ne " .ne" ljust above
dot same at A.n ".n" above
dot same at A.c " .c" ljust
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:609px;" viewBox="0 0 609.984 116.64">
<path d="M37.0656,94.32L145.066,94.32L145.066,22.32L37.0656,22.32Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="37.0656" cy="22.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="37.0656" y="12.24" text-anchor="end" fill="rgb(255,0,0)" dominant-baseline="central">.nw&#160;</text>
<circle cx="37.0656" cy="58.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="37.0656" y="58.32" text-anchor="end" fill="rgb(255,0,0)" dominant-baseline="central">.w&#160;</text>
<circle cx="37.0656" cy="94.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="37.0656" y="104.4" text-anchor="end" fill="rgb(255,0,0)" dominant-baseline="central">.sw&#160;</text>
<circle cx="91.0656" cy="94.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="91.0656" y="104.4" text-anchor="middle" fill="rgb(255,0,0)" dominant-baseline="central">.s</text>
<circle cx="145.066" cy="94.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="145.066" y="104.4" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.se</text>
<circle cx="145.066" cy="58.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="145.066" y="58.32" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.e</text>
<circle cx="145.066" cy="22.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="145.066" y="12.24" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.ne</text>
<circle cx="91.0656" cy="22.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="91.0656" y="12.24" text-anchor="middle" fill="rgb(255,0,0)" dominant-baseline="central">.n</text>
<circle cx="91.0656" cy="58.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="91.0656" y="58.32" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.c</text>
<circle cx="307.066" cy="58.32" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<circle cx="281.61" cy="32.8642" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="281.61" y="22.7842" text-anchor="end" fill="rgb(255,0,0)" dominant-baseline="central">.nw&#160;</text>
<circle cx="271.066" cy="58.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="271.066" y="58.32" text-anchor="end" fill="rgb(255,0,0)" dominant-baseline="central">.w&#160;</text>
<circle cx="281.61" cy="83.7758" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="281.61" y="93.8558" text-anchor="end" fill="rgb(255,0,0)" dominant-baseline="central">.sw&#160;</text>
<circle cx="307.066" cy="94.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="307.066" y="104.4" text-anchor="middle" fill="rgb(255,0,0)" dominant-baseline="central">.s</text>
<circle cx="332.521" cy="83.7758" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="332.521" y="93.8558" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.se</text>
<circle cx="343.066" cy="58.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="343.066" y="58.32" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.e</text>
<circle cx="332.521" cy="32.8642" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="332.521" y="22.7842" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.ne</text>
<circle cx="307.066" cy="22.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="307.066" y="12.24" text-anchor="middle" fill="rgb(255,0,0)" dominant-baseline="central">.n</text>
<circle cx="307.066" cy="58.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="307.066" y="58.32" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.c</text>
<path d="M469.066,33.12L469.066,83.52A54 10.8 0 0 0 577.066 83.52L577.066,33.12A54 10.8 0 0 0 469.066 33.12A54 10.8 0 0 0 577.066 33.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="469.066" cy="33.12" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="469.066" y="23.04" text-anchor="end" fill="rgb(255,0,0)" dominant-baseline="central">.nw&#160;</text>
<circle cx="469.066" cy="58.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="469.066" y="58.32" text-anchor="end" fill="rgb(255,0,0)" dominant-baseline="central">.w&#160;</text>
<circle cx="469.066" cy="83.52" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="469.066" y="93.6" text-anchor="end" fill="rgb(255,0,0)" dominant-baseline="central">.sw&#160;</text>
<circle cx="523.066" cy="94.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="523.066" y="104.4" text-anchor="middle" fill="rgb(255,0,0)" dominant-baseline="central">.s</text>
<circle cx="577.066" cy="83.52" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="577.066" y="93.6" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.se</text>
<circle cx="577.066" cy="58.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="577.066" y="58.32" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.e</text>
<circle cx="577.066" cy="33.12" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="577.066" y="23.04" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.ne</text>
<circle cx="523.066" cy="22.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="523.066" y="12.24" text-anchor="middle" fill="rgb(255,0,0)" dominant-baseline="central">.n</text>
<circle cx="523.066" cy="58.32" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<text x="523.066" y="58.32" text-anchor="start" fill="rgb(255,0,0)" dominant-baseline="central">&#160;.c</text>
</svg>

As you can see, there is also a ninth point in the middle called ".c". Every block object has these anchor points; you can refer to them when
positioning the object itself, or when positioning other objects relative to the block object.

The next phrase on the "arrow" statement is "`down 1cm`". As you might guess, this phrase causes the arrow to move downward from its previous
position (its starting point) by 1 centimeter. This phrase highlights a key enhancement of Pikchr over PIC, which did everything in inches
only. No units were allowed. Pikchr allows you to attach units to measurements, as in this case where it is "1cm". Internally, Pikchr still
keeps track of everything in inches for compatibility with PIC, so the "1cm" token is really just an alternative spelling for the numeric
constant "0.39370078740157480316", which is the inch-equivalent of 1 centimeter. Surely you agree that "1cm" is much easier to read and write!
Other units recognized by Pikchr are "px" for pixels, "pt" for points, "pc" for picas, "mm" for millimeters, and of course "in" for inches. Inches
are assumed if no units are specified.

Back to our arrow: we have now established a path for the arrow down 1 centimeter from the ".s" anchor of the box. The next phrase is: "`then right
until even with first cylinder`". You can perhaps guess that this means that the arrow should continue to the right until it is lined up below the
first cylinder. You, the diagram designer, don't know (and don't really want to know) how far apart the box and the cylinder are, so you can't
tell it exactly how far to go. This phrase is a convenient way of telling Pikchr to "make the line long enough".

Note that the "`first cylinder`" part of the "until even with" phrase is actually an abbreviation for "`first cylinder.c`" - the center of the cylinder.
This is what we want. You could also write "`first cylinder.s`" if you want.

The "`until even with`" phrase is not found in the original version of PIC. In that system, you would have to do some extra math to figure out the
distance for yourself, something like "`then right (1st cylinder.s.x - 1st box.s.x)`". We think the "`until even with`" phrase is easier to use and understand.

The final phrase in the "arrow" statement is "`then to first cylinder.s`". This phrase tells the arrow to go from wherever it is at the moment directly
to the ".s" anchor of the cylinder.

## The Advantage Of Relative Layout

Notice that our sample diagram contains no coordinates and only one hard-coded distance, the "`down 1cm`" bit in the "arrow" statement. The script is written
in such a way that the script-writer does not have to do a lot of distance calculation. The layout compensates automatically.

For example, suppose you come back to this script later and decide you need to insert an ellipse in between the circle and the cylinder. This is easily accomplished:
```
    box; move; circle; move; ellipse; move; cylinder
    arrow from first box.s \
          down 1cm \
          then right until even with first cylinder \
          then to first cylinder.s
```
We simply add the ellipse (and an extra "move") on the first line. Even though the coordinate positions of the objects have adjusted, the description ofthe arrow
that connects the box to the cylinder is not based on coordinates or absolute distances, so it does not have to change at all. Pikchr compensates automatically:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:616px;" viewBox="0 0 616.32 133.013">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="218.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<ellipse cx="380.16" cy="38.16" rx="54" ry="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></ellipse>
<path d="M506.16,12.96L506.16,63.36A54 10.8 0 0 0 614.16 63.36L614.16,12.96A54 10.8 0 0 0 506.16 12.96A54 10.8 0 0 0 614.16 12.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<polygon points="560.16,74.16 564.48,85.68 555.84,85.68" style="fill:rgb(0,0,0)"></polygon>
<path d="M56.16,74.16L56.16,130.853L560.16,130.853L560.16,79.92" style="fill:none;stroke-width:2.16;stroke-linejoin:round;stroke:rgb(0,0,0);"></path>
</svg>

Both PIC and Pikchr allow you to specify hard-coded coordinates and distances when laying out your diagram, but you are encouraged to avoid that approach.
Instead, place each new object you create relative to the position of prior objects. Pikchr provides many mechanisms for specifying the location of each
object in terms of the locations of its predecessors. With a little study of the syntax options available to you (and discussed further below) you will
be generating complex diagrams using Pikchr in no time.

## Single-Pass Design

Both Pikchr and PIC operate on a single-pass design. Objects can refer to other objects that occur before them in the script, but not to objects that occur
later in the script. Any computations that go into placing an object occur as the object definition is parsed. As soon as the newline or semicolon that
terminates the object definition is reached, the size, location, and characteristics of the object are fixed and cannot subsequently be altered.
(One exception: sub-objects that are part of a `[]`-container (discussed later) are placed relative to the origin of the container. Their
shape and locations relative to each other are fixed, but their final absolute position is not fixed until the `[]`-container itself is fixed.)

The single-pass approach contributes to the conceptual simplicity of Pikchr (and PIC). There is no "solver" that has to work through forward and
backward layout constraints to find a solution. This simplicity of design helps to keep Pikchr scripts easy to write and easy to understand.

## Labeling Objects

The previous example used the phrases like "`first box`" and "`first cylinder`" to refer to particular objects. There are many variations on this naming scheme:

* "`previous`" ← the previous object regardless of its class
* "`last circle`" ← the most recently created circle object
* "`3rd last oval`" ← the antepenultimate oval object
* "`17th ellipse`" ← the seventeenth ellipse object
* ...and so forth

These relative and ordinal references work, but they can be fragile. If you go back later and insert a new object in the stream, you can mess up the
counting. Or, for that matter, you might just miscount.

In a complex diagram, it often works better to assign symbolic names to objects, which we call “labels” in Pikchr. A label begins with a capital letter
followed by some number of regular ASCII letters, digits or underscores, followed by a colon. This must come immediately before an object, without an
intervening newline. Afterwards, the object can be referred to by that label.

Consider how this simplifies our previous example:
```
    B1:  box; move;
         circle; move;
         ellipse; move;
    C1:  cylinder
         arrow from B1.s \
            down 1cm \
            then right until even with C1 \
            then to C1.s
```

By giving symbolic names to the box (B1) and cylinder (C1), the arrow path description is simplified. Furthermore, if the ellipse gets changed into another
cylinder, the arrow still refers to the correct cylinder.

The indentation of the lines following each symbolic name above is syntactically unimportant: it serves only to improve human readability. Nevertheless,
this is typical coding style for Pikchr and PIC before it.

## Layout Of Block Objects

For lines (and arrows and splines), you have to specify a path that the line follows, a path that might involve multiple bends and turns. Defining the
location of block objects is easier: you just provide a single location to place the object. Ideally, you should place the object relative to some other object, of course.

Let's say you have a box and you want to position a circle 2 centimeters to the right of that box. You simply use an "at" attribute on the circle to
tell it to position itself 2 cm to the right of the box:
```
  B1: box
      circle at 2cm right of B1
```

The resulting diagram is:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:207px" viewBox="0 0 207.706 123.659">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="169.546" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M56.16,85.4986L56.16,121.499" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M169.546,85.4986L169.546,121.499" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="56.16,112.499 63.8784,109.604 63.8784,115.393" style="fill:rgb(128,128,128)"></polygon>
<polygon points="169.546,112.499 161.827,115.393 161.827,109.604" style="fill:rgb(128,128,128)"></polygon>
<path d="M60.0192,112.499L165.687,112.499" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="112.853" y="101.333" text-anchor="middle" fill="rgb(128,128,128)" dominant-baseline="central">2cm</text>
</svg>

(We’ve added gray dimension lines purely for illustration. You can see below that they do not change the example, only add to it.)

```
  B1: box
      circle at 2cm right of B1

  X1: line thin color gray down 50% from 2mm south of B1.s
  X2: line same from (last circle.s,X1.start)
      arrow <-> thin from 3/4<X1.start,X1.end> right until even with X2 \
         "2cm" above color gray
      assert( last arrow.width == 2cm )
```

The circle is positioned so that its center is 2 centimeters to the right of the center of the box. If what you really wanted is that the
left (or west) side of the circle is 2 cm to the right (or east) of the box, then just say so:
```
  B1: box
  C1: circle with .w at 2cm right of B1.e
```
Normally an "at" clause will set the center of an object, but if you add a "with" prefix you can specify any other anchor point
of the object to be the reference for positioning. The Pikchr script above is saying "make the C1.w point be 2 cm right of B1.e". And we have:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:297px;" viewBox="0 0 297.706 123.659">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="259.546" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M110.16,85.4986L110.16,121.499" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M223.546,85.4986L223.546,121.499" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="110.16,112.499 117.878,109.604 117.878,115.393" style="fill:rgb(128,128,128)"></polygon>
<polygon points="223.546,112.499 215.827,115.393 215.827,109.604" style="fill:rgb(128,128,128)"></polygon>
<path d="M114.019,112.499L219.687,112.499" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="166.853" y="101.333" text-anchor="middle" fill="rgb(128,128,128)" dominant-baseline="central">2cm</text>
</svg>

That's the whole story behind positioning block objects on a diagram. You just add an attribute of the form:

> with reference-point at position

And Pikchr will place the specified reference-point of the object at position. If you omit the "`with`" clause, the center of the object ("`.c`")
is used as the reference-point. The power of Pikchr comes from the fact that "position" can be a rather complex expression. The previous example
used a relatively simple position of "`2cm right of B1.e`". That was sufficient for our simple diagram. More complex diagrams can have more complex position phrases.

## Automatic Layout Of Block Objects

If you omit the "at" attribute from a block object, the object is positioned as if you had used the following:

> `with .start at previous.end`

Except, the very first object in the script has no "previous" and so it is positioned using:

> `with .c at (0,0)`

Let's talk little more about the usual case: "`with .start at previous.end`". The "`previous`" keyword means the previous object in the script.
(You can also use the keyword "`last`" for this purpose.) So we are positioning the current object relative to the previous object. But what about the ".start" and ".end"?

Remember that every object has 8 anchor points whose names correspond to compass directions: ".n", ".ne", ".e", ".se", ".s", ".sw", ".w", and ".nw",
plus the ninth anchor, the center point ".c". Every object also has ".start" and ".end" anchor points, but their position varies depending on the
layout direction that is current when the object is created.

| Layout Direction | .start | .end |
| ---------------- | ------ | ---- |
| right | .w | .e |
| down  | .n | .s |
| left  | .e | .w |
| up    | .s | .n |

Recall the earlier example that consisted of three objects stacked together:

```
    right; box; circle; cylinder
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:292px;" viewBox="0 0 292.32 76.32">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="146.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M182.16,12.96L182.16,63.36A54 10.8 0 0 0 290.16 63.36L290.16,12.96A54 10.8 0 0 0 182.16 12.96A54 10.8 0 0 0 290.16 12.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

(I added a "right" at the beginning to make the layout direction clear, but as "right" is the default layout direction, so it doesn't change anything.)

Armed with our new knowledge of how "at"-less block objects are positioned, we can better understand what is going on. The box is the first object. It gets positioned with its center at (0,0), which we can show by putting a red dot at (0,0):

```
    right; box; circle; cylinder
    dot color red at (0,0)
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:292px;" viewBox="0 0 292.32 76.32">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="146.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M182.16,12.96L182.16,63.36A54 10.8 0 0 0 290.16 63.36L290.16,12.96A54 10.8 0 0 0 182.16 12.96A54 10.8 0 0 0 290.16 12.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="56.16" cy="38.16" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
</svg>

Because the layout direction is "right", the start and end of the box are the .w and .e anchor points. Prove this by putting more colored
dots at those points and rendering the result:

```
    right; box; circle; cylinder
    dot color green at 1st box.start
    dot color blue at 1st box.end
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:294px" viewBox="0 0 294.48 76.32">
<path d="M4.32,74.16L112.32,74.16L112.32,2.16L4.32,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="148.32" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M184.32,12.96L184.32,63.36A54 10.8 0 0 0 292.32 63.36L292.32,12.96A54 10.8 0 0 0 184.32 12.96A54 10.8 0 0 0 292.32 12.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="4.32" cy="38.16" r="2.16" style="fill:rgb(0,128,0);stroke-width:2.16;stroke:rgb(0,128,0);"></circle>
<circle cx="112.32" cy="38.16" r="2.16" style="fill:rgb(0,0,255);stroke-width:2.16;stroke:rgb(0,0,255);"></circle>
</svg>

Similarly, we can show that the .start and .end of the circle are its .w and .e anchor points. (Add new color dots to prove this to yourself,
if you like.) And clearly, the .start of the circle is directly on top of the .end of the box.

Now consider what happens if we change the layout direction after the circle is created but before the cylinder is created:

```
    right; box; circle; down; cylinder
```

This script works a little differently on Pikchr than it does on PIC. The change in behavior is deliberate, because we feel that the Pikchr approach is
better. On PIC, the diagram above would be rendered like this:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:238px;" viewBox="0 0 238.32 112.32">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="146.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M128.16,48.96L128.16,99.36A54 10.8 0 0 0 236.16 99.36L236.16,48.96A54 10.8 0 0 0 128.16 48.96A54 10.8 0 0 0 236.16 48.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

But on Pikchr the placement of the cylinder is different:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:202px;" viewBox="0 0 202.32 148.32">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="146.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<path d="M92.16,84.96L92.16,135.36A54 10.8 0 0 0 200.16 135.36L200.16,84.96A54 10.8 0 0 0 92.16 84.96A54 10.8 0 0 0 200.16 84.96" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
</svg>

Let's take apart what is happening here. In both systems, after the "circle" object has been parsed and positioned, the .end of the circle is the
same as .e, because the layout direction is "right". If we omit the "down" and "cylinder" and draw a dot at the ".end" of circle to show where it is, we can see this:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:186px;" viewBox="0 0 186.48 76.32">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="146.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<circle cx="182.16" cy="38.16" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
</svg>

The next statement is "down". The "down" statement changes the layout direction to "down" in both systems. In legacy PIC the .end of the circle
remains at the .e anchor. Then when the "cylinder" is positioned, its ".start" is at .n because the layout direction is now "down", so the .n point
of the cylinder is aligned to the .e point of the circle.

Pikchr works like PIC with one important change: when the "down" statement is evaluated, Pikchr also moves the ".end" of the previous object to
a new location that is appropriate for the new direction. In other words, the down command moves the .end of the circle from .e to .s. You can
see this by setting a red dot at the .end of the circle after the "down" command:
```
    right; box; circle; down
    dot color red at first circle.end
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:184px;" viewBox="0 0 184.32 78.48">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="146.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<circle cx="146.16" cy="74.16" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
</svg>

Or, we can "print" the coordinates of the .end of the circle before and after the "down" command to see that they shift:
```
    right; box; C1: circle
    print "before: ", C1.end.x, ", ", C1.end.y
    down
    print "after: ", C1.end.x, ", ", C1.end.y
```

before: 0.875 , 0
<br/>
after: 0.625 , -0.25
<br/>
<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:184px" viewBox="0 0 184.32 76.32">
<path d="M2.16,74.16L110.16,74.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<circle cx="146.16" cy="38.16" r="36" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
</svg>

Adjusting The Size Of Block Objects
The size of every block object is controlled by three parameters:

* `width` (often abbreviated as `wid`)
* `height` (or `ht`)
* `radius` (or `rad`)

There is also a fourth convenience parameter:

* diameter

The `diameter` is always twice the `radius`. Setting the `diameter` automatically changes the `radius` and setting the `radius` automatically changes the `diameter`.

Usually the meanings of these parameters are obvious.

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:204px;" viewBox="0 0 204.68 134.099">
<path d="M90.2002,78.48L198.2,78.48L198.2,6.48L90.2002,6.48Z" style="fill:none;stroke-width:3.24;stroke:rgb(0,0,0);"></path>
<path d="M78.8616,6.48L28.4616,6.48" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M78.8616,78.48L28.4616,78.48" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="34.7616" y="42.48" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">height</text>
<polygon points="34.7616,6.48 37.656,14.1984 31.8672,14.1984" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,27.36L34.7616,10.3392" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="34.7616,78.48 31.8672,70.7616 37.656,70.7616" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,57.6L34.7616,74.6208" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M90.2002,89.8186L90.2002,125.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M198.2,89.8186L198.2,125.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="144.2" y="116.819" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">width</text>
<polygon points="90.2002,116.819 97.9186,113.924 97.9186,119.713" style="fill:rgb(128,128,128)"></polygon>
<path d="M114.824,116.819L94.0594,116.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="198.2,116.819 190.482,119.713 190.482,113.924" style="fill:rgb(128,128,128)"></polygon>
<path d="M173.576,116.819L194.341,116.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
</svg>

The radius parameter, however, sometimes has non-obvious meanings. For example, on a box, the radius determines the rounding of corners:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:281px;" viewBox="0 0 281.812 134.099">
<path d="M111.8,78.48L176.6,78.48A21.6 21.6 0 0 0 198.2 56.88L198.2,28.08A21.6 21.6 0 0 0 176.6 6.48L111.8,6.48A21.6 21.6 0 0 0 90.2002 28.08L90.2002,56.88A21.6 21.6 0 0 0 111.8 78.48Z" style="fill:none;stroke-width:3.24;stroke:rgb(0,0,0);"></path>
<path d="M78.8616,6.48L28.4616,6.48" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M78.8616,78.48L28.4616,78.48" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="34.7616" y="42.48" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">height</text>
<polygon points="34.7616,6.48 37.656,14.1984 31.8672,14.1984" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,27.36L34.7616,10.3392" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="34.7616,78.48 31.8672,70.7616 37.656,70.7616" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,57.6L34.7616,74.6208" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M90.2002,89.8186L90.2002,125.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M198.2,89.8186L198.2,125.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="144.2" y="116.819" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">width</text>
<polygon points="90.2002,116.819 97.9186,113.924 97.9186,119.713" style="fill:rgb(128,128,128)"></polygon>
<path d="M114.824,116.819L94.0594,116.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="198.2,116.819 190.482,119.713 190.482,113.924" style="fill:rgb(128,128,128)"></polygon>
<path d="M173.576,116.819L194.341,116.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M209.539,78.48L259.939,78.48" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M209.539,56.88L259.939,56.88" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="247.339" y="67.68" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">radius</text>
<polygon points="247.339,78.48 250.233,86.1984 244.444,86.1984" style="fill:rgb(128,128,128)"></polygon>
<path d="M247.339,82.3392L247.339,100.08" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="247.339,56.88 244.444,49.1616 250.233,49.1616" style="fill:rgb(128,128,128)"></polygon>
<path d="M247.339,53.0208L247.339,35.28" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
</svg>

For a cylinder object the radius determines the thickness of the end caps:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:281px;" viewBox="0 0 281.812 135.179">
<path d="M90.2002,23.76L90.2002,63.36A54 16.2 0 0 0 198.2 63.36L198.2,23.76A54 16.2 0 0 0 90.2002 23.76A54 16.2 0 0 0 198.2 23.76" style="fill:none;stroke-width:3.24;stroke:rgb(0,0,0);"></path>
<path d="M78.8616,7.56L28.4616,7.56" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M78.8616,79.56L28.4616,79.56" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="34.7616" y="43.56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">height</text>
<polygon points="34.7616,7.56 37.656,15.2784 31.8672,15.2784" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,28.44L34.7616,11.4192" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="34.7616,79.56 31.8672,71.8416 37.656,71.8416" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,58.68L34.7616,75.7008" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M90.2002,90.8986L90.2002,126.899" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M198.2,90.8986L198.2,126.899" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="144.2" y="117.899" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">width</text>
<polygon points="90.2002,117.899 97.9186,115.004 97.9186,120.793" style="fill:rgb(128,128,128)"></polygon>
<path d="M114.824,117.899L94.0594,117.899" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="198.2,117.899 190.482,120.793 190.482,115.004" style="fill:rgb(128,128,128)"></polygon>
<path d="M173.576,117.899L194.341,117.899" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M209.539,23.76L259.939,23.76" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M209.539,39.96L259.939,39.96" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="247.339" y="31.86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">radius</text>
<polygon points="247.339,39.96 250.233,47.6784 244.444,47.6784" style="fill:rgb(128,128,128)"></polygon>
<path d="M247.339,43.8192L247.339,61.56" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="247.339,23.76 244.444,16.0416 250.233,16.0416" style="fill:rgb(128,128,128)"></polygon>
<path d="M247.339,19.9008L247.339,2.16" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
</svg>

For a file object the radius determines the size of the page fold-over in the upper-right corner:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:245px;" viewBox="0 0 245.812 187.379">
<path d="M90.2002,131.76L162.2,131.76L162.2,45.36L140.6,23.76L90.2002,23.76Z" style="fill:none;stroke-width:3.24;stroke:rgb(0,0,0);"></path>
<path d="M140.6,23.76L140.6,45.36L162.2,45.36" style="fill:none;stroke-width:3.24;stroke:rgb(0,0,0);"></path>
<path d="M78.8616,23.76L28.4616,23.76" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M78.8616,131.76L28.4616,131.76" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="34.7616" y="77.76" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">height</text>
<polygon points="34.7616,23.76 37.656,31.4784 31.8672,31.4784" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,62.64L34.7616,27.6192" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="34.7616,131.76 31.8672,124.042 37.656,124.042" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,92.88L34.7616,127.901" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M90.2002,143.099L90.2002,179.099" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M162.2,143.099L162.2,179.099" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="126.2" y="170.099" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">width</text>
<polygon points="90.2002,170.099 96.8242,167.204 96.8242,172.993" style="fill:rgb(128,128,128)"></polygon>
<path d="M96.8242,170.099L93.5122,170.099" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="162.2,170.099 155.576,172.993 155.576,167.204" style="fill:rgb(128,128,128)"></polygon>
<path d="M155.576,170.099L158.888,170.099" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M173.539,23.76L223.939,23.76" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M173.539,45.36L223.939,45.36" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="211.339" y="34.56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">radius</text>
<polygon points="211.339,45.36 214.233,53.0784 208.444,53.0784" style="fill:rgb(128,128,128)"></polygon>
<path d="M211.339,49.2192L211.339,66.96" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="211.339,23.76 208.444,16.0416 214.233,16.0416" style="fill:rgb(128,128,128)"></polygon>
<path d="M211.339,19.9008L211.339,2.16" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
</svg>

For a circle object, the width, height, and diameter are always the same, and the radius is always half the diameter. Changing any parameter
automatically adjusts the other three.

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:273px;" viewBox="0 0 273.051 161.919">
<circle cx="133.4" cy="63.1005" r="43.2" style="fill:none;stroke-width:3.24;stroke:rgb(0,0,0);"></circle>
<path d="M78.8616,19.9005L28.4616,19.9005" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M78.8616,106.301L28.4616,106.301" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="34.7616" y="63.1005" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">height</text>
<polygon points="34.7616,19.9005 37.656,27.6189 31.8672,27.6189" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,47.9805L34.7616,23.7597" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="34.7616,106.301 31.8672,98.5821 37.656,98.5821" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,78.2205L34.7616,102.441" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M90.2002,117.639L90.2002,153.639" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M176.6,117.639L176.6,153.639" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="133.4" y="144.639" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">width</text>
<polygon points="90.2002,144.639 97.9186,141.745 97.9186,147.534" style="fill:rgb(128,128,128)"></polygon>
<path d="M104.024,144.639L94.0594,144.639" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="176.6,144.639 168.882,147.534 168.882,141.745" style="fill:rgb(128,128,128)"></polygon>
<path d="M162.776,144.639L172.741,144.639" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M187.939,106.301L238.339,106.301" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M187.939,63.1005L238.339,63.1005" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="225.739" y="84.7005" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">radius</text>
<polygon points="225.739,106.301 228.633,114.019 222.844,114.019" style="fill:rgb(128,128,128)"></polygon>
<path d="M225.739,110.16L225.739,127.901" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="225.739,63.1005 222.844,55.3821 228.633,55.3821" style="fill:rgb(128,128,128)"></polygon>
<path d="M225.739,59.2413L225.739,41.5005" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="102.853,93.6475 106.264,86.1431 110.358,90.2364" style="fill:rgb(128,128,128)"></polygon>
<polygon points="163.947,32.5535 160.536,40.0579 156.443,35.9646" style="fill:rgb(128,128,128)"></polygon>
<path d="M105.582,90.9187L161.218,35.2824" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M163.947,32.5535L179.221,17.28L190.021,17.28" style="fill:none;stroke-width:1.4472;stroke-linejoin:round;stroke:rgb(128,128,128);"></path>
<text x="190.021" y="17.28" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central">&nbsp;diameter</text>
</svg>

Even though they are curvy objects, the radius (and hence diameter) has no effect on ellipse and oval objects. The size of those objects is
determined purely by their width and height:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:204px" viewBox="0 0 204.68 134.099">
<ellipse cx="144.2" cy="42.48" rx="54" ry="36" style="fill:none;stroke-width:3.24;stroke:rgb(0,0,0);"></ellipse>
<path d="M78.8616,6.48L28.4616,6.48" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M78.8616,78.48L28.4616,78.48" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="34.7616" y="42.48" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">height</text>
<polygon points="34.7616,6.48 37.656,14.1984 31.8672,14.1984" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,27.36L34.7616,10.3392" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="34.7616,78.48 31.8672,70.7616 37.656,70.7616" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,57.6L34.7616,74.6208" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M90.2002,89.8186L90.2002,125.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M198.2,89.8186L198.2,125.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="144.2" y="116.819" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">width</text>
<polygon points="90.2002,116.819 97.9186,113.924 97.9186,119.713" style="fill:rgb(128,128,128)"></polygon>
<path d="M114.824,116.819L94.0594,116.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="198.2,116.819 190.482,119.713 190.482,113.924" style="fill:rgb(128,128,128)"></polygon>
<path d="M173.576,116.819L194.341,116.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:492px;" viewBox="0 0 492.68 204.083">
<path d="M126.2,114.48L198.2,114.48A36 36 0 0 0 234.2 78.48A36 36 0 0 0 198.2 42.48L126.2,42.48A36 36 0 0 0 90.2002 78.48A36 36 0 0 0 126.2 114.48Z" style="fill:none;stroke-width:3.24;stroke:rgb(0,0,0);"></path>
<path d="M78.8616,42.48L28.4616,42.48" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M78.8616,114.48L28.4616,114.48" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="34.7616" y="78.48" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">height</text>
<polygon points="34.7616,42.48 37.656,50.1984 31.8672,50.1984" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,63.36L34.7616,46.3392" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="34.7616,114.48 31.8672,106.762 37.656,106.762" style="fill:rgb(128,128,128)"></polygon>
<path d="M34.7616,93.6L34.7616,110.621" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M90.2002,125.819L90.2002,161.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M234.2,125.819L234.2,161.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="162.2" y="152.819" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">width</text>
<polygon points="90.2002,152.819 97.9186,149.924 97.9186,155.713" style="fill:rgb(128,128,128)"></polygon>
<path d="M132.824,152.819L94.0594,152.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="234.2,152.819 226.482,155.713 226.482,149.924" style="fill:rgb(128,128,128)"></polygon>
<path d="M191.576,152.819L230.341,152.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M450.2,150.48A36 36 0 0 0 486.2 114.48L486.2,42.48A36 36 0 0 0 450.2 6.48A36 36 0 0 0 414.2 42.48L414.2,114.48A36 36 0 0 0 450.2 150.48Z" style="fill:none;stroke-width:3.24;stroke:rgb(0,0,0);"></path>
<path d="M402.862,6.48L352.462,6.48" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M402.862,150.48L352.462,150.48" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="358.762" y="78.48" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">height</text>
<polygon points="358.762,6.48 361.656,14.1984 355.867,14.1984" style="fill:rgb(128,128,128)"></polygon>
<path d="M358.762,63.36L358.762,10.3392" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="358.762,150.48 355.867,142.762 361.656,142.762" style="fill:rgb(128,128,128)"></polygon>
<path d="M358.762,93.6L358.762,146.621" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M414.2,161.819L414.2,197.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<path d="M486.2,161.819L486.2,197.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<text x="450.2" y="188.819" text-anchor="middle" fill="rgb(0,0,0)" font-size="80%" dominant-baseline="central">width</text>
<polygon points="414.2,188.819 421.919,185.924 421.919,191.713" style="fill:rgb(128,128,128)"></polygon>
<path d="M425.547,188.819L418.059,188.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
<polygon points="486.2,188.819 478.482,191.713 478.482,185.924" style="fill:rgb(128,128,128)"></polygon>
<path d="M474.853,188.819L482.341,188.819" style="fill:none;stroke-width:1.4472;stroke:rgb(128,128,128);"></path>
</svg>

Notice that with an oval object, the semicircular end-cap is always on the narrow end of the object. In the default configuration where the height
is less than the width, the semicircular end-caps are on the left and right, but if the width and height are modified so that the width is less than
the height, then semicircles appear on the top and bottom instead.

Although a diamond can in principle be rounded, same as Pikchr allows with a box, the current implementation does not respond to the radius parameter:

```
diamond "Sharp" "diamond" height 150%
move
diamond same "“Rounded”" "diamond?" "Sorry; no." rad 150%
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:364px;" viewBox="0 0 364.32 166.32">
<path d="M2.16,83.16L74.16,164.16L146.16,83.16L74.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="74.16" y="73.08" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Sharp</text>
<text x="74.16" y="93.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">diamond</text>
<path d="M218.16,83.16L290.16,164.16L362.16,83.16L290.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="290.16" y="63" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">“Rounded”</text>
<text x="290.16" y="83.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">diamond?</text>
<text x="290.16" y="103.32" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Sorry;&nbsp;no.</text>
</svg>

### Default Sizes

Block objects have default sizes, which are determined by variables. For example, the width of a box is initialized with the value of the boxwid variable,
which defaults to 0.75in.

It is common for Pikchr scripts to change these default at or near the beginning of a script in order to adjust the default sizes of objects defined within that script.

### Setting Sizes Using Attributes

Use the "width" (or "wid") attribute to change the width of an object. The argument to this attribute can be an
expression — such as "1cm" or "0.75*boxwid" — or it can be a percentage of the prior value, such as "75%". This also works for "height", "radius", and "diameter".

### Automatic Sizing To Fit Text Annotations

If a block object contains text annotations, the "fit" attribute causes the width and height to be adjusted so that the object neatly
encloses that text. The "fit" attribute only considers text that is previously defined for the object, or in other words text annotations that
occur to the left of the "fit" keyword. The width and height can be adjusted further after the "fit" keyword, for example to provide a larger
margin around the text. You can see here the difference that the "width 125%" at the end of the second box definition makes.
```
    down
    box "Auto-fit text annotation" "as is" fit
    move 50%
    box "Auto-fix text annotation" "with 125% width" fit width 125%
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:266px;" viewBox="0 0 266.544 141.12">
<path d="M29.7072,52.56L236.837,52.56L236.837,2.16L29.7072,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="133.272" y="17.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Auto-fit&nbsp;text&nbsp;annotation</text>
<text x="133.272" y="37.44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">as&nbsp;is</text>
<path d="M2.16,138.96L264.384,138.96L264.384,88.56L2.16,88.56Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="133.272" y="103.68" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Auto-fix&nbsp;text&nbsp;annotation</text>
<text x="133.272" y="123.84" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">with&nbsp;125%&nbsp;width</text>
</svg>

If at the end of a block object definition, either the width or height of the object is less than or equal to zero, then that dimension is increased so
as to enclose all text annotations on the object. Thus, for example, you can make all of the boxes in your diagram auto-fit around their text annotations
by prefacing your script with something like:
```
    boxwid = 0; boxht = 0;
    box "Hello";
    move
    box "A longer label" "with multiple lines" "of label text"
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:301px;" viewBox="0 0 301.19 74.88">
<path d="M2.16,52.56L58.8384,52.56L58.8384,22.32L2.16,22.32Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="30.4992" y="37.44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Hello</text>
<path d="M130.838,72.72L299.03,72.72L299.03,2.16L130.838,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="214.934" y="17.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">A&nbsp;longer&nbsp;label</text>
<text x="214.934" y="37.44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">with&nbsp;multiple&nbsp;lines</text>
<text x="214.934" y="57.6" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">of&nbsp;label&nbsp;text</text>
</svg>

For all of these auto-fit features, Pikchr needs to know the dimensions of the text annotations after rendering. Unfortunately, that information is not
readily available, as Pikchr runs long before the generated SVG reaches the web-browser in which it will be displayed. Hence, Pikchr has to guess at the
text size. Usually it does a good job of this, but it can be a little off, especially for unusual (read: "non-ASCII") characters or if the CSS for the
rendering environment sets a non-standard font face or font size. To compensate, the "`charwid`" and "`charht`" variables can be adjusted or extra spaces can
be added at the beginning or end of text strings.

These auto-fit features are a new innovation for Pikchr and are not available in other PIC family interpreters, as far as we are aware.

## Attributes For Stroke Width And Drawing Colors

Various attributes can be added to both block and line objects to influence how the objects are drawn.

* `thickness` *dimension*
* `thick`
* `thin`
* `invisible` (or `invis`)
* `color` *color*
* `fill` *color*

The "`thickness`", "`thick`", "`thin`", and "`invisible`" attributes control the stroke width of the lines that construct an object. The default stroke width
for all objects is determined by the "`thickness`" variable, which defaults to "`0.015in`". The "`thick`" and "`thin`" attributes increase or decrease the stroke
width by fixed percentages. These attributes can be repeated to make the stroke width ever thicker or thinner, up to the limit of the object’s dimensions
where the stroke fills the entire object. The "`invisble`" attribute simply sets the stroke width to 0.

```
   boxwid = 0
   boxht = 0
   right
   box "normal"
   move
   box "thin" thin
   move
   box "thick" thick
   move
   box "thick thick thick" thick thick thick
   move
   box "invisible" invisible
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:686px" viewBox="0 0 686.074 34.56">
<path d="M2.16,32.4L73.1232,32.4L73.1232,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="37.6416" y="17.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">normal</text>
<path d="M145.123,32.4L189.936,32.4L189.936,2.16L145.123,2.16Z" style="fill:none;stroke-width:1.4472;stroke:rgb(0,0,0);"></path>
<text x="167.53" y="17.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">thin</text>
<path d="M261.936,32.4L315.504,32.4L315.504,2.16L261.936,2.16Z" style="fill:none;stroke-width:3.24;stroke:rgb(0,0,0);"></path>
<text x="288.72" y="17.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">thick</text>
<path d="M387.504,32.4L535.536,32.4L535.536,2.16L387.504,2.16Z" style="fill:none;stroke-width:7.29;stroke:rgb(0,0,0);"></path>
<text x="461.52" y="17.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">thick&nbsp;thick&nbsp;thick</text>
<text x="648.605" y="17.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">invisible</text>
</svg>

Notice that “invisible” refers only to the object outline, not to the whole object. You therefore cancel the “invisible” attribute with “solid”, not “visible”:

```
   boxwid = 0
   boxht = 0
   box "fully visible"
   box invisible color gray "outline invisible"
   box same solid "outline visible again" fit
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:439px;" viewBox="0 0 439.776 34.56">
<path d="M2.16,32.4L110.333,32.4L110.333,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="56.2464" y="17.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">fully&nbsp;visible</text>
<text x="183.254" y="17.28" text-anchor="middle" fill="rgb(128,128,128)" dominant-baseline="central">outline&nbsp;invisible</text>
<path d="M256.176,32.4L437.616,32.4L437.616,2.16L256.176,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(128,128,128);"></path>
<text x="346.896" y="17.28" text-anchor="middle" fill="rgb(128,128,128)" dominant-baseline="central">outline&nbsp;visible&nbsp;again</text>
</svg>

The "`color`" and "`fill`" attributes change the foreground and background colors of an object. Colors can be expressed using any of the 148 standard CSS
color names such as "Bisque" or "AliceBlue" or "LightGray". Color names are not case sensitive, so "bisque", "BISQUE", and "Bisque" all mean the same
thing. Color names can also be expressed as an integer which is interpreted as a 24-bit RGB value. It is convenient to express numeric color values using
hexadecimal notation. "Bisque" is the same as "0xffe4c4", which is the same as "16770244".

```
   box "Color: CadetBlue" "Fill: Bisque" fill Bisque color CadetBlue fit
   move
   oval "Color: White" "Fill: RoyalBlue" color White fill ROYALBLUE fit
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:367px;" viewBox="0 0 367.546 54.72">
<path d="M2.16,52.56L158.256,52.56L158.256,2.16L2.16,2.16Z" style="fill:rgb(255,228,196);stroke-width:2.16;stroke:rgb(95,158,160);"></path>
<text x="80.208" y="17.28" text-anchor="middle" fill="rgb(95,158,160)" dominant-baseline="central">Color:&nbsp;CadetBlue</text>
<text x="80.208" y="37.44" text-anchor="middle" fill="rgb(95,158,160)" dominant-baseline="central">Fill:&nbsp;Bisque</text>
<path d="M255.456,52.56L340.186,52.56A25.2 25.2 0 0 0 365.386 27.36A25.2 25.2 0 0 0 340.186 2.16L255.456,2.16A25.2 25.2 0 0 0 230.256 27.36A25.2 25.2 0 0 0 255.456 52.56Z" style="fill:rgb(65,105,225);stroke-width:2.16;stroke:rgb(255,255,255);"></path>
<text x="297.821" y="17.28" text-anchor="middle" fill="rgb(255,255,255)" dominant-baseline="central">Color:&nbsp;White</text>
<text x="297.821" y="37.44" text-anchor="middle" fill="rgb(255,255,255)" dominant-baseline="central">Fill:&nbsp;RoyalBlue</text>
</svg>

Setting the "`fill`" to a negative number, to "None", or to "Off" makes the background transparent. That is the default.

The default foreground color is black.

## Filled Polygons

The "`fill`" attribute does not affect the rendering of lines unless the route of the line is terminated by the "`close`" attribute. The "`close`" keyword
converts the line into a polygon:

```
   line go 3cm heading 150 then 3cm west close \
                                      /* ^^^^^ nota bene! */ \
       fill 0x006000 color White "green" below "triangle" below
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:174px;" viewBox="0 0 174.399 151.613">
<path d="M87.1994,2.16L172.239,149.453L2.16,149.453Z" style="fill:rgb(0,96,0);stroke-width:2.16;stroke-linejoin:round;stroke:rgb(255,255,255);"></path>
<text x="87.1994" y="87.5063" text-anchor="middle" fill="rgb(255,255,255)" dominant-baseline="central">green</text>
<text x="87.1994" y="107.666" text-anchor="middle" fill="rgb(255,255,255)" dominant-baseline="central">triangle</text>
</svg>

Polygons are not required to have a fill color. With the default fill of “`none`”, you can use the "`close`" keyword to convert a polygon into a line and
leave the background transparent, but using "`fill` *color*" together with "`close`" is a common idiom.

## Text Annotations

Every object can have up to five lines of text annotation. Each annotation is a string literal attribute on the object definition. By default, the
annotations are displayed around the center of the object, from top to bottom, in the order that they appear in the input script.

```
   box "box containing" "three lines" "of text" fit
   move
   arrow "Labeled" "line" wid 200%
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:360px;" viewBox="0 0 360.115 74.88">
<path d="M2.16,72.72L137.635,72.72L137.635,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="69.8976" y="17.28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">box&nbsp;containing</text>
<text x="69.8976" y="37.44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">three&nbsp;lines</text>
<text x="69.8976" y="57.6" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">of&nbsp;text</text>
<polygon points="353.635,37.44 342.115,41.76 342.115,33.12" style="fill:rgb(0,0,0)"></polygon>
<path d="M209.635,37.44L347.875,37.44" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="281.635" y="25.74" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Labeled</text>
<text x="281.635" y="49.14" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">line</text>
</svg>

## Text Attributes

The layout and font style of the annotations can be modified using keywords that appear after each string literal. The following modifiers are supported:

* **above**
* **aligned**
* **below**
* **big**
* **bold**
* **mono**
* **monospace**
* **center**
* **italic**
* **ljust**
* **rjust**
* **small**

### Position Text Above Or Below The Center Of The Object

The "`above`" and "`below`" keywords control the location of the text above or below the center point of the object with which the text is associated. If
there is just one text on the object and the "`above`" and "`below`" keywords are omitted, the text is placed directly over the center of the object. This
causes the text to appear in the middle of lines:
```
  line "on the line" wid 150%
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:112px;" viewBox="0 0 112.32 24.48">
<path d="M2.16,12.24L110.16,12.24" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="56.16" y="12.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">on&nbsp;the&nbsp;line</text>
</svg>

So, if there is just a single text label on a line, you probably want to include either the "`above`" or "`below`" keyword.

```
  line "above" above; move; line "below" below
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:220px;" viewBox="0 0 220.32 47.88">
<path d="M2.16,23.94L74.16,23.94" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="38.16" y="12.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">above</text>
<path d="M146.16,23.94L218.16,23.94" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="182.16" y="35.64" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">below</text>
</svg>

If there are two texts on the object, they straddle the center point above and below, even without the use of the "`above`" and "`below`" keywords:

```
  line wid 300% "text without \"above\"" "text without \"below\""
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:220px;" viewBox="0 0 220.32 47.88">
<path d="M2.16,23.94L218.16,23.94" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="110.16" y="12.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">text&nbsp;without&nbsp;"above"</text>
<text x="110.16" y="35.64" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">text&nbsp;without&nbsp;"below"</text>
</svg>

The "`above`" and "`below`" attributes do not stack or accumulate. Each "`above`" or "`below`" overrides any previous "`above`" or "`below`" for the same text.

If there are multiple texts and all are marked "above" or "below", then all are placed above or below the center point, in order of appearance.
```
  line width 200% "first above" above "second above" above
  move
  line same "first below" below "second below" below
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:364px;" viewBox="0 0 364.32 88.2">
<path d="M2.16,44.1L146.16,44.1" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="74.16" y="12.24" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">first&nbsp;above</text>
<text x="74.16" y="32.4" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">second&nbsp;above</text>
<path d="M218.16,44.1L362.16,44.1" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="290.16" y="55.8" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">first&nbsp;below</text>
<text x="290.16" y="75.96" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">second&nbsp;below</text>
</svg>

### Justify Text Left Or Right

As the "`above`" and "`below`" keywords control up and down positioning of the text, so the "`ljust`" and "`rjust`" keywords control left and right positioning.

For a line, the "`ljust`" means that the left side of the text is flush against the center point of the line, and "`rjust`" means that the right side of the
text is flush against the center point of the line. (In the following diagram, the red dot is at the center of the line.)

```
   line wid 200% "ljust" ljust above "rjust" rjust below
   dot color red at previous.c
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:148px;" viewBox="0 0 148.32 47.88">
<path d="M2.16,23.94L146.16,23.94" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="74.16" y="12.24" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central">ljust</text>
<text x="74.16" y="35.64" text-anchor="end" fill="rgb(0,0,0)" dominant-baseline="central">rjust</text>
<circle cx="74.16" cy="23.94" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
</svg>

For a block object, "`ljust`" shifts the text to be left justified against the left edge of the block (with a small margin) and "`rjust`" puts the text
against the right side of the object (with the same margin).

```
   box "ljust" ljust "longer line" ljust "even longer line" ljust fit
   move
   box "rjust" rjust "longer line" rjust "even longer line" rjust fit
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:370px;" viewBox="0 0 370.31 74.88">
<path d="M2.16,72.72L149.155,72.72L149.155,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="5.58" y="17.28" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central">ljust</text>
<text x="5.58" y="37.44" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central">longer&nbsp;line</text>
<text x="5.58" y="57.6" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central">even&nbsp;longer&nbsp;line</text>
<path d="M221.155,72.72L368.15,72.72L368.15,2.16L221.155,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="364.73" y="17.28" text-anchor="end" fill="rgb(0,0,0)" dominant-baseline="central">rjust</text>
<text x="364.73" y="37.44" text-anchor="end" fill="rgb(0,0,0)" dominant-baseline="central">longer&nbsp;line</text>
<text x="364.73" y="57.6" text-anchor="end" fill="rgb(0,0,0)" dominant-baseline="central">even&nbsp;longer&nbsp;line</text>
</svg>

The behavior of "`ljust`" and "`rjust`" for block objects in Pikchr differs from legacy PIC. In PIC, text is always justified around the center point, as
in lines, but this means there is no easy way to left justify multiple lines of text within a "box" or "file", so the behavior was changed for Pikchr.

Pikchr allows five separate text objects inside another object by combining "`ljust`", "`rjust`", and the default text centering:

```
  box wid 300% \
     "above-ljust" above ljust \
     "above-rjust" above rjust \
     "centered" center \
     "below-ljust" below ljust \
     "below-rjust" below rjust
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:328px;" viewBox="0 0 328.32 76.32">
<path d="M2.16,74.16L326.16,74.16L326.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="5.58" y="18" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central">above-ljust</text>
<text x="322.74" y="18" text-anchor="end" fill="rgb(0,0,0)" dominant-baseline="central">above-rjust</text>
<text x="164.16" y="38.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">centered</text>
<text x="5.58" y="58.32" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central">below-ljust</text>
<text x="322.74" y="58.32" text-anchor="end" fill="rgb(0,0,0)" dominant-baseline="central">below-rjust</text>
</svg>

### Text Attribute "center"

The "`center`" attribute cancels all prior "`above`", "`below`", "`ljust`", and "`rjust`" attributes for the current text object.

### Bold And Italic Font Styles

The "`bold`" and "`italic`" attributes cause the text object to use a bold or italic font. Fonts can be both bold and italic at the same time:

```
  box "bold" bold "italic" italic "bold-italic" bold italic fit
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:108px;" viewBox="0 0 108.599 74.88">
<path d="M2.16,72.72L106.439,72.72L106.439,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="54.2995" y="17.28" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">bold</text>
<text x="54.2995" y="37.44" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" dominant-baseline="central">italic</text>
<text x="54.2995" y="57.6" text-anchor="middle" font-style="italic" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">bold-italic</text>
</svg>

### Monospace Font Family

The "`mono`" or "`monospace`" attributes cause the text object to use a monospace font.

```
  box "monospace" monospace fit
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:100px;" viewBox="0 0 100.858 34.56">
<path d="M2.16,32.4L98.6976,32.4L98.6976,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="50.4288" y="17.28" text-anchor="middle" font-family="monospace" fill="rgb(0,0,0)" dominant-baseline="central">monospace</text>
</svg>

## Aligned Text

The "`aligned`" attribute causes text associated with a straight line to be rotated to align with that line:

```
  arrow go 150% heading 30 "aligned" aligned above
  move to 1cm east of previous.end
  arrow go 150% heading 170 "aligned" aligned above
  move to 1cm east of previous.end
  arrow go 150% north "aligned" aligned above
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:194px;" viewBox="0 0 194.78 120.96">
<polygon points="56.16,8.12076 54.1412,20.2574 46.6588,15.9374" style="fill:rgb(0,0,0)"></polygon>
<path d="M2.16,101.652L53.28,13.1091" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="29.16" y="43.1861" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(-60 29.16,54.8861)" dominant-baseline="central">aligned</text>
<polygon points="131.607,114.48 125.352,103.885 133.861,102.385" style="fill:rgb(0,0,0)"></polygon>
<path d="M112.853,8.12076L130.607,108.808" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="122.23" y="49.6004" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(80 122.23,61.3004)" dominant-baseline="central">aligned</text>
<polygon points="188.3,6.48 192.62,18 183.98,18" style="fill:rgb(0,0,0)"></polygon>
<path d="M188.3,114.48L188.3,12.24" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="188.3" y="48.78" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(-90 188.3,60.48)" dominant-baseline="central">aligned</text>
</svg>

To display rotated text not associated with a line, attach the text to a line that is marked "`invisible`"

```
  box ht 200% wid 50%
  line invis from previous.s to previous.n "rotated text" aligned
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:58px;" viewBox="0 0 58.32 148.32">
<path d="M2.16,146.16L56.16,146.16L56.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="29.16" y="74.16" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(-90 29.16,74.16)" dominant-baseline="central">rotated&nbsp;text</text>
</svg>

Note that the direction of aligned text is the same as the direction of the line itself, so if you draw a line from right to left, the aligned text will
appear upside down:

```
  circle "C1" fit
  circle "C0" at C1+(2.5cm,-0.3cm) fit
  arrow from C0 to C1 "aligned" aligned above chop
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:192px" viewBox="0 0 192.061 67.3369">
<circle cx="25.1645" cy="25.1645" r="23.0045" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="25.1645" y="25.1645" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C1</text>
<circle cx="166.897" cy="42.1724" r="23.0045" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="166.897" y="42.1724" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C0</text>
<polygon points="48.0051,27.9054 59.9578,24.9887 58.9284,33.5672" style="fill:rgb(0,0,0)"></polygon>
<path d="M144.056,39.4315L53.7241,28.5916" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="96.0306" y="21.9684" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(-173.1572266 96.0306,33.6684)" dominant-baseline="central">aligned</text>
</svg>

If you need aligned text on an arrow that goes from right to left, and you do not want the text to be rendered upside-down, draw the arrow from left to
right and include the "<-" attribute so that the arrowhead is at the beginning rather than at the end:

```
  circle "C1" fit
  circle "C0" at C1+(2.5cm,-0.3cm) fit
  arrow from C1 to C0 "aligned" aligned above <- chop
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:192px;" viewBox="0 0 192.061 67.3369">
<circle cx="25.1645" cy="25.1645" r="23.0045" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="25.1645" y="25.1645" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C1</text>
<circle cx="166.897" cy="42.1724" r="23.0045" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></circle>
<text x="166.897" y="42.1724" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C0</text>
<polygon points="48.0051,27.9054 59.9578,24.9887 58.9284,33.5672" style="fill:rgb(0,0,0)"></polygon>
<path d="M53.7241,28.5916L144.056,39.4315" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="96.0306" y="21.9684" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(6.842773413 96.0306,33.6684)" dominant-baseline="central">aligned</text>
</svg>

### Adjusting The Font Size

The "`big`" and "`small`" attributes cause the text to be a little larger or a little smaller, respectively. Two "`big`" attributes cause the text to be larger
still; similarly, two "`small`" attributes make it smaller-than-small. Text size does not increase or decrease beyond two "`big`" or "`small`" keywords.

```
  box "small small" small small "small" small \
    "(normal)" italic \
    "big" big "big big" big big ht 200%
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:112px;" viewBox="0 0 112.32 148.32">
<path d="M2.16,146.16L110.16,146.16L110.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="56.16" y="41.5008" text-anchor="middle" fill="rgb(0,0,0)" font-size="64%" dominant-baseline="central">small&nbsp;small</text>
<text x="56.16" y="56.016" text-anchor="middle" fill="rgb(0,0,0)" font-size="80%" dominant-baseline="central">small</text>
<text x="56.16" y="74.16" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" dominant-baseline="central">(normal)</text>
<text x="56.16" y="96.84" text-anchor="middle" fill="rgb(0,0,0)" font-size="125%" dominant-baseline="central">big</text>
<text x="56.16" y="125.19" text-anchor="middle" fill="rgb(0,0,0)" font-size="156.25%" dominant-baseline="central">big&nbsp;big</text>
</svg>

A "`big`" keyword cancels any prior "`small`" keywords on the same text, and a "`small`" keyword cancels any prior "`big`" keywords.

## Text Is Positioned Around The Center Of The Object

The anchor point for text annotations is usually the center of the bounding box for the whole object. This is intuitive for block objects and straight lines.
But for multi-segment lines, the text might not be near the line itself. For example, in the following four-segment arrow, the red box is the bounding box
and the red dot shows the center of the bounding box. The text label is aligned relative to the center of the bounding box, which is not close to any part
of the actual line.

```
arrow up 1.5cm right 1.5cm then down .5cm right 1cm then up .5cm right .3cm \
   then down 2.5cm right 1cm "text"
box color red thin thin width previous.wid height previous.ht \
   with .c at previous.c
dot at last arrow.c color red behind last arrow
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:224px;" viewBox="0 0 224.073 150.372">
<circle cx="109.877" cy="73.0261" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<polygon points="217.593,143.892 209.304,134.801 217.326,131.592" style="fill:rgb(0,0,0)"></polygon>
<path d="M2.16,87.1994L87.1994,2.16L143.892,30.5065L160.9,2.16L215.454,138.544" style="fill:none;stroke-width:2.16;stroke-linejoin:round;stroke:rgb(0,0,0);"></path>
<text x="109.877" y="73.0261" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">text</text>
<path d="M2.16,143.892L217.593,143.892L217.593,2.16L2.16,2.16Z" style="fill:none;stroke-width:0.969624;stroke:rgb(255,0,0);"></path>
</svg>

If you need to position text beside one specific segment of a multi-segment line, consider creating a separate "invis" line over top of that line segment
and attaching the text to the "invis" line instead. Here is the same arrow as before, but with the text attached to a separate "invis" line that overlays
the second segment of the arrow:

```
arrow up 1.5cm right 1.5cm then down .5cm right 1cm then up .5cm right .3cm \
   then down 2.5cm right 1cm
box color red thin thin width previous.wid height previous.ht \
   with .c at previous.c
dot at last arrow.c color red behind last arrow
line invis from 2nd vertex of last arrow to 3rd vertex of last arrow \
   "text" below aligned
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:224px;" viewBox="0 0 224.073 161.495">
<circle cx="109.877" cy="84.1487" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<polygon points="217.593,155.015 209.304,145.923 217.326,142.714" style="fill:rgb(0,0,0)"></polygon>
<path d="M2.16,98.322L87.1994,13.2826L143.892,41.6291L160.9,13.2826L215.454,149.667" style="fill:none;stroke-width:2.16;stroke-linejoin:round;stroke:rgb(0,0,0);"></path>
<path d="M2.16,155.015L217.593,155.015L217.593,13.2826L2.16,13.2826Z" style="fill:none;stroke-width:0.969624;stroke:rgb(255,0,0);"></path>
<text x="115.546" y="37.5358" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(26.56505118 115.546,27.4558)" dominant-baseline="central">text</text>
</svg>

The anchor point for text is usually the center of the object, but in some cases, the anchor point might be fudged a little. This happens, for example for cylinder objects:

C1: cylinder "text in a" "cylinder" rad 120%
    dot color red at C1.c
    dot color blue at 0.75*C1.rad below C1.c
→ /pikchrshow
The red dot is on the center of the cylinder and the blue dot shows the anchor point for the text. The text is a little lower for cylinders because that
looks better. With out this adjustment of the text center point, the cylinder text would look goofy:

```
C1: cylinder rad 120%
    text "text in a" "cylinder" at C1.c
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:112px;" viewBox="0 0 112.32 76.32">
<path d="M2.16,15.12L2.16,61.2A54 12.96 0 0 0 110.16 61.2L110.16,15.12A54 12.96 0 0 0 2.16 15.12A54 12.96 0 0 0 110.16 15.12" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="56.16" y="37.8" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">text&nbsp;in&nbsp;a</text>
<text x="56.16" y="57.96" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">cylinder</text>
<circle cx="56.16" cy="38.16" r="2.16" style="fill:rgb(255,0,0);stroke-width:2.16;stroke:rgb(255,0,0);"></circle>
<circle cx="56.16" cy="47.88" r="2.16" style="fill:rgb(0,0,255);stroke-width:2.16;stroke:rgb(0,0,255);"></circle>
</svg>

## Containers

A "container" is a list of one or more objects contained within "[...]". A container is a collection of one or more objects that looks like a single
object to the remainder of the script.

For example:

```
    A: [
      oval "Hello"
      arrow
      box "World" radius 4px
    ]
    Border: box thin width A.width+0.5in height A.height+0.5in at A.center
```

The "A" container is composed of an oval, and arrow, and a box with rounded corners. But to the subsequent "Border" box, the "A" container appears
to be a single object. The Border box can reference the overall width and height and the center point of the A container in order to size and position
itself to enclose the container with a 0.25in border:

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:400px;" viewBox="0 0 400.32 148.32" >
<path d="M74.16,110.16L146.16,110.16A36 36 0 0 0 182.16 74.16A36 36 0 0 0 146.16 38.16L74.16,38.16A36 36 0 0 0 38.16 74.16A36 36 0 0 0 74.16 110.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="110.16" y="74.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Hello</text>
<polygon points="254.16,74.16 242.64,78.48 242.64,69.84" style="fill:rgb(0,0,0)"></polygon>
<path d="M182.16,74.16L248.4,74.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M260.16,110.16L356.16,110.16A6 6 0 0 0 362.16 104.16L362.16,44.16A6 6 0 0 0 356.16 38.16L260.16,38.16A6 6 0 0 0 254.16 44.16L254.16,104.16A6 6 0 0 0 260.16 110.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="308.16" y="74.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">World</text>
<path d="M2.16,146.16L398.16,146.16L398.16,2.16L2.16,2.16Z" style="fill:none;stroke-width:1.4472;stroke:rgb(0,0,0);"></path>
</svg>

A container is mostly useful for adding a border around a collection of objects, as shown above, or adding a caption to a diagram. The following diagram
shows what a caption might look like. (Click to see the Pikchr source text.)

```
    A: [
      oval "Hello"
      arrow
      box "World" radius 4px
    ]
    Caption: text "Diagram Caption" italic with .n at 0.1in below A.s
```

<svg xmlns="http://www.w3.org/2000/svg" style="font-size:initial;max-width:328px" viewBox="0 0 328.32 120.96">
<path d="M38.16,74.16L110.16,74.16A36 36 0 0 0 146.16 38.16A36 36 0 0 0 110.16 2.16L38.16,2.16A36 36 0 0 0 2.16 38.16A36 36 0 0 0 38.16 74.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="74.16" y="38.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Hello</text>
<polygon points="218.16,38.16 206.64,42.48 206.64,33.84" style="fill:rgb(0,0,0)"></polygon>
<path d="M146.16,38.16L212.4,38.16" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<path d="M224.16,74.16L320.16,74.16A6 6 0 0 0 326.16 68.16L326.16,8.16A6 6 0 0 0 320.16 2.16L224.16,2.16A6 6 0 0 0 218.16 8.16L218.16,68.16A6 6 0 0 0 224.16 74.16Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="272.16" y="38.16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">World</text>
<text x="164.16" y="103.68" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" dominant-baseline="central">Diagram&nbsp;Caption</text>
</svg>

In legacy PIC, layout direction changes (the "up", "down", "left", and "right" commands) and variable definitions within a container only affect subsequent
statements within the same container. Once the container closes, the prior direction and variable values are restored. Pikchr does not work this way.
In Pikchr, layout direction changes and variable definitions that occur within a container continue to be in effect after the container.

## Object Stacking Order

Objects are normally drawn in the order in which they are defined. Thus objects that are toward the end of the script that overlap with objects near the beginning will appear to be on top.

Sometimes it is desirable for a later object to appear to be behind an early object. This is useful, for example, when using a box to form a colored
background for a group of prior objects. The "behind" attribute with a argument that is the label for any prior object can be added to cause the object
that holds the behind attribute to be drawn before the object that the behind attribute references.



## Enums
| Enum | Description |
|---|---|
| [EPikChrFlags](../../text/text.pikchr/epikchrflags) | Pikchr Flags |

## Functions

### `Function PikChr:String(txt:String, class:String, flags:EPikChrFlags, width:Int Var, height:Int Var)`

Converts a [String](../../brl/brl.blitz/#string) of Pikchr markup, returning an SVG [String](../../brl/brl.blitz/#string).

<br/>

