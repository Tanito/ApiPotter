const express = require("express");
const app = express();
const path = require('path')

const port = process.env.PORT || 3000;

const characters = require('./routes/characters');
const spells = require('./routes/spells');
const houses = require('./routes/houses');

app.use(express.static(path.join(__dirname, 'public')));

/* ### Routes ### */

app.use('/characters', characters);
app.use('/spells', spells);
app.use('/houses', houses);


/* ### /Routes ### */

app.get('/', function (req, res) { res.send('Bienvenido a Api Potter'); });

app.get('/sortinghat', function (req,res){
    var listHouse = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"]
    let aleatorio =  Math.floor(Math.random()*(listHouse.length));
    let seleccion = listHouse[aleatorio]


    res.json(seleccion);

})

app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
