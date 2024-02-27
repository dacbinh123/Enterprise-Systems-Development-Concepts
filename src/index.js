// Require lib
require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");

// Require router

const loginRoute = require("./routes/loginRoute");
const singUpRoute = require("./routes/signupRoute");
const indexRoute = require("./routes/indexRoute");
const logoutRoute = require("./routes/logoutRoute");


// Require config

const connectDb = require("./config/dbConnection");
connectDb();

const app = express(); // app exprexx
const port = process.env.PORT || 3000; // port

// config template engine
configViewEngine(app);


// Khai bao routee
app.use("/login", loginRoute);
app.use("/signup", singUpRoute);
app.use("/logout", logoutRoute);

app.use("/", indexRoute);


// app.use((req, res) => {
//   res.status(404);
//   res.render("error");
// });


// Listen server
app.listen(port, () => console.log(`http://localhost:${port}`));
