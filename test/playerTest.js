class PlayerTest {

    constructor() {

        var assert = require("assert");
        var chai = require("chai");

        var Player = require("../class/player.js");

        mocha.setup('bdd');

            describe('Test mocha & chai', function() {
                it('mocha chai work', function() {
                    chai.assert.isOk('everything', 'everything is ok');
                });
            });

            describe('Test player class', function() {
                it('player ok function return true', function() {

                    var oPlayer1 = new Player();
                    oPlayer1.attack();
                    chai.assert.isOk(oPlayer1.ok, 'everything is ok');
                });
            });

        mocha.run();

    }

}

module.exports = PlayerTest;