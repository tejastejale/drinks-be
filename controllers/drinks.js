const drinks = require("../models/drinks");

const getAllDrinks = async (req, res) => {
  const data = await drinks.find({});
  res.status(200).json(data);
};

const createDrinks = async (req, res) => {
  try {
    const data = new drinks({
      name: req.body.name,
      price: req.body.price,
    });
    await data.save();
    res.status(200).json(data);
  } catch {
    // console.log(err);
    console.log("error bitch");
    res.status(400).send("ay bc");
  }
};

module.exports = { createDrinks, getAllDrinks };
