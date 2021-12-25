const product = require("../model/product")

// POST GET PATCH PUT DELETE
exports.create = (req,res) =>{
    product.create({
        nama:req.body.nama,
        quantity:req.body.quantity,
        price:req.body.price,
        desc:req.body.desc
    }).then(doc=>{
        res.send({
            msg:"Product created!",
            data:doc
        })
    })
}

exports.read = (req,res) =>{
    product.find().then(doc=>{
        res.send({
            msg:"Get All products!",
            data:doc
        })
    })
}

exports.readJumlahProduk = async (req,res) =>{
    let products = await product.find().countDocuments()
    res.send({
        jumlah_produk:products
    })
}

exports.readById = (req,res) =>{
    product.findById(req.params.product_id).then(doc=>{
        res.send({
            msg:"Get All products!",
            data:doc
        })
    })
}

exports.delete = (req,res) =>{
    product.deleteOne({_id:req.params.product_id}).then(doc=>{
        res.send({
            msg:"Delete product!",
            data:doc
        })
    })
}