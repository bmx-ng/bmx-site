---
id: pub.freeprocess
title: Pub.FreeProcess
sidebar_label: Pub.FreeProcess
---


The BlitzMax freeprocess module lets you execute other programs


## Functions

### `Function CreateProcess:TProcess(cmd:String,flags:Int=0)`

Creates a process

#### Returns
TProcess object that is linked to the process you have started


#### Example
```blitzmax
SuperStrict 

Local status:Int

'Start notepad program
'By Default processes are attached to the program (they will automatically terminate when your program is closed)
Local Process1:TProcess = CreateProcess("notepad.exe")

Print("notepad started!")
Delay(1000)


'Check current status of notepad, 1 is running, 0 is closed
status = ProcessStatus(Process1)
If status = 1 Then 
	Print("notepad still running")
Else
	Print("notepad has been closed")
EndIf

Delay(1000)

'Close notepad
TerminateProcess(Process1)

status = ProcessStatus(Process1)
If status = 1 Then 
	Print("notepad still running")
Else
	Print("notepad has been closed")
EndIf
```
<br/>

### `Function ProcessStatus:Int(process:TProcess)`

Checks status of program

#### Returns
1 if program is still running and 0 otherwise.


#### Example
```blitzmax
SuperStrict 

Local status:Int

'Start notepad program
'By Default processes are attached to the program (they will automatically terminate when your program is closed)
Local Process1:TProcess = CreateProcess("notepad.exe")

Print("notepad started!")
Delay(1000)


'Check current status of notepad, 1 is running, 0 is closed
status = ProcessStatus(Process1)
If status = 1 Then 
	Print("notepad still running")
Else
	Print("notepad has been closed")
EndIf

Delay(1000)

'Close notepad
TerminateProcess(Process1)

status = ProcessStatus(Process1)
If status = 1 Then 
	Print("notepad still running")
Else
	Print("notepad has been closed")
EndIf
```
<br/>

### `Function DetachProcess:Int(process:TProcess)`

Detaches a process from program

#### Example
```blitzmax
SuperStrict 


'Start notepad program
'By Default processes are attached to the program (they will automatically terminate when your program is closed)
Local AttachedProcess:TProcess = CreateProcess("notepad.exe")
'Detach notepad process
DetachProcess(AttachedProcess)

'Reattach notepad process
AttachProcess(AttachedProcess)

Print("notepad started!")
Delay(1000)

'Create new calculator process and detach from program (will not close when you close your program)
Local DetachedProcess:TProcess = CreateProcess("calc.exe")
DetachProcess(DetachedProcess)

Print("calculator started!")
Delay(1000)

Print("Program ending, notepad should close with it, calculator should stay open")
End
```
<br/>

### `Function AttachProcess:Int(process:TProcess)`

Reattaches a process from program

#### Example
```blitzmax
SuperStrict 


'Start notepad program
'By Default processes are attached to the program (they will automatically terminate when your program is closed)
Local AttachedProcess:TProcess = CreateProcess("notepad.exe")
'Detach notepad process
DetachProcess(AttachedProcess)

'Reattach notepad process
AttachProcess(AttachedProcess)

Print("notepad started!")
Delay(1000)

'Create new calculator process and detach from program (will not close when you close your program)
Local DetachedProcess:TProcess = CreateProcess("calc.exe")
DetachProcess(DetachedProcess)

Print("calculator started!")
Delay(1000)

Print("Program ending, notepad should close with it, calculator should stay open")
End
```
<br/>

### `Function TerminateProcess:Int(process:TProcess)`

End Process

#### Returns
1 if termination of program was successful and 0 otherwise.


#### Example
```blitzmax
SuperStrict 

Local status:Int

'Start notepad program
'By Default processes are attached to the program (they will automatically terminate when your program is closed)
Local Process1:TProcess = CreateProcess("notepad.exe")

Print("notepad started!")
Delay(1000)


'Check current status of notepad, 1 is running, 0 is closed
status = ProcessStatus(Process1)
If status = 1 Then 
	Print("notepad still running")
Else
	Print("notepad has been closed")
EndIf

Delay(1000)

'Close notepad
TerminateProcess(Process1)

status = ProcessStatus(Process1)
If status = 1 Then 
	Print("notepad still running")
Else
	Print("notepad has been closed")
EndIf
```
<br/>

### `Function KillProcess:Int(process:TProcess)`

Forcefully End Process

#### Returns
1 if forceful termination of program was successful and 0 otherwise.


<br/>

