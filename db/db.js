const { MongoClient, ServerApiVersion } = require("mongodb");
const { default: mongoose } = require("mongoose");
const uri =
  "mongodb+srv://tejastejale13:FiIFY04kXliDlBYM@express.dkvhksp.mongodb.net/?retryWrites=true&w=majority&appName=Express";

async function connectdb() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectdb;
