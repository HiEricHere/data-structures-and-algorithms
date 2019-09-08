'use strict';

const List = require('./list');

function findLeaves ( node ){

  if ( !node ) return null;

  let answer = new List;
  let stack = new List;
  stack.insert( node );

  while ( stack.head ){
    let currentNode = stack.pop().value;
    if ( !currentNode.left && !currentNode.right ) {
      answer.insert( currentNode.value );
    } else {
      if ( currentNode.left ) stack.insert( currentNode.left );
      if ( currentNode.right ) stack.insert( currentNode.right );
    }
  }

  return answer.list();

}

module.exports = findLeaves;
