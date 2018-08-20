// main starting point of app (point of entry when server starts)

// imports
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// create app
const app = express();

// app setup


// server setup
const port = process.env.PORT || 9224;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on port:", port);
