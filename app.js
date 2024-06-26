const express = require("express");
const connectdb = require("./db/db");

const app = express();
app.use(express.json());

const drinks_routes = require("./routes/drinks");

app.use("/drink", drinks_routes);

app.listen(3000, async () => {
  await connectdb();
  console.log("started");
});
