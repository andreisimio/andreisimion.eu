# Stable Diffusion Setup

1. Install required packages:
```bash
pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu118
pip install git+https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

2. Download model:
```bash
mkdir -p models/Stable-diffusion
wget -O models/Stable-diffusion/v1-5-pruned.ckpt https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned.ckpt
```

3. Start WebUI:
```bash
python webui.py --api
```
