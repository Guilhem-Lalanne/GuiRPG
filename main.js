//REQUIRES
var Player = require("./class/player.js");

//GAME
var oPlayer1 = new Player(5, 5, 6);

//RENDER
$(function () {

    $('#hp').html(oPlayer1.hp);

    /*affiche la barre de statuts avec effet fadeIn*/
    $( "#statusBar" ).fadeIn( "slow", function() {

    });
});