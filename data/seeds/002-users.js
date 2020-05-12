exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        {
          id: 0,
          email: "sometestemail@email.com",
          stage_name: "beatBud",
          password: "kushdfkjasdkhak",
        },
      ]);
    });
};
