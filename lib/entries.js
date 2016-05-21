var fs = require('fs');
var keys = require('./keys.js');


function Entry(entry) {
  this.content = entry;
}

Entry.prototype.id = function() {
  if(this.content.id) {
    return this.content.id;
  } else {
    return undefined;
  }
}

Entry.prototype.doi = function() {
  if(this.content.DOI) {
    return this.content.DOI;
  } else {
    return undefined;
  }
}

Entry.prototype.json = function() {
  return JSON.stringify(this.content, null, 2);
}

Entry.prototype.write = function() {
  // TODO: implement
}

Entry.prototype.read = function() {
  // TODO: implement
}

module.exports.Entry = Entry;