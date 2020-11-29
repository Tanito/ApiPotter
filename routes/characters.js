const express = require('express');
const router = express.Router();
const path = require('path');

const personajes = require('../utils/characters');

router.get('/', function (req, res) { res.send(personajes); });

router.get("/:character", function (req, res) {
    var character = req.params.character.toLowerCase().replace(' ', '')
    let personaje = personajes.find(p => p.name.toLowerCase().replace(' ', '') === character)

    if (personaje) { res.send(personaje) }
    res.redirect("/error")
})

module.exports = router;
