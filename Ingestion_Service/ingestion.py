from flask import Flask, request
import requests
from kafka import KafkaProducer
import json

app = Flask(__name__)
producer = KafkaProducer(bootstrap_servers='localhost:9092', value_serializer=lambda v: json.dumps(v).encode('utf-8'))
# ---------------------------------------
@app.route('/ingest', methods=['POST'])
def ingest():
    data = request.get_json()  # assuming you're sending JSON
    print(data)
    producer.send('dataTopic', data)
    return 'Data received!', 200
    # return data
# ----------------------------------------
#Validate data

# -------------------------------------
@app.route('/')
def home():
    api_endpoint = "http://localhost:5000/ingest"
    response = requests.get(api_endpoint)
    print(f"Data from endpoint: {response.json()}")
    return f"Data from endpoint: {response.json()}"

if __name__ == "__main__":
    app.run(port=5000)
