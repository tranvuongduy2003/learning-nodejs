const http = require("http");

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always run");
  next();
});

app.use("/products", (req, res, next) => {
  console.log("This is Product Page");
  res.send("<h1>This is Product Page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Hello expess!");
  res.send("<h1>Hello expess!</h1>");
});

app.listen(3000);
