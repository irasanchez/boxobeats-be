const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
};

// this will include the sounds and any tips users left re: sounds
function get() {
  return db("sound");
}

function getById(id) {
  return db("sound").where({ id }).first();
}
