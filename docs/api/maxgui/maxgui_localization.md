---
id: maxgui.localization
title: MaxGUI.Localization
sidebar_label: MaxGUI.Localization
---


MaxGUI.Localization is a simple yet powerful localization engine that you can use to localize your applications.
Although the module is designed primarily for use with the MaxGUI toolkit, it is self-contained and so can be 
imported into other BlitzMax games and applications separately, without the overhead of the rest of MaxGUI.


It is recommended that you read through the command set below to familiarize yourself with the module before
use.  

Whenever applicable, MaxGUI coders should use the [LocalizeGadget](../../maxgui/maxgui.maxgui/#function-localizegadget-gadgettgadget-localizationtext-localizationtooltip-) command in [MaxGUI.MaxGUI](../maxgui/maxgui_maxgui.md) in favour of 
[LocalizeString](../../maxgui/maxgui.localization/#function-localizestring-localizationstring-) to ensure that gadgets are updated when the language or localization settings are changed.

## Functions

### `Function CreateLanguage:TMaxGuiLanguage( name$ )`

Create a new empty language to be used with MaxGUI's localization system.

This function is provided in case it is necessary to create a new language from scratch.
In the majority of cases, languages should instead be loaded from INI files using [LoadLanguage](../../maxgui/maxgui.localization/#function-loadlanguagetmaxguilanguage-urlobject-).

Use the [DefineLanguageToken](../../maxgui/maxgui.localization/#function-definelanguagetoken-languagetmaxguilanguage-token-value-), [RemoveLanguageToken](../../maxgui/maxgui.localization/#function-removelanguagetoken-languagetmaxguilanguage-token-) and [ClearLanguageTokens](../../maxgui/maxgui.localization/#function-clearlanguagetokens-languagetmaxguilanguage-) commands to add to and
modify the returned language.  [SetLanguageName](../../maxgui/maxgui.localization/#function-setlanguagename-languagetmaxguilanguage-name-) and [LanguageName](../../maxgui/maxgui.localization/#function-languagename-languagetmaxguilanguage-) may also be useful.

See Also: [LoadLanguage](../../maxgui/maxgui.localization/#function-loadlanguagetmaxguilanguage-urlobject-), [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-), [LocalizeString](../../maxgui/maxgui.localization/#function-localizestring-localizationstring-) and [LocalizeGadget](../../maxgui/maxgui.maxgui/#function-localizegadget-gadgettgadget-localizationtext-localizationtooltip-).


#### Example
```blitzmax
' createlanguage.bmx

Strict

Import MaxGUI.Drivers

' Enable the localization engine, and automatically localize gadgets when they are created
SetLocalizationMode(LOCALIZATION_ON|LOCALIZATION_OVERRIDE)

Global window:TGadget = CreateWindow("{{window_title}}",100,100,320,240,Null,WINDOW_TITLEBAR|WINDOW_STATUS)
	
	Global btnEnglish:TGadget = CreateButton("{{btn_english}}",5,5,100,30,window,BUTTON_RADIO)
	Global btnFrench:TGadget = CreateButton("{{btn_french}}",5,40,100,30,window,BUTTON_RADIO)
	SetButtonState( btnEnglish, True )

' Create a new 'English' language
Global lngEnglish:TMaxGUILanguage = CreateLanguage("English (English)")

DefineLanguageToken( lngEnglish, "window_title", "My Window" )
DefineLanguageToken( lngEnglish, "btn_english", "English" )
DefineLanguageToken( lngEnglish, "btn_french", "French" )

' Create a new 'French' language
Global lngFrench:TMaxGUILanguage = CreateLanguage("Français (French)")

DefineLanguageToken( lngFrench, "window_title", "Ma Fenêtre" )
DefineLanguageToken( lngFrench, "btn_english", "Anglais" )
DefineLanguageToken( lngFrench, "btn_french", "Français" )

' Set the default language
SetLocalizationLanguage( lngEnglish )

Repeat
	SetStatusText window, LanguageName( LocalizationLanguage() )
	Select WaitEvent()
		Case EVENT_GADGETACTION
			Select EventSource()
				Case btnEnglish
					SetLocalizationLanguage( lngEnglish )
				Case btnFrench
					SetLocalizationLanguage( lngFrench )
			EndSelect
		Case EVENT_APPTERMINATE, EVENT_WINDOWCLOSE
			End
	EndSelect
Forever
```
<br/>

### `Function LoadLanguage:TMaxGuiLanguage( url:Object )`

Load a language from an INI text stream.

<b>url</b> can be a filepath or any other readable [TStream](../../brl/brl.stream/tstream) object.

The INI text stream must contain, at minimum, an INI section labelled '[LanguageDefinition]' and
a 'LanguageID' token which should be assigned an appropriate language name.

A typical language INI file may look something like:

```
[LanguageDefinition]

LanguageID = Français (French)
LanguageVersion = v0.1
LanguageAuthor = Various Sources

; Toolbar Tips
tb_new                                       = "Nouveau"
tb_open                                      = "Ouvrir"
tb_close                                     = "Fermer"
tb_save                                      = "Enregistrer"
tb_cut                                       = "Couper"
tb_copy                                      = "Copier"
tb_paste                                     = "Coller"
...
tb_home                                      = "Page d'Accueil"
tb_back                                      = "Précédente"
tb_forward                                   = "Suivante"

; Tabs
tab_help                                     = "Aide"
tab_output                                   = "Sortie"
tab_locked:%1                                = "construction:%1"

; Time Format, by example: 13:09:02
; h = 1 (12 hour clock)       hh = 13 (24 hour clock)
; m = 9 (without leading 0)   mm = 09 (including leading 0)
; s = 2 (without leading 0)   ss = 02 (including leading 0)
; pp = {{pm}} (or '{{am}}' from 00:00 -> 11:59)

longtime = hh:mm:ss pp
shorttime = {{longtime}}          ; We want short time to be formatted exactly like {{longtime}}

; Date Format, by example: 9th June 2009
; d = 9    dd = 09    ddd = {{Wed}}    dddd = {{Wednesday}}
; m = 6    mm = 06    mmm = {{Jun}}    mmmm = {{June}}
; yy = 09  yyyy = 2009             oo = {{9th}}

longdate = dddd oo mmmm dddd      ; e.g. Wednesday 9th June 2009
shortdate = dd/mm/yy              ; e.g. 09/06/09

; AM / PM
am = AM
pm = PM

; Ordinals

1st = 1e
2nd = 2er
3rd = 3e
4th = 4e
; etc.

; Days of the week

Monday = "Lundi"
Mon = "Lun"
Tueday = "Mardi"
Tue = "Mar"
Wednesday = "Mercredi"
Wed = "Mer"
Thursday = "Jeudi"
Thu = "Jeu"
Friday = "Vendredi"
Fri = "Ven"
Saturday = "Samedi"
Sat = "Sam"
Sunday = "Dimanche"
Sun = "Dim"
````


Note how a semicolon ';' is used to mark the start of a line comment.

INI files support the following escape sequence characters:

<table><tr><td> <b>INI Escape Sequence</b></td><td><b>BlitzMax Equivalent</b></td></tr><tr><td>  \\</td><td>\ </td></tr><tr><td>  \r</td><td>~r</td></tr><tr><td>  \n</td><td>~n</td></tr><tr><td>  \t</td><td>~t</td></tr><tr><td>  \#</td><td>#</td></tr><tr><td>  \;</td><td>;</td></tr><tr><td>  \:</td><td>:</td></tr></table>


The bottom three escape sequences are only strictly required if the value of the INI key is not enclosed
in quotes.  For example, the following definitions are expected to evaluate to the same string ( #;: ).

```
MyToken = \#\;\:
MyToken = "#;:"
MyToken = "\#\;\:"
````


Use the [DefineLanguageToken](../../maxgui/maxgui.localization/#function-definelanguagetoken-languagetmaxguilanguage-token-value-), [RemoveLanguageToken](../../maxgui/maxgui.localization/#function-removelanguagetoken-languagetmaxguilanguage-token-) and [ClearLanguageTokens](../../maxgui/maxgui.localization/#function-clearlanguagetokens-languagetmaxguilanguage-) commands to add to and
modify the returned language.  [SetLanguageName](../../maxgui/maxgui.localization/#function-setlanguagename-languagetmaxguilanguage-name-) and [LanguageName](../../maxgui/maxgui.localization/#function-languagename-languagetmaxguilanguage-) may also be useful.

To construct a new language from scratch, use the [CreateLanguage](../../maxgui/maxgui.localization/#function-createlanguagetmaxguilanguage-name-) command instead.

See Also: [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-), [SaveLanguage](../../maxgui/maxgui.localization/#function-savelanguage-languagetmaxguilanguage-urlobject-), [LocalizeString](../../maxgui/maxgui.localization/#function-localizestring-localizationstring-) and [LocalizeGadget](../../maxgui/maxgui.maxgui/#function-localizegadget-gadgettgadget-localizationtext-localizationtooltip-).


<br/>

### `Function SaveLanguage( language:TMaxGuiLanguage, url:Object )`

Saves a language as an INI section to the supplied stream.

<b>url</b> can be a filepath or any other writable [TStream](../../brl/brl.stream/tstream) object.

If <b>url</b> is a string ending in "/" or "\", it is assumed that <b>url</b> is a directory path and a default filename
will be appended like so:

```
url = String(url) + LanguageName(language).Split(" ")[0] + ".language.ini"
````


WARNING: This command will automatically overwrite any existing file at the supplied/resulting file path.

See Also: [LoadLanguage](../../maxgui/maxgui.localization/#function-loadlanguagetmaxguilanguage-urlobject-), [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-), [LocalizeString](../../maxgui/maxgui.localization/#function-localizestring-localizationstring-) and [LocalizeGadget](../../maxgui/maxgui.maxgui/#function-localizegadget-gadgettgadget-localizationtext-localizationtooltip-).


<br/>

### `Function SetLanguageName( language:TMaxGuiLanguage, name$ )`

Redefine a language's name.

See Also: [LanguageName](../../maxgui/maxgui.localization/#function-languagename-languagetmaxguilanguage-), [LoadLanguage](../../maxgui/maxgui.localization/#function-loadlanguagetmaxguilanguage-urlobject-), [CreateLanguage](../../maxgui/maxgui.localization/#function-createlanguagetmaxguilanguage-name-) and [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-).


<br/>

### `Function LanguageName$( language:TMaxGuiLanguage )`

Returns a language's name.

See Also: [SetLanguageName](../../maxgui/maxgui.localization/#function-setlanguagename-languagetmaxguilanguage-name-), [LoadLanguage](../../maxgui/maxgui.localization/#function-loadlanguagetmaxguilanguage-urlobject-), [CreateLanguage](../../maxgui/maxgui.localization/#function-createlanguagetmaxguilanguage-name-) and [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-).


<br/>

### `Function DefineLanguageToken( language:TMaxGuiLanguage, token$, value$ )`

Define a language-specific value for a localization token.

Localization tokens are case insensitive, and if a token definition already exists in the language
the token value will be overwritten with this most recent <b>value$</b>.

See Also: [LoadLanguage](../../maxgui/maxgui.localization/#function-loadlanguagetmaxguilanguage-urlobject-), [CreateLanguage](../../maxgui/maxgui.localization/#function-createlanguagetmaxguilanguage-name-), [SaveLanguage](../../maxgui/maxgui.localization/#function-savelanguage-languagetmaxguilanguage-urlobject-) and [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-).


<br/>

### `Function LanguageTokenDefinition$( language:TMaxGuiLanguage, token$ )`

Look-up the value of a token for a specific language.

Localization tokens are case insensitive, and are either loaded in with the language or defined
using the [DefineLanguageToken](../../maxgui/maxgui.localization/#function-definelanguagetoken-languagetmaxguilanguage-token-value-) command.

If an explicit token definition is not found in the language, the <b>token$</b> string is returned as it was passed.

See Also: [LoadLanguage](../../maxgui/maxgui.localization/#function-loadlanguagetmaxguilanguage-urlobject-), [CreateLanguage](../../maxgui/maxgui.localization/#function-createlanguagetmaxguilanguage-name-), [SaveLanguage](../../maxgui/maxgui.localization/#function-savelanguage-languagetmaxguilanguage-urlobject-) and [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-).


<br/>

### `Function RemoveLanguageToken( language:TMaxGuiLanguage, token$ )`

Remove a token definition from a language.

The only token which cannot be removed is 'LanguageID' as every language requires this one token to be defined -
it defines the language name.  If a matching token isn't already defined, then the command returns silently.

Note: Localization tokens are case insensitive so the following commands are all requesting the same token to be removed:

```
RemoveLanguageToken( language, "WelcomeMessage" )
RemoveLanguageToken( language, "WELCOMEMESSAGE" )
RemoveLanguageToken( language, "welcomemessage" )
RemoveLanguageToken( language, "WeLcOmEmEsSaGe" )
````


See Also: [ClearLanguageTokens](../../maxgui/maxgui.localization/#function-clearlanguagetokens-languagetmaxguilanguage-), [DefineLanguageToken](../../maxgui/maxgui.localization/#function-definelanguagetoken-languagetmaxguilanguage-token-value-), [LoadLanguage](../../maxgui/maxgui.localization/#function-loadlanguagetmaxguilanguage-urlobject-), [CreateLanguage](../../maxgui/maxgui.localization/#function-createlanguagetmaxguilanguage-name-), [SaveLanguage](../../maxgui/maxgui.localization/#function-savelanguage-languagetmaxguilanguage-urlobject-) and [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-).


<br/>

### `Function ClearLanguageTokens( language:TMaxGuiLanguage )`

Removes all the tokens defined in a language.

The only token which will not be removed is 'LanguageID' as every language requires this one token to be defined -
it defines the language name.

See Also: [RemoveLanguageToken](../../maxgui/maxgui.localization/#function-removelanguagetoken-languagetmaxguilanguage-token-), [DefineLanguageToken](../../maxgui/maxgui.localization/#function-definelanguagetoken-languagetmaxguilanguage-token-value-), [LoadLanguage](../../maxgui/maxgui.localization/#function-loadlanguagetmaxguilanguage-urlobject-), [CreateLanguage](../../maxgui/maxgui.localization/#function-createlanguagetmaxguilanguage-name-), [SaveLanguage](../../maxgui/maxgui.localization/#function-savelanguage-languagetmaxguilanguage-urlobject-) and [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-).


<br/>

### `Function LocalizeString$( localizationstring$ )`

Returns the localized version of a string.

This function takes one parameter: <b>localizationstring$</b>.

A localization string is just like any other string except that any phrase enclosed in a double pair of
curly-braces is identified as a localization token.  For example, the following examples all use valid
localization strings.

```blitzmax
LocalizeString("{{welcomemessage}}")                      'Localization token(s): welcomemessage
LocalizeString("{{apptitlelabel}}: {{AppTitle}}")         'Localization token(s): apptitlelabel, AppTitle
LocalizeString("Current Time: {{CurrentTime}}")           'Localization token(s): CurrentTime
```

Localization tokens are case insensitive, and may be made up of any combination of alphanumeric
characters.  Firstly, the token is tested to see if it is a reserved word.  The following tokens
are currently reserved (although more maybe added in the future):

<table><tr><td> <b>Localization Token</b></td><td><b>Token Will Be Replaced With...</b></td></tr><tr><td>  AppDir</td><td>The value of the [AppDir](../../brl/brl.blitz/#global-appdirbbappdir) global constant.</td></tr><tr><td>  AppFile</td><td>The value of the [AppFile](../../brl/brl.blitz/#global-appfilebbappfile) global constant.</td></tr><tr><td>  AppTitle</td><td>The value of the [AppTitle](../../brl/brl.blitz/#global-apptitlebbapptitle) global constant.</td></tr><tr><td>  LaunchDir</td><td>The value of the [LaunchDir](../../brl/brl.blitz/#global-launchdirbblaunchdir) global constant.</td></tr><tr><td>  GCMemAlloced</td><td>The value returned by the [GCMemAlloced](../../brl/brl.blitz/#function-gcmemallocedsizet) function (at the moment the token is parsed).</td></tr></table>


There are also some reserved date and time tokens which will display the current date and time (at the
moment of parsing) using any formats defined in the current language.  If there are no matching formats
explicitly defined, the formats default to:

<table><tr><td> <b>Localization Token</b></td><td><b>Default Format</b></td><td><b>Sample Output</b></td></tr><tr><td>  ShortTime</td><td>`"hh:mm pp"`</td><td>`02:36 {{pm}}`</td></tr><tr><td>  LongTime</td><td>`"hh:mm:ss"`</td><td>`14:36:51`</td></tr><tr><td>  ShortDate</td><td>`"dd/mm/yy"`</td><td>`04/08/09`</td></tr><tr><td>  LongDate</td><td>`"dddd oo mmmm yyyy"`</td><td>`{{Monday}} \u007b\u007b4th}} {{August}} 2009`</td></tr></table>


Notice how any text-based time and date information is wrapped in curly braces.  These tokens will be
localized, just like any other token, and so can be modified by adding a corresponding entry to the
localization language.

This also demonstrates the ability of the localization parser to handle nested tokens.  To prevent lock-
ups, the localization parser checks for cyclic token definitions, and if one is encountered the token will
be simply replaced with '!ERROR!' and the the offending localization string will be identified in the warning
message written to standard error.

If and only if the localization token isn't reserved will the current localization language be queried.  If
no localization language is selected, or if there is no matching token defined in the current language, the
token will simply be stripped of its curly braces in the returned string.  Each language is required to have
at least one token defined: `{{LanguageID}}`.  This should represent the language name e.g. 'Français (French)'.

<i>NOTE: This function requires the LOCALIZATION_ON flag to be set (see [SetLocalizationMode](../../maxgui/maxgui.localization/#function-setlocalizationmode-modeint-localizationon-)) otherwise
the function will simply return <b>localizationstring$</b> exactly as it was passed (including any curly braces).</i>

See Also: [SetLocalizationMode](../../maxgui/maxgui.localization/#function-setlocalizationmode-modeint-localizationon-), [LocalizationMode](../../maxgui/maxgui.localization/#function-localizationmodeint), [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-) and [LocalizationLanguage](../../maxgui/maxgui.localization/#function-localizationlanguagetmaxguilanguage).


<br/>

### `Function SetLocalizationMode( Mode:Int = LOCALIZATION_ON )`

Enable or disable the localization engine, and set other localization modes.

The mode can be set to:

<table><tr><td> <b>Constant</b></td><td><b>Meaning</b></td></tr><tr><td>  LOCALIZATION_OFF</td><td>Any localized gadgets will display their localizedtext$ as their actual text.</td></tr><tr><td>  LOCALIZATION_ON</td><td>Localized gadgets will use the current language to display their text.</td></tr></table>


Either mode can be combined (btiwse OR'd) with LOCALIZATION_OVERRIDE, which will cause gadgets
to become automatically 'localized' when they are created, with any <b>text$</b> parameters supplied
to the <b>CreateGadget()</b> functions being interpreted as localization strings.

If any window menus are localized, [UpdateWindowMenu](../../maxgui/maxgui.maxgui/#function-updatewindowmenu-windowtgadget-) may have to be called on all relevant windows for the text changes
to be visible.

See Also: [LocalizationMode](../../maxgui/maxgui.localization/#function-localizationmodeint), [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-), [LocalizationLanguage](../../maxgui/maxgui.localization/#function-localizationlanguagetmaxguilanguage) and [LocalizeGadget](../../maxgui/maxgui.maxgui/#function-localizegadget-gadgettgadget-localizationtext-localizationtooltip-).


<br/>

### `Function LocalizationMode:Int()`

Returns the value previously set using [SetLocalizationMode](../../maxgui/maxgui.localization/#function-setlocalizationmode-modeint-localizationon-).

The default value for a MaxGUI program is LOCALIZATION_OFF.

See [SetLocalizationMode](../../maxgui/maxgui.localization/#function-setlocalizationmode-modeint-localizationon-) for valid modes, and their corresponding constants.


<br/>

### `Function SetLocalizationLanguage( language:TMaxGUILanguage )`

Set the language to be used by MaxGUI's localization system.

Languages can be loaded from files/streams using [LoadLanguage](../../maxgui/maxgui.localization/#function-loadlanguagetmaxguilanguage-urlobject-) and created from scratch using
[CreateLanguage](../../maxgui/maxgui.localization/#function-createlanguagetmaxguilanguage-name-).

This function will automatically update the text of any gadget marked as 'localized' using [LocalizeGadget](../../maxgui/maxgui.maxgui/#function-localizegadget-gadgettgadget-localizationtext-localizationtooltip-).

If any window menus are localized, [UpdateWindowMenu](../../maxgui/maxgui.maxgui/#function-updatewindowmenu-windowtgadget-) may have to be called on all relevant windows for the text changes
to be visible.

See Also: [LocalizationLanguage](../../maxgui/maxgui.localization/#function-localizationlanguagetmaxguilanguage), [SetLocalizationMode](../../maxgui/maxgui.localization/#function-setlocalizationmode-modeint-localizationon-), [LocalizationMode](../../maxgui/maxgui.localization/#function-localizationmodeint) and [LocalizeString](../../maxgui/maxgui.localization/#function-localizestring-localizationstring-).


<br/>

### `Function LocalizationLanguage:TMaxGUILanguage()`

Returns the current language used by MaxGUI's localization system.

See Also: [SetLocalizationLanguage](../../maxgui/maxgui.localization/#function-setlocalizationlanguage-languagetmaxguilanguage-), [SetLocalizationMode](../../maxgui/maxgui.localization/#function-setlocalizationmode-modeint-localizationon-), [LocalizationMode](../../maxgui/maxgui.localization/#function-localizationmodeint) and [LocalizeGadget](../../maxgui/maxgui.maxgui/#function-localizegadget-gadgettgadget-localizationtext-localizationtooltip-).


<br/>

