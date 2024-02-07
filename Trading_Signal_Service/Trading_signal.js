const kafka = require("kafka-node");
const socketIO = require("socket.io");
const express = require("express");

const app = express();
const server = require("http").createServer(app);
const io = socketIO(server);
app.use(
  express.static(
    "E:/0seminar/00final/Real-Time-Financial-Analysis-Trading-System/Visualize_Service"
  )
);
const Consumer = kafka.Consumer;
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const consumer = new Consumer(
  client,
  [{ topic: "Processed_data", partition: 0 }],
  { autoCommit: true }
);
const producer = new Producer(client);

consumer.on("message", function (message) {
  let data = JSON.parse(message.value);
  console.log("Received data: ", data);

  // Emit all data to the client
  // io.sockets.emit("newdata", { data: data });

  // Check if data_type field is not present
  if (!data.hasOwnProperty("data_type")) {
    let signal = calculateSignal(data);
    console.log("Signal: ", signal);

    // Add signal to data
    data.signal = signal;

    // Send data with signal to another Kafka topic
    let payloads = [
      { topic: "Signals", messages: JSON.stringify(data), partition: 0 },
    ];
    producer.send(payloads, function (err, data) {
      console.log(data);
    });
  }
  io.sockets.emit("newdata", { data: data });
});

function calculateSignal(data) {
  let { moving_average, exponential_moving_average, rsi } = data;

  // Define your own conditions for buy, sell, and natural signals
  if (moving_average < exponential_moving_average && rsi < 30) {
    return "buy";
  } else if (moving_average > exponential_moving_average && rsi > 70) {
    return "sell";
  } else {
    return "natural";
  }
}

app.get("/events", function (req, res) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();
});
app.get("/", function (req, res) {
  res.sendFile(
    "E:/0seminar/00final/Real-Time-Financial-Analysis-Trading-System/Visualize_Service/index.html"
  );
  // res.sendFile("index.html");
});

server.listen(8000, function () {
  console.log("Server is running on port 8000");
  for (let i = 0; i < 10; i++) {
    io.sockets.emit("newdata", { data: "Hello World" });
  }
});
