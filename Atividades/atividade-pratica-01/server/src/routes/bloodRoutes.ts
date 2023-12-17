const express = require("express");
const router = express.Router();

const bloodController = require("../controllers/bloodTypeControllers");

router.get("/find/:id?", bloodController.getBloodTypes);
router.post("/save", bloodController.addBloodType);
router.put("/update/:id", bloodController.updateBloodType);
router.delete("/delete/:id?", bloodController.deleteBloodType);

module.exports = router;
