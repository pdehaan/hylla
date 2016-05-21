describe('Entries', function() {

  describe('getting entries', function() {

    it('should return something when a valid key is accessed', function() {
      var lib = new shelf.Library(path.resolve("./test/data"));
      var ref_0_key = lib.entries[0].id();
      chai.assert.isDefined(lib.entry(ref_0_key));
    });

    it('should return undefined when an invalid key is accessed', function() {
      var lib = new shelf.Library(path.resolve("./test/data"));
      chai.assert.isUndefined(lib.entry("ThisIsNotAnEntry"));
    });
  });

  describe('adding references', function() {

    it('should create a new key', function() {
      var doi = "10.1111/ecog.01748";
      var ref = shelf.doi.refFromDoi(doi);
      var lib = new shelf.Library(path.resolve("./test/data"));
      var newref = lib.new(ref);
      // First we check the key
      chai.assert.equal(newref, 'gray15tts');
      // Then we remove the file
      fs.unlinkSync(lib.records + "/" + newref + ".json");
    });

    it('should create a new key with a unique identifier', function() {
      var doi = "10.1111/ecog.01748";
      var ref = shelf.doi.refFromDoi(doi);
      var lib = new shelf.Library(path.resolve("./test/data"));
      var newref = lib.new(ref);
      var newref2 = lib.new(ref);
      // First we check the key
      chai.assert.equal(newref, 'gray15tts');
      chai.assert.equal(newref2, 'gray15tts2');
      // Then we remove the file
      fs.unlinkSync(lib.records + "/" + newref + ".json");
      fs.unlinkSync(lib.records + "/" + newref2 + ".json");
    });

    it('should create a new file when a key is created', function() {
      var doi = "10.1111/ecog.01748";
      var ref = shelf.doi.refFromDoi(doi);
      var lib = new shelf.Library(path.resolve("./test/data"));
      var newref = lib.new(ref);
      // First we check the key
      chai.assert.equal(newref, 'gray15tts');
      assert_file(lib.records + "/" + newref + ".json");
      // Then we remove the file
      fs.unlinkSync(lib.records + "/" + newref + ".json");
    });

    it('should load the updated library');

  });

});
