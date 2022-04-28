const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require("../views");
// const addPage = require("../views/addPage");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(main());
});
router.post("/", (req, res) => {
  res.send("hello world");
});
router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
