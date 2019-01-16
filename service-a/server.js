const request = require('request');
const express = require("express");
const http = require('http');
const Agent = require('agentkeepalive');

const app = express();
const PORT = process.env.PORT || 3000;
const SERVICE_B_BASE_URL = process.env.SERVICE_B_BASE_URL || 'http://localhost:3001';
const SERVICE_B_BOOKS_URL = `${SERVICE_B_BASE_URL}/books`;

// test 1
const options = {
  url: SERVICE_B_BOOKS_URL
};

// test 2
// http.globalAgent.keepAlive = true;
// const options = {
//   url: SERVICE_B_BOOKS_URL
// };

// test 3
// const keepaliveAgent = new Agent();
// const options = {
//   url: SERVICE_B_BOOKS_URL,
//   agent: keepaliveAgent
// };

app.get("/", (req, res, next) => {
  request(options, (error, response, body) => {
    res.send(body);
  });
});

app.listen(PORT, () => {
  console.info(`Service A running at port ${PORT}`);
});
