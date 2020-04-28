exports.up = function (knex) {
  return knex.schema.createTable("user", (tbl) => {
    tbl.increments();
    tbl.text("stage_name", 128).unique().notNullable();
    tbl.text("password", 255).notNullable();
    tbl.text("email", 128).unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
