@echo off
REM /******************************************************************/
REM /* Created By  : BandRich .Inc					                  */
REM /* Created On  : 17 July 2013                                     */
REM /* Description : This batch file will update the interpreter for  */
REM /*               lua and pre-commit script for validate javascript*/
REM /******************************************************************/

SET TARGET_PATH="C:\Program Files\Git\bin"
SET TARGET_PRE_COMMIT="C:\Program Files\Git\share\git-core\templates\hooks"
SET SCRIPT_SRC="%~dp0misc\pre-commit"
SET LUA_BIN="%~dp0misc\lua.exe"
SET LUA_DLL1="%~dp0misc\lua5.1.dll"
SET LUA_DLL2="%~dp0misc\lua51.dll"

:COPYFILE
xcopy /s %LUA_BIN% %TARGET_PATH%
xcopy /s %LUA_DLL1% %TARGET_PATH%
xcopy /s %LUA_DLL2% %TARGET_PATH%
xcopy /s %SCRIPT_SRC% %TARGET_PRE_COMMIT%
pause
exit