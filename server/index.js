// main starting point of app (point of entry when server starts)

// imports
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const router = require("./router");

// database setup
mongoose.connect("mongodb://localhost:27017/auth", {
  useNewUrlParser: true
});

// create app
const app = express();

// app setup
// middleware
app.use(morgan("combined"));// logging framework
app.use(bodyParser.json({ type: "*/*" }));// parses incoming requests into JSON
// routing
router(app);

// server setup
const port = process.env.PORT || 9224;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on port:", port);
