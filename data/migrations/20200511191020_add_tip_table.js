exports.up = function (knex) {
  return knex.schema.createTable("tip", (tbl) => {
    tbl.increments();
    tbl.text("content", 255).unique().notNullable();
    tbl.integer("sound_id", 128).unsigned();
    tbl.foreign("sound_id").references("sound.id");
    tbl.integer("user_id", 128).unsigned();
    tbl.foreign("user_id").references("user.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tip");
};
