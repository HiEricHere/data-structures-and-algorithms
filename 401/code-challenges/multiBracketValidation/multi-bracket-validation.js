'use strict';

const Stack = require('./stack');

module.exports = ( string ) => {

  if ( !string.length ) return false;

  let regex = /[[\]{}()]+/g;

  if ( !string.match(regex) ) return false;

  let filtered = string.match(regex).join('');
  let pairs = { '{' : '}', '(' : ')', '[' : ']' };
  let keys = Object.keys( pairs );
  let stack = new Stack;

  for ( let i = 0; i < filtered.length; i++ ){
    if ( keys.includes( filtered[i] ) ) {
      stack.push( filtered[i] );
    } else if ( stack.peek() && filtered[i] === pairs[ stack.top.value ] ) {
      stack.pop();
    } else return false;
  }

  return stack.top ? false : true;

};
