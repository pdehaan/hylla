var diacritics = require('diacritics');

function cleanWord(word) {
  // Remove the punctuation
  word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  // Remove the diacritics
  word = diacritics.remove(word);
  return word;
}

function formatName(name) {
  if (name.literal) {
    fname = name.literal;
  } else {
    fname = name.family;
  }
  return cleanWord(fname).replace(/\s/g, '');
}

function Author(entry) {
  if (entry.author) {
    var A = entry.author[0];
    return formatName(A);
  } else if (entry.editor) {
    var A = entry.editor[0];
    return formatName(A);
  } else {
    return "Anonymous";
  }
}

function author(entry) {
  return Author(entry).toLowerCase();
}

module.exports.Author = Author;
module.exports.author = author;
