const express = require("express");
const morgan = require("morgan");
const { db, Page, Users, User } = require("./models");
const users = require("./routes/users.js");
const wiki = require("./routes/wiki");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wiki);

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

const PORT = 3000;

const init = async (req, res) => {
  // await Page.sync();
  // await User.sync();
  await db.sync({ force: true }); // { force: true } <-- Optional if we need to overwrite tables.

  app.listen(PORT, () => {
    console.log(`App listening in port: ${PORT}`);
  });
};

init();
