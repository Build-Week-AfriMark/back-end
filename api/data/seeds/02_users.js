exports.seed = function(knex) {
  return knex('users').insert([
    {username: "chelsea", password: "1234"},
    {username: "kyle", password: "1234"},
    {username: "lupita", password: "1234"},
    {username: "leo", password: "1234"},
    {username: "joey", password: "1234"},
  ]);
};

