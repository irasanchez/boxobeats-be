const express = require("express");
const Sounds = require("../soundsData");
const router = express.Router();

router.get("/", (req, res) => {
  Sounds.get()
    .then((sounds) => res.status(200).json(sounds))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  let { id } = req.params;

  Sounds.getById(id)
    .then((sound) => res.status(200).json(sound))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
