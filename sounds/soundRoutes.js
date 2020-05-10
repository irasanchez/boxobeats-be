const express = require("express");
const sounds = require("../soundsData");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(sounds);
});

module.exports = router;
