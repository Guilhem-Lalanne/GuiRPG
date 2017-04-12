class PlayerTest {

    constructor() {

        var assert = require("assert");
        var chai = require("chai");

        mocha.setup('bdd');

            describe('Test player class', function() {
                it('mocha chai work', function() {
                    chai.assert.isOk('everything', 'everything is ok');
                });
            });

        mocha.run();

    }

}

module.exports = PlayerTest;