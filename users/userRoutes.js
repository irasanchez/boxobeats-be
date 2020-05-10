const express = require("express");
const Users = require("./userModel");

const router = express.Router();

router.get("", (req, res) => {
  Users.get()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  let { id } = req.params;

  Users.getById(id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  let { id } = req.params;
  let update = req.body;

  Users.update(id, update)
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  let { id } = req.params;
  Users.remove(id)
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
