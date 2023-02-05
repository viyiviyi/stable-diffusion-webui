@echo off

set PYTHON=venv\Scripts\python.exe
set GIT=
set VENV_DIR=venv
set COMMANDLINE_ARGS= --disable-safe-unpickle --port=8210 --medvram --deepdanbooru --xformers --api --listen --no-half-vae --disable-console-progressbars
@REM --medvram  --always-batch-cond-uncond --xformers --deepdanbooru  --no-half-vae --api --listen  --reinstall-xformers --reinstall-torch
set MODEL_PATH=model.animefull-final-pruned.ckpt
set ACCELERATE=

call webui.bat
