const express = require("express");
const router = express.Router();
const controller = require("../controllers/contactController");

router.get("/", controller.getContacts);
router.get("/:id", controller.getContactById);
router.post("/", controller.addContact);
router.put("/:id", controller.updateContact);
router.delete("/:id", controller.deleteContact);
router.delete("/", controller.deleteAllContacts);

module.exports = router;