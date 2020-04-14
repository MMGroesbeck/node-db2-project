
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments('id');
        tbl.string('date');
        tbl.decimal('dollar_price');
        tbl.integer('car_id');
        tbl.foreign('car_id').references('cars.id');
    })
};

exports.down = function(knex) {
  
};
