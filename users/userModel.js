const db = require("../data/db-config.js");

module.exports = {
  get,
  getByEmail,
  getById,
  add,
  update,
  remove,
};

function get() {
  return db("user").select("id", "username");
}

function getByEmail(email) {
  return db("user").where({ email }).first();
}

function getById(id) {
  return db("user").where({ id }).first();
}

function add(newUser) {
  return db("user")
    .insert(newUser)
    .then(([id]) => db("user").where({ id }).first());
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => getById(id));
}

function remove(id) {
  return db("user").where("id", id).del();
}
