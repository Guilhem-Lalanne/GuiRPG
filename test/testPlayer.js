var assert = require("assert");
var chai = require("chai");
var Player = require("../class/player.js");

describe('Test mocha & chai', function () {
  it('mocha chai work', function () {
    chai.assert.isOk('everything', 'everything is ok');
  });
});

describe('Test player class', function () {

  let oTestPlayer = new Player(5, 3, 5);
  let pvMax = 100;
  let strengthMax = 100;

  //PV
  it('PV < 0', function () {
    chai.assert.isAbove(oTestPlayer.hp, 0);
  });
  it('PV > max', function () {
    chai.assert.isBelow(oTestPlayer.hp, pvMax);
  });
  //MANGE
  it('légume mangé : PV++', function () {
    var currentHp = oTestPlayer.hp;
    oTestPlayer.eatVegetable(1);
    var hpAfterEating = oTestPlayer.hp;
    chai.assert.isAbove(hpAfterEating, currentHp);
  });
  //ATTAQUE
  it('Attaque > 0', function () {
    chai.assert.isAbove(oTestPlayer.strength, 0);
  });
  it('Attaque < max', function () {
    chai.assert.isBelow(oTestPlayer.strength, strengthMax);
  });
  //MAGIC
  it('Magie (cooldown) > 0 : impossible de lancer un sort', function () {
    oTestPlayer.cooldown(10000);
    chai.assert.equal(oTestPlayer.mana, 0);
  });

});