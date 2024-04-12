const express = require("express");
const expressLayout = require("express-ejs-layouts");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Importing route
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");

// initializing the app
const app = express();

// setting up the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout"); // set layout for all pages
app.use(expressLayout);
app.use(express.static("public")); // static files will be served from public folder

// using routes
app.use("/", indexRouter);
app.use("/authors", authorRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("database connected");
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => {
    console.log(err);
  });
