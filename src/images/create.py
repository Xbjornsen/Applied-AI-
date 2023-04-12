from multiprocessing import process
import requests
import json
from PIL import Image
from io import BytesIO

# Set up the prompt
prompt = "Generate an image depicting a neural network with interconnected nodes representing deep learning layers, surrounded by a cloud of diverse text snippets flowing into the network. Show text outputs in the form of generated responses or predictions emerging from the network. Capture the process of LLMs utilizing data and deep learning for text generation."

# Set up the API credentials

API_KEY = process.env.APIKEY
API_URL = 'https://api.openai.com/v1/images/generations'
# Set up the request payload
data = {
    'model': 'image-alpha-001',
    'prompt': prompt,
    'num_images': 1,
    'size': '512x512',
    'response_format': 'url'
}

headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {API_KEY}'
}

# Send the request to the API
response = requests.post(API_URL, data=json.dumps(data), headers=headers)

# Get the URL of the generated image
response_data = response.json()['data'][0]
image_url = response_data['url']

# Download the image and display it
image_response = requests.get(image_url)
image_data = Image.open(BytesIO(image_response.content))
image_data.show()
image_data.save("llm.png")
