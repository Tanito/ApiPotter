const express = require('express');
const router = express.Router();

const houses = require('../utils/houses')

router.get('/', function (req, res) { res.send(houses); });

router.get("/:house", function (req, res) {
    var house = req.params.house.toLowerCase()
    let casa = houses.find(c => c.name.toLowerCase() === house)

    if (casa) { res.send(casa) }
    res.redirect("/error")
})

module.exports = router;
