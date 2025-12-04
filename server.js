/**
 * Author: Kadin Chawah
 * Course: COMP229, Section 403
 * Date: December 3, 2025
 * Assignment 4
 */

require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const expressLayouts = require("express-ejs-layouts");

const authRoutes = require('./routes/auth');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// EJS setup
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout");

// Routes --------------- MOVE STATIC BELOW THESE
app.use('/auth', authRoutes);
app.use("/", require("./routes/index"));
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));

// Static files should be LAST
app.use(express.static("public"));

// Server startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));