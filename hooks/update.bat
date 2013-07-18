@echo off
REM /******************************************************************/
REM /* Created By  : BandRich .Inc					                  */
REM /* Created On  : 17 July 2013                                     */
REM /* Description : This batch file will update the interpreter for  */
REM /*               lua and pre-commit script for validate javascript*/
REM /******************************************************************/

SET TARGET_PATH_x86="C:\Program Files\Git\bin"
SET TARGET_PRE_COMMIT_x86="C:\Program Files\Git\share\git-core\templates\hooks"
SET TARGET_PATH_x64="C:\Program Files (x86)\Git\bin"
SET TARGET_PRE_COMMIT_x64="C:\Program Files (x86)\Git\share\git-core\templates\hooks"

SET SCRIPT_SRC="%~dp0misc\pre-commit"
SET LUA_BIN="%~dp0misc\lua.exe"
SET LUA_DLL1="%~dp0misc\lua5.1.dll"
SET LUA_DLL2="%~dp0misc\lua51.dll"

REM Determine whether the system is X86 or X64
Set RegQry=HKLM\Hardware\Description\System\CentralProcessor\0
REG.exe Query %RegQry%  | Find /i "x86" 
If %ERRORLEVEL% == 0 (
    echo "x86"
	goto COPYFILE_x86
) ELSE (
    echo "x64"
	goto COPYFILE_x64
)

:COPYFILE_x86
xcopy /s %LUA_BIN% %TARGET_PATH_x86%
xcopy /s %LUA_DLL1% %TARGET_PATH_x86%
xcopy /s %LUA_DLL2% %TARGET_PATH_x86%
xcopy /s %SCRIPT_SRC% %TARGET_PRE_COMMIT_x86%
goto END

:COPYFILE_x64
xcopy /s %LUA_BIN% %TARGET_PATH_x64%
xcopy /s %LUA_DLL1% %TARGET_PATH_x64%
xcopy /s %LUA_DLL2% %TARGET_PATH_x64%
xcopy /s %SCRIPT_SRC% %TARGET_PRE_COMMIT_x64%

:END
pause
exit