@echo off
REM /******************************************************************/
REM /* Created By  : BandRich .Inc					                  */
REM /* Created On  : 17 July 2013                                     */
REM /* Description : This batch file will download and install msysgit*/
REM /*               and nodejs automatically.						  */
REM /******************************************************************/r

SET NODE_SRC_x86="http://nodejs.org/dist/v0.11.4/node-v0.11.4-x86.msi"
SET NODE_SRC_x64="http://nodejs.org/dist/v0.11.4/x64/node-v0.11.4-x64.msi"
SET GIT_SRC="https://msysgit.googlecode.com/files/Git-1.8.1.2-preview20130201.exe"

REM Download msysgit through http
wget.exe --no-check-certificate --output-document Git-1.8.1.2-preview20130201.exe %GIT_SRC%

REM Determine whether the system is X86 or X64
Set RegQry=HKLM\Hardware\Description\System\CentralProcessor\0
REG.exe Query %RegQry%  | Find /i "x86" 
If %ERRORLEVEL% == 0 (
    echo "x86"
	goto X86
) ELSE (
    echo "x64"
	goto X64
)

:X86
wget.exe --no-check-certificate --output-document node-v0.11.4-x86.msi %NODE_SRC_x86%
set /A x=17
:INSTALL
goto %x%
:17
msiexec /i "%~dp0node-v0.11.4-x86.msi" /quiet
goto DELAY
:16
start /wait Git-1.8.1.2-preview20130201.exe /silent /noreboot
goto DELAY
:15
goto END

:X64
wget.exe --no-check-certificate --output-document node-v0.11.4-x64.msi %NODE_SRC_x64%
set /A x=17
:INSTALL
goto %x%
:17
msiexec /i "%~dp0node-v0.11.4-x64.msi" /quiet
goto DELAY
:16
start /wait Git-1.8.1.2-preview20130201.exe /silent /noreboot
goto DELAY
:15
goto END

:DELAY
pause
set /A x = %x% - 1
goto INSTALL

:END
pause
exit