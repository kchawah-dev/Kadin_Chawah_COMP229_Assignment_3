const express = require("express");
const router = express.Router();

// default route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to my portfolio application." });
});

module.exports = router;