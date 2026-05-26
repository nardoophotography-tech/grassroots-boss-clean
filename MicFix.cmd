@echo off
color 0A
title Audio and Microphone Service Reset
echo ===================================================
echo     Windows Audio & Mic Reset Patch
echo ===================================================
echo.

:: Check for Administrator privileges
echo Checking for Admin rights...
net session >nul 2>&1
if %errorLevel% == 0 (
    echo [OK] Admin rights confirmed.
) else (
    echo [ERROR] This script requires Administrator privileges.
    echo Please right-click the .cmd file and select "Run as Administrator".
    echo.
    pause
    exit
)

echo.
echo Stopping Windows Audio services (this will temporarily mute your system)...
net stop Audiosrv /y
net stop AudioEndpointBuilder /y

echo.
echo Restarting services to restore microphone connections...
net start AudioEndpointBuilder
net start Audiosrv

echo.
echo ===================================================
echo   Patch Complete. Your audio services are reset.
echo ===================================================
echo.
pause