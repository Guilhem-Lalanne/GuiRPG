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
var oPlayer1 = new Player(5, 5, 6);

//RENDER
$(function () {

    $('#hp').html(oPlayer1.hp);

    /*affiche la barre de statuts avec effet fadeIn*/
    $( "#statusBar" ).fadeIn( "slow", function() {

    });
});
},{"./class/player.js":1}]},{},[2]);
