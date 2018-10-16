---
id: identifiers
title: Identifiers
sidebar_label: Identifiers
---

Identifiers are used to name constants, variables, functions and user defined types.

Identifiers start with a letter or underscore and can be followed by any combination of letters,
digits or underscores. For example, the following are all valid identifiers:

```blitzmax
player1_up
your_name
_hello_world_
```
Identifiers in BlitzMax are case-insensitive. This means that the identifiers `hello`, `Hello`
and `HELLO` are all treated as the same identifier.

The following identifiers are reserved for use by the BlitzMax language, and can not be used as general
purpose identifiers:

    Strict SuperStrict Module ModuleInfo Framework
    End Return Continue Exit Assert
    Public Private
    True False Pi Null Self Super
    Byte Short Int Long Float Double Object String
    UInt ULong Size_T
    Var Ptr VarPtr Chr Len Asc SizeOf Sgn Abs Min Max Mod
    Shl Shr Sar Not And Or
    New Release Delete
    Incbin IncbinPtr IncbinLen
    Include Import Extern EndExtern
    Function EndFunction
    Type EndType Extends
    Interface EndInterface
    Struct EndStruct
    Method EndMethod
    Local Global Const Field
    Abstract Final ReadOnly Export
    Rem EndRem
    If Then Else ElseIf EndIf
    For To Next Step EachIn
    While Wend
    Repeat Until Forever
    Select Case Default EndSelect
    Try Catch EndTry Throw
    DefData ReadData RestoreData
    Alias
    Operator Where
