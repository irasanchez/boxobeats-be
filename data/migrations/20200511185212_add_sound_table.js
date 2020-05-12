exports.up = function (knex) {
  return knex.schema.createTable("sound", (tbl) => {
    tbl.increments();
    tbl.text("name", 255).unique().notNullable();
    tbl.text("tutorial", 128).notNullable();
    tbl.text("description", 255).unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("sound");
};
