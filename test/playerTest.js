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

                let oPlayerTest = new Player(5, 3, 5);
                let pvMax = 100;
                let strengthMax = 100;

                //PV
                it('PV < 0', function() {
                    chai.assert.isAbove(oPlayerTest.hp,0);
                });
                it('PV > max', function() {
                    chai.assert.isBelow(oPlayerTest.hp,pvMax);
                });
                //MANGE
                it('légume mangé : PV++', function() {
                    var currentHp = oPlayerTest.hp;
                    oPlayerTest.eatVegetable(1);
                    var hpAfterEating = oPlayerTest.hp;
                    chai.assert.isAbove(hpAfterEating,currentHp);
                });
                //ATTAQUE
                it('Attaque > 0', function() {
                    chai.assert.isAbove(oPlayerTest.strength,0);
                });
                it('Attaque < max', function() {
                    chai.assert.isBelow(oPlayerTest.strength,strengthMax);
                });
                //MAGIC
                it('Magie (cooldown) > 0 : impossible de lancer un sort', function() {
                    oPlayerTest.cooldown(10000);
                    chai.assert.equal(oPlayerTest.mana,0);
                });

            });

        mocha.run();

    }

}

module.exports = PlayerTest;