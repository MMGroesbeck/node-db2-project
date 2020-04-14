const express = require("express");
const knex = require("knex");

const knexfile = require("../../knexfile.js");

const db = knex(knexfile.development);

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve car data." });
    });
});

router.get("/:id/", (req, res) => {
  if (req.params.id) {
    db("cars")
      .where({ id: req.params.id })
      .first()
      .then((car) => {
        res.json(car);
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to retrieve car" });
      });
  } else {
    res.status(400).json({ message: "Car ID required." });
  }
});

router.post("/", (req, res) => {
    if(req.body.vin && req.body.make && req.body.model && req.body.mileage){
        db('cars').insert(req.body)
        .then(ids => {
            db('cars').where({ id: ids[0] })
            .then(newCar => {
                res.status(201).json(newCar);
            })
        })
        .catch (err => {
            console.log('POST error', err);
            res.status(500).json({ message: "Failed to store data" });
          });
    } else {
        res.status(400).json({ message: "Requires VIN, make, model, and mileage." });
    }
})

module.exports = router;
