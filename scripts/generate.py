import os
import requests
from prompts import PROMPTS

def generate_images():
    os.makedirs("../images/15laws", exist_ok=True)
    
    for name, prompt in PROMPTS.items():
        payload = {
            "prompt": prompt,
            "negative_prompt": "text, watermark, signature, blurry",
            "steps": 30,
            "width": 800,
            "height": 400,
            "cfg_scale": 7.5
        }
        
        response = requests.post("http://localhost:7860/sdapi/v1/txt2img", json=payload)
        if response.ok:
            with open(f"../images/15laws/{name}.jpg", "wb") as f:
                f.write(response.content)
            print(f"Generated {name}.jpg")

if __name__ == "__main__":
    generate_images()
