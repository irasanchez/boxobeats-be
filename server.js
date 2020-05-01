const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const beatsRoutes = require("./sounds/beatRoutes.js");
const userRoutes = require("./users/userRoutes.js");
const authRoutes = require("./auth/authRoutes.js");

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRoutes);
server.use("/api/user", userRoutes);
server.use("/api/beats", beatsRoutes);

server.use("/", (req, res) => res.send("API is up and running! 😊"));
// watch for connections on port 5000
server.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
