/** 
 * Author: Kadin Chawah
 * Course: COMP229, Section 403
 * Date: October 6, 2025
 * Assignment 3 - Portfolio Backend
 */

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const expressLayouts = require("express-ejs-layouts");

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// EJS setup
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout");

// Routes
app.use("/", require("./routes/index"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

// Server startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));