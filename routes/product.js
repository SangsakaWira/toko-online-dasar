const express = require("express")
const productController = require("../controller/product")
const router = express.Router()

router.post("/",productController.create)

router.get("/",productController.read)

router.get("/get-count",productController.readJumlahProduk)

router.get("/:product_id",productController.readById)

router.delete("/:product_id",productController.delete)

module.exports = router