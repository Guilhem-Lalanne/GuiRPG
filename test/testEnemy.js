var assert = require("assert");
var chai = require("chai");
var Enemy = require("../class/enemy.js");
var Dice = require("../class/dice.js");

describe('Test enemy class', function () {

    let d20 = 20;
    let oTestD20 = new Dice(d20);

    let name = "blob";
    let hp = 10;
    let strength = 10;
    let agility = 10;
    let defense = 10;
    let diceNumber = 20;

    let oTestEnemy = new Enemy(name,hp,strength,agility,defense,diceNumber);

    //result
    it('attaque > 0', function () {
        chai.assert.isAbove(oTestEnemy.attack(), strength-1);
    });
    it('attaque <= strenght', function () {
        chai.assert.isAbove(oTestEnemy.attack(), 0);
    });

    it('hp < 0 ennemi meurt', function () {
        oTestEnemy.takeDamage(1000);
        chai.assert.isBelow(oTestEnemy.hp, 0);
        chai.assert.equal(oTestEnemy.status, "dead");
    });

});