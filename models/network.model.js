

const mongoose = require("mongoose");

var schema = mongoose.Schema(
  {
    name: String,
    description: String,
    version: String,
    brand: String
  },
  { timestamps: true }
);

schema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Network = mongoose.model("networkmgt", schema);

module.exports = Network; 