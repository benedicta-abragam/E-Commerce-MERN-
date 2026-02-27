require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ DB Connected Successfully"))
.catch((err) => console.log("MongoDB Error:", err.message));


// ================= MODELS =================

// Books Model
const Book = mongoose.model("Book", {
    title: String,
    genre: String,
    price: Number,
    image: String,
    rating: Number
}, "books");


// Orders Model (UPDATED)
const Order = mongoose.model("Order", {
    userEmail: String,
    name: String,          // NEW
    phone: String,         // NEW
    shippingAddress: String,
    items: Array,
    totalAmount: Number,
    orderDate: {
        type: Date,
        default: Date.now
    }
}, "orders");


// ================= ROUTES =================

// Get All Books
app.get("/books", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
});


// Create Order
app.post("/orders", async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.json({ message: "Order placed successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to place order" });
    }
});


// 🔥 Get Orders by Email (NEW ROUTE)
app.get("/orders/:email", async (req, res) => {
    try {
        const userOrders = await Order.find({
            userEmail: req.params.email
        });

        res.json(userOrders);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch orders" });
    }
});


// Start Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});