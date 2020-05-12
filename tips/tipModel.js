const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
};

// this will include the sounds and any tips users left re: sounds
function get(sound_id) {
  return db("tip").where({ sound_id });
}

function getById(id) {
  return db("sound").where({ id }).first();
}
