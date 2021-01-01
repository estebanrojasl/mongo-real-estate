const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "development";
const config = require("../../config/" + ENV).config;

mongoose
  .connect(process.env.MONGODB_URI || config.CnxString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Db successfully connected"));

//add all ips to whitelist on mongo atlas cluster for it to work
