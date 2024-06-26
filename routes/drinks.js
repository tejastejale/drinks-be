const express = require("express");
const router = express.Router();

const { getAllDrinks, createDrinks } = require("../controllers/drinks");

router.route("/get").get(getAllDrinks);
router.route("/post").post(createDrinks);

module.exports = router;
