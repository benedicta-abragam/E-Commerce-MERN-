const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()  

// Middlewares
app.use(cors())
app.use(express.json())

// Connect MongoDB
mongoose.connect("mongodb+srv://novaverseUser:Nova25@cluster0.miinvxq.mongodb.net/Books?retryWrites=true&w=majority")
.then(() => {
    console.log("DB Connected")
})
.catch((err) => {
    console.log("MongoDB:", err)
})

// Create Model
const books = mongoose.model("books", {
    title: String,
    genre: String,
    price: Number,
    image: String,
    rating: Number
}, "books")

// Routes
app.get("/books", (req, res) => {
    books.find()
        .then((retdata) => {
            res.send(retdata)
        })
        .catch((err) => {
            console.log("Error:", err)
        })
})

// Start Server
app.listen(8000, () => {
    console.log("Server Started.....")
})