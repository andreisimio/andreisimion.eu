import os
import requests
from openai import OpenAI

client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
image_dir = "/workspaces/andreisimion.eu/images/15laws"
os.makedirs(image_dir, exist_ok=True)

prompts = {
    "intentionality": "Van Gogh style painting of a winding path through a starry night leading to a bright horizon, bold brushstrokes",
    "awareness": "Van Gogh style self-portrait with multiple reflections in swirling mirrors, impressionist style",
    "mirror": "Van Gogh style painting of a person looking at their reflection in rippling water under starry sky",
    "reflection": "Van Gogh style painting of a peaceful meditation scene under a cypress tree at sunset",
    "consistency": "Van Gogh style painting of interlocked chain links with golden brush strokes",
    "environment": "Van Gogh style painting of a flourishing garden with sunflowers and cypress trees",
    "design": "Van Gogh style painting of an architect's blueprint morphing into a living landscape",
    "pain": "Van Gogh style painting of a phoenix rising from swirling flames",
    "ladder": "Van Gogh style painting of a golden ladder reaching into a starry sky",
    "rubberband": "Van Gogh style painting of elastic energy visualized in swirling colors",
    "tradeoffs": "Van Gogh style painting of balanced scales with sunflowers on each side",
    "curiosity": "Van Gogh style painting of a child reaching for stars in a swirling night sky",
    "modeling": "Van Gogh style painting of master and apprentice painting together",
    "expansion": "Van Gogh style painting of concentric circles expanding like ripples in starry water",
    "contribution": "Van Gogh style painting of hands lifting others up towards a starry sky"
}

for name, prompt in prompts.items():
    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size="1024x1024",
        quality="standard",
        n=1,
    )
    
    image_url = response.data[0].url
    img_data = requests.get(image_url).content
    
    with open(f"{image_dir}/{name}.jpg", 'wb') as f:
        f.write(img_data)
    print(f"Generated {name}.jpg")
