
exports.up = function(knex) {
  //the chamge we what to make to our schema
  return knex.schema.createTable('users', tbl => {
      tbl.increments(); //autoincrements
      tbl.text('username', 128) //required and unique
      .unique()
      .notNullable();
      tbl.text('website'); //optional
  })
};

exports.down = function(knex) {
  //undoing that change
  return knex.schema.dropTableIfExists('users');
};
