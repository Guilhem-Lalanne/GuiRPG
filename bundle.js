(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
class Dice {

	constructor(nbFace) {
		this.nbFace = nbFace;
	}

	roll() {
        var result = Math.floor((Math.random() * this.nbFace) + 1);
        return result;
	}
}

module.exports = Dice;
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
//REQUIRES
var Player = require("./class/player.js");
var Dice = require("./class/dice.js");

//GAME
var stopBulle = false;
var currentLevel = 0;
var firstLevelCompleted = 0;

var oPlayer1 = new Player(5, 5, 6);
var oD10 = new Dice(10);
//RENDER
$(function () {

  $('#hp').html(oPlayer1.hp);

  /*affiche la barre de statuts avec effet fadeIn*/
  //$( "#statusBar" ).fadeIn( "slow", function() {});

  initLevel0();

  //START LEVEL0
  function initLevel0() {

    if (currentLevel === 0 && firstLevelCompleted === 0) {

      $('#game0').show();

      let msgStart = [
        "Ou est ce que je suis ?",
        "Il fait noir ...",
        "Qu'est ce qui se passe ?!!",
        "Je dois trouver l'interrupteur"
      ];

      showDialog(msgStart, 2000);

      firstLevelCompleted = 1;


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
        $('#outJailDoor').css('display', 'block');
        $('#jailKey').remove();

        stopBulle = true;

        //showBubble("Je suis libre !!", 10000, true);
        /*setTimeout(function () {
          $('#chat').css('display', 'block');
        }, 5000);*/
      });

      $('#outJailDoor').on('click', function() {
        $('.bulle').remove();
        $('#game0').hide();
        currentLevel = 1;
        initLevel1();
      });

      // ouvre l'autre page
      $('#chat').on('click', function () {
        $('#game0').css('display', 'none');
      });
    }
  }
  //END LEVEL0

  //START LEVEL1
  function initLevel1() {
    if (currentLevel === 1) {

      $('#game1').show();

      $('.dungeon0Door').on('click', function (e) {
        console.log(currentLevel);
        if (oD10.roll() >= 8) {
          currentLevel = 2;
        } else {
          $('.dungeon0Door').animate({ opacity: '0' }, 'slow', function () {
            $('.dungeon0Door').animate({ opacity: '1' }, 'fast');
          });
        }
      });
    }
  }
  //END LEVEL1

});

//BULLE RECURSIVE
function showDialog(texteArray, timeout) {

  if (!stopBulle) {
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
      $('.bulle').last().animate({ opacity: '1' }, 'slow');

      //supprime le 1er element du tableau
      texteArray.shift();

      //cache la bulle et rappel la function
      setTimeout(function () {
        $('.bulle').last().animate({ opacity: '0' }, 'slow', function () {
          showDialog(texteArray, timeout);
        });
      }, timeout);
    }
  } else {
    stopBulle = !stopBulle;
  }

}

},{"./class/dice.js":1,"./class/player.js":2}]},{},[3]);
