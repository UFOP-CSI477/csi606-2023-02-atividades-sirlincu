const express = require("express");
const router = express.Router();

const donationController = require("../controllers/donationController");

router.get("/find/:id?", donationController.getDonation);
router.post("/save", donationController.addDonation);
router.put("/update/:id", donationController.updateDonation);
router.delete("/delete/:id", donationController.deleteDonation);

module.exports = router;
