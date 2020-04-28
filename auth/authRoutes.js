const router = require("express").Router();
const jwt = require("jsonwebtoken"); // installed this library
const bcrypt = require("bcryptjs");
const Users = require("../users/userModel");
const secrets = require("../config/secrets.js");

router.post("/register", (req, res) => {
  let user = req.body;
  let rounds = process.env.HASH_ROUNDS || 12;
  let hash = bcrypt.hashSync(user.password, rounds);

  user.password = hash;

  Users.add(user)
    .then((addedUser) => {
      res.status(201).json(addedUser);
    })
    .catch((error) => {
      res.status(500).json({ message: "Cannot add user", error });
    });
});

router.post("/login", (req, res) => {
  let { email, password } = req.body;

  Users.getByEmail(email)
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user); // new line

        // the server needs to return the token to the client
        // this doesn't happen automatically like it happens with cookies
        res.status(200).json({
          message: `Welcome ${user.stage_name}!, have a token...`,
          token, // attach the token as part of the response
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id, // sub in payload is what the token is about
    username: user.stage_name,
    // ...otherData
  };

  const options = {
    expiresIn: "1d", // show other available options in the library's documentation
  };

  // extract the secret away so it can be required and used where needed
  let signed = jwt.sign(payload, secrets.jwtSecret, options); // this method is synchronous
  return signed;
}

module.exports = router;
