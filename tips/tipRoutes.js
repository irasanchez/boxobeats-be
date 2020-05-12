const express = require("express");
const Tips = require("./tipModel");
const router = express.Router();

// gets the tips for a sound
router.get("/:id", (req, res) => {
  let id = req.params.id;
  Tips.get(id)
    .then((tips) => {
      console.log("here");
      res.status(200).json(tips);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
