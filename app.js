const express = require("express");
const PORT = process.env.PORT || 8080;
const expressLayouts = require("express-ejs-layouts");

const app = express();

//ejs middlewearLayouts
app.use(expressLayouts);
app.set("view engine", "ejs");

//ROUTES!!! - index vs. users file
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

//Start listening at localhost:3000
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}!!!`);
});
