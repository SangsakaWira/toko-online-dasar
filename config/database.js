const mongoose = require("mongoose")
const product = require("../model/product")

const URL="mongodb://localhost:27017/toko-online-database"

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    console.log(URL);
    console.log(error);
  });

mongoose.connection.once("open", () => {
  console.log("DB Connected")
});

module.exports = mongoose;