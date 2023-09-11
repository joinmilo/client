@echo off
setlocal enabledelayedexpansion

set "folder=%~1"
if "%folder%"=="" set "folder=."

echo [Start] generating
for /r "%folder%" %%F in (*codegen.ts) do (
  set "config_file=%%~dpnxF"
  set "config_path=%%~dpF"
  set "generated_folder=!config_path!\..\generated"

  echo [Running] delete all generated files in !generated_folder!
  del /q "!generated_folder!\*" > nul 2>&1

  echo [Running] graphql-codegen for !config_file!
  graphql-codegen --config "!config_file!"
)

echo [Stop] generating