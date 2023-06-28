const bodyParser = require("body-parser");
const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// Nó mang ý nghĩa là một đối tượng body chứa dữ liệu mà đã được parsed sẽ được đưa vào request (có thể hiểu là req.body). Dữ liệu đó là một cặp key-value, trong đó value có thể là array hoặc string nếu extended: false và các loại còn lại nếu extended: true.

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
