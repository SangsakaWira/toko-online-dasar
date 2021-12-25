// Menghidupkan Server
const { json } = require("express")
const express = require("express")
const app = express()

// Memanggil
const productRouter = require("./routes/product")

// Inisiasi Template Engine
app.set("view engine","ejs")

// Inisiasi Data untuk disimpan JSON & FORM
app.use(json())

// CRUD Entity
app.use("/product",productRouter)

// Manggil Halaman Home
app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/tambah-produk",(req,res)=>{
    res.render("manage-product")
})

// Manggil DB
require("./config/database")

app.listen(3000,()=>{
    console.log("Server is running!")
})