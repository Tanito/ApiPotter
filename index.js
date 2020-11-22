const express = require("express");
const app = express();
// const bodyParser = require('body-parser');
//const personajes = require('./api/personajes')
const personajes = require('./personajes1')
const hechizos = require('./hechizos')
const houses = require('./houses')
const port = process.env.PORT || 3000;
const fs = require('fs');

app.use(express.static('public'));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/', function (req, res) { res.send('Bienvenido a Api Potter'); });

app.get('/characters', function (req, res) { res.send(personajes); });

// app.get('/character/:img', function (req, res) { res.send(personajes); });

app.get('/houses', function (req, res) { res.send(houses); });

app.get('/spells', function (req, res) { res.send(hechizos); });

app.get("/characters/:character", function (req, res) {
    var character = req.params.character.toLowerCase().replace(' ', '')
    let personaje = personajes.find(p => p.name.toLowerCase().replace(' ', '') === character)
    //  console.log('character', character, 'personaje', personaje)

    if (personaje) { res.send(personaje) }
    res.redirect("/error")
})

app.get("/houses/:house", function (req, res) {
    var house = req.params.house.toLowerCase()
    let casa = houses.find(c => c.name.toLowerCase() === house)

    if (casa) { res.send(casa) }
    res.redirect("/error")
})

app.get("/spells/:spell", function (req, res) {
    var spell = req.params.spell.toLowerCase().replace(' ', '')
    let hechizo = hechizos.find(h => h.spell.toLowerCase().replace(' ', '') === spell)

    if (hechizo) { res.send(hechizo) }
    res.redirect("/error")
})

app.get("/character/:imagen", function (req, res, next) {
    var imagen = req.params.imagen.toLowerCase().replace(' ', '')
    let foto = imagen + '.jpeg'

    fs.readFile(`./src/assets/img/${foto}`, (err, data) => {
        if (err) res.redirect("/error")
        res.status(200);
        res.set('Content-Type', 'image/jpeg')
        res.write(data)
        return next()
    })
})

app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
