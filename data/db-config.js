const knex = require("knex");

const knexfile = require("../knexfile.js");

const database = process.env.ENVIRONMENT || "development";

module.exports = knex(knexfile[database]);
