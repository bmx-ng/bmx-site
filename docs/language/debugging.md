---
id: debugging
title: Debugging
sidebar_label: Debugging
---

BlitzMax provides several commands to help with debugging your programs:

| Command | Description |
|---|---|
| [DebugStop] | In debug mode, causes the program to stop executing and activates the debugger. In release mode, no effect.  |
| [DebugLog] StringExpression  | In debug mode, causes `StringExpression` to be printed to the debugger output window. In release mode, no effect.  |
| [RuntimeError] StringExpression  | Causes a runtime error exception (see: [Exceptions](../exceptions) ) to be thrown with the specified string.  |
| [Assert] Expression [Else] StringExpression  | In debug mode, causes a [RuntimeError] if `Expression` evaluates to false. No effect in release mode.  |

[Assert] is particularly useful for validating function arguments. For example:

```blitzmax
Function SetAlpha( alpha# )
    Assert alpha>=0 And alpha<=1 Else "Alpha value out of range"
    ' rest of function here...
End Function
```
However, since asserts are taken out in release mode, be careful that your asserts don't have any **side effects** -
code that may affect the execution of the program.

[DebugStop]: ../../api/brl/brl.blitz/#function-debugstop
[DebugLog]: ../../api/brl/brl.blitz/#function-debuglog-message
[RuntimeError]: ../../api/brl/brl.blitz/#function-runtimeerror-message
[Else]: ../../api/brl/brl.blitz/#else
[Assert]: ../../api/brl/brl.blitz/#assert
