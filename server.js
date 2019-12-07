const express = require("express");
const beatsRoutes = require("./routes/beatRoutes");

const server = express();

server.use("/beats", beatsRoutes);

server.use("/", (req, res) => res.send("API is up and running! 😊"));
// watch for connections on port 5000
server.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
