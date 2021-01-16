const express = require("express");
const router = express.Router();

// at "/ " render the welcome view
router.get("/", (req, res) => {
  res.render("welcome");
});

module.exports = router;
