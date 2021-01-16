const express = require("express");
const PORT = process.env.PORT || 8080;
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();

//Connect to DB
const db = require("./config/keys").MongoURI;

//Connect to Mongo with mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

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
