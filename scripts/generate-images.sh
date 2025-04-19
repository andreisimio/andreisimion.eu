#!/bin/bash

mkdir -p /workspaces/andreisimion.eu/images/15laws

# Array of prompts for each law
declare -A prompts=(
    ["intentionality"]="Van Gogh style painting of a winding path through a starry night leading to a bright horizon"
    ["awareness"]="Van Gogh style self-portrait with multiple reflections in swirling mirrors"
    ["mirror"]="Van Gogh style painting of a person's reflection in rippling water under starry sky"
    ["reflection"]="Van Gogh style painting of a peaceful meditation scene under a cypress tree"
    ["consistency"]="Van Gogh style painting of interlocked chain links with golden brush strokes"
    ["environment"]="Van Gogh style painting of a flourishing garden with sunflowers and cypress trees"
    ["design"]="Van Gogh style painting of an architect's blueprint morphing into a living landscape"
    ["pain"]="Van Gogh style painting of a phoenix rising from swirling flames"
    ["ladder"]="Van Gogh style painting of a golden ladder reaching into a starry sky"
    ["rubber-band"]="Van Gogh style painting of elastic energy visualized in swirling colors"
    ["trade-offs"]="Van Gogh style painting of balanced scales with sunflowers on each side"
    ["curiosity"]="Van Gogh style painting of a child reaching for stars in a swirling night sky"
    ["modeling"]="Van Gogh style painting of master and apprentice painting together"
    ["expansion"]="Van Gogh style painting of concentric circles expanding like ripples in water"
    ["contribution"]="Van Gogh style painting of hands lifting others up towards a starry sky"
)

for law in "${!prompts[@]}"; do
    curl "https://api.openai.com/v1/images/generations" \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $OPENAI_API_KEY" \
        -d "{
            \"prompt\": \"${prompts[$law]}\",
            \"n\": 1,
            \"size\": \"1024x1024\"
        }" | jq -r '.data[0].url' | xargs curl -o "/workspaces/andreisimion.eu/images/15laws/$law.jpg"
done
