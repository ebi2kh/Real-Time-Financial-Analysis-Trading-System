const kafka = require("kafka-node");
const WebSocket = require("ws");

// Create a Kafka client
const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });

// Create a Kafka consumer
const consumer = new kafka.Consumer(
  client,
  [{ topic: "ntopic", partition: 0 }],
  { autoCommit: true }
);

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8081 });

// Variables for aggregating data
let totalVolume = 0;
let highPrices = [];
let lowPrices = [];
let signals = [];

// Listen for messages
consumer.on("message", function (message) {
  // Parse the message value as JSON
  const data = JSON.parse(message.value);

  // Aggregate the data
  totalVolume += data.volume;
  highPrices.push(data.high);
  lowPrices.push(data.low);
  signals.push(data.signal);

  // Calculate the range of high and low prices
  const highRange = Math.max(...highPrices) - Math.min(...highPrices);
  const lowRange = Math.max(...lowPrices) - Math.min(...lowPrices);

  // Count the occurrences of each signal
  const signalCounts = signals.reduce((counts, signal) => {
    counts[signal] = (counts[signal] || 0) + 1;
    return counts;
  }, {});

  // Broadcast the aggregated data to all connected WebSocket clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          stock_symbol: data.stock_symbol,
          totalVolume: totalVolume,
          highRange: highRange,
          lowRange: lowRange,
          signalCounts: signalCounts,
        })
      );
    }
  });
});

// Handle errors
consumer.on("error", function (err) {
  console.error("Error:", err);
});
