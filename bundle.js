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

	constructor(hp, strength, mana, agility, defense, attackDice, dodgeDice) {
		var Dice = require("../class/dice.js");
		//param
		this.hp = hp;
		this.strength = strength;
		this.mana = mana;
		this.agility = agility;
		this.defense = defense;
		this.oAttackDice = new Dice(attackDice);
        this.oDodgeDice = new Dice(dodgeDice);
	}

	attack() {
		console.log("paf");
		var damage = Math.floor((Math.random() * this.oAttackDice.roll()) + this.strength);
        return damage;
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
},{"../class/dice.js":1}],3:[function(require,module,exports){
//REQUIRES
var Player = require("./class/player.js");
var Dice = require("./class/dice.js");

//GAME
var currentScene = null;
var stopBulle = false;
var firstSceneCompleted = 0;

var oPlayer1 = new Player(5, 5, 6);
var oD10 = new Dice(10);

//RENDER
$(function () {

  $('#hp').html(oPlayer1.hp);

  loadScene(2);

  /*affiche la barre de statuts avec effet fadeIn*/
  //$( "#statusBar" ).fadeIn( "slow", function() {});

  function loadScene(id) {
    switch (id) {
      case 0:
        currentScene = 0;
        initScene0();
        break;
      case 1:
        currentScene = 1;
        initScene1();
        break;
      case 2:
        currentScene = 2;
        initScene2();
        break;

      default:
        initScene0();
        break;
    }
  }

  //START LEVEL0
  function initScene0() {

    if (currentScene === 0 && firstSceneCompleted === 0) {

      $('#game0').show();

      let msgStart = [
        "Ou est ce que je suis ?",
        "Il fait noir ...",
        "Qu'est ce qui se passe ?!!",
        "Je dois trouver l'interrupteur"
      ];

      showDialog(msgStart, 2000);

      firstSceneCompleted = 1;


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

      $('#outJailDoor').on('click', function () {
        $('.bulle').remove();
        $('#game0').hide();
        currentScene = 1;
        initScene1();
      });

      // ouvre l'autre page
      $('#chat').on('click', function () {
        $('#game0').css('display', 'none');
      });
    }
  }
  //END LEVEL0

  //START LEVEL1
  function initScene1() {
    if (currentScene === 1) {

      $('#game1').show();

      $('.dungeon0Door').on('click', function (e) {
        console.log(currentScene);
        if (oD10.roll() >= 8) {
          currentScene = 2;
        } else {
          $('.dungeon0Door').animate({ opacity: '0' }, 'slow', function () {
            $('.dungeon0Door').animate({ opacity: '1' }, 'fast');
          });
        }
      });
    }
  }
  //END LEVEL1

  function initScene2() {
    if (currentScene === 2) {
      $('#game2').show();
      moveMiniHero(5, 60, 100);
    }
  }

  $('#btnResizeConsole').on('click', function () {
    $('#console').toggle();
    $('#btnResizeConsole').toggleClass('fa-minus fa-plus');
  });

  function moveMiniHero(margin, duration, speed) {

    var movement = setInterval(function () {

      let current_margin = parseInt($("#miniHero").css("margin-left"));
      $('#miniHero').css('margin-left', current_margin + margin);

      duration--;

      if (duration <= 0) {
        clearInterval(movement);
      }
    }, speed);

  }

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

});
},{"./class/dice.js":1,"./class/player.js":2}]},{},[3]);
