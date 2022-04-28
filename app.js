const express = require("express");
const morgan = require("morgan");
const { db, Page, Users, User } = require("./models");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.send("hello world");
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
