const express = require("express");
//library for parsing through the form
const bodyParser = require("body-parser");

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Root route - GET http request
app.get("/", (req, res) => {
  res.send(
    `<div> 
      <form method="POST">
      <input name="email" placeholder="email"/>
      <input name="password" placeholder="password"/>
      <input name="passwordConfirmation" placeholder="password confirmation"/>
      <button>Sign Up</button>
      </form>
      </div>`
  );
});

//watch for / and method post
// get access to email, pass, and confirmation
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Account created!");
});

//Start listening at localhost:3000
app.listen(3000, () => {
  console.log("Listing on port 3000!");
});
