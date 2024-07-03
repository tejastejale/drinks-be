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

const deleteDrinks = async (req, res) => {
  try {
    const id = req.params.id;
    await drinks.deleteOne({ _id: id });
    res.json({
      msg: "oh yah",
    });
  } catch {
    res.send("bro id check kr error hai");
  }
};

const updateDrinks = async (req, res) => {
  const id = req.params.id;
  try {
    const query = { _id: id };
    const update = { $set: { name: req.body.name, price: req.body.price } };
    const options = {};
    await drinks.updateOne(query, update);
    res.send("zala na bho update..!!");
  } catch {
    res.send("Bro yar id thik dal na");
  }
};

module.exports = { createDrinks, getAllDrinks, deleteDrinks, updateDrinks };
