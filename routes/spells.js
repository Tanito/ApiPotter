const express = require('express');
const router = express.Router();

const hechizos = require('../utils/spells')

router.get('/', function (req, res) { res.send(hechizos); });
router.get("/:spell", function (req, res) {
    var spell = req.params.spell.toLowerCase().replace(' ', '')
    let hechizo = hechizos.find(h => h.spell.toLowerCase().replace(' ', '') === spell)

    if (hechizo) { res.send(hechizo) }
    res.redirect("/error")
})

module.exports = router;
