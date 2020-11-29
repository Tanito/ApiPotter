const { rejects } = require('assert');
const express = require('express');
const router = express.Router();
const path = require('path');

const characters = require('../utils/characters');

router.get('/', function (req, res) {
    const { house } = req.query;
    if (house) {
        const filter = characters.filter(p => p.house.toLowerCase().replace(' ', '') === house.toLowerCase().replace(' ', ''))
        if (filter.length > 0) {
            return res.json(filter);
        } else {
            return res.sendStatus(404);
        }
    }
    res.send(characters);
});

router.get("/:character", function (req, res) {
    let { character } = req.params
    character = character.toLowerCase().replace(' ', '');

    let found = characters.find(p => p.name.toLowerCase().replace(' ', '') === character)

    if (found) return res.status(200).json(found)

    res.sendStatus(404)
})

module.exports = router;
