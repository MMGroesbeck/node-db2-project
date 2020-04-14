
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, 
          vin: 'insert VIN 1 here',
          make: 'Hyundai',
          model: 'Excel',
          mileage: 120000,
          autotrans: true
        },
        {id: 2, 
          vin: 'insert VIN 2 here',
          make: 'Saturn',
          model: 'SL2',
          mileage: 240000,
          autotrans: true
        },
        {id: 3, 
          vin: 'insert VIN 3 here',
          make: 'Mazda',
          model: 'Mazda2',
          mileage: 120000,
          autotrans: true,
          titlestatus: 'totalled'
        }
      ]);
    });
};
