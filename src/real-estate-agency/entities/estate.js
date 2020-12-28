const mongoose = require("mongoose");
class Estate {
  constructor(
    operation,
    kind,
    address,
    photos,
    spaces,
    area,
    description,
    owner
  ) {
    this.Operation = operation;
    this.Kind = kind;
    this.Address = address;
    this.Photos = photos;
    this.Spaces = spaces;
    this.Area = area;
    this.Description = description;
    this.Owner = owner;
    this.CreatedDate = Date.now();
  }
}

const EstatesDb = mongoose.model(
  "Estates",
  {
    Operation: String,
    Kind: String,
    Address: String,
    Photos: String,
    Spaces: String,
    Area: Number,
    Description: String,
    Owner: String,
    CreatedDate: Date,
  },
  "Estate"
);

module.exports = { Estate, EstatesDb };
