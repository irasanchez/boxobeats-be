const express = require("express");
const beats = require("../beatsData");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(beats);
});

module.exports = router;
