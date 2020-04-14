const express = require('express');
const knex = require('knex');

const knexfile = require('../../knexfile.js');

const db = knex(knexfile.development);

const router = express.Router();

router.get('', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve car data." });
    })
})

module.exports = router;