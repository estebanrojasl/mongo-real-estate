const express = require("express");
const bodyParser = require("body-parser");
const ENV = process.env.NODE_ENV || "development";
const config = require("./config/" + ENV).config;
const { Estate, EstatesDb } = require("./src/entities/estate");
require("./src/db/mongodb");
const app = express();

app.use(bodyParser.json());

// Check api health
app.get("/api/v1/acamica/health", (req, res) => {
  return res.status(200).json({ status: "Ok" });
});

// Get All Estates
app.get("/api/v1/acamica/estate", (req, res) => {
  EstatesDb.find()
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
});

// Save Estate
app.post("/api/v1/acamica/estate", (req, res) => {
  const {
    operation,
    kind,
    address,
    photos,
    spaces,
    area,
    description,
    owner,
  } = req.body;
  // validate data
  const estateObject = new Estate(
    operation,
    kind,
    address,
    photos,
    spaces,
    area,
    description,
    owner
  );
  const newEstate = new EstatesDb(estateObject);
  newEstate.save((err, user) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(user);
  });
});

// Get by id
app.get("/api/v1/acamica/estate/:id", (req, res) => {
  const { id } = req.params;
  EstatesDb.find({ _id: id }) //({ 'Email': new RegExp('gma', 'i') })
    .then((response) => {
      if (response.length < 1) {
        return res.status(404).json({ message: "Estate Not Found" });
      }
      return res.status(200).json(response);
    })
    .catch((err) => res.status(500).json(err));
});

// Update user by id
app.put("/api/v1/acamica/estate", (req, res) => {
  const { _id } = req.body;
  EstatesDb.findOneAndUpdate({ _id: _id }, req.body, (err, estateUpdated) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!estateUpdated) {
      return res.status(404).json({ message: "Estate Not Found" });
    }
    return res.status(200).json(estateUpdated);
  });
});

// Delete estate by
app.delete("/api/v1/acamica/estate/:id", (req, res) => {
  const { id } = req.params;
  EstatesDb.findOneAndDelete({ _id: id }) //({ 'Email': new RegExp('gma', 'i') })
    .then((response) => {
      if (response.length < 1) {
        return res.status(404).json({ message: "Estate Not Found" });
      }
      return res.status(204).send();
    })
    .catch((err) => res.status(500).json(err));
});

app.listen(config.Port, () => {
  console.log(`Server started at ${config.Port}`);
});
