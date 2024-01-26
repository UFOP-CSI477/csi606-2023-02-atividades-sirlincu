const express = require("express");
const router = express.Router();

const peopleController = require("../controllers/peopleController");

router.get("/find", peopleController.getPeople);
router.post("/save", peopleController.addPeople);
router.put("/update/:id", peopleController.updatePeople);
router.delete("/delete/:id", peopleController.deletePeople);

module.exports = router;
