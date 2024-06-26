const mongoose = require("mongoose");

const drinksSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    length: 5,
  },
  price: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Drink", drinksSchema);
