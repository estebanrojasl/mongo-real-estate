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
    this.operation = operation;
    this.kind = kind;
    this.address = address;
    this.photos = photos;
    this.spaces = spaces;
    this.area = area;
    this.description = description;
    this.owner = owner;
    this.createdDate = Date.now();
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
