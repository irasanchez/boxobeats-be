const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const checkCredentials = require("../auth/authMiddleware");
const soundRoutes = require("../sounds/soundRoutes.js");
const userRoutes = require("../users/userRoutes.js");
const authRoutes = require("../auth/authRoutes.js");

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRoutes);
server.use("/api/user", checkCredentials, userRoutes);
server.use("/api/sounds", checkCredentials, soundRoutes);

server.use("/", (req, res) => res.send("API is up and running! 😊"));

module.exports = server;
