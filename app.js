const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");

const todolist = require("./routes/todolist");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/todolist", todolist);

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get("env") === "development" ? err : {}
  });
});

module.exports = app;
