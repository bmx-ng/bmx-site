[OpenFile](../../brl/brl.filesystem/#function-openfiletstream-urlobjectreadableinttruewriteableinttrue-), [ReadFile](../../brl/brl.filesystem/#function-readfiletstream-urlobject-) and [WriteFile](../../brl/brl.filesystem/#function-writefiletstream-urlobject-) return a stream object for reading and or writing data
[ReadDir](../../brl/brl.filesystem/#function-readdirbyte-ptr-path-), [NextFile](../../brl/brl.filesystem/#function-nextfile-dirbyte-ptr-) and [CloseDir](../../brl/brl.filesystem/#function-closedir-dirbyte-ptr-) commands, or [LoadDir](../../brl/brl.filesystem/#function-loaddir-dirskipdotsinttrue-) can be used to read the file names
File properties can be examined with the [FileType](../../brl/brl.filesystem/#function-filetypeint-path-), [FileTime](../../brl/brl.filesystem/#function-filetimeint-path-timetypeintfiletimemodified-), [FileSize](../../brl/brl.filesystem/#function-filesizelong-path-) and [FileMode](../../brl/brl.filesystem/#function-filemodeint-path-) commands.
Files and directories (folders) can be created and deleted with the [CreateFile](../../brl/brl.filesystem/#function-createfileint-path-), [CreateDir](../../brl/brl.filesystem/#function-createdirint-pathrecurseintfalse-)
[DeleteFile](../../brl/brl.filesystem/#function-deletefileint-path-) and [DeleteDir](../../brl/brl.filesystem/#function-deletedirint-pathrecurseintfalse-) commands.
in a system independent manner. These commands include [RealPath](../../brl/brl.filesystem/#function-realpath-path-), [StripDir](../../brl/brl.filesystem/#function-stripdir-path-), [StripExt](../../brl/brl.filesystem/#function-stripext-path-),
[StripAll](../../brl/brl.filesystem/#function-stripall-path-), [ExtractDir](../../brl/brl.filesystem/#function-extractdir-path-) and [ExtractExt](../../brl/brl.filesystem/#function-extractext-path-).
[StripSlash](../../brl/brl.filesystem/#function-stripslash-path-) will not remove the trailing slash from a 'root' path. For example, "/"
	testbit = %100000000
Local writebits:Int = %010010010
mode = mode & ~writebits
File name of next file in directory opened using [ReadDir](../../brl/brl.filesystem/#function-readdirbyte-ptr-path-), or an empty string if there are no more files to read.
This command is similar to the [OpenStream](../../brl/brl.stream/#function-openstreamtstream-urlobjectreadableinttruewritemodeintwritemodeoverwrite-) command but will attempt
http: based url's are seekable. Use the [CloseStream](../../brl/brl.stream/#function-closestream-streamtstream-) command when
finished reading and or writing to a Stream returned by [OpenFile](../../brl/brl.filesystem/#function-openfiletstream-urlobjectreadableinttruewriteableinttrue-).
This command is similar to the [ReadStream](../../brl/brl.stream/#function-readstreamtstream-urlobject-) command but will attempt
http: based url's are seekable. Use the [CloseStream](../../brl/brl.stream/#function-closestream-streamtstream-) command when
finished reading and or writing to a Stream returned by [OpenFile](../../brl/brl.filesystem/#function-openfiletstream-urlobjectreadableinttruewriteableinttrue-).
This command is identical to the [WriteStream](../../brl/brl.stream/#function-writestreamtstream-urlobject-) command.
close the file stream with either [CloseFile](../../brl/brl.filesystem/#function-closefile-streamtstream-) or the identical
[CloseStream](../../brl/brl.stream/#function-closestream-streamtstream-) command.