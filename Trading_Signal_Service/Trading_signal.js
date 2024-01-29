const kafka = require("kafka-node");
const express = require("express");

const app = express();

const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const consumer = new Consumer(
  client,
  [{ topic: "resultTopic", partition: 0 }],
  { autoCommit: true }
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/events", function (req, res) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  consumer.on("message", function (message) {
    var data = message.value;
    console.log("Received data: " + data);
    res.write(`data: ${data}\n\n`);
  });
});

app.listen(8000, function () {
  console.log("Server is running on port 5000");
  for (let i = 0; i < 10; i++) {
    console.log("Hello World");
  }
});
