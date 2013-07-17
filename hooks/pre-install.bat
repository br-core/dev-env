@echo off
REM /******************************************************************/
REM /* Created By  : BandRich .Inc					                  */
REM /* Created On  : 17 July 2013                                     */
REM /* Description : This batch file will install msysgit and nodejs  */
REM /*               if the path of setup files is same as this batch */
REM /*               file							              	  */
REM /******************************************************************/

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
goto COPYFILE

:DELAY
pause
set /A x = %x% - 1
if (%x)==(15) goto COPYFILE
goto INSTALL

pause
exit