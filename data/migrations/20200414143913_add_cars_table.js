
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('vin').notNullable();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
      tbl.decimal('mileage').notNullable();
      tbl.boolean('autotrans');
      tbl.string('titlestatus');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
