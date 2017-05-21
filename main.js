//REQUIRES
var express = require('express');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var Player = require("./class/player.js");

//GAME
var oPlayer1 = new Player(5, 5, 6);


var app = express();

// app.get('/index.html', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Vous êtes à l\'accueil');
// });

app.use('/', express.static(__dirname + '/'));

app.listen(8080);

const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);
//RENDER

    $('#hp').html(oPlayer1.hp);

    /*affiche la barre de statuts avec effet fadeIn*/
    $("#statusBar").fadeIn("slow", function () {

    });