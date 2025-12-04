const express = require("express");
const router = express.Router();
const authenticateToken = require('../middleware/auth');
const controller = require("../controllers/contactController");

router.get("/", authenticateToken, controller.getContacts);
router.get("/:id", authenticateToken, controller.getContactById);

router.post("/", controller.addContact);
router.put("/:id", controller.updateContact);

router.delete("/:id", authenticateToken, controller.deleteContact);
router.delete("/", authenticateToken, controller.deleteAllContacts);

module.exports = router;