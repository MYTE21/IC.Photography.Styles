from gradio_client import Client
import json


client = Client("https://myte-ic-photography-styles.hf.space/")
job = client.submit(
    "test_data/architecture_photography.jpg",
    api_name="/predict"
)

result = job.result()

with open(result) as f:
    data = json.load(f)

job.cancel()
print(data)
