const express = require('express');
const router = express.Router();

const hechizos = require('../utils/spells')

 router.get('/', function (req, res) {
   
    const { type } = req.query;
     
    if (type) {
        const filter = hechizos.filter((h) => h.type.toLowerCase() === type.toLowerCase())
          if (filter.length > 0) {
            return res.json(filter);
        } else {
            return res.sendStatus(404);
        }
    }
    res.send(hechizos);
}); 

router.get("/:spell", function (req, res) {
    var spell = req.params.spell.toLowerCase().replace(' ', '')
    let hechizo = hechizos.find(h => h.spell.toLowerCase().replace(' ', '') === spell)

    if (hechizo) { res.send(hechizo) }
    res.redirect("/error")
})

module.exports = router;
