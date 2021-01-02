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
    operation: String,
    kind: String,
    address: String,
    photos: String,
    spaces: String,
    area: Number,
    description: String,
    owner: String,
    createdDate: Date,
  },
  "Estate"
);

module.exports = { Estate, EstatesDb };
