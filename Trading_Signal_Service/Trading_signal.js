// const kafka = require("kafka-node");
// const socketIO = require("socket.io");

// const express = require("express");
// const app = express();
// const server = require("http").createServer(app);
// const io = socketIO(server);

// const Consumer = kafka.Consumer;
// const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
// const consumer = new Consumer(
//   client,
//   [{ topic: "Processed_data", partition: 0 }],
//   { autoCommit: true }
// );

// consumer.on("message", function (message) {
//   console.log("Received data: " + message.value);
//   io.sockets.emit("newdata", { data: message.value });
// });

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// server.listen(8000, function () {
//   console.log("Server is running on port 8000");
// });

// ------------------------------------------

const kafka = require("kafka-node");
const socketIO = require("socket.io");
const express = require("express");

const app = express();
const server = require("http").createServer(app);
const io = socketIO(server);

const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const consumer = new Consumer(
  client,
  [{ topic: "Processed_data", partition: 0 }],
  { autoCommit: true }
);

consumer.on("message", function (message) {
  console.log("Received data: " + message.value);
  io.sockets.emit("newdata", { data: message.value });
});

app.get("/events", function (req, res) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

server.listen(8000, function () {
  console.log("Server is running on port 8000");
  for (let i = 0; i < 10; i++) {
    io.sockets.emit("newdata", { data: "Hello World" });
  }
});
// -------------------------------------------

// const kafka = require("kafka-node");
// const express = require("express");

// const app = express();

// const Consumer = kafka.Consumer;
// const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
// const consumer = new Consumer(
//   client,
//   [{ topic: "Processed_data", partition: 0 }],
//   { autoCommit: true }
// );

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/events", function (req, res) {
//   res.setHeader("Content-Type", "text/event-stream");
//   res.setHeader("Cache-Control", "no-cache");
//   res.setHeader("Connection", "keep-alive");
//   res.flushHeaders();

//   consumer.on("message", function (message) {
//     var data = message.value;
//     console.log("Received data: " + data);
//     res.write(`data: ${data}\n\n`);
//   });
// });

// app.listen(8000, function () {
//   console.log("Server is running on port 8000");
//   for (let i = 0; i < 10; i++) {
//     console.log("Hello World");
//   }
// });
