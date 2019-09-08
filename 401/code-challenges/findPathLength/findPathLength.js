'use strict';
const Node = require('./node');

function findPathLength ( node, parent, child ) {

  if (!node || !parent || !child ) return null;

  if ( node.value === parent ) {
    return findChildLength( node, child, 0 );
  } else {
    return findPathLength(node.left, parent, child) || findPathLength(node.right, parent, child);
  }

}

function findChildLength ( node, target, currentLength ) {

  if ( !node ) return null;

  if ( node.value === target ) return currentLength;

  return findChildLength( node.left, target, currentLength+1 ) || findChildLength( node.right, target, currentLength+1 );

}

module.exports = { findPathLength, findChildLength };
