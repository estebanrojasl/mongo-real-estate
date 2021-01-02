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
