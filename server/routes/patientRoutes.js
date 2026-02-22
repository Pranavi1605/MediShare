const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const {
  getPatientProfile,
} = require("../controllers/patientController");

router.get(
  "/profile",
  protect,
  authorizeRoles("patient"),
  getPatientProfile
);

module.exports = router;