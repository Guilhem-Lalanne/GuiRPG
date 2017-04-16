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

                var oPlayerTest = new Player();

                it('ok function return true', function() {
                    chai.assert.isOk(oPlayerTest.ok, 'everything is ok');
                });

                it('pv du joueur superieur à 0', function() {
                    chai.assert.isAbove(oPlayerTest.hp,0);
                });

            });

        mocha.run();

    }

}

module.exports = PlayerTest;