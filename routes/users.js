const { main, userList, userPages } = require("../views");
// const addPage = require("../views/addPage");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(main());
});
router.post("/", (req, res) => {
  res.send(user);
});
router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
