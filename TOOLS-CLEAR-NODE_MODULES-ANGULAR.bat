@ECHO off
cls

ECHO Deleting all .angular and node_modules and dist folders...
ECHO.

FOR /d /r . %%d in (.angular,node_modules,dist) DO (
	IF EXIST "%%d" (		 	 
		ECHO.Deleting: %%d
		ECHO....
		REM %%d: path of folder
		REM rd: delete folder; /s: delete all sub-folders; /q: not need confirm
		rd /s/q "%%d"
	)
)

ECHO.
ECHO.The .angular and node_modules and dist folders have been successfully deleted. Press any key to exit.
pause > nul