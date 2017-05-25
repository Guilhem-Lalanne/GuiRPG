var assert = require("assert");
var chai = require("chai");
var Dice = require("../class/dice.js");

describe('Test dice class', function () {

    let d20 = 20;
    let oTestD20 = new Dice(d20);

    //result
    it('jet de dé > 0', function () {
        chai.assert.isAbove(oTestD20.roll(), 0);
    });

    it('jet de dé < max', function () {
        chai.assert.isBelow(oTestD20.roll(), d20);
    });

});