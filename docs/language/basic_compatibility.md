---
id: basic_compatibility
title: Basic Compatibility
sidebar_label: Basic Compatibility
---

This section covers some of the differences between BlitzMax and 'classic' BASIC, and introduces features that help
overcome some of classic BASIC's shortcomings.

## Strict mode

Classic BASIC allows you to declare variables **on the fly**. For example, consider a program consisting of:

```blitzmax
For k=1 To 10
    sum=sum+k
Next
Print sum
```
This program automatically creates 2 local variables: ```k``` and ```sum```. However, this behaviour can often lead to
unexpected bugs. For example, if you mistyped one of the ```sum``` variables, the program would not work as expected.
No error would be given - a new variable would simply be created.

By default, BlitzMax NG implements what is known as `Strict` mode to override this behaviour.

`Strict` must appear at the top of your program before any actual program code and puts your program into **strict mode**.
`Strict` mode forces you to declare all variables before use. For example, rewriting the above program in strict mode
results in:

```blitzmax
Strict
Local sum, k
For k = 1 To 10
    sum = sum + k
Next
Print sum
```
If you were to mistype one of the variable names in this program, you would receive an **identifier not found** error
when compiling, allowing you to easily find and correct the problem.

In `Strict` mode, a variable whose type is not declared is assumed to be an `Int`.

## SuperStrict mode

For even greater strictness, there is also `SuperStrict` mode.
`SuperStrict` mode forces you to declare the type of each of your variables, as well as the return types of functions
and methods. This can further assist in solving issues in your program by eliminating potential variable type confusion.

Rewriting the above program in `SuperStrict` mode results in:

```blitzmax
SuperStrict
Local sum:Int, k:Int
For k = 1 To 10
    sum = sum + k
Next
Print sum
```
With all your variables **strongly typed** the compiler will be less forgiving and provide you with better errors if
you attempt to mix incompatible variable types together.

## Arrays

Blitzmax does not support the Dim statement for array creation. Instead, arrays in BlitzMax are real types - they can
be passed to functions, returned from functions and placed in variables.

To create a classic BASIC style array in BlitzMax, use a global variable. For example:

```blitzmax
Global my_array$[100]   ' create a 100 element string array
```
Also note that arrays in BlitzMax are not **1 bigger** than their dimensioned size - the 100 element array above
contains 100 elements, numbered 0 through 99 inclusive.

BlitzMax also does not support a **Redim** operation. Instead, you can use **slices**. For example:

```blitzmax
Global my_array$[100]       ' create a 100 element string array
my_array=my_array[..200]    ' now a 200 element array!
```

## Data, Read and Restore

Data, Read and Restore are supported but have been renamed to `DefData`, `ReadData` and `RestoreData`. Data labels must
also be prefixed with a ```#``` character.

## Type tag shortcuts

When declaring variables and function return types, BlitzMax allows you to use BASIC style **type tags**. These are as
follows:

| Type tag  | Equivalent type  |
|---|---|
| %  | `Int`  |
| #  | `Float`  |
| !  | `Double`  |
| $  | `String`  |

For example, a string variable can be declared in two ways:

```blitzmax
Local a_string:String
Local another_string$
```
Mac users whose keyboards do not feature the ```#``` character should use ```Alt 3```.
