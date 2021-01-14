const express = require("express");

const app = express();

// Root route - GET http request
app.get("/", (req, res) => {
  res.send("Hi there!");
});

//Start listening at localhost:3000
app.listen(3000, () => {
  console.log("Listing on port 3000!");
});
