import os
import webuiapi
from pathlib import Path
import time
from PIL import Image

# Initialize API
api = webuiapi.WebUIApi()

# Create output directory
Path("../images/15laws").mkdir(parents=True, exist_ok=True)

# Van Gogh style base prompt
base_style = "masterpiece, oil painting, Van Gogh style, thick impasto, bold brushstrokes, vibrant colors, impressionist style"

# Van Gogh style prompts
prompts = {
    "intentionality": f"{base_style}, winding path through starry night leading to bright horizon",
    "awareness": f"{base_style}, self-portrait with multiple reflections in swirling mirrors",
    "mirror": f"{base_style}, person gazing at reflection in rippling water under starry sky",
    "reflection": f"{base_style}, peaceful meditation under cypress tree at sunset",
    "consistency": f"{base_style}, golden chain links with swirling energy",
    "environment": f"{base_style}, flourishing garden with sunflowers and cypress trees",
    "design": f"{base_style}, architectural blueprints morphing into living landscape",
    "pain": f"{base_style}, phoenix rising from swirling flames",
    "ladder": f"{base_style}, golden ladder reaching into starry night sky",
    "rubberband": f"{base_style}, elastic energy visualized in swirling colors",
    "tradeoffs": f"{base_style}, balanced scales with sunflowers",
    "curiosity": f"{base_style}, child reaching for stars in swirling night sky",
    "modeling": f"{base_style}, master and apprentice painting together",
    "expansion": f"{base_style}, concentric circles expanding like ripples in starry water",
    "contribution": f"{base_style}, hands lifting others towards starry sky"
}

def validate_image(image_path):
    try:
        with Image.open(image_path) as img:
            return img.size == (800, 400)
    except:
        return False

def generate_images():
    total = len(prompts)
    completed = 0
    failed = []

    for name, prompt in prompts.items():
        output_path = f"../images/15laws/{name}.jpg"
        
        # Skip if image already exists and is valid
        if os.path.exists(output_path) and validate_image(output_path):
            print(f"✓ Skipping {name}.jpg (already exists)")
            completed += 1
            continue

        retries = 3
        while retries > 0:
            try:
                print(f"\nGenerating {name} ({completed}/{total})...")
                print(f"Prompt: {prompt}")
                
                result = api.txt2img(
                    prompt=prompt,
                    negative_prompt="text, watermark, signature, blurry, deformed, distorted",
                    width=800,
                    height=400,
                    steps=35,
                    cfg_scale=8.0,
                    sampler_name="DPM++ 2M Karras",
                    seed=-1
                )
                
                result.image.save(output_path)
                if validate_image(output_path):
                    print(f"✓ Successfully generated {name}.jpg")
                    completed += 1
                    break
                else:
                    raise Exception("Generated image validation failed")
                    
            except Exception as e:
                retries -= 1
                print(f"Error generating {name} (retries left: {retries}): {str(e)}")
                if retries > 0:
                    time.sleep(5)
                    continue
                failed.append(name)
                break

    print(f"\nGeneration complete: {completed}/{total} images generated")
    if failed:
        print(f"Failed to generate: {', '.join(failed)}")

if __name__ == "__main__":
    try:
        generate_images()
    except Exception as e:
        print(f"Fatal error: {str(e)}")
