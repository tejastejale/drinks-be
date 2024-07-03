const express = require("express");
const router = express.Router();

const {
  getAllDrinks,
  createDrinks,
  deleteDrinks,
  updateDrinks,
} = require("../controllers/drinks");

router.route("/get").get(getAllDrinks);
router.route("/post").post(createDrinks);
router.route("/delete/:id").delete(deleteDrinks);
router.route("/update/:id").put(updateDrinks);

module.exports = router;
