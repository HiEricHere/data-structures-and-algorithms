'use strict';

module.exports = {};

module.exports.findPathLength = ( node, parent, child ) => {

  if (!node) return null;

  if (node.value === parent) {
    return findChildLength(node, child, 0);
  } else findPathLength(node.left, parent, child) || findPathLength(node.right, parent, child);
};

module.exports.findChildLength = ( node, child, currentLength ) => {

  if ( !node ) return null;

  if ( node.value === child ) {
    return currentLength;
  } else {
    return findChildLength( node.left, child, currentLength+1 ) || findChildLength( node.right, child, currentLength+1 );
  }

};


