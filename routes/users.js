const express = require("express");
const router = express.Router();

//singup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

//login page
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
