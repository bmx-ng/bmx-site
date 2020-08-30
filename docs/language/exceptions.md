---
id: exceptions
title: Exceptions
sidebar_label: Exceptions
---

BlitzMax provides a mechanism for handling runtime errors known as **exception handling**.

An exception is actually just an object. You can **throw** and **catch** exceptions using the [Throw] command and a [Try] /
[Catch] block. Here is a simple example:

```blitzmax
Function ExTest()
    Throw "Bingo!"
End Function

Try
    ExTest()
Catch ex:Object
    Print ex.ToString()
End Try
```
Throwing an exception causes the program to jump to the most recent [Catch] block. You can provide multiple catch blocks
for catching exceptions of different types. If there is no appropriate [Catch] block for the exception, then the program
jumps to the _next_ most recent [Catch] block. If no catch block can be found to deal with the exception, the program
will end.

## Finally

[Finally] is an optional block which can be used with [Try] / [Catch] and [Try] blocks. The [Finally] block is always the last block :
```blitzmax
Try

Catch something

Finally

End Try
```

The [Finally] block always executes when the [Try] block exists. This is regardless of whether the [Try] block handles the exception or not. This feature can be useful as a way to always ensure some cleanup routine is always executed, even when no exceptions are anticipated.

The following is an example of a [Try] / [Finally] block used to guarantee the freeing of a lock before the method returns : 
```blitzmax
    Method process()
        Try
            Lock()

            ' do some stuff

        Finally
            Unlock()
        End Try
    End Method
```
In this example, even if an exception is raised during the processing, `Unlock()` will always be called before leaving the method.

## Built-in Exceptions
BlitzMax has several built-in exception types, all of which extend type TBlitzException. These are:

| Exception  | Cause  |
|---|---|
| TNullMethodException  | Thrown when a program attempts to call an abstract method.  |
| TNullFunctionException  | Thrown when a program attempts to call a null function.  |
| TNullObjectException  | Thrown when a program attempts to access a null object (only thrown in debug mode).  |
| TArrayBoundsException  | Thrown when a program attempts to access an array element outside of an array's bounds (only thrown in debug mode).  |
| TRuntimeException  | Thrown by the [RuntimeError] or [Assert] commands.  |

[Throw]: ../../api/brl/brl.blitz/#throw
[Try]: ../../api/brl/brl.blitz/#try
[Catch]: ../../api/brl/brl.blitz/#catch
[Finally]: ../../api/brl/brl.blitz/#finally
[RuntimeError]: ../../api/brl/brl.blitz/#function-runtimeerror-message
[Assert]: ../../api/brl/brl.blitz/#assert
