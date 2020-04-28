const db = require("../data/db-config.js");

module.exports = {
  add,
  getByEmail,
};

function getByEmail(email) {
  return db("user").where({ email }).first();
}

function add(newUser) {
  console.log(newUser);
  return db("user").insert(newUser);
}
