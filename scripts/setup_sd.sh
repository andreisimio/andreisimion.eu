#!/bin/bash
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
cd stable-diffusion-webui
pip install -r requirements.txt
pip install webuiapi
./webui.sh --api
