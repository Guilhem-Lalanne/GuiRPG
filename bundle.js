(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
class Player {

	constructor(hp, strength, mana) {
		this.hp = hp;
		this.strength = strength;
		this.mana = mana;
	}

	attack() {
		console.log("paf");
	}

	ok() {
		return true;
	}

	eatVegetable(type) {
		if (type === 1) {
			this.hp += 1;
		} else if (type === 2) {
			this.hp += 2;
		} else if (type === 3) {
			this.hp += 3;
		}
	}

	cooldown(time) {
		this.mana = 0;
	}

}

module.exports = Player;
},{}],2:[function(require,module,exports){
//REQUIRES
var Player = require("./class/player.js");

//GAME
var stopBulle = false;
var firstLevelCompleted = 0;

var oPlayer1 = new Player(5, 5, 6);

//RENDER
$(function () {

  $('#hp').html(oPlayer1.hp);

  /*affiche la barre de statuts avec effet fadeIn*/
  //$( "#statusBar" ).fadeIn( "slow", function() {});

  //Level0
  if (firstLevelCompleted === 0) {

    let msgStart = [
      "Ou est ce que je suis ?",
      "Il fait noir !",
      "Je ne comprend pas ...",
      "Je dois je trouver l'interrupteur"
    ];

    showDialog(msgStart, 2000);

    firstLevelCompleted = 1;
  }

  $('#interrupteur').on('click', function () {
    if ($('body').hasClass('allWhite')) {
      $('body').toggleClass('allWhite allBlack');
    } else {
      $('body').toggleClass('allWhite allBlack');
    }
  });

  //ouvre la porte
  $('#jailKey').on('click', function () {
    $('#bonhomme').css('display', 'block');
    $('#cage1').css('display', 'none');
    $('#cage2').css('display', 'block');
    $('#jailDoor').css('display', 'block');
    $('#jailKey').remove();

    stopBulle = true;

    //showBubble("Je suis libre !!", 10000, true);
    /*setTimeout(function () {
      $('#chat').css('display', 'block');
    }, 5000);*/
  });

  // ouvre l'autre page
  $('#chat').on('click', function () {
    $('#game0').css('display', 'none');
  });
});

//BULLE RECURSIVE
function showDialog(texteArray, timeout) {

  if(!stopBulle) {
    var nbMessage = 0;

    //compte le nombre de message a afficher
    $.each(texteArray, function (key, value) {
      nbMessage++;
    });

    if (nbMessage > 0) {

      var bulleId = Math.floor(Math.random() * 1000 + 1);

      var bulle = '<div id="' + bulleId + '" class="bulle">' + texteArray[0] + '<div class="arrow-down"></div></div>';

      //affiche la bulle à une position aleatoire
      $('.gameWindow').append(bulle);
      $('.bulle').last().css('position', 'absolute');
      $('.bulle').last().css('left', Math.floor(Math.random() * $('.gameWindow').width() - 120 + 120));
      $('.bulle').last().css('top', Math.floor(Math.random() * $('.gameWindow').height() - 240 + 220));

      //supprime le 1er element du tableau
      texteArray.shift();

      //cache la bulle et rappel la function
      setTimeout(function () {
        $('#' + bulleId).hide("slow", function () {
          this.remove();
        });
        showDialog(texteArray, timeout);
      }, timeout);
    }
  } else {
    stopBulle = !stopBulle;
  }

}

},{"./class/player.js":1}]},{},[2]);
