const express = require("express");
const router = express.Router();
const { ensureAutheticated } = require("../config/auth");

// at "/ " render the welcome view
router.get("/", (req, res) => {
  res.render("welcome");
});

// Dashboard -- protected view with config/ensureAutheticated
router.get("/dashboard", ensureAutheticated, (req, res) => {
  res.render("dashboard", {
    name: req.user.name,
  });
});

module.exports = router;
