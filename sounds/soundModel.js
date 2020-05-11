const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
};

// this will include the sounds and any tips users left re: sounds
function get() {
  console.log("getting sounds");
  return db("sound")
    .leftJoin("tip", "sound.tip_id", "tip.id")
    .innerJoin("user", "tip.user_id", "user.id");
}

function getById(id) {
  return db("sound").where({ id }).first();
}
