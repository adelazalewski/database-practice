
exports.up = function(knex) {
  // 1 farm has many ranchers
  return knex.schema.createTable('farms', (tbl) => {
      tbl.increments();
      tbl.string('farm_name', 128).notNullable();
  })
  .createTable('ranchers', tbl => {
      tbl.increments();
      tbl.string('rancer_name', 128);
      //foreign key that points to the farms tbl
      tbl.integer('farm_id')
      .unsigned() //to be a positive number
      .notNullable()
      //indicates which field this refrances
      .references('id')
      .inTable('farms')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
    //shoose and soxs and always drop table oposite of how you cretea them
  return dropTableIfExists('ranchares')
  .dropTableIfExists('farms')
};
