---
id: pre_post_compilation_scripts
title: Custom Pre/Post Compilation Scripts
sidebar_label: Custom Pre/Post Compilation Scripts
---

With BlitzMax-NG you can now execute Lua code before and after compilation.
This is useful in many cases but some examples that this can be used for are: auto-incrementing
version number, moving files for App bundles and compiling C files.


## Pre-Compilation Scripts

In your BlitzMax source you can include @bmk pragmas, which can be used to call many built
in functions (which can be found in core.bmk and make.bmk) and also run Lua code. These act
just like a line in a script file, except you precede it with `@bmk`. A little example :

```blitzmax
SuperStrict

' @bmk echo *** Building my cool app ***
' @bmk include "my_own_scripts.bmk"
'
' @bmk push cc_opts
' @bmk addccopt -DSPECIAL_OPTION
'
' @bmk make "src/someglue.cpp"
'
' @bmk pop cc_opts
' @bmk make "src/other.cpp"
'
```

"echo" simply prints the following text to the console.

"include" runs the Lua code contained in the file file specified

The "push" command saves the current state of a variable, allowing you to make modification to it,
after which time you can "pop" it back to its old state. Handy for on-the-fly tweaks :-)

And "make" compiles the source file specified.

Again, all these commands are defined in core.bmk and make.bmk

As well as writing the commands into your project source file (*.bmx), you can also just add a "pre.bmk" file and it gets executed before compilation of your project. BlitzMax prioritizees "pre.projectfile.bmk" over "pre.bmk" so you can use this if you have multiple project source files in one directory with some of them requiring individual pre-compilation scripts.

## Post-Compilation Scripts

You can also get the compiler to run Lua code after it has compiled your BlitzMax source file,
just add a "post.bmk" (or less generic "post.projectfile.bmk") file into the same directory as your application. It will then be loaded after completion of the compilation stage, but before execution (if you chose to Run it). This can
be useful if you want to copy files into an App Bundle, or run the exe through some compression utility, for example.

## Example 1: Increment Version Number
```blitzmax
SuperStrict


'
' @bmk include file_increment.bmk
' @bmk doIncrement version.txt
'
Incbin "version.txt"

Print "Version = " + LoadText("incbin::version.txt")
```

The file version.txt has one line in it, with a number. This number will increment every time this file is compiled.

The interesting bit of the application are those two comment lines which begin with `@bmk`.
These are "pragmas" which allow you to perform scripting as part of the compilation. The script
parts are executed before the file is compiled. The first line includes an external script file.
The second line runs a command, passing it a parameter.

Let's take a look at the script file, file_increment.bmk

```lua
@define doIncrement
	file = io.open(arg1, "r")
	version = file:read()
	file:close()

	version = version + 1

	file = io.open(arg1,"w")
	file:write(version)
	file:close()
@end
```
The @define creates a new function called "doIncrement". Everything between @define and @end
is Lua. (more or less). Function arguments are available as arg0, arg1, etc... where arg0 is all
the arguments as one big string, and arg1 is the first argument, etc. So, the function doIncrement
expects that the first argument is a filename. It loads the first line of the file, and increments
the number. Then it saves that number back into the file


## Example 2: Using Variables
You can define a variable on-the-fly...
```
myname=Brucey
echo %myname%
```

And you can also use variables within function definitions

```lua
@define test
  if %myname% == "Brucey" then
    print("Hi there!")
  end
@end
```

OK lets put it all together into a simple but pointless program file:

```blitzmax
SuperStrict

' @bmk include test_file.bmk
' @bmk myname=Brucey
' @bmk test
```
and the test_file.bmk:

```lua
@define test
  if %myname% == "Brucey" then
    print("Hi there!")
  end
@end
```
So you should see "Hi there!" being printed to the console when you run the program.

What actually happens during script loading is that the script is processed and any variables
are transformed into Lua-friendly code. You can also use global environment variables with the
same syntax. For example `%path%` would equate to the current system PATH environment variable.
(you can use upper or lower case).


## Example 3: Post Compile Script

This example moves important mac files into the application bundle everytime you compile your
project. Much easier than doing it by hand!

post.bmk file:

```lua
# MacOS post build script
#
#
@define doPostInstall

	# only interested for Mac platform

	if bmk.Platform() == "macos" then

		#copy icons
		sys.CopyFile(%buildpath% .. "/Bin/icon.icns", %exepath% .. "/../Resources/" .. %outfile% .. ".icns")

		#copy info.plist
		sys.CopyFile(%buildpath% .. "/Bin/info.plist", %exepath% .. "/../info.plist")

	end

@end

# run the post install
doPostInstall
```

The code inside the `@define` block is basic Lua, with some enhancements. For example variables
wrapped in %% are automatically translated by BMK at runtime. This post.bmk file will be run
after you compile a BlitzMax file within the same folder as the post.bmk file.

