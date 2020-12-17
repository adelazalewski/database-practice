
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([{username: "damiana", website: "www.kjhsbkds.com"},{username: "adela"}]);
    })
    // .onConflict()
    // .ignore('website')
};
