var http = require('http');
var fs = require('fs');
const personajes = require('./personajes')
const hechizos = require('./hechizos')
const houses = require('./houses')

http.createServer(function (req, res) {
    if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
       // console.log(personajes)
        return res.end(JSON.stringify(personajes));
    }
    if (req.url === '/api/houses') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
       // console.log(houses)
        return res.end(JSON.stringify(houses));
    }
   if (req.url === '/api/hechizos') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
       // console.log(hechizos)
        return res.end(JSON.stringify(hechizos));
    }
    if (req.url.includes('/api/')) {
        let nombre = req.url.slice(5).replace('%20', '').toLowerCase();
        //  console.log('nombre', nombre)
        //  beatle = beatle.replace('%20', ' ');
        // console.log(beatle)
        let personaje = personajes.find(pers => pers.name.toLowerCase().replace(' ','') === nombre)
        console.log('personaje', personaje)
        if (!personaje) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('No es un MAGO!');
        } else {
            console.log(personaje)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(personaje));
        }

    }

}).listen(1337, '127.0.0.1');



