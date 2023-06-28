const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// Nó mang ý nghĩa là một đối tượng body chứa dữ liệu mà đã được parsed sẽ được đưa vào request (có thể hiểu là req.body). Dữ liệu đó là một cặp key-value, trong đó value có thể là array hoặc string nếu extended: false và các loại còn lại nếu extended: true.

app.use("/", (req, res, next) => {
  next();
});

app.use("/products", (req, res, next) => {
  res.send("<h1>This is Product Page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello expess!</h1>");
});

app.listen(3000);
