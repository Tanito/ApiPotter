const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const personajes = require('./personajes')
const hechizos = require('./hechizos')
const houses = require('./houses')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Welcome to Api Potter');
});

app.get('/characters', function (req, res) {
    res.send(personajes);
});

app.get('/houses', function (req, res) {
    res.send(houses);
});

app.get('/spells', function (req, res) {
    res.send(hechizos);
});

app.get("/characters/:character", function (req, res) {
    var character = req.params.character
    let personaje = personajes.find(pers => pers.name === character)
   
    if (personaje) { res.send(personaje) }
    res.redirect("/error")
})


app.get("/houses/:house", function (req, res) {
    var house = req.params.house
    let casa = houses.find(c => c.name === house)
  
    if (casa) { res.send(casa) }
    res.redirect("/error")
})

app.get("/spells/:spell", function (req, res) {
    var spell = req.params.spell
    let hechizo = hechizos.find(h => h.spell === spell)
  
    if (hechizo) { res.send(hechizo) }
    res.redirect("/error")
})

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
