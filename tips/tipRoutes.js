const express = require("express");
const Tips = require("./tipModel");
const router = express.Router();

router.get("/", (req, res) => {
  Tips.get()
    .then((sounds) => res.status(200).json(sounds))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  let { id } = req.params;

  Tips.getById(id)
    .then((sound) => res.status(200).json(sound))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
