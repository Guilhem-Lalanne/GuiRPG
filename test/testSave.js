var assert = require("assert");
var chai = require("chai");
/**
 * Needed for json tests :
 */
chai.use(require('chai-json'));
var Save = require("../class/Save.js");

describe('Save', function () {

  let oTestSave = new Save();

  // Save function returns not null value
  it('returns not null value', function () {
    chai.assert.isNotNull(oTestSave.print(), 'The save returns a not null value !');
  });

  // Save function returns a String
  it('returns String', function () {
    chai.assert.isString(oTestSave.print(), 'The save is a String.')
  })

  // Save function returns a JSON
  /**
   * See documentation : 
   * https://www.npmjs.com/package/chai-json
   */
  it('is a JSON file', function () {
    chai.expect(oTestSave.print()).to.be.a.jsonFile();
  })
});