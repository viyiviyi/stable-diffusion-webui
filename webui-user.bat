@echo off

set PYTHON=venv\Scripts\python.exe
set GIT=
set VENV_DIR=venv
set COMMANDLINE_ARGS= --disable-safe-unpickle --medvram --deepdanbooru --xformers --api --listen --no-half-vae --disable-console-progressbars --port=8210
@REM --medvram  --always-batch-cond-uncond --xformers --deepdanbooru  --no-half-vae --api --listen
set MODEL_PATH=model.animefull-final-pruned.ckpt
set ACCELERATE=

call webui.bat
