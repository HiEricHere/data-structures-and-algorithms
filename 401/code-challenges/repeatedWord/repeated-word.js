'use strict';

function repeatedWord ( string ) {
  if ( !string || typeof string !== 'string' ) return null;
  let splitString = string.split(' ');
  let wordContainer = {};
  let currentWord = null;
  let i = null;
  for( i = 0; i < splitString.length; i++ ){
    currentWord = splitString[i];
    if ( wordContainer[currentWord] ) return currentWord;
    else wordContainer[currentWord] = currentWord;
  }
  return splitString.join(' ');
}

module.exports = repeatedWord;
