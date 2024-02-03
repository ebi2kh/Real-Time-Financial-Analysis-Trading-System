const kafka = require("kafka-node");
const WebSocket = require("ws");

// Create a Kafka client
const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });

// Create a Kafka consumer
const consumer = new kafka.Consumer(
  client,
  [{ topic: "nytopic", partition: 0 }],
  { autoCommit: true }
);

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8081 });

// Variables for calculating Bollinger Bands
let closingPrices = [];
const period = 20; // The number of periods to use for the moving average
const stdDevMultiplier = 2; // The number of standard deviations to use for the bands

// Listen for messages
consumer.on("message", function (message) {
  // Parse the message value as JSON
  const data = JSON.parse(message.value);

  // Add the closing price to our array
  closingPrices.push(data.closing_price);

  // If we have enough data, calculate the Bollinger Bands
  if (closingPrices.length >= period) {
    // Calculate the simple moving average
    const sum = closingPrices.reduce((a, b) => a + b, 0);
    const sma = sum / period;

    // Calculate the standard deviation
    const variance =
      closingPrices.reduce((a, b) => a + Math.pow(b - sma, 2), 0) / period;
    const stdDev = Math.sqrt(variance);

    // Calculate the Bollinger Bands
    const upperBand = sma + stdDevMultiplier * stdDev;
    const lowerBand = sma - stdDevMultiplier * stdDev;

    // Broadcast the Bollinger Bands to all connected WebSocket clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            stock_symbol: data.stock_symbol,
            upperBand: upperBand,
            sma: sma,
            lowerBand: lowerBand,
          })
        );
      }
    });

    // Remove the oldest closing price from our array
    closingPrices.shift();

    // Perform some action with the data
    console.log(`Received data from ${data.stock_symbol}:`);
    console.log(`Closing Price: ${data.closing_price}`);
    console.log(
      `Exponential Moving Average: ${data.exponential_moving_average}`
    );
    console.log(`High: ${data.high}`);
    console.log(`Low: ${data.low}`);
    console.log(`Moving Average: ${data.moving_average}`);
    console.log(`Opening Price: ${data.opening_price}`);
    console.log(`RSI: ${data.rsi}`);
    console.log(`Signal: ${data.signal}`);
    console.log(`Timestamp: ${data.timestamp}`);
    console.log(`Volume: ${data.volume}`);
  }
});

// Handle errors
consumer.on("error", function (err) {
  console.error("Error:", err);
});
