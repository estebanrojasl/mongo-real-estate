const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "development";
const config = require("../../config/" + ENV).config;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Db successfully connected"));
