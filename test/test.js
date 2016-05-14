var chai = require('chai');
chai.use(require('chai-fs'));
var path = require('path');
var fs = require('fs');

var shelf = require('../shelf.js');


describe('Library', function() {

  describe('loading', function() {

    it('should create a default path if none is given', function() {
      var lib = new shelf.Library();
      chai.assert.include(lib.path, ".pandoc");
    });

    it('should use the given path if a path is given', function() {
      var library = path.resolve("./test/data");
      var lib = new shelf.Library(library);
      chai.assert.equal(library, lib.path);
    });
  });

  describe('writing', function() {

    it('should write a default.json file in the path', function() {
      var library = path.resolve("./test/data");
      var lib = new shelf.Library(library);
      lib.write();
      chai.assert.isFile(library + "/default.json");
      fs.unlinkSync(library + "/default.json"); // NOTE remove the test file
    });

  });

  describe('getting entries', function() {
    it('should return something when a valid key is accessed', function() {
      chai.assert.equal(0, 1);
    });
    it('should return undefined when an invalid key is accessed', function() {
      chai.assert.equal(0, 1);
    });
  });

});

describe('Unique ID', function() {

  describe('names', function() {
    it('should return anonymous if there are no authors', function() {
      chai.assert.equal(0, 1);
    });
    it('should return the last name if the first author is a person', function() {
      chai.assert.equal(0, 1);
    });
    it('should return the first n characters if the first author is an institution', function() {
      chai.assert.equal(0, 1);
    });
    it('should return the first characters if the name has less than three characters', function() {
      chai.assert.equal(0, 1);
    });
  });

  describe('unicity', function() {
    it('should return a unique number at the end if there is a duplicate', function() {
      chai.assert.equal(0, 1);
    });
  });

});
