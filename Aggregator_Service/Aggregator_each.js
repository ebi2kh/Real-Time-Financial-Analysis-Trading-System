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
let aggregates = {};

// Listen for messages
consumer.on("message", function (message) {
  // Parse the message value as JSON
  const data = JSON.parse(message.value);

  // Initialize the aggregates for this symbol if they don't exist yet
  if (!aggregates[data.stock_symbol]) {
    aggregates[data.stock_symbol] = {
      totalVolume: 0,
      highPrices: [],
      lowPrices: [],
      signals: [],
    };
  }

  // Aggregate the data
  let symbolAggregates = aggregates[data.stock_symbol];
  symbolAggregates.totalVolume += data.volume;
  symbolAggregates.highPrices.push(data.high);
  symbolAggregates.lowPrices.push(data.low);
  symbolAggregates.signals.push(data.signal);

  // Calculate the range of high and low prices
  const highRange =
    Math.max(...symbolAggregates.highPrices) -
    Math.min(...symbolAggregates.highPrices);
  const lowRange =
    Math.max(...symbolAggregates.lowPrices) -
    Math.min(...symbolAggregates.lowPrices);

  // Count the occurrences of each signal
  const signalCounts = symbolAggregates.signals.reduce((counts, signal) => {
    counts[signal] = (counts[signal] || 0) + 1;
    return counts;
  }, {});

  // Broadcast the aggregated data to all connected WebSocket clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          stock_symbol: data.stock_symbol,
          totalVolume: symbolAggregates.totalVolume,
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
