'use strict';

function findLeavesRecursive ( node ){

  if( !node ) return null;

  if( !node.left && !node.right ) return node.value;

  let results = [];

  if ( node.left ) results.unshift(findLeavesRecursive(node.left));
  if ( node.right ) results.unshift(findLeavesRecursive(node.right));

  return results.join(' ');

}

module.exports = findLeavesRecursive;
