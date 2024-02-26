// Require lib
require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");

// Require router
const indexRoute = require("./routes/indexRoute");

const app = express(); // Khởi tạo ứng dụng Express
const port = process.env.PORT || 3000; // Port mặc định

// Cấu hình template engine
configViewEngine(app);

// Khai báo route
app.use("/", indexRoute);

// Khởi động server và lắng nghe cổng
app.listen(port, () => console.log(`Server đang chạy tại http://localhost:${port}`));
