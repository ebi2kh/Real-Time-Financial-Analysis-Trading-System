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
# @app.route('/ingest', methods=['POST'])
# def ingest():
    data = request.get_json()  # assuming you're sending JSON

    # List of valid stock symbols
    valid_stocks = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA"]

    # Check for required fields
    if 'timestamp' not in data:
        return 'Invalid data: missing timestamp', 400
    if 'stock_symbol' not in data or data['stock_symbol'] not in valid_stocks:
        return 'Invalid data: missing or invalid stock_symbol', 400

    # Validate data based on 'data_type'
    if 'data_type' in data:
        if data['data_type'] == 'order_book':
            required_fields = ['order_type', 'price', 'quantity']
            print("order_book was ok")
        elif data['data_type'] == 'news_sentiment':
            required_fields = ['sentiment_score', 'sentiment_magnitude']
            print("news_sentiment was ok")
        elif data['data_type'] == 'market_data':
            required_fields = ['market_cap', 'pe_ratio']
            print("market_data was ok")
        elif data['data_type'] == 'economic_indicator':
            required_fields = ['indicator_name', 'value']
            print("economic_indicator was ok")
        else:
            return 'Invalid data: unknown data_type', 400

        # Check for required fields based on 'data_type'
        for field in required_fields:
            if field not in data:
                return f'Invalid data: missing {field} for {data["data_type"]}', 400

    # Validate main data
    else:
        required_fields = ['opening_price', 'closing_price', 'high', 'low', 'volume']
        for field in required_fields:
            if field not in data:
                return f'Invalid data: missing {field}', 400

    print(data)
    # producer.send('dataTopic', data)
    return 'Data received!', 200
# -------------------------------------
@app.route('/')
def home():
    api_endpoint = "http://localhost:5000/ingest"
    response = requests.get(api_endpoint)
    print(f"Data from endpoint: {response.json()}")
    return f"Data from endpoint: {response.json()}"

if __name__ == "__main__":
    app.run(port=5000)
