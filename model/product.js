const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  nama:String,
  quantity:Number,
  price:Number,
  desc:String
});

let product = mongoose.model("product", productSchema);

module.exports = product;