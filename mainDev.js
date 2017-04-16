//LIBS
var $ = require("jquery");

//CLASS
var Player = require("./class/player.js");

//TESTS
var mocha = require("mocha");
var PlayerTest = require("./test/playerTest.js");

var oPlayerTest = new PlayerTest();

//GAME
var oPlayer1 = new Player();
//oPlayer1.attack();