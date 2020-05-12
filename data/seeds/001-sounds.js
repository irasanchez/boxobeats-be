exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sound")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("sound").insert([
        {
          id: 0,
          name: "kick drum",
          tutorial: "g703Y7xtyo8",
          description:
            "Plosive sound made making the B sound without your voice.",
        },
      ]);
    });
};
