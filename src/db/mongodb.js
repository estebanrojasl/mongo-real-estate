const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "development";
const config = require("../../config/" + ENV || "development").config;

mongoose
  .connect(config.CnxString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Db successfully connected"));
