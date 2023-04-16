---
id: text.csv
title: Text.CSV
sidebar_label: Introduction
---


Text.CSV is a CSV (Comma Separated Values) file parser. CSV files are a popular format for exchanging data between
applications, as they are simple, flexible, and can be easily generated or consumed by various software programs.

We will explore the CSV file format in depth, and learn how to use the Text.CSV to load and manipulate CSV files in
BlitzMax applications.

## CSV File Format

CSV files are plain text files that store tabular data, making them suitable for representing spreadsheet-like
structures. Each row in a CSV file corresponds to a single line of text, and columns within a row are separated by
a delimiter, which is typically a comma (`,`) or a tab (`\t`). CSV files can store various types of data, such as
numbers, text, and dates, and they can accommodate both simple and complex data structures.

There are several reasons why one might choose to use the CSV file format over other formats:

1. **Simplicity** : CSV files are easy to create and understand, as they have a straightforward structure and use plain
text encoding.
2. **Portability** : CSV files can be read and written by a wide variety of software applications, including
spreadsheet programs, databases, and data analysis tools.
3. **Size** : Because CSV files are plain text, they can be compressed efficiently, reducing storage and
transmission costs.
4. **Human Readable** : Unlike binary formats, CSV files can be opened and examined with a simple text editor,
making it easier to identify and troubleshoot issues.

To create a valid CSV file that can be loaded into Text.CSV, you should follow these basic rules:

1. **Consistent Delimiters** : Use the same delimiter character (e.g., a comma or a tab) to separate columns
throughout the entire file. Mixing delimiters within the same file can lead to parsing errors.
2. **Quoting** : If a field value contains the delimiter character, newlines, or double quotes, enclose the value
in double quotes. For example, `"John Doe", 25, "123 Main St, Apt 4B"` has the address field quoted because it contains
a comma. To represent a double quote within a quoted field, use two double quotes together, like `""`. For example,
`"He said, ""Hello"""`
3. **Header Row** : It's a good practice to include a header row at the beginning of the file that lists the column
names. This makes it easier to understand the structure and content of the file.
4. **Consistent Rows** : Ensure that each row has the same number of columns. This helps prevent parsing errors and
ensures that the data can be processed correctly.
5. **UTF-8 Encoding** : Save the file using UTF-8 encoding to ensure that it can be read correctly by the parser.

## Parsing CSV Files

You'll need to create an instance of the [TCsvParser](../../text/text.csv/tcsvparser) type, and then use its various methods to interact with the
CSV data. The parser accepts input streams in UTF-8 format.

Here is a basic example of how to use the module:

```blitzmax
SuperStrict

Framework BRL.StandardIO
Import Text.CSV

Local options:TCsvOptions = New TCsvOptions
options.delimiter = ","

Local parser:TCsvParser = TCsvParser.Parse("path/to/your/csvfile.csv", options)

While parser.NextRow() = ECsvStatus.row
	Local row:TCsvRow = parser.GetRow()
	Print row.GetValue("column_name")
Wend

parser.Free()
```


## Types
| Type | Description |
|---|---|
| [TCsvParser](../../text/text.csv/tcsvparser) | Csv Parser |
| [TCsvOptions](../../text/text.csv/tcsvoptions) | Options for customising the parser. |
| [TCsvRow](../../text/text.csv/tcsvrow) | A Csv Row. |
| [TCsvHeader](../../text/text.csv/tcsvheader) | A csv header. |

## Structs
| Struct | Description |
|---|---|
| [SCsvColumn](../../text/text.csv/scsvcolumn) | A csv column. |

