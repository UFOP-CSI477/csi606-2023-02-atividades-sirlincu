const express = require("express");
const router = express.Router();

const collectLocationController = require("../controllers/collectLocationControllers");

router.get("/find/:id?", collectLocationController.getCollectLocation);
router.post("/save", collectLocationController.addCollectLocation);
router.put("/update/:id", collectLocationController.updateCollectLocation);
router.delete("/delete/:id?", collectLocationController.deleteCollectLocation);

module.exports = router;
