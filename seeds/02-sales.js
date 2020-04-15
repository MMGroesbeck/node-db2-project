
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {id: 1, 
          date: "08/24/1999",
          car_id: 1
        }
      ]);
    });
};
