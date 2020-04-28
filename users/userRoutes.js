const express = require("express");
const Users = require("./userModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200);
});

module.exports = router;
