exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tip")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tip").insert([
        {
          id: 0,
          content:
            "You can play with the intensity of this sound for different effects.",
          user_id: 0,
          sound_id: 0,
        },
      ]);
    });
};
